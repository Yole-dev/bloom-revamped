//imported reusable component
import CircleButton from "../components/Circlebtn";

// imported images
import serviceImage1 from "../assets/our_services/service_image1.png";
import serviceImage2 from "../assets/our_services/service_image2.png";

export default function OurServices() {
  return (
    <div className="our-service-page-container">
      <HeadingSection />
    </div>
  );
}

function HeadingSection() {
  return (
    <section className="heading-section">
      <div className="heading-first-section">
        <div>
          <CircleButton
            fontSize={30}
            className="heading-circle"
            width={100}
            height={100}
          >
            <ion-icon name="arrow-down-outline"></ion-icon>
          </CircleButton>
          <img src={serviceImage1} alt="Header section hero" />
        </div>

        <div>
          <p>See Our Expertise in Digital Solution</p>

          <p>
            Explore our range of services designed to elevate your brand ,
            enhance user experience and drive business growth.
          </p>
        </div>
      </div>

      <div className="heading-second-section">
        <img src={serviceImage2} alt="" />

        <div>
          <div>
            <p>Featured Work</p>

            <p>Branding Design</p>
          </div>

          <p>
            We worked with the founder of SHAMA to bring her brand idea to life.
            Bloom created the logo, explored concepts for collateral and
            packaging materials, and finally, built a modern ecommerce website
            for the brand.
          </p>
        </div>
      </div>
    </section>
  );
}
