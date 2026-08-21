import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, BarChart3, Bot, BriefcaseBusiness, Mail, MapPin, MousePointer2, Sparkles, UsersRound, WandSparkles } from "lucide-react";

const metrics = [
  { value: "3,000+", label: "Creators managed", note: "TikTok · Shopee · Facebook" },
  { value: "500+", label: "Campaign videos", note: "Coordinated in 45 days" },
  { value: "600+", label: "Product seedings", note: "Across multiple campaigns" },
  { value: "17x+", label: "Livestream ROI", note: "Performance optimized" },
];

const skills = [
  ["Affiliate & Influencer", "KOL/KOC sourcing, booking, negotiation, campaign management"],
  ["Performance Analytics", "Excel, Power BI, GMV & conversion analysis, reporting"],
  ["Commercial & Operations", "Partnerships, stakeholder coordination, budget monitoring"],
  ["AI & Automation", "Gemini, Claude, Midjourney, AI-powered content workflows"],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Mai Duy Anh home"><span className="brand-mark">DA</span><span><strong>Mai Duy Anh</strong><small>Affiliate Marketing</small></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#work">Work</a><a href="#skills">Skills</a></div>
        <a className="nav-cta" href="mailto:duyanhsdte@gmail.com">Let&apos;s talk <ArrowUpRight size={15}/></a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> Affiliate · Creator · Performance</div>
          <h1>I turn creator<br/><span>partnerships</span> into<br/>measurable growth.</h1>
          <p className="lead">Affiliate Marketing professional with 1+ year of FMCG experience, focused on creator acquisition, campaign execution and performance optimization across TikTok Shop and Shopee.</p>
          <div className="hero-actions"><a className="primary" href="#work">Explore my work <ArrowDownRight size={18}/></a><a className="secondary" href="mailto:duyanhsdte@gmail.com"><Mail size={17}/> Contact me</a></div>
          <div className="microline"><span className="dot"/> Ho Chi Minh City, Vietnam <span>·</span> Open to opportunities</div>
        </div>
        <div className="hero-visual" aria-label="Performance overview">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="core-card"><div className="core-top"><span>PROFILE / 2026</span><span className="live-dot"/></div><div className="monogram">DA</div><div className="core-bottom"><strong>MAI DUY ANH</strong><span>Affiliate Marketing × Data</span></div></div>
          <div className="float-card card-a"><span>Revenue growth</span><strong>2x</strong><small>VitaDairy H1.2026</small></div>
          <div className="float-card card-b"><span>ROI</span><strong>17.5x</strong><small>Affiliate sales growth</small></div>
          <div className="float-card card-c"><UsersRound size={18}/><strong>3K+</strong><small>Creator community</small></div>
          <div className="grid-glow"/>
        </div>
      </section>

      <section className="brand-strip shell" aria-label="Brands and companies">
        <span>Experience across</span>
        <div className="logo-box"><Image src="/brands/eCentric.png" alt="eCentric" width={150} height={70}/></div>
        <div className="logo-box"><Image src="/brands/VitaDairy.png" alt="VitaDairy" width={150} height={70}/></div>
        <div className="logo-box"><Image src="/brands/Oggi.png" alt="Oggi" width={120} height={70}/></div>
        <div className="logo-box"><Image src="/brands/Logo-NextPay.png" alt="NextPay" width={160} height={70}/></div>
      </section>

      <section id="about" className="section shell split">
        <div><p className="section-kicker">01 / ABOUT</p><h2>Strategy in front.<br/><span>Data underneath.</span></h2></div>
        <div className="about-copy"><p>I work at the intersection of affiliate marketing, creator relationships and campaign performance. My experience spans creator sourcing, booking, product seeding, livestream optimization, reporting and cross-functional coordination.</p><p>The goal is simple: build creator systems that are easier to operate, easier to measure and stronger at driving sales.</p><div className="about-tags"><span><MapPin size={14}/> Ho Chi Minh City</span><span><BriefcaseBusiness size={14}/> FMCG / E-commerce</span><span><BarChart3 size={14}/> Data-driven</span></div></div>
      </section>

      <section className="metrics shell">{metrics.map((item) => <article className="metric" key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></article>)}</section>

      <section id="experience" className="section shell">
        <div className="section-head"><div><p className="section-kicker">02 / EXPERIENCE</p><h2>Built in the <span>real world.</span></h2></div><p>From creator operations to performance optimization, every role sharpened a different part of the growth engine.</p></div>
        <div className="timeline">
          <article className="role featured-role"><div className="role-date">AUG 2025 — JUL 2026</div><div className="role-company"><div className="company-logo"><Image src="/brands/eCentric.png" alt="eCentric" width={130} height={45}/></div></div><div className="role-content"><h3>Senior Affiliate Executive</h3><p>Managed 3,000+ KOLs/KOCs across TikTok, Shopee and Facebook; coordinated 500+ campaign videos, 600+ creator seedings and optimized livestream performance to 17x+ ROI.</p><div className="role-tags"><span>Creator Acquisition</span><span>Campaign Execution</span><span>Livestream</span><span>Reporting</span></div></div></article>
          <article className="role"><div className="role-date">FEB 2025 — JUL 2025</div><div className="role-company"><div className="company-logo"><Image src="/brands/Logo-NextPay.png" alt="NextPay" width={145} height={50}/></div></div><div className="role-content"><h3>Trade Marketing</h3><p>Managed POSM execution and marketing operations, built and operated a TikTok channel from scratch, and researched TikTok trends and algorithms to improve organic reach and content performance.</p><div className="role-tags"><span>Trade Marketing</span><span>TikTok</span><span>Content</span><span>Operations</span></div></div></article>
        </div>
      </section>

      <section id="work" className="section shell work-section">
        <div className="section-head"><div><p className="section-kicker">03 / SELECTED WORK</p><h2>Proof, not <span>promises.</span></h2></div><p>Two projects from VitaDairy that show how creator strategy connects with measurable commercial outcomes.</p></div>
        <div className="projects">
          <article className="project project-growth"><div className="project-top"><span className="project-number">01</span><Image src="/brands/VitaDairy.png" alt="VitaDairy" width={150} height={66}/></div><div className="project-body"><p className="project-kicker">Affiliate Sales Growth · H1.2026</p><h3>Scaling affiliate revenue from <span>VND 3B to VND 6B.</span></h3><p>Project Lead & Executive. Built and scaled a 3,000+ creator community through a dedicated website, AI-powered content, weekly minigames and commission programs.</p></div><div className="project-stats"><div><strong>2x</strong><span>Revenue Growth</span></div><div><strong>17.5x</strong><span>ROI</span></div><div><strong>3,000+</strong><span>Creators</span></div></div><div className="project-orb"><WandSparkles size={34}/></div></article>
          <article className="project project-oggi"><div className="project-top"><span className="project-number">02</span><Image src="/brands/Oggi.png" alt="Oggi" width={94} height={70}/></div><div className="project-body"><p className="project-kicker">Product Launch · Apr — Jun 2026</p><h3>Turning creator reach into <span>first-month sales.</span></h3><p>Generated 2.7M+ impressions through strategic KOL collaborations and drove 2,300+ product sales within the first month through affiliate and creator partnerships.</p></div><div className="project-stats"><div><strong>2.7M+</strong><span>Impressions</span></div><div><strong>2,300+</strong><span>Sales</span></div><div><strong>7.8%</strong><span>CTR</span></div><div><strong>3.2%</strong><span>CR</span></div></div><div className="project-orb"><MousePointer2 size={34}/></div></article>
        </div>
      </section>

      <section id="skills" className="section shell skills-section"><div className="skills-intro"><p className="section-kicker">04 / CAPABILITIES</p><h2>A marketer who likes <span>systems.</span></h2><p>Campaign operations are stronger when creative judgment, commercial thinking and data all sit in the same workflow.</p></div><div className="skill-grid">{skills.map(([title, desc], i) => <article className="skill-card" key={title}><span>0{i+1}</span>{i===0?<UsersRound/>:i===1?<BarChart3/>:i===2?<BriefcaseBusiness/>:<Bot/>}<h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <footer className="footer shell"><div><p className="section-kicker">LET&apos;S BUILD SOMETHING THAT PERFORMS.</p><h2>Have a campaign,<br/>brand or <span>idea?</span></h2></div><div className="footer-actions"><a className="primary big" href="mailto:duyanhsdte@gmail.com">duyanhsdte@gmail.com <ArrowUpRight/></a><a className="text-link" href="https://linkedin.com/in/anhmd2003/" target="_blank">LinkedIn <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© 2026 Mai Duy Anh</span><span>Affiliate Marketing · Creator Management · Data Analytics</span></div></footer>
    </main>
  );
}