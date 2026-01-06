// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

import RequestForCallSection from "../components/RequestForCallSection";

// imported components
import LetUsTalkBtn from "../components/LetUsTalkBtn";

// imported images
import image1 from "../assets/web_dev/image1.png";
import image2 from "../assets/web_dev/image2.png";
import image3 from "../assets/web_dev/image3.png";
import image4 from "../assets/web_dev/image4.png";

export default function WebDevelopment() {
  return (
    <PageAnimation className="sub-service-main-container">
      <div className="sub-service-sub-container">
        <HeaderSection />

        <MainSection>
          <DevelopmentGoals />

          <WebDevApproachSection />
        </MainSection>
      </div>

      <WhatToExpectSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="sub-service-header">
      <div className="sub-service-hero">
        <p className="web-dev-heading">Web Development</p>
        <img src={image1} alt="" />
        <p className="web-dev-heading-text">
          Building Stunning, High Performance Websites for Your Success
        </p>
      </div>

      <p className="web-dev-heading-description">
        We design and develop high-performance websites that help businesses
        grow, convert, and scale. From strategy and UX to design and
        development, Bloom Digitale builds websites with clarity, purpose, and
        measurable results.
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
        No matter your website goals, we design and build solutions tailored to
        achieve them.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Corporate websites that build trust and credibility</p>
        <p>
          Your website is often the first interaction people have with your
          brand. We design corporate websites that communicate professionalism,
          clarity, and trust, helping you make strong first impressions with
          clients, partners, and investors.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Marketing websites built to attract, engage, and convert</p>
        <p>
          Many businesses drive traffic to websites that don’t perform. We
          design marketing websites with clear messaging, strong visuals, and
          conversion-focused layouts that turn visitors into customers.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Custom web applications built for performance and usability</p>
        <p>
          Have an idea that needs more than a standard website? We design and
          develop custom web applications that are intuitive, scalable, and
          built to solve real business problems, across web and mobile
          platforms.
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn content="Let's talk" />
    </ComponentAnimation>
  );
}

function WebDevApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br /> A strategic, results-driven approach to building
          high-performance websites.
        </p>
        <p>
          We follow a proven process to design and build websites that
          strengthen brands, engage users, and drive measurable results.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – Web Strategy</p>
          <p>
            We begin by understanding your brand, goals, and audience. Through
            research and analysis, we define a clear strategy that shapes your
            site structure, messaging, and user experience, laying the
            foundation for a high-performing website.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            We design visually compelling interfaces that communicate clearly
            and guide users with purpose. Every layout, color, and interaction
            is crafted to build trust, enhance usability, and move visitors
            toward action.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Development</p>
          <p>
            Once the design is finalized, we bring it to life through clean,
            scalable development. We ensure fast performance, seamless
            functionality, and reliable integrations, delivering a website built
            to perform across devices and platforms.
          </p>
        </div>
      </LeftComponentAnimation>
    </ComponentAnimation>
  );
}

function WhatToExpectSection() {
  return (
    <ComponentAnimation className="expectation-container">
      <p>What You Can Expect</p>

      <section className="expectation-section web-dev-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            Mobile Responsive <br /> <br /> Your website will be designed to
            deliver a seamless experience across desktop, tablet, and mobile,
            without compromise.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Search <br /> <br /> Your website is built with SEO
            best practices in mind, ensuring it’s discoverable, structured, and
            ready to rank.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Speed Tested <br /> <br /> Your website is built with SEO best
            practices in mind, ensuring it’s discoverable, structured, and ready
            to rank.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Optimized for Conversions <br /> <br /> Beyond aesthetics, we design
            with intent, guiding visitors toward meaningful actions that drive
            leads and sales.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Backed by Data Research <br /> <br /> Every decision is informed by
            insights, industry research, and validated data, not assumptions.
          </p>
        </div>

        <div className="expectation">
          <p>06</p>

          <p>
            Built with World Class Tools <br /> <br /> We build using modern,
            industry-leading technologies chosen for performance, security, and
            long-term scalability.
          </p>
        </div>
      </section>

      <LetUsTalkBtn content="Let's get started" />
    </ComponentAnimation>
  );
}
