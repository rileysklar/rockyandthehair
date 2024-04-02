import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
          {document.title}
        </div>
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
