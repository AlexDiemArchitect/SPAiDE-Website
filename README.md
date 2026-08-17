/* ==========================================================================
   SPAiDE — Design tokens
   ========================================================================== */
:root{
  --navy:        #1A2B3C;   /* RAL 5011 Steel Blue — primary background */
  --navy-deep:   #121E2B;   /* darker panel */
  --panel:       #22364A;   /* card surface */
  --panel-line:  #34506B;   /* card border */
  --salmon:      #CF6919;   /* RAL 3022 Salmon Pink */
  --sulfur:      #EDFF21;   /* RAL 1016 Sulfur Yellow */
  --teal:        #00E6C2;   /* accent */
  --ink:         #F3F6F9;   /* primary text on navy */
  --slate:       #9FB3C8;   /* secondary text on navy */
  --slate-dim:   #6E85A0;   /* tertiary / captions */
  --line:        rgba(159,179,200,0.16);

  --font-display: "Poppins", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;

  --container: 1180px;
  --radius: 14px;
  --radius-sm: 8px;
}

*,*::before,*::after{ box-sizing:border-box; }
html{ scroll-behavior:smooth; scroll-padding-top: 84px; }
body{
  margin:0;
  background:var(--navy);
  color:var(--ink);
  font-family:var(--font-body);
  font-size:16px;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
img{ max-width:100%; display:block; }
a{ color:inherit; text-decoration:none; }
ul{ margin:0; padding:0; list-style:none; }
h1,h2,h3,h4{ font-family:var(--font-display); margin:0; line-height:1.15; font-weight:700; }
p{ margin:0; }

.container{ max-width:var(--container); margin:0 auto; padding:0 28px; }

.eyebrow{
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-family:var(--font-body);
  font-weight:700;
  font-size:13px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--teal);
  margin-bottom:16px;
}
.eyebrow::before{
  content:"";
  width:22px; height:2px;
  background:var(--teal);
  display:inline-block;
}

.section{ padding:120px 0; position:relative; }
.section--tight{ padding:96px 0; }
.section-head{ max-width:640px; margin-bottom:56px; }
.section-head h2{ font-size:clamp(30px,4vw,44px); color:var(--ink); }
.section-head p{ margin-top:16px; color:var(--slate); font-size:17px; }
.section--alt{ background:var(--navy-deep); }

.section-head.center{ margin-left:auto; margin-right:auto; text-align:center; }

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:14px 26px;
  border-radius:999px;
  font-family:var(--font-body);
  font-weight:600;
  font-size:15px;
  cursor:pointer;
  border:1px solid transparent;
  transition:transform .15s ease, background .15s ease, border-color .15s ease;
}
.btn:hover{ transform:translateY(-1px); }
.btn-primary{ background:var(--salmon); color:#fff; }
.btn-primary:hover{ background:#e0791f; }
.btn-ghost{ background:transparent; border-color:var(--line); color:var(--ink); }
.btn-ghost:hover{ border-color:var(--teal); color:var(--teal); }

/* ==========================================================================
   Nav
   ========================================================================== */
.nav{
  position:fixed; top:0; left:0; right:0; z-index:100;
  background:rgba(18,30,43,0.72);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(159,179,200,0.10);
}
.nav .container{
  display:flex; align-items:center; justify-content:space-between;
  height:76px;
}
.nav-logo img{ height:22px; width:auto; }
.nav-links{ display:flex; align-items:center; gap:36px; }
.nav-links a{
  font-size:14px; font-weight:600; letter-spacing:.02em;
  color:var(--slate); position:relative; padding:6px 0;
}
.nav-links a:hover{ color:var(--ink); }
.nav-cta{ display:flex; align-items:center; gap:18px; }
.nav-cta .btn{ padding:10px 20px; font-size:14px; }
.nav-toggle{
  display:none; background:none; border:0; color:var(--ink);
  width:40px; height:40px; cursor:pointer;
}
.nav-toggle svg{ width:24px; height:24px; }

@media (max-width: 900px){
  .nav-links{
    position:fixed; top:76px; left:0; right:0;
    flex-direction:column; align-items:flex-start; gap:0;
    background:var(--navy-deep);
    border-bottom:1px solid var(--line);
    max-height:0; overflow:hidden;
    transition:max-height .25s ease;
  }
  .nav-links.open{ max-height:420px; }
  .nav-links a{ width:100%; padding:16px 28px; border-bottom:1px solid var(--line); }
  .nav-cta{ display:none; }
  .nav-toggle{ display:flex; align-items:center; justify-content:center; }
}

/* ==========================================================================
   Hero
   ========================================================================== */
.hero{
  position:relative;
  min-height:100vh;
  display:flex;
  align-items:center;
  padding-top:76px;
  overflow:hidden;
  background:
    linear-gradient(180deg, rgba(18,30,43,0.55) 0%, rgba(18,30,43,0.88) 62%, var(--navy) 100%),
    linear-gradient(115deg, rgba(18,30,43,0.92) 0%, rgba(26,43,60,0.55) 55%, rgba(26,43,60,0.25) 100%),
    url("../img/hero-detail.jpg") center 30%/cover no-repeat;
}
.hero-content{ max-width:760px; padding:80px 0 96px; }
.hero-content .eyebrow{ color:var(--sulfur); }
.hero-content .eyebrow::before{ background:var(--sulfur); }
.hero h1{
  font-size:clamp(38px,6vw,68px);
  letter-spacing:-0.01em;
  color:var(--ink);
}
.hero h1 em{ font-style:normal; color:var(--teal); }
.hero-sub{
  margin-top:24px;
  font-size:19px;
  color:var(--slate);
  max-width:560px;
}
.hero-actions{ margin-top:40px; display:flex; gap:16px; flex-wrap:wrap; }
.hero-strip{
  margin-top:64px;
  display:flex; gap:40px; flex-wrap:wrap;
  padding-top:28px;
  border-top:1px solid var(--line);
}
.hero-strip div{ font-size:13px; color:var(--slate-dim); letter-spacing:.02em; }
.hero-strip strong{ display:block; font-family:var(--font-display); font-size:20px; color:var(--ink); font-weight:700; }

/* ==========================================================================
   Problem section
   ========================================================================== */
.stat-callout{
  display:flex; align-items:center; gap:32px;
  background:var(--panel);
  border:1px solid var(--panel-line);
  border-radius:var(--radius);
  padding:36px 40px;
  margin-bottom:56px;
  flex-wrap:wrap;
}
.stat-callout .num{
  font-family:var(--font-display); font-weight:800;
  font-size:clamp(48px,7vw,80px);
  color:var(--salmon);
  line-height:1;
}
.stat-callout .txt{ flex:1; min-width:240px; color:var(--ink); font-size:17px; }
.stat-callout .txt small{ display:block; margin-top:6px; color:var(--slate-dim); font-size:13px; }

.problem-grid{
  display:grid; grid-template-columns:repeat(2,1fr); gap:1px;
  background:var(--panel-line);
  border:1px solid var(--panel-line);
  border-radius:var(--radius);
  overflow:hidden;
}
.problem-grid .cell{
  background:var(--panel); padding:32px;
}
.problem-grid .cell h4{ color:var(--ink); font-size:17px; margin-bottom:10px; }
.problem-grid .cell p{ color:var(--slate); font-size:15px; }

.quotes{
  margin-top:72px;
  display:grid; grid-template-columns:repeat(3,1fr); gap:28px;
}
.quote{
  border-top:2px solid var(--teal);
  padding-top:20px;
}
.quote p{ font-size:16px; color:var(--ink); font-style:italic; }
.quote cite{ display:block; margin-top:16px; font-style:normal; font-size:13px; color:var(--slate-dim); }
.quote cite b{ display:block; color:var(--slate); font-size:14px; font-weight:600; }

/* ==========================================================================
   Product section
   ========================================================================== */
.product-hero{
  display:grid; grid-template-columns:1.1fr .9fr; gap:56px; align-items:center;
  margin-bottom:80px;
}
.product-hero .tagline{
  font-family:var(--font-display); font-weight:600;
  font-size:clamp(22px,2.6vw,30px);
  color:var(--ink);
  margin-bottom:28px;
}
.product-hero .tagline em{ font-style:normal; color:var(--teal); }
.product-photo{
  border-radius:var(--radius);
  overflow:hidden;
  border:1px solid var(--panel-line);
  aspect-ratio:4/5;
}
.product-photo img{ width:100%; height:100%; object-fit:cover; }

.spec-strip{
  display:grid; grid-template-columns:repeat(4,1fr);
  border:1px solid var(--panel-line);
  border-radius:var(--radius);
  overflow:hidden;
  margin-bottom:8px;
}
.spec-strip .spec{
  padding:28px 22px; background:var(--panel);
  border-left:1px solid var(--panel-line);
}
.spec-strip .spec:first-child{ border-left:none; }
.spec .val{ font-family:var(--font-display); font-weight:800; font-size:28px; color:var(--sulfur); }
.spec .lbl{ margin-top:6px; font-size:13px; color:var(--slate); }
.spec-note{ text-align:right; margin-top:10px; font-size:13px; color:var(--slate-dim); }

.why-grid{
  margin-top:88px;
  display:grid; grid-template-columns:repeat(4,1fr); gap:20px;
}
.why-card{
  background:var(--panel); border:1px solid var(--panel-line);
  border-radius:var(--radius); padding:28px 24px;
}
.why-card h4{ font-size:18px; color:var(--ink); margin-bottom:10px; }
.why-card p{ font-size:14px; color:var(--slate); }

.deploy-gallery{
  margin-top:88px;
}
.deploy-gallery h3{ font-size:22px; color:var(--ink); margin-bottom:8px; }
.deploy-gallery > p{ color:var(--slate); margin-bottom:32px; max-width:560px; }
.gallery-grid{
  display:grid; grid-template-columns:repeat(4,1fr); gap:18px;
}
.gallery-item{
  position:relative; border-radius:var(--radius-sm); overflow:hidden;
  aspect-ratio:3/4;
  border:1px solid var(--panel-line);
}
.gallery-item img{ width:100%; height:100%; object-fit:cover; transition:transform .4s ease; }
.gallery-item:hover img{ transform:scale(1.05); }
.gallery-item::after{
  content:""; position:absolute; inset:0;
  background:linear-gradient(0deg, rgba(18,30,43,0.92) 0%, rgba(18,30,43,0.05) 55%);
}
.gallery-item span{
  position:absolute; left:16px; bottom:14px; z-index:1;
  font-family:var(--font-display); font-weight:600; font-size:15px; color:var(--ink);
}

/* ==========================================================================
   Team
   ========================================================================== */
.team-leads{
  display:grid; grid-template-columns:repeat(2,1fr); gap:24px;
  margin-bottom:24px;
}
.team-card{
  background:var(--panel); border:1px solid var(--panel-line);
  border-radius:var(--radius); padding:32px;
  display:flex; gap:22px;
}
.team-card img{
  width:88px; height:88px; border-radius:50%; object-fit:cover;
  border:2px solid var(--teal); flex-shrink:0;
}
.team-card h4{ font-size:19px; color:var(--ink); }
.team-card .role{ font-size:13px; color:var(--teal); font-weight:600; margin-top:4px; }
.team-card .tag{
  display:inline-block; margin-top:10px; padding:4px 12px;
  background:rgba(0,230,194,0.12); color:var(--teal);
  border-radius:999px; font-size:12px; font-weight:600;
}
.team-card ul{ margin-top:14px; }
.team-card li{
  font-size:13.5px; color:var(--slate); margin-top:6px; padding-left:16px; position:relative;
}
.team-card li::before{ content:"›"; position:absolute; left:0; color:var(--teal); }

.team-partners{
  display:grid; grid-template-columns:repeat(3,1fr); gap:24px;
  margin-top:24px;
}
.partner-card{
  background:var(--panel); border:1px solid var(--panel-line);
  border-radius:var(--radius); padding:26px;
}
.partner-card img{
  width:64px; height:64px; border-radius:50%; object-fit:cover; margin-bottom:16px;
}
.partner-card h4{ font-size:16px; color:var(--ink); }
.partner-card .role{ font-size:12.5px; color:var(--teal); font-weight:600; margin-top:4px; }
.partner-card p{ margin-top:12px; font-size:13.5px; color:var(--slate); }

.badge-strip{
  margin-top:56px;
  display:flex; flex-wrap:wrap; gap:14px;
  padding:22px 26px;
  background:var(--navy-deep);
  border:1px solid var(--panel-line);
  border-radius:var(--radius);
}
.badge-strip span{
  font-size:13px; color:var(--slate); font-weight:600;
  display:flex; align-items:center; gap:8px;
}
.badge-strip span::before{ content:"◆"; color:var(--salmon); font-size:10px; }

/* ==========================================================================
   FAQ
   ========================================================================== */
.faq-list{ max-width:820px; }
.faq-item{
  border-bottom:1px solid var(--line);
}
.faq-q{
  width:100%; text-align:left; background:none; border:0; cursor:pointer;
  padding:24px 0; display:flex; align-items:center; justify-content:space-between; gap:20px;
  font-family:var(--font-display); font-size:17px; font-weight:600; color:var(--ink);
}
.faq-q .icon{
  width:26px; height:26px; border-radius:50%; border:1px solid var(--panel-line);
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
  color:var(--teal); font-size:16px; transition:transform .2s ease;
}
.faq-item.open .faq-q .icon{ transform:rotate(45deg); }
.faq-a{
  max-height:0; overflow:hidden; transition:max-height .3s ease;
}
.faq-a p{ padding:0 0 26px; color:var(--slate); font-size:15px; max-width:680px; }

/* ==========================================================================
   Contact
   ========================================================================== */
.contact-grid{
  display:grid; grid-template-columns:1fr 1fr; gap:24px;
  margin-bottom:40px;
}
.contact-card{
  background:var(--panel); border:1px solid var(--panel-line);
  border-radius:var(--radius); padding:32px;
}
.contact-card h4{ font-size:20px; color:var(--ink); }
.contact-card .role{ font-size:13px; color:var(--teal); font-weight:600; margin-top:4px; margin-bottom:20px; }
.contact-line{
  display:flex; align-items:center; gap:12px;
  font-size:14.5px; color:var(--slate); margin-top:10px;
}
.contact-line a:hover{ color:var(--ink); }
.contact-line svg{ width:16px; height:16px; color:var(--teal); flex-shrink:0; }

.contact-company{
  border:1px solid var(--panel-line); border-radius:var(--radius);
  padding:28px 32px; display:flex; justify-content:space-between; align-items:center;
  flex-wrap:wrap; gap:16px;
  background:var(--navy-deep);
}
.contact-company .name{ font-family:var(--font-display); font-weight:700; font-size:18px; color:var(--ink); }
.contact-company .addr{ font-size:14px; color:var(--slate); margin-top:4px; }

/* ==========================================================================
   Footer
   ========================================================================== */
footer{
  border-top:1px solid var(--line);
  padding:40px 0;
}
footer .container{
  display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;
}
footer img{ height:18px; opacity:.8; }
footer p{ font-size:13px; color:var(--slate-dim); }

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width: 860px){
  .section{ padding:80px 0; }
  .stat-callout{ flex-direction:column; align-items:flex-start; text-align:left; }
  .problem-grid{ grid-template-columns:1fr; }
  .quotes{ grid-template-columns:1fr; gap:32px; }
  .product-hero{ grid-template-columns:1fr; }
  .product-photo{ order:-1; aspect-ratio:16/10; }
  .spec-strip{ grid-template-columns:repeat(2,1fr); }
  .spec-strip .spec:nth-child(3){ border-left:none; }
  .why-grid{ grid-template-columns:repeat(2,1fr); }
  .gallery-grid{ grid-template-columns:repeat(2,1fr); }
  .team-leads{ grid-template-columns:1fr; }
  .team-card{ flex-direction:column; }
  .team-partners{ grid-template-columns:1fr; }
  .contact-grid{ grid-template-columns:1fr; }
}
