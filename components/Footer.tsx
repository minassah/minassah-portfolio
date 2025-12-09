/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { label: 'Consultancy', href: '#services' },
    { label: 'ERP Solutions', href: '#solutions' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Web Apps', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <img 
              src="/logo.svg" 
              alt="Minassah" 
              width={120} 
              height={120}
            />
            <p className={styles.tagline}>
              Transforming businesses through innovative technology solutions. 
              Your partner in digital excellence.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Services</h4>
              <ul className={styles.linkList}>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <ul className={styles.linkList}>
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Minassah. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

