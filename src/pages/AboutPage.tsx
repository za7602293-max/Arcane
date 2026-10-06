import React from 'react';
import { PageRoute } from '../types/portfolio';
import { ArrowRight, Check, Compass, Terminal, Code2, Sparkles, Layers } from 'lucide-react';
import studioImage from '../assets/images/hero_creative_studio_1791272082227.jpg';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-10 space-y-24">
      {/* 1. Header & Lead Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
            <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">Biography</span>
            <span aria-hidden="true">·</span>
            <span>Design Director & Creative Technologist</span>
          </div>
          <h1 className="font-editorial text-5xl sm:text-7xl text-white tracking-tight leading-[1.05]">
            Bridging the chasm between design intent and production engineering.
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-[#a0a4b3] leading-relaxed font-light">
            <p>
              I am Kaelen Vance, a creative director and frontend architect with over a decade of experience designing and shipping digital experiences, scalable design systems, and high-performance web applications.
            </p>
            <p>
              My work exists at the intersection of Swiss typographic discipline and modern browser capabilities. Rather than treating design as a static Figma picture to be handed off and compromised, I write the code that brings interactions, spring dynamics, and layout physics to life.
            </p>
          </div>
        </div>

        {/* Visual Studio Portrait / Workspace */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#14161f] shadow-2xl relative">
            <img
              src={studioImage}
              alt="Kaelen Vance studio workspace"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="p-4 bg-[#0d0e14] border-t border-white/[0.08] text-xs text-[#8b8f9e]">
              <span className="text-white font-medium">Studio Kaelen Vance</span>
              <span className="mx-2">·</span>
              <span>San Francisco & Oslo</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Philosophy & Design Principles */}
      <section className="p-8 sm:p-14 rounded-2xl bg-[#111319] border border-white/[0.08] space-y-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
            Principles
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
            Operating Philosophies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <span className="font-mono-code text-xs text-[#ff4d36]">01 / Form Follows Performance</span>
            <h3 className="text-lg font-semibold text-white">Speed is the Canvas</h3>
            <p className="text-sm text-[#8b8f9e] leading-relaxed">
              A visually stunning website that takes four seconds to hydrate is a failed website. Every animation, font weight, and image pipeline must serve sub-second perceived response.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono-code text-xs text-[#ff4d36]">02 / Restraint Over Noise</span>
            <h3 className="text-lg font-semibold text-white">The Zero-Slop Standard</h3>
            <p className="text-sm text-[#8b8f9e] leading-relaxed">
              We never clutter interfaces with unnecessary gradient blobs, floating pills, or decorative badges. Strong typography, deliberate whitespace, and authentic contrast create enduring products.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono-code text-xs text-[#ff4d36]">03 / Autonomous Maintainability</span>
            <h3 className="text-lg font-semibold text-white">Clients Deserve Autonomy</h3>
            <p className="text-sm text-[#8b8f9e] leading-relaxed">
              Code should not be a trap. Whether deploying to Hostinger via static export or connecting a headless CMS, clients must be empowered to update their own stories without calling an engineer.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Capabilities & Technical Stack */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
            Toolkit
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
            Technologies & Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Compass className="w-4 h-4 text-[#ff4d36]" />
              <span>Design & Direction</span>
            </div>
            <ul className="space-y-2 text-xs text-[#8b8f9e]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Creative Direction & Brand Identity</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Design Systems & Token Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Editorial Layouts & Swiss Typography</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Figma Component Systems & Prototyping</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Code2 className="w-4 h-4 text-[#ff4d36]" />
              <span>Frontend Engineering</span>
            </div>
            <ul className="space-y-2 text-xs text-[#8b8f9e]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>React 19, Next.js & TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Tailwind CSS v4 & CSS Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Framer Motion & Micro-Interaction Springs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>WebGL, Three.js & HTML5 Canvas</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Layers className="w-4 h-4 text-[#ff4d36]" />
              <span>Architecture & CMS</span>
            </div>
            <ul className="space-y-2 text-xs text-[#8b8f9e]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Headless WordPress (REST / GraphQL)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Hostinger Static & Node Deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Core Web Vitals & Image Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36]" />
                <span>Semantic SEO & Structured Data</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Experience Trajectory */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
            Trajectory
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
            Experience & Roles
          </h2>
        </div>

        <div className="border border-white/[0.08] rounded-xl divide-y divide-white/[0.06] bg-[#111319]">
          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-white">Principal Designer & Creative Engineer</h3>
              <p className="text-xs text-[#8b8f9e]">Vance Studio — Independent Practice</p>
            </div>
            <span className="font-mono-code text-xs text-[#a0a4b3]">2022 — Present</span>
          </div>

          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-white">Design Systems Architect</h3>
              <p className="text-xs text-[#8b8f9e]">Nexus Systems Lab</p>
            </div>
            <span className="font-mono-code text-xs text-[#a0a4b3]">2020 — 2022</span>
          </div>

          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-white">Lead Interactive Developer</h3>
              <p className="text-xs text-[#8b8f9e]">Stratos Digital Agency</p>
            </div>
            <span className="font-mono-code text-xs text-[#a0a4b3]">2017 — 2020</span>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="p-8 sm:p-14 rounded-2xl bg-[#141620] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-white">
            Let’s build something enduring.
          </h2>
          <p className="text-sm text-[#8b8f9e] mt-1">
            Available for select advisory, design direction, and engineering roles.
          </p>
        </div>
        <button
          onClick={() => onRouteChange({ type: 'contact' })}
          className="px-6 py-3 text-sm font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
