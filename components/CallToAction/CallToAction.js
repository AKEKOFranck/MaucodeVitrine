import { FiCalendar } from "react-icons/fi";
import styles from "./CallToAction.module.css";

export default function CallToAction({ onBook }) {
  return (
    <section className={styles.section} aria-labelledby="cta-titre">
      <div className={styles.box}>
        <h2 id="cta-titre">Votre site peut être le prochain de cette liste</h2>
        <p>Dites-nous ce que vous voulez créer. Nous vous répondons sur WhatsApp.</p>
        <button type="button" className={styles.btn} onClick={onBook}>
          <FiCalendar aria-hidden="true" /> Réserver un échange
        </button>
      </div>
    </section>
  );
}