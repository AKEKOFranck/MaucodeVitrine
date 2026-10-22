"use client";

import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PROJECT_TYPES } from "@/data/sites";
import { buildBookingUrl, clean, isValidPhone } from "@/lib/whatsapp";
import styles from "./BookingModal.module.css";

const EMPTY = { name: "", phone: "", projectType: PROJECT_TYPES[0], message: "" };

/** Champs du formulaire : modifiez cette liste pour ajouter/retirer un champ. */
const FIELDS = [
  { name: "name", label: "Votre nom", type: "text", max: 80, autoComplete: "name", required: true },
  { name: "phone", label: "Votre téléphone", type: "tel", max: 20, autoComplete: "tel", required: true },
  { name: "projectType", label: "Type de projet", type: "select", options: PROJECT_TYPES },
  { name: "message", label: "Détails (facultatif)", type: "textarea", max: 500 },
];

export default function BookingModal({ open, onClose }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const firstRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const validate = () => {
    const next = {};
    if (clean(values.name, 80).length < 2) next.name = "Entrez votre nom (2 lettres minimum).";
    if (!isValidPhone(values.phone)) next.phone = "Entrez un numéro valide, ex. 07 00 00 00 00.";
    if (!PROJECT_TYPES.includes(values.projectType)) next.projectType = "Choisissez un type de projet.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(buildBookingUrl(values), "_blank", "noopener,noreferrer");
    setValues(EMPTY);
    onClose();
  };

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fermer"><FiX /></button>
        <h2 id="booking-title">Réserver un échange</h2>
        <p className={styles.lead}>Remplissez ce formulaire. WhatsApp s'ouvre avec votre message prêt à envoyer.</p>

        <form onSubmit={submit} noValidate className={styles.form}>
          {FIELDS.map((f, i) => (
            <label key={f.name} className={styles.field}>
              <span>{f.label}</span>
              {f.type === "select" ? (
                <select name={f.name} value={values[f.name]} onChange={update}>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea name={f.name} rows={3} maxLength={f.max} value={values[f.name]} onChange={update} />
              ) : (
                <input ref={i === 0 ? firstRef : null} name={f.name} type={f.type} maxLength={f.max}
                  autoComplete={f.autoComplete} required={f.required} value={values[f.name]} onChange={update}
                  aria-invalid={Boolean(errors[f.name])} />
              )}
              {errors[f.name] && <em role="alert" className={styles.error}>{errors[f.name]}</em>}
            </label>
          ))}
          <button type="submit" className={styles.submit}><FaWhatsapp aria-hidden="true" /> Envoyer sur WhatsApp</button>
        </form>
      </div>
    </div>
  );
}