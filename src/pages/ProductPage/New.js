import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const New = () => {
    const products = [
        {
            id: 1,
            name: "new1",
            brand: "brand",
            price: 10000,
            imagePath: "/img/diffuser_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "new2",
            brand: "brand",
            price: 20000,
            imagePath: "/img/diffuser_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "new3",
            brand: "brand",
            price: 30000,
            imagePath: "/img/diffuser_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "new4",
            brand: "brand",
            price: 40000,
            imagePath: "/img/diffuser_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "new5",
            brand: "brand",
            price: 50000,
            imagePath: "/img/diffuser_5.png",
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
            <Banner title="New" imagePath={"/banner_perfume.png"} />
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


export default New;