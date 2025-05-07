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

      <div className="sub-service-sub-container">
        <RequestForCallSection />
      </div>
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
        From strategy to design and development, Bloom’s expert team creates
        eCommerce websites that turn visitors into loyal customers.
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
        Whatever your goal is for your online store, Bloom will help you achieve
        success.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>An eCommerce website that enhances your brands credibility.</p>
        <p>
          Your online store is your digital storefront. A seamless shopping
          experience builds trust and keeps customers coming back. Work with a
          team that understands conversion driven design.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>
          A digital shopping experience that attracts, engages, and converts.
        </p>
        <p>
          We craft eCommerce websites that drive engagement, ensuring visitors
          navigate effortlessly, find products easily, and enjoy a smooth
          checkout process. From research to optimization, we design experiences
          that convert.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>A custom eCommerce website tailored for sales and growth.</p>
        <p>
          A visually appealing, high performing online store is essential for
          success. We build scalable platforms with intuitive navigation, fast
          loading pages, and secure payment gateways.
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
          Our Process <br />A strategic, sales driven approach to eCommerce
          design.
        </p>
        <p>
          We combine strategy, creativity, and user insights to create
          compelling eCommerce experiences that elevate your brand, enhance
          usability, and drive conversions.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – eCommerce Strategy</p>
          <p>
            We start by understanding your business, products, and target
            audience. If you have an existing store, we assess it for
            improvement. Through user research and competitor analysis, we
            create a strategic design plan—including wireframes and content
            structures for an optimized shopping experience.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            Shoppers process visuals faster than text. That’s why we combine
            typography, color psychology, and layout principles to create an
            engaging, visually appealing storefront. Our designs ensure smooth
            navigation and easy product discovery.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Development Optimization</p>
          <p>
            Once the design is finalized, we build a high-performance eCommerce
            store, integrating payment gateways, optimizing product pages, and
            ensuring a seamless checkout experience. If needed, we implement
            advanced features like customer portals, subscriptions, and CRM
            integrations.
          </p>
        </div>
      </LeftComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function WhatToExpectSection() {
  return (
    <ComponentAnimation className="expectation-container">
      <p>
        What You Should Expect <br />A stunning, conversion focused eCommerce
        website that is fast, responsive, and built to scale.
      </p>

      <section className="expectation-section ecommerce-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            User Centered Design <br /> <br />
            We design with your customers in mind, ensuring a seamless shopping
            experience.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Sales <br /> <br />
            Our eCommerce solutions boost engagement, conversions, and customer
            retention.
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
            We use analytics and customer feedback to refine and improve
            performance.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Built for Growth <br /> <br />
            From strategy to development, Bloom’s expert eCommerce team will
            bring your vision to life.
          </p>
        </div>
      </section>
    </ComponentAnimation>
  );
}
