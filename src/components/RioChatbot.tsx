import { useState, useRef, useEffect } from 'react'

// ─── XPLORIX KNOWLEDGE BASE ───
const KNOWLEDGE = {
  about: `Xplorix Solutions is a premier digital product studio based in Karachi, operating remotely worldwide. We are a senior team of strategists, creative directors, and systems engineers who design and build production-grade web systems, mobile apps, custom AI pipelines, and enterprise automation tools.`,

  automationPriority: `We engineer end-to-end automated workflows, LLM-powered content & decision pipelines, intelligent document processing, predictive analytics engines, and autonomous agent systems that eliminate manual operational bottlenecks.`,

  services: [
    {
      name: 'Automation & AI Pipelines',
      desc: 'Custom AI agent orchestration, workflow automation, RAG vector pipelines, LLM content & decision engines, and predictive analytics tools.',
    },
    {
      name: 'Web Systems',
      desc: 'Editorial-grade, ultra-fast web platforms built with React, Next.js, TypeScript, server-side rendering, edge caching, and interactive GSAP/Three.js visual experiences.',
    },
    {
      name: 'Mobile Products',
      desc: 'Native iOS & Android mobile applications featuring offline-first architectures, gesture navigation, real-time sync, and biometric security.',
    },
    {
      name: 'Product Design & UI/UX',
      desc: 'High-precision design systems, mathematical grid discipline, color token architectures, and interactive component libraries in Figma.',
    },
    {
      name: 'AI + Data Intelligence',
      desc: 'Custom machine learning models, computer vision systems (YOLOv8, OpenCV), vector databases, and real-time streaming data pipelines.',
    },
    {
      name: 'Headless Commerce',
      desc: 'High-converting custom commerce storefronts with dynamic checkout, subscription engines, and headless CMS integrations.',
    },
    {
      name: 'Cloud & DevOps Infrastructure',
      desc: 'Multi-region cloud architectures (AWS/GCP), Docker container orchestration, Kubernetes, automated CI/CD pipelines, and 24/7 observability.',
    },
    {
      name: 'API Architecture & Backend Systems',
      desc: 'Scalable REST, GraphQL, and event-driven API backends written in Node.js, Python, and FastAPI with enterprise security layers.',
    },
    {
      name: 'Custom Enterprise Software',
      desc: 'Bespoke operational dashboards, internal workflow tools, analytics portals, and multi-tenant SaaS architectures.',
    },
  ],

  process: [
    { phase: '1. Discover', desc: 'Map technical architecture, business goals, and user requirements before touching code.' },
    { phase: '2. Frame', desc: 'Define data schemas, performance budgets, design tokens, and success metrics.' },
    { phase: '3. Design', desc: 'Craft high-fidelity editorial interfaces with real content and interactive prototypes.' },
    { phase: '4. Engineer', desc: 'Write clean, resilient TypeScript & Python code backed by automated testing.' },
    { phase: '5. Ship', desc: 'Deploy to multi-region edge environments with zero-downtime CI/CD pipelines.' },
    { phase: '6. Evolve', desc: 'Monitor telemetry and performance metrics post-launch for continuous optimization.' },
  ],

  projects: [
    {
      name: 'IntelliHire',
      category: 'AI / Agentic Recruitment',
      desc: 'AI-Powered Interview Platform simulating real-world interviews using specialized AI agents for HR, technical coding, and stress evaluations with real-time scoring.',
      tech: 'React, TypeScript, Tailwind CSS, Node.js, AI/LLMs, RAG, Vector Database, Zustand',
      github: 'https://github.com/afras/intellihire-ai-platform',
    },
    {
      name: 'GeoIntel Global',
      category: 'Geopolitical Intelligence & NLP',
      desc: 'Real-time intelligence dashboard monitoring 5,000+ multilingual news feeds across 45+ languages with sub-30 second breaking event detection.',
      tech: 'React, TypeScript, Node.js, Express, RSS Feeds, AI/NLP, Vector Pipelines',
      github: 'https://github.com/afras/geointel-global',
    },
    {
      name: 'Solar Energy Management System',
      category: 'IoT & Smart Energy Analytics',
      desc: 'Smart solar telemetry platform providing panel-level monitoring, generation analytics, battery discharge optimization (+22% array lift), and fault prediction.',
      tech: 'IoT Telemetry, Python, FastAPI, React, Data Analytics',
      github: 'https://github.com/afras/solar-energy-management',
    },
    {
      name: 'AI Tennis Tracker',
      category: 'Computer Vision & Sports Analytics',
      desc: 'Computer vision framework tracking tennis players and ball motion at 60 FPS using YOLOv8, OpenCV, and 3D Kalman trajectory filtering.',
      tech: 'Python, YOLOv8, OpenCV, Kalman Filter, MultiTracker, SciPy',
      github: 'https://github.com/afras/ai-tennis-player-tracking',
    },
    {
      name: 'SEO Automation Engine',
      category: 'Desktop Automation & Scraping',
      desc: 'Desktop SEO automation tool processing 1,200+ pages per minute for automated audit reports, saving 35 hours per analyst weekly.',
      tech: 'Python, Tkinter, BeautifulSoup, Pandas, Web Scraping',
      github: 'https://github.com/afras/seo-web-scraper-tool',
    },
  ],

  techStack: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
    'Tailwind CSS', 'GSAP', 'Three.js', 'AI / LLMs', 'RAG Pipelines',
    'Vector DBs', 'YOLOv8', 'OpenCV', 'Docker', 'Kubernetes', 'AWS',
    'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs',
  ],

  budget: 'Our project investments typically range from $200 to $10,000+, depending on scope, features, and timeline requirements.',
  timeline: 'Project delivery timelines range from rapid turnarounds (1-2 weeks) to multi-month product engineering initiatives (1-3 months).',
  location: 'Xplorix Solutions is headquartered in Karachi, Pakistan, operating remotely worldwide for global clients.',
  contact: 'Scroll down to the "Project Configurator" or Contact section on our homepage to scope your project live, or send us a message directly!',
}

// ─── INTELLIGENT MATCHING ENGINE ───
function getSmartResponse(input: string): string {
  const q = input.trim().toLowerCase()
  if (!q) return "How can I assist you with Xplorix Solutions today?"

  // 1. SERVICES (Handle "waht services", "services provided", "what do you do", "what xplorix offers")
  if (
    /service/i.test(q) ||
    /waht\s*service/i.test(q) ||
    /what\s*(do|can)\s*(you|xplorix|u)\s*(do|provide|offer|build)/i.test(q) ||
    /capabilities/i.test(q) ||
    /offerings/i.test(q) ||
    /what\s*you\s*guys\s*do/i.test(q) ||
    /what\s*can\s*i\s*get/i.test(q)
  ) {
    return `At Xplorix Solutions, we engineer 9 core digital product capabilities:\n\n` +
      `⚡ 1. Automation & AI Pipelines (Custom AI agents, LLM decision engines, RAG vector pipelines)\n` +
      `💻 2. Web Systems (React, Next.js, TypeScript, GSAP)\n` +
      `📱 3. Mobile Products (iOS & Android Native Apps)\n` +
      `🎨 4. Product Design & UI/UX Systems\n` +
      `🧠 5. AI & Data Intelligence (Computer Vision, ML)\n` +
      `🛍️ 6. Headless Commerce Systems\n` +
      `☁️ 7. Cloud Infrastructure & DevOps (AWS, Docker, K8s)\n` +
      `🔌 8. API Architecture & Scalable Backends\n` +
      `💼 9. Custom Enterprise Software & Dashboards\n\n` +
      `Which service would you like to explore for your project?`
  }

  // 2. AUTOMATION & AI PIPELINES
  if (
    /automat/i.test(q) ||
    /workflow/i.test(q) ||
    /rpa/i.test(q) ||
    /bot/i.test(q) ||
    /pipeline/i.test(q) ||
    /agentic/i.test(q)
  ) {
    return `⚡ Automation & AI Pipelines:\n\n${KNOWLEDGE.automationPriority}\n\nWe build custom bots, automated data processors, AI candidate evaluators, and intelligent web scrapers. Have an operational process you want to automate?`
  }

  // 3. ABOUT XPLORIX
  if (
    /what\s*(is|are)\s*xplorix/i.test(q) ||
    /who\s*(is|are)\s*(xplorix|you)/i.test(q) ||
    /about\s*(xplorix|company|studio|yourself)/i.test(q) ||
    /tell\s*me\s*about\s*xplorix/i.test(q) ||
    /xplorix\s*solutions/i.test(q)
  ) {
    return `${KNOWLEDGE.about}\n\nOur philosophy: "We make technology feel inevitable." We focus on high-performance web applications, custom AI pipelines, and senior-level software execution.`
  }

  // 4. PROJECTS / PORTFOLIO / PAST WORK
  if (
    /project/i.test(q) ||
    /portfolio/i.test(q) ||
    /work/i.test(q) ||
    /case\s*stud/i.test(q) ||
    /what\s*(have\s*you|did\s*you)\s*(built|made|done)/i.test(q) ||
    /built/i.test(q)
  ) {
    const list = KNOWLEDGE.projects.map((p) => `• ${p.name} (${p.category}): ${p.desc.split('.')[0]}.`).join('\n\n')
    return `Here are our 5 featured Xplorix projects:\n\n${list}\n\nWant technical details or GitHub repositories for any of these?`
  }

  // 5. SPECIFIC PROJECTS
  if (/intellihire/i.test(q) || /interview/i.test(q) || /recruitment/i.test(q)) {
    const p = KNOWLEDGE.projects[0]
    return `🤖 INTELLIHIRE — AI-Powered Interview Platform\n${p.desc}\n\n• Tech Stack: ${p.tech}\n• GitHub Repo: ${p.github}`
  }

  if (/geointel/i.test(q) || /geopolitical/i.test(q) || /intelligence/i.test(q) || /news/i.test(q)) {
    const p = KNOWLEDGE.projects[1]
    return `🌍 GEOINTEL GLOBAL — Geopolitical Intelligence Platform\n${p.desc}\n\n• Tech Stack: ${p.tech}\n• GitHub Repo: ${p.github}`
  }

  if (/solar/i.test(q) || /energy/i.test(q) || /photovoltaic/i.test(q)) {
    const p = KNOWLEDGE.projects[2]
    return `☀️ SOLAR ENERGY MANAGEMENT SYSTEM\n${p.desc}\n\n• Tech Stack: ${p.tech}\n• GitHub Repo: ${p.github}`
  }

  if (/tennis/i.test(q) || /court/i.test(q) || /vision/i.test(q) || /yolo/i.test(q)) {
    const p = KNOWLEDGE.projects[3]
    return `🎾 AI TENNIS TRACKER — Computer Vision Sports Analytics\n${p.desc}\n\n• Tech Stack: ${p.tech}\n• GitHub Repo: ${p.github}`
  }

  if (/seo/i.test(q) || /scraper/i.test(q) || /scraping/i.test(q) || /crawl/i.test(q)) {
    const p = KNOWLEDGE.projects[4]
    return `🔍 SEO AUTOMATION ENGINE — Desktop Web Scraper Tool\n${p.desc}\n\n• Tech Stack: ${p.tech}\n• GitHub Repo: ${p.github}`
  }

  // 6. AI & DATA
  if (/ai/i.test(q) || /machine\s*learn/i.test(q) || /llm/i.test(q) || /rag/i.test(q) || /vector/i.test(q)) {
    return `🧠 AI & Data Intelligence at Xplorix:\nWe construct production LLM pipelines, RAG context retrieval architectures, custom vector databases, and real-time computer vision models (like YOLOv8). All AI integrations run on scalable cloud infrastructure with robust monitoring.`
  }

  // 7. WEB SYSTEMS & TECH STACK
  if (/web/i.test(q) || /tech/i.test(q) || /stack/i.test(q) || /react/i.test(q) || /next/i.test(q) || /python/i.test(q)) {
    return `💻 Our Engineering Tech Stack:\n${KNOWLEDGE.techStack.join(', ')}\n\nWe build editorial-grade, ultra-fast web systems with server-side rendering, GSAP motion design, and edge caching.`
  }

  // 8. PROCESS
  if (/process/i.test(q) || /how\s*(do\s*you|does\s*xplorix)\s*(work|build|develop)/i.test(q) || /phase/i.test(q) || /steps/i.test(q)) {
    const steps = KNOWLEDGE.process.map((p) => `• ${p.phase}: ${p.desc}`).join('\n')
    return `📐 Our 6-Phase Production Methodology:\n\n${steps}\n\nEvery project is delivered with performance guarantees and full source code ownership.`
  }

  // 9. PRICING & BUDGET
  if (/price|cost|budget|how\s*much|rate|quote|charge|afford/i.test(q)) {
    return `💰 Investment & Budget Ranges:\n${KNOWLEDGE.budget}\n\nYou can use our Project Configurator on the homepage to calculate estimated costs based on your specific requirements!`
  }

  // 10. TIMELINE & LOCATION
  if (/timeline|how\s*long|deadline|duration|turnaround|when/i.test(q)) {
    return `⏱️ Timeline: ${KNOWLEDGE.timeline}`
  }

  if (/location|where|based|country|karachi|pakistan|remote/i.test(q)) {
    return `📍 Location: ${KNOWLEDGE.location}`
  }

  // 11. CONTACT / HIRE
  if (/contact|hire|start|reach|email|book|consult|project/i.test(q)) {
    return `🚀 Ready to start building with Xplorix?\n${KNOWLEDGE.contact}`
  }

  // 12. GREETINGS & WHO IS RIO
  if (/^(hi|hello|hey|sup|yo|greetings|good\s*(morning|evening|afternoon)|howdy)/i.test(q)) {
    return `Hello! 👋 I'm Rio, your AI assistant for Xplorix Solutions. How can I help you explore our services, featured projects, or tech stack today?`
  }

  if (/who\s*are\s*you|your\s*name/i.test(q)) {
    return `I'm Rio — the official AI Assistant for Xplorix Solutions. I am trained on all Xplorix services, automation pipelines, case studies, technology stacks, and production workflows.`
  }

  if (/thank|thanks|thx|bye|goodbye/i.test(q)) {
    return `You're welcome! Feel free to ask anytime if you need more details about Xplorix. Have a great day! 🚀`
  }

  // DEFAULT FALLBACK — Direct, helpful, and focused on Xplorix
  return `I'm Rio, Xplorix's AI assistant. I can give you direct info on:\n` +
    `• Core Capabilities (Automation & AI, Web Systems, Mobile, Design, Cloud, APIs)\n` +
    `• Featured Projects (IntelliHire, GeoIntel, Solar EMS, AI Tennis Tracker, SEO Engine)\n` +
    `• Pricing ($200–$10k+), Timelines, and Tech Stack\n\n` +
    `What would you like to know about Xplorix?`
}

// ─── TYPING ANIMATION ───
function useTypingEffect(text: string, speed = 8) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

// ─── MESSAGE BUBBLE ───
function MessageBubble({ msg, isLatest }: { msg: { role: 'user' | 'rio'; text: string }; isLatest: boolean }) {
  const { displayed, done } = useTypingEffect(
    msg.text,
    msg.role === 'rio' && isLatest ? 8 : 0
  )
  const showText = msg.role === 'user' || !isLatest || done ? msg.text : displayed

  if (msg.role === 'user') {
    return (
      <div className="flex justify-end mb-3.5">
        <div
          className="max-w-[85%] px-4 py-3 rounded-[20px] rounded-br-[4px] text-[13px] leading-relaxed whitespace-pre-wrap shadow-md"
          style={{ background: '#EFE1D5', color: '#2E0D14', fontWeight: 500 }}
        >
          {showText}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start mb-3.5">
      <div className="flex items-start gap-2.5 max-w-[90%]">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
          style={{ background: '#EFE1D5' }}
        >
          <span style={{ color: '#2E0D14', fontSize: '11px', fontWeight: 800, letterSpacing: '0.04em' }}>R</span>
        </div>
        <div
          className="px-4.5 py-3 rounded-[20px] rounded-tl-[4px] text-[13px] leading-relaxed whitespace-pre-wrap shadow-lg"
          style={{
            background: '#1B080D',
            color: '#EFE1D5',
            border: '1px solid rgba(239,225,213,0.14)',
          }}
        >
          {showText}
          {msg.role === 'rio' && isLatest && !done && (
            <span className="inline-block w-1.5 h-4 ml-1 align-middle animate-pulse" style={{ background: '#EFE1D5' }} />
          )}
        </div>
      </div>
    </div>
  )
}

// ─── MAIN CHATBOT COMPONENT ───
interface RioChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function RioChatbot({ isOpen, onClose }: RioChatbotProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'rio'; text: string }[]>([
    {
      role: 'rio',
      text: "Hello! 👋 I'm Rio, AI Assistant for Xplorix Solutions. Ask me anything about our services, featured projects, tech stack, or how we can help scope your next build!",
    },
  ])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll on new messages and state changes
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isThinking])

  // Focus textarea when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 250)
    }
  }, [isOpen])

  // Escape key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || isThinking) return

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    setIsThinking(true)

    // Brief thinking delay for realism
    setTimeout(() => {
      const response = getSmartResponse(trimmed)
      setMessages((prev) => [...prev, { role: 'rio', text: response }])
      setIsThinking(false)
    }, 350 + Math.random() * 450)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickPrompts = [
    'What services do you provide?',
    'Automation & AI Pipelines',
    'Show projects',
    'What is Xplorix?',
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] transition-opacity duration-300 pointer-events-auto"
        style={{ background: 'rgba(15,4,6,0.65)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        data-lenis-prevent
        className="fixed z-[70] flex flex-col overflow-hidden animate-slideUp pointer-events-auto shadow-2xl"
        style={{
          bottom: '24px',
          right: '24px',
          width: 'min(440px, calc(100vw - 32px))',
          height: 'min(640px, calc(100vh - 48px))',
          background: '#2E0D14',
          borderRadius: '24px',
          border: '1px solid rgba(239,225,213,0.16)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.75)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ background: '#250B10', borderBottom: '1px solid rgba(239,225,213,0.12)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md"
              style={{ background: '#EFE1D5' }}
            >
              <span style={{ color: '#2E0D14', fontSize: '13px', fontWeight: 800, letterSpacing: '0.05em' }}>R</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 style={{ color: '#EFE1D5', fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'var(--font-meta, sans-serif)' }}>
                  RIO
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Active AI Assistant" />
              </div>
              <p style={{ color: 'rgba(239,225,213,0.55)', fontSize: '10px', letterSpacing: '0.12em', fontFamily: 'var(--font-meta, sans-serif)' }}>
                XPLORIX AI ASSISTANT
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8.5 h-8.5 rounded-full transition-all cursor-pointer"
            style={{ background: 'rgba(239,225,213,0.08)', color: '#EFE1D5' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239,225,213,0.18)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(239,225,213,0.08)')}
            aria-label="Close Rio Chatbot"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="12" y2="12" />
              <line x1="12" y1="2" x2="2" y2="12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Messages Area */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-1 select-text"
          style={{
            overscrollBehavior: 'contain',
            touchAction: 'pan-y',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(239,225,213,0.25) transparent',
          }}
        >
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} isLatest={idx === messages.length - 1 && msg.role === 'rio'} />
          ))}

          {/* Thinking indicator */}
          {isThinking && (
            <div className="flex justify-start mb-3.5">
              <div className="flex items-start gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: '#EFE1D5' }}
                >
                  <span style={{ color: '#2E0D14', fontSize: '11px', fontWeight: 800 }}>R</span>
                </div>
                <div
                  className="px-4 py-3 rounded-[20px] rounded-tl-[4px] flex items-center gap-1.5 shadow-md"
                  style={{ background: '#1B080D', border: '1px solid rgba(239,225,213,0.14)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#EFE1D5', opacity: 0.7, animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#EFE1D5', opacity: 0.7, animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#EFE1D5', opacity: 0.7, animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        {messages.length <= 3 && (
          <div className="px-4 pb-2.5 pt-1 flex flex-wrap gap-1.5 flex-shrink-0">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => {
                  setInput(prompt)
                  setTimeout(() => {
                    setMessages((prev) => [...prev, { role: 'user', text: prompt }])
                    setIsThinking(true)
                    setTimeout(() => {
                      const response = getSmartResponse(prompt)
                      setMessages((prev) => [...prev, { role: 'rio', text: response }])
                      setIsThinking(false)
                    }, 400)
                    setInput('')
                  }, 50)
                }}
                className="text-[10.5px] tracking-wider px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium"
                style={{
                  background: 'rgba(239,225,213,0.08)',
                  border: '1px solid rgba(239,225,213,0.18)',
                  color: '#EFE1D5',
                  fontFamily: 'var(--font-meta, sans-serif)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(239,225,213,0.18)'
                  e.currentTarget.style.borderColor = 'rgba(239,225,213,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(239,225,213,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(239,225,213,0.18)'
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Enhanced Typing & Input Area */}
        <div
          className="p-3.5 flex-shrink-0"
          style={{ background: '#220A10', borderTop: '1px solid rgba(239,225,213,0.14)' }}
        >
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-[18px] transition-all"
            style={{
              background: '#1B080D',
              border: '1px solid rgba(239,225,213,0.2)',
            }}
          >
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Rio about Xplorix services, projects..."
              className="flex-1 bg-transparent outline-none text-[13px] leading-snug resize-none overflow-y-auto max-h-[90px] placeholder:text-[rgba(239,225,213,0.4)]"
              style={{ color: '#EFE1D5', fontFamily: 'inherit' }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isThinking}
              className="w-8.5 h-8.5 rounded-full flex items-center justify-center flex-shrink-0 transition-all cursor-pointer shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: '#EFE1D5', color: '#2E0D14' }}
              title="Send Message (Enter)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <p className="text-[9.5px] text-center mt-2 opacity-40 text-[#EFE1D5] tracking-wider font-mono">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  )
}
