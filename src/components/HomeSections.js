import React from "react";
import { FaBars, FaMapMarkerAlt, FaPhoneAlt, FaTimes, FaTrophy, FaWhatsapp } from "react-icons/fa";
import { GiEightBall } from "react-icons/gi";

const iconStyle = { display: "inline-block", verticalAlign: "-0.12em" };

export function TournamentBanner({ onClose }) {
  return (
    <div style={{position:"fixed",top:0,left:0,right:0,zIndex:400,background:"linear-gradient(90deg,#c0392b,#8b1a1a)",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
      <div style={{display:"flex",alignItems:"center",gap:10,flex:1,flexWrap:"wrap"}}>
        <span style={{fontSize:"0.9rem",display:"inline-flex"}}><FaTrophy /></span>
        <span style={{fontSize:"0.68rem",letterSpacing:"0.1em",color:"#fff",fontFamily:"'Fira Code',monospace"}}>
          <strong>NEXT TOURNAMENT:</strong> Saturday 28 Jun — Register at the counter · 08080236462
        </span>
      </div>
      <button onClick={onClose} style={{background:"none",border:"none",color:"rgba(255,255,255,0.7)",fontSize:"1.1rem",cursor:"pointer",flexShrink:0,padding:"0 4px"}}>
        <FaTimes />
      </button>
    </div>
  );
}

export function Navigation({ showBanner, mobileMenuOpen, setMobileMenuOpen, scrollTo }) {
  const links = [["How It Works","how"],["Book & Play","book"],["Menu","menu"],["Regulars","regulars"],["Reviews","reviews"],["Leaderboard","leaderboard"],["Bets 🔜","betting"],["Find Us","location"]];

  return (
    <>
      <nav style={{top:showBanner?'40px':'0',transition:'top 0.3s'}}>
        <div className="nav-logo">NOSTORY <span>BRIDGE</span></div>
        <ul className="nav-links">
          {links.map(([label,id])=>(
            <li key={id}><a onClick={()=>scrollTo(id)}>{label}</a></li>
          ))}
        </ul>
        <button className="nav-hamburger" onClick={()=>setMobileMenuOpen(open=>!open)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {links.map(([label,id])=>(
          <a key={id} onClick={()=>scrollTo(id)}>{label}</a>
        ))}
      </div>
    </>
  );
}

export function HeroSection({ scrollTo }) {
  return (
    <section className="hero">
      <div className="hero-bg"/>
      <div className="hero-content">
        <div className="hero-eyebrow"><FaMapMarkerAlt style={iconStyle} /> Philip Oduniyi No. 4, Close to K-Math Hotel, Oke Aro, Ogun State</div>
        <h1 className="hero-title">NOSTORY<br/><span className="gold">BRIDGE</span></h1>
        <p className="hero-sub">Where Champions Come to Play</p>
        <div className="hero-balls">{[...Array(6)].map((_,i)=><div key={i} className="ball"/>)}</div>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={()=>scrollTo("book")}>Book a Game</button>
          <button className="btn-secondary" onClick={()=>scrollTo("how")}>How It Works</button>
        </div>
        <a href="tel:+2348080236462" style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:20,color:"var(--chalk)",textDecoration:"none",fontSize:"0.72rem",letterSpacing:"0.15em",opacity:0.8,animation:"fadeUp 0.8s 0.75s ease both"}}>
          <FaPhoneAlt /> <span style={{borderBottom:"1px solid rgba(212,207,196,0.3)"}}>08080236462</span>
        </a>
      </div>
    </section>
  );
}

export function TableAvailability({ tableOpen }) {
  return (
    <div style={{background:tableOpen?"rgba(76,175,80,0.08)":"rgba(192,57,43,0.08)",border:`1px solid ${tableOpen?"rgba(76,175,80,0.3)":"rgba(192,57,43,0.3)"}`,margin:"0 40px",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:tableOpen?"#4caf50":"#e74c3c",animation:"pulse 2s ease-in-out infinite"}}/>
        <span style={{fontSize:"0.72rem",color:tableOpen?"#4caf50":"#e57373",letterSpacing:"0.1em",fontFamily:"'Fira Code',monospace"}}>
          {tableOpen ? <><GiEightBall style={iconStyle} /> Tables Available Now — Walk in or Book Online</> : <><FaTimes style={iconStyle} /> Tables Currently Full — Call to Check</>}
        </span>
      </div>
      <a href="tel:+2348080236462" style={{fontSize:"0.65rem",color:"var(--gold)",letterSpacing:"0.15em",textDecoration:"none",textTransform:"uppercase"}}>
        <FaPhoneAlt style={iconStyle} /> Call 08080236462
      </a>
    </div>
  );
}

export function HowItWorksSection() {
  const steps = [
    {num:"01",icon:<GiEightBall />,title:"Pick Your Board",desc:"Choose the Marble Board (1 free every 5) or Wooden Board (2 free every 5). Order as many games as you want — or both boards at once."},
    {num:"02",icon:<FaWhatsapp />,title:"Pay & Send",desc:"Transfer your game fee to our Premium Trust Bank account (4026951870). Send your booking and payment screenshot on WhatsApp for confirmation."},
    {num:"03",icon:<FaTrophy />,title:"Come & Play",desc:"Show up at Oke Aro, tell us your name, and we set up your table. Your coins are ready. Grab a drink, order shawarma, and let the games begin."},
  ];

  return (
    <section className="section" id="how">
      <div className="section-label">Getting Started</div>
      <h2 className="section-title">How It Works</h2>
      <p className="section-sub">Three simple steps to get on the table at Nostory Bridge.</p>
      <div className="hiw-grid">
        {steps.map((step,index)=>(
          <React.Fragment key={step.num}>
            <div className="hiw-card">
              <div className="hiw-num">{step.num}</div>
              <div className="hiw-icon">{step.icon}</div>
              <div className="hiw-title">{step.title}</div>
              <div className="hiw-desc">{step.desc}</div>
            </div>
            {index<2&&<div className="hiw-arrow">→</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
