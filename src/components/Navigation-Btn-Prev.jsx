import "./Navigation-Btn-Prev.css"
import { useSelector } from 'react-redux';

export default function NavigationBtnPrev(props)
{
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   return(
    <>
    <button className="nav-btn">
    <img
         src={isDarkMode ? "https://img.icons8.com/sf-black-filled/64/FFFFFF/back.png" : "https://img.icons8.com/sf-black-filled/64/1A1A1A/back.png"}
         alt="previous"
         style={{height:"1.5em", width: "1.5em"}}
      />
      {props.text}
    </button>
    

    </>
   )
}