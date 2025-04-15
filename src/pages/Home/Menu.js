import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/sunglasses" className="menu-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/diffuser1212.jpg`}
          alt="sunglasses"
          className="menu-sunglasses"
        ></img>
        <div className="text-overlay text-sunglasses">Sunglasses</div>
      </Link>
      <Link to="/Brands" className="menu-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/diffuser1313.jpg`}
          alt="brands"
          className="menu-brands"
        ></img>
        <div className="text-overlay text-brands">Brands</div>
      </Link>
    </div>
  );
};
export default Menu;