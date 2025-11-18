import React, { useState, useEffect } from "react";
import "../styles/PayModal.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const PayModal = ({ product, onClose }) => {
    const [cookies] = useCookies(["accessToken"]);

    const safePrice = product?.price 
        ? Number(String(product.price).replace(/[^0-9]/g, "")) 
        : 0;

    const [quantity, setQuantity] = useState(1);
    const [maxMileage, setMaxMileage] = useState(0);
    const [mileageToUse, setMileageToUse] = useState(0); 
    const [totalItemPrice, setTotalItemPrice] = useState(safePrice);
    const [finalPrice, setFinalPrice] = useState(safePrice);

    const handleQuantityChange = (type) => {
        const newQuantity = type === "plus" ? quantity + 1 : Math.max(1, quantity - 1);
        setQuantity(newQuantity);
    };

    const handleMileageChange = (e) => {
        const value = e.target.value;
        let numericValue = Number(value.replace(/[^0-9]/g, ""));
        
        const limit = Math.min(maxMileage || 0, totalItemPrice || 0);
        if (numericValue > limit) numericValue = limit;

        setMileageToUse(numericValue);
    };

    const handlePayment = async () => {
        if (!cookies.accessToken) {
            alert("로그인이 필요합니다.");
            return;
        }
        if (!product) return;

        try {
            const response = await axios.post("/orders",
                {
                    itemId: product.id,
                    quantity: quantity,
                    mileageToUse: mileageToUse || 0,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );

            if (response.data.isSuccess) {
                alert("주문 성공");
                onClose();
            } else {
                alert(`주문실패: ${response.data.message}`);
            }
        } catch (error) {
            console.error("결제 오류:", error);
            if (error.response) {
                alert(`서버 에러 (${error.response.status}): ${JSON.stringify(error.response.data)}`);
            } else {
                alert(`오류 발생: ${error.message}`);
            }
        }
    };

    useEffect(() => {
        const currentTotalItemPrice = safePrice * quantity;
        setTotalItemPrice(currentTotalItemPrice);
        
        if (mileageToUse > currentTotalItemPrice) {
            setMileageToUse(currentTotalItemPrice);
        }

        setFinalPrice(Math.max(currentTotalItemPrice - mileageToUse, 0));
    }, [quantity, mileageToUse, safePrice]);

    useEffect(() => {
        axios.get("/users/mileage", {
            headers: {
                accept: "*/*",
                Authorization: `Bearer ${cookies.accessToken}`,
            },
        })
        .then((response) => {
            const mileage = response.data.result ? response.data.result.maxMileage : 0;
            setMaxMileage(mileage || 0); 
        })
        .catch((err) => {
            console.log("마일리지 조회 실패", err);
            setMaxMileage(0);
        });
    }, [cookies.accessToken]);

    if (!product) return null;

    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}></div>

            <div className="container">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="title">주문/결제</div>

                <div className="section">
                    <div className="section-title">주문상품</div>
                    <div className="order-info">
                        <img src={product.imagePath} alt={product.name} className="order-image" />
                        <div>
                            <div className="order-name">{product.name}</div>
                            <div className="order-brand">{product.brand}</div>
                            <div className="order-price">
                                {(safePrice || 0).toLocaleString()} 원
                            </div>

                            <div className="quantity-control">
                                <button className="quantity-button" onClick={() => handleQuantityChange("minus")}>-</button>
                                <div className="quantity">{quantity}</div>
                                <button className="quantity-button" onClick={() => handleQuantityChange("plus")}>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">배송지</div>
                    <div className="user-ifo">지니</div>
                    <div className="user-ifo">010</div>
                    <div className="user-ifo">경기도</div>
                </div>

                <div className="section">
                    <div className="section-title">마일리지 사용</div>
                    <div className="mileage-info">
                        현재 사용 가능한 마일리지: {(maxMileage || 0).toLocaleString()} 원
                    </div>
                    <input
                        className="mileageToUse-input"
                        placeholder="0"
                        type="text"
                        value={mileageToUse || ""}
                        onChange={handleMileageChange}
                    />
                </div>

                <div className="section">
                    <div className="section-title">총 결제금액</div>
                    <div className="total">
                        <div>
                            <div className="total-item">총 상품금액</div>
                            <div className="total-item">마일리지 할인</div>
                            <div className="total-item">배송비</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="total-value">{(totalItemPrice || 0).toLocaleString()} 원</div>
                            <div className="total-value discount">-{Number(mileageToUse).toLocaleString()} 원</div>
                            <div className="total-value">무료배송</div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #eee', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
                        <div>최종 결제 금액</div>
                        <div style={{ color: 'red', fontSize: '1.2em'}}>
                            {(finalPrice || 0).toLocaleString()} 원
                        </div>
                    </div>
                </div>
        
                <button className="pay-button" onClick={handlePayment}>결제하기</button>
            </div>
        </div>
    );
};

export default PayModal;