'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import RevisionNarrative from '@/app/cv/components/RevisionNarrative';
import PeerFeedback from '@/app/cv/components/PeerFeedback';

const liRevisionNarrative = {
  title: 'LinkedIn Profile Revision Narrative',
  summary:
  'My LinkedIn profile started as a bare-bones digital copy of my CV — essentially a bulleted list with no headline personality and a default profile photo. Over two revision rounds, I transformed it into a cohesive personal brand presence with a compelling headline, an "About" section written in first person, and a featured section highlighting my best work.',
  stages: [
  {
    stage: 'Initial State',
    description:
    'Default headline ("Student at NYU"), no profile photo, no About section, no featured content. Connections under 50, no skills endorsed.'
  },
  {
    stage: 'Revision 1',
    description:
    'Added professional headshot, rewrote headline to "Marketing Student | Brand Strategy & Digital Campaigns | NYU \'26". Added 3-paragraph About section. Uploaded campaign work sample to Featured.'
  },
  {
    stage: 'Final Version',
    description:
    'Refined About section to 5 punchy sentences that convey personality and direction. Added Skills section with 10 relevant marketing skills. Requested endorsements from internship supervisor and professor. Grew connections to 180+. Added volunteer experience and relevant coursework.'
  }]

};

const liPeerFeedback = [
{
  reviewer: 'Priya Nair',
  role: 'Peer Reviewer — LinkedIn Workshop',
  date: 'April 2026',
  feedback:
  'The "Student at NYU" headline was a missed opportunity — it says nothing about what you do or what you\'re looking for. The revised headline is much stronger. The About section now reads like a real person wrote it, not a form. One suggestion: add the metrics from your internship directly into your experience descriptions, not just your CV — LinkedIn shows experience to recruiters too.',
  incorporated: true
},
{
  reviewer: 'Dr. Kevin Park',
  role: 'Marketing Department Faculty Advisor',
  date: 'May 2026',
  feedback:
  'Solid improvement. The profile now tells a coherent story from your academic background to your practical experience. I\'d recommend posting one piece of original content per week — even sharing and commenting on industry articles builds visibility. Also, your recommendations section is empty. Reach out to your internship supervisor for a written recommendation; it adds significant credibility.',
  incorporated: false
}];


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
    <section
      ref={ref}
      id="linkedin"
      className="py-20 md:py-28"
      aria-labelledby="li-heading">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div>
            <span className="section-label block mb-3">Artifact 04</span>
            <h2 id="li-heading" className="font-display text-section-xl font-light text-foreground">
              LinkedIn<br />
              <span className="italic">Profile</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed md:pb-2">
            Professional LinkedIn presence built to extend personal brand beyond the PDF and support multi-channel job seeking.
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
                linkedin.com/in/vu-dang-anh-thi-marketing
              </div>
            </div>

            {/* Profile content */}
            <div className="p-0">
              {/* Cover photo */}
              <div className="h-32 md:h-44 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
                <div className="absolute bottom-4 right-6 text-primary-foreground/20 font-display text-4xl italic font-light pointer-events-none select-none" aria-hidden="true">
                  Marketing
                </div>
              </div>

              <div className="px-6 md:px-10 pb-8">
                {/* Avatar + name row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-10 mb-6">
                  <div className="flex items-end gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-card overflow-hidden flex-shrink-0 bg-secondary">
                      <AppImage
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_193180e7a-1763297576058.png"
                        alt="Alexandra Chen professional headshot, clean background, warm natural light"
                        width={96}
                        height={96}
                        className="object-cover object-top w-full h-full" />
                      
                    </div>
                    <div className="pb-2">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        Vu Dang Anh Thi
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Marketing Student | Brand Strategy & Digital Campaigns
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://linkedin.com/in/vu-dang-anh-thi-marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-5 py-2.5 flex-shrink-0"
                    aria-label="View full LinkedIn profile (opens in new tab)">
                    
                    View Profile
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                {/* Location + connections */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-6">
                  <span>Ho Chi Minh City, Vietnam</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-accent font-medium">180+ connections</span>
                  <span aria-hidden="true">·</span>
                  <span>University</span>
                </div>

                {/* About */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="text-sm font-bold uppercase tracking-wide-xl text-foreground mb-3">About</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    I'm a marketing student who believes the best campaigns are built on genuine human insight — not just data dashboards. I've spent the last two years learning what moves people: through consumer behavior research, hands-on social media management, and a summer internship where I got to test those ideas in the real world.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-3">
                    I'm drawn to brand strategy and integrated marketing because I love the challenge of making something complex feel simple and something simple feel compelling. Currently looking for marketing coordinator and brand associate roles where I can keep learning fast.
                  </p>
                </div>

                {/* Experience snippet */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="text-sm font-bold uppercase tracking-wide-xl text-foreground mb-4">Experience</h4>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Social Media Marketing Intern</p>
                      <p className="text-xs text-muted-foreground">Bloom Creative Agency · Jun 2025 – Aug 2025</p>
                      <p className="text-xs text-muted-foreground mt-1">Grew client Instagram engagement 34% · Managed 4 brand accounts · Weekly analytics reporting</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide-xl text-foreground mb-4">Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Social Media Marketing', 'Brand Strategy', 'Content Creation', 'Google Analytics', 'Digital Marketing', 'Campaign Management', 'Canva', 'HubSpot', 'Email Marketing', 'SEO']?.map((skill) =>
                    <span key={skill} className="text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revision + Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevisionNarrative data={liRevisionNarrative} />
          <PeerFeedback feedbackItems={liPeerFeedback} documentTitle="LinkedIn Profile" />
        </div>
      </div>
    </section>);

}