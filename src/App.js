import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/productData";
import Basket from "./components/Basket";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    const doesExist = cartItems.find((x) => x.id === product.id);
    if (doesExist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...doesExist, qty: doesExist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  function handleRemove(product) {
    const doesExist = cartItems.find((x) => x.id === product.id);
    if (doesExist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...doesExist, qty: doesExist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <>
      <Header />
      <div className="main">
        <Main handleAddToCart={handleAddToCart} products={products} />
        <Basket
          handleAddToCart={handleAddToCart}
          handleRemove={handleRemove}
          cartItems={cartItems}
        />
      </div>
    </>
  );
}

export default App;
