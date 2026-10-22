import { FiArrowUpRight } from "react-icons/fi";
import { SITE_CONFIG } from "@/data/sites";
import Badge from "@/components/Badge/Badge";
import styles from "./SiteCard.module.css";

export default function SiteCard({ site, index }) {
  const Icon = site.icon;
  const image = site.images[0] || SITE_CONFIG.screenshot(site.url);

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${styles[site.type]}`}
      style={{ animationDelay: `${index * 0.07}s` }}
      aria-label={`Voir le site ${site.title} (${site.type === "client" ? "projet client" : "concept fictif"}), s'ouvre dans un nouvel onglet`}
    >
      <div className={styles.shot}>
        <img src={image} alt="" loading="lazy" width="900" height="560" />
        <span className={styles.badge}><Badge type={site.type} /></span>
      </div>
      <div className={styles.body}>
        <span className={styles.icon} aria-hidden="true">{Icon && <Icon />}</span>
        <div>
          <h3>{site.title}</h3>
          <p className={styles.cat}>{site.category}</p>
          <p className={styles.desc}>{site.description}</p>
        </div>
      </div>
      <span className={styles.visit}>Voir le site <FiArrowUpRight aria-hidden="true" /></span>
    </a>
  );
}