import "./Navgation-Btn.css";
import { useSelector } from 'react-redux';

export default function NavigationBtn(props) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <button className="nav-btn">
        {props.text}
        <img
          src={isDarkMode ? "https://img.icons8.com/sf-black-filled/64/FFFFFF/forward.png" : "https://img.icons8.com/sf-black-filled/64/1A1A1A/forward.png"}
          alt="next"
          style={{ height: "1.5em", width: "1.5em" }}
        />
      </button>
    </>
  );
}
