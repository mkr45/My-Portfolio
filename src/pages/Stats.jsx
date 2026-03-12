import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GithubStatsCard from "../components/Github-Stats-Card";

export default function Stats() {
  const [contributions, setContributions] = useState("...");
  const [repo, setrepo] = useState("");

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
          subtitle=""
          description="Insights and metrics about my GitHub profile"
        />
      </div>


      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=mkr45&bg_color=ffffff&color=8f53ff&line=8f53ff&point=9b45f7&area=true&area_color=8f53ff&hide_border=true"
        width="100%"
      />
<div style={{marginTop: "1.5em", display: "flex", justifyContent: "center"}}>
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=mkr45&theme=default&hide_border=true&ring=8f53ff&fire=9b45f7&currStreakLabel=8f53ff&sideLabels=333&dates=555&background=ffffff"
        width="100%"
        style={{ maxHeight: "13em"}}
      />
  </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "2em",
          marginTop: "3em"
        }}
      >
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "2em",
                width: "100%",
              }}
            >
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <NavigationBtnPrev text="Contact" />
              </Link>
            </div>

    </>
  );
}
