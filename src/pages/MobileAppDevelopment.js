// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported components
import LetUsTalkBtn from "../components/LetUsTalkBtn";

// imported images
import image1 from "../assets/app_dev/image1.png";
import image2 from "../assets/app_dev/image2.png";
import image3 from "../assets/app_dev/image3.png";
import image4 from "../assets/app_dev/image4.png";

export default function MobileAppDevelopment() {
  return (
    <PageAnimation className="sub-service-main-container">
      <div className="sub-service-sub-container">
        <HeaderSection />

        <MainSection>
          <DevelopmentGoals />

          <MobileAppApproachSection />
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
          <p>Mobile App Development</p>
          <p>
            You need a conversion-optimized mobile app engineered to elevate
            your brand and scale your business.
          </p>
        </div>

        <img src={image1} alt="" />
      </div>

      <p className="web-dev-heading-description">
        From strategy to design and development, we build mobile applications
        designed to engage users, scale effortlessly, and drive measurable
        growth.
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
        Whatever your goal is for your mobile product, we will help you build an
        app that delivers real results.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>
          A mobile application that strengthens your brand and builds trust.
        </p>
        <p>
          Your mobile app is a direct extension of your brand. We design and
          develop intuitive, high-quality mobile experiences that inspire
          confidence, encourage engagement, and keep users coming back.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>
          A digital mobile experience that attracts, engages, and retains users.
        </p>
        <p>
          We craft mobile applications that prioritize usability, performance,
          and user flow. From UI/UX optimization to seamless interactions, our
          process ensures users stay engaged and return consistently.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>AA custom mobile app tailored for scale and long-term growth.</p>
        <p>
          From onboarding to advanced in-app features, we build scalable mobile
          solutions aligned with your business goals, integrating third-party
          services, automating workflows, and ensuring smooth, reliable
          performance.
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function MobileAppApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br />A strategic, results-driven approach to mobile app
          design and development.
        </p>
        <p>
          We combine strategy, creativity, user-experience thinking, and
          technical expertise to build mobile applications that are intuitive,
          scalable, and built for real-world performance.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – Mobile App Strategy</p>
          <p>
            We begin by understanding your business, product goals, and users.
            If you have an existing app, we assess it to identify areas for
            improvement. Through user research and competitive analysis, we
            create a strategic roadmap outlining features, architecture, and
            user flows for an optimized app experience.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            Users process visuals faster than text. That’s why we combine
            typography, color psychology, and usability best practices to design
            engaging, intuitive mobile interfaces with smooth navigation and
            clear feature pathways.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Development</p>
          <p>
            After finalizing the design, we bring your app to life. We build
            fast, secure, and scalable mobile applications, integrating
            essential features such as authentication, notifications, payments,
            and dashboards. Our development process ensures performance,
            stability, and long-term maintainability.
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
        What You Can Expect <br />A high performing mobile application that is
        visually refined, responsive, and built to scale with your business.
      </p>

      <section className="expectation-section MobileApp-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            Human Centered Experience <br /> <br />
            We design with your users in mind, creating interfaces that feel
            natural, intuitive, and efficient.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Built for Performance <br /> <br />
            Your app is crafted to increase engagement, retention, and user
            satisfaction from day one.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Secure Scalable Foundation <br /> <br />
            We develop using reliable frameworks, secure systems, and
            architecture that supports long-term growth.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Insight Driven Features <br /> <br />
            Integrated analytics allow you to monitor usage patterns, identify
            opportunities, and continuously improve the app.
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Growth Ready Development <br /> <br />
            From initial planning to launch and ongoing updates, we create
            mobile apps that expand with your business.
          </p>
        </div>

        <div className="expectation">
          <p>06</p>

          <p>
            Reliable Post-Launch Support <br /> <br />
            We don't stop at launch. We provide ongoing support, updates, and
            optimization to ensure your app remains stable, secure, and aligned
            with evolving user needs.
          </p>
        </div>
      </section>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}
