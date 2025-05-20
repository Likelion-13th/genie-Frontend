import React from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";

const Perfume = () => {
    const products = [
        {
            id: 1,
            name: "perfume",
            brand: "brand",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: false,
        },
    ];
    return(
        <div>
            <Banner title="Perfume" imagePath={"/banner_perfume.png"} />
            <div className='product-container'>
                <div className='product-grid'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Perfume;