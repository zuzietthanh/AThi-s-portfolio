import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CVHero from '@/app/cv/components/CVHero';
import CVDocument from '@/app/cv/components/CVDocument';
import CoverLetterSection from '@/app/cv/components/CoverLetterSection';
import LinkedInSection from '@/app/cv/components/LinkedInSection';

export default function CVPage() {
  return (
    <>
      <Header />
      <main>
        <CVHero />
        <CVDocument />
        <CoverLetterSection />
        <LinkedInSection />
      </main>
      <Footer />
    </>
  );
}
