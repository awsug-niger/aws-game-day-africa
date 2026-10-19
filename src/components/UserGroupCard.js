import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const UserGroupCard = ({ group }) => {
  const { t } = useLanguage();
  const hasValidMeetupUrl = group.meetupUrl && group.meetupUrl !== '#';

  // Extract flag emoji from country string
  const flagEmoji = group.country.split(' ')[0];

  return (
    <div className="usergroup-list-item">
      <div className="usergroup-flag">
        <div className="flag-circle">{flagEmoji}</div>
      </div>
      <div className="usergroup-info">
        <h3 className="usergroup-name">{group.name}</h3>
        <p className="usergroup-location">📍 {group.location}</p>
      </div>
      <div className="usergroup-action">
        {hasValidMeetupUrl ? (
          <a
            href={group.meetupUrl}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('usergroups.meetup')}
          </a>
        ) : (
          <button
            className="btn btn-disabled btn-sm"
            disabled
            title={t('usergroups.comingSoonTitle')}
          >
            {t('usergroups.comingSoon')}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserGroupCard;
