import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.rights')}</p>
        <p>{t('footer.tagline')}</p>
      </div>
    </footer>
  );
};

export default Footer;
