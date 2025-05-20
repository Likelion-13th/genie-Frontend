import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Brands = () => {
    const products = [
        {
            id: 1,
            name: "perfume1",
            brand: "brand",
            price: 10000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "perfume2",
            brand: "brand",
            price: 20000,
            imagePath: "/img/perfume_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "perfume3",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "perfume4",
            brand: "brand",
            price: 40000,
            imagePath: "/img/perfume_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "perfume5",
            brand: "brand",
            price: 50000,
            imagePath: "/img/perfume_5.png",
            isNew: false,
        },
        {
            id: 6,
            name: "perfume6",
            brand: "brand",
            price: 60000,
            imagePath: "/img/perfume_6.png",
            isNew: false,
        },
        {
            id: 7,
            name: "perfume7",
            brand: "brand",
            price: 70000,
            imagePath: "/img/perfume_7.png",
            isNew: false,
        },
        {
            id: 8,
            name: "perfume8",
            brand: "brand",
            price: 80000,
            imagePath: "/img/perfume_8.png",
            isNew: false,
        },
        {
            id: 9,
            name: "perfume99",
            brand: "brand",
            price: 90000,
            imagePath: "/img/perfume_9.png",
            isNew: false,
        },
        {
            id: 10,
            name: "perfume10",
            brand: "brand",
            price: 100000,
            imagePath: "/img/perfume_10.png",
            isNew: false,
        },
        {
            id:11,
            name: "perfume11",
            brand: "brand",
            price: 110000,
            imagePath: "/img/perfume_11.png",
            isNew: false,
        },
        {
            id: 12,
            name: "perfume12",
            brand: "brand",
            price: 120000,
            imagePath: "/img/perfume_12.png",
            isNew: false,
        },
        {
            id: 13,
            name: "perfume13",
            brand: "brand",
            price: 130000,
            imagePath: "/img/perfume_13.png",
            isNew: false,
        },
        {
            id: 14,
            name: "perfume14",
            brand: "brand",
            price: 140000,
            imagePath: "/img/perfume_14.png",
            isNew: false,
        },
        {
            id: 15,
            name: "perfume15",
            brand: "brand",
            price: 150000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = (product) => {
        setSelectedProduct(null);
        setModalOpen(false);
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div>
            <Banner title="Brands" imagePath={"/banner_perfume.png"} />
            <div className='product-container'>
                <div className='product-grid'>
                    {currentProducts.map((product) => (
                        <ProductCard 
                         key={product.id}
                         product={product}
                         onClick={() => handleCardClick(product)} 
                        />
                    ))}
                </div>
            </div>
            <div className="paging">
                {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}
                    className='page-buttonp'>
                    Prev
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`page-button ${currentPage === pageNumber ? "active" : ""}`}
                    >
                        {pageNumber}
                    </button>
                    )
                )}
                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}
                    className='page-buttonp'>
                    Next
                    </button>
                )}
            </div>
            {isModalOpen && 
            <PayModal product={selectedProduct}
            onClose={() => setModalOpen(false)} />}
        </div>
    );
};


export default Brands;