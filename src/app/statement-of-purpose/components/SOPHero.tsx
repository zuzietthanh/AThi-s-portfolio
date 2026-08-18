'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SOPHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.querySelectorAll('.opacity-initial').forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fade-up');
            (el as HTMLElement).style.opacity = '1';
          }, 150 + i * 120);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground relative overflow-hidden"
      aria-label="Statement of Purpose header"
    >
      {/* Decorative */}
      <div className="absolute inset-0 noise-overlay z-[1]" aria-hidden="true" />
      <div className="absolute bottom-0 right-8 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
        <span className="font-display text-[14rem] italic text-primary-foreground">SOP</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="text-xs font-semibold uppercase tracking-super text-primary-foreground/40 hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-primary-foreground/20 text-xs" aria-hidden="true">/</span>
          <span className="text-xs font-semibold uppercase tracking-super text-accent">
            Statement of Purpose
          </span>
        </nav>

        <div className="max-w-3xl">
          <span className="section-label opacity-initial block mb-6">
            Artifact 01 · Reflection
          </span>
          <h1 className="font-display text-hero-xl font-light italic text-primary-foreground opacity-initial leading-none mb-6">
            Statement<br />
            <span className="not-italic font-semibold">of Purpose</span>
          </h1>
          <div className="divider-accent mb-8 opacity-initial" />
          <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed max-w-xl opacity-initial">
            A personal reflection on my professional goals, the documents I have chosen to include in this portfolio, and how this body of work connects to my future in marketing.
          </p>
        </div>
      </div>
    </section>
  );
}