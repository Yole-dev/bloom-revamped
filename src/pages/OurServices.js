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
import RequestForCallSection from "../components/RequestForCallSection";

// imported images
import serviceImage1 from "../assets/our_services/service_image1.png";
import serviceImage2 from "../assets/our_services/service_image2.svg";
import serviceImage3 from "../assets/our_services/service_image3.png";
import serviceImage4 from "../assets/our_services/service_image4.png";
import serviceImage5 from "../assets/our_services/service_image5.png";
import serviceImage6 from "../assets/our_services/service_image6.png";
import serviceImage7 from "../assets/our_services/service_image7.png";

const faqs = [
  {
    question: "What services does Bloom offer?",
    answer:
      "We offer branding, web development, UIUX design and Ecommerce solutions",
  },

  {
    question: "How do you approach new projects?",
    answer:
      "We follow a six step process: Discovery, Strategy, Design , Development, Testing, and Launch.",
  },

  {
    question: "What industries do you specialize in?",
    answer:
      "We follow a six step process: Discovery, Strategy, Design , Development, Testing, and Launch.",
  },

  {
    question: "How long does a typical project take?",
    answer:
      "We follow a six step process: Discovery, Strategy, Design , Development, Testing, and Launch.",
  },

  {
    question: "How can we get started with Bloom?",
    answer:
      "We follow a six step process: Discovery, Strategy, Design , Development, Testing, and Launch.",
  },
];

export default function OurServices() {
  return (
    <PageAnimation>
      <div className="our-service-page-container">
        <HeadingSection />
        <OurServiceSection />
        <FaqSection data={faqs} />
        <RequestForCallSection />
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
          <div>
            <img src={serviceImage3} alt="" />

            <div className="services-column-card">
              <p>Branding</p>
              <p>
                We craft distinctive brand identities that communicate trust,
                clarity, and consistency across every digital touchpoint.
              </p>
            </div>
          </div>
        </LeftComponentAnimation>

        <RightComponentAnimation>
          <div>
            <img src={serviceImage4} alt="" />

            <p>Web Development</p>
          </div>

          <p>
            We build fast, scalable, and conversion-focused websites tailored to
            your business goals.
          </p>
        </RightComponentAnimation>

        <LeftComponentAnimation>
          <div>
            <img src={serviceImage5} alt="" />

            <p>UI/UX Design</p>
          </div>

          <p>
            We design intuitive, user-centered interfaces that make products
            easy to use, engaging, and effective.
          </p>
        </LeftComponentAnimation>

        <RightComponentAnimation>
          <div>
            <img src={serviceImage7} alt="" />

            <p>Mobile App Development</p>
          </div>

          <p>
            We engineer high-performance mobile applications that blend seamless
            user experience with the scalability your business needs to grow.
          </p>
        </RightComponentAnimation>

        <LeftComponentAnimation>
          <div>
            <img src={serviceImage6} alt="" />

            <p>Ecommerce Solutions</p>
          </div>

          <p>
            We build and optimize high-performing online stores designed to
            convert visitors into loyal customers.
          </p>
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
            <p>Ready to elevate your brand with our expert services?</p>

            <p>Contact us today to discuss your project and get started.</p>
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
            <Link to="/contactus">Contact Us</Link>
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

        <p className="faq-answer"> {isOpen ? children : ""}</p>
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
