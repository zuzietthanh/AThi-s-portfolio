'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Statement of Purpose', href: '/statement-of-purpose' },
  { label: 'CV', href: '/cv' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={32} onClick={undefined} />
            <span className="font-display font-light text-lg tracking-wide text-foreground">
              Vu Dang Anh Thi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="nav-link-underline text-xs font-semibold uppercase tracking-wide-xl text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link?.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary text-xs px-6 py-3">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 -translate-x-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {navLinks?.map((link, i) => (
          <Link
            key={link?.href}
            href={link?.href}
            onClick={() => setMenuOpen(false)}
            className="font-display font-light italic text-4xl text-foreground hover:text-accent transition-colors duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link?.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-4">
          Contact
        </Link>
      </div>
    </>
  );
}
