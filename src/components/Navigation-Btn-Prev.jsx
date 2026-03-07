import "./Navigation-Btn-Prev.css"

export default function NavigationBtnPrev(props)
{
    
   return(
    <>
    <button className="nav-btn">
    <img
         src="https://img.icons8.com/?size=100&id=mN0cPZctq65n&format=png&color=1A1A1A"
         alt="next"
         style={{height:"1.5em", width: "1.5em"}}
      />
      {props.text}
    </button>
    

    </>
   )
}