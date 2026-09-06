import { useState, type FormEvent } from 'react'

const BUILD_OPTIONS = [
  'BESPOKE WEB ARCHITECTURE',
  'MOBILE APP (iOS & ANDROID)',
  'LUXURY E-COMMERCE STOREFRONT',
  'AI & AUTOMATION PIPELINE',
  'BRANDING & PRODUCT DESIGN',
  'CLOUD & DEVOPS INFRASTRUCTURE',
  'API & CUSTOM SOFTWARE',
  'SOMETHING ELSE',
]

const PRIORITY_OPTIONS = [
  'EDITORIAL DESIGN & TYPOGRAPHY',
  'LIGHTNING SPEED & PERFORMANCE',
  'SYSTEM SCALABILITY',
  'WORKFLOW AUTOMATION',
  'CONVERSION RATE LIFT',
  'ENTERPRISE SECURITY',
  'ALL OF IT',
]

const BUDGET_OPTIONS = [
  '$200 – $500',
  '$500 – $1,500',
  '$1,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'FLEXIBLE / NOT SURE YET',
]

const TIMELINE_OPTIONS = [
  'IMMEDIATE / ASAP',
  '1–2 WEEKS',
  '1–3 MONTHS',
  'FLEXIBLE',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

const TARGET_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@xplorixsolutions.com'
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || `https://formsubmit.co/ajax/${TARGET_EMAIL}`

export default function Contact() {
  const [step, setStep] = useState(0)
  const [build, setBuild] = useState('')
  const [priority, setPriority] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 5

  function pick(setter: (v: string) => void, value: string) {
    setter(value)
    setTimeout(() => setStep((s) => Math.min(s + 1, totalSteps - 1)), 250)
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = 'Tell us your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!message.trim()) next.message = 'Give us a short description of the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (honeypot) return // bot trap
    if (!validate()) return

    setStatus('sending')
    setErrorMessage('')

    try {
      const payload = {
        name,
        email,
        message,
        service_requested: build || 'Not specified',
        priority_focus: priority || 'Not specified',
        estimated_budget: budget || 'Not specified',
        desired_timeline: timeline || 'Not specified',
        _subject: `New Project Brief from ${name} (${build || 'General Inquiry'}) — Xplorix Solutions`,
        _replyto: email,
        _template: 'table',
        _captcha: 'false',
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('sent')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(data.message || 'Submission failed. Please try again or send an email directly.')
        setStatus('error')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMessage('Network transmission error. You can retry or send directly via email client.')
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(`Project Inquiry from ${name || 'Client'}`)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${build}\nPriority: ${priority}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject Details:\n${message}`
  )}`

  if (status === 'sent') {
    return (
      <section id="contact" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center" style={{ background: 'var(--bean-100)' }}>
        <div className="w-12 h-12 rounded-full border border-[var(--almond-40)] flex items-center justify-center text-[var(--almond-100)] text-xl mb-6">
          ✓
        </div>
        <p className="meta text-[11px] tracking-[0.2em] mb-3 text-[var(--almond-40)]">TRANSMISSION RECEIVED</p>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[var(--almond-100)] mb-4">THANK YOU, {name.toUpperCase()}.</h3>
        <p className="max-w-md text-sm md:text-base text-[var(--almond-80)] leading-relaxed mb-8">
          Your project brief has been transmitted to <strong>xplorixsolutions.com</strong> ({TARGET_EMAIL}). We&rsquo;ll review your requirements and reply within 1–2 business days.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setStep(0)
            setName('')
            setEmail('')
            setMessage('')
            setBuild('')
            setPriority('')
            setBudget('')
            setTimeline('')
          }}
          className="meta text-[11px] tracking-[0.18em] font-semibold px-6 py-3 rounded-full border border-[var(--almond-20)] text-[var(--almond-100)] hover:bg-[var(--almond-12)] hover:border-[var(--almond-40)] transition-all inline-flex items-center gap-2 group cursor-pointer"
        >
          <span>SUBMIT ANOTHER BRIEF</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </section>
    )
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-10 py-24" style={{ background: 'var(--bean-100)' }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header row aligned with max-w-7xl */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-[var(--almond-12)]">
          <div>
            <p className="meta text-[11px] tracking-[0.2em] text-[var(--almond-40)] mb-1">PROJECT CONFIGURATOR</p>
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-[var(--almond-100)]">
              WHAT ARE WE BUILDING?
            </h2>
          </div>
          <p className="meta text-[11px] tracking-[0.15em] tabular-nums text-[var(--almond-40)]">
            STEP {String(step + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
          </p>
        </div>

        <div className="min-h-[380px]">
          
          {/* Step 0: Service / Build Options */}
          {step === 0 && (
            <fieldset>
              <legend className="sr-only">What are we building?</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {BUILD_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick(setBuild, opt)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                      build === opt
                        ? 'border-[var(--almond-100)] bg-[var(--almond-12)] text-[var(--almond-100)]'
                        : 'border-[var(--almond-12)] bg-[var(--almond-06)] text-[var(--almond-80)] hover:border-[var(--almond-40)] hover:text-[var(--almond-100)]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--almond-40)] mb-6 group-hover:text-[var(--almond-80)] transition-colors">
                      [OPTION]
                    </span>
                    <span className="text-base md:text-lg font-medium tracking-tight leading-snug">
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 1: Priorities */}
          {step === 1 && (
            <fieldset>
              <legend className="mb-6 meta text-[11px] tracking-[0.15em] text-[var(--almond-40)] uppercase">
                WHAT MATTERS MOST FOR THIS PROJECT?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRIORITY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick(setPriority, opt)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                      priority === opt
                        ? 'border-[var(--almond-100)] bg-[var(--almond-12)] text-[var(--almond-100)]'
                        : 'border-[var(--almond-12)] bg-[var(--almond-06)] text-[var(--almond-80)] hover:border-[var(--almond-40)] hover:text-[var(--almond-100)]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--almond-40)] mb-6">
                      [PRIORITY]
                    </span>
                    <span className="text-base md:text-lg font-medium tracking-tight leading-snug">
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 2: Budget Ranging from $200 Upward */}
          {step === 2 && (
            <fieldset>
              <legend className="mb-6 meta text-[11px] tracking-[0.15em] text-[var(--almond-40)] uppercase">
                WHAT IS YOUR ESTIMATED BUDGET RANGE?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick(setBudget, opt)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                      budget === opt
                        ? 'border-[var(--almond-100)] bg-[var(--almond-12)] text-[var(--almond-100)]'
                        : 'border-[var(--almond-12)] bg-[var(--almond-06)] text-[var(--almond-80)] hover:border-[var(--almond-40)] hover:text-[var(--almond-100)]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--almond-40)] mb-6">
                      [BUDGET]
                    </span>
                    <span className="text-xl md:text-2xl font-medium tracking-tight">
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 3: Timeline */}
          {step === 3 && (
            <fieldset>
              <legend className="mb-6 meta text-[11px] tracking-[0.15em] text-[var(--almond-40)] uppercase">
                WHAT IS YOUR DESIRED TIMELINE?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TIMELINE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick(setTimeline, opt)}
                    className={`text-left p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                      timeline === opt
                        ? 'border-[var(--almond-100)] bg-[var(--almond-12)] text-[var(--almond-100)]'
                        : 'border-[var(--almond-12)] bg-[var(--almond-06)] text-[var(--almond-80)] hover:border-[var(--almond-40)] hover:text-[var(--almond-100)]'
                    }`}
                  >
                    <span className="text-xs font-mono text-[var(--almond-40)] mb-6">
                      [TIMELINE]
                    </span>
                    <span className="text-lg md:text-xl font-medium tracking-tight">
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 4: Contact Form */}
          {step === 4 && (
            <form onSubmit={onSubmit} noValidate className="max-w-2xl space-y-6">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />
              
              {/* Summary pill tags of selections */}
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[var(--almond-12)]">
                {build && <span className="meta text-[10px] px-3 py-1 rounded bg-[var(--almond-12)] text-[var(--almond-80)]">{build}</span>}
                {priority && <span className="meta text-[10px] px-3 py-1 rounded bg-[var(--almond-12)] text-[var(--almond-80)]">{priority}</span>}
                {budget && <span className="meta text-[10px] px-3 py-1 rounded bg-[var(--almond-12)] text-[var(--almond-80)]">{budget}</span>}
                {timeline && <span className="meta text-[10px] px-3 py-1 rounded bg-[var(--almond-12)] text-[var(--almond-80)]">{timeline}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="meta text-[10px] tracking-widest block mb-2 text-[var(--almond-40)]">NAME</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b py-2.5 outline-none text-base md:text-lg text-[var(--almond-100)] focus:border-[var(--almond-100)] transition-colors"
                    style={{ borderColor: 'var(--almond-40)' }}
                    placeholder="Your Name or Company"
                  />
                  {errors.name && <span className="text-xs mt-1 block" style={{ color: '#e8b4a0' }}>{errors.name}</span>}
                </label>
                
                <label className="block">
                  <span className="meta text-[10px] tracking-widest block mb-2 text-[var(--almond-40)]">EMAIL</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b py-2.5 outline-none text-base md:text-lg text-[var(--almond-100)] focus:border-[var(--almond-100)] transition-colors"
                    style={{ borderColor: 'var(--almond-40)' }}
                    placeholder="name@company.com"
                  />
                  {errors.email && <span className="text-xs mt-1 block" style={{ color: '#e8b4a0' }}>{errors.email}</span>}
                </label>
              </div>

              <label className="block">
                <span className="meta text-[10px] tracking-widest block mb-2 text-[var(--almond-40)]">TELL US ABOUT THE PROJECT</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b py-2.5 outline-none text-base text-[var(--almond-100)] focus:border-[var(--almond-100)] transition-colors resize-none"
                  style={{ borderColor: 'var(--almond-40)' }}
                  placeholder="Share details regarding your goals, deliverables, or current setup..."
                />
                {errors.message && <span className="text-xs mt-1 block" style={{ color: '#e8b4a0' }}>{errors.message}</span>}
              </label>

              {errorMessage && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-xs leading-relaxed space-y-2">
                  <p>{errorMessage}</p>
                  <p className="text-[11px] opacity-80">
                    Alternatively, send directly via email client to <a href={mailtoHref} className="underline text-[var(--almond-100)] hover:opacity-100">{TARGET_EMAIL}</a>
                  </p>
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="meta text-[12px] tracking-[0.18em] font-semibold px-8 py-4 rounded-full shadow-xl transition-all disabled:opacity-50 inline-flex items-center gap-3 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'var(--almond-100)', color: '#2E0D14' }}
                >
                  <span>{status === 'sending' ? 'TRANSMITTING SIGNAL...' : status === 'error' ? 'RETRY TRANSMISSION' : 'TRANSMIT PROJECT BRIEF'}</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm">↗</span>
                </button>

                {status === 'error' && (
                  <a
                    href={mailtoHref}
                    className="meta text-[11px] tracking-[0.15em] font-medium px-6 py-4 rounded-full border border-[var(--almond-20)] text-[var(--almond-100)] hover:bg-[var(--almond-12)] transition-all inline-flex items-center gap-2"
                  >
                    <span>OPEN EMAIL CLIENT</span>
                    <span>✉</span>
                  </a>
                )}
              </div>
            </form>
          )}

        </div>

        {/* Back navigation button with high visibility UI/UX */}
        {step > 0 && (
          <div className="mt-8 pt-4">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="meta text-[11px] tracking-[0.18em] font-semibold px-6 py-3 rounded-full border border-[var(--almond-20)] text-[var(--almond-100)] hover:bg-[var(--almond-12)] hover:border-[var(--almond-40)] transition-all inline-flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>PREVIOUS STEP</span>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

