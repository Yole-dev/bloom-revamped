import React from "react";
import { Link } from "react-router-dom";

// imported carousel library
import useEmblaCarousel from "embla-carousel-react";

// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import TextAnimation from "../components/TextAnimation";

// imported reusable button component
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";

// imported images
import heroImage from "../assets/home/hero_image.png";
import portfolioImage1 from "../assets/home/portfolio1.png";
import portfolioImage2 from "../assets/home/portfolio2.png";
import portfolioImage3 from "../assets/home/portfolio3.png";
import portfolioImage4 from "../assets/home/portfolio4.png";
import clientImage from "../assets/home/client2.png";

export default function Home() {
  return (
    <PageAnimation>
      <div className="page-container">
        <HeroSection />
        <ServicesSection />
        <ServicesPortfolio />
        <TestimonialsSection />
      </div>
    </PageAnimation>
  );
}

function HeroSection() {
  return (
    <ComponentAnimation>
      <section className="hero-section">
        <p className="hero-heading">
          <TextAnimation
            text="Choose Bloom Digitale as your web design agency"
            duration={4}
            color="#141414"
            animationType="typing"
          />
        </p>
        <p className="hero-text">
          Provide top quality service with unlimited revisions, dedicated to
          helping businesses thrive through captivating and effective visuals.
        </p>

        <ComponentAnimation>
          <div className="hero-image-container">
            <CircleButton fontSize={26} className="hero-img-circle">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </CircleButton>

            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </ComponentAnimation>

        <ComponentAnimation>
          <div className="know-more-section">
            <p className="know-more-heading">
              Provide the best service, with ideas that are out of the box
            </p>

            <div className="know-more-content">
              <p className="know-more-text">
                At Bloom Digitale we’re passionate about customer experience and
                team culture. When you chose to join Bloom Digitale Agency you
                are joining a team that genuinely loves what they do.
              </p>

              <Button
                width={300}
                height={103}
                gap={2}
                borderRadius={53}
                fontSize={31}
                fontWeight={400}
                background="#ff6016"
                className="know-more-btn"
              >
                <Link to="/ourservices">Know more</Link>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Button>
            </div>
          </div>
        </ComponentAnimation>
      </section>
    </ComponentAnimation>
  );
}

function ServicesSection() {
  return (
    <ComponentAnimation>
      <section className="service-container">
        <div className="service-section">
          <div className="service-descriptions">
            <p className="service-heading">We offer several service for you</p>

            <p className="service-text">
              Bloom Digitale is your one-stop web design agency, offering a full
              range of services to elevate your brand, enhance your online
              presence, and drive business growth.
            </p>
          </div>

          <ComponentAnimation>
            <ServiceList />
          </ComponentAnimation>
        </div>
      </section>
    </ComponentAnimation>
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
    <ComponentAnimation>
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

          <ComponentAnimation className="service-portfolio-footer">
            <p>
              Take a Look <br /> at What
              <span>
                <hr />
              </span>
            </p>

            {/* remember to add onclick event that leads to the portfolio page or so */}
            <CircleButton
              height={180.77}
              width={180.77}
              fontSize={22.6}
              className="service-portfolio-footer-btn"
              cursor="pointer"
            >
              <Link to="/portfolio">All Work</Link>
            </CircleButton>

            <p>
              We Can Do <br />
              <span>
                <hr />
              </span>
              For You
            </p>
          </ComponentAnimation>
        </div>
      </section>
    </ComponentAnimation>
  );
}

function PortfolioDetails() {
  const websiteDetail = ["Website", "Branding", "Web App"];
  const brandingDetail = ["Colors", "Branding", "Logo"];
  const uiuxDetail = ["UI/UX", "Experience", "Interface"];
  const fullstackWebDetail = ["Development", "Frontend", "Backend"];

  return (
    <div className="portfolio-details">
      <RightComponentAnimation>
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
      </RightComponentAnimation>

      <LeftComponentAnimation>
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
      </LeftComponentAnimation>

      <RightComponentAnimation>
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
      </RightComponentAnimation>

      <LeftComponentAnimation>
        <Detail
          src={portfolioImage4}
          background="#02ACB9"
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
      </LeftComponentAnimation>
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
    <div style={detailStyle} className="detail-container">
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

function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
      "(max-width: 767px)": { slidesToScroll: 1, align: "center" },
    },
  });

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  React.useEffect(() => {
    if (emblaApi) console.log("Embla ready!", emblaApi);
  }, [emblaApi]);

  return (
    <ComponentAnimation>
      <div className="testimonial-section">
        <p className="testimonial-heading">
          What our Clients are saying about Us
        </p>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <Testimonials emblaApi={emblaApi} />
          </div>
        </div>

        <CarouselButtons onPrev={scrollPrev} onNext={scrollNext} />
      </div>
    </ComponentAnimation>
  );
}

function Testimonials({ emblaApi }) {
  const testimonialData = [
    {
      name: "Ashley Cooper",
      content: `Bloom Digitale delivered the site with the timeline as they requested. In the
        end, the client found a 50 increase in traffic with in days since its
        launch. They also had an impressive ability to use technologies that the
        company hasn't used, which have also proved to be easy to use and
        reliable.`,
    },

    {
      name: "Anton de Swardt",
      content: `While the company wishes they had more time to work out the kinks with
        the Bloom Digitale, they are quite happy with the result of the project. The
        resulting website that the team devoloped is fast and the communication
        with the vender was very good. The company will work with them again.`,
    },

    {
      name: "Samuel King",
      content: `Bloom Digitale of work, our brand now has the image we were looking for -
        playful yet professionals. We have received positive from partners,
        the team, and our community to the new look of our Brand`,
    },

    {
      name: "Page",
      content: `Bloom Digitale of work, our brand now has the image we were looking for -
        playful yet professionals. `,
    },

    {
      name: "Roy",
      content: `We have received positive from partners,
        the team, and our community to the new look of our Brand`,
    },

    {
      name: "Ronald",
      content: `Bloom Digitale does great work, our brand now has the image we were looking for -
        playful yet professionals. We have received positive from partners,
        the team, and our community to the new look of our Brand`,
    },
  ];

  return (
    <>
      {testimonialData.map((testimonial, i) => (
        <div className="embla__slide" key={i}>
          <div className="testimony">
            <Testimonial name={testimonial.name}>
              {testimonial.content}
            </Testimonial>
          </div>
        </div>
      ))}
    </>
  );
}

function Testimonial({
  children,
  name = "",
  src = `${clientImage}`,
  rating = 5,
}) {
  return (
    <>
      <p className="testimony-text"> {children} </p>

      <div className="client-details">
        <img src={src} alt={name} className="user-image" />

        <div>
          <p> {name} </p>

          <StarRating rating={rating} />
        </div>
      </div>
    </>
  );
}

function StarRating({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: rating }, () => (
        <ion-icon name="star" className="star-icon"></ion-icon>
      ))}
    </div>
  );
}

function CarouselButtons({ onPrev, onNext }) {
  return (
    <div className="carousel-buttons-container">
      <CircleButton
        background="#F1F6F8"
        width={44.05}
        height={44.05}
        color="#141414"
        fontSize={13}
        border="none"
        className="previous"
        onClick={onPrev}
        role="button"
        type="button"
        ariaLabel="Previous testimonial"
      >
        <ion-icon name="arrow-back"></ion-icon>
      </CircleButton>

      <CircleButton
        background="#ff6016"
        width={44.05}
        height={44.05}
        fontSize={13}
        border="none"
        className="next"
        onClick={onNext}
        role="button"
        type="button"
        ariaLabel="Next testimonial"
      >
        <ion-icon name="arrow-forward"></ion-icon>
      </CircleButton>
    </div>
  );
}
