'use client';

import React, { useEffect, useRef } from 'react';

const shortTermGoals = [
  'Secure a marketing internship at a consumer brand or digital agency within the next 6 months',
  'Develop hands-on experience with paid social media campaigns and analytics platforms',
  'Build a professional network through LinkedIn and industry events',
  'Complete Google Analytics and HubSpot certifications to strengthen my digital toolkit',
];

const longTermGoals = [
  'Grow into a Brand Manager role at a mid-to-large consumer goods company within 5 years',
  'Lead integrated marketing campaigns that blend data-driven insights with compelling creative storytelling',
  'Pursue an MBA with a concentration in marketing strategy to deepen strategic and leadership skills',
  'Contribute to building brands that connect meaningfully with diverse audiences',
];

export default function SOPGoals() {
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
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      aria-labelledby="goals-heading"
      id="goals"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-3 scroll-reveal">
            <span className="section-label block mb-4">Part A</span>
            <h2 id="goals-heading" className="font-display text-3xl md:text-4xl font-light italic text-foreground">
              Professional &amp; Academic Goals
            </h2>
            <div className="divider-accent mt-6" />
          </div>

          {/* Content columns */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Short-term */}
            <div className="scroll-reveal">
              <div className="bg-secondary rounded-2xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">01</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide-xl text-foreground">
                    Short-Term Goals
                  </h3>
                </div>
                <p className="text-xs font-semibold uppercase tracking-super text-muted-foreground mb-4">
                  Within the next 1–2 years
                </p>
                <ul className="space-y-4" role="list">
                  {shortTermGoals?.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{goal}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Long-term */}
            <div className="scroll-reveal">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/5 border border-border flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-foreground">02</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide-xl text-foreground">
                    Long-Term Goals
                  </h3>
                </div>
                <p className="text-xs font-semibold uppercase tracking-super text-muted-foreground mb-4">
                  Within 5–10 years
                </p>
                <ul className="space-y-4" role="list">
                  {longTermGoals?.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{goal}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Narrative paragraph */}
            <div className="md:col-span-2 scroll-reveal">
              <blockquote className="border-l-4 border-accent pl-6 py-2">
                <p className="font-display text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
                  "Marketing, to me, is the art of making people feel understood. My goal is to build the skills that let me translate real human needs into campaigns that actually resonate — not just campaigns that look good on a brief."
                </p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-super text-muted-foreground">
                  — Vu Dang Anh Thi, 2026
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}