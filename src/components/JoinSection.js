import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const JoinSection = () => {
  const { t } = useLanguage();

  return (
    <section id="join" className="section bg-light">
      <div className="container">
        <h2>{t('join.title')}</h2>
        <p>{t('join.intro')}</p>

        <div className="join-steps">
          <div className="join-step">
            <div className="join-step-number">1</div>
            <div className="join-step-content">
              <h3>{t('join.step1.title')}</h3>
              <p>{t('join.step1.text')}</p>
            </div>
          </div>

          <div className="join-step">
            <div className="join-step-number">2</div>
            <div className="join-step-content">
              <h3>{t('join.step2.title')}</h3>
              <p>{t('join.step2.text')}</p>
            </div>
          </div>

          <div className="join-step">
            <div className="join-step-number">3</div>
            <div className="join-step-content">
              <h3>{t('join.step3.title')}</h3>
              <p>{t('join.step3.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
