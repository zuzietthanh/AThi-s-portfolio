'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const documents = [
  {
    number: '01',
    title: 'Curriculum Vitae',
    href: '/cv',
    description:
      'The CV outlines the skills I bring to a role. It is aimed at a hiring manager reviewing dozens of applications in a short window, so clarity matters as much as content. I led with a clear objective and quantified what I have actually done — a 200-member charity, over 500 Chung cakes prepared during the Central Vietnam floods, a 31-student performance team — so that impact is visible at a glance rather than buried in description.',
    whyIncluded:
      'The foundation of the package: it proves competence quickly to a reader who is scanning, not reading.',
  },
  {
    number: '02',
    title: 'Cover Letter',
    href: '/cv#cover-letter',
    description:
      'The cover letter gives the CV a voice. Where the CV lists what I can do, the letter proves I have researched a specific organization and explains why I would be a strong fit there. It is written for one employer at a time rather than for a general audience, which is what makes it worth sending alongside a document that is otherwise identical for every application.',
    whyIncluded:
      'Argues fit rather than competence, and is itself a writing sample for a field that prizes communication.',
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
              I chose the{' '}
              <strong className="text-foreground font-semibold">Job Seeking package</strong> over
              Exchange Study because an internship is my immediate next step, and these are the
              documents I will actually use this year. Together they divide the work of an
              application: the CV proves competence, and the cover letter argues fit.
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
