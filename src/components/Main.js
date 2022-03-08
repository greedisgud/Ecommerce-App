import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, handleAddToCart } = props;
  return (
    <main>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </main>
  );
}

export default Main;
