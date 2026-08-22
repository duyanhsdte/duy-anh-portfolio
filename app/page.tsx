"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, BarChart3, Bot, BriefcaseBusiness, Mail, MapPin, MousePointer2, Sparkles, UsersRound, WandSparkles } from "lucide-react";

const copy = {
  en: {
    nav: ["About", "Experience", "Work", "Skills"],
    eyebrow: "Affiliate · Creator · Performance",
    hero1: "I turn creator",
    hero2: "partnerships",
    hero3: "into measurable growth.",
    lead: "Affiliate Marketing professional with 1+ year of FMCG experience, focused on creator acquisition, campaign execution and performance optimization across TikTok Shop and Shopee.",
    explore: "Explore my work",
    contact: "Contact me",
    location: "Ho Chi Minh City, Vietnam",
    open: "Open to opportunities",
    profile: "PROFILE / 2026",
    revenue: "Revenue growth",
    roi: "Affiliate sales growth",
    community: "Creator community",
    brands: "Experience across",
    aboutKicker: "01 / ABOUT",
    aboutTitle1: "Strategy in front.",
    aboutTitle2: "Data underneath.",
    about1: "I work at the intersection of affiliate marketing, creator relationships and campaign performance. My experience spans creator sourcing, booking, product seeding, livestream optimization, reporting and cross-functional coordination.",
    about2: "The goal is simple: build creator systems that are easier to operate, easier to measure and stronger at driving sales.",
    metrics: [
      ["3,000+", "Creators managed", "TikTok · Shopee · Facebook"],
      ["500+", "Campaign videos", "Coordinated in 45 days"],
      ["600+", "Product seedings", "Across multiple campaigns"],
      ["17x+", "Livestream ROI", "Performance optimized"],
    ],
    expKicker: "02 / EXPERIENCE",
    expTitle1: "Built in the ", expTitle2: "real world.",
    expIntro: "From creator operations to performance optimization, every role sharpened a different part of the growth engine.",
    ecentric: "Managed 3,000+ KOLs/KOCs across TikTok, Shopee and Facebook; coordinated 500+ campaign videos, 600+ creator seedings and optimized livestream performance to 17x+ ROI.",
    nextpay: "Managed POSM execution and marketing operations, built and operated a TikTok channel from scratch, and researched TikTok trends and algorithms to improve organic reach and content performance.",
    workKicker: "03 / SELECTED WORK",
    workTitle1: "Proof, not ", workTitle2: "promises.",
    workIntro: "Two projects from VitaDairy that show how creator strategy connects with measurable commercial outcomes.",
    p1k: "Affiliate Sales Growth · H1.2026",
    p1t1: "Scaling affiliate revenue from ", p1t2: "VND 3B to VND 6B.",
    p1d: "Project Lead & Executive. Built and scaled a 3,000+ creator community through a dedicated website, AI-powered content, weekly minigames and commission programs.",
    p2k: "Product Launch · Apr — Jun 2026",
    p2t1: "Turning creator reach into ", p2t2: "first-month sales.",
    p2d: "Generated 2.7M+ impressions through strategic KOL collaborations and drove 2,300+ product sales within the first month through affiliate and creator partnerships.",
    skillsKicker: "04 / CAPABILITIES",
    skillsTitle1: "A marketer who likes ", skillsTitle2: "systems.",
    skillsIntro: "Campaign operations are stronger when creative judgment, commercial thinking and data all sit in the same workflow.",
    skills: [
      ["Affiliate & Influencer", "KOL/KOC sourcing, booking, negotiation, campaign management"],
      ["Performance Analytics", "Excel, Power BI, GMV & conversion analysis, reporting"],
      ["Commercial & Operations", "Partnerships, stakeholder coordination, budget monitoring"],
      ["AI & Automation", "Gemini, Claude, Midjourney, AI-powered content workflows"],
    ],
    footerK: "LET'S BUILD SOMETHING THAT PERFORMS.",
    footer1: "Have a campaign,", footer2: "brand or ", footer3: "idea?",
  },
  vi: {
    nav: ["Giới thiệu", "Kinh nghiệm", "Dự án", "Kỹ năng"],
    eyebrow: "Affiliate · Creator · Hiệu suất",
    hero1: "Tôi biến những",
    hero2: "hợp tác creator",
    hero3: "thành tăng trưởng đo lường được.",
    lead: "Chuyên viên Affiliate Marketing với hơn 1 năm kinh nghiệm trong FMCG, tập trung vào tuyển chọn creator, triển khai chiến dịch và tối ưu hiệu suất trên TikTok Shop và Shopee.",
    explore: "Xem dự án",
    contact: "Liên hệ tôi",
    location: "TP. Hồ Chí Minh, Việt Nam",
    open: "Sẵn sàng cho cơ hội mới",
    profile: "HỒ SƠ / 2026",
    revenue: "Tăng trưởng doanh thu",
    roi: "Tăng trưởng Affiliate",
    community: "Cộng đồng Creator",
    brands: "Kinh nghiệm với",
    aboutKicker: "01 / GIỚI THIỆU",
    aboutTitle1: "Chiến lược ở phía trước.",
    aboutTitle2: "Dữ liệu ở phía sau.",
    about1: "Tôi làm việc tại giao điểm của Affiliate Marketing, quan hệ Creator và hiệu suất chiến dịch. Kinh nghiệm của tôi bao gồm tìm kiếm creator, booking, seeding sản phẩm, tối ưu livestream, báo cáo và phối hợp đa phòng ban.",
    about2: "Mục tiêu rất rõ ràng: xây dựng hệ thống creator dễ vận hành hơn, dễ đo lường hơn và tạo doanh số tốt hơn.",
    metrics: [
      ["3,000+", "Creator quản lý", "TikTok · Shopee · Facebook"],
      ["500+", "Video chiến dịch", "Điều phối trong 45 ngày"],
      ["600+", "Lượt seeding sản phẩm", "Qua nhiều chiến dịch"],
      ["17x+", "ROI Livestream", "Tối ưu theo hiệu suất"],
    ],
    expKicker: "02 / KINH NGHIỆM",
    expTitle1: "Kinh nghiệm từ ", expTitle2: "thực chiến.",
    expIntro: "Từ vận hành creator đến tối ưu hiệu suất, mỗi vai trò đều giúp tôi hoàn thiện một phần khác nhau của hệ thống tăng trưởng.",
    ecentric: "Quản lý hơn 3.000 KOL/KOC trên TikTok, Shopee và Facebook; điều phối 500+ video chiến dịch, 600+ lượt seeding và tối ưu hiệu suất livestream lên 17x+ ROI.",
    nextpay: "Phụ trách triển khai POSM và vận hành marketing, xây dựng kênh TikTok từ đầu, đồng thời nghiên cứu xu hướng và thuật toán TikTok để cải thiện organic reach và hiệu suất nội dung.",
    workKicker: "03 / DỰ ÁN TIÊU BIỂU",
    workTitle1: "Kết quả thay cho ", workTitle2: "lời hứa.",
    workIntro: "Hai dự án tại VitaDairy thể hiện cách chiến lược creator kết nối trực tiếp với kết quả kinh doanh có thể đo lường.",
    p1k: "Tăng trưởng Affiliate Sales · H1.2026",
    p1t1: "Đưa doanh thu Affiliate từ ", p1t2: "3 tỷ lên 6 tỷ VND.",
    p1d: "Project Lead & Executive. Xây dựng và mở rộng cộng đồng 3.000+ creator thông qua website riêng, nội dung ứng dụng AI, minigame hằng tuần và chương trình hoa hồng.",
    p2k: "Ra mắt sản phẩm · Apr — Jun 2026",
    p2t1: "Biến độ phủ creator thành ", p2t2: "doanh số tháng đầu.",
    p2d: "Tạo hơn 2,7 triệu lượt hiển thị qua hợp tác KOL chiến lược và đạt hơn 2.300 sản phẩm bán ra trong tháng đầu thông qua Affiliate và Creator Partnerships.",
    skillsKicker: "04 / NĂNG LỰC",
    skillsTitle1: "Một marketer thích ", skillsTitle2: "hệ thống.",
    skillsIntro: "Vận hành chiến dịch hiệu quả hơn khi tư duy sáng tạo, thương mại và dữ liệu cùng nằm trong một quy trình.",
    skills: [
      ["Affiliate & Influencer", "Tìm KOL/KOC, booking, đàm phán, quản lý chiến dịch"],
      ["Phân tích hiệu suất", "Excel, Power BI, phân tích GMV & conversion, reporting"],
      ["Commercial & Operations", "Partnership, phối hợp stakeholder, theo dõi ngân sách"],
      ["AI & Automation", "Gemini, Claude, Midjourney, quy trình nội dung ứng dụng AI"],
    ],
    footerK: "CÙNG XÂY MỘT THỨ THẬT SỰ TẠO KẾT QUẢ.",
    footer1: "Bạn có campaign,", footer2: "brand hoặc một ", footer3: "ý tưởng?",
  }
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "vi">("en");
  const t = copy[lang];

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Mai Duy Anh home"><span className="brand-mark"><img src="/profile-kpi-small.jpg" alt="Mai Duy Anh" className="brand-avatar" /></span><span><strong>Mai Duy Anh</strong><small>Affiliate Marketing</small></span></a>
        <div className="nav-links"><a href="#about">{t.nav[0]}</a><a href="#experience">{t.nav[1]}</a><a href="#work">{t.nav[2]}</a><a href="#skills">{t.nav[3]}</a></div>
        <div className="lang-switch" role="group" aria-label="Language switcher">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <span>/</span>
          <button className={lang === "vi" ? "active" : ""} onClick={() => setLang("vi")}>VI</button>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> {t.eyebrow}</div>
          <h1>{t.hero1}<br/><span>{t.hero2}</span><br/>{t.hero3}</h1>
          <p className="lead">{t.lead}</p>
          <div className="hero-actions"><a className="primary" href="#work">{t.explore} <ArrowDownRight size={18}/></a><a className="secondary" href="mailto:duyanhsdte@gmail.com"><Mail size={17}/> {t.contact}</a></div>
          <div className="microline"><span className="dot"/> {t.location} <span>·</span> {t.open}</div>
        </div>
        <div className="hero-visual" aria-label="Performance overview">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="core-card"><div className="core-top"><span>{t.profile}</span><span className="live-dot"/></div><div className="monogram"><img src="/profile-kpi-small.jpg" alt="Mai Duy Anh performance profile" className="profile-image" /></div><div className="core-bottom"><strong>MAI DUY ANH</strong><span>Affiliate Marketing × Data</span></div></div>
          <div className="float-card card-a"><span>{t.revenue}</span><strong>2x</strong><small>VitaDairy H1.2026</small></div>
          <div className="float-card card-b"><span>ROI</span><strong>17.5x</strong><small>{t.roi}</small></div>
          <div className="float-card card-c"><UsersRound size={18}/><strong>3K+</strong><small>{t.community}</small></div>
          <div className="grid-glow"/>
        </div>
      </section>

      <section className="brand-strip shell" aria-label="Brands and companies"><span>{t.brands}</span><div className="logo-box"><Image src="/brands/eCentric.png" alt="eCentric" width={150} height={70}/></div><div className="logo-box"><Image src="/brands/VitaDairy.png" alt="VitaDairy" width={150} height={70}/></div><div className="logo-box"><Image src="/brands/Oggi.png" alt="Oggi" width={120} height={70}/></div><div className="logo-box"><Image src="/brands/Logo-NextPay.png" alt="NextPay" width={160} height={70}/></div></section>

      <section id="about" className="section shell split"><div><p className="section-kicker">{t.aboutKicker}</p><h2>{t.aboutTitle1}<br/><span>{t.aboutTitle2}</span></h2></div><div className="about-copy"><p>{t.about1}</p><p>{t.about2}</p><div className="about-tags"><span><MapPin size={14}/> {t.location}</span><span><BriefcaseBusiness size={14}/> FMCG / E-commerce</span><span><BarChart3 size={14}/> Data-driven</span></div></div></section>

      <section className="metrics shell">{t.metrics.map((item) => <article className="metric" key={item[1]}><strong>{item[0]}</strong><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</section>

      <section id="experience" className="section shell"><div className="section-head"><div><p className="section-kicker">{t.expKicker}</p><h2>{t.expTitle1}<span>{t.expTitle2}</span></h2></div><p>{t.expIntro}</p></div><div className="timeline"><article className="role featured-role"><div className="role-date">AUG 2025 — JUL 2026</div><div className="role-company"><div className="company-logo"><Image src="/brands/eCentric.png" alt="eCentric" width={130} height={45}/></div></div><div className="role-content"><h3>Senior Affiliate Executive</h3><p>{t.ecentric}</p><div className="role-tags"><span>Creator Acquisition</span><span>Campaign Execution</span><span>Livestream</span><span>Reporting</span></div></div></article><article className="role"><div className="role-date">FEB 2025 — JUL 2025</div><div className="role-company"><div className="company-logo"><Image src="/brands/Logo-NextPay.png" alt="NextPay" width={145} height={50}/></div></div><div className="role-content"><h3>Trade Marketing</h3><p>{t.nextpay}</p><div className="role-tags"><span>Trade Marketing</span><span>TikTok</span><span>Content</span><span>Operations</span></div></div></article></div></section>

      <section id="work" className="section shell work-section"><div className="section-head"><div><p className="section-kicker">{t.workKicker}</p><h2>{t.workTitle1}<span>{t.workTitle2}</span></h2></div><p>{t.workIntro}</p></div><div className="projects"><article className="project project-growth"><div className="project-top"><span className="project-number">01</span><Image src="/brands/VitaDairy.png" alt="VitaDairy" width={150} height={66}/></div><div className="project-body"><p className="project-kicker">{t.p1k}</p><h3>{t.p1t1}<span>{t.p1t2}</span></h3><p>{t.p1d}</p></div><div className="project-stats"><div><strong>2x</strong><span>Revenue Growth</span></div><div><strong>17.5x</strong><span>ROI</span></div><div><strong>3,000+</strong><span>Creators</span></div></div><div className="project-orb"><WandSparkles size={34}/></div></article><article className="project project-oggi"><div className="project-top"><span className="project-number">02</span><Image src="/brands/Oggi.png" alt="Oggi" width={94} height={70}/></div><div className="project-body"><p className="project-kicker">{t.p2k}</p><h3>{t.p2t1}<span>{t.p2t2}</span></h3><p>{t.p2d}</p></div><div className="project-stats"><div><strong>2.7M+</strong><span>Impressions</span></div><div><strong>2,300+</strong><span>Sales</span></div><div><strong>7.8%</strong><span>CTR</span></div><div><strong>3.2%</strong><span>CR</span></div></div><div className="project-orb"><MousePointer2 size={34}/></div></article></div></section>

      <section id="skills" className="section shell skills-section"><div className="skills-intro"><p className="section-kicker">{t.skillsKicker}</p><h2>{t.skillsTitle1}<span>{t.skillsTitle2}</span></h2><p>{t.skillsIntro}</p></div><div className="skill-grid">{t.skills.map(([title, desc], i) => <article className="skill-card" key={title}><span>0{i+1}</span>{i===0?<UsersRound/>:i===1?<BarChart3/>:i===2?<BriefcaseBusiness/>:<Bot/>}<h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <footer className="footer shell"><div><p className="section-kicker">{t.footerK}</p><h2>{t.footer1}<br/>{t.footer2}<span>{t.footer3}</span></h2></div><div className="footer-actions"><a className="primary big" href="mailto:duyanhsdte@gmail.com">duyanhsdte@gmail.com <ArrowUpRight/></a><a className="text-link" href="https://linkedin.com/in/anhmd2003/" target="_blank">LinkedIn <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© 2026 Mai Duy Anh</span><span>Affiliate Marketing · Creator Management · Data Analytics</span></div></footer>
    </main>
  );
}
