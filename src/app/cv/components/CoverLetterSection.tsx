'use client';

import React, { useEffect, useRef } from 'react';

export default function CoverLetterSection() {
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
      id="cover-letter"
      className="py-20 md:py-24 bg-secondary"
      aria-labelledby="cl-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div>
            <span className="section-label block mb-3">Artifact 03</span>
            <h2 id="cl-heading" className="font-display text-section-xl font-light text-foreground">
              Cover
              <br />
              <span className="italic">Letter</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed md:pb-2">
            Custom cover letter for a digital marketing coordinator position, demonstrating targeted
            research and brand awareness.
          </p>
        </div>

        {/* Cover Letter Document */}
        <div className="scroll-reveal mb-14">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Toolbar */}
            <div className="border-b border-border px-6 py-3 flex items-center justify-between bg-background">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide-xl text-muted-foreground">
                VuDangAnhThi_CoverLetter_2026.pdf
              </span>
              {/* Spacer matching the traffic-light cluster so the filename stays centred */}
              <div className="w-[52px] flex-shrink-0" aria-hidden="true" />
            </div>

            {/* Intentionally empty — real cover letter to be added later */}
            <div className="h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
