// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported component
import RequestForCallSection from "../components/RequestForCallSection";

// imported components
import LetUsTalkBtn from "../components/LetUsTalkBtn";

// imported images
import image1 from "../assets/ecommerce/image1.png";
import image2 from "../assets/ecommerce/image2.png";
import image3 from "../assets/ecommerce/image3.png";
import image4 from "../assets/ecommerce/image4.png";

export default function Ecommerce() {
  return (
    <PageAnimation className="sub-service-main-container">
      <div className="sub-service-sub-container">
        <HeaderSection />

        <MainSection>
          <DevelopmentGoals />

          <EcommerceApproachSection />
        </MainSection>
      </div>

      <WhatToExpectSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="sub-service-header">
      <div className="sub-services-new-heading">
        <div>
          <p>Ecommerce Solutions</p>
          <p>You need a high converting online store that drives sales.</p>
        </div>

        <img src={image1} alt="" />
      </div>

      <p className="web-dev-heading-description">
        From design to development, we create eCommerce experiences built to
        convert visitors into loyal, repeat customers.
      </p>
    </ComponentAnimation>
  );
}

function MainSection({ children }) {
  return <section className="main-section-container">{children}</section>;
}

function DevelopmentGoals() {
  return (
    <ComponentAnimation className="sub-service-goals">
      <p>
        No matter your business model or product, we build online stores
        designed to sell, scale, and succeed.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>An eCommerce experience that builds trust and drives confidence.</p>
        <p>
          Your online store is your digital storefront. From clean design to
          secure payments and intuitive navigation, we create shopping
          experiences that feel reliable, professional, and easy to use, so
          customers feel confident buying from you.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>A shopping journey designed to convert visitors into customers.</p>
        <p>
          We design eCommerce experiences that guide users effortlessly, from
          product discovery to checkout. Every interaction is intentional,
          reducing friction and increasing conversions at every stage of the
          buyer journey.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>A scalable eCommerce platform built for performance and growth.</p>
        <p>
          We build high-performance online stores with fast load times, smooth
          checkout flows, secure payment integrations, and flexible
          architectures that grow with your business.
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function EcommerceApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br />A strategic, conversion-focused approach to
          eCommerce design.
        </p>
        <p>
          We combine strategy, creativity, and user insights to build
          high-performing eCommerce experiences that drive sales, build trust,
          and support long-term growth.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – eCommerce Strategy</p>
          <p>
            We start by understanding your business, products, and target
            customers. If you already have an online store, we assess its
            performance and uncover opportunities for improvement. Through
            customer research and competitor analysis, we define a clear
            strategy, covering structure, user flows, and content, to support an
            optimized shopping experience.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            Shoppers make decisions visually and emotionally. That’s why we
            combine typography, color psychology, and layout principles to
            design visually compelling storefronts that guide users
            effortlessly, making it easy to discover products, compare options,
            and move confidently toward checkout.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Development Optimization</p>
          <p>
            Once the design is finalized, we build a high-performance eCommerce
            store focused on speed, reliability, and conversions. From secure
            payment integrations and optimized product pages to smooth checkout
            flows and advanced features like subscriptions and customer portals,
            every element is engineered to scale with your business.
          </p>
        </div>
      </LeftComponentAnimation>
    </ComponentAnimation>
  );
}

function WhatToExpectSection() {
  return (
    <ComponentAnimation className="expectation-container">
      <p>
        What You Can Expect <br />A high-converting eCommerce website that is
        fast, responsive, and built to scale.
      </p>

      <section className="expectation-section ecommerce-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            User Centered Design <br /> <br />
            We design with your customers in mind, creating intuitive
            experiences that make browsing and buying effortless.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Sales <br /> <br />
            Every element is designed to increase engagement, boost conversions,
            and improve customer retention.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Secure and Scalable <br /> <br />
            We build robust platforms with secure payment processing and
            future-ready scalability.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Data Driven Insights <br /> <br />
            We use analytics and customer feedback to continuously refine
            performance and improve results.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Built for Growth <br /> <br />
            From strategy to development, Bloom Digitale’s eCommerce experts
            bring your vision to life—built to grow with your business.
          </p>
        </div>

        <div className="expectation">
          <p>06</p>

          <p>
            Performance & Speed <br /> <br />
            We build lightning-fast eCommerce experiences optimized for speed,
            reliability, and smooth performance, because faster sites convert
            better.
          </p>
        </div>
      </section>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}
