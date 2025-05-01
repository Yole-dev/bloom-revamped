// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

// imported element components
import CircleButton from "../components/Circlebtn";
import Box from "../components/Box";

// imported image
import image1 from "../assets/request_for_a_call/image1.png";

export default function RequestACall() {
  return (
    <PageAnimation className="request-us-container">
      <HeaderSection />
      <MainSection />
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

function MainSection() {
  return (
    <ComponentAnimation className="request-our-team">
      <div>
        <p>
          <span>Limited spots left for March - act fast</span> <br />
          30 - Minute <span>Free</span> Straegy Session
        </p>

        <p>
          Book your FREE 30 minute strategy session valued at N50,000 with no
          obligation Let’s discuss your goals, create a solid plan, and answer
          all your questions.
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

      <RightComponentAnimation></RightComponentAnimation>
    </>
  );
}
