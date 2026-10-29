import "./Navigation-Btn-Prev.css"

export default function NavigationBtnPrev(props)
{


   return(
    <button className="nav-btn nav-btn-prev">
      <span className="nav-btn-icon-shell" aria-hidden="true">
        <img
         src="https://img.icons8.com/sf-black-filled/64/FFFFFF/back.png"
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
