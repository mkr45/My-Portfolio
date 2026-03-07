import "./Navgation-Btn.css";

export default function NavigationBtn(props) {
  return (
    <>
      <button className="nav-btn">
        {props.text}
        <img
          src="https://img.icons8.com/?size=100&id=60&format=png&color=1A1A1A"
          alt="next"
          style={{ height: "1em", width: "1em" }}
        />
      </button>
    </>
  );
}
