import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateActiveNavItem = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
          const navHeight = 80; // Account for fixed nav height
          const targetTop = targetSection.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"], .hero-cta a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    window.addEventListener('scroll', updateActiveNavItem);
    updateActiveNavItem();

    return () => {
      window.removeEventListener('scroll', updateActiveNavItem);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  // Update active states in nav links
  useEffect(() => {
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [activeSection]);

  return null; // Navigation is now handled in Header component
};

export default Navigation;