import CircleButton from "../components/Circlebtn";
import heroImage from "../assets/home/hero_image.png";
import portfolioImage1 from "../assets/home/portfolio1.png";
import portfolioImage2 from "../assets/home/portfolio2.png";
import portfolioImage3 from "../assets/home/portfolio3.png";
import portfolioImage4 from "../assets/home/portfolio4.png";

export default function Home() {
  return (
    <div className="page-container">
      <HeroSection />
      <ServicesSection />
      <ServicesPortfolio />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <p className="hero-heading">Choose Bloom as your web design agency</p>
      <p className="hero-text">
        Provide top quality service with unlimited revisions, dedicated to
        helping businesses thrive through captivating and effective visuals.
      </p>

      <div className="hero-image-container">
        <CircleButton fontSize={26} className="hero-img-circle">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      <div className="know-more-section">
        <p className="know-more-heading">
          Provide the best service, with ideas that are out of the box
        </p>

        <div className="know-more-content">
          <p className="know-more-text">
            At Boom Agency we’re passionate about customer experience and team
            culture. When you chose to join Bloom Agency you are joining a team
            that genuinely loves what they do.
          </p>

          <button className="know-more-btn">
            Know more
            <span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="service-container">
      <div className="service-section">
        <div className="service-descriptions">
          <p className="service-heading">We offer several service for you</p>

          <p className="service-text">
            Bloom is your one-stop web design agency, offering a full range of
            services to elevate your brand, enhance your online presence, and
            drive business growth.
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
  );
}

function ServiceList() {
  const serviceList = [
    "Web Design",
    "Web Development",
    "App Design",
    "Branding Design",
    "UI/UX",
    "Ecommerce",
    "Full Stack Development",
  ];
  return (
    <div className="service-list">
      {serviceList.map((service, i) => (
        <div className="service" key={i}>
          {service}
        </div>
      ))}
    </div>
  );
}

function ServicesPortfolio() {
  return (
    <section className="services-portfolio-section">
      <div className="services-portfolio">
        <div className="services-portfolio-header">
          <p className="services-portfolio-heading">
            Selected work we’ve done so far
          </p>

          <p className="services-portfolio-text">
            We’ve loved working with many fantastic companies, and are really
            proud of what we`ve achieved together.
          </p>
        </div>

        <PortfolioDetails />

        <div className="service-portfolio-footer">
          <p>
            Take a Look <br /> at What
            <span>
              <hr />
            </span>
          </p>

          <CircleButton
            height={180.77}
            width={180.77}
            fontSize={22.6}
            className="service-portfolio-footer-btn"
          >
            All Work
          </CircleButton>

          <p>
            We Can Do <br />
            <span>
              <hr />
            </span>
            For You
          </p>
        </div>
      </div>
    </section>
  );
}

function PortfolioDetails() {
  const websiteDetail = ["Website", "Branding", "Web App"];
  const brandingDetail = ["Colors", "Branding", "Logo"];
  const uiuxDetail = ["UI/UX", "Experience", "Interface"];
  const fullstackWebDetail = ["Development", "Frontend", "Backend"];

  return (
    <div className="portfolio-details">
      <Detail src={portfolioImage1} background="#141414">
        <>
          <p className="detail-heading">Website Design</p>
          <p className="detail-text">
            Bringing Your Brand to Life with Exceptional Web Design
          </p>

          <div className="detail-boxes">
            {websiteDetail.map((detail) => (
              <div className="detail-box" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </>
      </Detail>

      <Detail
        src={portfolioImage2}
        background="#ff6016"
        flexDirection="row-reverse"
      >
        <>
          <p className="detail-heading">Branding Design</p>
          <p className="detail-text">
            From Concept to identity - Build Your Brand with Us
          </p>

          <div className="detail-boxes">
            {brandingDetail.map((detail) => (
              <div className="detail-box" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </>
      </Detail>

      <Detail src={portfolioImage3} background="#141414">
        <>
          <p className="detail-heading">UI/UX</p>
          <p className="detail-text">
            Blending Aesthetics with Functionality for Impactful Experiences.
          </p>

          <div className="detail-boxes">
            {uiuxDetail.map((detail) => (
              <div className="detail-box" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </>
      </Detail>

      <Detail
        src={portfolioImage4}
        background="#0755e9"
        flexDirection="row-reverse"
      >
        <>
          <p className="detail-heading">Full Stack Web Development</p>
          <p className="detail-text">
            From Frontend to Backend - We Handle It All.
          </p>

          <div className="detail-boxes">
            {fullstackWebDetail.map((detail) => (
              <div className="detail-box" key={detail}>
                {detail}
              </div>
            ))}
          </div>
        </>
      </Detail>
    </div>
  );
}

function Detail({
  children,
  flexDirection = "",
  src = "",
  fontSize = 18,
  background = "",
  width = 86.45,
  height = 86.45,
}) {
  const detailStyle = {
    display: "flex",
    flexDirection,
    alignItems: "center",
    gap: "8rem",
  };

  return (
    <div style={detailStyle}>
      <div className="service-image-container">
        <img
          src={src}
          alt="marketing pic"
          className="service-portfolio-image"
        />
        <CircleButton
          fontSize={fontSize}
          background={background}
          width={width}
          height={height}
          className="service-circle-button"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </CircleButton>
      </div>

      <div className="content-container">{children}</div>
    </div>
  );
}
