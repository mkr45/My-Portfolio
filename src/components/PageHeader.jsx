import "./PageHeader.css";

export default function PageHeader({ title, subtitle, description }) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <h1 className="page-subtitle">{subtitle}</h1>
      <p className="page-desc">{description}</p>
    </>
  );
}
