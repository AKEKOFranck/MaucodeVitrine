import data from "./sites.json";
import { ICONS, DEFAULT_ICON } from "./icons";

/* Ce fichier lit sites.json : on ne le modifie normalement jamais.
   Pour ajouter un site ou changer un texte, éditez data/sites.json. */

export const SITE_CONFIG = {
  ...data.config,
  // Capture automatique, utilisée seulement si un site n'a aucune image
  screenshot: (url) => `https://image.thum.io/get/width/900/crop/560/${url}`,
};

export const SITE_TYPES = data.siteTypes;
export const PROJECT_TYPES = data.projectTypes;

export const SITES = data.sites.map((site) => ({
  ...site,
  icon: ICONS[site.icon] || DEFAULT_ICON,
  images: [].concat(site.images ?? []), // accepte "img.png" ou ["img.png"]
}));