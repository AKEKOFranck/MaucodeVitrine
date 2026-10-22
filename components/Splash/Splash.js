"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo/Logo";
import styles from "./Splash.module.css";

const SHOW_MS = 2400; // durée de l'intro
const LEAVE_MS = 700; // durée de la sortie

export default function Splash() {
  const [phase, setPhase] = useState("show"); // show | leave | gone

  useEffect(() => {
    try {
      if (sessionStorage.getItem("maucode-splash")) { setPhase("gone"); return; }
      sessionStorage.setItem("maucode-splash", "1");
    } catch {}
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("leave"), SHOW_MS);
    const t2 = setTimeout(() => { setPhase("gone"); document.body.style.overflow = ""; }, SHOW_MS + LEAVE_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ""; };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`${styles.splash} ${phase === "leave" ? styles.leave : ""}`} role="status" aria-label="Chargement de Maucode">
      <div className={styles.center}>
        <div className={styles.logo}><Logo size={96} /></div>
        <p className={styles.word}>
          {"Maucode".split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${0.7 + i * 0.07}s` }}>{letter}</span>
          ))}
        </p>
        <div className={styles.bar}><span /></div>
      </div>
    </div>
  );
}