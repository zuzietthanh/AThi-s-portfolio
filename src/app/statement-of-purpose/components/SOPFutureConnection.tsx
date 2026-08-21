'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const connections = [
  {
    artifact: 'CV',
    futureRole: 'Marketing Internship → Master’s in China',
    connection:
      'The CV is the document that has to carry me through the next two steps: an internship at a consumer brand or digital agency, and then an application to a Master’s program in China. Learning to quantify my experience rather than describe it is what makes the same document work for a recruiter and an admissions committee alike.',
  },
  {
    artifact: 'Cover Letter',
    futureRole: 'Founding a Chinese Language Center',
    connection:
      'Writing cover letters is practice for the work itself. Each one asks me to research an organization, identify what its audience values, and argue a case in their language rather than mine — which is exactly what I will need when the business I am marketing is my own language center, and the audience is a parent deciding where to send their child.',
  },
];

export default function SOPFutureConnection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      aria-labelledby="future-heading"
      id="future-connection"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-3 scroll-reveal">
            <span className="section-label block mb-4">Part C</span>
            <h2
              id="future-heading"
              className="font-display text-3xl md:text-4xl font-light italic text-foreground"
            >
              Future Connection
            </h2>
            <div className="divider-accent mt-6" />
          </div>
          <div className="lg:col-span-9 scroll-reveal flex items-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Each artifact in this portfolio is not just a document for today — it is a deliberate
              investment in the marketing career I am building. Here is how each piece connects to
              where I am headed.
            </p>
          </div>
        </div>

        {/* Connection grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connections?.map((item, i) => (
            <div
              key={item?.artifact}
              className="scroll-reveal bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Decorative number */}
              <div
                className="absolute top-4 right-6 font-display text-7xl font-light italic text-primary-foreground/[0.05] pointer-events-none select-none"
                aria-hidden="true"
              >
                {String(i + 1)?.padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <span className="section-label block mb-4">{item?.artifact}</span>
                <h3 className="font-display text-lg font-medium italic text-primary-foreground mb-2 pr-16">
                  {item?.futureRole}
                </h3>
                <div className="w-8 h-px bg-accent mb-4" />
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {item?.connection}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-14 pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 scroll-reveal">
          <div>
            <p className="font-display text-xl md:text-2xl font-light italic text-foreground mb-2">
              Ready to explore the documents?
            </p>
            <p className="text-sm text-muted-foreground">
              Review each artifact along with its revision narrative and peer feedback.
            </p>
          </div>
          <Link href="/cv" className="btn-primary flex-shrink-0">
            View CV &amp; Documents
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
