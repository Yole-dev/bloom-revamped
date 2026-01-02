import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import headerLogo from "../assets/logos/header_logo.PNG";
import footerLogo from "../assets/logos/logo_all_white.PNG";

// imported animation library
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

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

            <motion.div whileTap={{ scale: 0.9 }} onClick={handleNavToggle}>
              <ion-icon name="menu-outline"></ion-icon>
            </motion.div>
          </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav-container"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              <div className="mobile-nav">
                <Logo />

                <motion.div
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavToggle}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </motion.div>
              </div>

              <ul className="navbar">
                <NavList onNavToggle={handleNavToggle} />
              </ul>

              <motion.div
                variants={listItemVariants}
                custom={5} // Higher delay for button
                initial="hidden"
                animate="visible"
              >
                <Button onClick={handleNavToggle}>
                  <Link to="/contactus">Let's talk</Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function Logo() {
  return <img src={headerLogo} alt="company logo" className="header-logo" />;
}

function NavList({ onNavToggle }) {
  const [isDropDown, setIsDropDown] = useState(false);

  function handleDropDownToggle() {
    setIsDropDown(!isDropDown);
  }

  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/ourservices", name: "Our Services" },
    { path: "/portfolio", name: "Our Work" },
    { path: "/aboutus", name: "About us" },
    { name: "More" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.name}
          className={
            location.pathname === item.path
              ? "active"
              : item.name === "More"
              ? "more-drop-down"
              : ""
          }
          onClick={item.name !== "More" ? onNavToggle : handleDropDownToggle}
        >
          <Link to={item?.path}>
            {item.name}
            {item.name === "More" && (
              <ion-icon
                name={`${
                  isDropDown ? "chevron-up-outline" : "chevron-down-outline"
                }`}
              ></ion-icon>
            )}
          </Link>

          {item.name === "More" && isDropDown && (
            <DropDownNav onNavToggle={onNavToggle} location={location} />
          )}
        </li>
      ))}
    </>
  );
}

function DropDownNav({ onNavToggle, location }) {
  const navItems = [
    { path: "/branding", name: "Branding" },
    { path: "/webdevelopment", name: "Web Development" },
    { path: "/mobileapp_development", name: "Mobile App Development" },
    { path: "/ui_ux", name: "UI/UX Design" },
    { path: "/ecommerce", name: "Ecommerce" },
  ];

  return (
    <ul className="drop-down-nav">
      {navItems.map((item) => (
        <li
          key={item?.path}
          className={location.pathname === item.path ? "active" : ""}
          onClick={onNavToggle}
        >
          <Link to={item?.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
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
        Need any of <br /> these Services?
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
    { path: "/portfolio", name: "Our Work" },
    { path: "/aboutus", name: "About Us" },
    { path: "/contactus", name: "Contact Us" },
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
      <span>
        {" "}
        <span className="copyright-sign">&copy;</span> {year} Bloom Digitale.
      </span>
      <span>
        All rights reserved <Link to="/privacy_policy">Privacy policy</Link>,
        <Link to="/terms_of_service">Terms of service</Link> .
      </span>
    </p>
  );
}
