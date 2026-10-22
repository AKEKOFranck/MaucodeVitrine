"use client";

import { useState, useMemo } from "react";
import styles from "./page.module.css";
import { SITES, SITE_TYPES } from "@/data/sites";
import { getCategories, filterSites, countByType } from "@/lib/siteUtils";

import Splash from "@/components/Splash/Splash";
import Hero from "@/components/Hero/Hero";
import FilterBar from "@/components/FilterBar/FilterBar";
import SiteCard from "@/components/SiteCard/SiteCard";
import CallToAction from "@/components/CallToAction/CallToAction";
import BookingModal from "@/components/BookingModal/BookingModal";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [category, setCategory] = useState("Tous");
  const [type, setType] = useState("tous");
  const [bookingOpen, setBookingOpen] = useState(false);

  const categories = useMemo(() => getCategories(SITES), []);
  const counts = useMemo(() => countByType(SITES), []);
  const visibleSites = useMemo(() => filterSites(SITES, category, type), [category, type]);

  return (
    <>
      <Splash />
      <main className={styles.main}>
        <Hero total={SITES.length} counts={counts} onBook={() => setBookingOpen(true)} />

        <section id="realisations" className={styles.gallery} aria-labelledby="galerie-titre">
          <div className={styles.galleryHead}>
            <h2 id="galerie-titre">Nos réalisations</h2>
            <FilterBar
              categories={categories}
              category={category}
              onCategory={setCategory}
              types={SITE_TYPES}
              type={type}
              onType={setType}
            />
          </div>

          {visibleSites.length === 0 ? (
            <p className={styles.empty}>Aucun site dans cette sélection. Essayez un autre filtre.</p>
          ) : (
            <div className={styles.grid}>
              {visibleSites.map((site, index) => (
                <SiteCard key={site.id} site={site} index={index} />
              ))}
            </div>
          )}
        </section>

        <CallToAction onBook={() => setBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}