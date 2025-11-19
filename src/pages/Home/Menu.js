import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <Link to="/sunglasses" className="menu-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/sun3.jpg`}
          alt="sunglasses"
          className="menu-sunglasses"
        ></img>
        <div className="text-overlay text-sunglasses">Sunglasses</div>
      </Link>
      <Link to="/Brands" className="menu-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/sun2.jpg`}
          alt="brands"
          className="menu-brands"
        ></img>
        <div className="text-overlay text-brands">Brands</div>
      </Link>
      <Link to="/glasses" className="menu-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/glas2.jpg`}
          alt="glasses"
          className="menu-glasses"
        ></img>
        <div className="text-overlay text-glasses">Glasses</div>
      </Link>
    </div>
  );
};
export default Menu;