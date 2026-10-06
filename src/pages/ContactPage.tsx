import React, { useState } from 'react';
import { Mail, Clock, MapPin, CheckCircle, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<'New Product' | 'Design System' | 'Advisory' | 'Speaking'>('New Product');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$10k – $25k');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-10 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#8b8f9e]">
          <span className="text-[#ff4d36] font-semibold uppercase tracking-wider">Inquiries</span>
          <span aria-hidden="true">·</span>
          <span>Initiate a Conversation</span>
        </div>
        <h1 className="font-editorial text-5xl sm:text-7xl text-white tracking-tight">
          Let’s create work that resonates.
        </h1>
        <p className="text-base sm:text-lg text-[#8b8f9e] leading-relaxed font-light">
          Available for new project design direction, frontend architecture consulting, and bespoke digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Availability */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-2xl bg-[#111319] border border-white/[0.08] space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4d36]">
              Current Availability
            </span>
            <div className="flex items-center gap-2 text-sm text-white font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>Accepting select Q3 / Q4 2026 engagements</span>
            </div>
            <p className="text-xs text-[#8b8f9e] leading-relaxed">
              Typical client projects range from 4 to 12 weeks for comprehensive design and engineering sprints.
            </p>
          </div>

          <div className="space-y-4 text-sm text-[#8b8f9e]">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#ff4d36]" />
              <span className="text-white">studio@kaelenvance.sample.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#ff4d36]" />
              <span>San Francisco, CA & Oslo, Norway</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#ff4d36]" />
              <span>PST (UTC-8) & CET (UTC+1)</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">Networks</span>
            <div className="flex items-center gap-4 text-xs text-[#8b8f9e]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <span aria-hidden="true">·</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href="https://read.cv" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Read.cv</a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#141620] border border-white/[0.08]">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-3xl text-white">Inquiry Received</h3>
                <p className="text-sm text-[#8b8f9e] max-w-md mx-auto">
                  Thank you for reaching out, {name}. Your inquiry has been logged. I review proposals daily and will respond within 24–48 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs text-white bg-white/[0.08] hover:bg-white/[0.14] rounded-md transition-colors cursor-pointer"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a0a4b3] mb-2.5">
                    Project Focus
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['New Product', 'Design System', 'Advisory', 'Speaking'] as const).map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-2 text-xs font-medium rounded-md transition-all cursor-pointer border ${
                          inquiryType === type
                            ? 'bg-white text-black border-white shadow-sm'
                            : 'bg-black/30 text-[#8b8f9e] border-white/[0.08] hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#c5c8d4] mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white placeholder-[#6b6f80] focus:outline-none focus:border-[#ff4d36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#c5c8d4] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white placeholder-[#6b6f80] focus:outline-none focus:border-[#ff4d36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c5c8d4] mb-1.5">Estimated Budget Scope</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white focus:outline-none focus:border-[#ff4d36]"
                  >
                    <option value="$5k – $10k">$5,000 – $10,000</option>
                    <option value="$10k – $25k">$10,000 – $25,000</option>
                    <option value="$25k – $50k">$25,000 – $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c5c8d4] mb-1.5">Project Overview & Timeline</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about what you're building, your ideal timeline, and any specific requirements..."
                    className="w-full px-3.5 py-2.5 text-sm bg-black/40 border border-white/[0.1] rounded-lg text-white placeholder-[#6b6f80] focus:outline-none focus:border-[#ff4d36] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold text-white bg-[#ff4d36] hover:bg-[#e03d27] rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ff4d36]/25"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
