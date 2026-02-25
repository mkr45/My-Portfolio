import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            ©2026 · Built with
          </span>{" "}
          React.js{" "}
          <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>and deployed with</span>{" "}
          Vercel
        </div>
        <div>
          <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>Developed by</span>{" "}
          <span style={{ color: "#8f53ff" }}>Mayank</span>
        </div>
      </footer>
    </>
  );
}
