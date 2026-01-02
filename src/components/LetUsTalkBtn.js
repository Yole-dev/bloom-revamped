import { Link } from "react-router-dom";
import Button from "./Button";

export default function LetUsTalkBtn({ content = "" }) {
  return (
    <Button
      width={360}
      height={103}
      borderRadius={54}
      background="#FF6016"
      fontSize={31}
      fontWeight={400}
      className="lets-talk-btn"
    >
      <Link to="/contactus"> {content} </Link>
      <span className="lets-talk-icon">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </span>
    </Button>
  );
}
