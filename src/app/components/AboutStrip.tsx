'use client';

import React, { useEffect, useRef } from 'react';

const stats = [
  { value: 'GPA 3.8', label: 'Academic Standing' },
  { value: '2+', label: 'Years of Marketing Experience' },
  { value: '5+', label: 'Campaign Projects Completed' },
  { value: 'Dean\'s List', label: 'Recognition' },
];

export default function AboutStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.scroll-reveal');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 border-y border-border bg-secondary"
      aria-label="Quick stats"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats?.map((stat, i) => (
            <div key={i} className="scroll-reveal text-center md:text-left md:border-l md:border-border md:pl-8 first:border-0 first:pl-0">
              <p className="font-display font-semibold text-2xl md:text-3xl text-foreground tracking-tight mb-1">
                {stat?.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide-xl text-muted-foreground">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}