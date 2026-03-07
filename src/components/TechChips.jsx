import "./TechChips.css"

export default function TechChips({ items }) {

    return(
        <>
  <ul className="chip-container">
    {items.map((item) => (
      <li className="chip">
        <img src={item.icon} className="chip-icon"/>
        <span className="chip-label">{item.name}</span>
      </li>
    ))}
  </ul>
  </>
    )
    
}