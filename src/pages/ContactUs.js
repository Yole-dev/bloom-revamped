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
  return (
    <form action="#" className="contact-us-form">
      <div className="grid-form">
        <div>
          <label htmlFor="first name">First name</label>
          <input type="text" placeholder="First name" />
        </div>

        <div>
          <label htmlFor="last name">Last name</label>
          <input type="text" placeholder="Last name" />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder="Email address" />
      </div>

      <div>
        <label htmlFor="phone number">Phone number</label>
        <input
          type="tel"
          name=""
          id=""
          placeholder="000 000 000"
          maxLength={9}
        />
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
  );
}
