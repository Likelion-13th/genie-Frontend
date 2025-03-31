import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home/Home';
import Mypage from "./pages/Mypage/Mypage";
import Diffuser from "./pages/ProductPage/Diffuser";
import Perfume from "./pages/ProductPage/Perfume";
import New from "./pages/ProductPage/New";
import Brands from './pages/ProductPage/Brands';
import Sunglasses from './pages/ProductPage/Sunglasses';
import Glasses from './pages/ProductPage/Sunglasses';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/diffuser" element={<Diffuser />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/brands" element={<Brands />} /> 
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/glasses" element={<Glasses />} />       
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
