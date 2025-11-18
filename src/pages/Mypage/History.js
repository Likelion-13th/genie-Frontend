import React from 'react';

const History = ({ historyData, onCancel }) => {

    const safeHistoryData = Array.isArray(historyData) ? historyData : [];
    
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
                        {safeHistoryData.map((order) => (
                            <tr key={order.orderId}> 
                                
                                <td>
                                    {order.createdAt ? order.createdAt.substring(0, 10) : '-'}
                                </td>

                                <td>
                                    {order.item_name}
                                </td>

                                <td>{order.quantity}개</td>

                                <td>
                                    {(order.totalPrice || 0).toLocaleString()}원
                                </td>

                                <td>{order.status}</td>

                                <td>
                                    {order.status !== 'CANCEL' && (
                                        <div className='history-cancel'>
                                            <div 
                                                className='history-cancel-button'
                                                onClick={() => onCancel(order.orderId)} 
                                                style={{ cursor: 'pointer' }} 
                                            >
                                                취소
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History;