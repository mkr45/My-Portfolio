import "./Experience-Card.css"


export default function ExperienceCard(props) {
  const iconUrl = props.type === "education" 
    ? "https://img.icons8.com/ink/48/7950F2/education.png"
    : "https://img.icons8.com/ios-filled/50/7950F2/briefcase-settings.png";
  
  return (
    <>
     <div style={{display: "flex", flexDirection: "row", marginBottom: "2em"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={iconUrl} alt={props.type === "education" ? "education" : "job"} style={{ width: "1.8em", height: "1.8em", filter: "drop-shadow(0 2px 4px rgba(143, 83, 255, 0.3))"}}></img>
          <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #8f53ff 0%, transparent 100%)", marginTop: "0.5em" }}></div>
        </div>
        <div className="card-box" style={{marginLeft: "1em", flex: 1}}>
          <span style={{fontSize: "1.2em", fontWeight: "500", background: "linear-gradient(135deg, var(--text-color), #8f53ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>{props.job}</span>
          <span style={{ paddingTop: "0.5em", color:"var(--muted-text)", fontSize: "0.95em" }}>{props.date}</span>
          <span style={{ paddingTop: "1.3em", color: "var(--text-color)", lineHeight:"1.6em", fontSize: "1.1em", opacity: 0.85}}>{props.experience}</span>
        </div>
      </div>
    </>
  );
}
