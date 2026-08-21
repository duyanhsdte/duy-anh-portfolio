import { ArrowUpRight, BarChart3, Linkedin, Mail, Users, Zap } from "lucide-react";

const metrics = [
  ["3,000+", "Creators managed"],
  ["500+", "Campaign videos / 45 days"],
  ["600+", "Creator product seedings"],
  ["17x+", "Livestream ROI"],
];

const skills = {
  "Affiliate & Influencer": ["KOL/KOC Sourcing & Management", "Creator Booking & Negotiation", "Affiliate Campaign Management", "Product Seeding"],
  "Data & Performance": ["Excel – Advanced Formulas", "Power BI", "GMV & Conversion Analysis", "Campaign Performance Reporting", "Budget Monitoring & Optimization"],
  "Commercial & Operations": ["KOL/KOC Relationship Management", "Partnership Development", "Commercial Negotiation", "Cross-functional Coordination", "Problem Solving"],
  "AI & Automation": ["Gemini", "Claude", "Midjourney", "AI-powered Content & Workflow Automation"],
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">DA.</a>
        <div className="navlinks">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#work">Work</a><a href="#skills">Skills</a>
        </div>
        <a className="pill small" href="#contact">Contact</a>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow"><span className="dot" /> AFFILIATE MARKETING · CREATOR MANAGEMENT · DATA</div>
        <h1>MAI DUY <span>ANH</span></h1>
        <p className="lead">I build creator networks, execute affiliate campaigns and turn performance data into measurable growth.</p>
        <div className="actions"><a className="pill" href="#work">View my work <ArrowUpRight size={17}/></a><a className="textlink" href="mailto:duyanhsdte@gmail.com">duyanhsdte@gmail.com</a></div>
        <div className="metricGrid">{metrics.map(([n,l]) => <div className="metric" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
      </section>

      <section id="about" className="section shell split">
        <div><div className="sectionNo">01 / ABOUT</div><h2>Growth at the intersection of creators, commerce & data.</h2></div>
        <div className="copy"><p>Affiliate Marketing professional with 1+ year of experience in FMCG, specializing in KOL/KOC management, Creator acquisition, campaign execution and performance optimization across TikTok Shop and Shopee.</p><p>My work combines hands-on creator operations with commercial thinking, reporting and AI-powered workflow automation.</p></div>
      </section>

      <section id="experience" className="section shell">
        <div className="sectionNo">02 / EXPERIENCE</div><h2>Experience</h2>
        <div className="timeline">
          <article><div><span>Aug 2025 — Jul 2026</span><h3>Senior Affiliate Executive</h3><p>eCentric</p></div><ul><li>Managed 3,000+ KOLs/KOCs across TikTok, Shopee and Facebook.</li><li>Coordinated 500+ campaign videos within 45 days during peak sales periods.</li><li>Managed product seeding and fulfillment for 600+ Creators.</li><li>Optimized livestream performance to achieve 17x+ ROI and managed partnerships with 300 loyal Creators.</li></ul></article>
          <article><div><span>Feb 2025 — Jul 2025</span><h3>Trade Marketing</h3><p>NextPay Holding PTE</p></div><ul><li>Managed POSM execution and marketing operations across campaign activities.</li><li>Built and operated a TikTok channel from scratch.</li><li>Researched TikTok trends and algorithms to improve organic reach and content performance.</li></ul></article>
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="sectionNo">03 / SELECTED WORK</div><h2>Case studies with numbers.</h2>
        <div className="projects">
          <article className="project featured"><div className="projectIcon"><BarChart3/></div><div><span>VitaDairy · H1 2026</span><h3>Affiliate Sales Growth</h3><p>Project Lead & Executive</p></div><div className="projectStats"><strong>2x</strong><span>Affiliate Revenue Growth</span><strong>3B → 6B</strong><span>VND across TikTok Shop & Shopee</span><strong>17.5x</strong><span>ROI</span></div><p>Built and scaled a community of 3,000+ Creators through a dedicated website, AI-powered content, weekly minigames and commission programs.</p></article>
          <article className="project"><div className="projectIcon"><Zap/></div><div><span>VitaDairy · Apr — Jun 2026</span><h3>Oggi Product Launch</h3><p>Project Lead & Executive</p></div><div className="projectStats"><strong>2.7M+</strong><span>Impressions</span><strong>2,300+</strong><span>Product Sales</span><strong>7.8%</strong><span>CTR · 3.2% CR</span></div><p>Strategic collaborations with leading Mother & Baby KOLs to support awareness and conversion during launch.</p></article>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="sectionNo">04 / CAPABILITIES</div><h2>Skills & tools</h2>
        <div className="skills">{Object.entries(skills).map(([group,items]) => <article key={group}><h3>{group}</h3>{items.map(x => <span key={x}>{x}</span>)}</article>)}</div>
      </section>

      <section className="section shell education"><div><div className="sectionNo">05 / EDUCATION</div><h2>Bachelor of E-Commerce</h2><p>University of Economics and Finance – Ho Chi Minh (UEF) · Graduated 2025</p></div><Users size={72}/></section>

      <footer id="contact" className="footer shell"><div><div className="sectionNo">LET'S CONNECT</div><h2>Have an opportunity<br/>or project in mind?</h2></div><div className="contact"><a href="mailto:duyanhsdte@gmail.com"><Mail/>duyanhsdte@gmail.com</a><a href="https://linkedin.com/in/anhmd2003/" target="_blank"><Linkedin/>LinkedIn</a></div></footer>
    </main>
  );
}
