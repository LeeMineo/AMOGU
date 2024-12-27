import React, { useState, useEffect } from 'react';
import './styles/Service.css';

const serviceData = [
  {
    title: "공모전(오디션) 기반 모델 매칭",
    description1: "다양한 모델을 한꺼번에 비교·선정할 수 있는 오디션 공모 시스템 제공",
    description2: "피팅모델, 특정 부위 모델(손, 입, 다리 등), 외국인 모델 등 프로젝트에 맞는 최적의 모델 매칭",
  },
  {
    title: "프로젝트 기반 모델 매칭",
    description1: "기업의 요구사항에 따라 맞춤형 모델을 연결해주는 서비스",
    description2: "모델의 전문성과 기업의 요구를 빠르게 충족",
  },
  {
    title: "스튜디오 대여와 부가 서비스",
    description1: "촬영 스튜디오 대여와 부가적인 스타일링 서비스 제공",
    description2: "모델과 기업 간의 원활한 프로젝트 진행 지원",
  },
  {
    title: "글로벌 모델 매칭",
    description1: "글로벌 기업과 모델을 연결하여 국제적인 프로젝트 지원",
    description2: "다양한 언어와 문화적 요구를 반영한 맞춤형 서비스",
  },
  {
    title: "AI 기반 모델 추천",
    description1: "AI 분석을 통해 모델의 포트폴리오와 기업의 요구를 매칭",
    description2: "효율적인 모델 매칭으로 프로젝트 성공률 극대화",
  },
];

function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 5000); // 5초 간격
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="service" className="service-section">
      <h2 className="service-title">
        모델 지원부터 모델 구인까지, <strong>복잡한 절차 없이 간편하게</strong> 이용할 수 있는 올인원 플랫폼입니다.
      </h2>
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-line">
              <img src="/assets/service_line.svg" alt="Divider Line" />
            </div>
            <div className="service-card-contents">
              <h3 className="service-title-small">Service {index + 1}</h3>
              <h3 className="service-title-large">{service.title}</h3>
              <p>{service.description1}</p>
              <p>{service.description2}</p>
              <p className="read-more">read more →</p>
            </div>
          </div>
        ))}
      </div>
      <div className="indicators">
        {serviceData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Service;
