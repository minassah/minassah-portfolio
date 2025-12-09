import Section from './ui/Section';
import styles from './AppsSection.module.css';

const mobileFeatures = [
  'Native iOS & Android development',
  'Cross-platform with React Native & Flutter',
  'Offline-first architecture',
  'Push notifications & real-time sync',
  'App Store optimization & deployment',
];

const webFeatures = [
  'Modern React & Next.js applications',
  'Progressive Web Apps (PWA)',
  'Responsive design for all devices',
  'API development & integrations',
  'Cloud deployment & DevOps',
];

export default function AppsSection() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Mobile Applications</h3>
          <p className={styles.cardDescription}>
            Engaging mobile experiences that put your business in your customers&apos; pockets. 
            We build apps that are fast, intuitive, and designed to drive engagement.
          </p>
          <ul className={styles.featureList}>
            {mobileFeatures.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techBadge}>React Native</span>
            <span className={styles.techBadge}>Flutter</span>
            <span className={styles.techBadge}>Swift</span>
            <span className={styles.techBadge}>Kotlin</span>
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Web Applications</h3>
          <p className={styles.cardDescription}>
            Scalable web solutions that power your business operations. 
            From customer portals to internal tools, we build for performance and reliability.
          </p>
          <ul className={styles.featureList}>
            {webFeatures.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.techStack}>
            <span className={styles.techBadge}>Next.js</span>
            <span className={styles.techBadge}>React</span>
            <span className={styles.techBadge}>Node.js</span>
            <span className={styles.techBadge}>Python</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

