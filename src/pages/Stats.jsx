import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GithubStatsCard from "../components/Github-Stats-Card";
import { useSelector } from "react-redux";
import "./Stats.css";

export default function Stats() {
  const [contributions, setContributions] = useState("...");
  const [repo, setrepo] = useState("");
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const bgColor = isDarkMode ? "1a1a1a" : "ffffff";
  const textColor = isDarkMode ? "aaaaaa" : "333";
  const dateColor = isDarkMode ? "888888" : "555";

  useEffect(() => {
    fetch(`https://github-contributions-api.deno.dev/mkr45.json`)
      .then((res) => res.json())
      .then((data) => setContributions(data.totalContributions))
      .catch((err) => {
        
        setContributions(err);
      });

      fetch("https://api.github.com/users/mkr45")
      .then((res)=> res.json())
      .then((data)=> setrepo(data.public_repos))
      .catch((err)=>{
        setrepo(err);
      })

  }, []);



  return (
    <>
      <div style={{ marginTop: "1em" }}>
        <PageHeader
          title="GitHub Stats"
          subtitle="A visual snapshot of my GitHub activity and profile signals."
          description="Key metrics, contribution patterns, and profile details presented in a cleaner, more dashboard-like format."
        />
      </div>

      <section className="stats-shell">
        <div className="stats-graph-card">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=mkr45&bg_color=${bgColor}&color=5f6c62&line=5f6c62&point=7c877c&area=true&area_color=5f6c62&hide_border=true`}
            width="100%"
            alt="GitHub activity graph"
          />
        </div>

        <div className="stats-streak-card">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=mkr45&theme=default&hide_border=true&ring=5f6c62&fire=7c877c&currStreakLabel=5f6c62&sideLabels=${textColor}&dates=${dateColor}&background=${bgColor}&currStreakNum=${textColor}&sideNums=${textColor}`}
            width="100%"
            style={{ maxHeight: "13em"}}
            alt="GitHub streak stats"
          />
        </div>

        <div className="stats-grid">
          <GithubStatsCard heading={"Hireable"} subHeading={"Yes"} />
          <GithubStatsCard
            heading={"Total contributions"}
            subHeading={contributions }
          />
          <GithubStatsCard heading={"Current Company"} subHeading={"RSL"} />
          <GithubStatsCard
            heading={"Location"}
            subHeading={"Pune, Maharashtra, India"}
          />
          <GithubStatsCard
            heading={"Number of Repositories"}
            subHeading={repo}
          />
        </div>
      </section>
      <div className="stats-nav">
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Contact" />
        </Link>
      </div>
    </>
  );
}
