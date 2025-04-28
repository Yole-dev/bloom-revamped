import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";

import RequestForCallSection from "../components/RequestForCallSection";

export default function Portfolio() {
  return (
    <PageAnimation className="portfolio-page-container">
      <RequestForCallSection />
    </PageAnimation>
  );
}
