import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SOPHero from '@/app/statement-of-purpose/components/SOPHero';
import SOPEssay from '@/app/statement-of-purpose/components/SOPEssay';

export default function StatementOfPurposePage() {
  return (
    <>
      <Header />
      <main>
        <SOPHero />
        <SOPEssay />
      </main>
      <Footer />
    </>
  );
}
