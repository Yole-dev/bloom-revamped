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
        <MainSection>
          <BrandingGoals />
        </MainSection>
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

      <p>
        Branding power lies in fostering trust with unacquainted companies.
        Contemplate its implications for your business. The accuracy of branding
        is crucial, and our guidance ensures optimal results.
      </p>
    </ComponentAnimation>
  );
}

function MainSection({ children }) {
  return <section className="main-section-container">{children}</section>;
}

function BrandingGoals() {
  return (
    <section className="branding-goals">
      <p>Whatever your branding goals are, Bloom will help you succeed.</p>

      <LeftComponentAnimation className="branding-goals-content">
        <p>Brand identity design for a new business</p>
        <p>
          First impressions last longer. If you are going to work on your
          branding, you might as well do it right. As a new business, BLOOM will
          help with your brand messaging, logo, collateral and guidelines. We
          can also help with the design of your website.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="branding-goals-content">
        <p>Rebranding an existing business</p>
        <p>
          Is there a new direction for your company? Or is your brand identity
          now ancient and uninspiring? If yes, it’s time to refresh your brand.
          Rebranding is a big (and sometimes complicated) move, but we will help
          you navigate this seamlessly.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="branding-goals-content">
        <p>Design of additional brand stationary and assets.</p>
        <p>
          Every element of your brand should work together to create the right
          experience. Let’s work together create additional brand assets such as
          business cards, letterheads, packaging, social media banners, email
          templates, and much more.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="branding-goals-content">
        <p>Brand strategy and guideline development</p>
        <p>
          Your brand goes beyond logo and colours. It involves your messaging,
          your voice, your tone, and your culture. It also needs to be
          consistent. Through clearly defined brand guidelines, we will help you
          ensure that your brand is used the right way – every time.
        </p>
      </RightComponentAnimation>

      <Button
        width={300}
        height={103}
        borderRadius={54}
        background="#FF6016"
        fontSize={31}
        fontWeight={400}
        className="lets-talk-btn"
      >
        Let's Talk
        <span className="lets-talk-icon">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
      </Button>
    </section>
  );
}
