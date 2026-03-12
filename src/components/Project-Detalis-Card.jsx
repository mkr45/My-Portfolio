export default function ProjectDetailsCard({ projectFeatures }) {
  const heading = projectFeatures[0];
  const items = projectFeatures.slice(1);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            marginBottom: "0.5em",
            marginLeft: "1em",
          }}
        >
          {heading}
        </h3>
        <ul style={{}}>
          {items.map((feature, index) => (
            <li
              style={{
                marginBottom: "0.5em",
                fontSize: "1.1em",
                fontWeight: "400",
              }}
              key={index}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
