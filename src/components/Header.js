import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Header.css";


const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;



  return (
    <header>
      <div className={'header-container {currentPage === "/mypage" ? "mypage-active" : ""}'}
      style={currentPage === "/mypage" ? { backgroundColor: "lightblue" } : {}}
      >

        <div className="header-section-left">
          <div className="header-title">
            <Link to="/home" className={currentPage === "/home" ? "active" : ""}>
              LIKELION
            </Link>
          </div>
        </div>
        <div className="header-section-right">
          <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
            New
          </Link>
          <Link to="/brands" className={currentPage === "/brands" ? "active" : ""}>
            Brands
          </Link>
          <Link to="/sunglasses" className={currentPage === "/sunglasses" ? "active" : ""}>
            Sunglasses
          </Link>
          <Link to="/glasses" className={currentPage === "/glasses" ? "active" : ""}>
          glasses
          </Link>
          <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
            Mypage
          </Link>
        </div>
      </div>
    </header>
  );
}



export default Header;