import CircleButton from "./Circlebtn";

export default function RequestForCallSection() {
  return (
    <section className="request-for-call-section">
      <div className="request-for-call-container">
        <p>Offering The Best Experience Of Digital Branding Services</p>

        <button className="request-btn">
          Request A Free Call
          <CircleButton
            background="#ff6016"
            width={46.07}
            height={46.07}
            fontSize={24}
          >
            <ion-icon name="call"></ion-icon>
          </CircleButton>
        </button>
      </div>
    </section>
  );
}
