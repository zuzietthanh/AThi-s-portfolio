'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const documents = [
{
  label: 'Artifact 01',
  title: 'Statement of Purpose',
  description: 'Professional goals, portfolio overview, and reflection on how these artifacts connect to my marketing career trajectory.',
  href: '/statement-of-purpose',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1433b60e9-1771909883832.png",
  imageAlt: 'Open notebook with handwritten notes on bright white desk, clean minimal workspace, warm natural light',
  tag: 'Reflection',
  offset: false
},
{
  label: 'Artifact 02',
  title: 'Curriculum Vitae',
  description: 'A clear, tailored CV highlighting marketing coursework, internship experience, campaign projects, and technical skills.',
  href: '/cv',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aea54509-1777840566801.png",
  imageAlt: 'Professional resume document on clean white background, organized layout, crisp typography, bright office setting',
  tag: 'CV / Resume',
  offset: true
},
{
  label: 'Artifact 03',
  title: 'Cover Letter',
  description: 'Custom cover letters for marketing positions, demonstrating targeted communication and understanding of brand voice.',
  href: '/cv#cover-letter',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14e6b39dc-1772397783728.png",
  imageAlt: 'Person writing a professional letter at a bright clean desk, modern minimalist workspace, natural daylight',
  tag: 'Cover Letter',
  offset: false
}];


export default function DocumentsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.image-reveal');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 200);
            });
            const scrollRevs = entry.target.querySelectorAll('.scroll-reveal');
            scrollRevs.forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), 100 + i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28"
      aria-label="Portfolio documents"
      id="portfolio">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="scroll-reveal">
            <span className="section-label block mb-4">Portfolio Documents</span>
            <h2 className="font-display text-section-xl font-light text-foreground">
              The Work<br />
              <span className="italic">Collection</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed scroll-reveal md:pb-2">
            Three professional documents curated for the Job Seeking package — each with revision history and peer feedback.
          </p>
        </div>

        {/* Document cards — staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start">
          {documents?.map((doc, i) =>
          <Link
            key={doc?.href}
            href={doc?.href}
            className={`group block scroll-reveal card-hover ${doc?.offset ? 'md:mt-16' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            aria-label={`View ${doc?.title}`}>
            
              {/* Image */}
              <div className="image-reveal aspect-[3/4] overflow-hidden rounded-xl mb-6 document-card">
                <div className="reveal-overlay rounded-xl" aria-hidden="true" />
                <AppImage
                src={doc?.image}
                alt={doc?.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              </div>

              {/* Text */}
              <div className="px-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="section-label">{doc?.label}</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide border border-border px-2 py-1 rounded">
                    {doc?.tag}
                  </span>
                </div>
                <h3 className="font-display font-medium text-card-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {doc?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doc?.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-wide-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  View Document
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}