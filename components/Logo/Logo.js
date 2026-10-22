import Image from "next/image";
import styles from "./Logo.module.css";

/** Logo Maucode : le fichier doit être dans public/LogoMC.png */
export default function Logo({ size = 64, showName = false, light = false }) {
  return (
    <span className={`${styles.wrap} ${light ? styles.light : ""}`}>
      <span className={styles.mark} style={{ width: size, height: size }}>
        <Image
          src="/LogoMC.png"
          alt={showName ? "" : "Logo Maucode"}
          width={size}
          height={size}
          priority
        />
      </span>
      {showName && <span className={styles.name}>Maucode</span>}
    </span>
  );
}