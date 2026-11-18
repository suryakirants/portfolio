import { useEffect, useRef, useState } from 'react'
import { links, available, img, skills, projects, repo, labs, education } from './data.js'

const NAV = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Labs', 'Education', 'Contact']
const id = (s) => s.toLowerCase()
const Ico = ({ d, s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
)
const GH = 'M9 19c-4 1.500-4-2-6-2m12 4v-3.500a3 3 0 0 0-1-2.500c3 0 6-2 6-5.500a4.500 4.500 0 0 0-1.500-3.500 4 4 0 0 0 0-3.500s-1 0-3.500 1.500a12 12 0 0 0-6 0C6.500 2 5.500 2 5.500 2a4 4 0 0 0 0 3.500A4.500 4.500 0 0 0 4 9c0 3.500 3 5.500 6 5.500a3 3 0 0 0-1 2.500V21'
const LI = 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4'
const ML = 'M3 5h18v14H3z M3 7l9 6 9-6'

function Loader() {
  const L = ['INITIALIZING SECURE CONNECTION...', 'LOADING PROFILE...', 'ESTABLISHING DIGITAL IDENTITY...', 'ACCESS GRANTED.']
  const [n, setN] = useState(1), [gone, setGone] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setN((x) => Math.min(x + 1, 4)), 330)
    const o = setTimeout(() => setGone(true), 1750)
    return () => { clearInterval(t); clearTimeout(o) }
  }, [])
  if (gone) return null
  return <div className={'loader' + (n === 4 ? ' done' : '')} aria-hidden="true">{L.slice(0, n).map((l, i) => <p key={l} className={i === 3 ? 'ok' : ''}>{'> ' + l}</p>)}</div>
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 })
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Tilt({ children, className = '', max = 8, ...p }) {
  const r = useRef()
  const mv = (e) => {
    const b = r.current.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5
    r.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`
  }
  return <div ref={r} className={className} onMouseMove={mv} onMouseLeave={() => (r.current.style.transform = '')} {...p}>{children}</div>
}

function Nav({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a className="brand" href="#home">ST<span>S</span></a>
      <button className={'burger' + (open ? ' open' : '')} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <nav className={open ? 'open' : ''} aria-label="Main">
        {NAV.map((n) => <a key={n} href={'#' + id(n)} className={active === id(n) ? 'on' : ''} onClick={() => setOpen(false)}>{n}</a>)}
      </nav>
    </header>
  )
}

function Hero() {
  const ref = useRef()
  const mv = (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5
    ref.current.style.setProperty('--px', x * 18 + 'px'); ref.current.style.setProperty('--py', y * 12 + 'px')
  }
  return (
    <section id="home" className="hero" ref={ref} onMouseMove={mv}>
      <div className="grid-bg" aria-hidden="true" /><div className="scan" aria-hidden="true" />
      <div className="hero-copy">
        <p className="status"><b className="dot" />{available ? 'Available for opportunities' : 'Currently not available'}</p>
        <h1>Suryakiran<br />T S</h1>
        <p className="role">Cyber Security Analyst</p>
        <p className="lead">Securing digital environments through threat detection, security operations, digital forensics, and intelligent investigation.</p>
        <p className="sub">M.Sc. Cyber Forensics postgraduate (University 2nd Rank), looking for an entry-level SOC Analyst, Cyber Security Analyst or Digital Forensics role.</p>
        <div className="cta">
          <a className="btn primary" href="#projects">Explore my work</a>
          <a className="btn" href={links.resume} download="Suryakiran_TS_Cyber_Security_Resume.pdf">Download resume</a>
        </div>
        <div className="soc">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Ico d={GH} /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Ico d={LI} /></a>
          <a href={'mailto:' + links.email} aria-label="Email"><Ico d={ML} /></a>
        </div>
      </div>
      <div className="hero-art">
        <div className="halo" aria-hidden="true" /><div className="ring" aria-hidden="true" />
        <img className="portrait" src={img('profile-hero')} width="600" height="900" alt="Suryakiran T S in a dark blazer, smiling with arms crossed" fetchpriority="high" />
        <ul className="chips" aria-label="Focus areas"><li>Cyber Security</li><li>SOC Operations</li><li>Digital Forensics</li><li>Threat Detection</li></ul>
      </div>
    </section>
  )
}

const Sec = ({ i, title, kicker, children }) => (
  <section id={i} className="sec"><div className="wrap"><div className="rv"><h2>{title}</h2>{kicker && <p className="kick">{kicker}</p>}</div>{children}</div></section>
)

function About() {
  const stats = [['2nd', 'Rank, M.Sc. (MG University)'], ['5th', 'Rank, B.Sc. (MG University)'], ['4', 'Security projects on GitHub']]
  return (
    <Sec i="about" title="About" kicker="Investigator mindset, trainer habits.">
      <div className="about">
        <div className="photos rv">
          <img src={img('profile-headshot')} loading="lazy" width="613" height="800" alt="Close-up portrait of Suryakiran T S smiling" />
          <img className="side" src={img('profile-about')} loading="lazy" width="800" height="800" alt="Suryakiran T S looking to the side, smiling" />
        </div>
        <div className="rv">
          <p>I am an M.Sc. Cyber Forensics postgraduate from KMM College of Arts &amp; Science, Thrikkakara, with a University Second Rank. I currently work as a Cyber Security Faculty Intern at Blitz Academy Pvt. Ltd., Kochi.</p>
          <p>Alongside my studies I run training sessions and guide students through hands-on security labs, which keeps my own fundamentals sharp.</p>
          <ul className="tags">{['SOC', 'SIEM monitoring', 'Threat detection', 'Incident response', 'Digital forensics', 'Network security', 'Security investigation'].map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="stats">{stats.map(([a, b]) => <div key={b}><strong>{a}</strong><span>{b}</span></div>)}</div>
        </div>
      </div>
    </Sec>
  )
}

function Skills() {
  const cats = Object.keys(skills), [c, setC] = useState(cats[0])
  return (
    <Sec i="skills" title="Skills & tools" kicker="What I have used in labs, projects and training. Tiles are text badges, not official logos.">
      <div className="tabs rv" role="tablist">{cats.map((k) => <button key={k} role="tab" aria-selected={c === k} className={c === k ? 'on' : ''} onClick={() => setC(k)}>{k}</button>)}</div>
      <div className="tools" key={c}>
        {skills[c].map(([n, m, d]) => (
          <article className="tool" key={n}><span className="mono">{m}</span><h3>{n}</h3><p>{d}</p></article>
        ))}
      </div>
    </Sec>
  )
}

function Experience() {
  return (
    <Sec i="experience" title="Experience">
      <div className="tl rv">
        <div className="node" />
        <article className="card">
          <p className="when">Aug 2026 – Present</p>
          <h3>Cyber Security Faculty Intern</h3>
          <p className="org">Blitz Academy Pvt. Ltd., MG Road, Kochi</p>
          <ul>
            <li>Deliver CEH and SOC training sessions, explaining SIEM, log analysis and attack concepts to students.</li>
            <li>Guide students through hands-on lab exercises using Splunk, Wazuh, Wireshark and Nmap.</li>
          </ul>
        </article>
      </div>
    </Sec>
  )
}

function Projects() {
  const [m, setM] = useState(null)
  useEffect(() => { const k = (e) => e.key === 'Escape' && setM(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (
    <Sec i="projects" title="Projects" kicker="Four security tools I built. Artwork is illustrative, not a screenshot.">
      <div className="pgrid">
        {projects.map((p) => (
          <Tilt key={p.id} className="proj rv">
            <div className="art"><Ico d={p.icon} s={54} /></div>
            <h3>{p.id}</h3><p className="psub">{p.sub}</p><p>{p.text}</p>
            <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="row"><button className="btn sm" onClick={() => setM(p)}>Details</button><a className="btn sm" href={repo(p)} target="_blank" rel="noreferrer">GitHub</a></div>
          </Tilt>
        ))}
      </div>
      {m && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={m.id} onClick={() => setM(null)}>
          <div className="card" onClick={(e) => e.stopPropagation()}>
            <h3>{m.id}: {m.sub}</h3><p>{m.text}</p>
            <ul className="tags">{m.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="note">The GitHub button opens my profile. Add direct repository links in src/data.js.</p>
            <button className="btn primary sm" autoFocus onClick={() => setM(null)}>Close</button>
          </div>
        </div>
      )}
    </Sec>
  )
}

function Labs() {
  return (
    <Sec i="labs" title="Hands-on security labs" kicker="Practice from my resume: what I did, with which tools.">
      <div className="lgrid">
        {labs.map(([n, t, d]) => <article className="lab rv" key={n}><p className="mono sm">{t}</p><h3>{n}</h3><p>{d}</p></article>)}
      </div>
    </Sec>
  )
}

function Education() {
  return (
    <Sec i="education" title="Education">
      <div className="edu">
        {education.map(([a, b, c, d]) => <article className="card rv" key={a}><p className="when">{c}</p><h3>{a}</h3><p className="org">{b}</p><p>{d}</p></article>)}
      </div>
    </Sec>
  )
}

const CMD = {
  help: 'Commands: about, skills, projects, experience, education, contact, clear',
  about: 'Suryakiran T S. M.Sc. Cyber Forensics postgraduate (2nd Rank). Focus: SOC, digital forensics, threat detection.',
  skills: 'Splunk, Wazuh, Wireshark, Nmap, Burp Suite, Autopsy, FTK Imager, Kali Linux, Python.',
  projects: projects.map((p) => p.id).join(', '),
  experience: 'Cyber Security Faculty Intern, Blitz Academy Pvt. Ltd., Kochi (Aug 2026 – Present).',
  education: 'M.Sc. Cyber Forensics (2024–2026), B.Sc. Cyber Forensics (2021–2024), KMM College.',
  contact: links.email + ' | ' + links.github + ' | ' + links.linkedin,
}
function Terminal() {
  const [log, setLog] = useState([['', 'Type "help" to list commands.']]), [v, setV] = useState(''), end = useRef()
  const run = (e) => {
    e.preventDefault(); const c = v.trim().toLowerCase(); setV('')
    if (c === 'clear') return setLog([])
    setLog((l) => [...l, [c, CMD[c] || `Unknown command: ${c}. Type "help".`]])
  }
  useEffect(() => { end.current.scrollTop = end.current.scrollHeight }, [log])
  return (
    <form className="term" onSubmit={run} aria-label="Portfolio command line">
      <div className="bar"><i /><i /><i /><span>surya@portfolio:~</span></div>
      <div className="out" ref={end} aria-live="polite">{log.map(([c, o], i) => <div key={i}>{c && <p className="cmd">$ {c}</p>}<p>{o}</p></div>)}</div>
      <label className="in"><span>$</span><input value={v} onChange={(e) => setV(e.target.value)} placeholder="help" autoComplete="off" spellCheck="false" aria-label="Command" /></label>
    </form>
  )
}

function Contact() {
  return (
    <section id="contact" className="sec contact"><div className="wrap">
      <div className="cgrid">
        <div className="rv">
          <h2>Let’s connect and secure what’s next.</h2>
          <p className="lead">Interested in cybersecurity opportunities, SOC operations, digital investigations, or collaboration? Let’s connect.</p>
          <ul className="clist">
            <li><a href={'mailto:' + links.email}>{links.email}</a></li>
            <li><a href={links.github} target="_blank" rel="noreferrer">github.com/suryakirants</a></li>
            <li><a href={links.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/suryakirants</a></li>
            <li>{links.location}</li>
          </ul>
          <a className="btn primary" href={links.resume} download="Suryakiran_TS_Cyber_Security_Resume.pdf">Download resume</a>
          <Terminal />
        </div>
        <div className="idwrap rv">
          <Tilt className="idcard" max={10}>
            <img src={img('profile-full')} loading="lazy" width="600" height="900" alt="Full-length photo of Suryakiran T S in a black suit" />
            <div className="idtxt"><strong>Suryakiran T S</strong><span>Cyber Security Analyst</span><small>SOC | Digital Forensics | Incident Response</small></div>
          </Tilt>
        </div>
      </div>
    </div></section>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  useReveal()
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach((n) => { const el = document.getElementById(id(n)); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <>
      <Loader /><Nav active={active} />
      <main><Hero /><About /><Skills /><Experience /><Projects /><Labs /><Education /><Contact /></main>
      <footer className="foot"><div className="wrap">
        <div><strong>Suryakiran T S</strong><p>Cyber Security Analyst</p><p className="mono sm">Exploring threats. Investigating evidence. Securing digital environments.</p></div>
        <nav aria-label="Footer">{NAV.map((n) => <a key={n} href={'#' + id(n)}>{n}</a>)}</nav>
        <p className="mono sm">© {new Date().getFullYear()} Suryakiran T S</p>
      </div></footer>
    </>
  )
}
