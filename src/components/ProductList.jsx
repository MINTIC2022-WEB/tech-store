import React from "react";
import ProductContainer from "./ProductContainer";
import { Product } from "./Product";
import data from "../products.json";

const ProductList = () => {
  return (
    <ProductContainer>

      {data.map((product) => (
        <Product key={product.id} name={product.name} stock={product.stock} description={product.description} discount={product.discount} oldPrice={product.price} newPrice={product.price - product.price * product.discount / 100} />
      ))}

    </ProductContainer>
  );
};

export default ProductList;
