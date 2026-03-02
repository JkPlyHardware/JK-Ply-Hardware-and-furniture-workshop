
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [showNewYear, setShowNewYear] = useState(true);

  useEffect(() => {
    // 📅 Auto-hide after 7 Jan 2026
    const expiryDate = new Date("2026-03-04T23:59:59");
    if (new Date() > expiryDate) {
      setShowNewYear(false);
    }
  }, []);

  return (
    <header className="site-header" role="banner">
      {/* LEFT */}
      <div className="header-left">
        <a href="#top" aria-label="JK Ply Hardware Home">
          <img
            src={logo}
            alt="JK Ply Hardware and Furniture Workshop logo"
            className="site-logo"
            width="55"
            height="55"
            loading="eager"
          />
        </a>

        <span className="site-title">
          JK Ply Hardware & Furniture Workshop
        </span>
      </div>

      {/* 🎉 CENTER NEW YEAR */}
      {showNewYear && (
        <div className="newyear-overlay">
          <Confetti
            width={320}
            height={70}
            numberOfPieces={35}
            recycle={true}
            gravity={0.25}
          />

          <span className="newyear-text">
            🎉 Happy Holi 🎨 to you and your family  🎉
          </span>
        </div>
      )}

      {/* RIGHT NAV */}
      <nav className="header-nav" aria-label="Primary navigation">
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
