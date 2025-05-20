import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Sunglasses = () => {
    const products = [
        {
            id: 1,
            name: "sunglasses",
            brand: "brand",
            price: 10000,
            imagePath: "/img/diffuser_6.png",
            isNew: false,
        },
        {
            id: 2,
            name: "aunglasses",
            brand: "brand",
            price: 20000,
            imagePath: "/img/diffuser_7.png",
            isNew: false,
        },
        {
            id: 3,
            name: "sunglasses",
            brand: "brand",
            price: 30000,
            imagePath: "/img/diffuser_8.png",
            isNew: false,
        },
        {
            id: 4,
            name: "sunglasses",
            brand: "brand",
            price: 40000,
            imagePath: "/img/diffuser_9.png",
            isNew: false,
        },
        {
            id: 5,
            name: "sunglasses",
            brand: "brand",
            price: 50000,
            imagePath: "/img/diffuser_10.png",
            isNew: false,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = (product) => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    return(
        <div>
            <Banner title="Sunglasses" imagePath={"/banner_perfume.png"} />
            <div className='product-container'>
                <div className='product-grid'>
                    {products.map((product) => (
                        <ProductCard 
                         key={product.id}
                         product={product}
                         onClick={() => handleCardClick(product)} 
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && 
            <PayModal product={selectedProduct} 
            onClose={() => setModalOpen(false)}/>}
        </div>
    );
};


export default Sunglasses;