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
import image1 from "../assets/ui_ux/image1.png";
import image2 from "../assets/ui_ux/image2.png";
import image3 from "../assets/ui_ux/image3.png";
import image4 from "../assets/ui_ux/image4.png";

export default function UiUx() {
  return (
    <PageAnimation className="sub-service-main-container">
      <div className="sub-service-sub-container">
        <HeaderSection />

        <MainSection>
          <DevelopmentGoals />

          <UiUxApproachSection />
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
          <p>UIUX Design</p>
          <p>
            You need an intuitive, user-friendly interface that enhances
            experiences.
          </p>
        </div>

        <img src={image1} alt="" />
      </div>

      <p className="web-dev-heading-description">
        From in-depth research and product strategy to interface design and
        prototyping, our team designs intuitive digital experiences that users
        love and businesses trust.
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
        No matter your digital product goals, we design user experiences that
        drive clarity, engagement, and long-term growth.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>User-focused UI/UX that builds brand credibility.</p>
        <p>
          Your product’s interface shapes how users perceive your brand,
          instantly. A seamless, intuitive experience builds trust, strengthens
          credibility, and keeps users engaged. We design with usability and
          interaction at the core, ensuring every decision supports both the
          user and your business.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>Digital experiences that attract and retain users.</p>
        <p>
          We craft experiences that guide users naturally, reduce friction, and
          encourage meaningful interaction. From research to wireframing, every
          design choice is made to improve engagement and retention.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>Custom UI/UX designed for usability and performance.</p>
        <p>
          Through intuitive user flows, interaction design, and high-fidelity
          visuals, we create products that perform smoothly, scale effectively,
          and deliver consistent experiences across devices.
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn content="Let's talk" />
    </ComponentAnimation>
  );
}

function UiUxApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br /> A strategic, research-driven approach to UIUX
          design.
        </p>
        <p>
          We blend strategy, creativity, and user insight to design digital
          experiences that elevate brands, improve usability, and drive
          meaningful engagement.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – UX Strategy</p>
          <p>
            We start by understanding your business, users, and goals. Through
            UX audits, user research, and competitor analysis, we identify
            opportunities and define a clear design direction, laying the
            foundation for an intuitive, user-centered experience.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            Design is where strategy comes to life. We combine typography,
            color, layout, and interaction design to create visually engaging
            interfaces that feel intuitive, guide users naturally, and make
            navigation effortless across every touchpoint.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Prototyping & Testing</p>
          <p>
            We create interactive prototypes to validate usability and user flow
            before development. Through testing and refinement, we fine-tune the
            experience to ensure a seamless, intuitive interface that meets real
            user expectations.
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

      <section className="expectation-section design-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            User Centered Design <br /> <br /> We design with real users in
            mind, creating intuitive experiences that feel natural, seamless,
            and easy to navigate.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Engagement <br /> <br />
            Every interaction is thoughtfully crafted to keep users engaged,
            increase retention, and improve overall satisfaction.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Interactive Prototyping <br /> <br />
            We build interactive prototypes to validate user flows, test
            usability, and refine experiences before development begins.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Data Driven Insights <br /> <br />
            Our design decisions are guided by user research, testing, and
            insights, not assumptions, ensuring measurable results.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Built with Best Practices <br /> <br />
            We follow proven UI/UX principles and modern standards to deliver
            scalable, future-ready digital experiences.
          </p>
        </div>

        <div className="expectation">
          <p>06</p>

          <p>
            Scalable Design Systems <br /> <br />
            We create structured UI systems that scale with your product,
            ensuring consistency as features and teams grow.
          </p>
        </div>
      </section>

      <LetUsTalkBtn content="Let's get started" />
    </ComponentAnimation>
  );
}
