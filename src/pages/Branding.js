// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

import RequestForCallSection from "../components/RequestForCallSection";

// imported components
import CircleButton from "../components/Circlebtn";
import Box from "../components/Box";
import Button from "../components/Button";

// imported images
import image1 from "../assets/branding/image1.png";
import image2 from "../assets/branding/image2.png";
import image3 from "../assets/branding/image3.png";
import image4 from "../assets/branding/image4.png";
import image5 from "../assets/branding/image5.png";
import image6 from "../assets/branding/image6.png";
import image7 from "../assets/branding/image7.png";
import image8 from "../assets/branding/image8.png";

export default function Branding() {
  return (
    <PageAnimation className="branding-main-container">
      <div className="branding-sub-container">
        <HeaderSection />
      </div>

      <div className="branding-sub-container">
        <RequestForCallSection />
      </div>
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="branding-header">
      <p>
        Find your harbor, where we nurture brands, forge identities, and create
        waves of lasting influence
      </p>

      <div className="branding-hero">
        <p>Branding And Design Agency</p>
        <img src={image1} alt="" />
        <CircleButton
          fontSize={30}
          height={100}
          width={101}
          className="request-us-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </div>
    </ComponentAnimation>
  );
}
