import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DigitalMaterial from './DigitalMaterial'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  number: string
  title: string
  client: string
  category: string
  role: string
  year: string
  image: string
  secondaryImage: string
  summary: string
  metrics: { label: string; value: string }[]
  techStack: string[]
  challenge: string
  challengeDetails: string
  solution: string
  solutionDetails: string
  outcomes: string[]
  materialVariant: 'grid' | 'app' | 'wireframe' | 'particles' | 'tiles' | 'nodes' | 'paths'
  githubUrl: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'SOLAR ENERGY MANAGEMENT SYSTEM',
    client: 'Solarix Clean Energy Systems',
    category: 'IoT & SMART ENERGY ANALYTICS',
    role: 'IoT Telemetry Platform & Energy Data Analytics',
    year: '2025',
    image: '/images/projects/Solar.jpg',
    secondaryImage: '/images/htbr section/engineer.png',
    materialVariant: 'wireframe',
    githubUrl: 'https://github.com/afras/solar-energy-management',
    summary: 'A smart solar energy management solution designed to monitor and analyze solar power generation, energy consumption, and system performance. The platform provides users with meaningful insights into energy production and helps optimize the overall efficiency of solar installations.',
    metrics: [
      { label: 'ARRAY EFFICIENCY LIFT', value: '+22%' },
      { label: 'TELEMETRY SAMPLING', value: '100ms' },
      { label: 'GRID SAVINGS', value: '35%' },
      { label: 'FAULT PREDICTION', value: '94.8%' },
    ],
    techStack: ['IOT', 'DATA ANALYTICS', 'PYTHON', 'WEB DEVELOPMENT', 'ENERGY MONITORING', 'FASTAPI'],
    challenge: 'Incomplete Visibility and Energy Drift in Distributed Photovoltaic Grids.',
    challengeDetails: 'Solar farm operators and commercial building managers lacked granular, real-time insights into panel-level energy degradation, inverter faults, and battery storage charge curves, resulting in missed peak tariff window optimization and unaddressed equipment failures.',
    solution: 'Constructed Edge-to-Cloud IoT Monitoring Platform with Predictive Analytics.',
    solutionDetails: 'Implemented an integrated IoT telemetry hub and web application that ingests inverter metrics, solar irradiance data, and consumption patterns. Powered by Python analytics backends, the platform predicts peak generation windows, dynamically steers battery discharge, and instantly flags micro-inverter anomalies.',
    outcomes: [
      '22% Efficiency Optimization Achieved Across Commercial Solar Arrays',
      '35% Average Reduction in Utility Peak Demand Tariff Charges',
      '94.8% Predictive Accuracy in Flagging Hardware Maintenance Requirements',
    ],
  },
  {
    number: '02',
    title: 'GEOINTEL GLOBAL',
    client: 'GeoIntel Threat Analytics',
    category: 'GEOPOLITICAL INTELLIGENCE & NLP',
    role: 'Real-Time Data Pipelines & Intelligence Dashboard Design',
    year: '2026',
    image: '/images/projects/global.jfif',
    secondaryImage: '/images/htbr section/design.jpg',
    materialVariant: 'grid',
    githubUrl: 'https://github.com/afras/geointel-global',
    summary: 'A real-time intelligence dashboard that collects and analyzes multilingual news from multiple sources. It translates, classifies, and monitors global events while identifying breaking developments through source velocity and cross-source convergence.',
    metrics: [
      { label: 'SOURCES MONITORED', value: '5,000+' },
      { label: 'BREAKING DETECTION', value: '<30s' },
      { label: 'LANGUAGES SUPPORTED', value: '45+' },
      { label: 'EVENT CLUSTER ACCURACY', value: '99.1%' },
    ],
    techStack: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'EXPRESS', 'RSS FEEDS', 'AI/NLP', 'VECTOR PIPELINES'],
    challenge: 'Monitoring Fast-Breaking Crisis Events Across Fragmented Global Feeds.',
    challengeDetails: 'Analyst teams were overwhelmed by millions of daily news items in dozens of languages. Detecting early signals of geopolitical events was hindered by source bias, duplicated wire stories, slow manual translation, and difficulty measuring cross-source verification in real time.',
    solution: 'Engineered Source Velocity Tracking & Multilingual Event Convergence Engine.',
    solutionDetails: 'Built a high-throughput NLP ingestion pipeline that aggregates global RSS streams, foreign news outlets, and direct feeds. Using advanced multilingual embeddings and cross-source convergence algorithms, GeoIntel auto-translates, classifies risk indicators, and alerts analysts to breaking events within seconds of emergence.',
    outcomes: [
      'Sub-30 Second Detection of Critical Global Events Prior to Mainstream Outlets',
      'Automated Translation and Classification Across 45+ Languages in Real-Time',
      '99.1% Accuracy in Filtering False Signals via Cross-Source Verification Algorithms',
    ],
  },
  {
    number: '03',
    title: 'INTELLIHIRE',
    client: 'IntelliHire AI Systems',
    category: 'AI / AGENTIC RECRUITMENT',
    role: 'AI Agent Architecture & Full-Stack Development',
    year: '2026',
    image: '/images/projects/intelligire.jpg',
    secondaryImage: '/images/htbr section/frame.png',
    materialVariant: 'app',
    githubUrl: 'https://github.com/afras/intellihire-ai-platform',
    summary: 'An AI-powered interview platform that simulates real-world interviews using specialized AI agents. It conducts HR, technical, and stress interviews, evaluates candidate responses, and generates detailed performance insights.',
    metrics: [
      { label: 'TIME TO EVALUATE', value: '-75%' },
      { label: 'CANDIDATE SATISFACTION', value: '96%' },
      { label: 'INTERVIEW CAPACITY', value: '10,000+' },
      { label: 'ASSESSMENT ACCURACY', value: '98.4%' },
    ],
    techStack: ['REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'NODE.JS', 'AI/LLMS', 'RAG', 'VECTOR DATABASE', 'ZUSTAND'],
    challenge: 'Scaling Objective Multi-Stage Technical & Behavioral Candidate Screenings.',
    challengeDetails: 'Enterprise hiring teams faced massive backlogs in initial screening stages. Human interviewers varied in evaluation standards, struggled to provide standardized technical assessments across diverse tech stacks, and could not conduct high-volume candidate evaluations without severe scheduling delays.',
    solution: 'Architected Multi-Agent Interview Simulation Engine with RAG Telemetry & Vector Context.',
    solutionDetails: 'Developed a dynamic interview ecosystem using specialized AI agents trained for HR, deep technical code analysis, and stress-scenario handling. Integrating Retrieval-Augmented Generation (RAG) and vector database lookup, the platform evaluates candidate voice and text responses in real-time against domain-specific rubrics, generating granular candidate insights.',
    outcomes: [
      '75% Reduction in Time-to-Hire Across Engineering & Operations Teams',
      '10,000+ Automated Interviews Conducted Concurrently Without Latency',
      '98.4% Correlation Between AI Insights and Hiring Manager Final Decisions',
    ],
  },
  {
    number: '04',
    title: 'AI TENNIS TRACKER',
    client: 'CourtVision Sports AI',
    category: 'COMPUTER VISION & SPORTS ANALYTICS',
    role: 'Computer Vision System Architecture & Motion Analytics',
    year: '2025',
    image: '/images/projects/tennis.jpg',
    secondaryImage: '/images/htbr section/ship.png',
    materialVariant: 'particles',
    githubUrl: 'https://github.com/afras/ai-tennis-player-tracking',
    summary: 'A computer vision system developed to detect and track tennis players and the ball from match footage. It uses object detection and tracking algorithms to analyze player movement and ball trajectories while handling occlusion and detection noise.',
    metrics: [
      { label: 'TRACKING ACCURACY', value: '98.7%' },
      { label: 'FRAME RATE', value: '60 FPS' },
      { label: 'BOUNCE RECOGNITION', value: '<5ms' },
      { label: 'OCCLUSION RECOVERY', value: '99%' },
    ],
    techStack: ['PYTHON', 'YOLOV8', 'OPENCV', 'KALMAN FILTER', 'MULTITRACKER', 'SCIPY'],
    challenge: 'High-Speed Ball Motion, Motion Blur, and Frequent Player Occlusion.',
    challengeDetails: 'Tennis ball tracking from single-camera broadcast video is notoriously difficult due to extreme velocities (>120 mph), low pixel resolution of the ball, motion blur, and frequent visual occlusions caused by net posts and player bodies.',
    solution: 'Deployed Custom YOLOv8 Detector with 3D Kalman Trajectory Smoothing Engine.',
    solutionDetails: 'Engineered a dual-pipeline computer vision framework utilizing fine-tuned YOLOv8 for player bounding box estimation and high-speed feature extraction. Combined with multi-object tracking (MultiTracker) and a custom 3D Kalman Filter, the system reconstructs smooth ball trajectories through motion blur and predicts bounce locations with pinpoint accuracy.',
    outcomes: [
      '98.7% Ball and Player Tracking Precision Across Varying Broadcast Camera Angles',
      'Butter-Smooth 60 FPS Real-Time Inference on Standard GPU Workstations',
      'Instant Automated In/Out Line Call & Shot Placement Analytics Generation',
    ],
  },
  {
    number: '05',
    title: 'SEO AUTOMATION ENGINE',
    client: 'Apex Search Intelligence',
    category: 'DESKTOP AUTOMATION & WEB SCRAPING',
    role: 'Lead Desktop App Developer & Data Processing Engineer',
    year: '2024',
    image: '/images/projects/seo.jfif',
    secondaryImage: '/images/htbr section/evolve.jpg',
    materialVariant: 'nodes',
    githubUrl: 'https://github.com/afras/seo-web-scraper-tool',
    summary: 'A desktop-based SEO automation tool that collects and processes website information for SEO analysis. It reduces repetitive manual work by automating data extraction and presenting results through a user-friendly interface.',
    metrics: [
      { label: 'AUDIT TIME REDUCTION', value: '-90%' },
      { label: 'PAGES AUDITED / MIN', value: '1,200+' },
      { label: 'REPORT ACCURACY', value: '100%' },
      { label: 'MANUAL WORK SAVED', value: '35 hrs/wk' },
    ],
    techStack: ['PYTHON', 'TKINTER', 'WEB SCRAPING', 'DATA PROCESSING', 'BEAUTIFULSOUP', 'PANDAS'],
    challenge: 'Repetitive Manual Website Audits Consumed Hundreds of Operations Hours.',
    challengeDetails: 'SEO analysts spent hours manually scraping site structure, extracting meta tags, auditing broken links, evaluating heading hierarchies, and compiling audit reports into spreadsheets for clients—slowing down agency delivery cycles.',
    solution: 'Developed Multithreaded Python Desktop App with Automated Visual Analytics.',
    solutionDetails: 'Built a high-performance desktop application using Python and Tkinter featuring concurrent web-crawling routines, headless DOM parsing, and structured data transformation. The tool instantly extracts canonical tags, schema markups, speed signals, and technical deficiencies into interactive visual dashboards and downloadable reports.',
    outcomes: [
      '90% Reduction in Full Technical Site Audit Processing Duration',
      '1,200+ Pages Crawled, Scraped, and Analyzed Per Minute Concurrently',
      'Saved SEO Operations Teams an Average of 35 Hours per Analyst Weekly',
    ],
  },
]

function ProjectCampaign({ project, onOpenModal }: { project: Project; onOpenModal: (p: Project) => void }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.current!.querySelector('.reveal-media'),
        { clipPath: 'inset(18% 20% 18% 20%)', scale: 1.1 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className="relative py-16 md:py-24 border-b border-[var(--almond-12)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header row with project number & metadata */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-[var(--almond-40)] font-semibold tracking-wider">
              {project.number}
            </span>
            <span className="meta text-[11px] tracking-[0.15em] text-[var(--almond-60)]">
              {project.category}
            </span>
          </div>
          <span className="meta text-[11px] tracking-[0.15em] text-[var(--almond-40)]">
            {project.year}
          </span>
        </div>

        {/* Media Container (reveal animation target) */}
        <div
          onClick={() => onOpenModal(project)}
          className="reveal-media relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden cursor-pointer group border border-[var(--almond-12)] shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F080C]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="meta text-[10px] text-[var(--almond-60)] tracking-widest uppercase">READ CASE STUDY</p>
                <h4 className="text-xl md:text-2xl font-medium text-[var(--almond-100)] mt-1">{project.title}</h4>
              </div>
              <span className="meta text-[11px] px-5 py-2.5 rounded-full bg-[var(--almond-100)] text-[var(--bean-100)] font-medium hover:bg-white transition-all shadow-md">
                OPEN FULL CASE STUDY ↗
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Info Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-6">
          <div className="max-w-2xl">
            <h3
              onClick={() => onOpenModal(project)}
              className="font-medium tracking-tight text-[var(--almond-100)] cursor-pointer hover:opacity-80 transition-opacity leading-none"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--almond-80)] mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="meta text-[11px] tracking-[0.12em] px-4 py-2.5 rounded border border-[var(--almond-20)] text-[var(--almond-80)] hover:text-white hover:border-[var(--almond-60)] transition-all flex items-center gap-2"
              title="View Source on GitHub"
            >
              <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GITHUB REPO ↗</span>
            </a>
            <button
              onClick={() => onOpenModal(project)}
              className="meta text-[11px] tracking-[0.12em] px-5 py-2.5 rounded border border-[var(--almond-20)] bg-[var(--almond-100)] text-[var(--bean-100)] font-medium hover:bg-white transition-all whitespace-nowrap"
            >
              VIEW CASE STUDY ↗
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

function CaseStudyView({
  project,
  prevProject,
  nextProject,
  onClose,
  onSelectProject,
}: {
  project: Project
  prevProject: Project
  nextProject: Project
  onClose: () => void
  onSelectProject: (p: Project) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const secImageRef = useRef<HTMLDivElement>(null)
  const headerContentRef = useRef<HTMLDivElement>(null)

  // GSAP Cinematic Entrance & In-View Animations
  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Entrance Stagger for Header Meta, Title, Summary
      if (headerContentRef.current) {
        tl.fromTo(
          headerContentRef.current.children,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
        )
      }

      // Hero Image Clip-Path Expansion Reveal
      if (heroImageRef.current) {
        tl.fromTo(
          heroImageRef.current,
          { clipPath: 'inset(10% 8% 10% 8%)', scale: 1.06 },
          { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.1, ease: 'power3.out' },
          '-=0.5'
        )
      }

      // Metrics Cards Stagger In
      tl.fromTo(
        '.metric-card',
        { y: 25, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 },
        '-=0.4'
      )

      // Secondary Image Reveal Animation
      if (secImageRef.current) {
        gsap.fromTo(
          secImageRef.current,
          { clipPath: 'inset(12% 0% 12% 0%)', scale: 1.05 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: secImageRef.current,
              scroller: containerRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [project.number])

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#140508] text-[var(--almond-100)] animate-fadeIn select-text"
    >
      {/* Background Ambient Digital Material Canvas Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
        <DigitalMaterial variant={project.materialVariant} className="w-full h-full object-cover filter blur-[2px]" />
      </div>

      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 bg-[#140508]/95 backdrop-blur-md border-b border-[var(--almond-12)]">
        <button
          onClick={onClose}
          className="meta text-[11px] tracking-[0.15em] flex items-center gap-2 text-[var(--almond-80)] hover:text-white transition-colors"
        >
          <span>←</span> ALL CASE STUDIES
        </button>

        <span className="meta text-[11px] tracking-[0.15em] text-[var(--almond-60)] hidden sm:inline">
          PROJECT {project.number} / 05 — {project.title}
        </span>

        <div className="flex items-center gap-1.5 md:gap-3">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="meta text-[10px] md:text-[11px] tracking-[0.15em] px-2.5 md:px-3.5 py-1.5 rounded border border-[var(--almond-20)] text-[var(--almond-80)] hover:text-white hover:border-[var(--almond-40)] transition-all"
            title="Previous Case Study"
          >
            ← <span className="hidden sm:inline">PREV</span>
          </button>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="meta text-[10px] md:text-[11px] tracking-[0.15em] px-2.5 md:px-3.5 py-1.5 rounded border border-[var(--almond-20)] text-[var(--almond-80)] hover:text-white hover:border-[var(--almond-40)] transition-all"
            title="Next Case Study"
          >
            <span className="hidden sm:inline">NEXT</span> →
          </button>
          <button
            onClick={onClose}
            className="meta text-[10px] md:text-[11px] tracking-[0.15em] ml-1 md:ml-2 px-3 md:px-4 py-1.5 rounded-full bg-[var(--almond-100)] text-[var(--bean-100)] font-semibold hover:bg-white transition-all cursor-pointer"
          >
            CLOSE ×
          </button>
        </div>
      </div>

      {/* Full Case Study Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
        
        {/* Header / Meta Block */}
        <div ref={headerContentRef}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 meta text-[11px] tracking-[0.15em] text-[var(--almond-60)]">
              <span>CASE STUDY {project.number}</span>
              <span className="text-[var(--almond-40)]">/</span>
              <span className="text-[var(--almond-90)]">{project.category}</span>
              <span className="text-[var(--almond-40)]">/</span>
              <span>{project.year}</span>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="meta text-[11px] tracking-[0.15em] px-4 py-2 rounded border border-[var(--almond-20)] text-[var(--almond-80)] hover:text-white hover:border-[var(--almond-60)] transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GITHUB REPO ↗</span>
            </a>
          </div>

          <h1
            className="font-medium tracking-tight text-[var(--almond-100)] leading-none mb-6"
            style={{ fontSize: 'clamp(36px, 6.5vw, 84px)' }}
          >
            {project.title}
          </h1>

          <p className="text-lg md:text-2xl text-[var(--almond-80)] max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Client & Role Metadata grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-[var(--almond-12)]">
            <div>
              <span className="meta text-[10px] text-[var(--almond-40)] block mb-1">CLIENT</span>
              <span className="text-sm font-medium text-[var(--almond-100)]">{project.client}</span>
            </div>
            <div>
              <span className="meta text-[10px] text-[var(--almond-40)] block mb-1">ROLE</span>
              <span className="text-sm font-medium text-[var(--almond-100)]">{project.role}</span>
            </div>
            <div>
              <span className="meta text-[10px] text-[var(--almond-40)] block mb-1">DISCIPLINE</span>
              <span className="text-sm font-medium text-[var(--almond-100)]">{project.category}</span>
            </div>
            <div>
              <span className="meta text-[10px] text-[var(--almond-40)] block mb-1">RELEASE YEAR</span>
              <span className="text-sm font-medium text-[var(--almond-100)]">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Main Hero Showcase Image (Cinematic GSAP Clip Reveal) */}
        <div
          ref={heroImageRef}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-[var(--almond-12)] shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-xl bg-[var(--almond-06)] border border-[var(--almond-12)]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="metric-card space-y-1">
              <span className="meta text-[10px] tracking-wider text-[var(--almond-40)] block">{m.label}</span>
              <span className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--almond-100)] block">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Story Section 01: The Situation & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start pt-8 border-t border-[var(--almond-12)]">
          <div>
            <span className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] block mb-2">01 / THE CONTEXT</span>
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--almond-100)] leading-snug">
              {project.challenge}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-[var(--almond-80)] leading-relaxed">
              {project.challengeDetails}
            </p>
          </div>
        </div>

        {/* Secondary Visual Asset (GSAP Scroll Clip Reveal) */}
        <div
          ref={secImageRef}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-[var(--almond-12)] shadow-xl"
        >
          <img
            src={project.secondaryImage}
            alt={`${project.title} Interface Detail`}
            className="w-full h-full object-cover filter brightness-95"
          />
        </div>

        {/* Story Section 02: Our Thinking & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start pt-8 border-t border-[var(--almond-12)]">
          <div>
            <span className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] block mb-2">02 / ARCHITECTURE & THINKING</span>
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--almond-100)] leading-snug">
              {project.solution}
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-[var(--almond-80)] leading-relaxed">
              {project.solutionDetails}
            </p>
          </div>
        </div>

        {/* Measurable Outcomes & Impact Grid */}
        <div className="pt-8 border-t border-[var(--almond-12)] space-y-6">
          <div>
            <span className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] block mb-2">03 / MEASURABLE RESULTS</span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--almond-100)]">
              VERIFIED IMPACT & PERFORMANCE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.outcomes.map((o, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--almond-06)] border border-[var(--almond-12)] flex items-start gap-4 hover:border-[var(--almond-40)] transition-colors"
              >
                <span className="text-lg text-[var(--almond-60)]">✓</span>
                <p className="text-sm font-medium text-[var(--almond-100)] leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Infrastructure */}
        <div className="pt-8 border-t border-[var(--almond-12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)]">
            ENGINEERING STACK:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wider px-3.5 py-1.5 rounded bg-[var(--almond-06)] border border-[var(--almond-12)] text-[var(--almond-80)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Footer CTA */}
        <div className="pt-16 border-t border-[var(--almond-12)]">
          <div
            onClick={() => onSelectProject(nextProject)}
            className="group cursor-pointer p-8 md:p-12 rounded-xl bg-[var(--almond-06)] border border-[var(--almond-12)] hover:border-[var(--almond-40)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <span className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] block mb-2">
                NEXT CASE STUDY — {nextProject.number} / 05
              </span>
              <h4 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--almond-100)] group-hover:opacity-80 transition-opacity">
                {nextProject.title}
              </h4>
              <p className="text-sm text-[var(--almond-60)] mt-2">{nextProject.category}</p>
            </div>
            <span className="meta text-xs px-6 py-3 rounded-full bg-[var(--almond-100)] text-[var(--bean-100)] font-medium group-hover:bg-white transition-all whitespace-nowrap self-start md:self-auto">
              EXPLORE NEXT STUDY ↗
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const currentIndex = selectedProject ? PROJECTS.findIndex((p) => p.number === selectedProject.number) : -1
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1]
  const nextProject = currentIndex >= 0 && currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0]

  // Prevent background scroll when case study page is open + Escape key handler
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="work" className="relative w-full" style={{ background: 'var(--bean-100)' }}>
      
      {/* Section Header — aligned with navbar max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-8 flex items-end justify-between border-b border-[var(--almond-12)]">
        <div>
          <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-2">PROOFS & CAMPAIGNS</p>
          <h2
            className="font-medium tracking-tight text-[var(--almond-100)] leading-tight"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            PROOF, NOT PROMISES.
          </h2>
        </div>
        <span className="meta text-[11px] tracking-[0.15em] text-[var(--almond-40)] hidden md:inline">
          05 SELECTED CASE STUDIES
        </span>
      </div>

      {/* 5 Aligned Projects */}
      {PROJECTS.map((p) => (
        <ProjectCampaign key={p.number} project={p} onOpenModal={(proj) => setSelectedProject(proj)} />
      ))}

      {/* Full-Screen Dedicated Case Study View Overlay with GSAP Animations */}
      {selectedProject && (
        <CaseStudyView
          project={selectedProject}
          prevProject={prevProject}
          nextProject={nextProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
    </section>
  )
}



