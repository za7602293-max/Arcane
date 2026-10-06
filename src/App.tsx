import React, { useState, useEffect } from 'react';
import { PageRoute, Project, BlogPost } from './types/portfolio';
import { initialProjects } from './data/projectsData';
import { initialBlogPosts } from './data/blogData';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HandoffModal } from './components/HandoffModal';
import { ContentManagerModal } from './components/ContentManagerModal';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { Sparkles, Layers, BookOpen, X } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'home' });
  const [projects] = useState<Project[]>(initialProjects);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  
  const [isHandoffOpen, setIsHandoffOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [showClientBadge, setShowClientBadge] = useState(true);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleSelectProject = (project: Project) => {
    setCurrentRoute({ type: 'case-study', slug: project.slug });
  };

  const handleSelectPost = (post: BlogPost) => {
    setCurrentRoute({ type: 'blog-post', slug: post.slug });
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f4f4f6] flex flex-col font-sans-ui selection:bg-[#ff4d36] selection:text-white">
      {/* Sample Evaluation Banner for Client */}
      {showClientBadge && (
        <aside
          aria-label="Demo notice"
          className="bg-[#151722] border-b border-white/[0.08] px-4 py-2 text-xs text-[#a0a4b3] flex items-center justify-between z-50 relative"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff4d36]" />
              <strong className="text-white font-medium">Sample Portfolio Redesign Demo</strong>
              <span className="hidden md:inline text-white/40">·</span>
              <span className="hidden md:inline">Prepared for Freelancer.com Client (Hostinger + CMS Architecture)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCMSOpen(true)}
                className="text-xs text-white hover:text-[#ff4d36] font-medium flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#ff4d36]" />
                <span>Test Live Content Studio</span>
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setIsHandoffOpen(true)}
                className="text-xs text-white hover:text-[#ff4d36] font-medium flex items-center gap-1 cursor-pointer transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#8b8f9e]" />
                <span>Hostinger Hand-Off Guide</span>
              </button>
              <button
                onClick={() => setShowClientBadge(false)}
                className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer ml-2"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main 3-Zone Navigation */}
      <Navigation
        currentRoute={currentRoute}
        onRouteChange={setCurrentRoute}
        onOpenHandoff={() => setIsHandoffOpen(true)}
        onOpenCMS={() => setIsCMSOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentRoute.type === 'home' && (
          <HomePage
            projects={projects}
            blogPosts={blogPosts}
            onRouteChange={setCurrentRoute}
            onSelectProject={handleSelectProject}
            onSelectPost={handleSelectPost}
          />
        )}

        {currentRoute.type === 'work' && (
          <WorkPage
            projects={projects}
            onSelectProject={handleSelectProject}
          />
        )}

        {currentRoute.type === 'case-study' && (() => {
          const project = projects.find((p) => p.slug === currentRoute.slug) || projects[0];
          return (
            <CaseStudyPage
              project={project}
              allProjects={projects}
              onRouteChange={setCurrentRoute}
              onSelectProject={handleSelectProject}
            />
          );
        })()}

        {currentRoute.type === 'about' && (
          <AboutPage onRouteChange={setCurrentRoute} />
        )}

        {currentRoute.type === 'blog' && (
          <BlogPage
            blogPosts={blogPosts}
            onSelectPost={handleSelectPost}
            onOpenCMS={() => setIsCMSOpen(true)}
          />
        )}

        {currentRoute.type === 'blog-post' && (() => {
          const post = blogPosts.find((p) => p.slug === currentRoute.slug) || blogPosts[0];
          return (
            <BlogPostPage
              post={post}
              allPosts={blogPosts}
              onRouteChange={setCurrentRoute}
              onSelectPost={handleSelectPost}
            />
          );
        })()}

        {currentRoute.type === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        onRouteChange={setCurrentRoute}
        onOpenHandoff={() => setIsHandoffOpen(true)}
        onOpenCMS={() => setIsCMSOpen(true)}
      />

      {/* Client Hand-Off Guide Modal */}
      <HandoffModal
        isOpen={isHandoffOpen}
        onClose={() => setIsHandoffOpen(false)}
      />

      {/* Interactive Content Manager Simulator Modal */}
      <ContentManagerModal
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        blogPosts={blogPosts}
        onUpdatePosts={(newPosts) => setBlogPosts(newPosts)}
      />
    </div>
  );
}
