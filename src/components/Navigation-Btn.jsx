import "./Navgation-Btn.css";
import { useSelector } from 'react-redux';

export default function NavigationBtn(props) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <button className="nav-btn nav-btn-next">
      <span className="nav-btn-copy">
        <span className="nav-btn-text">{props.text}</span>
      </span>
      <span className="nav-btn-icon-shell" aria-hidden="true">
        <img
          src={isDarkMode ? "https://img.icons8.com/sf-black-filled/64/FFFFFF/forward.png" : "https://img.icons8.com/sf-black-filled/64/1A1A1A/forward.png"}
          alt="next"
          className="nav-btn-icon"
        />
      </span>
    </button>
  );
}
