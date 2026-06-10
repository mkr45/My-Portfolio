import "./Navigation-Btn-Prev.css"
import { useSelector } from 'react-redux';

export default function NavigationBtnPrev(props)
{
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   return(
    <button className="nav-btn nav-btn-prev">
      <span className="nav-btn-icon-shell" aria-hidden="true">
        <img
         src={isDarkMode ? "https://img.icons8.com/sf-black-filled/64/FFFFFF/back.png" : "https://img.icons8.com/sf-black-filled/64/1A1A1A/back.png"}
         alt="previous"
         className="nav-btn-icon"
        />
      </span>
      <span className="nav-btn-copy">
        <span className="nav-btn-text">{props.text}</span>
      </span>
    </button>
   )
}
