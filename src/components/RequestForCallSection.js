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
        <p>Offering The Best Experience Of Digital Branding Services</p>

        <Button
          gap={0.5}
          width={305}
          height={63}
          borderRadius={104.71}
          fontSize={23.04}
          fontWeight={400}
          background="#ffffff"
          color="#141414"
          className="request-a-free-call-btn"
        >
          <Link to="/requestacall">Request A Free Call</Link>
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
