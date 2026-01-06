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
import { useEffect, useState, useRef } from "react";

export default function ContactUs() {
  return (
    <PageAnimation className="contact-us-container">
      <p className="mobile-heading">Contact Us</p>
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
        <p className="pc-heading">Contact Us</p>
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
  const [contact, setContact] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef(null);

  // checkbox states
  const [checkedServices, setCheckedServices] = useState({
    "Web Development": false,
    "Brand Design": false,
    "UI/UX": false,
    Ecommerce: false,
    "Mobile App Development": false,
  });

  // Form client-side validation.

  function validateForm() {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      newErrors.firstName = "First name must contain letters only";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      newErrors.lastName = "Last name must contain letters only";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!contact.trim()) {
      newErrors.contact = "Phone number is required";
    } else if (!/^\d{11}$/.test(contact)) {
      newErrors.contact = "Phone number must be 11 digits";
    }

    if (!businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Sending contact form details via emailJS.

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
                  services: Object.keys(checkedServices)
                    .filter((key) => checkedServices[key])
                    .join(", "),
                },
              }),
            }
          );

          if (!response.ok)
            throw new Error("Failed to send message, please try again.");

          // Setup for the success popup message.
          setShowSuccess(true);

          setFirstName("");
          setLastName("");
          setEmail("");
          setContact("");
          setBusinessName("");
          setMessage("");
          setCheckedServices({
            "Web Development": false,
            "Brand Design": false,
            "UI/UX": false,
            Ecommerce: false,
            "Mobile App Development": false,
          });

          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        } catch (err) {
          alert(err.message);
        } finally {
          setIsSubmitted(false);
          setIsLoading(false);
        }
      }

      if (isSubmitted) sendEmailMessage();
    },
    [isSubmitted]
  );

  function handleCheckboxChange(service) {
    setCheckedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateForm();

    // scroll to top feature when there are errors on the form
    if (!isValid) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    setIsSubmitted(true);
  }

  const servicesCheck = [
    { service: "Web Development" },
    { service: "Brand Design" },
    { service: "UI/UX" },
    { service: "Ecommerce" },
    { service: "Mobile App Development" },
  ];

  return (
    <>
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <h3>Message Sent Successfully</h3>
            <p>Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        </div>
      )}
      <LeftComponentAnimation>
        <form ref={formRef} className="contact-us-form" onSubmit={handleSubmit}>
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
              {errors.firstName && (
                <p className="error"> {errors.firstName} </p>
              )}
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

              {errors.lastName && <p className="error"> {errors.lastName} </p>}
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

            {errors.email && <p className="error"> {errors.email} </p>}
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

            {errors.contact && <p className="error"> {errors.contact} </p>}
          </div>

          <div>
            <label htmlFor="last name">Business or Company Name</label>
            <input
              type="text"
              placeholder="Business or Company Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />

            {errors.businessName && (
              <p className="error"> {errors.businessName} </p>
            )}
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
    </>
  );
}
