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
import portfolioImage5 from "../assets/home/portfolio5.jpg";

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
            text="Your startup, in full bloom"
            duration={4}
            color="#141414"
            animationType="typing"
          />
        </p>
        <p className="hero-text">
          From branding and web design to mobile apps and ecommerce, we partner
          with founders to design, build, and launch digital products that solve
          real problems.
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
              thoughtful strategy.
              <br />
              bold execution. <br />
              real results.
            </p>

            <div className="know-more-content">
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
                <Link to="/ourservices">Learn More</Link>
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
            <p className="service-heading">our core services</p>

            <p className="service-text">
              Bloom Digitale partners with startups to design, build, and launch
              digital products, combining strategy, and engineering to support
              longterm growth.
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
    "Branding",
    "UI/UX",
    "Web Design",
    "Web Development",
    "Mobile App Development",
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
            <p className="services-portfolio-heading">What we do best</p>

            <p className="services-portfolio-text">
              We design and build digital products that help businesses grow,
              scale, and stand out in competitive markets
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
  const brandingDetail = ["Colors System", "Branding", "Logo Design"];
  const uiuxDetail = ["UI/UX", "User Experience", "Interface"];
  const mobileAppDevDetail = ["Mobile App", "Android & IOS", "Performance"];
  const fullStackDevDetail = ["Full-Stack", "Frontend", "Backend"];

  return (
    <div className="portfolio-details">
      <RightComponentAnimation>
        <Detail src={portfolioImage1} background="#141414">
          <>
            <p className="detail-heading">Website Design</p>
            <p className="detail-text">
              High performance websites built for clarity, speed, and growth.
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
            <p className="detail-heading">Branding</p>
            <p className="detail-text">
              Strategic brand identities designed to communicate trust, clarity,
              and confidence.
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
              Intutive, user centered interfaces that improve engagement, and
              conversion.
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
          src={portfolioImage5}
          background="#02ACB9"
          flexDirection="row-reverse"
        >
          <>
            <p className="detail-heading">Mobile App Development</p>
            <p className="detail-text">
              High-perfomance mobile apps for seamleess user experiences.
            </p>

            <div className="detail-boxes">
              {mobileAppDevDetail.map((detail) => (
                <div className="detail-box" key={detail}>
                  {detail}
                </div>
              ))}
            </div>
          </>
        </Detail>
      </LeftComponentAnimation>

      <RightComponentAnimation>
        <Detail src={portfolioImage4} background="#141414">
          <>
            <p className="detail-heading">Full Stack Development</p>
            <p className="detail-text">
              Scalable, secure and seamless frontend to backend integration
            </p>

            <div className="detail-boxes">
              {fullStackDevDetail.map((detail) => (
                <div className="detail-box" key={detail}>
                  {detail}
                </div>
              ))}
            </div>
          </>
        </Detail>
      </RightComponentAnimation>
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
          Trusted by brands we have helped grow
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
      name: "Georgia Umeh",
      role: "Co-founder, Aeonik",
      content: `The final website is fast, reliable, and well executed.
      Communication throughout the project was clear, and the team delivered exactly what we needed.
      We would gladly work with them again.`,
    },

    {
      name: "Tosan Adeyemi",
      role: "Brand Manager, Evacua",
      content: `Everything was delivered on schedule, and the impact was immediate. 
      Within days of launch, we saw a significant increase in traffic, and the solution
      has been easy to use and dependable.`,
    },

    {
      name: "Chidinma Okafor",
      role: "Founder, Shama Skincare",
      content: `Our brand finally reflects who we are, playful yet professional. The feedback from our partners, team, 
      and community has been incredibly positive, and the new identity feels right.`,
    },
  ];

  return (
    <>
      {testimonialData.map((testimonial, i) => (
        <div className="embla__slide" key={i}>
          <div className="testimony">
            <Testimonial name={testimonial.name} role={testimonial.role}>
              {testimonial.content}
            </Testimonial>
          </div>
        </div>
      ))}
    </>
  );
}

function Testimonial({ children, name = "", role = "" }) {
  return (
    <>
      <p className="testimony-text"> {children} </p>

      <div className="client-details">
        <div>
          <p> {name} </p>

          <p>{role} </p>
        </div>
      </div>
    </>
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
