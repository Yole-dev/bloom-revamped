// imported animation components
import ComponentAnimation from "../components/ComponentAnimation";
import PageAnimation from "../components/PageAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported reusable component
import CircleButton from "../components/Circlebtn";
import Box from "../components/Box";
import RequestForCallSection from "../components/RequestForCallSection";

// imported images
import image1 from "../assets/about_us/aboutImage1.png";
import image2 from "../assets/about_us/aboutImage2.png";
import image3 from "../assets/about_us/aboutImage3.png";
import image4 from "../assets/about_us/aboutImage4.png";
import image5 from "../assets/about_us/aboutImage5.png";
import image6 from "../assets/about_us/aboutImage6.png";
import image7 from "../assets/about_us/aboutImage7.png";

export default function AboutUs() {
  return (
    <PageAnimation className="about-us-container">
      <HeaderSection />
      <MainSection />
      <RequestForCallSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="about-us-header">
      <p>
        Learn about our commiment to excellence, innovation and the principle
        that guides our work every day.
      </p>

      <div className="about-us-hero">
        <p>About Us</p>
        <img src={image1} alt="" />
        <CircleButton
          background="#ff6016"
          fontSize={30}
          height={100}
          width={101}
          className="about-us-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </div>
    </ComponentAnimation>
  );
}

function MainSection() {
  return (
    <section className="company-bio">
      <LeftComponentAnimation className="team">
        <div>
          <ion-icon name="code-outline" className="code-icon"></ion-icon>
          <p>
            {"\u00a0"}Our team of experts works tirelessly to bring your vision
            to life, ensuring every project we undertake not only meets but
            exceeds expectations. We are dedicated to transforming your ideas
            into impactful digital experiences that resonate with your audience
            and drive success. Let me know if you want me to refine or rewrite
            it in a different style.
          </p>
          <ion-icon name="code-slash-outline" className="code-icon"></ion-icon>
        </div>

        <Box
          background="#D9D9D9"
          height={147}
          width={561}
          borderRadius={2}
        ></Box>
      </LeftComponentAnimation>

      <RightComponentAnimation>
        <Box
          width={614}
          height={491}
          gap={2}
          background="#5B94FF"
          color="#ffffff"
          borderRadius={2}
          flexDirection="column"
          className="about"
        >
          <p>about us</p>

          <p>
            We believe in the power of collaboration and creativity. By
            partnering closely with our clients, we gain a deep understanding of
            their unique needs and goals, allowing us to deliver customized
            solutions that truly make a difference.
            <br /> <br />
            Our holistic approach integrates design, technology, and strategy to
            create seamless and engaging digital experiences. By staying ahead
            of the curve and embracing the latest trends and technologies, we
            ensure that we provide cutting edge solutions that not only address
            current challenges but also anticipate future opportunities. Let us
            help you navigate the digital landscape and achieve your business
            objectives with Bloom.
          </p>
        </Box>
      </RightComponentAnimation>
    </section>
  );
}
