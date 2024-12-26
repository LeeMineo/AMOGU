import React from 'react';
import './styles/Start.css';

function Start() {
  return (
    <>
      <section id="start" className="start-section">
        <div className="text-container">
          <h1>AMOGU</h1>
          <p>
            사기 걱정 없이, 모델과 기업을 안전하게 연결하는 <strong>신뢰형 간편 서비스</strong>
          </p>
        </div>
      </section>
      <section className="image-section">
        <div className="image-container">
          <img
            src="/assets/amogu_image.svg"
            alt="AMOGU 소개 이미지"
            className="start-image"
          />
        </div>
      </section>
    </>
  );
}

export default Start;
