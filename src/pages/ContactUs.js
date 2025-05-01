// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";

// imported page components
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";
import RequestForCallSection from "../components/RequestForCallSection";

// imported page image
import image1 from "../assets/contact_us/contactImage1.png";
import { useState } from "react";
import { number } from "motion";

export default function ContactUs() {
  return (
    <PageAnimation className="contact-us-container">
      <HeaderSection />
      <MainSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="contact-us-header">
      <p>Let’s Bring Your Vision to Life</p>

      <div className="contact-us-hero">
        <p>Contact Us</p>
        <img src={image1} alt="" />
        <CircleButton
          fontSize={30}
          height={100}
          width={101}
          className="contact-us-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </div>
    </ComponentAnimation>
  );
}

function MainSection() {
  return (
    <ComponentAnimation className="contact-our-team">
      <div>
        <p>Contact Our Team</p>

        <p>
          Have a project in mind? Let’s craft intuitive and visually stunning
          user experiences together.
        </p>
      </div>

      <ContactFormSection />
    </ComponentAnimation>
  );
}

function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  //text input states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <LeftComponentAnimation>
      <form action="#" className="contact-us-form">
        <div className="grid-form">
          <div>
            <label htmlFor="first name">First name</label>
            <input
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="last name">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone number">Phone number</label>
          <input
            type="tel"
            id="phone_number"
            placeholder="012 3456 7890"
            maxLength={11}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message"> Message</label>
          <textarea
            id="message"
            placeholder="Send us a message"
            maxLength={1500}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Services</label>

          <div className="services-grid-form">
            <CheckBoxs />
          </div>
        </div>

        <Button
          background="#FF6016"
          width={333}
          height={72.91}
          borderRadius={45}
          fontSize={21.82}
          fontWeight={400}
        >
          Send Message
        </Button>
      </form>
    </LeftComponentAnimation>
  );
}

function CheckBoxs() {
  // checkbox states
  const [checkedServices, setCheckedServices] = useState({
    "Web Design": false,
    "Branding Design": false,
    "UI/UX": false,
    "Web Development": false,
    Ecommerce: false,
    Others: false,
  });

  const servicesCheck = [
    { service: "Web Design" },
    { service: "Branding Design" },
    { service: "UI/UX" },
    { service: "Web Development" },
    { service: "Ecommerce" },
    { service: "Others" },
  ];

  function handleCheckboxChange(service) {
    setCheckedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  }

  return (
    <>
      {servicesCheck.map((service) => (
        <div key={service.service} className="check-service-container">
          <input
            type="checkbox"
            name={service.service}
            id={service.service}
            checked={checkedServices[service.service]}
            onChange={() => handleCheckboxChange(service.service)}
          />
          <label htmlFor={service.service}>{service.service}</label>
        </div>
      ))}
    </>
  );
}
