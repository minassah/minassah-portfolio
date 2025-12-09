import Section, { SectionHeader } from './ui/Section';
import styles from './Approach.module.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, challenges, and objectives to define the right solution.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team architects a tailored solution with clear specifications, timelines, and success metrics.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Agile development with regular demos ensures transparency and alignment throughout the build.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Smooth rollout with training, documentation, and ongoing support for continued success.',
  },
];

export default function Approach() {
  return (
    <Section id="approach" variant="alternate">
      <SectionHeader 
        title="Our Approach" 
        subtitle="A proven methodology that delivers results. We combine strategic thinking with technical excellence at every stage."
      />
      
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className={styles.connector}></div>}
          </div>
        ))}
      </div>
    </Section>
  );
}

