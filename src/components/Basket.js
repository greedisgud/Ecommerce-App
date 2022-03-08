import React from "react";

function Basket(props) {
  const { cartItems, handleAddToCart, handleRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div className="basket">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div> Cart is Empty </div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="cartItemName">{item.name}</div>
          <div>
            <button
              className="addBtn btn"
              onClick={() => handleAddToCart(item)}
            >
              +
            </button>
            <button
              className="removeBtn btn"
              onClick={() => handleRemove(item)}
            >
              -
            </button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div>Items Price : ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Basket;
