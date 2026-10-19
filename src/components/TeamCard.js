import React from 'react';

const TeamCard = ({ team }) => {
  return (
    <div className="organizer-card event-organizer">
      <div className="organizer-avatar">{team.avatar}</div>
      <h3>{team.name}</h3>
      <p className="role">{team.role}</p>
      <p className="organization">{team.organization}</p>
      <p className="bio">{team.bio}</p>
    </div>
  );
};

export default TeamCard;