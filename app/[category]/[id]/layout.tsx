"use client";

import ProductPageProvider from "./_components/product-page-provider";

interface ProductPageLayoutProps {
  params: {
    id: string;
    category: "best-seller" | "designer-cakes" | "pastries";
  };
  children: React.ReactNode;
}

function ProductPageLayout({
  params,
  children,
}: Readonly<ProductPageLayoutProps>) {
  return (
    <ProductPageProvider productId={params.id} category={params.category}>
      {children}
    </ProductPageProvider>
  );
}

export default ProductPageLayout;
