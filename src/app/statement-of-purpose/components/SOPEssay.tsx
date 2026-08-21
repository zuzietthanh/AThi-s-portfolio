'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SOPEssay() {
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
      { threshold: 0.05 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      aria-labelledby="statement-heading"
      id="statement"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="scroll-reveal mb-12">
          <span className="section-label block mb-4">The Statement</span>
          <h2
            id="statement-heading"
            className="font-display text-3xl md:text-4xl font-light italic text-foreground"
          >
            Statement of Purpose
          </h2>
          <div className="divider-accent mt-6" />
        </div>

        {/* Essay body */}
        <div className="scroll-reveal space-y-7">
          <p className="text-base md:text-lg text-foreground leading-[1.85]">
            The first real marketing decision I ever made was not for a client, but for a stage.
            Before my 31-student team and I choreographed our performance for the &quot;Giai Dieu
            Tuoi Hong&quot; music contest, I ran a survey to find out which concept our audience
            actually wanted to see, and we built the routine around what they told us. We won first
            prize in the school. My next step is to complete a marketing internship at a consumer
            brand or digital agency next summer, applying my knowledge to real campaigns through
            audience research and content creation. I will then graduate from VinUniversity&apos;s
            Marketing program and apply for a Master&apos;s program in China, continuing my
            marketing training while improving my Mandarin proficiency to HSK 5 or higher. My
            long-term goal is to open a Chinese language center in Vietnam. This is closely related
            to marketing: a language center is a business before it is a classroom, so building a
            brand, creating content for the right audiences, and earning referrals from parents all
            matter as much as teaching does. Studying in China is how I will earn the credibility to
            be that founder and first marketer.
          </p>

          <p className="text-base md:text-lg text-foreground leading-[1.85]">
            I have chosen to do a Job Seeking package instead of an Exchange Study package, as an
            internship is my immediate next step. The documents I will use throughout this year are
            contained in this package. This package begins with a clear objective for my job search,
            then builds into the documents that support it: my CV and cover letter. Both are aimed
            at the same reader, a hiring manager reviewing dozens of applications in a short window,
            so clarity matters as much as content. The CV outlines the skills I bring to the role;
            the cover letter gives it a voice, proving I have researched the organization and
            explaining why I would be a strong fit.
          </p>

          <p className="text-base md:text-lg text-foreground leading-[1.85]">
            When I first started this course, I wrote in a very safe way. The introductions I wrote
            for my essays were mainly paraphrased versions of the prompt. They included my opinion
            and were made up mainly of simple declarative sentences, which felt easier to control. I
            can now point to three real changes in how I write. First, an introduction has to work
            harder than a paraphrase; I now open with a &quot;hook,&quot; and this statement&apos;s
            own opening is an example. Second, I now restate a paragraph&apos;s main point at the
            end as well as the start, which makes the argument easier to follow. Third, I have
            widened my range deliberately, using more conditional and passive structures and a
            larger stock of collocations, as naturally as I can manage. Using AI productively has
            been a large part of my revising. Rather than simply pasting my work in to check for
            grammar errors or generate counterarguments, I have studied academic registers and built
            a stock of collocations to use in my own writing, so my English sounds natural rather
            than translated. And as a result, my writing has dramatically improved.
          </p>
        </div>

        {/* Closing CTA */}
        <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 scroll-reveal">
          <div>
            <p className="font-display text-xl md:text-2xl font-light italic text-foreground mb-2">
              Ready to explore the documents?
            </p>
            <p className="text-sm text-muted-foreground">
              Review the CV and cover letter described above.
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
