import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <span className="grey">
            ©2026 · Built with
          </span>{" "}
          React.js{" "}
          <span className="grey">and deployed with</span>{" "}
          Vercel
        </div>
        <div>
          <span className="grey">Developed by</span>{" "}
          <span style={{ color: "#8f53ff" }}>Mayank</span>
        </div>
      </footer>
    </>
  );
}
