import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <section className={styles.about}>
        <img src="/headshot.jpg" alt="Lawyer Headshot" className={styles.headshot}/>
        <h1>About Me</h1>
        <p>Detailed biography...</p>
        <h2>Professional Experience</h2>
        <p>Work experience details...</p>
        <h2>Certifications and Memberships</h2>
        <p>List of certifications...</p>
        <h2>Personal Interests</h2>
        <p>Information about personal interests...</p>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
