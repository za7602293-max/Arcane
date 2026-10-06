import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types/portfolio';
import { ArrowUpRight, Menu, X, BookOpen, Layers } from 'lucide-react';

interface NavigationProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenHandoff: () => void;
  onOpenCMS: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentRoute,
  onRouteChange,
  onOpenHandoff,
  onOpenCMS,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (type: string) => {
    if (type === 'work' && (currentRoute.type === 'work' || currentRoute.type === 'case-study')) return true;
    if (type === 'blog' && (currentRoute.type === 'blog' || currentRoute.type === 'blog-post')) return true;
    return currentRoute.type === type;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick({ type: 'home' })}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-editorial text-2xl md:text-3xl tracking-tight text-white group-hover:text-[#ff4d36] transition-colors duration-200">
            Kaelen Vance
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button
            onClick={() => handleNavClick({ type: 'home' })}
            className={`cursor-pointer transition-colors relative py-1 ${
              currentRoute.type === 'home'
                ? 'text-white font-semibold'
                : 'text-[#8b8f9e] hover:text-white'
            }`}
          >
            Overview
            {currentRoute.type === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff4d36]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick({ type: 'work' })}
            className={`cursor-pointer transition-colors relative py-1 ${
              isActive('work')
                ? 'text-white font-semibold'
                : 'text-[#8b8f9e] hover:text-white'
            }`}
          >
            Selected Work
            {isActive('work') && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff4d36]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick({ type: 'about' })}
            className={`cursor-pointer transition-colors relative py-1 ${
              isActive('about')
                ? 'text-white font-semibold'
                : 'text-[#8b8f9e] hover:text-white'
            }`}
          >
            About
            {isActive('about') && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff4d36]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick({ type: 'blog' })}
            className={`cursor-pointer transition-colors relative py-1 ${
              isActive('blog')
                ? 'text-white font-semibold'
                : 'text-[#8b8f9e] hover:text-white'
            }`}
          >
            Journal
            {isActive('blog') && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff4d36]" />
            )}
          </button>
          <button
            onClick={() => handleNavClick({ type: 'contact' })}
            className={`cursor-pointer transition-colors relative py-1 ${
              isActive('contact')
                ? 'text-white font-semibold'
                : 'text-[#8b8f9e] hover:text-white'
            }`}
          >
            Contact
            {isActive('contact') && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff4d36]" />
            )}
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCMS}
            className="px-3.5 py-1.5 text-xs font-medium text-[#c8cbd5] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.16] rounded-md transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            title="Live Content Manager Simulator (Hostinger/Headless friendly)"
          >
            <Layers className="w-3.5 h-3.5 text-[#ff4d36]" />
            <span>Content Studio</span>
          </button>

          <button
            onClick={onOpenHandoff}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#181a20] hover:bg-[#20232c] border border-white/[0.1] rounded-md transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            title="View Client Hand-Off & Deployment Guide for Hostinger"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#8b8f9e]" />
            <span>Client Hand-Off</span>
          </button>

          <button
            onClick={() => handleNavClick({ type: 'contact' })}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-all duration-200 flex items-center gap-1 whitespace-nowrap cursor-pointer shadow-sm shadow-[#ff4d36]/25"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCMS}
            className="p-2 text-xs text-[#ff4d36] bg-white/[0.05] rounded-md border border-white/[0.08]"
            aria-label="Open Content Studio"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-white/90 hover:text-white rounded-md bg-white/[0.04] border border-white/[0.08] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d10] border-b border-white/[0.1] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base">
            <button
              onClick={() => handleNavClick({ type: 'home' })}
              className={`text-left py-2 font-medium transition-colors ${
                currentRoute.type === 'home' ? 'text-[#ff4d36]' : 'text-neutral-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick({ type: 'work' })}
              className={`text-left py-2 font-medium transition-colors ${
                isActive('work') ? 'text-[#ff4d36]' : 'text-neutral-300'
              }`}
            >
              Selected Work
            </button>
            <button
              onClick={() => handleNavClick({ type: 'about' })}
              className={`text-left py-2 font-medium transition-colors ${
                isActive('about') ? 'text-[#ff4d36]' : 'text-neutral-300'
              }`}
            >
              About & Trajectory
            </button>
            <button
              onClick={() => handleNavClick({ type: 'blog' })}
              className={`text-left py-2 font-medium transition-colors ${
                isActive('blog') ? 'text-[#ff4d36]' : 'text-neutral-300'
              }`}
            >
              Journal & Insights
            </button>
            <button
              onClick={() => handleNavClick({ type: 'contact' })}
              className={`text-left py-2 font-medium transition-colors ${
                isActive('contact') ? 'text-[#ff4d36]' : 'text-neutral-300'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCMS();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-white bg-white/[0.06] border border-white/[0.12] rounded-md flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#ff4d36]" />
              <span>Live Content Studio (Simulator)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHandoff();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-white bg-[#181a20] border border-white/[0.1] rounded-md flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#8b8f9e]" />
              <span>Client Hand-Off & Deployment Guide</span>
            </button>

            <button
              onClick={() => handleNavClick({ type: 'contact' })}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#ff4d36] rounded-md flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
