import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SOPHero from '@/app/statement-of-purpose/components/SOPHero';
import SOPGoals from '@/app/statement-of-purpose/components/SOPGoals';
import SOPOverview from '@/app/statement-of-purpose/components/SOPOverview';
import SOPFutureConnection from '@/app/statement-of-purpose/components/SOPFutureConnection';

export default function StatementOfPurposePage() {
  return (
    <>
      <Header />
      <main>
        <SOPHero />
        <SOPGoals />
        <SOPOverview />
        <SOPFutureConnection />
      </main>
      <Footer />
    </>
  );
}