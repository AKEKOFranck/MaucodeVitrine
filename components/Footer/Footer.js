import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Logo/Logo";
import { SITE_CONFIG } from "@/data/sites";
import { buildContactUrl } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo size={36} showName light />
      <a href={buildContactUrl()} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <FaWhatsapp aria-hidden="true" /> Écrire à {SITE_CONFIG.name}
      </a>
      <small>© {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</small>
    </footer>
  );
}