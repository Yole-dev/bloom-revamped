// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../assets/header_logo.png";

export default function Layout({ children }) {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleNavToggle() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <Logo />
        {/* 
        {!isOpen && (
          <ion-icon
            name="menu-sharp"
            className="hamburger-icon"
            onClick={handleNavToggle}
          ></ion-icon>
        )} */}
        {/* Desktop Navigation */}
        <div className="nav-container">
          <ul className="navbar">
            <NavList />
          </ul>

          <Button />
        </div>
        {/* Mobile Navigation */}
        {/* {isOpen && (
          <div className="mobile-nav-container">
            <ion-icon
              name="close-sharp"
              className="close-icon"
              onClick={handleNavToggle}
            ></ion-icon>

            <ul className="mobile-nav-bar">
              <NavList />
            </ul>
          </div>
        )} */}
      </header>

      {/* page contents */}
      <main>{children}</main>

      <footer></footer>
    </div>
  );
}

function Logo() {
  return <img src={headerLogo} alt="company logo" className="header-logo" />;
}

function NavList() {
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/ourservices", name: "Our Services" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/aboutus", name: "About us" },
    { path: "/blog", name: "Blog" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}

function Button() {
  return <button className="header-btn"> Let's talk </button>;
}
