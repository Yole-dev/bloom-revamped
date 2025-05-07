// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

import RequestForCallSection from "../components/RequestForCallSection";

// imported components
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";
import LetUsTalkBtn from "../components/LetUsTalkBtn";

// imported images
import image1 from "../assets/branding/image1.png";
import image2 from "../assets/branding/image2.png";
import image3 from "../assets/branding/image3.png";
import image4 from "../assets/branding/image4.png";
import image5 from "../assets/branding/image5.png";
import image6 from "../assets/branding/image6.png";

export default function Branding() {
  return (
    <PageAnimation className="sub-service-main-container">
      <div className="sub-service-sub-container">
        <HeaderSection />

        <MainSection>
          <BrandingGoals />
        </MainSection>
      </div>

      <ShamaBrandSection />

      <div className="sub-service-sub-container">
        <MainSection>
          <BrandingApproachSection />
        </MainSection>

        <RequestForCallSection />
      </div>
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="sub-service-header">
      <p>
        Find your harbor, where we nurture brands, forge identities, and create
        waves of lasting influence
      </p>

      <div className="sub-service-hero">
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
    <ComponentAnimation className="sub-service-goals">
      <p>Whatever your branding goals are, Bloom will help you succeed.</p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Brand identity design for a new business</p>
        <p>
          First impressions last longer. If you are going to work on your
          branding, you might as well do it right. As a new business, BLOOM will
          help with your brand messaging, logo, collateral and guidelines. We
          can also help with the design of your website.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Rebranding an existing business</p>
        <p>
          Is there a new direction for your company? Or is your brand identity
          now ancient and uninspiring? If yes, it’s time to refresh your brand.
          Rebranding is a big (and sometimes complicated) move, but we will help
          you navigate this seamlessly.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Design of additional brand stationary and assets.</p>
        <p>
          Every element of your brand should work together to create the right
          experience. Let’s work together create additional brand assets such as
          business cards, letterheads, packaging, social media banners, email
          templates, and much more.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Brand strategy and guideline development</p>
        <p>
          Your brand goes beyond logo and colours. It involves your messaging,
          your voice, your tone, and your culture. It also needs to be
          consistent. Through clearly defined brand guidelines, we will help you
          ensure that your brand is used the right way – every time.
        </p>
      </RightComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function ShamaBrandSection() {
  return (
    <ComponentAnimation className="shama-brand-section">
      <div className="shama-brand-heading">
        <p>SHAMA</p>
        <p>Branding eCommerce Website Design for a Luxury Selfcare Brand.</p>
      </div>

      <img src={image2} alt="shama brand website preview" />

      <div className="shama-brand-text">
        <p>
          We worked with the founder of SHAMA to bring her brand idea to life.
          Bloom created the logo, explored concepts for collateral and packaging
          materials, and finally, built a modern ecommerce website for the
          brand.
        </p>

        <Button
          width={163}
          height={49}
          background="#EE4200"
          borderRadius={31}
          fontSize={15}
          fontWeight={400}
          className="shama-brand-btn"
        >
          View Case Study
        </Button>
      </div>
    </ComponentAnimation>
  );
}

function BrandingApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p>The strategic approach to branding design</p>
        <p>
          Let’s take a closer look at how companies come up with their unique
          logos, colors, and messages that help people recognize and remember
          them.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – Creation of Your Brand Strategy</p>
          <p>
            Firstly we kick things off by diving into your business, goals, what
            makes you special, and who you're trying to reach. Once we've got
            that down, we'll polish up your brand message to make sure it
            shines.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design of your Brand Identity</p>
          <p>
            In this step, we start crafting your logo. Using insights from
            earlier, we explore concepts, colors, and fonts to offer brand
            identity options. Once finalized, the logo is delivered in various
            formats for both print and digital use.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image5} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Collateral Design</p>
          <p>
            After finalizing your logo, we proceed to create all necessary
            stationery and collateral. This encompasses business cards,
            letterhead, banners, flyers, invoices, icons, social media covers,
            email signatures, and more – everything aligned with your brand
            identity.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image6} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 4 – Brand Guideline Development</p>
          <p>
            Lastly, we compile your brand guidelines, a vital document outlining
            your brand identity elements, including fonts and color codes. It
            also provides clear instructions on proper logo usage.
          </p>
        </div>
      </RightComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}
