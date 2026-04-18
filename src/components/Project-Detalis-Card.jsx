export default function ProjectDetailsCard({ projectFeatures }) {
  const heading = projectFeatures[0];
  const items = projectFeatures.slice(1);
  return (
    <div className="detail-card">
      <h3>
        {heading}
      </h3>
      <ul>
        {items.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
