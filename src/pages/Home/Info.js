import React from "react";
import "../../styles/Home.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-section">
        <img
          src={`${process.env.PUBLIC_URL}/img/companyin.jpg`}
          alt="img-back"
          className="info-image-back"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/companyin.jpg`}
          alt="img-front"
          className="info-image-front"
        />
        <div className="about-text">ABOUT US</div>
      </div>
      <div className="info-section2">
        <div className="info-text">
          <h2>아이웨어<br/>
          유니크함</h2>
        </div>
        <div className="info-text2">
          <p>'멋쟁이사자처럼'의 아이웨어는</p>
          <p>기하학적이면서도 강렬한 에너지가 표현된</p>
          <p>  
            유기적인 라인 디테일과<br/>
            장식의 조화로 현대적인 무드가 돋보이는
          </p>
          <div>정교함과 예술성이 반영된</div>
          <p>지금, 아이웨어의 새로운 기준을 제시합니다.</p>
        </div>
      </div>
    </div>
  );
};
export default Info;

