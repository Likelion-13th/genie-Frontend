import React, { useState } from "react";
import "../../styles/ProductPage.css"
import PayModal from "../../components/PayModal";

const Banner = ({title, imagePath}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    };

    const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    };


    return (
        <div>
            <div className="banner">
                <img
                    src={`${process.env.PUBLIC_URL}/img/${imagePath}`}
                    alt={title}
                    className="banner-image"
                />
                <div className="banner-title">{title}</div>
            </div>
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Banner;