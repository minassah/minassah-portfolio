'use client';

import { useState, useEffect } from 'react';
/* eslint-disable @next/next/no-img-element */
import styles from './Navbar.module.css';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <img 
            src="/logo.svg" 
            alt="Minassah" 
            width={180} 
            height={60}
          />
        </a>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileOnly}>
            <Button href="#contact" size="small" onClick={closeMobileMenu}>
              Get Started
            </Button>
          </li>
        </ul>

        <div className={styles.navRight}>
          <ThemeToggle />
          
          <Button href="#contact" size="small" className={styles.desktopOnly}>
            Get Started
          </Button>
          
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

