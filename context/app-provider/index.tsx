"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const defaultValues = {
  showCartModal: false as boolean,
  toggleCartModal: () => {},
};

const AppContext = createContext(defaultValues);
export const useAppContext = () => useContext(AppContext);

type Props = {
  children: React.ReactNode;
};

function AppProvider({ children }: Readonly<Props>) {
  const [showCartModal, setShowCartModal] = useState<boolean>(false);

  const toggleCartModal = useCallback(() => {
    setShowCartModal((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      showCartModal,
      toggleCartModal,
    }),
    [showCartModal, toggleCartModal],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
