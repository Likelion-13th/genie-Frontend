import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <header>
      <div className="header-container">
        <div className="header-section-left">
          <div className="header-title">LIKELION</div>
        </div>
        <div className="header-section-right">
          <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
            New
          </Link>
          <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
            Mypage
          </Link>
          <Link to="/brands" className={currentPage === "/brands" ? "active" : ""}>
            Brands
          </Link>
          <Link to="/sunglasses" className={currentPage === "/sunglasses" ? "active" : ""}>
            Sunglasses
          </Link>
          <Link to="/glasses" className={currentPage === "/glasses" ? "active" : ""}>
            Glasses
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
