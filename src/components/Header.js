import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div>
        <a href="#/">
          <h1>My Wonderful Store</h1>
        </a>
      </div>
      <div className="right-links">
        <a href="#/cart">Cart</a>
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
