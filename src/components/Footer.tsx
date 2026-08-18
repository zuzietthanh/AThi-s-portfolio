import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <AppLogo size={28} />
          <span className="font-display font-light text-base tracking-wide text-foreground">
            Vu Dang Anh Thi
          </span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer navigation">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center">
            Home
          </Link>
          <Link href="/statement-of-purpose" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center">
            Statement of Purpose
          </Link>
          <Link href="/cv" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center">
            CV
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground tracking-wide">
          © 2026 Vu Dang Anh Thi
        </p>
      </div>
    </footer>
  );
}