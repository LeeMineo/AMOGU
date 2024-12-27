import React, { useEffect, useRef } from 'react';
import './styles/Value.css';

function Value() {
  const valueRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // 다시 사라지도록 설정
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // 10%가 보이면 애니메이션 실행
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Title 애니메이션 관찰
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Value items 애니메이션 관찰
    const items = valueRef.current.querySelectorAll('.value-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="value" className="value-section">
      <h2 className="value-title" ref={titleRef}>
        모델과 기업을 <strong>신뢰와 접근성</strong>으로 연결하며, 누구나 <strong>안전하게 시작할 수 있는 환경</strong>을 제공합니다.
      </h2>
      <div className="value-container" ref={valueRef}>
        {/* Trust */}
        <div className="value-item">
          <img src="/assets/value_icon1.svg" alt="Trust Icon" className="value-icon" />
          <h3>Trust</h3>
          <p>인증된 기업과 AI 보정 감지 기술로 사기 걱정 없는 안전한 플랫폼 제공</p>
          <p>에스크로 결제를 통해 모델과 기업 간 공정하고 투명한 거래 보장</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Accessibility */}
        <div className="value-item">
          <img src="/assets/value_icon2.svg" alt="Accessibility Icon" className="value-icon" />
          <h3>Accessibility</h3>
          <p>누구나 모델로 데뷔할 수 있는 기회를 제공하는 직관적 인터페이스</p>
          <p>초보자를 위한 포트폴리오 가이드와 사용자 친화적인 설계</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Efficiency */}
        <div className="value-item">
          <img src="/assets/value_icon3.svg" alt="Efficiency Icon" className="value-icon" />
          <h3>Efficiency</h3>
          <p>공모전과 일반 구인을 통해 모델과 기업이 원하는 방식으로 빠르게 연결</p>
          <p>스튜디오 대여와 다양한 부가 서비스를 통해 프로젝트 준비 간소화</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />

        {/* Inclusivity */}
        <div className="value-item">
          <img src="/assets/value_icon4.svg" alt="Inclusivity Icon" className="value-icon" />
          <h3>Inclusivity</h3>
          <p>피팅모델, 특정 부위 모델, 외국인 모델 등 세분화된 수요를 충족</p>
          <p>모든 체형과 개성을 존중하며, 다양한 프로젝트와 모델에게 기회를 제공</p>
        </div>
        <img src="/assets/value_line.svg" alt="Divider" className="value-divider" />
      </div>
    </section>
  );
}

export default Value;
