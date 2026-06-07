import "./PageHeader.css";

export default function PageHeader({ title, subtitle, description }) {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>
      {subtitle ? <h2 className="page-subtitle">{subtitle}</h2> : null}
      {description ? <p className="page-desc">{description}</p> : null}
    </div>
  );
}
