import { SITE_CONFIG } from "@/data/sites";

/** Nettoie un texte : retire caractères de contrôle et balises, limite la longueur. */
export function clean(value, max = 300) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]+/g, " ")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/** Téléphone : chiffres, espaces, + - ( ) uniquement. */
export function isValidPhone(phone) {
  const digits = String(phone).replace(/\D/g, "");
  return /^[0-9+\-()\s]{8,20}$/.test(phone) && digits.length >= 8 && digits.length <= 15;
}

/** Construit le lien WhatsApp avec le message de réservation. */
export function buildBookingUrl({ name, phone, projectType, message }) {
  const lines = [
    "Bonjour Maucode 👋, je souhaite réserver un échange.",
    "",
    `Nom : ${clean(name, 80)}`,
    `Téléphone : ${clean(phone, 20)}`,
    `Projet : ${clean(projectType, 60)}`,
    message ? `Détails : ${clean(message, 500)}` : "",
  ].filter((l, i, a) => l !== "" || a[i - 1] !== "");
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Lien WhatsApp simple (sans formulaire). */
export function buildContactUrl() {
  return `https://wa.me/${SITE_CONFIG.whatsapp}`;
}