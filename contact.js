import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Contact.module.css';

const Contact = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <section className={styles.contact}>
        <h1>Contact Me</h1>
        <p>Address: [Your Address]</p>
        <p>Phone: [Your Phone Number]</p>
        <p>Email: [Your Email]</p>
        <ContactForm />
        <div className={styles.map}>
          {/* Embedded Google Map */}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
