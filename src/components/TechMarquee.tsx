import { useState, type ReactNode } from 'react'

interface TechItem {
  name: string
  category: string
  use: string
  icon: ReactNode
}

const TECH_STACK: TechItem[] = [
  // Web & Frontend Frameworks
  {
    name: 'NEXT.JS',
    category: 'FRAMEWORK',
    use: 'FAST, SEO-READY FULLSTACK WEB PLATFORMS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8v8M9 8l7.5 9M15 8v5" />
      </svg>
    ),
  },
  {
    name: 'REACT',
    category: 'UI LIBRARY',
    use: 'COMPONENT-DRIVEN INTERACTIVE UIs',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TYPESCRIPT',
    category: 'LANGUAGE',
    use: 'RELIABLE, TYPE-SAFE CODEBASES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm9.5 5.5h-5v2h1.75v7.5h2.25V10.5h1.75v-2zm2.2 4.1c0-.8.6-1.3 1.6-1.3.8 0 1.5.3 2 .7l1.1-1.4c-.8-.7-1.9-1.1-3.2-1.1-2.2 0-3.6 1.3-3.6 3.1 0 3 4.1 2.5 4.1 3.9 0 .5-.5.8-1.4.8-1.1 0-2.1-.5-2.7-1.2l-1.1 1.5c.9 1 2.3 1.6 3.9 1.6 2.4 0 3.8-1.2 3.8-3.2 0-3.1-4.1-2.6-4.1-3.9z" />
      </svg>
    ),
  },
  {
    name: 'JAVASCRIPT',
    category: 'LANGUAGE',
    use: 'DYNAMIC BROWSER & SERVER RUNTIMES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm11.5 13.5c.6.9 1.4 1.4 2.6 1.4 1.2 0 1.9-.6 1.9-1.5 0-1-.7-1.4-2.3-2.1l-.8-.3c-2.3-1-3.8-2.2-3.8-4.8 0-2.4 1.8-4.2 4.7-4.2 2 0 3.5.7 4.5 2.5l-2.1 1.3c-.6-1-1.3-1.4-2.4-1.4-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 2.1 2l.8.3c2.7 1.2 4.2 2.3 4.2 4.9 0 2.8-2.1 4.5-5.3 4.5-2.5 0-4.3-1-5.3-2.9l2.2-1.4zM9 13.2l2.2-1.3c.4.7.7 1.3 1.4 1.3.7 0 1.2-.4 1.2-1.7V5h2.6v6.6c0 2.8-1.6 4.3-4 4.3-2.1 0-3.1-1.1-3.4-2.7z" />
      </svg>
    ),
  },
  {
    name: 'NODE.JS',
    category: 'RUNTIME',
    use: 'HIGH-THROUGHPUT ASYNCHRONOUS APIs',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zM12 22V12M22 7.5L12 12L2 7.5" />
      </svg>
    ),
  },
  {
    name: 'PYTHON',
    category: 'LANGUAGE / AI',
    use: 'INTELLIGENT DATA & AI PIPELINES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.3h5V7H4.8s-2.3.3-2.3 5 2 4.8 2 4.8h1.2v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.6V4.7S16.3 2 11.9 2zm-2.7 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2.9 18.5c5.2 0 4.9-2.3 4.9-2.3v-2.3h-5V17h7.2s2.3-.3 2.3-5-2-4.8-2-4.8h-1.2v2.4s.1 2.8-2.8 2.8h-4.8s-2.7 0-2.7 2.6v4.3s-.3 2.7 4.1 2.7zm2.7-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
      </svg>
    ),
  },
  {
    name: 'RUST',
    category: 'SYSTEMS',
    use: 'MEMORY-SAFE ULTRA-FAST SYSTEMS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm-4 4.5h3.5a2.5 2.5 0 0 1 0 5H8.5v3H7v-8zm1.5 1.5v2h2a1 1 0 0 0 0-2zm4.5 1.5h3.5v1.5H14v2h4V16.5h-5.5v-5z" />
      </svg>
    ),
  },
  {
    name: 'GO (GOLANG)',
    category: 'SYSTEMS',
    use: 'CONCURRENT CLOUD MICROSERVICES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c0 4.5 3.5 8 8 8h3v-3h-3a5 5 0 1 1 5-5v1.5M18 12a4 4 0 1 0 4 4v-4h-4z" />
      </svg>
    ),
  },
  {
    name: 'FLUTTER',
    category: 'MOBILE',
    use: 'UNIFIED CROSS-PLATFORM APPS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.3 2.2L5 11.5l2.8 2.8L19.9 2.2h-5.6zM14.3 11.5L9.6 16.2l4.7 4.7h5.6l-4.7-4.7 4.7-4.7h-5.6z" />
      </svg>
    ),
  },
  {
    name: 'SWIFT',
    category: 'MOBILE',
    use: 'NATIVE iOS & MACOS APPS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.6 15.4c-2.4 2.8-6.1 4.6-9.6 4.6 4-2 6-5 5.5-8.5C14.8 14 11 16 7 16c5.5-3 8-7 7.5-11.5C11.5 8 8 10 4 10c6.5-5 13.5-5.5 18-2-4.5 2.5-4 5.5-1.4 7.4z" />
      </svg>
    ),
  },
  {
    name: 'KOTLIN',
    category: 'MOBILE',
    use: 'MODERN NATIVE ANDROID STACKS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 2h20L12 12l10 10H2V2z" />
      </svg>
    ),
  },
  {
    name: 'C++',
    category: 'SYSTEMS',
    use: 'LOW-LATENCY NATIVE COMPUTATION',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 6A7 7 0 1 0 11 18M15 12h3M16.5 10.5v3M19.5 12h3M21 10.5v3" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    category: 'CLOUD',
    use: 'SCALABLE GLOBAL CLOUD INFRASTRUCTURE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 11l-2.5 4h2l1-1.6h2.5l.5 1.6h2L9.5 11h-3zm1 1.2l.8 1.4h-1.6l.8-1.4zm5.5-1.2l-1 4h1.8l.6-2.5.8 2.5h1.6l.8-2.5.6 2.5h1.8l-1-4h-2l-.8 2.4-.8-2.4h-1.8zm-9 6c4 2 9 2 13 0l.5 1c-4.5 2.5-10 2.5-14 0l.5-1z" />
      </svg>
    ),
  },
  {
    name: 'GOOGLE CLOUD',
    category: 'CLOUD',
    use: 'ENTERPRISE DATA & ANALYTICS CLOUD',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: 'AZURE',
    category: 'CLOUD',
    use: 'HYBRID ENTERPRISE CLOUD DELIVERY',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.9 2.5L5.6 15.6l-3.6 5.9h5.5l5.4-8.8 5.6 8.8H22L12.9 2.5zm-.8 11.2l-3 4.8h5.9l-2.9-4.8z" />
      </svg>
    ),
  },
  {
    name: 'DOCKER',
    category: 'DEVOPS',
    use: 'CONSISTENT CONTAINERIZED DEPLOYMENTS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.9 11.6h2.2v-2h-2.2v2zm-2.8 0h2.2v-2h-2.2v2zm-2.8 0h2.2v-2H8.3v2zm-2.8 0h2.2v-2H5.5v2zm8.4-2.6h2.2v-2h-2.2v2zm-2.8 0h2.2v-2h-2.2v2zm-2.8 0h2.2v-2H8.3v2zm5.6-2.6h2.2v-2h-2.2v2zm7.1 5.3c-.3-.2-.9-.4-1.6-.3-.3-1.1-1.2-1.9-2.2-2.1l-.4.3c.7.5.9 1.4.9 1.4s-1 .1-2.1.8c-.8.5-1.7 1.4-2.5 1.4H2c-.4 1.5.1 3.5 1.3 4.6 1.7 1.5 4.5 1.8 7.4 1.8 5.4 0 9.8-2.6 10.7-6.2.5.2.9.2 1.2.2.4 0 .7-.1.9-.3z" />
      </svg>
    ),
  },
  {
    name: 'KUBERNETES',
    category: 'DEVOPS',
    use: 'AUTOMATED CONTAINER ORCHESTRATION',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm-1 3.5l6 3.5-2.5 1.5-3.5-2-3.5 2-2.5-1.5 6-3.5zM5.5 8.5l2.5 1.5v4l-2.5 1.5v-7zm1 8.5l2.5-1.5 3.5 2v2.5l-6-3zm11 0l-6 3v-2.5l3.5-2 2.5 1.5zm1-1.5l-2.5-1.5v-4l2.5-1.5v7z" />
      </svg>
    ),
  },
  {
    name: 'POSTGRESQL',
    category: 'DATABASE',
    use: 'STRICT RELATIONAL DATA ARCHITECTURE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="7" rx="8" ry="3" />
        <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    name: 'REDIS',
    use: 'IN-MEMORY CACHING & QUEUES',
    category: 'DATABASE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 5l10-3 10 3v4l-10 3-10-3V5zm0 6l10 3 10-3v4l-10 3-10-3v-4zm0 6l10 3 10-3v4l-10 3-10-3v-4z" />
      </svg>
    ),
  },
  {
    name: 'MONGODB',
    category: 'DATABASE',
    use: 'DOCUMENT-ORIENTED DATA SCHEMAS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2s-6 5.5-6 11.5C6 17 8.7 21 11.5 22v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V22c2.8-1 5.5-5 5.5-8.5C18 7.5 12 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'GRAPHQL',
    category: 'API',
    use: 'DECLARATIVE GRAPH DATA QUERYING',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="3" y1="7" x2="21" y2="17" />
        <line x1="3" y1="17" x2="21" y2="7" />
      </svg>
    ),
  },
  {
    name: 'THREE.JS',
    category: 'GRAPHICS',
    use: 'IMMERSIVE 3D WEBGL GRAPHICS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 19 22 19" />
        <polygon points="12 6 6 16 18 16" />
        <line x1="12" y1="2" x2="12" y2="19" />
      </svg>
    ),
  },
  {
    name: 'GSAP',
    category: 'MOTION',
    use: 'TIMELINE SCROLL CHOREOGRAPHY',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7.5 3.75v7.5L12 19.5l-7.5-3.75v-7.5L12 4.5zm-3 4.5v6l6-3-6-3z" />
      </svg>
    ),
  },
  {
    name: 'TAILWIND',
    category: 'DESIGN SYSTEM',
    use: 'UTILITY DESIGN ENGINE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'OPENAI',
    category: 'ARTIFICIAL INTELLIGENCE',
    use: 'EMBEDDINGS & CUSTOM LLM PIPELINES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.2a4.475 4.475 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.79.79 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.337a4.47 4.47 0 0 1-.535-3.007l.142.085 4.783 2.759a.77.77 0 0 0 .78 0l5.834-3.37v2.336a.08.08 0 0 1-.033.064l-4.835 2.793A4.497 4.497 0 0 1 3.6 18.337zm-1.12-10.74a4.48 4.48 0 0 1 2.34-1.966v5.684a.773.773 0 0 0 .388.676l5.834 3.37-2.02 1.168a.076.076 0 0 1-.071 0L4.1 13.738a4.499 4.499 0 0 1-1.62-6.141zm16.597 3.855l-5.833-3.37 2.019-1.168a.076.076 0 0 1 .071 0l4.837 2.793a4.494 4.494 0 0 1-.678 8.105v-5.684a.773.773 0 0 0-.416-.676zm2.4-4.542l-.142-.085-4.782-2.759a.77.77 0 0 0-.78 0l-5.835 3.37V5.105a.08.08 0 0 1 .034-.064l4.834-2.793a4.494 4.494 0 0 1 6.671 4.793zM8.335 12.812l-2.02-1.167a.071.071 0 0 1-.038-.052V5.99a4.497 4.497 0 0 1 7.37-3.454l-.14.08-4.78 2.76a.79.79 0 0 0-.392.68v6.756z" />
      </svg>
    ),
  },
  {
    name: 'PYTORCH',
    category: 'MACHINE LEARNING',
    use: 'NEURAL NETWORK TRAINING & INFERENCE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L8.5 5.5l1.4 1.4L12 4.8l2.1 2.1 1.4-1.4L12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5 1.5l1.5-1.5 3 3-3 3-1.5-1.5 1.5-1.5-1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: 'TENSORFLOW',
    category: 'MACHINE LEARNING',
    use: 'PRODUCTION DEEP LEARNING MODEL DEPLOYMENTS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 4.5L12 1.5l10.5 3v6L12 7.5 1.5 10.5v-6zm10.5 4.5l9 3v6l-9-3v-6zm-9 3l9 3v6l-9-3v-6z" />
      </svg>
    ),
  },
  {
    name: 'VERCEL',
    category: 'INFRASTRUCTURE',
    use: 'ZERO-CONFIG EDGE & SERVERLESS RUNTIMES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
  {
    name: 'SUPABASE',
    category: 'BACKEND AS A SERVICE',
    use: 'REAL-TIME POSTGRESQL & AUTH ENGINE',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.4 2.1a1.2 1.2 0 00-1.8.3L2.3 16a1.2 1.2 0 00.9 1.8h7.4l-1 4.1a1.2 1.2 0 001.8-.3l9.3-13.6a1.2 1.2 0 00-.9-1.8h-7.4l1-4.1z" />
      </svg>
    ),
  },
  {
    name: 'FIGMA',
    category: 'DESIGN TOKENS',
    use: 'SYSTEM COMPONENT SPECIFICATIONS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12A4 4 0 1 1 12 4a4 4 0 0 1 0 8zm-4-8a4 4 0 0 0 0 8 4 4 0 0 0 0-8zm0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ),
  },
  {
    name: 'VITE',
    category: 'BUILD TOOL',
    use: 'NEXT-GEN MODULE BUNDLING',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 3.5L12.7 21.6a1 1 0 01-1.8 0L1.5 3.5a.6.6 0 01.8-.8l9.7 4 9.7-4a.6.6 0 01.8.8z" />
      </svg>
    ),
  },
  {
    name: 'VUE.JS',
    category: 'FRAMEWORK',
    use: 'PROGRESSIVE WEB INTERFACES',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h3.5L12 15 20.5 3H24L12 22 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z" />
      </svg>
    ),
  },
  {
    name: 'SVELTE',
    category: 'FRAMEWORK',
    use: 'NO-VIRTUAL-DOM COMPILER FRAMEWORK',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 3A4.5 4.5 0 0013 7.5v.7L7.5 6.1A4.5 4.5 0 001 10.6c0 1.5.7 2.8 1.9 3.6L2.3 15A4.5 4.5 0 006.8 19.5c1.5 0 2.8-.7 3.6-1.9l5.5 2.1a4.5 4.5 0 006.5-4.5c0-1.5-.7-2.8-1.9-3.6l.6-.8A4.5 4.5 0 0017.5 3z" />
      </svg>
    ),
  },
  {
    name: 'LINUX',
    category: 'OS RUNTIME',
    use: 'HARDENED SERVER KERNEL ENVIRONMENTS',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9 2 7.5 4 7.5 7.5c0 2 1 3.5 1 5s-1.5 2.5-1.5 4.5c0 2.5 2 5 5 5s5-2.5 5-5c0-2-1.5-3-1.5-4.5s1-3 1-5C16.5 4 15 2 12 2zm-2 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
      </svg>
    ),
  },
  {
    name: 'GIT',
    category: 'VERSION CONTROL',
    use: 'DISTRIBUTED VERSIONING & COLLABORATION',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5 10.9L13.1 2.5a1.5 1.5 0 00-2.1 0L8.8 4.7 11.2 7.1a2 2 0 012.5 2.5l2.4 2.4a2 2 0 11-1.1 1.1l-2.2-2.2v4.4a2 2 0 11-1.5 0V10.5a2 2 0 01-1.1-2.6L7.8 5.5 2.5 10.9a1.5 1.5 0 000 2.1l8.4 8.4a1.5 1.5 0 002.1 0l8.4-8.4a1.5 1.5 0 000-2.1z" />
      </svg>
    ),
  },
  {
    name: 'WEBASSEMBLY',
    category: 'COMPUTE',
    use: 'NEAR-NATIVE IN-BROWSER EXECUTION',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 4h2.5l2 11 2.5-11H11l2.5 11 2-11H18l-3.5 16h-3L9 9l-2.5 11h-3L2 4zm16.5 6h3.5v2.5h-3.5V10zm0 4.5h3.5V17h-3.5v-2.5z" />
      </svg>
    ),
  },
]

// Split into two 18-item arrays for dual-direction marquee rows
const ROW_1 = TECH_STACK.slice(0, 18)
const ROW_2 = TECH_STACK.slice(18, 36)

export default function TechMarquee() {
  const [hovered, setHovered] = useState<TechItem | null>(null)

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden" style={{ background: 'var(--bean-100)' }}>
      {/* Aligned Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div>
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-1">
            PRODUCTION STACK & ECOSYSTEM
          </p>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--almond-100)]">
            BUILT WITH MODERN ARCHITECTURE.
          </h2>
        </div>
      </div>

      {/* Interactive Infinite Marquee Container */}
      <div className="space-y-4 relative z-10">
        
        {/* Row 1 — Moving Left */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex gap-4 min-w-full animate-marquee-left group-hover:[animation-play-state:paused] py-1">
            {[...ROW_1, ...ROW_1].map((item, idx) => {
              const isSelected = hovered?.name === item.name
              return (
                <div
                  key={`r1-${item.name}-${idx}`}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? 'bg-[var(--almond-100)] text-[#2E0D14] border-[var(--almond-100)] shadow-xl scale-105 z-20'
                      : 'bg-[rgba(239,225,213,0.04)] border-[rgba(239,225,213,0.1)] text-[var(--almond-80)] hover:border-[var(--almond-40)]'
                  }`}
                >
                  <div className={`transition-colors ${isSelected ? 'text-[#2E0D14]' : 'text-[var(--almond-60)]'}`}>
                    {item.icon}
                  </div>
                  <span className={`meta text-xs md:text-sm font-semibold tracking-wider ${isSelected ? 'text-[#2E0D14]' : 'text-[var(--almond-90)]'}`}>
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 2 — Moving Right */}
        <div className="flex overflow-hidden group select-none">
          <div className="flex gap-4 min-w-full animate-marquee-right group-hover:[animation-play-state:paused] py-1">
            {[...ROW_2, ...ROW_2].map((item, idx) => {
              const isSelected = hovered?.name === item.name
              return (
                <div
                  key={`r2-${item.name}-${idx}`}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? 'bg-[var(--almond-100)] text-[#2E0D14] border-[var(--almond-100)] shadow-xl scale-105 z-20'
                      : 'bg-[rgba(239,225,213,0.04)] border-[rgba(239,225,213,0.1)] text-[var(--almond-80)] hover:border-[var(--almond-40)]'
                  }`}
                >
                  <div className={`transition-colors ${isSelected ? 'text-[#2E0D14]' : 'text-[var(--almond-60)]'}`}>
                    {item.icon}
                  </div>
                  <span className={`meta text-xs md:text-sm font-semibold tracking-wider ${isSelected ? 'text-[#2E0D14]' : 'text-[var(--almond-90)]'}`}>
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Dynamic Status / Use Case Tooltip Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10 h-10 flex items-center justify-between border-t border-[rgba(239,225,213,0.1)] pt-4">
        {hovered ? (
          <div className="flex items-center gap-3 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[var(--almond-100)]" />
            <p className="meta text-xs md:text-sm tracking-widest text-[var(--almond-100)] font-semibold">
              {hovered.name} <span className="text-[var(--almond-40)]">/</span> <span className="text-[var(--almond-80)]">{hovered.category}</span>
              <span className="hidden sm:inline text-[var(--almond-40)] mx-2">—</span>
              <span className="hidden sm:inline font-normal text-[var(--almond-80)] normal-case">{hovered.use}</span>
            </p>
          </div>
        ) : (
          <p className="meta text-xs text-[var(--almond-40)] tracking-widest">
            HOVER ANY TECHNOLOGY LOGO TO INSPECT PRODUCTION SPECIFICATION
          </p>
        )}
      </div>
    </section>
  )
}
