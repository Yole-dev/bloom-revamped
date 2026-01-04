// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";

// imported page components
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";

// imported page image
import image1 from "../assets/contact_us/contactImage1.png";
import { useEffect, useState } from "react";

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
        <p>Tell us about your project, we’ll take it from there</p>
      </div>

      <ContactFormSection />
    </ComponentAnimation>
  );
}

function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <ContactForm />

      <RightComponentAnimation className="chat-with-us">
        <div>
          <p>Email us</p>
          <p>We’ll respond shortly</p>

          <a href="mailto:bloomdigitale@gmail.coms">
            <span>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </span>
            Send us an email
          </a>
        </div>

        <div>
          <p>Chat with us</p>
          <p>Speak to our friendly team via live chat</p>

          <a href="https://wa.link/bttnr9">
            <span>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </span>
            Message us on WhatsApp
          </a>
        </div>

        <div>
          <p>Call Us</p>
          <p>Call our team Mon - Fri from 8am to 5pm</p>

          <a href="tel:+2347072554714">
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            +234 707-255-4714
          </a>
        </div>
      </RightComponentAnimation>
    </section>
  );
}

function ContactForm() {
  //text input states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // checkbox states
  const [checkedServices, setCheckedServices] = useState({
    "Web Development": false,
    "Brand Design": false,
    "UI/UX": false,
    Ecommerce: false,
    "Mobile App Development": false,
  });

  // come back and work on this mail submission.
  useEffect(
    function () {
      async function sendEmailMessage() {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                service_id: "service_d28kg6n",
                template_id: "template_41wbxsr",
                user_id: "vx8QI59mM7S0ephc3",
                template_params: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  contact: contact,
                  businessName: businessName,
                  message: message,
                  services: "",
                },
              }),
            }
          );

          if (!response.ok)
            throw new Error("Failed to send message, please try again.");

          alert("Message sent successfully");
          setFirstName("");
          setLastName("");
          setEmail("");
          setContact("");
          setBusinessName("");
          setMessage("");
        } catch (err) {
          alert(err.message);
        } finally {
          setIsSubmitted(false);
          setIsLoading(false);
        }
      }

      if (isSubmitted) sendEmailMessage();
    },
    [isSubmitted, firstName, lastName, email, contact, businessName, message]
  );

  const servicesCheck = [
    { service: "Web Development" },
    { service: "Brand Design" },
    { service: "UI / UX" },
    { service: "Ecommerce" },
    { service: "Mobile App Development" },
  ];

  function handleCheckboxChange(service) {
    setCheckedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <LeftComponentAnimation>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <div className="grid-form">
          <div>
            <label htmlFor="first name">First name</label>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="last name">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone number">Phone number</label>
          <input
            type="tel"
            id="phone_number"
            placeholder="012 3456 7890"
            maxLength={11}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="last name">Business or Company Name</label>
          <input
            type="text"
            placeholder="Business or Company Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message"> Tell us about your project</label>
          <textarea
            id="message"
            placeholder="Send us a message"
            maxLength={1500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="services">Services</label>

          <div className="services-grid-form">
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
          </div>
        </div>

        <Button
          type="submit"
          background="#FF6016"
          width={333}
          height={72.91}
          borderRadius={45}
          fontSize={21.82}
          fontWeight={400}
          onClick={handleSubmit}
          className="send-message-btn"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </LeftComponentAnimation>
  );
}
