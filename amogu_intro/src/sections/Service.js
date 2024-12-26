import React from 'react';
import './styles/Service.css';

function Service() {
  return (
    <section id="service" className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">모델 지원</div>
        <div className="service-card">공간 대여</div>
        <div className="service-card">기타 서비스</div>
      </div>
    </section>
  );
}

export default Service;
