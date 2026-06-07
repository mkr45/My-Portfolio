import "./Experience-Card.css"


export default function ExperienceCard(props) {
  const iconUrl = props.type === "education" 
    ? "https://img.icons8.com/ink/48/7950F2/education.png"
    : "https://img.icons8.com/ios-filled/50/7950F2/briefcase-settings.png";
  
  return (
    <article className="experience-item">
      <div className="experience-rail" aria-hidden="true">
        <div className="experience-icon-shell">
          <img
            src={iconUrl}
            alt={props.type === "education" ? "education" : "job"}
            className="experience-icon"
          />
        </div>
        <div className="experience-line" />
      </div>

      <div className="card-box">
        <div className="experience-topline">
          <span className="experience-badge">{props.badge || "Role"}</span>
          <span className="experience-date">{props.date}</span>
        </div>

        <span className="experience-job">{props.job}</span>

        {props.summary ? (
          <span className="experience-summary">{props.summary}</span>
        ) : null}

        <span className="experience-copy">{props.experience}</span>

        {props.highlights?.length ? (
          <div className="experience-highlights">
            {props.highlights.map((highlight) => (
              <span className="experience-highlight-pill" key={highlight}>
                {highlight}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
