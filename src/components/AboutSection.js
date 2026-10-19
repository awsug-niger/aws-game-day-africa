import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="content-grid">
          <div className="content-card">
            <h3>{t('about.card1.title')}</h3>
            <p>{t('about.card1.text')}</p>
          </div>
          <div className="content-card">
            <h3>{t('about.card2.title')}</h3>
            <p>{t('about.card2.text')}</p>
          </div>
          <div className="content-card">
            <h3>{t('about.card3.title')}</h3>
            <p>{t('about.card3.text')}</p>
          </div>
        </div>

        <div className="event-details">
          <h3>{t('about.event.title')}</h3>
          <p>{t('about.event.text')}</p>
          <div className="highlights">
            <span className="highlight">{t('about.highlight.date')}</span>
            <span className="highlight highlight--times">
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Dakar</span>
                <span className="highlight-time-value">09:00 (GMT)</span>
              </span>
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Niamey</span>
                <span className="highlight-time-value">10:00 (GMT+1)</span>
              </span>
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Lagos</span>
                <span className="highlight-time-value">10:00 (GMT+1)</span>
              </span>
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Cape Town</span>
                <span className="highlight-time-value">11:00 (GMT+2)</span>
              </span>
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Nairobi</span>
                <span className="highlight-time-value">12:00 (GMT+3)</span>
              </span>
              <span className="highlight-time">
                <span className="highlight-time-city">🕕 Maurice</span>
                <span className="highlight-time-value">13:00 (GMT+4)</span>
              </span>
            </span>
            <span className="highlight highlight--features">
              <span className="highlight-feature">
                <span className="highlight-feature-icon">
                  <img
                    src="/assets/img/africa.png"
                    alt={t('about.highlight.region.label')}
                    className="highlight-feature-img"
                  />
                </span>
                <span className="highlight-feature-label">{t('about.highlight.region.label')}</span>
              </span>
              <span className="highlight-feature">
                <span className="highlight-feature-icon">{t('about.highlight.hybrid.icon')}</span>
                <span className="highlight-feature-label">{t('about.highlight.hybrid.label')}</span>
              </span>
              <span className="highlight-feature">
                <span className="highlight-feature-icon">{t('about.highlight.team.icon')}</span>
                <span className="highlight-feature-label">{t('about.highlight.team.label')}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
