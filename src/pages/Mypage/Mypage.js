import React, { useState, useEffect } from 'react';
import "../../styles/Mypage.css";
import Profile from './Profile';
import Status from './Status';
import Address from './Address';
import History from './History';
import axios from 'axios';
import { useCookies } from "react-cookie";

const Mypage = () => {
    const [cookies] = useCookies(["accessToken"]);
    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [historyData, setHistoryData] = useState([]);

    // 주소 저장 핸들러
    const handleSave = async (zipcode, address, addressDetail) => {
        try {
            const response = await axios.post("/users/address",
                { "zipcode": zipcode, "address": address, "addressDetail": addressDetail },
                { headers: { "Content-Type": "application/json", Authorization: `Bearer ${cookies.accessToken}` } }
            );
            if (response.data.isSuccess) alert("주소 성공적으로 저장되었습니다.");
            else alert(`주소 저장 실패: ${response.data.message}`);
        } catch (error) {
            console.error(error);
            alert("주소 저장 중 오류 발생");
        }
    }

    // 주문 취소 핸들러 (에러 메시지 강화)
    const handleCancelOrder = async (orderId) => {
        if (!orderId) {
            alert("오류: 주문 번호(ID)가 없습니다.");
            return;
        }
        if(!window.confirm("정말 주문을 취소하시겠습니까?")) return;

        try {
            const response = await axios.put(`/orders/${orderId}/cancel`, {}, {
                headers: { Authorization: `Bearer ${cookies.accessToken}` },
            });

            // 성공 시
            if(response.status === 200 && response.data.isSuccess) {
                alert("주문이 정상적으로 취소되었습니다.");
                window.location.reload(); // 새로고침해서 상태 반영
            } else {
                alert(`취소 실패: ${response.data.message}`);
            }
        } catch (error) {
            console.error("주문 취소 에러:", error);
            
            // 👇 서버가 알려주는 진짜 거절 사유를 팝업으로 보여줍니다.
            if (error.response) {
                const errorMsg = error.response.data.message || JSON.stringify(error.response.data);
                alert(`[취소 실패] 서버 응답: ${errorMsg}`);
            } else {
                alert(`네트워크 오류가 발생했습니다: ${error.message}`);
            }
        }
    };

    // 데이터 불러오기
    useEffect(() => {
        // 1. 프로필 조회
        axios.get("/users/profile", {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
        }).then((res) => {
            setProfileData({
                usernickname: res.data.result.usernickname,
                recentTotal: res.data.result.recentTotal,
                maxMileage: res.data.result.maxMileage,
            });
            setOrderStatusData(res.data.result.orderStatusData || {});
        }).catch((err) => console.log("프로필 로딩 실패", err));

        // 2. 주문 내역 조회
        const fetchOrders = async () => {
            try {
                const response = await axios.get("/orders", {
                    headers: { Authorization: `Bearer ${cookies.accessToken}` },
                });
                // 서버 데이터를 그대로 state에 저장
                setHistoryData(response.data.result); 
            } catch (error) {
                console.error("주문 내역 로딩 실패", error);
            }
        };
        fetchOrders();
    }, [cookies.accessToken]);


    return(
        <div className='page-container'>
            <Profile profileData={profileData} />
            <Status orderStatusData={orderStatusData} />
            <Address onSave={handleSave} /> 
            <History historyData={historyData} onCancel={handleCancelOrder} />
        </div>
    )
}

export default Mypage;