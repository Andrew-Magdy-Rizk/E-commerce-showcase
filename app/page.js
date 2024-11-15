"use client";
import { Provider } from "react-redux";
import Hero from "./_Components/Hero";
import ProductsSection from "./_Components/ProductsSection";
import store from "./_RTK/store";

export default function Home() {
  return (
    <div>
      <Hero />
      <Provider store={store}>
        <ProductsSection />
      </Provider>
    </div>
  );
}
