// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported reusable component
import CircleButton from "../components/Circlebtn";
import RequestForCallSection from "../components/RequestForCallSection";

// imported images
import image1 from "../assets/portfolio/portfolioImage1.png";
import image2 from "../assets/portfolio/portfolioImage1.png";
import image3 from "../assets/portfolio/portfolioImage1.png";
import image4 from "../assets/portfolio/portfolioImage1.png";
import image5 from "../assets/portfolio/portfolioImage1.png";

export default function Portfolio() {
  return (
    <PageAnimation className="portfolio-page-container">
      <HeaderSection />
      <RequestForCallSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <section className="portfolio-page-header">
      <LeftComponentAnimation className="portfolio-page-header-text">
        <p>Our Portfolios</p>

        <p>
          Showcasing Excellence, One Project at a Time – See How We've Helped
          Businesses Thrive with Stunning Designs and Impactful Solutions.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="portfolio-page-hero">
        <img src={image1} alt="hero" />

        <CircleButton
          width={101}
          height={100}
          fontSize={30}
          className="portfolio-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </RightComponentAnimation>
    </section>
  );
}
