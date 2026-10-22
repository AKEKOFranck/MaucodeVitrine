/** Catégories uniques, calculées depuis les sites : "Tous" + les catégories. */
export function getCategories(sites) {
  return ["Tous", ...new Set(sites.map((s) => s.category))];
}

/** Filtre par catégorie ET par type (client / fictif / tous). */
export function filterSites(sites, category, type) {
  return sites.filter(
    (s) => (category === "Tous" || s.category === category) && (type === "tous" || s.type === type)
  );
}

/** Compte les sites par type : { client: 5, fictif: 5 }. */
export function countByType(sites) {
  return sites.reduce((acc, s) => ({ ...acc, [s.type]: (acc[s.type] || 0) + 1 }), {});
}