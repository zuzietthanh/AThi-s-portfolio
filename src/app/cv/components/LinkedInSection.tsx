'use client';

import React, { useEffect, useRef } from 'react';

export default function LinkedInSection() {
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
    <section ref={ref} id="linkedin" className="py-20 md:py-28" aria-labelledby="li-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div>
            <span className="section-label block mb-3">Artifact 04</span>
            <h2 id="li-heading" className="font-display text-section-xl font-light text-foreground">
              LinkedIn
              <br />
              <span className="italic">Profile</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed md:pb-2">
            Professional LinkedIn presence built to extend personal brand beyond the PDF and support
            multi-channel job seeking.
          </p>
        </div>

        {/* LinkedIn Profile Card Mockup */}
        <div className="scroll-reveal mb-14">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Browser bar */}
            <div className="border-b border-border px-6 py-3 flex items-center gap-3 bg-secondary">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
              </div>
              <div className="flex-1 bg-background rounded px-3 py-1.5 text-xs text-muted-foreground font-mono">
                linkedin.com/in/thivudanganh
              </div>
            </div>

            {/* Intentionally empty — real LinkedIn profile content to be added later */}
            <div className="h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
