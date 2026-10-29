import "./Navgation-Btn.css";

export default function NavigationBtn(props) {


  return (
    <button className="nav-btn nav-btn-next">
      <span className="nav-btn-copy">
        <span className="nav-btn-text">{props.text}</span>
      </span>
      <span className="nav-btn-icon-shell" aria-hidden="true">
        <img
          src="https://img.icons8.com/sf-black-filled/64/FFFFFF/forward.png"
          alt="next"
          className="nav-btn-icon"
        />
      </span>
    </button>
  );
}
