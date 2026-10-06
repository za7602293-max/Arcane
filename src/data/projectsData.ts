import { Project } from '../types/portfolio';
import auraImage from '../assets/images/project_aura_brand_1791272106275.jpg';
import nexusImage from '../assets/images/project_nexus_fintech_1791272125774.jpg';
import monoImage from '../assets/images/project_mono_studio_1791272151143.jpg';
import vantaImage from '../assets/images/project_vanta_commerce_1791272173019.jpg';
import studioImage from '../assets/images/hero_creative_studio_1791272082227.jpg';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'aura-digital-brand',
    title: 'AURA',
    tagline: 'Luminous spatial brand identity and interactive generative visual system.',
    category: 'Brand & Spatial',
    year: '2025',
    client: 'Aura Materials Lab',
    role: 'Design Director & Creative Developer',
    timeline: '12 Weeks',
    liveUrl: 'https://aura.sample-experience.com',
    image: auraImage,
    summary: 'A complete spatial identity redesign for an optical engineering studio, marrying chromatic refractive materials with real-time WebGL interactive light simulations.',
    challenge: 'Aura needed to shift from an academic physics laboratory identity to an international luxury design materials brand without compromising their scientific rigor.',
    approach: 'We developed an adaptive visual identity built around fluid chromatic refraction. The typography and generative grid respond dynamically to user cursor velocity and ambient scroll speed.',
    decisions: [
      {
        title: 'Real-Time Shader Pipeline',
        description: 'Engineered lightweight custom GLSL fragment shaders simulating optical dispersion at 60fps on mobile without draining GPU battery.'
      },
      {
        title: 'Dynamic Variable Typography',
        description: 'Bound custom optical weight axes of the headline typeface to scroll progression, producing tactile typography that contracts and expands seamlessly.'
      },
      {
        title: 'Headless Static Architecture',
        description: 'Decoupled content delivery using an ultra-fast static generator with pre-rendered geometry buffers, achieving a 98/100 Core Web Vitals score.'
      }
    ],
    outcomes: [
      { metric: '0.64s', label: 'Global Largest Contentful Paint (LCP)' },
      { metric: '+142%', label: 'Qualified Inbound Inquiries in 90 Days' },
      { metric: '60 fps', label: 'Consistent Mobile Interaction Frame Rate' }
    ],
    featured: true,
    layoutVariant: 'hero-featured'
  },
  {
    id: 'proj-2',
    slug: 'nexus-fintech-product',
    title: 'NEXUS',
    tagline: 'High-throughput institutional liquidity terminal and tokenized design system.',
    category: 'Systems & Fintech',
    year: '2025',
    client: 'Nexus Global Markets',
    role: 'Lead Product Designer & Frontend Architect',
    timeline: '16 Weeks',
    liveUrl: 'https://nexus.markets-sample.io',
    image: nexusImage,
    summary: 'Restructured a high-frequency trading platform into an ergonomic, keyboard-driven interface with sub-10ms perceived latency and dense tabular clarity.',
    challenge: 'Traders were overwhelmed by visual noise and inconsistent typography across desktop monitors. The existing interface suffered from layout shifts during rapid orderbook updates.',
    approach: 'Created an uncompromising Swiss grid layout using tabular numerals, monochromatic hierarchy, and strict information density tiers tailored for dual-monitor workflows.',
    decisions: [
      {
        title: 'Virtual DOM Streamlining',
        description: 'Implemented zero-allocation canvas renderers for orderbook depth charts, handling 10,000 tick events/sec without UI stutter.'
      },
      {
        title: 'Strict Tabular Numeric Typography',
        description: 'Configured fixed-width numeric baselines preventing horizontal jitter across real-time price updates.'
      },
      {
        title: 'Command Palette First Navigation',
        description: 'Crafted a global fuzzy-search keyboard palette enabling power users to execute position sizing in under 3 keypresses.'
      }
    ],
    outcomes: [
      { metric: '8.4ms', label: 'Average Perception-to-Render Latency' },
      { metric: '0.00', label: 'Cumulative Layout Shift (CLS) on Live Feeds' },
      { metric: '38%', label: 'Reduction in Daily Operational Click Fatigue' }
    ],
    featured: true,
    layoutVariant: 'two-column'
  },
  {
    id: 'proj-3',
    slug: 'mono-creative-studio',
    title: 'MONO',
    tagline: 'Editorial publication platform and bespoke type foundry specimen website.',
    category: 'Editorial & Web',
    year: '2024',
    client: 'Mono Type Foundry',
    role: 'Brand Designer & Full-Stack Developer',
    timeline: '8 Weeks',
    liveUrl: 'https://mono.foundry-sample.com',
    image: monoImage,
    summary: 'An editorial-first digital specimen site for an independent type design studio, allowing visitors to type-test custom glyphs and preview tactile print layouts.',
    challenge: 'Conventional type foundry sites present rigid glyph waterfalls. Mono needed an immersive sandbox that demonstrated typefaces in real editorial context.',
    approach: 'Synthesized an interactive magazine experience featuring live glyph vector editing, kerning adjustments in-browser, and instant OpenType feature toggling.',
    decisions: [
      {
        title: 'Interactive In-Browser Typesetting',
        description: 'Built a live SVG glyph rasterizer and kerning inspector enabling designers to test ligatures and discretionary alternates directly.'
      },
      {
        title: 'Tactile Editorial Grid',
        description: 'Balanced wide-margin editorial columns with deliberate whitespace, mimicking printed Swiss journals.'
      },
      {
        title: 'Frictionless Font Licensing Cart',
        description: 'Engineered a one-click tier calculator eliminating complex licensing matrices for agency buyers.'
      }
    ],
    outcomes: [
      { metric: '4.8x', label: 'Increase in Average Time Spent Testing Glyphs' },
      { metric: '100%', label: 'Static Asset Pre-Caching via Service Worker' },
      { metric: '+88%', label: 'Font Trial License Downloads' }
    ],
    featured: true,
    layoutVariant: 'offset'
  },
  {
    id: 'proj-4',
    slug: 'vanta-minimal-commerce',
    title: 'VANTA',
    tagline: 'Tactile e-commerce experience for limited-run precision hardware.',
    category: 'E-Commerce',
    year: '2024',
    client: 'Vanta Industrial Objects',
    role: 'UX Architect & Creative Technologist',
    timeline: '10 Weeks',
    liveUrl: 'https://vanta.objects-sample.com',
    image: vantaImage,
    summary: 'A stripped-down, high-fidelity checkout and product exploration experience for an architectural objects atelier with strict stock allocations.',
    challenge: 'The client hated conventional crowded e-commerce cards. They required an art gallery presentation while maintaining robust cart, inventory, and payment reliability.',
    approach: 'Stripped every non-essential UI element. Products are introduced through architectural scale photography, tactile sound feedback on interaction, and a streamlined 2-step checkout drawer.',
    decisions: [
      {
        title: 'Micro-Interactions & Spring Physics',
        description: 'Fine-tuned interactive zoom transitions and drawer sheets using natural damping springs rather than linear easing.'
      },
      {
        title: 'Sub-Second Page Swaps',
        description: 'Implemented speculative prefetching on hover, rendering instant transitions between product showcases.'
      },
      {
        title: 'Optimistic State Cart Architecture',
        description: 'Cart updates occur instantaneously in local state while queueing background verification, guaranteeing zero waiting spinners.'
      }
    ],
    outcomes: [
      { metric: '3.4%', label: 'Baseline Cart Abandonment Rate' },
      { metric: '100/100', label: 'Google Lighthouse Performance Score' },
      { metric: '$0', label: 'Infrastructure Server Overhead with Edge CDN' }
    ],
    featured: true,
    layoutVariant: 'full-width'
  },
  {
    id: 'proj-5',
    slug: 'frame-architecture-portfolio',
    title: 'FRAME',
    tagline: 'Monolithic spatial portfolio for an international architectural practice.',
    category: 'Architecture',
    year: '2024',
    client: 'Frame Studio Oslo',
    role: 'Principal Designer & Frontend Engineer',
    timeline: '10 Weeks',
    liveUrl: 'https://frame.architects-sample.no',
    image: studioImage,
    summary: 'A quiet, monumental digital archive of built work, blueprints, and material studies celebrating Nordic minimalism and natural daylight analysis.',
    challenge: 'Architectural photography files were massive (20MB+), leading to crippling load times on their previous legacy WordPress installation.',
    approach: 'Architected an automated multi-tier image pipeline converting CAD renders and photography into modern AVIF/WebP responsive sets, orchestrated with progressive blur-up placeholders.',
    decisions: [
      {
        title: 'Progressive Blur-Up Architecture',
        description: 'Generated inline low-resolution blur hash vectors so pages never present blank placeholders during image decompression.'
      },
      {
        title: 'Editorial Blueprint Drawer',
        description: 'Created an interactive overlay where visitors can slide between the finished building photography and technical floorplans.'
      },
      {
        title: 'Quiet Monochromatic Theme',
        description: 'Used a strict charcoal and natural stone palette to guarantee the architectural photography remains the hero.'
      }
    ],
    outcomes: [
      { metric: '82%', label: 'Reduction in Total Page Weight (from 38MB to 4.2MB)' },
      { metric: 'sub-1s', label: 'Initial Page Display Across Nordic 4G Networks' },
      { metric: 'Top 5', label: 'Recognized in Architectural Digital Archive Reviews' }
    ],
    featured: false,
    layoutVariant: 'two-column'
  }
];
