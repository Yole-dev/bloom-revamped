import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import headerLogo from "../assets/header_logo.png";
import footerLogo from "../assets/footer_logo.png";

// imported animation component
import PageAnimation from "../components/PageAnimation";

// imported reusable component
import CircleButton from "./Circlebtn";
import Button from "./Button";

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageAnimation>
      <div className="app-container">
        <Header />

        {/* page contents */}
        <main className="main">{children}</main>

        <Footer />
      </div>
    </PageAnimation>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {/* toggling visibility on screen width change */}

      <div className="header">
        <Logo />

        <div className="nav-container">
          <ul className="navbar">
            <NavList />
          </ul>

          <Button>
            <Link to="/contactus">Let's talk</Link>
          </Button>
        </div>
      </div>

      <div className="mobile-header">
        {!isOpen && (
          <div className="mobile-nav">
            <Logo />

            <ion-icon name="menu-outline" onClick={handleNavToggle}></ion-icon>
          </div>
        )}

        {isOpen && (
          <div className="mobile-nav-container">
            <div className="mobile-nav">
              <Logo />

              <ion-icon
                name="close-outline"
                onClick={handleNavToggle}
              ></ion-icon>
            </div>
          </div>
        )}
      </div>
    </>
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

      <Button
        background="#ffffff"
        color="#141414"
        fontSize={13.81}
        fontWeight={500}
        width={119.89}
        height={37.66}
        borderRadius={62.77}
      >
        <Link to="/contactus">Let's talk</Link>

        <CircleButton
          height={27.62}
          width={27.62}
          border="none"
          background="#ff6016"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </CircleButton>
      </Button>
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
      <img src={footerLogo} alt="" className="footer-logo" />
      <FooterNavList />
    </div>
  );
}

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
