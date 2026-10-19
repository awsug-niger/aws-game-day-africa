import React from 'react';

const OrganizerCard = ({ organizer, isAwsHelper = false }) => {
  const socialLinks = [];

  if (organizer.linkedin) {
    socialLinks.push(
      <a
        key="linkedin"
        href={organizer.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    );
  }

  if (organizer.twitter) {
    socialLinks.push(
      <a
        key="twitter"
        href={`https://twitter.com/${organizer.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    );
  }

  return (
    <div className={`organizer-card`}>
      <div className="organizer-avatar">
        {organizer.avatar.startsWith('/') ? (
          <img src={organizer.avatar} alt={organizer.name} className="avatar-image" />
        ) : (
          organizer.avatar
        )}
      </div>
      <h3>{organizer.name}</h3>
      <p className="role">{organizer.role}</p>
      <p className="organization">{organizer.organization}</p>
      <p className="bio">{organizer.bio}</p>

      {socialLinks.length > 0 && (
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' • '}
              {link}
            </React.Fragment>
          ))}
        </div>
      )}
      {organizer.email && (
        <div className="contact-email">
          <a href={`mailto:${organizer.email}`} className="email-link">
            <span className="email-icon">✉️</span>
            {organizer.email}
          </a>
        </div>
      )}
    </div>
  );
};

export default OrganizerCard;