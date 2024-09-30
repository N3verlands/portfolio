import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Image src="public/Screenshot 2024-09-30 165916.png" alt="Lawyer's logo" width={70} height={70} unoptimized/>
    </div>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/case-studies">Case Studies</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
