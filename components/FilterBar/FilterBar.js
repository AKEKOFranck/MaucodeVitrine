import styles from "./FilterBar.module.css";

export default function FilterBar({ categories, category, onCategory, types, type, onType }) {
  const typeOptions = [["tous", "Tous les sites"], ...Object.entries(types).map(([k, v]) => [k, v.label])];

  return (
    <div className={styles.wrap}>
      <div className={styles.row} role="group" aria-label="Filtrer par catégorie">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={c === category}
            className={`${styles.pill} ${c === category ? styles.active : ""}`} onClick={() => onCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className={styles.row} role="group" aria-label="Filtrer par type de projet">
        {typeOptions.map(([key, label]) => (
          <button key={key} type="button" aria-pressed={key === type}
            className={`${styles.seg} ${key === type ? styles.segActive : ""}`} onClick={() => onType(key)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}