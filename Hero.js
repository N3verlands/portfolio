import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <Image src="public/WhatsApp Image 2024-09-27 at 20.26.14_ee420542.jpg" alt="Lawyer Headshot" width={150} height={150} className={styles.headshot}/>
    <h1>Expert Legal Services for Your Peace of Mind</h1>
    <Link href="/contact">className={styles.ctaButton}Schedule a Consultation</Link>
  </section>
);

export default Hero;
