import CircleButton from "../components/Circlebtn";
import heroImage from "../assets/home/hero_image.png";

export default function Home() {
  return (
    <div className="page-container">
      <HeroSection />
      <ServicesSection />
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
