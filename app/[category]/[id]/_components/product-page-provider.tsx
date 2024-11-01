import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Cake, CakeCategory } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import { useAppContext } from "@/context/app-provider";
import { getCake } from "@/data/cake";

const defaultValue = {
  cakeData: {} as Cake | null | undefined,
  isFetching: true,
  isError: false,
  isAlreadyInCart: false,
  selectedQuantity: 1,
  selectedWeight: 0.5,
  cakeMessage: "",
  handleAddToCart: () => {},
  toggleCartModal: () => {},
  setSelectedQuantity: (qty: number) => {},
  setSelectedWeight: (weight: number) => {},
  setCakeMessage: (message: string) => {},
};

const ProductPageContext = createContext(defaultValue);
export const useProductPageContext = () => useContext(ProductPageContext);

interface ProductPageProps {
  productId: string;
  category: "best-seller" | "designer-cakes" | "pastries";
  children: React.ReactNode;
}

function ProductPageProvider({
  productId,
  category,
  children,
}: Readonly<ProductPageProps>) {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [selectedWeight, setSelectedWeight] = useState<number>(0.5);
  const [cakeMessage, setCakeMessage] = useState<string>("");

  const { cartItems, addToCart, toggleCartModal } = useAppContext();

  const {
    data: cakeData,
    isFetching,
    isError,
  } = useQuery({
    queryFn: () =>
      getCake(
        productId,
        category.toUpperCase().replace("-", "_") as CakeCategory,
      ),
    queryKey: ["cake", productId],
  });

  const isAlreadyInCart = useMemo(() => {
    return !!cartItems.find(
      (item) =>
        item.cake.id === productId && item.cakeWeight === selectedWeight,
    );
  }, [cartItems, selectedWeight, productId]);

  const handleAddToCart = useCallback(() => {
    if (cakeData) {
      addToCart(
        productId,
        selectedQuantity,
        cakeData.category !== "PASTRIES" ? selectedWeight : undefined,
        cakeMessage,
        cakeData,
      );
    }
  }, [
    cakeData,
    selectedWeight,
    selectedQuantity,
    cakeMessage,
    productId,
    addToCart,
  ]);

  return (
    <ProductPageContext.Provider
      value={{
        cakeData,
        isFetching,
        isError,
        isAlreadyInCart,
        selectedQuantity,
        selectedWeight,
        cakeMessage,
        handleAddToCart,
        toggleCartModal,
        setSelectedQuantity,
        setSelectedWeight,
        setCakeMessage,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
}

export default ProductPageProvider;
