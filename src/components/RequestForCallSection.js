//Import react router functionality
import { Link } from "react-router-dom";

// Imported animation component
import ComponentAnimation from "../components/ComponentAnimation";

// imported reusable component
import CircleButton from "./Circlebtn";
import Button from "./Button";

export default function RequestForCallSection() {
  return (
    <ComponentAnimation className="request-for-call-section">
      <div className="request-for-call-container">
        <p>Let's Build a Digital Product You Can Be Proud Of</p>

        <Button
          gap={0.5}
          width={250}
          height={63}
          borderRadius={104.71}
          fontSize={23.04}
          fontWeight={400}
          background="#ffffff"
          color="#141414"
          className="request-a-free-call-btn"
        >
          <Link to="/contactus">Get Started</Link>
          <CircleButton
            background="#ff6016"
            width={46.07}
            height={46.07}
            fontSize={24}
            className="request-a-free-call-icon"
          >
            <ion-icon name="call"></ion-icon>
          </CircleButton>
        </Button>
      </div>
    </ComponentAnimation>
  );
}
