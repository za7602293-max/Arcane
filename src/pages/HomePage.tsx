import React from 'react';
import { Project, BlogPost, PageRoute } from '../types/portfolio';
import { HeroCanvas } from '../components/HeroCanvas';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowUpRight, ArrowRight, Sparkles, Terminal, Compass, LayoutGrid } from 'lucide-react';

interface HomePageProps {
  projects: Project[];
  blogPosts: BlogPost[];
  onRouteChange: (route: PageRoute) => void;
  onSelectProject: (project: Project) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  projects,
  blogPosts,
  onRouteChange,
  onSelectProject,
  onSelectPost,
}) => {
  const featuredProjects = projects.slice(0, 4);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-white/[0.06]">
        <HeroCanvas />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl space-y-6">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-[#8b8f9e]">
              <span className="text-white font-medium">Design Director & Creative Developer</span>
              <span aria-hidden="true">·</span>
              <span>Based in SF & Oslo</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#10b981]">Available for Q3/Q4</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.04]">
              Designing digital experiences that <span className="italic font-normal text-[#ff4d36]">move people.</span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-xl text-[#a2a6b7] leading-relaxed max-w-2xl font-light">
              Designer and developer creating thoughtful digital products, brands, and experiences with a balance of strategy, design, and technology.
            </p>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRouteChange({ type: 'work' })}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#ff4d36]/20 cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onRouteChange({ type: 'blog' })}
                className="px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Read the Journal</span>
                <ArrowUpRight className="w-4 h-4 text-[#8b8f9e]" />
              </button>
            </div>
          </div>

          {/* Core Stats / Proof Anchor */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-mono-code text-2xl md:text-3xl font-medium text-white tabular-nums">10+</div>
              <div className="text-xs text-[#8b8f9e] mt-1">Years Design & Engineering</div>
            </div>
            <div>
              <div className="font-mono-code text-2xl md:text-3xl font-medium text-white tabular-nums">sub-1s</div>
              <div className="text-xs text-[#8b8f9e] mt-1">Target Perceived Page Loads</div>
            </div>
            <div>
              <div className="font-mono-code text-2xl md:text-3xl font-medium text-white tabular-nums">40+</div>
              <div className="text-xs text-[#8b8f9e] mt-1">Production Products Shipped</div>
            </div>
            <div>
              <div className="font-mono-code text-2xl md:text-3xl font-medium text-white tabular-nums">100%</div>
              <div className="text-xs text-[#8b8f9e] mt-1">Bespoke Clean Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK (Varied Layout Showcase) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              Portfolio Showcase
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl text-white mt-1">
              Selected Projects
            </h2>
          </div>
          <button
            onClick={() => onRouteChange({ type: 'work' })}
            className="text-xs md:text-sm font-medium text-[#c5c8d4] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Explore All 5 Archive Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#ff4d36]" />
          </button>
        </div>

        {/* Varied Layout Grid */}
        <div className="space-y-16">
          {/* 1. Large Featured Project (AURA) */}
          {featuredProjects[0] && (
            <div className="border-b border-white/[0.06] pb-16">
              <ProjectCard
                project={featuredProjects[0]}
                onSelect={onSelectProject}
                variant="featured-large"
              />
            </div>
          )}

          {/* 2. Two-Column Project Section (NEXUS & MONO) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-white/[0.06] pb-16">
            {featuredProjects[1] && (
              <ProjectCard
                project={featuredProjects[1]}
                onSelect={onSelectProject}
                variant="standard"
              />
            )}
            {featuredProjects[2] && (
              <ProjectCard
                project={featuredProjects[2]}
                onSelect={onSelectProject}
                variant="standard"
              />
            )}
          </div>

          {/* 3. Full-Width Visual Project (VANTA) */}
          {featuredProjects[3] && (
            <div>
              <ProjectCard
                project={featuredProjects[3]}
                onSelect={onSelectProject}
                variant="wide"
              />
            </div>
          )}
        </div>
      </section>

      {/* 3. CORE DISCIPLINES & VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 md:p-14 rounded-2xl bg-[#111319] border border-white/[0.08]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              Strategic Capabilities
            </span>
            <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
              Where Design Integrity Meets Technical Rigor
            </h2>
            <p className="text-sm text-[#8b8f9e] mt-2 leading-relaxed">
              Most projects fail in the handoff chasm between designers who do not understand code and developers who do not care about typography. I bridge both sides directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-xs font-mono-code text-[#ff4d36]">01. Creative Direction</div>
              <h3 className="text-lg font-semibold text-white">Visual Identity & Editorial Web</h3>
              <p className="text-sm text-[#8b8f9e] leading-relaxed">
                Brand narrative, typography direction, and bespoke layouts that feel tactile, confident, and distinctly human—avoiding generic template cliches.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono-code text-[#ff4d36]">02. Frontend Architecture</div>
              <h3 className="text-lg font-semibold text-white">React, Next.js & Modern Web</h3>
              <p className="text-sm text-[#8b8f9e] leading-relaxed">
                Clean TypeScript codebases engineered for speed, modularity, and effortless long-term maintenance. Seamless deployment to Hostinger or modern edge CDNs.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono-code text-[#ff4d36]">03. Interaction Engineering</div>
              <h3 className="text-lg font-semibold text-white">Micro-Interactions & Spring Physics</h3>
              <p className="text-sm text-[#8b8f9e] leading-relaxed">
                Subtle cursor kinematics, buttery transitions, and zero-latency felt interactions that give digital products physical presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECENT JOURNAL ENTRIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              The Journal
            </span>
            <h2 className="font-editorial text-3xl md:text-4xl text-white mt-1">
              Thoughts on Design & Code
            </h2>
          </div>
          <button
            onClick={() => onRouteChange({ type: 'blog' })}
            className="text-xs md:text-sm font-medium text-[#c5c8d4] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4 text-[#ff4d36]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer flex flex-col justify-between p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
                  <span className="text-[#a0a4b3]">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ff4d36] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#8b8f9e] line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 flex items-center text-xs font-medium text-white/80 group-hover:text-white gap-1">
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4d36]" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. INVITATION / CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 sm:p-14 rounded-2xl bg-gradient-to-r from-[#14161f] via-[#11131a] to-[#0e0f14] border border-white/[0.09] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              Next Steps
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white">
              Have an ambitious project in mind?
            </h2>
            <p className="text-sm text-[#8b8f9e]">
              Currently open to select design direction and frontend architecture engagements for Q3 and Q4.
            </p>
          </div>
          <button
            onClick={() => onRouteChange({ type: 'contact' })}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#ff4d36]/25 cursor-pointer"
          >
            <span>Initiate Collaboration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
