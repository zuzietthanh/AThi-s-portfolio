'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const documents = [
  {
    number: '01',
    title: 'Curriculum Vitae',
    href: '/cv',
    description:
      'My CV was chosen as the foundation of this package because it is the primary tool recruiters use to evaluate candidates in under 30 seconds. I tailored it specifically for marketing roles, prioritizing campaign results, relevant coursework, and transferable skills over a generic chronological list. The CV demonstrates my ability to communicate concisely and strategically — a core marketing competency.',
    whyIncluded:
      'First point of contact for most employers; demonstrates professional history and key competencies.',
  },
  {
    number: '02',
    title: 'Cover Letter',
    href: '/cv#cover-letter',
    description:
      'The cover letter complements the CV by giving me a voice — it is where I can show personality, demonstrate knowledge of the company, and explain why I am the right fit for a specific role. I chose to include it because marketing is a field that prizes communication skills, and a strong cover letter is itself a writing sample. I customized the letter for a digital marketing coordinator position, showing targeted research and brand awareness.',
    whyIncluded:
      'Demonstrates written communication skills and brand-fit awareness — essential for marketing roles.',
  },
  {
    number: '03',
    title: 'LinkedIn Profile',
    href: '/cv#linkedin',
    description:
      'LinkedIn is the professional network where marketing candidates are increasingly discovered and evaluated. My LinkedIn profile extends my personal brand beyond a PDF, allowing me to showcase endorsements, recommendations, and a richer narrative of my experience. Including it in this portfolio reflects an understanding that modern job seeking is multi-channel — employers will Google you, and your LinkedIn profile is often the first result.',
    whyIncluded:
      'Modern employers verify candidates on LinkedIn; a polished profile reinforces the CV narrative and expands reach.',
  },
];

export default function SOPOverview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-secondary"
      aria-labelledby="overview-heading"
      id="overview"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-18">
          <div className="lg:col-span-3 scroll-reveal">
            <span className="section-label block mb-4">Part B</span>
            <h2
              id="overview-heading"
              className="font-display text-3xl md:text-4xl font-light italic text-foreground"
            >
              Portfolio Overview
            </h2>
            <div className="divider-accent mt-6" />
          </div>
          <div className="lg:col-span-9 scroll-reveal flex items-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              I selected the{' '}
              <strong className="text-foreground font-semibold">Job Seeking package</strong> because
              my immediate priority is entering the marketing workforce upon graduation. The three
              documents below represent the core toolkit any marketing candidate needs — a CV that
              opens doors, a cover letter that builds connection, and a LinkedIn profile that
              sustains visibility.
            </p>
          </div>
        </div>

        {/* Document cards */}
        <div className="space-y-6">
          {documents?.map((doc, i) => (
            <div
              key={doc?.number}
              className="scroll-reveal bg-card rounded-2xl border border-border p-6 md:p-8 lg:p-10 hover:border-accent transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Number + title */}
                <div className="lg:col-span-3">
                  <span className="text-5xl font-display font-light italic text-border leading-none block mb-3">
                    {doc?.number}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
                    {doc?.title}
                  </h3>
                  <Link
                    href={doc?.href}
                    className="text-xs font-bold uppercase tracking-wide-xl text-accent hover:text-foreground transition-colors flex items-center gap-1.5"
                    aria-label={`View ${doc?.title} document`}
                  >
                    View Document
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc?.description}
                  </p>
                </div>

                {/* Why included */}
                <div className="lg:col-span-3">
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wide-xl text-accent mb-2">
                      Why Included
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {doc?.whyIncluded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
