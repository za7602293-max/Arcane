import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  variant?: 'featured-large' | 'standard' | 'wide';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  variant = 'standard',
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer block relative flex flex-col justify-between"
    >
      {/* Media container */}
      <div
        className={`relative overflow-hidden rounded-xl bg-[#14161d] border border-white/[0.08] group-hover:border-white/[0.2] transition-all duration-500 ${
          variant === 'featured-large'
            ? 'aspect-[16/10] md:aspect-[16/9]'
            : variant === 'wide'
            ? 'aspect-[21/9]'
            : 'aspect-[4/3]'
        }`}
      >
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} - ${project.tagline}`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#181a24] to-[#0f1017]">
            <span className="font-editorial text-4xl text-white/80">{project.title}</span>
            <span className="text-xs text-[#8b8f9e] mt-2">{project.category}</span>
          </div>
        )}

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

        {/* Floating action indicator */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0c0d10]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#ff4d36] group-hover:border-[#ff4d36] transition-all duration-300 transform group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Editorial Content & Zero-Pill Metadata */}
      <div className="pt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
          <span className="text-[#a0a4b3] font-medium">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#ff4d36] transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-[#8b8f9e] line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>
      </div>
    </article>
  );
};
