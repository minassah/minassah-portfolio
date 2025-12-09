import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'alternate' | 'accent';
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  variant = 'default' 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${styles.section} ${styles[variant]} ${className}`}
    >
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

