import React, { useState } from 'react';
import { BlogPost } from '../types/portfolio';
import { X, Plus, Check, Download, Edit3, Trash2, Eye, Sparkles } from 'lucide-react';

interface ContentManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogPosts: BlogPost[];
  onUpdatePosts: (posts: BlogPost[]) => void;
}

export const ContentManagerModal: React.FC<ContentManagerModalProps> = ({
  isOpen,
  onClose,
  blogPosts,
  onUpdatePosts,
}) => {
  const [selectedPostId, setSelectedPostId] = useState<string>(blogPosts[0]?.id || '');
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'Engineering' | 'Design Systems' | 'Architecture' | 'Creative Direction'>('Design Systems');
  const [readTime, setReadTime] = useState('5 min read');
  const [summary, setSummary] = useState('');
  const [contentParagraphs, setContentParagraphs] = useState('');
  const [takeawaysText, setTakeawaysText] = useState('');

  // Sync selected post to form
  const activePost = blogPosts.find((p) => p.id === selectedPostId);

  React.useEffect(() => {
    if (activePost && !isCreatingNew) {
      setTitle(activePost.title);
      setCategory(activePost.category);
      setReadTime(activePost.readTime);
      setSummary(activePost.summary);
      setContentParagraphs(activePost.content.join('\n\n'));
      setTakeawaysText(activePost.takeaways.join('\n'));
    }
  }, [selectedPostId, isCreatingNew]);

  if (!isOpen) return null;

  const handleStartCreateNew = () => {
    setIsCreatingNew(true);
    setTitle('');
    setCategory('Design Systems');
    setReadTime('4 min read');
    setSummary('');
    setContentParagraphs('');
    setTakeawaysText('');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const parsedParagraphs = contentParagraphs
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const parsedTakeaways = takeawaysText
      .split('\n')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    if (isCreatingNew) {
      const newPost: BlogPost = {
        id: `post-${Date.now()}`,
        slug: slug || `article-${Date.now()}`,
        title,
        category,
        publishedDate: 'Just Published',
        readTime: readTime || '4 min read',
        summary: summary || 'A new post published via Content Studio.',
        heroImage: '/src/assets/images/project_mono_studio_1791272151143.jpg',
        content: parsedParagraphs.length > 0 ? parsedParagraphs : ['New article draft.'],
        takeaways: parsedTakeaways.length > 0 ? parsedTakeaways : ['Key insight.'],
        featured: false,
      };
      const updated = [newPost, ...blogPosts];
      onUpdatePosts(updated);
      setSelectedPostId(newPost.id);
      setIsCreatingNew(false);
    } else {
      const updated = blogPosts.map((p) => {
        if (p.id === selectedPostId) {
          return {
            ...p,
            title,
            slug: slug || p.slug,
            category,
            readTime,
            summary,
            content: parsedParagraphs.length > 0 ? parsedParagraphs : p.content,
            takeaways: parsedTakeaways.length > 0 ? parsedTakeaways : p.takeaways,
          };
        }
        return p;
      });
      onUpdatePosts(updated);
    }

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDeletePost = (id: string) => {
    if (blogPosts.length <= 1) return;
    const remaining = blogPosts.filter((p) => p.id !== id);
    onUpdatePosts(remaining);
    setSelectedPostId(remaining[0].id);
    setIsCreatingNew(false);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(blogPosts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'blogData.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#111318] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#14171f]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ff4d36]/10 border border-[#ff4d36]/25 flex items-center justify-center text-[#ff4d36]">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#ff4d36] uppercase tracking-wider">
                  Client Content Studio
                </span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-[#8b8f9e]">Hostinger / Headless Simulator</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white">
                Live Content Manager & Editor
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#c5c8d4] hover:text-white bg-white/[0.05] border border-white/[0.1] rounded-md transition-colors cursor-pointer"
              title="Download content as JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Workspace */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[480px]">
          {/* Left Column: Post List */}
          <div className="md:col-span-4 border-r border-white/[0.08] bg-[#0c0d12] p-4 flex flex-col justify-between overflow-y-auto max-h-[480px] md:max-h-none">
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8b8f9e]">
                  Published Articles ({blogPosts.length})
                </span>
                <button
                  onClick={handleStartCreateNew}
                  className="px-2.5 py-1 text-xs font-medium text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>New Post</span>
                </button>
              </div>

              <div className="space-y-1.5">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setIsCreatingNew(false);
                      setSelectedPostId(post.id);
                    }}
                    className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                      !isCreatingNew && selectedPostId === post.id
                        ? 'bg-[#1a1d26] border-[#ff4d36]/40 text-white shadow-sm'
                        : 'bg-white/[0.02] border-transparent text-[#9da1b2] hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#8b8f9e] mb-1">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-xs font-medium line-clamp-1">{post.title}</h4>
                    <p className="text-[11px] text-[#6b6f80] line-clamp-1 mt-0.5">{post.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-xs text-[#8b8f9e] leading-relaxed px-1">
              <p>
                <strong>Zero code required:</strong> Changes you save here instantly update the live site and can be exported for direct deployment.
              </p>
            </div>
          </div>

          {/* Right Column: Editor Form */}
          <div className="md:col-span-8 p-6 overflow-y-auto bg-[#111318] max-h-[480px] md:max-h-none">
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {isCreatingNew ? 'Drafting New Article' : 'Editing Article'}
                </span>
                {!isCreatingNew && blogPosts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeletePost(selectedPostId)}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Article</span>
                  </button>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">Article Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Designing with Intent: Principles of Spatial Web Design"
                  required
                  className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36]"
                  >
                    <option value="Design Systems">Design Systems</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Creative Direction">Creative Direction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">Reading Time</label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g., 5 min read"
                    className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">Summary / Excerpt</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={2}
                  placeholder="A concise description shown on the blog cards and SEO meta description."
                  className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">
                  Key Takeaways (one per line)
                </label>
                <textarea
                  value={takeawaysText}
                  onChange={(e) => setTakeawaysText(e.target.value)}
                  rows={3}
                  placeholder="Takeaway 1&#10;Takeaway 2&#10;Takeaway 3"
                  className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36] font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5c8d4] mb-1.5">
                  Article Body (separate paragraphs with blank lines)
                </label>
                <textarea
                  value={contentParagraphs}
                  onChange={(e) => setContentParagraphs(e.target.value)}
                  rows={6}
                  placeholder="First paragraph text...&#10;&#10;Second paragraph text..."
                  className="w-full px-3.5 py-2 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36] font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                {saveSuccess ? (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Saved! Changes are live in your preview.</span>
                  </span>
                ) : (
                  <span className="text-xs text-[#8b8f9e]">
                    Saves directly to site state in real time.
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm shadow-[#ff4d36]/30"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isCreatingNew ? 'Publish Article' : 'Save Changes'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
