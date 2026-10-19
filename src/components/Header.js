import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="container">
          <div className="nav-brand">
            <span className="brand-text">AWS GameDay Africa</span>
          </div>
          <div className="nav-links">
            <a href="#about">{t('nav.about')}</a>
            <a href="#usergroups">{t('nav.usergroups')}</a>
            <a href="#join">{t('nav.join')}</a>
            <a href="#organizers">{t('nav.organizers')}</a>
            <a href="#sponsors">{t('nav.sponsors')}</a>
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-btn${language === 'fr' ? ' active' : ''}`}
                onClick={() => setLanguage('fr')}
                aria-pressed={language === 'fr'}
              >
                FR
              </button>
              <button
                type="button"
                className={`lang-btn${language === 'en' ? ' active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <img src="/AWS-GameDay-Logo.png" alt="AWS GameDay" className="hero-logo" />
            </div>
            <div className="hero-right">
              <h1>AWS GameDay Africa</h1>
              <h2 className="gameday-title">Going serverless</h2>
              <p className="hero-subtitle">{t('hero.subtitle')}</p>
              <div className="hero-description">
                <p>
                  {t('hero.description.line1')} <br />
                  {t('hero.description.line2')}
                </p>
              </div>
              <div className="hero-cta">
                <a href="#about" className="btn btn-outline">{t('hero.cta.learnMore')}</a>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Header;
