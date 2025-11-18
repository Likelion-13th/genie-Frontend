import React from 'react';
const Status = ({ orderStatusData }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount)
    }
    return(
        <div className='status-container'> {/*빨간박스스*/}
            <div className='status-title'>나의 주문 현황</div>
            <div className='status-sections'>
                <div className="status-section"> {/*노란란스스*/}
                    <div className='status-stat-label'>배송중</div> {/*초록박스스*/}
                    <div className='status-stat-value'>
                        <span>{formatCurrency(orderStatusData?.PROCESSING)}</span>
                    </div>{/*초록록박스스*/}
                </div>
                <div className="status-section"> {/*노란란스스*/}
                    <div className='status-stat-label'>배송완료</div> {/*초록박스스*/}
                    <div className='status-stat-value'>
                        <span>{formatCurrency(orderStatusData?.COMPLETE)}</span>
                    </div>{/*초록록박스스*/}
                </div>
                <div className="status-section"> {/*노란란스스*/}
                    <div className='status-stat-label'>주문취소</div> {/*초록박스스*/}
                    <div className='status-stat-value'>
                        <span>{formatCurrency(orderStatusData?.CANCEL)}</span>
                    </div>{/*초록박스*/}
                </div>
            </div>
        </div>
    )
}


export default Status;