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
        <p>Brand Design</p>
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
        Branding is how people recognize you, trust you, and choose you. At
        Bloom Digitale, we help businesses shape clear, credible brand
        identities that communicate value instantly and consistently, across
        every touchpoint.
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
      <p>
        No matter where your brand is today, we help you move forward with
        clarity and confidence.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Brand Identity Design for New Businesses</p>
        <p>
          First impressions matter. If you’re building a new business, your
          brand needs to be clear, credible, and memorable from day one. We
          design logos, brand visuals, messaging, and guidelines that give your
          business a strong foundation and a professional presence from the
          start.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Rebranding for evolving Businesses</p>
        <p>
          If your brand no longer reflects who you are or where you’re headed,
          it’s time for a refresh. We help businesses reposition, modernize, and
          realign their brand identity, without losing what already works.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Brand Assets & Marketing Collateral.</p>
        <p>
          Consistency builds trust. We design supporting brand assets such as
          business cards, letterheads, packaging, social media graphics, email
          templates, and more, ensuring your brand looks professional everywhere
          it appears.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Brand Strategy & Guidelines</p>
        <p>
          A strong brand goes beyond visuals. We define your brand’s voice,
          positioning, values, and messaging, then document everything in clear
          brand guidelines, so your brand is used correctly and consistently at
          all times.
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
        <p>SHAMA SKINCARE</p>
        <p>A Luxury Skincare Brand, Designed to Sell and Stand Out.</p>
      </div>

      <img src={image2} alt="shama brand website preview" />

      <div className="shama-brand-text">
        <p>
          We helped SHAMA transform a refined skincare concept into a cohesive
          luxury brand. From brand identity and packaging to a modern ecommerce
          experience, every detail was crafted to communicate quality, trust,
          and elegance, while making it easy for customers to explore and
          purchase with confidence.
        </p>
      </div>
    </ComponentAnimation>
  );
}

function BrandingApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p>
          Our Process <br />A strategic approach to building strong,
          recognizable brandsn
        </p>
        <p>
          Discover our systematic approach to crafting unique identities, from
          visual language to core messaging, designed to command attention and
          drive long-term recognition.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – Brand Strategy</p>
          <p>
            We start by understanding your business, goals, audience, and what
            sets you apart. This foundation guides every decision that follows,
            from messaging to visual identity.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Brand Identity Design</p>
          <p>
            Using strategic insights, we design your logo, colors, and
            typography to create a cohesive identity that works across digital
            and print.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image5} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Brand Collateral</p>
          <p>
            We design essential brand assets that bring your identity to life,
            from stationery and marketing materials to digital and social media
            assets.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image6} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 4 – Brand Guidelines</p>
          <p>
            We document your brand identity in a clear, practical guide;
            covering logo usage, colors, typography, and visual rules to ensure
            consistency everywhere.
          </p>
        </div>
      </RightComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}
