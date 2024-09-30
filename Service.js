import Link from 'next/link';
import styles from '../styles/Service.module.css';

const Service = ({ title, description }) => (
  <div className={styles.service}>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link href="/services" className={styles.link}>Learn More</Link>
  </div>
);

export default Service;
