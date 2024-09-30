import styles from '../styles/Testimonial.module.css';

const Testimonial = ({ quote, clientName }) => (
  <blockquote className={styles.testimonial}>
    <p>"{quote}"</p>
    <cite>- {clientName}</cite>
  </blockquote>
);

export default Testimonial;
