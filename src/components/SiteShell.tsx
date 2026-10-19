"use client";

import { BookingForm } from "./BookingForm";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LanguageProvider } from "./LanguageProvider";
import { PickupDelivery } from "./PickupDelivery";
import { Services } from "./Services";
import { VisitUs } from "./VisitUs";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteShell() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <PickupDelivery />
        <BookingForm />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
