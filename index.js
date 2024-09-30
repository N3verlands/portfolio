import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <Hero
        backgroundUrl="public/image1.jpg"
        title="Expert Legal Services for Your Peace of Mind"
        subtitle="With over 10 years of experience in family law, I am committed to providing exceptional legal services to my clients."
        callToAction="Learn More"
      />
      <section className={styles.intro}>
        <p>Welcome to my professional portfolio. With over 10 years of experience in family law, I am committed to providing exceptional legal services to my clients.</p>
      </section>
      <section className={styles.services}>
        <h2>Featured Services</h2>
        <Service
          title="Divorce and Separation"
          description="I provide expert guidance and representation in divorce and separation cases, ensuring that my clients receive the best possible outcome."
          link="/services/divorce-and-separation"
        />
        <Service
          title="Child Custody and Access"
          description="I help my clients navigate the complex process of child custody and access, ensuring that their rights and interests are protected."
          link="/services/child-custody-and-access"
        />
        {/* Additional services */}
      </section>
      <section className={styles.testimonials}>
        <h2>What Clients Say</h2>
        <Testimonial
          quote="Daisy is an exceptional lawyer who truly cares about her clients. She is knowledgeable, compassionate, and always available to answer my questions."
          clientName="Jane Doe"
          backgroundUrl="/images/testimonial-background.jpg"
        />
        {/* Additional testimonials */}
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;