'use client';

import React, { useEffect, useRef } from 'react';

export default function ContactSection() {
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
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Decorative background text */}
      <div
        className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[20rem] italic text-primary-foreground">VT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="section-label text-accent block mb-6 scroll-reveal">Get in Touch</span>
            <h2 className="font-display text-section-xl font-light italic text-primary-foreground mb-6 scroll-reveal">
              Open to
              <br />
              <span className="not-italic font-semibold">Opportunities</span>
            </h2>
            <p className="text-base text-primary-foreground/60 leading-relaxed max-w-md scroll-reveal">
              I am actively seeking marketing internships and entry-level positions. If you are
              looking for a motivated, analytically-minded marketing graduate with hands-on campaign
              experience, I would love to connect.
            </p>
          </div>

          {/* Right: Contact details */}
          <div className="space-y-6 scroll-reveal">
            <a
              href="mailto:vudanganhthi@university.edu"
              className="flex items-center gap-4 group border border-primary-foreground/10 rounded-xl px-6 py-5 hover:border-accent transition-colors duration-300 min-h-[44px]"
              aria-label="Send email to Vu Dang Anh Thi"
            >
              <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-foreground/60 group-hover:text-accent transition-colors"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide-xl text-primary-foreground/40 mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">
                  vudanganhthi@university.edu
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vu-dang-anh-thi-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group border border-primary-foreground/10 rounded-xl px-6 py-5 hover:border-accent transition-colors duration-300 min-h-[44px]"
              aria-label="View Vu Dang Anh Thi's LinkedIn profile (opens in new tab)"
            >
              <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary-foreground/60 group-hover:text-accent transition-colors"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide-xl text-primary-foreground/40 mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">
                  linkedin.com/in/vu-dang-anh-thi-marketing
                </p>
              </div>
            </a>

            <a
              href="mailto:vudanganhthi@university.edu"
              className="btn-primary w-full justify-center mt-4 py-4"
              aria-label="Send a message to Vu Dang Anh Thi"
            >
              Send a Message
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
