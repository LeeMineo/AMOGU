import React from 'react';
import './styles/Team.css';

function Team() {
  return (
    <section id="team" className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/assets/images/team1.png" alt="Team Member" />
          <h3>Lee Min Seo</h3>
          <p>Front-End Developer</p>
        </div>
        <div className="team-member">
          <img src="/assets/images/team2.png" alt="Team Member" />
          <h3>Kim Soo Jin</h3>
          <p>Back-End Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
