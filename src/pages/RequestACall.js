// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported components
import CircleButton from "../components/Circlebtn";
import Box from "../components/Box";
import Button from "../components/Button";
import BookFreeCallForm from "../components/BookingForm";

// imported image
import image1 from "../assets/request_for_a_call/image1.png";

export default function RequestACall() {
  const month = new Date().toLocaleString("default", { month: "long" });
  return (
    <PageAnimation className="request-us-main-container">
      <div className="request-us-container">
        <HeaderSection />
        <MainSection month={month} />
      </div>

      <ClaimFreeCallSection month={month} />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="request-us-header">
      <p>Let’s Discuss Your Goals and Build a Winning Strategy</p>

      <div className="request-us-hero">
        <p>Request A Free Call</p>
        <img src={image1} alt="" />
        <CircleButton
          fontSize={30}
          height={100}
          width={101}
          className="request-us-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </div>
    </ComponentAnimation>
  );
}

function MainSection({ month }) {
  return (
    <ComponentAnimation className="request-our-team">
      <div>
        <p>
          <span>Limited spots left for {month} - act fast</span> <br />
          30 - Minute <span>Free</span> Strategy Session
        </p>

        <p>
          Book your FREE 30 minute strategy session valued at &#8358;50,000 with
          no obligation Let’s discuss your goals, create a solid plan, and
          answer all your questions.
        </p>
      </div>

      <div>
        <CallBookingSection />
      </div>
    </ComponentAnimation>
  );
}

function CallBookingSection() {
  return (
    <>
      <LeftComponentAnimation>
        <Box
          width={612}
          height={437.79}
          borderRadius={1.8}
          flexDirection="column"
          color="#ffffff"
          background="#5B94FF"
          gap={2}
          className="call-booking-box"
        >
          <p>Here’s What to Expect: A Personalized Strategy Just for You</p>

          <ul>
            <li>We will work together to clarify your requirements.</li>
            <li>We will share ideas on how to help you achieve your goals.</li>
            <li>
              Whenever you’re ready to begin, we’ll send you a custom quote or
              proposal.
            </li>
          </ul>
        </Box>
      </LeftComponentAnimation>

      <RightComponentAnimation className="booking-form-container">
        <BookFreeCallForm />
      </RightComponentAnimation>
    </>
  );
}

function ClaimFreeCallSection({ month }) {
  return (
    <ComponentAnimation className="claim-free-call-section">
      <div className="claim-heading">
        <p>Book your FREE strategy session today</p>
        <p>Limited spotss left for {month}-act fast</p>
      </div>

      <div className="claim-text-body">
        <p className="claim-text-heading">
          IMPORTANT: Before You Claim Your Free Strategy Session…
        </p>

        <p className="claim-text">
          This session isn’t for everyone—it’s for those serious about building
          a strong brand and business, ready to invest in long term success. Our
          CEO have limited free slots each month, and they fill up fast. While
          these sessions are free for now, that won’t last forever.
        </p>

        <div className="next-steps">
          <p className="claim-text-heading">What's next ?</p>

          <ul className="claim-text">
            <li>Click the button below and fill out a simple form.</li>
            <li>
              We’ll discuss your business goals and craft a tailored strategy.
            </li>
          </ul>
        </div>

        <p className="claim-text">
          I’m confident we can transform your results—our track record speaks
          for itself. That’s why I’m offering &#8358;50,000 worth of my time and
          expertise at no cost to you.
          <br /> Book your session now before spots run out
        </p>

        <Button
          width={306}
          height={67}
          background="#FF6016"
          fontSize={20}
          fontWeight={400}
          borderRadius={35}
          className="claim-button"
        >
          Claim now
        </Button>
      </div>
    </ComponentAnimation>
  );
}
