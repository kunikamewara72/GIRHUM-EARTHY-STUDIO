import Link from 'next/link';
import ContactEnquiryForm from './ContactEnquiryForm';
import data from '../data/content.json';
export function Header({ active }) {
  return (<header><div className="wrap"><Link href="/" className="logo"><img src="/logo.png" alt="Grihum Earthy Studio logo" /><b>Grihum Earthy Studio</b></Link>
    <nav>{data.nav.map(([l, h, k]) => <Link key={k} href={h} className={k === active ? 'on' : ''}>{l}</Link>)}</nav></div></header>);
}
export function Footer() {
  const s = data.site;
  return (<footer><div className="wrap"><div className="grid"><div><img className="flogo" src="/logo.png" alt="Grihum Earthy Studio logo" /><h3>{s.name}</h3><p>{s.tag}. Warm, sustainable spaces rooted in earth and craft.</p></div>
    <div><h3>Pages</h3>{data.nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
    <div><h3>Contact</h3><a href={'mailto:' + s.email}>{s.email}</a><a href={'tel:' + s.phone}>{s.phone}</a><a href={'https://wa.me/' + s.phone.replace(/\D/g,'')} target="_blank" rel="noreferrer">WhatsApp us</a><p>{s.address}</p></div></div>
    <small>© {new Date().getFullYear()} {s.name}. All rights reserved.</small></div></footer>);
}
export function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.t === 'stats') return <section key={i} className="stats"><div className="wrap grid4">{b.items.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>;
    if (b.t === 'split') return <section key={i} className="sec"><div className="wrap split"><h2>{b.h}</h2><div>{b.ps.map((p, j) => <p key={j}>{p}</p>)}</div></div></section>;
    if (b.t === 'cards') {
      const isServices = b.h === 'What we do';
      const isValues = b.h === 'Our design values';
      const isTestimonials = b.h === 'Kind words from clients';
      const isInsights = b.h === 'Insights from the studio';
      const sectionClass = isServices ? 'services-showcase' : isValues ? 'values-showcase' : isTestimonials ? 'client-voices' : isInsights ? 'studio-journal' : (b.dark ? 'dark' : 'alt');
      return <section key={i} className={'sec ' + sectionClass}><div className="wrap"><div className="section-heading"><span className="eyebrow">{isServices ? 'Ways we can help' : isValues ? 'What guides every decision' : isTestimonials ? 'Experiences, in their words' : isInsights ? 'Ideas from the studio' : 'The Grihum approach'}</span><h2>{b.h}</h2></div><div className={'grid ' + (isServices ? 'service-grid' : isValues ? 'value-grid' : isTestimonials ? 'voices-grid' : isInsights ? 'journal-grid' : '')}>{b.items.map(([t, d], j) => <article className="card" key={t}>{isServices ? <><span className="service-number">0{j + 1}</span><h3>{t}</h3><p>{d}</p><span className="service-arrow" aria-hidden="true">↗</span></> : isValues ? <><span className="value-index">0{j + 1}</span><h3>{t}</h3><p>{d}</p></> : isTestimonials ? <><span className="voice-stars" aria-label="5 out of 5 stars">★★★★★</span><p className="voice-quote">“{d.split(' — ')[0]}”</p><div className="voice-byline"><span className="voice-avatar">{t.charAt(0)}</span><span><b>{t}</b><small>{d.split(' — ')[1] || 'Grihum client'}</small></span></div></> : isInsights ? <><span className="journal-count">FIELD NOTE&nbsp; / &nbsp;0{j + 1}</span><h3>{t}</h3><p>{d}</p><Link className="journal-read" href="/about">Explore insight <span aria-hidden="true">↗</span></Link></> : <><h3>{t}</h3><p>{d}</p></>}</article>)}</div></div></section>;
    }
    if (b.t === 'projects') return <section key={i} className="sec"><div className="wrap grid">{b.items.map(([t, k, d]) => <article className="card" key={t}><div className="tile">{k}</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>;
    if (b.t === 'cta') return <section key={i} className="cta"><div className="wrap"><h2>{b.h}</h2><p>{b.p}</p><Link className="btn" href={b.cta[1]}>{b.cta[0]}</Link></div></section>;
    if (b.t === 'form') return <section key={i} className="sec"><div className="wrap split"><h2>Tell us about your project</h2>
      <form action={'mailto:' + data.site.email} method="post" encType="text/plain"><input name="name" placeholder="Your name" required /><input name="email" type="email" placeholder="Email" required /><input name="phone" placeholder="Phone" />
        <select name="type"><option>Residential</option><option>Resort / Hospitality</option><option>Interiors</option><option>Commercial</option></select><textarea name="message" rows="5" placeholder="Project details, location and budget" /><button className="btn">Send Enquiry</button></form></div></section>;
    return null;
  });
}
function HomeStory() {
  return <>
    <section className="home-intro"><div className="wrap home-intro-grid"><div className="intro-mark"><span>G</span><small>Grihum<br />Earthy Studio</small></div><div className="home-intro-copy"><span className="eyebrow">A home in harmony</span><h2>Spaces that feel <em>connected</em> to the way you live.</h2><p>We bring architecture, interiors and landscape together in one thoughtful vision. Every detail begins with the land, the light and the people who will call it home.</p><Link href="/about" className="text-link">Discover our approach <span>↗</span></Link></div><div className="intro-image" role="img" aria-label="Warm earthen home opening onto a green courtyard"><span>Earth · Light · Craft</span></div></div></section>
    <section className="approach"><div className="wrap"><div className="approach-heading"><span className="eyebrow">From first thought to feeling at home</span><h2>Considered at every step.</h2><p>One clear process. A design shaped around your place, your priorities and your everyday rituals.</p></div><div className="approach-steps"><article><b>01</b><h3>Listen & learn</h3><p>We understand your site, brief, budget and the way you want to live.</p></article><article><b>02</b><h3>Imagine & refine</h3><p>Layouts, materials and 3D views bring a shared vision into focus.</p></article><article><b>03</b><h3>Build with care</h3><p>Detailed drawings and on-site guidance carry the design through.</p></article><article><b>04</b><h3>Settle in</h3><p>We finish the details so your space feels complete from day one.</p></article></div></div></section>
  </>;
}
function AboutPage({ p }) {
  const story = p.blocks.find(b => b.h === 'Our story');
  const philosophy = p.blocks.find(b => b.h === 'Our philosophy');
  const process = p.blocks.find(b => b.h === 'How we work');
  const traditions = p.blocks.find(b => b.h === 'Rooted in Indian building traditions');
  const team = p.blocks.find(b => b.h === 'The people behind the studio');
  const principles = p.blocks.find(b => b.h === 'Principles we never compromise on');
  const materials = p.blocks.find(b => b.h === 'Materials we build with');
  const sustainability = p.blocks.find(b => b.h === 'Our commitment to sustainability');
  const stats = p.blocks.find(b => b.t === 'stats');
  const cta = p.blocks.find(b => b.t === 'cta');
  return <><Header active="about" /><main className="about-page">
    <section className="about-mast"><div className="wrap about-mast-grid"><div className="about-mast-copy"><span className="eyebrow">{p.eyebrow}</span><h1>{p.h}</h1><p>{p.p}</p><Link className="about-line-link" href="/contact">Meet your design partner <span>↗</span></Link></div><div className="about-mast-image"><span>Built from the ground up<br />with a sense of place.</span></div><div className="about-mast-note"><span>01 / 05</span><span>Our studio, in a few words</span></div></div></section>
    <section className="about-story"><div className="wrap about-story-grid"><div className="about-chapter"><span>01</span><small>Who we are</small></div><div><span className="eyebrow">A little about us</span><h2>{story.h}</h2></div><div className="about-story-copy">{story.ps.map((x,i)=><p key={i}>{x}</p>)}</div></div></section>
    <section className="about-numbers"><div className="wrap about-numbers-grid">{stats.items.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>
    <section className="about-philosophy"><div className="about-philosophy-art"><div className="element-wheel"><span>EARTH</span><span>WATER</span><span>AIR</span><span>LIGHT</span><b>5<br/>ELEMENTS</b></div></div><div className="about-philosophy-copy"><span className="eyebrow">The thinking behind the work</span><h2>{philosophy.h}</h2>{philosophy.ps.map((x,i)=><p key={i}>{x}</p>)}<div className="about-principles">{principles.items.map(([t],i)=><div key={t}><span>0{i+1}</span>{t}</div>)}</div></div></section>
    <section className="about-process"><div className="wrap"><div className="about-section-intro"><span className="eyebrow">Good work comes from good collaboration</span><h2>{process.h}</h2><p>Clear communication, careful decisions and a steady hand from the first meeting to handover.</p></div><div className="about-process-grid">{process.items.map(([t,d],i)=><article key={t}><span className="process-no">0{i+1}</span><div className="process-rule"/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="about-heritage"><div className="wrap about-heritage-grid"><div className="heritage-image"><span>Old wisdom. A living architecture.</span></div><div><span className="eyebrow">Place before style</span><h2>{traditions.h}</h2>{traditions.ps.map((x,i)=><p key={i}>{x}</p>)}<span className="heritage-stamp">ROOTED<br/>IN INDIA</span></div></div></section>
    <section className="about-team"><div className="wrap"><div className="about-section-intro"><span className="eyebrow">Many hands, one shared vision</span><h2>{team.h}</h2><p>Architecture is a team practice. Our work brings different disciplines together around one considered outcome.</p></div><div className="about-team-grid">{team.items.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="about-materials"><div className="wrap"><div className="about-materials-heading"><div><span className="eyebrow">Made to weather beautifully</span><h2>{materials.h}</h2></div><p>We choose materials for their feel, their local story and the way they grow more beautiful with use.</p></div><div className="material-list">{materials.items.map(([t,d],i)=><article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><b aria-hidden="true">↗</b></article>)}</div></div></section>
    <section className="about-sustainability"><div className="wrap about-sustainability-grid"><div><span className="eyebrow">A lighter footprint</span><h2>{sustainability.h}</h2></div><div>{sustainability.ps.map((x,i)=><p key={i}>{x}</p>)}<Link href="/services" className="about-line-link">Explore our services <span>↗</span></Link></div></div></section>
    <section className="about-end"><div className="wrap"><span className="eyebrow">Your story, your place</span><h2>{cta.h}</h2><p>{cta.p}</p><Link href={cta.cta[1]} className="btn">{cta.cta[0]}</Link></div></section>
  </main><Footer /></>;
}
function ServicesPage({ p }) {
  const get = (title) => p.blocks.find(b => b.h === title);
  const offerings = get('Design services'), process = get('Our process'), packages = get('Engagement packages');
  const sustainability = get('Sustainable by default'), faqs = get('Common questions'), cta = get('Have a project in mind?');
  return <><Header active="services" /><main className="services-page practice-page">
    <section className="practice-opening"><div className="wrap practice-opening-grid"><div className="practice-opening-copy"><span className="practice-eyebrow">SERVICES / A PRACTICE ROOTED IN PLACE</span><h1>Old wisdom.<br/><em>New life.</em></h1><p>We design contemporary buildings with the intelligence of traditional Indian architecture—naturally comfortable, deeply considered and made to last.</p><Link className="practice-link" href="/contact">Talk through your project <b>↗</b></Link><div className="practice-opening-caption">Architecture · Restoration · Sustainable design</div></div><div className="practice-opening-art"><span>01 — THE COURTYARD AS A LIVING ROOM</span><i>Built for shade.<br/>Open to the breeze.</i></div></div></section>
    <section className="practice-belief"><div className="wrap"><span>OUR POINT OF VIEW</span><h2>Good architecture listens<br/>before it speaks.</h2><p>Every place has its own climate, materials and inherited wisdom. We begin there, bringing old building knowledge into present-day life with care, clarity and craft.</p><div className="practice-elements"><span><b>01</b> Land</span><span><b>02</b> Climate</span><span><b>03</b> Craft</span><span><b>04</b> Daily life</span></div></div></section>
    <section className="practice-services" id="practice-services"><div className="wrap"><div className="practice-section-head"><span>01 / WHAT WE DO</span><h2>One studio.<br/><em>Many ways to begin.</em></h2><p>From a new courtyard home to the careful repair of an old one, each service responds to your place and your brief.</p></div><div className="practice-service-list">{offerings.items.map(([t,d],i)=><article key={t}><span className="practice-service-no">0{i+1}</span><div className="practice-service-title"><h3>{t}</h3><span>DESIGN / ADVISORY</span></div><p>{d}</p><Link href="/contact" aria-label={'Ask about '+t}>↗</Link></article>)}</div></div></section>
    <section className="practice-climate"><div className="practice-climate-art"><span>SHADE / AIR / THERMAL MASS</span></div><div className="practice-climate-copy"><span className="practice-eyebrow">02 / SUSTAINABLE BY DESIGN</span><h2>{sustainability.h}</h2>{sustainability.ps.map((x,i)=><p key={i}>{x}</p>)}<div className="practice-materials"><span>EARTH</span><span>LIME</span><span>STONE</span><span>TIMBER</span></div></div></section>
    <section className="practice-process"><div className="wrap"><div className="practice-process-head"><span>03 / HOW WE WORK</span><h2>A thoughtful process,<br/>from first sketch to handover.</h2></div><div className="practice-process-grid">{process.items.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t.replace(/^\d+\s*/, '')}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="practice-partnership"><div className="wrap"><div><span>04 / THE RIGHT LEVEL OF SUPPORT</span><h2>Made to fit your project.</h2><p>Choose the studio relationship that suits your team, timeline and ambitions.</p></div><div className="practice-package-list">{packages.items.map(([t,d],i)=><article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><Link href="/contact">Enquire ↗</Link></article>)}</div></div></section>
    <section className="practice-faq"><div className="wrap practice-faq-grid"><div><span>GOOD TO KNOW</span><h2>Before we begin.</h2></div><div>{faqs.items.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></section>
    <section className="practice-end"><div className="wrap"><span>HAVE LAND, A HOME OR AN IDEA?</span><h2>{cta.h}</h2><p>{cta.p}</p><Link href={cta.cta[1]}>{cta.cta[0]} <b>↗</b></Link></div></section>
  </main><Footer /></>;
}
function ProjectsPage({ p }) {
  const work = p.blocks.find(b => b.t === 'projects');
  const stats = p.blocks.find(b => b.t === 'stats');
  const featured = work.items.slice(0, 3), archive = work.items.slice(3);
  const images = ['/hero-earthy-home.png','/services-haveli.png','/about-studio.png'];
  return <><Header active="projects" /><main className="projects-page">
    <section className="work-hero"><div className="wrap"><div className="work-hero-top"><span>PORTFOLIO / 2024—26</span><span>Grihum Earthy Studio</span></div><div className="work-hero-title"><span className="eyebrow">Selected places & projects</span><h1>Made for<br/><em>their place.</em></h1><p>Architecture shaped by its landscape, its people and the everyday rituals that make a place feel like home.</p></div><div className="work-mosaic"><div className="work-mosaic-main" role="img" aria-label="Contemporary earthen courtyard home" style={{backgroundImage:`url(${images[0]})`}}><span>01 / RESIDENCE</span></div><div className="work-mosaic-side"><div role="img" aria-label="Traditional Indian courtyard architecture" style={{backgroundImage:`url(${images[1]})`}}><span>02 / HERITAGE</span></div><div role="img" aria-label="Architecture studio design process" style={{backgroundImage:`url(${images[2]})`}}><span>03 / MATERIAL STUDY</span></div></div></div><div className="work-hero-foot"><span>Selected work — Architecture / Interiors / Landscape</span><a href="#featured">Scroll to explore <b>↓</b></a></div></div></section>
    <section className="work-stats"><div className="wrap">{stats.items.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>
    <section className="work-featured" id="featured"><div className="wrap"><div className="work-section-title"><span>01 — FEATURED WORK</span><h2>Each project<br/>starts with a place.</h2></div>{featured.map(([t,k,d],i)=><article className={'work-feature ' + (i%2?'reverse':'')} key={t}><div className="work-feature-image" role="img" aria-label={t} style={{backgroundImage:`url(${images[i]})`}}><span>0{i+1}</span></div><div className="work-feature-copy"><span className="work-kind">{k}</span><h3>{t}</h3><p>{d}</p><div className="work-feature-line"><span>Natural materials</span><span>Climate-led design</span></div></div></article>)}</div></section>
    <section className="work-archive"><div className="wrap"><div className="work-archive-heading"><div><span>02 — THE PROJECT INDEX</span><h2>More work, in brief.</h2></div><p>Different briefs and settings, connected by careful design and a lasting relationship with place.</p></div><div className="work-archive-list">{archive.map(([t,k,d],i)=><article key={t}><span className="archive-no">{String(i+4).padStart(2,'0')}</span><div className="archive-thumb" role="img" aria-label={t} style={{backgroundImage:`url(${images[(i+1)%images.length]})`}}/><div className="archive-title"><span>{k}</span><h3>{t}</h3></div><p>{d}</p><span className="archive-arrow">↗</span></article>)}</div></div></section>
    <section className="work-end"><div className="wrap"><span>HAVE A PLACE IN MIND?</span><h2>Let’s make something that belongs.</h2><Link href="/contact">Start a conversation <b>↗</b></Link></div></section>
  </main><Footer /></>;
}
function ContactPage({ p }) {
  const details = p.blocks.find(b => b.h === 'Studio details');
  const faqs = p.blocks.find(b => b.h === 'Frequently asked');
  const site = data.site;
  return <><Header active="contact" /><main className="contact-page">
    <section className="contact-opening"><div className="wrap contact-opening-grid"><div><span className="contact-kicker">A thoughtful beginning</span><h1>Tell us about<br/><em>your place.</em></h1><p>{p.p}</p><a className="contact-opening-link" href="#project-form">Share your brief <b>↓</b></a></div><div className="contact-opening-aside"><div className="contact-opening-photo"><span>Good architecture begins by listening to the place.</span></div><div className="contact-opening-aside-note"><span>G / STUDIO NOTE</span><p>Tell us what you hope to make, restore or reimagine.</p></div></div><div className="contact-rule"><span>CONTACT / 05</span><span>Architecture · Interiors · Landscape</span></div></div></section>
    <section className="contact-main" id="project-form"><div className="wrap contact-main-grid"><aside className="contact-aside"><span className="contact-kicker">The studio</span><h2>We’d love to<br/>hear what you’re<br/>imagining.</h2><p>Share a few first details. Our team will be in touch to understand your project and suggest a clear next step.</p><div className="contact-detail-list">{details.items.filter(([label])=>label!=='Visit').map(([label,value],i)=><div key={label}><span>0{i+1}</span><small>{label}</small>{label==='Email'?<a href={'mailto:'+site.email}>{site.email}</a>:label==='Call'?<><a href={'tel:'+site.phone}>{site.phone}</a><a className="contact-whatsapp" href={'https://wa.me/'+site.phone.replace(/\D/g,'')} target="_blank" rel="noreferrer">Message us on WhatsApp ↗</a></>:<b>{value}</b>}</div>)}</div><div className="contact-response"><span className="response-dot"/>Typically replies within one working day</div></aside><div className="contact-form-panel"><div className="form-heading"><span>PROJECT ENQUIRY / 01</span><h2>Let’s start with the basics.</h2><p>Fields marked with * are required.</p></div><div className="contact-steps"><span className="active"><b>01</b> Your brief</span><i/><span><b>02</b> Our conversation</span><i/><span><b>03</b> A clear next step</span></div><ContactEnquiryForm email={site.email} phone={site.phone}/></div></div></section>
    <section className="contact-faq"><div className="wrap contact-faq-grid"><div><span className="contact-kicker">A few first questions</span><h2>Good to know.</h2><p>Not sure what to include? These answers may help you take the first step.</p></div><div>{faqs.items.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></section>
    <section className="contact-bottom"><div className="wrap"><span>Prefer a direct note?</span><a href={'mailto:'+site.email}>{site.email} <b>↗</b></a></div></section>
  </main><Footer /></>;
}
export default function Page({ k }) {
  const p = data.pages[k];
  if (k === 'about') return <AboutPage p={p} />;
  if (k === 'services') return <ServicesPage p={p} />;
  if (k === 'projects') return <ProjectsPage p={p} />;
  if (k === 'contact') return <ContactPage p={p} />;
  return (<><Header active={k} /><main><section className={'hero' + (k === 'home' ? ' hero-home' : '')}><div className="wrap"><span className="eyebrow">{p.eyebrow}</span><h1>{p.h}</h1><p>{p.p}</p><Link className="btn" href={p.cta[1]}>{p.cta[0]}</Link></div>{k === 'home' && <span className="hero-caption">A slower, softer way to come home <i>↓</i></span>}</section>{k === 'home' && <HomeStory />}<Blocks blocks={p.blocks} /></main><Footer /></>);
}
