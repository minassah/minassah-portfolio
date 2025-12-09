import styles from './Hero.module.css';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.grid}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Tech Consultancy & Solutions</span>
          
          <h1 className={styles.title}>
            Transforming Business
            <span className={styles.highlight}> Through Technology</span>
          </h1>
          
          <p className={styles.subtitle}>
            We specialize in ERP implementation, custom software development, and strategic 
            technology consultancy. From Odoo and SAP solutions to mobile and web applications, 
            we help businesses achieve digital excellence.
          </p>
          
          <div className={styles.cta}>
            <Button href="#contact" size="large">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
            <Button href="#services" variant="outline" size="large">
              Our Services
            </Button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

