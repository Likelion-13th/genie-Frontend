import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Glasses = () => {
    const products = [
        {
            id: 1,
            name: "dp",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "perfume",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 3,
            name: "perfume",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 4,
            name: "perfume",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 5,
            name: "perfume",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
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
            <Banner title="Glasses" imagePath={"/banner_perfume.png"} />
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
            {isModalOpen && <PayModal product={selectedProduct} />}
        </div>
    );
};


export default Glasses;