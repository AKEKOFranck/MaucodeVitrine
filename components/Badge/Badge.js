import { FiCheckCircle, FiBox } from "react-icons/fi";
import { SITE_TYPES } from "@/data/sites";
import styles from "./Badge.module.css";

const ICONS = { client: FiCheckCircle, fictif: FiBox };

export default function Badge({ type }) {
  const info = SITE_TYPES[type];
  if (!info) return null;
  const Icon = ICONS[type];
  return (
    <span className={`${styles.badge} ${styles[info.tone]}`} title={info.hint}>
      <Icon aria-hidden="true" /> {info.label}
    </span>
  );
}