import React from 'react';
import './styles/Value.css';

function Value() {
  return (
    <section id="value" className="value-section">
      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Trust:</strong> 믿을 수 있는 신뢰형 기술로 기업과 모델 간 안전한 환경 제공
        </li>
        <li>
          <strong>Accessibility:</strong> 누구나 쉽게 사용할 수 있는 접근성 높은 플랫폼
        </li>
        <li>
          <strong>Efficiency:</strong> 빠르고 효율적인 매칭과 인증 시스템
        </li>
        <li>
          <strong>Inclusivity:</strong> 모든 사용자가 함께 참여할 수 있는 포용적 플랫폼
        </li>
      </ul>
    </section>
  );
}

export default Value;
