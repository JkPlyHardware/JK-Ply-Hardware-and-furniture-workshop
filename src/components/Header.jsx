import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-left">
        <a href="#top" aria-label="JK Ply Hardware Home">
          <img
            src={logo}
            alt="JK Ply Hardware and Furniture Workshop logo"
            className="site-logo"
            width="55"
            height="55"
            loading="eager"
            fetchpriority="high"
          />
        </a>

        <span className="site-title">
          JK Ply Hardware & Furniture Workshop
        </span>
      </div>

      <nav className="header-nav" aria-label="Primary navigation">
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
