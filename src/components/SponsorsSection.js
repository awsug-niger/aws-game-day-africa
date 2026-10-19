import React from 'react';
import { useSponsors } from '../hooks/useData';
import { useLanguage } from '../i18n/LanguageContext';

const SponsorsSection = () => {
  const { sponsors, loading, error } = useSponsors();
  const { t } = useLanguage();

  if (error) {
    return (
      <section id="sponsors" className="section">
        <div className="container">
          <h2>{t('sponsors.title')}</h2>
          <div className="error">
            <p>{t('sponsors.error')} {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sponsors" className="section">
      <div className="container">
        <h2>{t('sponsors.title')}</h2>
        <p>{t('sponsors.subtitle')}</p>

        {loading ? (
          <div className="loading">{t('sponsors.loading')}</div>
        ) : (
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => {
              const flagEmoji = sponsor.country
                ? sponsor.country.split(' ')[0]
                : '';

              const card = (
                <>
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                  {sponsor.country && (
                    <p className="sponsor-country">
                      {flagEmoji} {sponsor.country.split(' ').slice(1).join(' ')}
                    </p>
                  )}
                  {sponsor.website && (
                    <span className="sponsor-link">{t('sponsors.visit')}</span>
                  )}
                </>
              );

              return sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  className="sponsor-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card}
                </a>
              ) : (
                <div key={index} className="sponsor-card">
                  {card}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
