"use client";

import { BookingForm } from "./BookingForm";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Heritage } from "./Heritage";
import { Hero } from "./Hero";
import { LanguageProvider } from "./LanguageProvider";
import { PickupDelivery } from "./PickupDelivery";
import { Services } from "./Services";
import { StickyCta } from "./StickyCta";
import { Testimonials } from "./Testimonials";
import { TrustBar } from "./TrustBar";
import { VisitUs } from "./VisitUs";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { WhyUs } from "./WhyUs";

export function SiteShell() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Heritage />
        <Services />
        <WhyUs />
        <PickupDelivery />
        <BookingForm />
        <Gallery />
        <Testimonials />
        <Faq />
        <VisitUs />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyCta />
    </LanguageProvider>
  );
}
