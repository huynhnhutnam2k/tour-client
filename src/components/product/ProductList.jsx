"use client";
import { fetchProductsList } from "@/redux/product";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  return (
    <section className="product-list">
      <div className="container">
        <div className="grid grid-cols-3">
          {products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
