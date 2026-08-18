'use client';

import React, { useEffect, useRef } from 'react';
import RevisionNarrative from '@/app/cv/components/RevisionNarrative';
import PeerFeedback from '@/app/cv/components/PeerFeedback';

const clRevisionNarrative = {
  title: 'Cover Letter Revision Narrative',
  summary:
    'My cover letter evolved significantly from a formulaic, generic opener ("I am writing to apply for…") to a targeted, story-driven letter that opens with a specific observation about the company. Through three drafts, I learned that the best cover letters read less like applications and more like the opening of a professional conversation.',
  stages: [
    {
      stage: 'Draft 1',
      description:
        'Generic opening, company name not mentioned until paragraph 3, focused entirely on my needs rather than what I could offer. Lacked any specific knowledge of the employer.',
    },
    {
      stage: 'Draft 2',
      description:
        'Rewrote opening to lead with a specific campaign I admired from the target company. Added a concrete example of my work. Still slightly too long at 450+ words.',
    },
    {
      stage: 'Final Version',
      description:
        "Tightened to 320 words. Opening hook references company's recent sustainability campaign. Middle paragraph leads with the Instagram engagement metric from my internship. Closing is confident and specific about the role.",
    },
  ],
};

const clPeerFeedback = [
  {
    reviewer: 'Marcus Thompson',
    role: 'Peer Reviewer — Career Services Workshop',
    date: 'April 2026',
    feedback:
      'The opening in Draft 1 was really generic. Starting with "I am a marketing student" is something every recruiter reads 50 times a day. The revised version that opens with the company\'s campaign is so much stronger — it immediately shows you did your research. The specific metric in paragraph two is the strongest part of the letter.',
    incorporated: true,
  },
  {
    reviewer: 'Career Services Advisor',
    role: 'University Career Development Center',
    date: 'April 2026',
    feedback:
      'Well-structured and professional. My suggestion: your closing is a bit passive — "I hope to hear from you" undersells your confidence. Change it to a more assertive close that reaffirms your fit. Also, the letter is about 100 words too long for modern recruiting — most hiring managers spend less than 30 seconds on a cover letter, so every word needs to earn its place.',
    incorporated: true,
  },
];

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
              <button
                className="text-xs font-bold uppercase tracking-wide text-accent hover:text-foreground transition-colors min-h-[44px] flex items-center gap-1.5"
                aria-label="Download cover letter"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </button>
            </div>

            {/* Letter Content */}
            <div className="p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground">Vu Dang Anh Thi</p>
                <p className="text-xs text-muted-foreground">
                  Ho Chi Minh City, Vietnam · thivudanganh@gmail.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">April 15, 2026</p>
              </div>

              <div className="mb-8 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Hiring Manager</p>
                <p>Digital Marketing Team</p>
                <p>Meridian Brands Inc.</p>
                <p>New York, NY 10001</p>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>Dear Hiring Manager,</p>

                <p>
                  Your recent &quot;Roots & Routes&quot; sustainability campaign stopped me
                  mid-scroll — not because of the visuals alone, but because of how precisely it
                  spoke to a 24-year-old who cares about both aesthetics and accountability. That
                  campaign is exactly the kind of work I want to contribute to, which is why I am
                  writing to apply for the Digital Marketing Coordinator position at Meridian
                  Brands.
                </p>

                <p>
                  As a marketing student with hands-on internship experience, I have developed a
                  practical understanding of what moves numbers and what moves people. During my
                  summer at Bloom Creative Agency, I grew a client&apos;s Instagram engagement rate
                  by 34% over eight weeks through a content strategy grounded in audience data
                  rather than guesswork. I learned that the most effective content is not the most
                  polished — it is the most relevant. That insight shapes how I approach every
                  brief.
                </p>

                <p>
                  I bring proficiency in Google Analytics, Meta Business Suite, and HubSpot,
                  alongside a genuine enthusiasm for the intersection of data and storytelling that
                  defines modern marketing. I am also a fast learner who thrives in collaborative
                  environments — at the Student Union, I coordinated with a five-person team to
                  launch campaigns that drove a 15% increase in event attendance.
                </p>

                <p>
                  I would welcome the opportunity to discuss how my background and enthusiasm for
                  Meridian&apos;s brand vision could contribute to your team. I am available for a
                  conversation at your convenience.
                </p>

                <p className="mt-6">
                  Sincerely,
                  <br />
                  <span className="font-display font-medium italic text-base text-foreground">
                    Vu Dang Anh Thi
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Revision + Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevisionNarrative data={clRevisionNarrative} />
          <PeerFeedback feedbackItems={clPeerFeedback} documentTitle="Cover Letter" />
        </div>
      </div>
    </section>
  );
}
