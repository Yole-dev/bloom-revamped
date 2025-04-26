// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../assets/header_logo.png";
// import footerLogo from "../assets/footer_logo.png";

import CircleButton from "./Circlebtn";

export default function Layout({ children }) {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleNavToggle() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="app-container">
      <Header />

      {/* page contents */}
      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />

      <div className="nav-container">
        <ul className="navbar">
          <NavList />
        </ul>

        <Button />
      </div>
    </header>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-container">
        <FooterHero />
        <div className="footer-sub-container">
          <FooterNav />
          <hr />
          <FooterCopyrightText />
        </div>
      </div>
    </footer>
  );
}

function FooterHero() {
  return (
    <div className="footer-hero">
      <FooterHeroTexts />
      <FooterIcons />
    </div>
  );
}

function FooterHeroTexts() {
  return (
    <div className="footer-hero-texts">
      <p>
        Want to Start <br /> a Project?
      </p>

      <button className="footer-contact-btn">
        Let's talk
        <span>
          <CircleButton
            height={27.62}
            width={27.62}
            border="none"
            background="#ff6016"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </CircleButton>
        </span>
      </button>
    </div>
  );
}

function FooterIcons() {
  return (
    <ul className="social-icons">
      <li>
        <ion-icon name="logo-instagram"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-behance"></ion-icon>
      </li>
      <li>
        <ion-icon name="logo-dribbble"></ion-icon>
      </li>

      <li>
        <ion-icon name="logo-twitter"></ion-icon>
      </li>

      <li>
        <ion-icon name="logo-linkedin"></ion-icon>
      </li>
    </ul>
  );
}

function FooterNav() {
  return (
    <div className="footer-nav">
      <Logo />
      <FooterNavList />
    </div>
  );
}

// use the FooterLogo component after the image issue is fixed from rendering a blank image

// function FooterLogo() {
//   return (
//     <img src={footerLogo} alt="white company logo" className="footer-logo" />
//   );
// }

function FooterNavList() {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/ourservices", name: "Our Services" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/aboutus", name: "About us" },
    { path: "/blog", name: "Blog" },
    { path: "/branding", name: "Branding" },
    { path: "/webdevelopment", name: "Web Development" },
    { path: "/ui_ux", name: "UI/UX Design" },
    { path: "/ecommerce", name: "Ecommerce" },
  ];

  return (
    <ul className="footer-nav-list">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function FooterCopyrightText() {
  const year = new Date().getFullYear();

  return (
    <p className="copyright-text">
      {year} Bloom. All rights reserved Privacy policy, Terms of service, Cookie
      settings.
    </p>
  );
}
