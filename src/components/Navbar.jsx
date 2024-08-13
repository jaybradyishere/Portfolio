import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="nav-bar">
        <div className="title">
          <h1>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
            >
              Jay Brady
            </a>
          </h1>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`list-items nav-items ${isOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("about");
              }}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
