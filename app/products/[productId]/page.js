"use client";
import React from "react";
import ProductDetails from "../_components/ProductDetails";

function page({ params }) {
  const { productId } = params;
  return <ProductDetails productId={productId} />;
}

export default page;
