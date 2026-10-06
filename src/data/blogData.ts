import { BlogPost } from '../types/portfolio';

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'death-of-ai-slop-reclaiming-intentionality',
    title: 'The Death of AI Slop: Reclaiming Intentionality in Digital Product Design',
    category: 'Design Systems',
    publishedDate: 'October 2025',
    readTime: '6 min read',
    summary: 'Why generic purple gradients and floating pill badges are destroying web personality—and how disciplined typography, authentic whitespace, and domain-native aesthetics restore human taste.',
    heroImage: '/src/assets/images/project_mono_studio_1791272151143.jpg',
    featured: true,
    takeaways: [
      'Stop relying on automated pill capsules for static metadata—use unboxed typographic hierarchy.',
      'A true design system is defined by what it prohibits, not just what it provides.',
      'Aesthetic memorability comes from tight constraints, curated typography, and high-contrast intentionality.'
    ],
    content: [
      'Over the past two years, a creeping homogenization has infected the modern web. Every landing page looks like a clone of an algorithmic prompt: soft purple and indigo radial gradients, rounded pill badges floating above headings, glassmorphic cards with faint 1px borders, and boilerplate copywriting that says everything and means nothing.',
      'We call this "AI slop," but the truth is deeper: it is the result of template exhaustion. When design tools make it trivially easy to generate the median expectation of a layout, the median expectation becomes the floor of mediocrity.',
      'To build something memorable today, designers and developers must embrace aesthetic restraint. In our studio practice, this begins with strict typographic discipline. We never default to generic sans-serifs for expressive titles. Instead, pairing an architectural display face with a razor-sharp modern text font instantly grounds the user in a tangible world.',
      'Second, we eliminate decorative noise. Metadata does not belong in colored candy capsules. A date, a reading time, or a category label is informative typography—it deserves clean, unboxed text separated by quiet typographic marks like middle dots or slashes. When you remove the boxes, the layout breathes.',
      'The modern web doesn’t need more gradient meshes. It needs designers who understand proportion, typography, and the courage to leave whitespace unfilled.'
    ]
  },
  {
    id: 'post-2',
    slug: 'designing-for-120hz-felt-latency',
    title: 'Designing for 120Hz: Spring Physics, Micro-Interactions, and Felt Latency',
    category: 'Engineering',
    publishedDate: 'September 2025',
    readTime: '5 min read',
    summary: 'Raw server response times are only half the battle. How physical spring damping, speculative hover prefetching, and sub-16ms render loops make web interfaces feel physical.',
    heroImage: '/src/assets/images/project_aura_brand_1791272106275.jpg',
    featured: false,
    takeaways: [
      'Felt latency is cognitive: a UI that starts moving in 10ms with spring physics feels faster than an instant layout snap.',
      'Speculative prefetching on pointer-enter drops perceived route navigation to zero.',
      'Animate transform and opacity exclusively to protect GPU compositing pipelines on mobile.'
    ],
    content: [
      'There is a distinct difference between an application that is technically fast and one that feels fast. You can achieve a 99 Lighthouse performance score and still deliver a brittle, robotic experience if your micro-interactions jerk to a halt.',
      'On modern displays running at 90Hz and 120Hz, the human eye detects even minor frame drops. When a user taps a card or hovers over a primary call to action, their brain expects physical conservation of momentum.',
      'Instead of linear CSS transitions (such as `transition: all 0.3s ease`), we utilize spring damping curves. Springs provide natural deceleration without artificial easing curves that stop abruptly at the bounding box.',
      'Furthermore, speculative prefetching transforms the user experience. By initiating the data prefetch on `pointerenter` rather than waiting for the `click` event, we recover 100ms to 200ms of user decision latency. By the time their finger lifts from the mouse button or trackpad, the next route is already prepared.',
      'When engineering for high-end clients, speed is not an optimization pass after design—it is the tactile medium through which design is experienced.'
    ]
  },
  {
    id: 'post-3',
    slug: 'from-wordpress-to-modern-headless',
    title: 'From WordPress to Modern Headless: A Practical Guide for Clients on Hostinger',
    category: 'Architecture',
    publishedDate: 'August 2025',
    readTime: '7 min read',
    summary: 'How to transition a traditional WordPress site to a blazing-fast React and TypeScript frontend without losing the ease of content publishing or paying for enterprise cloud hosting.',
    heroImage: '/src/assets/images/hero_creative_studio_1791272082227.jpg',
    featured: false,
    takeaways: [
      'You do not have to abandon WordPress as your content editor to get a bespoke, modern frontend.',
      'Headless architecture separates content editing (in WP or Git) from high-speed static delivery.',
      'Hostinger supports static HTML/JS export out-of-the-box with zero database vulnerability attacks.'
    ],
    content: [
      'Many freelance clients come to us with a familiar predicament: they currently host a WordPress site on Hostinger or similar shared hosting. They love that they can log in to write blog articles and update copy, but they are frustrated with slow page loads, bloated plugin conflicts, and rigid theme templates.',
      'The traditional advice from agency developers is often to force the client onto expensive enterprise JAMstack platforms with monthly subscription fees. This is unnecessary.',
      'In this guide, we outline the exact architecture we use for clients who wish to maintain their Hostinger hosting while achieving modern design excellence. The solution is decoupled architecture:',
      'Option 1: Static Vite/React Export deployed directly to Hostinger File Manager or Git integration. Content lives in structured Markdown or JSON, which anyone can edit via a simple web dashboard or text editor.',
      'Option 2: Headless WordPress. Keep WordPress running on your Hostinger account strictly as a private content API (`wp-json/wp/v2`), while our custom frontend fetches the data at build time.',
      'This delivers the best of both worlds: zero monthly SaaS fees, complete visual freedom, sub-second load times, and an editing flow that never touches raw React code.'
    ]
  },
  {
    id: 'post-4',
    slug: 'sixty-thirty-ten-color-rule',
    title: 'The 60-30-10 Palette Discipline: Why Restraint is a Competitive Advantage',
    category: 'Creative Direction',
    publishedDate: 'July 2025',
    readTime: '4 min read',
    summary: 'A deep dive into visual hierarchy: using 60% dominant neutral canvas, 30% structural surfaces, and 10% high-intent focal accents to direct recruiter and client attention.',
    heroImage: '/src/assets/images/project_vanta_commerce_1791272173019.jpg',
    featured: false,
    takeaways: [
      '60% of your viewport should be uninterrupted neutral canvas (deep slate or crisp warm off-white).',
      'Structural surfaces and hairlines occupy 30%, giving form without competing for attention.',
      'Save your accent color strictly for the 10% interactive apex: primary actions and active state.'
    ],
    content: [
      'When novice designers try to make a portfolio look "creative," the first impulse is usually to add more colors, glowing borders, or rainbow gradients. The result is visual fatigue.',
      'Great editorial design has always known that color is a precious resource. When everything is shouting with neon accents, nothing is heard.',
      'By adhering to a strict 60-30-10 color distribution, you create an environment where the client’s work takes center stage. The canvas provides 60% of quiet stability; the hairline borders and subdued card containers provide 30% of structural scaffolding; and your chosen accent color (whether vivid cinnabar or warm amber) occupies only the 10% of high-intent interactive controls.',
      'When a recruiter or prospective client lands on the site, their eyes are never lost. Hierarchy is effortless, and professionalism is unmistakable.'
    ]
  }
];
