import { Link } from "react-router-dom";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/Experience-Card";

export default function Education() {
  return (
    <>
      <PageHeader
        title="Education"
        subtitle="I learned a lot, but the real learning happens in the code editor!"
        description="Education has been the starting point of my journey into the world of technology. Pursuing a Bachelor’s in Computer Science and Engineering at Chandigarh University helped me build a strong foundation in programming, software development, and core computer science concepts. Alongside academics, I explored coding through projects, certifications, and problem-solving, allowing me to turn theoretical knowledge into practical development skills and gain a deeper understanding of modern technologies."
      />

      <ExperienceCard
        type="education"
        job="Bachelor of engineering - Chandigarh university, Mohali, Punjab, India"
        date="May 2021 - May 2025"
        experience=" Completed bachelor of engineering in computer science and engineering."
      />
      <ExperienceCard
        type="education"
        job="Higher Secondary Education - DAV Public School, B.S City, Jharkhand, India"
        date="April 2020 - April 2021"
        experience="Completed 12th in Non-medical."
      />
      <ExperienceCard
        type="education"
        job="Secondary Education - DAV Public School, B.S City, Jharkhand, India"
        date="April 2018 - April 2019"
        experience="Completed 10th grade."
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2em",
          width: "100%",
        }}
      >
        <Link to="/experience" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Experience" />
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Contact" />
        </Link>
      </div>
    </>
  );
}