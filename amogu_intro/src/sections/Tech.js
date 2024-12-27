import React, { useEffect, useRef } from 'react';
import './styles/Tech.css';

const techData = [
  {
    title: "AI 기반 보정 감지 기술",
    description: "모델 프로필 사진의 보정 여부를 AI가 자동으로 감지하여 10% 미만 보정된 사진에 '신뢰 사진' 태그 부여. 과도한 보정 문제를 해결하고, 기업이 실제와 가까운 모델 프로필을 확인할 수 있도록 지원.",
  },
  {
    title: "안전 결제 시스템 (에스크로)",
    description: "에스크로 결제를 통해 계약금을 안전하게 보관하고, 거래 완료 후 정산. 모델료 미지급과 같은 분쟁 위험을 최소화하여 안전한 거래 환경 제공.",
  },
  {
    title: "데이터 기반 매칭 알고리즘",
    description: "기업의 프로젝트 요구사항과 모델의 프로필을 분석해 최적의 후보를 추천. 자연어 처리(NLP)와 머신러닝을 활용한 스마트 매칭 시스템으로 캐스팅 시간 절감.",
  },
  {
    title: "실시간 커뮤니케이션 플랫폼",
    description: "플랫폼 내에서 기업과 모델이 안전하게 소통할 수 있는 실시간 메시지 시스템. 개인정보를 보호하면서 계약 및 촬영 세부사항을 간편히 논의 가능.",
  },
  {
    title: "클라우드 기반 데이터 관리",
    description: "모델 프로필, 프로젝트 공고, 리뷰 데이터를 안정적으로 관리하는 클라우드 인프라. 대규모 사용자 증가에도 빠르고 안정적인 서비스 제공.",
  },
  {
    title: "다국어 및 글로벌 확장 지원",
    description: "글로벌 시장 진출을 대비한 다국어 지원 시스템(한국어, 영어 등). 해외 결제와 글로벌 사용자 매칭을 위한 API 기반 인프라 구축.",
  },
];

function Tech() {
  const titleRef = useRef();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // 뷰포트에서 벗어나면 클래스 제거
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // 10% 이상 보이면 실행
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="tech-section">
      <h2 className="tech-title" ref={titleRef}>
        <strong>AI 기술</strong>과 <strong>인증 시스템</strong>을 통해 모델과 기업 간 <strong>신뢰할 수 있는 매칭 서비스</strong>를 제공합니다.
      </h2>
      <div className="tech-grid">
        {techData.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon"></div>
            <div className="tech-content">
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;
