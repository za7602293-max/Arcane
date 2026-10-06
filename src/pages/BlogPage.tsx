import React, { useState } from 'react';
import { BlogPost, PageRoute } from '../types/portfolio';
import { Search, ArrowUpRight, Plus, Layers } from 'lucide-react';

interface BlogPageProps {
  blogPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onOpenCMS: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ blogPosts, onSelectPost, onOpenCMS }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Design Systems', 'Engineering', 'Architecture', 'Creative Direction'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-10 space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
            <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">The Journal</span>
            <span aria-hidden="true">·</span>
            <span>Articles & Technical Notes</span>
          </div>
          <h1 className="font-editorial text-5xl md:text-7xl text-white tracking-tight">
            Perspectives on design, craft, & code.
          </h1>
          <p className="text-base text-[#8b8f9e] leading-relaxed">
            Explorations into front-end architecture, typographic nuance, micro-interactions, and headless CMS maintainability.
          </p>
        </div>

        {/* Client Fast Action: Content Studio */}
        <div className="shrink-0">
          <button
            onClick={onOpenCMS}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#ff4d36]" />
            <span>Open Content Studio Simulator</span>
          </button>
        </div>
      </div>

      {/* Featured Lead Article */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <article
          onClick={() => onSelectPost(featuredPost)}
          className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111319] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden relative">
            <img
              src={featuredPost.heroImage}
              alt={featuredPost.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-black/80 backdrop-blur-md rounded text-white border border-white/10">
              Featured Article
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
                <span className="text-[#ff4d36] font-medium">{featuredPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPost.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-white group-hover:text-[#ff4d36] transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-[#8b8f9e] leading-relaxed line-clamp-4">
                {featuredPost.summary}
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-semibold text-white gap-1.5">
              <span>Read Full Article</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff4d36]" />
            </div>
          </div>
        </article>
      )}

      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-4 border-y border-white/[0.08]">
        {/* Categories */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-[#0c0d10] font-semibold'
                  : 'text-[#8b8f9e] hover:text-white bg-white/[0.03] hover:bg-white/[0.07]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative sm:w-64">
          <Search className="w-3.5 h-3.5 text-[#6c7080] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white/[0.03] border border-white/[0.08] rounded-md text-white placeholder-[#6c7080] focus:outline-none focus:border-[#ff4d36]"
          />
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="group cursor-pointer flex flex-col justify-between p-6 rounded-xl bg-[#111319] border border-white/[0.06] hover:border-white/[0.18] transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-white/5 border border-white/[0.08]">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
                <span className="text-[#a0a4b3] font-medium">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-[#ff4d36] transition-colors leading-snug">
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

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="text-base text-white">No articles matched your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-[#ff4d36] underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
};
