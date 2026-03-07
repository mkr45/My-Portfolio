import { Link } from "react-router-dom";
import "./Home.css";
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Mayank Kumar"
        subtitle="Turning Ideas into Working Software!"
        description="I am a dedicated Software Engineer with experience across frontend and backend development, building scalable and reliable applications using technologies like React.js, Ember.js, Node.js, and REST APIs. I enjoy solving complex engineering problems, improving system performance and accessibility, and delivering high-quality, user-centric solutions through clean, maintainable code and strong collaboration."
      />

      <div className="button-row">
        <div className="btn-primary">
          <a
            href="https://drive.google.com/file/d/1VyAPpX0a5qW4yDBw5Dvxibu8R75wU2h0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-link"
          >
            <span>Get Resume</span>
            <img
              src="https://img.icons8.com/?size=100&id=60664&format=png&color=FFFFFF"
              alt="Link"
            />
          </a>
        </div>

        <div className="btn-outline">
          <img
            src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=1A1A1A"
            alt="Email"
          />
          <a
            href="mailto:mayankkr4554@gmail.com"
            className="btn-link"
            onClick={(e) => {
              e.preventDefault();
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mayankkr4554@gmail.com`;
              window.open(gmailUrl, "_blank");
            }}
          >
            <span>Send Email</span>
          </a>
        </div>
      </div>
       <Link to="/about" style={{display: "flex", flexDirection:"row", justifyContent: "flex-end", textDecoration: "none", paddingTop:"4em"}}>
          <NavigationBtn 
          text="About me"
          />
        </Link>
      
    </>
  );
}