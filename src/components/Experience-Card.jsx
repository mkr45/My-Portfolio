import "./Experience-Card.css"


export default function ExperienceCard(props) {
  return (
    <>
     <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src="https://img.icons8.com/?size=100&id=twDspYTkRQkC&format=png&color=000000" alt="job" style={{ width: "1.8em", height: "1.8em"}}></img>
          <div style={{ width: "1px", height: "100%", backgroundColor: "#d0d0d0", marginTop: "0.5em" }}></div>
        </div>
        <div className="card-box" style={{marginLeft: "1em"}}>
          <span style={{fontSize: "1.2em", fontWeight: "500"}}>{props.job}</span>
          <span style={{ paddingTop: "0.5em", color:"grey" }}>{props.date}</span>
          <span style={{ paddingTop: "1.3em", color: "#505050", lineHeight:"1.5em", fontSize: "1.1em", marginBottom: "2em"}}>{props.experience}</span>
        </div>
      </div>
    </>
  );
}
