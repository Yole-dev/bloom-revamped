// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported reusable component
import CircleButton from "../components/Circlebtn";
import RequestForCallSection from "../components/RequestForCallSection";
import Box from "../components/Box";

// imported images
import image1 from "../assets/portfolio/portfolioImage1.png";
import image2 from "../assets/portfolio/portfolioImage2.png";
import image3 from "../assets/portfolio/portfolioImage3.png";
import image4 from "../assets/portfolio/portfolioImage4.png";
import image5 from "../assets/portfolio/portfolioImage5.png";
import image6 from "../assets/portfolio/portfolioImage6.png";
import image7 from "../assets/portfolio/portfolioImage7.png";
import image8 from "../assets/portfolio/portfolioImage8.png";

export default function Portfolio() {
  return (
    <PageAnimation className="portfolio-page-container">
      <HeaderSection />
      <PortfolioSection />
      <RequestForCallSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <section className="portfolio-page-header">
      <LeftComponentAnimation className="portfolio-page-header-text">
        <p>Our Work</p>

        <p>
          A selection of digital products we have designed and built for
          ambitious brands.
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

function PortfolioSection() {
  return (
    <section className="portfolio-works-section">
      <div className="works-section">
        <LeftComponentAnimation className="work-box">
          <p>good school branding</p>

          <Box background="#94C8CB" className="portfolio-box">
            <img src={image2} alt="" />
          </Box>
        </LeftComponentAnimation>

        <RightComponentAnimation className="work-box">
          <p>skincare ecommerce website</p>

          <Box background="#667B5B" className="portfolio-box">
            <img src={image3} alt="" />
          </Box>
        </RightComponentAnimation>

        <LeftComponentAnimation className="work-box">
          <p>fintech mobile app</p>

          <Box background="#E7E7E7" className="portfolio-box">
            <img src={image4} alt="" />
          </Box>
        </LeftComponentAnimation>

        <RightComponentAnimation className="work-box">
          <p>artisan</p>

          <Box background="#343862" className="portfolio-box">
            <img src={image5} alt="" />
          </Box>
        </RightComponentAnimation>
      </div>

      <ComponentAnimation className="work-box">
        <Box
          width={1237}
          height={659.33}
          background="#BED2FF"
          className="portfolio-box"
        >
          <img src={image6} alt="" />
        </Box>
      </ComponentAnimation>

      <div className="works-section">
        <LeftComponentAnimation className="work-box">
          <p>evalua</p>

          <Box background="#E7E7E7" className="portfolio-box">
            <img src={image7} alt="" />
          </Box>
        </LeftComponentAnimation>

        <RightComponentAnimation className="work-box">
          <p>shipment</p>

          <Box background="#43BD60" className="portfolio-box">
            <img src={image8} alt="" />
          </Box>
        </RightComponentAnimation>
      </div>
    </section>
  );
}
