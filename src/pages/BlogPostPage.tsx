import React, { useState } from 'react';
import { BlogPost, PageRoute } from '../types/portfolio';
import { ArrowLeft, ArrowRight, Share2, Check, Bookmark, Clock, Calendar } from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  allPosts: BlogPost[];
  onRouteChange: (route: PageRoute) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  allPosts,
  onRouteChange,
  onSelectPost,
}) => {
  const [copied, setCopied] = useState(false);

  // Find next post
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const nextPost = allPosts[(currentIndex + 1) % allPosts.length];
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="pt-32 md:pt-40 pb-20 space-y-16 max-w-4xl mx-auto px-6 md:px-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => onRouteChange({ type: 'blog' })}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#8b8f9e] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </button>
      </div>

      {/* Header Info */}
      <header className="space-y-6">
        <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
          <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl text-white tracking-tight leading-[1.08]">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#a0a4b3] font-light leading-relaxed">
          {post.summary}
        </p>

        {/* Share and Metadata Row */}
        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#8b8f9e]">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Kaelen Vance</span>
            <span aria-hidden="true">·</span>
            <span>Design Director & Architect</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-[#c5c8d4] hover:text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied' : 'Share Article'}</span>
          </button>
        </div>
      </header>

      {/* Hero Visual */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#14161f] aspect-[16/9] shadow-2xl">
        <img
          src={post.heroImage}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Takeaways Box */}
      {post.takeaways && post.takeaways.length > 0 && (
        <div className="p-6 sm:p-8 rounded-xl bg-[#141620] border border-white/[0.08] space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
            Key Takeaways
          </span>
          <ul className="space-y-2 text-sm text-[#c5c8d4]">
            {post.takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d36] mt-2 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body */}
      <div className="space-y-6 text-base sm:text-lg text-[#c5c8d4] leading-relaxed font-light">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Next Article Card */}
      <div className="pt-12 border-t border-white/[0.08]">
        <div
          onClick={() => {
            onSelectPost(nextPost);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer p-8 rounded-xl bg-[#111319] hover:bg-[#151722] border border-white/[0.08] hover:border-white/[0.18] transition-all flex items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <span className="text-xs text-[#8b8f9e] uppercase tracking-wider font-semibold">
              Read Next
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white group-hover:text-[#ff4d36] transition-colors">
              {nextPost.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.06] group-hover:bg-[#ff4d36] flex items-center justify-center text-white shrink-0">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
};
