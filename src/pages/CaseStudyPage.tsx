import React from 'react';
import { Project, PageRoute } from '../types/portfolio';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';

interface CaseStudyPageProps {
  project: Project;
  allProjects: Project[];
  onRouteChange: (route: PageRoute) => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  project,
  allProjects,
  onRouteChange,
  onSelectProject,
}) => {
  // Find next project in sequence
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className="pt-32 md:pt-40 pb-20 space-y-16 md:space-y-24">
      {/* 1. Header & Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <button
          onClick={() => onRouteChange({ type: 'work' })}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#8b8f9e] hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </button>

        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
            <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#a0a4b3] font-light leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>

        {/* Project Metadata Ribbon */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="text-[#6c7080] block mb-1 uppercase tracking-wider font-semibold">Client</span>
            <span className="text-white font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-[#6c7080] block mb-1 uppercase tracking-wider font-semibold">Role</span>
            <span className="text-white font-medium">{project.role}</span>
          </div>
          <div>
            <span className="text-[#6c7080] block mb-1 uppercase tracking-wider font-semibold">Timeline</span>
            <span className="text-white font-medium">{project.timeline}</span>
          </div>
          <div>
            <span className="text-[#6c7080] block mb-1 uppercase tracking-wider font-semibold">Deliverable</span>
            <span className="text-white font-medium">Production Application</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Visual Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#14161f] aspect-[16/9] shadow-2xl">
          <img
            src={project.image}
            alt={`${project.title} hero visual`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. Project Overview & Problem Space */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              01 / The Context
            </span>
            <h2 className="font-editorial text-3xl text-white mt-1">Project Overview</h2>
          </div>
          <div className="md:col-span-8 text-base text-[#c5c8d4] leading-relaxed">
            <p>{project.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-12 border-t border-white/[0.08]">
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              02 / The Challenge
            </span>
            <h2 className="font-editorial text-3xl text-white mt-1">Core Hurdles</h2>
          </div>
          <div className="md:col-span-8 text-base text-[#c5c8d4] leading-relaxed">
            <p>{project.challenge}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-12 border-t border-white/[0.08]">
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              03 / Strategic Approach
            </span>
            <h2 className="font-editorial text-3xl text-white mt-1">Methodology</h2>
          </div>
          <div className="md:col-span-8 text-base text-[#c5c8d4] leading-relaxed">
            <p>{project.approach}</p>
          </div>
        </div>
      </div>

      {/* 4. Architectural & Design Decisions */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 md:p-14 rounded-2xl bg-[#111319] border border-white/[0.08] space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              Engineering & Craft
            </span>
            <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
              Key Architecture Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.decisions.map((decision, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-xs font-mono-code text-[#ff4d36]">
                  Key Decision 0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{decision.title}</h3>
                <p className="text-sm text-[#8b8f9e] leading-relaxed">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Results & Measured Outcomes */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
            Impact & Validation
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
            Measurable Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.outcomes.map((outcome, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
              <div className="font-mono-code text-3xl font-medium text-white tabular-nums">
                {outcome.metric}
              </div>
              <div className="text-xs text-[#8b8f9e] mt-2 leading-snug">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Next Project Navigation Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 border-t border-white/[0.08]">
        <div
          onClick={() => {
            onSelectProject(nextProject);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer p-8 md:p-12 rounded-2xl bg-[#141620] hover:bg-[#181a26] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <span className="text-xs text-[#8b8f9e] uppercase tracking-wider font-semibold">
              Next Case Study
            </span>
            <h3 className="font-editorial text-3xl md:text-5xl text-white group-hover:text-[#ff4d36] transition-colors">
              {nextProject.title} — {nextProject.tagline}
            </h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/[0.06] group-hover:bg-[#ff4d36] flex items-center justify-center text-white transition-colors shrink-0">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
