import React, { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import UserGroupsSection from './components/UserGroupsSection';
import JoinSection from './components/JoinSection';
import OrganizersSection from './components/OrganizersSection';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add animation observer for cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observer will be set up after components mount
    const setupObserver = () => {
      const cards = document.querySelectorAll('.content-card, .usergroup-card, .organizer-card');
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      });
    };

    // Use setTimeout to ensure components are rendered
    setTimeout(setupObserver, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <AboutSection />
        <UserGroupsSection />
        <JoinSection />
        <OrganizersSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;