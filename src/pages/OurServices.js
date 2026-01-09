import { useState } from "react";
import { Link } from "react-router-dom";

// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

//imported reusable component
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";

// imported images
import serviceImage1 from "../assets/our_services/service_image1.png";
import serviceImage2 from "../assets/our_services/service_image2.svg";
import serviceImage3 from "../assets/our_services/service_image3.jpg";
import serviceImage4 from "../assets/our_services/service_image4.jpg";
import serviceImage5 from "../assets/our_services/service_image5.jpg";
import serviceImage6 from "../assets/our_services/service_image6.jpg";
import serviceImage7 from "../assets/our_services/service_image7.jpg";

const faqs = [
  {
    question: "What does your process look like from start to finish?",
    answer:
      "Every project begins with discovery and strategy to fully understand your goals. From there, we move through design, development, testing, and launch, keeping you involved and informed at every stage to ensure the final product delivers real business results.",
  },

  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope and complexity of your project. We don’t believe in one-size-fits-all packages, every quote is tailored to your specific goals and requirements.",
  },

  {
    question: "What makes Bloom Digitale different from other agencies?",
    answer:
      "We combine strategy, design, and technology to create digital solutions that don’t just look good, they perform. Our focus is on clarity, quality, and long-term results, not quick fixes.",
  },

  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer ongoing support and maintenance options to ensure your website or application continues to perform optimally as your business grows.",
  },

  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scope of work. some branding and website projects take between 5–6 weeks, while more complex web or ecommerce builds may take longer. We’ll provide a clear timeline before any work begins.",
  },

  {
    question: "Do you work with specific industries or business types?",
    answer:
      "We work with startups, growing businesses, and established brands across industries such as ecommerce, technology, lifestyle, health & wellness and finance. Our approach is industry-agnostic but strategy-driven, we adapt our process to your market and audience.",
  },

  {
    question: "Will I own my website and assets after completion?",
    answer:
      "Yes. Once your project is completed and delivered, you have full ownership of all final assets, designs, and code.",
  },

  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form. We’ll schedule a quick discovery call to understand your needs, recommend the right solution, and outline next steps.",
  },
];

export default function OurServices() {
  return (
    <PageAnimation>
      <div className="our-service-page-container">
        <HeadingSection />
        <OurServiceSection />
        <FaqSection data={faqs} />
      </div>
    </PageAnimation>
  );
}

function HeadingSection() {
  return (
    <section className="heading-section">
      <div className="heading-first-section">
        <LeftComponentAnimation>
          <CircleButton
            fontSize={30}
            className="heading-circle"
            width={100}
            height={100}
          >
            <ion-icon name="arrow-down-outline"></ion-icon>
          </CircleButton>
          <img
            src={serviceImage1}
            alt="Header section hero"
            className="service-image1"
          />
        </LeftComponentAnimation>

        <RightComponentAnimation>
          <p>Expertise in Digital Solutions</p>

          <p>
            Explore our range of services and solutions that strengthen brands
            and move businesses forward.
          </p>
        </RightComponentAnimation>
      </div>

      <ComponentAnimation>
        <div className="heading-second-section">
          <img src={serviceImage2} alt="" />

          <div>
            <div>
              <p>Featured Work</p>

              <p>Branding</p>
            </div>

            <p>
              We partnered with SHAMA to craft a refined brand identity, from
              logo and packaging to a modern ecommerce experience.
            </p>
          </div>
        </div>
      </ComponentAnimation>
    </section>
  );
}

function OurServiceSection() {
  return (
    <section className="our-services-section-container">
      <div className="our-services-section">
        <LeftComponentAnimation>
          <div className="services-card">
            <div className="services-image">
              <img src={serviceImage3} alt="" />
            </div>

            <div>
              <p>Branding</p>
              <p>
                We craft distinctive brand identities that communicate trust,
                clarity, and consistency across every digital touchpoint.
              </p>

              <Button>
                <Link to="/branding">Learn More</Link>
              </Button>
            </div>
          </div>
        </LeftComponentAnimation>

        <RightComponentAnimation>
          <div className="services-card">
            <div className="services-image">
              <img src={serviceImage4} alt="" />
            </div>

            <div>
              <p>Web Development</p>
              <p>
                We build fast, scalable, and conversion-focused websites
                tailored to your business goals.
              </p>

              <Button>
                <Link to="/webdevelopment">Learn More</Link>
              </Button>
            </div>
          </div>
        </RightComponentAnimation>

        <LeftComponentAnimation>
          <div className="services-card">
            <div className="services-image">
              <img src={serviceImage5} alt="" />
            </div>

            <div>
              <p>UI/UX Design</p>
              <p>
                We design intuitive, user-centered interfaces that make products
                easy to use, engaging, and effective.
              </p>

              <Button>
                <Link to="/ui_ux">Learn More</Link>
              </Button>
            </div>
          </div>
        </LeftComponentAnimation>

        <RightComponentAnimation>
          <div className="services-card">
            <div className="services-image">
              <img src={serviceImage6} alt="" />
            </div>

            <div>
              <p>Mobile App Development</p>
              <p>
                We engineer high-performance mobile applications that blend
                seamless user experience with the scalability your business
                needs to grow.
              </p>

              <Button>
                <Link to="/mobileapp_development">Learn More</Link>
              </Button>
            </div>
          </div>
        </RightComponentAnimation>

        <LeftComponentAnimation>
          <div className="services-card">
            <div className="services-image">
              <img src={serviceImage7} alt="" />
            </div>

            <div>
              <p>Ecommerce Solutions</p>
              <p>
                We build and optimize high-performing online stores designed to
                convert visitors into loyal customers.
              </p>

              <Button>
                <Link to="/ecommerce">Learn More</Link>
              </Button>
            </div>
          </div>
        </LeftComponentAnimation>
      </div>

      <ComponentAnimation className="contact-us-section">
        <div>
          <CircleButton
            fontSize={30}
            background="#FF6016"
            width={100}
            height={100}
            className="odd-icon"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </CircleButton>
        </div>

        <div>
          <div>
            <p>Ready to elevate your digital presence?</p>

            <p>Design, build, and scale with confidence</p>
          </div>

          <Button
            width={333}
            height={72.91}
            fontSize={21}
            fontWeight={300}
            borderRadius={37}
            background="#FF6016"
            className="contact-btn"
          >
            <Link to="/contactus">Let's Get Started</Link>
          </Button>
        </div>
      </ComponentAnimation>
    </section>
  );
}

function FaqSection({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="faq-section-container">
      <ComponentAnimation className="faq-heading">
        <p>Frequently Asked Questions</p>

        <p>
          Have questions ? We’ve got answers to help you understand our services
          better.
        </p>
      </ComponentAnimation>

      <div className="faq-container">
        {data.map((question, i) => (
          <Faq
            questionNumber={i + 1}
            question={question.question}
            key={i + 1}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {curOpen && question.answer}
          </Faq>
        ))}
      </div>
    </section>
  );
}

function Faq({ children, questionNumber, question, onOpen, curOpen }) {
  const isOpen = questionNumber === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : questionNumber);
  }

  return (
    <ComponentAnimation className="faq-content">
      <div className="question-content">
        <p className="faq-question">
          {questionNumber}. {question}
        </p>

        <p className={`faq-answer ${isOpen ? "open" : ""} `}>{children}</p>
      </div>

      <div onClick={handleToggle}>
        <ion-icon
          name={isOpen ? "arrow-back-outline" : "arrow-forward-outline"}
          className="arrow-icon"
        ></ion-icon>
      </div>
    </ComponentAnimation>
  );
}
