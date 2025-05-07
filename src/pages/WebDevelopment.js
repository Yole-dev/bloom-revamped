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

      <div className="sub-service-sub-container">
        <RequestForCallSection />
      </div>
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="sub-service-header">
      <div className="sub-service-hero">
        <p className="web-dev-heading">Website Design Development Agency</p>
        <img src={image1} alt="" />
        <p className="web-dev-heading-text">
          Building Stunning, High Performance Websites for Your Success
        </p>
      </div>

      <p className="web-dev-heading-description">
        You need a stunning website that delivers results. From concept and
        strategy to design and implementation, Bloom’s expert team will bring
        your website vision to life.
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
        Whatever your goal is for your website, Bloom will help you achieve
        success.
      </p>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>
          A corporate website that enhances your brand’s image and credibility.
        </p>
        <p>
          Your website speaks volumes about your brand—positively or negatively.
          In today’s digital world, where skepticism runs high, your website
          plays a crucial role in winning over clients, partners, and investors.
          Work with a team that values excellence. Work with Bloom.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-goals-content">
        <p>A marketing website that draws in, engages, and converts.</p>
        <p>
          A common mistake businesses make: running ads to a site that doesn’t
          convert. From copy to retargeting, we build websites that deliver
          results.
        </p>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-goals-content">
        <p>A custom web app designed for functionality and ease of use.</p>
        <p>
          Have an idea and need the right digital partner to bring it to life?
          Looking for a team that builds stunning, seamless web and mobile
          applications? Let’s make it happen—get in touch today
        </p>
      </LeftComponentAnimation>

      <LetUsTalkBtn />
    </ComponentAnimation>
  );
}

function WebDevApproachSection() {
  return (
    <ComponentAnimation className="sub-service-approach-container">
      <div className="sub-service-approach-header">
        <p className="web-dev-approach-heading">
          Our Process <br /> A strategic, growth focused approach to website
          design.
        </p>
        <p>
          Let’s take a closer look at how companies create stunning, high
          performing websites that enhance their brand, engage users, and drive
          results.
        </p>
      </div>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image2} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 1 – Web Strategy</p>
          <p>
            We start by understanding your brand, goals, and industry. If you
            have a website, we assess it for improvement. With a focus on your
            audience’s needs, we craft a strategic plan—defining structure,
            wireframes, and content for a high-performing site.
          </p>
        </div>
      </LeftComponentAnimation>

      <RightComponentAnimation className="sub-service-approach-content sub-service-approach-content-reverse">
        <img src={image3} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 2 – Design</p>
          <p>
            The brain processes images faster than words, so we blend visuals,
            colors, fonts, and calls to action to captivate your audience. This
            ensures a seamless flow, builds trust, and guides visitors toward
            action.
          </p>
        </div>
      </RightComponentAnimation>

      <LeftComponentAnimation className="sub-service-approach-content">
        <img src={image4} alt="" />
        <div className="sub-service-approach-text-content">
          <p>Step 3 – Development</p>
          <p>
            Once the design is finalized, we move to development—building the
            theme, adding content, and ensuring flawless functionality. If
            needed, we also manage complex integrations like APIs, portals, and
            CRMs.
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
        What You Should Expect <br />A stunning, data driven website that’s
        fast, responsive, and built to attract leads.
      </p>

      <section className="expectation-section web-dev-expectations">
        <div className="expectation">
          <p>01</p>

          <p>
            Mobile Responsive <br /> <br /> Your website will be designed to
            render beautifully across all devices – desktops, tablets, and
            mobile.
          </p>
        </div>

        <div className="expectation">
          <p>02</p>

          <p>
            Optimized for Search <br /> <br /> Your website will not only look
            beautiful and function effectively, it will also be found by search
            engines.
          </p>
        </div>

        <div className="expectation">
          <p>03</p>

          <p>
            Speed Tested <br /> <br /> A slow website costs you opportunities,
            so we ensure fast, optimized performance.
          </p>
        </div>

        <div className="expectation">
          <p>04</p>

          <p>
            Optimized for Conversions <br /> <br /> Beautiful websites are
            great, but you know what’s better? Beautiful websites that convert
            website visitors to leads and customers
          </p>
        </div>

        <div className="expectation">
          <p>05</p>

          <p>
            Backed by Data Research <br /> <br /> Your website strategy won’t be
            based on guesses and maybes. It will be based on facts, industry
            research, and validated data.
          </p>
        </div>

        <div className="expectation">
          <p>06</p>

          <p>
            Built with World Class Tools <br /> <br /> We leverage the best
            tools – WordPress, Shopify, Magento, Google Analytics, and many more
            – to deliver the results you need for your business.
          </p>
        </div>
      </section>
    </ComponentAnimation>
  );
}
