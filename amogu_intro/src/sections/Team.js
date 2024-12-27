import React from 'react';
import './styles/Team.css';

const teamData = [
  {
    name: "Chae Jung Won",
    role: "백엔드 개발자",
    description: "AI개발, 다수 프로젝트 경험 보유",
    image: "/assets/sli.png", // 팀원 캐릭터 이미지 경로
  },
  {
    name: "Kang Hyee Kun",
    role: "디자이너, 마케팅, 서비스 관리",
    description: "다수의 프로젝트 경험 보유",
    image: "/assets/octo.png", // 팀원 캐릭터 이미지 경로
  },
  {
    name: "Lee Min Seo",
    role: "프론트 개발자",
    description: "다수의 프로젝트 경험 보유",
    image: "/assets/sli.png", // 팀원 캐릭터 이미지 경로
  },
];

function Team() {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">우리팀은 항상 사용자들의 <strong>편리성</strong>을 생각합니다.</h2>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`${member.name} 이미지`} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
