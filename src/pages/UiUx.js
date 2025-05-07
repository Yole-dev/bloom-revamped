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
          <p>UIUX Design Agency</p>
          <p>
            You need an intuitive, user-friendly interface that enhances
            experiences.
          </p>
        </div>

        <img src={image1} alt="" />
      </div>

      <p className="web-dev-heading-description">
        From indepth research and strategic planning to design and prototyping,
        Bloom’s expert UIUX team transforms your vision into reality.
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
        Whatever your goal is for your digital product, Bloom will help you
        achieve success.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>A user focused UIUX design that enhances your brands credibility.</p>
        <p>
          Your product's design influences how users perceive your
          brand—positively or negatively. A seamless experience builds trust and
          keeps users engaged. Work with a team that understands the power of
          usability and interaction.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>A digital experience that attracts, engages, and retains users.</p>
        <p>
          We craft interfaces that drive engagement, ensuring visitors navigate
          effortlessly and interact with your product intuitively. From research
          to wireframing, we design experiences that convert.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>A custom UIUX design tailored for usability and performance.</p>
        <p>
          A functional and visually appealing interface is essential for a great
          user experience. We design intuitive user flows, interactive
          prototypes, and high-fidelity designs that bring ideas to life.
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function UiUxApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br /> A strategic, research driven approach to UIUX
          design.
        </p>
        <p>
          We combine strategy, creativity, and user insights to create
          compelling digital experiences that elevate your brand, enhance
          usability, and drive engagement.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – UX Strategy</p>
          <p>
            We begin by understanding your business, brand, goals, and users. If
            you have an existing product, we conduct UX audits to identify areas
            for improvement. With user research and competitor analysis, we
            create a strategic design plan—including wireframes and content
            structures for an intuitive experience.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            Users process visuals faster than text. That’s why we combine
            typography, color psychology, and layout principles to create an
            engaging, visually appealing interface. Our designs ensure smooth
            user interactions and easy navigation.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Prototyping Testing</p>
          <p>
            Once the design is finalized, we create interactive prototypes to
            validate usability before development. If needed, we refine the
            experience through usability testing and iterations to ensure a
            seamless interface that meets user expectations.
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
        What You Should Expect <br />A visually compelling, research backed UIUX
        design that enhances usability, improves engagement, and drives
        conversions.
      </p>

      <section className="expectation-section design-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            User Centered Design <br /> <br /> We design with your users in
            mind, ensuring a seamless and intuitive experience.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Engagement <br /> <br />
            Our UI/UX solutions keep users engaged, leading to higher retention
            and satisfaction.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Interactive Prototyping <br /> <br />
            We build prototypes that help visualize interactions before
            development.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Data Driven Insights <br /> <br />
            We use analytics and user feedback to refine and improve
            experiences.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Built with Best Practices <br /> <br />
            Our designs follow the latest UI/UX standards and trends to ensure
            future-proof solutions.
          </p>
        </div>
      </section>
    </ComponentAnimation>
  );
}
