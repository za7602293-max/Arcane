import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowUpRight, Grid, List } from 'lucide-react';

interface WorkPageProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Brand & Spatial', 'Systems & Fintech', 'Editorial & Web', 'E-Commerce', 'Architecture'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-10 space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
          <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">Archive</span>
          <span aria-hidden="true">·</span>
          <span>Selected Work 2024–2025</span>
        </div>
        <h1 className="font-editorial text-5xl md:text-7xl text-white tracking-tight">
          Crafted with intent & precision.
        </h1>
        <p className="text-base text-[#8b8f9e] leading-relaxed">
          A curated selection of digital products, design systems, and creative engineering projects built for ambitious brands and high-scale platforms.
        </p>
      </div>

      {/* Filter and View Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-y border-white/[0.08]">
        {/* Category Filter Buttons (Functional Segmented Control) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-[#0c0d10] font-semibold shadow-sm'
                  : 'text-[#8b8f9e] hover:text-white bg-white/[0.03] hover:bg-white/[0.07]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-md border border-white/[0.08]">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'grid' ? 'bg-white text-black' : 'text-[#8b8f9e] hover:text-white'
            }`}
            title="Grid view"
            aria-label="Grid view"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded transition-colors ${
              viewMode === 'list' ? 'bg-white text-black' : 'text-[#8b8f9e] hover:text-white'
            }`}
            title="List view"
            aria-label="List view"
          >
            <List className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content Rendering: Grid vs List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              variant={idx === 0 ? 'featured-large' : 'standard'}
            />
          ))}
        </div>
      ) : (
        /* Editorial Table / List View */
        <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#111319]">
          <div className="divide-y divide-white/[0.06]">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 hover:bg-white/[0.03] transition-colors cursor-pointer gap-4"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0 hidden sm:block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#ff4d36] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#8b8f9e] mt-0.5 max-w-md line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-[#8b8f9e]">
                  <span>{project.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-code tabular-nums">{project.year}</span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-white group-hover:bg-[#ff4d36] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
