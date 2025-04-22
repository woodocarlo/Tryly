import React from "react";
import SearchIcon from "../assets/search.png";
import AccountIcon from "../assets/acc.png";
import CartIcon from "../assets/cart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      {/* Search Bar */}
      <div className="navbar-section searchbar">
        <img src={SearchIcon} alt="Search" className="icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      {/* Logo */}
      
      <Link to="/Home">
      <div className="navbar-section logo">
        <h1 className="brand-name">TRYLY</h1>
      </div>
</Link>

      {/* Account & Cart */}
      <div className="navbar-section account-cart">
       <Link to='/Login'> <div className="account">
          <img src={AccountIcon} alt="Account" className="icon" />
          <h3 className="acc-h3">Account</h3>
        </div></Link>
        <Link to='/Cart'> <div className="cart">
          <img src={CartIcon} alt="Cart" className="icon" />
          <h3 className="acc-h3">Cart</h3>
        </div></Link>
      </div>
    </header>
    
  );
}

export default Navbar;
