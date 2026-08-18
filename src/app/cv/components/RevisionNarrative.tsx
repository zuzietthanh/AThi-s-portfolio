'use client';

import React, { useEffect, useRef } from 'react';

interface RevisionStage {
  stage: string;
  description: string;
}

interface RevisionNarrativeProps {
  data: {
    title: string;
    summary: string;
    stages: RevisionStage[];
  };
}

export default function RevisionNarrative({ data }: RevisionNarrativeProps) {
  const ref = useRef<HTMLDivElement>(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-reveal bg-secondary rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
            aria-hidden="true"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide-xl text-accent">
            Revision Narrative
          </p>
          <h3 className="font-display text-lg font-medium text-foreground">{data.title}</h3>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 scroll-reveal">
        {data.summary}
      </p>

      {/* Stages */}
      <div className="space-y-4">
        {data.stages.map((stage, i) => (
          <div key={i} className="scroll-reveal flex items-start gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center">
                <span className="text-xs font-bold text-foreground">{i + 1}</span>
              </div>
              {i < data.stages.length - 1 && (
                <div className="w-px flex-1 mt-1 bg-border min-h-[24px]" aria-hidden="true" />
              )}
            </div>
            <div className="pb-4">
              <p className="text-xs font-bold uppercase tracking-wide-xl text-accent mb-1">
                {stage.stage}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
