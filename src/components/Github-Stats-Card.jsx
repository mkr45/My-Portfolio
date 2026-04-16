import "./Github-Stats-Card.css"


export default function GithubStatsCard({heading, subHeading}){

       
    return (
        <>
          {heading !== "Hireable" && (
            <div className="github-stats-box">
              <p style={{fontSize: "1em", fontWeight: "bold", color: "var(--stats-heading)"}}>{heading}</p>
              <p style={{fontSize: "3em", fontWeight: "bold"}}>{subHeading}</p>
            </div>
          )}

          {heading === "Hireable" && (
            <div className="github-stats-box" style={{backgroundColor: "var(--hireable-bg)"}}>
              <p style={{fontSize: "1em", fontWeight: "bold", color: "var(--stats-heading)"}}>{heading}</p>
              <p style={{fontSize: "3em", fontWeight: "bold"}}>{subHeading}</p>
            </div>
          )}
        </>
    )
}