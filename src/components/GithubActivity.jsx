import { useState, useEffect } from "react";
import GithubStatsCard from "./Github-Stats-Card";
import { contributionStats, fetchGithubJson } from "../utils/githubStats";
import "./GithubActivity.css";

const number = value => value.toLocaleString();
const chartColors = { background: "141313", text: "F3EDE2", accent: "D7A06C", green: "39D353", muted: "A79B8D", border: "2C241F" };
const displayDate = date => new Date(`${date}T00:00:00Z`).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

function AnalyticsImage({ title, type, theme, src }) {
  const [failedSource, setFailedSource] = useState(null);
  const source = src || `https://github-profile-summary-cards.vercel.app/api/cards/${type}?username=mkr45&theme=${theme}&utcOffset=5.5&bg_color=${chartColors.background}&title_color=${chartColors.accent}&text_color=${chartColors.muted}&border_color=${chartColors.background}&icon_color=${chartColors.green}&chart_color=${chartColors.green}`;
  return <div className="stats-analytics-card">
    {failedSource === source ? <p className="stats-message">This chart is temporarily unavailable. Please try again later.</p> :
      <img src={source} alt={title} loading="lazy" onError={() => setFailedSource(source)} />}
  </div>;
}

function ContributionCalendar({ activity }) {
  const offset = new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay();
  const cells = [...Array(offset).fill(null), ...activity.days];
  return <>
    <div className="stats-calendar-scroll" tabIndex={0} role="region" aria-label="Daily contribution calendar. Scroll horizontally to see all dates.">
      <div className="stats-calendar" style={{ "--weeks": Math.ceil(cells.length / 7) }}>
        <div className="stats-months" aria-hidden="true">
          {activity.days.map((day, index) => ((index === 0 && Number(day.date.slice(-2)) <= 7) || day.date.endsWith("-01")) &&
            <span key={day.date} style={{ gridColumn: Math.floor((index + offset) / 7) + 1 }}>
              {new Date(`${day.date}T00:00:00Z`).toLocaleDateString(undefined, { month: "short", timeZone: "UTC" })}
            </span>)}
        </div>
        <div className="stats-calendar-days">
          {cells.map((day, index) => day ? <span key={day.date} className={`stats-day stats-level-${day.level}`} title={`${number(day.count)} contributions · ${displayDate(day.date)}`} /> : <span key={`pad-${index}`} />)}
        </div>
      </div>
    </div>
    <div className="stats-calendar-footer">
      <span>{displayDate(activity.days[0].date)} – {displayDate(activity.days.at(-1).date)}</span>
      <span className="stats-legend" aria-label="Color scale: less to more contributions">Less {[0, 1, 2, 3, 4].map(level => <i key={level} className={`stats-day stats-level-${level}`} />)} More</span>
    </div>
    <details className="stats-daily-details"><summary>Explore daily contribution counts</summary>
      <div className="stats-daily-table"><table><thead><tr><th scope="col">Date</th><th scope="col">Contributions</th></tr></thead>
        <tbody>{activity.days.slice().reverse().map(day => <tr key={day.date}><th scope="row">{displayDate(day.date)}</th><td>{number(day.count)}</td></tr>)}</tbody>
      </table></div>
    </details>
  </>;
}

export default function GithubActivity() {
  const [profile, setProfile] = useState({ status: "loading" });
  const [contributions, setContributions] = useState({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  const chartBackground = chartColors.background;
  const chartText = chartColors.text;
  const chartAccent = chartColors.green;

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;
    const timeout = setTimeout(() => controller.abort(), 15000);
    const load = async (url, setter, transform) => {
      try {
        const data = transform(await fetchGithubJson(url, controller.signal));
        if (!disposed) setter({ status: "ready", data });
      } catch {
        if (!disposed) setter({ status: "error" });
      }
    };
    Promise.all([
      load("https://api.github.com/users/mkr45", setProfile, data => {
        if (!Number.isInteger(data.public_repos)) throw new Error("Invalid profile");
        return data;
      }),
      load("https://github-contributions-api.jogruber.de/v4/mkr45?y=last", setContributions, contributionStats),
    ]).finally(() => clearTimeout(timeout));
    return () => { disposed = true; clearTimeout(timeout); controller.abort(); };
  }, [attempt]);

  const loading = profile.status === "loading" || contributions.status === "loading";
  const failed = profile.status === "error" || contributions.status === "error";
  const activity = contributions.data;
  const metric = value => contributions.status === "loading" ? "…" : activity ? number(value) : "—";
  const retry = () => {
    setProfile({ status: "loading" });
    setContributions({ status: "loading" });
    setAttempt(value => value + 1);
  };

  return <>
    <section className="stats-shell" id="github-activity" aria-labelledby="github-activity-title">
      <div className="stats-introduction">
        <h2 id="github-activity-title">GitHub activity</h2>
        <p>A look at my contributions, coding habits, and open-source activity.</p>
      </div>
      <div className="stats-toolbar">
        <a className="stats-profile-name" href="https://github.com/mkr45" target="_blank" rel="noreferrer" aria-label="Visit mkr45 on GitHub">@mkr45 <span aria-hidden="true">↗</span></a>
        <span className="stats-status" role="status">{loading ? "Loading GitHub activity…" : failed ? "Some stats are unavailable" : "Public GitHub activity · past year"}</span>
        <button className="stats-refresh" onClick={retry} disabled={loading}>{loading ? "Loading…" : "Refresh stats"}</button>
      </div>
      {failed && <div className="stats-notice" role="status">{profile.status === "error" && "GitHub profile details could not be loaded. "}{contributions.status === "error" && "Contribution history could not be loaded. "}The service may be busy or rate-limited. Please try refreshing.</div>}
      <div className="stats-grid" aria-busy={loading}>
        <GithubStatsCard heading="Contributions" subHeading={metric(activity?.total)} description="Across the displayed contribution calendar" />
        <GithubStatsCard heading="Current streak" subHeading={metric(activity?.current)} description="Consecutive days · today can still count" />
        <GithubStatsCard heading="Longest streak" subHeading={metric(activity?.longest)} description="Consecutive days in this period" />
        <GithubStatsCard heading="Public repositories" subHeading={profile.status === "loading" ? "…" : profile.data ? number(profile.data.public_repos) : "—"} description="Public projects on GitHub" />
      </div>
      <article className="stats-graph-card" aria-busy={contributions.status === "loading"}>
        <div className="stats-section-heading"><div><span className="stats-eyebrow">THE DAILY COMMITMENT</span><h2>Contribution activity</h2></div>{activity && <span className="stats-active-days">{number(activity.activeDays)} active days</span>}</div>
        {activity ? <ContributionCalendar activity={activity} /> : <div className="stats-calendar-placeholder" role="status">{contributions.status === "loading" ? "Loading the contribution calendar…" : "The contribution calendar is temporarily unavailable."}</div>}
        <p className="stats-source">Updates may take up to an hour.</p>
      </article>
      <div className="stats-analytics-grid">
        <AnalyticsImage title="Commits by time of day" type="productive-time" theme="github_dark" />
        <AnalyticsImage title="Languages by repository" type="repos-per-language" theme="github_dark" />
        <AnalyticsImage
          title="Mayank Kumar's GitHub stats"
          src={`https://ghstats.dev/api/card?username=mkr45&bg=${chartBackground}&title_color=${chartAccent}&text=${chartText}&icon_color=${chartAccent}&hide_border=true`}
        />
        <AnalyticsImage
          title="GitHub contribution streak"
          src={`https://streak-stats.demolab.com/?user=mkr45&theme=dark&hide_border=true&background=${chartBackground}&ring=${chartAccent}&fire=${chartAccent}&currStreakLabel=${chartAccent}&sideLabels=${chartText}&currStreakNum=${chartText}&sideNums=${chartText}&dates=${chartColors.muted}&stroke=${chartColors.border}`}
        />
      </div>
    </section>
  </>;
}
