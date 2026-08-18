'use client';

import React, { useEffect, useRef } from 'react';
import RevisionNarrative from '@/app/cv/components/RevisionNarrative';
import PeerFeedback from '@/app/cv/components/PeerFeedback';

const cvRevisionNarrative = {
  title: 'CV Revision Narrative',
  summary:
    'My CV went through three major drafts before reaching its current form. The initial draft was a generic list that buried my leadership and community experience under vague descriptions. Through peer feedback and instructor guidance, I restructured the document to lead with a clear objective, reorganized activities to foreground measurable impact, and added a dedicated skills section that speaks directly to marketing tools and platforms.',
  stages: [
    {
      stage: 'Draft 1',
      description:
        'Generic format, no objective statement, task-focused descriptions ("helped with events"), no quantified results or awards section.',
    },
    {
      stage: 'Draft 2',
      description:
        'Added objective statement. Rewrote activity descriptions to be action-oriented. Added GPA and relevant coursework. Still lacked quantified achievements.',
    },
    {
      stage: 'Final Version',
      description:
        'Added metrics to key bullets (e.g., "led a 31-student team", "200-member charity"). Reorganized layout for visual scannability. Added awards section with Provincial Mathematics Olympiad gold medal. Highlighted multilingual skills and HSK certification.',
    },
  ],
};

const cvPeerFeedback = [
  {
    reviewer: 'Jordan Reyes',
    role: 'Peer Reviewer — Marketing Cohort',
    date: 'March 2026',
    feedback:
      'The first draft felt too generic — it could have been anyone\'s CV. The objective statement at the top really helped once you added it. I\'d suggest making the skills section more prominent since that\'s what recruiters scan first. Also, adding numbers to your achievements would make a big difference. "Organised events" doesn\'t stand out; "led a 31-student team to win first prize" does.',
    incorporated: true,
  },
  {
    reviewer: 'Prof. Sarah Mitchell',
    role: 'Marketing Communications Instructor',
    date: 'March 2026',
    feedback:
      'Strong improvement from Draft 1 to Draft 2. The layout is clean and professional. My main suggestion: tailor the objective/summary for each application rather than leaving it generic. The awards section is a real differentiator — the Provincial Mathematics Olympiad gold medal shows analytical strength which is valuable in marketing analytics roles. The formatting is consistent and easy to read.',
    incorporated: true,
  },
];

export default function CVDocument() {
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
    <section ref={ref} id="cv" className="py-20 md:py-28" aria-labelledby="cv-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div>
            <span className="section-label block mb-3">Artifact 02</span>
            <h2 id="cv-heading" className="font-display text-section-xl font-light text-foreground">
              Curriculum
              <br />
              <span className="italic">Vitae</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed md:pb-2">
            A clear, tailored CV for marketing roles — emphasizing leadership, community impact, and
            relevant skills.
          </p>
        </div>

        {/* CV Document Display */}
        <div className="scroll-reveal mb-14">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Document toolbar */}
            <div className="border-b border-border px-6 py-3 flex items-center justify-between bg-secondary">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide-xl text-muted-foreground">
                VuDangAnhThi_CV_2026.pdf
              </span>
              <a
                href="/assets/images/Vu_Dang_Anh_Thi_CV.pdf"
                download="Vu_Dang_Anh_Thi_CV.pdf"
                className="text-xs font-bold uppercase tracking-wide text-accent hover:text-foreground transition-colors min-h-[44px] flex items-center gap-1.5"
                aria-label="Download CV"
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
              </a>
            </div>

            {/* PDF Viewer — direct embed of the local file. Browsers that
                cannot render PDFs inline (notably mobile Safari) show the
                fallback link inside the <object> instead. */}
            <div className="w-full" style={{ height: '1000px' }}>
              <object
                data="/assets/images/Vu_Dang_Anh_Thi_CV.pdf"
                type="application/pdf"
                aria-label="Vu Dang Anh Thi Curriculum Vitae PDF"
                className="w-full h-full"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Your browser cannot display PDFs inline.
                  </p>
                  <a
                    href="/assets/images/Vu_Dang_Anh_Thi_CV.pdf"
                    className="btn-primary"
                    aria-label="Download Vu Dang Anh Thi CV as PDF"
                  >
                    Download the CV
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>

        {/* Revision + Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevisionNarrative data={cvRevisionNarrative} />
          <PeerFeedback feedbackItems={cvPeerFeedback} documentTitle="CV" />
        </div>
      </div>
    </section>
  );
}
