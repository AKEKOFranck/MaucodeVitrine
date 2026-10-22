import { FiArrowDown, FiCalendar } from "react-icons/fi";
import { SITE_CONFIG, SITE_TYPES } from "@/data/sites";
import Logo from "@/components/Logo/Logo";
import styles from "./Hero.module.css";

export default function Hero({ total, counts, onBook }) {
  return (
    <header className={styles.hero}>
      <span className={styles.orb1} aria-hidden="true" />
      <span className={styles.orb2} aria-hidden="true" />
      <div className={styles.inner}>
        <Logo size={52} showName light />
        <h1 className={styles.title}>{SITE_CONFIG.title}</h1>
        <p className={styles.sub}>{SITE_CONFIG.subtitle}</p>

        <div className={styles.actions}>
          <a href="#realisations" className={styles.primary}>Voir les réalisations <FiArrowDown aria-hidden="true" /></a>
          <button type="button" className={styles.ghost} onClick={onBook}>
            <FiCalendar aria-hidden="true" /> Réserver un échange
          </button>
        </div>

        <ul className={styles.stats}>
          <li><strong>{total}</strong> sites en ligne</li>
          {Object.entries(SITE_TYPES).map(([key, info]) => (
            <li key={key}><strong>{counts[key] || 0}</strong> {info.label.toLowerCase()}{(counts[key] || 0) > 1 ? "s" : ""}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}