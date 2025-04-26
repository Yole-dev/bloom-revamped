//imported reusable component
import CircleButton from "../components/Circlebtn";

// imported images
import serviceImage1 from "../assets/our_services/service_image1.png";
import serviceImage2 from "../assets/our_services/service_image2.svg";
import serviceImage3 from "../assets/our_services/service_image3.png";
import serviceImage4 from "../assets/our_services/service_image4.png";
import serviceImage5 from "../assets/our_services/service_image5.png";
import serviceImage6 from "../assets/our_services/service_image6.png";

export default function OurServices() {
  return (
    <div className="our-service-page-container">
      <HeadingSection />
      <OurServiceSection />
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

function OurServiceSection() {
  return (
    <section className="our-services-section-container">
      <div className="our-services-section">
        <div>
          <div>
            <img src={serviceImage3} alt="" />

            <p>Branding Design</p>
          </div>

          <p>
            Branding Design Your website will be designed to render beautifully
            across all devices – desktops, tablets, and mobile.
          </p>
        </div>

        <div>
          <div>
            <img src={serviceImage4} alt="" />

            <p>Web Development</p>
          </div>

          <p>
            We offers tailored solution that create visually stunning, highly
            functional website optimize for seamless user experience across all
            device
          </p>
        </div>

        <div>
          <div>
            <img src={serviceImage5} alt="" />

            <p>UI/UX Design</p>
          </div>

          <p>
            Designing intuitive and engaging user interface that enhance the
            overall user experience.
          </p>
        </div>

        <div>
          <div>
            <img src={serviceImage6} alt="" />

            <p>Ecommerce Solutions</p>
          </div>

          <p>
            Building and optimizing online stores that drive sales and provide a
            seamless shopping experience.
          </p>
        </div>
      </div>

      <div className="contact-us-section">
        <div>
          <CircleButton
            fontSize={30}
            background="#FF6016"
            width={100}
            height={100}
            className="odd-icon"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </CircleButton>
        </div>

        <div>
          <div>
            <p>Ready to elevaate your brand with our expert services?</p>

            <p>Contact us today to discuss your project and get started</p>
          </div>

          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
