import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DocumentsSection from '@/app/components/DocumentsSection';
import AboutStrip from '@/app/components/AboutStrip';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutStrip />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
