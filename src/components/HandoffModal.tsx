import React, { useState } from 'react';
import { X, Check, Copy, Server, FileCode, Image, Upload, RefreshCw, Globe, Shield } from 'lucide-react';

interface HandoffModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HandoffModal: React.FC<HandoffModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'deployment' | 'cms' | 'content' | 'seo'>('deployment');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111318] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#14171f]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#ff4d36] uppercase tracking-wider">
                Production Documentation
              </span>
              <span className="text-white/40">·</span>
              <span className="text-xs text-[#8b8f9e]">Hostinger & Content Hand-Off</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
              Client Transition & Hand-Off Architecture
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/[0.08] px-6 bg-[#0f1116] gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('deployment')}
            className={`py-3 px-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'deployment'
                ? 'border-[#ff4d36] text-white'
                : 'border-transparent text-[#8b8f9e] hover:text-white'
            }`}
          >
            1. Deploying to Hostinger
          </button>
          <button
            onClick={() => setActiveTab('cms')}
            className={`py-3 px-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'cms'
                ? 'border-[#ff4d36] text-white'
                : 'border-transparent text-[#8b8f9e] hover:text-white'
            }`}
          >
            2. Content Management (CMS)
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`py-3 px-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'content'
                ? 'border-[#ff4d36] text-white'
                : 'border-transparent text-[#8b8f9e] hover:text-white'
            }`}
          >
            3. Updating Projects & Media
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`py-3 px-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'seo'
                ? 'border-[#ff4d36] text-white'
                : 'border-transparent text-[#8b8f9e] hover:text-white'
            }`}
          >
            4. SEO & Verification
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-[#c5c8d4] leading-relaxed">
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#ff4d36]" />
                  Why This Architecture Excels on Hostinger
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[#8b8f9e]">
                  Traditional WordPress on shared hosting suffers from slow PHP execution, database query bottlenecks, and constant plugin security patches. This site builds into pure, ultra-fast pre-rendered static HTML, CSS, and JavaScript that runs natively on Hostinger's standard Web Hosting, Cloud Hosting, or VPS plans with <strong>zero server overhead</strong> and sub-second response times.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Step-by-Step Deployment Options
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="p-4 rounded-lg bg-[#14161f] border border-white/[0.08]">
                    <span className="text-xs font-semibold text-[#ff4d36]">Method A (Recommended: 3 Minutes)</span>
                    <h5 className="font-semibold text-white mt-1">Hostinger File Manager / FTP</h5>
                    <ol className="list-decimal list-inside text-xs text-[#8b8f9e] mt-2 space-y-1.5">
                      <li>Run <code className="text-white bg-black/40 px-1 py-0.5 rounded">npm run build</code> locally to produce the <code className="text-white bg-black/40 px-1 py-0.5 rounded">/dist</code> folder.</li>
                      <li>Log in to your <strong>Hostinger hPanel</strong>.</li>
                      <li>Go to <strong>File Manager</strong> &gt; <code className="text-white bg-black/40 px-1 py-0.5 rounded">public_html</code>.</li>
                      <li>Upload all files from <code className="text-white bg-black/40 px-1 py-0.5 rounded">/dist</code> into <code className="text-white bg-black/40 px-1 py-0.5 rounded">public_html</code>.</li>
                      <li>Done! Your site is live worldwide instantly with automatic SSL.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-lg bg-[#14161f] border border-white/[0.08]">
                    <span className="text-xs font-semibold text-[#ff4d36]">Method B (Automated: 1-Click CI/CD)</span>
                    <h5 className="font-semibold text-white mt-1">Hostinger Git Integration</h5>
                    <ol className="list-decimal list-inside text-xs text-[#8b8f9e] mt-2 space-y-1.5">
                      <li>Connect your private GitHub repository inside Hostinger hPanel Git tool.</li>
                      <li>Whenever you push a change or publish a blog post, Hostinger auto-deploys.</li>
                      <li>Zero terminal commands required after initial 5-minute setup.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-lg bg-[#14161f] border border-[#10b981]/30 col-span-1 md:col-span-2">
                    <span className="text-xs font-semibold text-[#10b981]">Method C (GitHub Pages: Zero Blank Screen Fixed)</span>
                    <h5 className="font-semibold text-white mt-1">Deploying to GitHub Pages without White Screen</h5>
                    <p className="text-xs text-[#8b8f9e] mt-1">
                      <strong>Why other sites show a blank white page:</strong> Vite defaults to root path <code className="text-white">/</code>, so GitHub Pages repositories (<code className="text-white">username.github.io/repo/</code>) try to load scripts from the wrong domain root. We have permanently fixed this by setting <code className="text-white">base: './'</code> in <code className="text-white">vite.config.ts</code>, bundling all images as imports, adding <code className="text-white">.nojekyll</code>, and creating <code className="text-white">404.html</code> fallback.
                    </p>
                    <ol className="list-decimal list-inside text-xs text-[#8b8f9e] mt-2 space-y-1.5">
                      <li>Run <code className="text-white bg-black/40 px-1 py-0.5 rounded">npm run build</code>.</li>
                      <li>Go to GitHub repository &gt; <strong>Settings</strong> &gt; <strong>Pages</strong>.</li>
                      <li>Select <strong>Deploy from a branch</strong> &gt; choose your branch (<code className="text-white">main</code> or <code className="text-white">gh-pages</code>) and set folder to <code className="text-white">/dist</code> or root.</li>
                      <li>Your site opens instantly without any white blank screen!</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white">Hostinger .htaccess SPA Routing Helper</span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /index.html [L]\n</IfModule>`,
                        'htaccess'
                      )
                    }
                    className="text-xs text-[#8b8f9e] hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copiedIndex === 'htaccess' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === 'htaccess' ? 'Copied' : 'Copy .htaccess'}</span>
                  </button>
                </div>
                <pre className="mt-2 p-3 bg-black/50 border border-white/[0.08] rounded-lg text-xs font-mono text-emerald-300 overflow-x-auto">
{`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'cms' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#ff4d36]" />
                  How Content Management Works for Non-Developers
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[#8b8f9e]">
                  The client wanted to be able to add and edit blog articles and project showcases easily. We designed two intuitive paths so you never have to touch JavaScript or React code.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#14161f] border border-white/[0.08]">
                  <h4 className="font-semibold text-white">Approach 1: Built-in Content Studio (Included)</h4>
                  <p className="text-xs text-[#8b8f9e] mt-1.5 leading-relaxed">
                    Click the <strong>"Content Studio"</strong> button in the navigation header. This interactive dashboard allows you to type your new article, paste images, edit titles, and immediately test and export your changes.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#14161f] border border-white/[0.08]">
                  <h4 className="font-semibold text-white">Approach 2: Headless WordPress on Hostinger</h4>
                  <p className="text-xs text-[#8b8f9e] mt-1.5 leading-relaxed">
                    If you prefer your existing WordPress editor (Gutenberg), you can keep your Hostinger WordPress install as a backend only. Our frontend connects via the free WordPress REST API (<code className="text-white">/wp-json/wp/v2/posts</code>) to automatically pull posts!
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  File-Based Simplicity: /src/data/blogData.ts
                </h4>
                <p className="text-xs text-[#8b8f9e] mt-1">
                  All articles are cleanly separated in a single human-readable file. Here is how simple it is to add a new article:
                </p>
                <pre className="mt-2 p-3 bg-black/50 border border-white/[0.08] rounded-lg text-xs font-mono text-[#a5d6ff] overflow-x-auto">
{`{
  id: 'post-5',
  slug: 'my-new-article-title',
  title: 'My New Article Title Here',
  category: 'Design Systems',
  publishedDate: 'November 2025',
  readTime: '4 min read',
  summary: 'A short one-sentence summary for the card preview.',
  heroImage: '/images/my-photo.jpg',
  takeaways: ['Takeaway point one', 'Takeaway point two'],
  content: [
    'First paragraph text goes right here...',
    'Second paragraph text continues here...'
  ]
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Image className="w-4 h-4 text-[#ff4d36]" />
                  Replacing Images & Visuals
                </h3>
                <p className="text-xs md:text-sm text-[#8b8f9e]">
                  All project imagery and blog covers are stored in the <code className="text-white bg-black/40 px-1 py-0.5 rounded">/public/images/</code> or <code className="text-white bg-black/40 px-1 py-0.5 rounded">/src/assets/images/</code> directories.
                </p>
                <div className="p-3 bg-black/40 border border-white/[0.08] rounded-lg text-xs space-y-2">
                  <p className="text-white font-medium">Image Sizing Recommendations for Best Core Web Vitals:</p>
                  <ul className="list-disc list-inside text-[#8b8f9e] space-y-1">
                    <li><strong>Hero Visuals:</strong> 16:9 aspect ratio (recommended 1920×1080px or 1600×900px, WebP or JPG, under 300KB).</li>
                    <li><strong>Project Cards:</strong> 4:3 aspect ratio (recommended 1200×900px, under 250KB).</li>
                    <li><strong>Blog Post Covers:</strong> 16:9 or 4:3 (recommended 1200×675px, under 200KB).</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#ff4d36]" />
                  Adding a New Project Case Study
                </h3>
                <p className="text-xs md:text-sm text-[#8b8f9e]">
                  Open <code className="text-white bg-black/40 px-1 py-0.5 rounded">/src/data/projectsData.ts</code>. Simply copy one of the existing project blocks and change the title, summary, client, and challenge descriptions. The site will immediately generate the full interactive case study page with next/previous links!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#ff4d36]" />
                  SEO, Social Sharing & Structured Data
                </h3>
                <p className="text-xs md:text-sm text-[#8b8f9e]">
                  Unlike old WordPress sites that require 5 separate SEO plugins that slow down loading times, this architecture includes pre-configured native SEO tags:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#14161f] border border-white/[0.08] rounded-lg">
                    <span className="font-semibold text-white">Open Graph & Twitter Cards</span>
                    <p className="text-[#8b8f9e] mt-1">Automatic high-resolution preview cards on LinkedIn, Twitter/X, Slack, and iMessage.</p>
                  </div>
                  <div className="p-3 bg-[#14161f] border border-white/[0.08] rounded-lg">
                    <span className="font-semibold text-white">Semantic HTML5 & Accessibility</span>
                    <p className="text-[#8b8f9e] mt-1">Strict H1-H4 heading hierarchy, landmark tags, and WCAG AA contrast compliance.</p>
                  </div>
                  <div className="p-3 bg-[#14161f] border border-white/[0.08] rounded-lg">
                    <span className="font-semibold text-white">Schema.org Structured Data</span>
                    <p className="text-[#8b8f9e] mt-1">Person, CreativeWork, and BlogPosting schemas so Google can feature projects in rich snippets.</p>
                  </div>
                  <div className="p-3 bg-[#14161f] border border-white/[0.08] rounded-lg">
                    <span className="font-semibold text-white">Static XML Sitemap</span>
                    <p className="text-[#8b8f9e] mt-1">Auto-generated sitemap index placed in root directory for instant Google Search Console indexing.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#14171f] text-xs">
          <span className="text-[#8b8f9e]">Prepared specifically for the Freelancer.com client evaluation.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
