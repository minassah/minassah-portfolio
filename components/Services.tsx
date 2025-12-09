import Section, { SectionHeader } from './ui/Section';
import Card, { CardIcon, CardTitle, CardDescription } from './ui/Card';
import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Technology Consultancy',
    description: 'Strategic guidance to align your technology investments with business objectives. We analyze, plan, and guide your digital transformation journey.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'ERP Solutions',
    description: 'Expert implementation and customization of Odoo and SAP systems. Streamline operations, enhance productivity, and gain real-time business insights.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android. From concept to deployment, we build performant apps that users love.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Web Applications',
    description: 'Custom web solutions built with modern technologies. Scalable, secure, and designed to meet your unique business requirements.',
  },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader 
        title="Our Services" 
        subtitle="Comprehensive technology solutions tailored to drive your business forward. We combine expertise with innovation to deliver results."
      />
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Card key={index}>
            <CardIcon>{service.icon}</CardIcon>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

