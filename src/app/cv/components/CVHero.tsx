'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CVHero() {
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
      className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary relative overflow-hidden"
      aria-label="CV page header"
    >
      <div className="absolute inset-0 noise-overlay z-[1]" aria-hidden="true" />
      <div className="absolute bottom-0 right-8 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
        <span className="font-display text-[12rem] italic text-foreground">CV</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10" aria-label="Breadcrumb">
          <Link href="/" className="text-xs font-semibold uppercase tracking-super text-muted-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground/40 text-xs" aria-hidden="true">/</span>
          <span className="text-xs font-semibold uppercase tracking-super text-accent">
            Professional Documents
          </span>
        </nav>

        <div className="max-w-3xl">
          <span className="section-label opacity-initial block mb-6">
            Artifacts 02–04 · Job Seeking Package
          </span>
          <h1 className="font-display text-hero-xl font-light italic text-foreground opacity-initial leading-none mb-6">
            Professional<br />
            <span className="not-italic font-semibold">Documents</span>
          </h1>
          <div className="divider-accent mb-8 opacity-initial" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl opacity-initial">
            Three core documents for the Job Seeking package — each presented with the final version, a revision narrative documenting the evolution, and peer feedback received during the drafting process.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mt-8 opacity-initial">
            {[
              { label: 'CV / Resume', href: '#cv' },
              { label: 'Cover Letter', href: '#cover-letter' },
              { label: 'LinkedIn Profile', href: '#linkedin' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn-outline text-xs px-5 py-2.5 min-h-[44px] flex items-center"
                aria-label={`Jump to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}