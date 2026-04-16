import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import SideNavbar from "./components/Side-Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <div className="page-inner">
            <SideNavbar />
            <main className="content">
              <App />
            </main>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
     </Provider>
  </StrictMode>,
);
