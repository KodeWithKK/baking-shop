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
import { getCakeByIdAndCategory } from "@/data/cake";

interface IProductPageContext {
  cakeData: Cake | null | undefined;
  isFetching: boolean;
  isError: boolean;
  isAlreadyInCart: boolean;
  selectedQuantity: number;
  selectedWeight: number;
  cakeMessage: string;
  handleAddToCart: () => void;
  toggleCartModal: () => void;
  setSelectedQuantity: (qty: number) => void;
  setSelectedWeight: (weight: number) => void;
  setCakeMessage: (message: string) => void;
}

const ProductPageContext = createContext<IProductPageContext | null>(null);

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);

  if (!context) {
    throw new Error(
      "useProductPageContext must be used within a ProductPageProvider",
    );
  }

  return context;
};

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
      getCakeByIdAndCategory(
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
        cakeData.category !== "PASTRIES" ? selectedWeight : null,
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
