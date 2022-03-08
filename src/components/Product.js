import React from "react";

function Product(props) {
  const { product, handleAddToCart } = props;
  return (
    <div className="products">
      <img className="image" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
