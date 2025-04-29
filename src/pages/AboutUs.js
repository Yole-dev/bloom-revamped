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
