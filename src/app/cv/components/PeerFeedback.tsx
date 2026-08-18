'use client';

import React, { useEffect, useRef } from 'react';

interface FeedbackItem {
  reviewer: string;
  role: string;
  date: string;
  feedback: string;
  incorporated: boolean;
}

interface PeerFeedbackProps {
  feedbackItems: FeedbackItem[];
  documentTitle: string;
}

export default function PeerFeedback({ feedbackItems, documentTitle }: PeerFeedbackProps) {
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
    <div ref={ref} className="scroll-reveal bg-card border border-border rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/5 border border-border flex items-center justify-center flex-shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide-xl text-muted-foreground">
            Peer Feedback
          </p>
          <h3 className="font-display text-lg font-medium text-foreground">
            {documentTitle} Feedback Documentation
          </h3>
        </div>
      </div>

      <div className="space-y-5">
        {feedbackItems.map((item, i) => (
          <div key={i} className="scroll-reveal feedback-card rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{item.reviewer}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                {item.incorporated && (
                  <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    Incorporated
                  </span>
                )}
              </div>
            </div>
            <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
              &quot;{item.feedback}&quot;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
