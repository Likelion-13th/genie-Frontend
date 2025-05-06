import React from 'react';
const History = () => {
    const onCancel = () => {
        //API호출출
        alert("취소")
    }
    return(
        <div className='history-container-wrap'>
            <div className='history-title'>나의 쇼핑 내역</div>
            <div className='history-container'>
                <table className='history-table' cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className='history-product-info'>
                                    <div className='history-img'>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/img/jennysun.jpg`}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: "bold" }}>제니가 쓰다 버린 선글라스</div>
                                        <div style={{ fontSize: "14px", color: "#666" }}>제니의 보물창고</div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>2,000,000,000원</td>
                            <td>배송중</td>
                            <td>
                                <div className='history-cancel'>
                                    <div className='history-cancel-button'
                                    onClick={onCancel}
                                >취소</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default History;