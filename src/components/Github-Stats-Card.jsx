import "./Github-Stats-Card.css"


export default function GithubStatsCard({heading, subHeading, description}){
    const isHireable = heading === "Hireable";
    return (
      <article className={`github-stats-box ${isHireable ? "github-stats-box-hireable" : ""}`}>
        <span className="github-stats-label">{heading}</span>
        <strong className="github-stats-value">{subHeading}</strong>
        <span className="github-stats-foot">
          {description || (isHireable ? "Available for strong product work" : "Public GitHub profile")}
        </span>
      </article>
    )
}
