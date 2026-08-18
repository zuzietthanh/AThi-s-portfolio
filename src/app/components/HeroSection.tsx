'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageContainerRef.current) {
        imageContainerRef.current.classList.add('revealed');
      }
      if (textRef.current) {
        const children = textRef.current.querySelectorAll('.opacity-initial');
        children.forEach((el, i) => {
          setTimeout(
            () => {
              el.classList.add('animate-fade-up');
              (el as HTMLElement).style.opacity = '1';
            },
            300 + i * 120
          );
        });
        const plainChildren = textRef.current.querySelectorAll('.opacity-initial-plain');
        plainChildren.forEach((el, i) => {
          setTimeout(
            () => {
              el.classList.add('animate-fade-in');
              (el as HTMLElement).style.opacity = '1';
            },
            400 + i * 100
          );
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const parallaxEl = sectionRef.current.querySelector('.parallax-hero-img') as HTMLElement;
      if (parallaxEl) {
        parallaxEl.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay z-[1]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[85vh]">
          {/* Left: Text Content */}
          <div
            ref={textRef}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center pb-12 lg:pb-0"
          >
            <span className="section-label opacity-initial-plain mb-8 block">
              Marketing Portfolio · 2026
            </span>

            <h1 className="font-display text-hero-xl font-light italic text-foreground opacity-initial leading-none mb-6">
              Vu Dang
              <br />
              <span className="not-italic font-semibold">Anh Thi</span>
            </h1>

            <div className="divider-accent mb-8 opacity-initial" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm opacity-initial mb-10">
              Marketing student passionate about brand strategy, digital campaigns, and consumer
              behavior. Seeking opportunities to contribute fresh thinking to forward-looking
              brands.
            </p>

            <div className="flex flex-wrap items-center gap-4 opacity-initial">
              <Link href="/statement-of-purpose" className="btn-primary">
                View Portfolio
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
              <Link href="/cv" className="btn-outline">
                View CV
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:flex items-center gap-4 mt-16 opacity-initial-plain">
              <span className="text-xs font-semibold uppercase tracking-super text-muted-foreground">
                Scroll
              </span>
              <div className="w-px h-10 bg-border relative overflow-hidden">
                <div
                  className="scroll-line-anim absolute top-0 left-0 w-full h-full bg-accent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
            <div
              ref={imageContainerRef}
              className="image-reveal w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden relative"
            >
              <div className="reveal-overlay rounded-2xl" aria-hidden="true" />
              <div className="parallax-hero-img w-full h-full">
                <AppImage
                  src="/assets/images/image-1787068988743.png"
                  alt="Vu Dang Anh Thi, Marketing student at VinUniversity, graduation photo"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-border">
                <p className="text-xs font-bold uppercase tracking-wide-xl text-accent mb-0.5">
                  Currently seeking
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Marketing Internships & Entry-Level Roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.06] z-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="vertical-text font-display text-xs text-foreground">
          Marketing · Brand · Strategy · Digital
        </span>
      </div>
    </section>
  );
}
