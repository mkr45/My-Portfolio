import "./Navgation-Btn.css";
import { useSelector } from 'react-redux';

export default function NavigationBtn(props) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <button className="nav-btn">
        {props.text}
        <img
          src={isDarkMode ? "https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" : "https://img.icons8.com/?size=100&id=60&format=png&color=1A1A1A"}
          alt="next"
          style={{ height: "1em", width: "1em" }}
        />
      </button>
    </>
  );
}
