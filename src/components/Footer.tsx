import React from 'react';
import { PageRoute } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenHandoff: () => void;
  onOpenCMS: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRouteChange,
  onOpenHandoff,
  onOpenCMS,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#090a0d] text-[#8b8f9e] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Brand & Thesis */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-editorial text-3xl text-white tracking-tight">
              Kaelen Vance
            </h3>
            <p className="text-sm leading-relaxed text-[#a0a4b3] max-w-sm">
              Design director and creative developer crafting bespoke digital experiences, design systems, and fast headless web architectures.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#a0a4b3]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Available for select design & engineering collaborations</span>
              <span aria-hidden="true">·</span>
              <span>UTC-8 (PST)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onRouteChange({ type: 'home' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange({ type: 'work' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work (5 Projects)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange({ type: 'about' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange({ type: 'blog' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Journal & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onRouteChange({ type: 'contact' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Handoff & CMS */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Client & Production Hand-Off
            </div>
            <p className="text-xs text-[#8b8f9e] leading-relaxed">
              Designed as a production sample for Freelancer.com review. Includes turnkey Hostinger deployment scripts, headless CMS integration, and non-developer content workflows.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenHandoff}
                className="text-left text-xs font-medium text-white hover:text-[#ff4d36] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Hostinger & CMS Hand-Off Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4d36]" />
              </button>
              <button
                onClick={onOpenCMS}
                className="text-left text-xs font-medium text-[#c8cbd5] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch Interactive Content Studio Simulator</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8f9e]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6f7382] gap-4">
          <p>© {currentYear} Kaelen Vance Studio. Crafted with React, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Read.cv
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
