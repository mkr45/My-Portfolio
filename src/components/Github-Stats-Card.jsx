import "./Github-Stats-Card.css"


export default function GithubStatsCard({heading, subHeading}){

       
    return (
        <>
          {heading !== "Hireable" && (
            <div className="github-stats-box">
              <p style={{fontSize: "1em", fontWeight: "bold", color: "oklch(55.2% .016 285.938)"}}>{heading}</p>
              <p style={{fontSize: "3em", fontWeight: "bold"}}>{subHeading}</p>
            </div>
          )}

          {heading === "Hireable" && (
            <div className="github-stats-box" style={{backgroundColor: "oklch(0.93 0.06 152.3)"}}>
              <p style={{fontSize: "1em", fontWeight: "bold", color: "oklch(55.2% .016 285.938)"}}>{heading}</p>
              <p style={{fontSize: "3em", fontWeight: "bold"}}>{subHeading}</p>
            </div>
          )}
        </>
    )
}