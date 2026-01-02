// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

// imported page components
import CircleButton from "../components/Circlebtn";

// imported page image
import image1 from "../assets/terms_of_service/termsImage1.png";

export default function TermsOfService() {
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
      <p>Our simple rules for creating great things together</p>

      <div className="contact-us-hero">
        <p>Terms of Service</p>
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
    <ComponentAnimation className="bloom-policy">
      <div>
        <p>1. introduction</p>

        <p>
          Welcome to Bloom Digitale. We are a digital product studio
          specializing in branding, website & mobile app development. These
          Terms of Service (“Terms”) govern your access to and use of our
          website, services, and digital platforms. By accessing our website or
          engaging our services, you agree to be bound by these Terms and our
          Privacy Policy.
        </p>
      </div>

      <div>
        <p>2. Acceptance of Terms </p>

        <p>
          By accessing our website or engaging our services, you agree to be
          bound by these Terms of Service (“Terms”) and our Privacy Policy.{" "}
          <br />
          If you are entering into this agreement on behalf of a company or
          organization, you represent that you have the authority to bind that
          entity to these Terms.
        </p>
      </div>

      <div>
        <p>3. our services</p>

        <p>
          Bloom Digitale is a digital product studio providing end-to-end
          digital solutions, including but not limited to:
        </p>

        <p>
          <ul>
            <li>Website design and development</li>
            <li>Branding and visual identity design</li>
            <li>UI/UX design</li>
            <li>E-commerce solutions</li>
            <li>Mobile and web application development</li>
            <li>Digital strategy, maintenance, and consultancy</li>
          </ul>
          Each service engagement is governed by a project proposal or contract
          outlining specific deliverables, timelines, scope, and payment terms.
        </p>
      </div>

      <div>
        <p>4. project engagement & communication</p>

        <p>
          Once a project begins:
          <ul>
            <li>
              Communication will take place via agreed channels such as email,
              WhatsApp, Slack, or project management tools.
            </li>
            <li>
              Clients are responsible for providing required content, materials,
              and approvals in a timely manner.
            </li>
            <li>
              Delays in feedback or content delivery may result in timeline
              adjustments.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>5. payments & refunds </p>

        <p>
          <ul>
            <li>All fees are outlined in the approved proposal or invoice.</li>
            <li>
              A minimum 50% upfront payment is required before work begins,
              unless otherwise stated.
            </li>
            <li>
              The remaining balance is due upon project completion and before
              final delivery or handover.
            </li>
            <li>
              Payments are non-refundable once work has commenced, as time and
              resources are immediately allocated.
            </li>

            <li>
              If a project is paused or cancelled by the client, payment for all
              completed work remains due.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>6. intellectual property </p>

        <p>
          <ul>
            <li>
              All work created by Bloom Digitale remains our property until full
              payment is received.
            </li>
            <li>
              Upon full payment, ownership of the final approved deliverables
              transfers to the client.
            </li>

            <li>
              Bloom Digitale retains the right to display completed projects in
              our portfolio or marketing materials unless otherwise agreed in
              writing.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>7. client responsibilities</p>

        <p>
          Clients agree to:
          <ul>
            <li>Provide accurate, complete, and timely information.</li>
            <li>
              Ensure they have the appropriate rights or licenses for all
              materials supplied.
            </li>
            <li>
              Review deliverables promptly and communicate feedback clearly.
            </li>
          </ul>
          Bloom Digitale is not responsible for delays caused by incomplete
          information or delayed responses from the client.
        </p>
      </div>

      <div>
        <p>8. revision & scope changes</p>

        <p>
          <ul>
            <li>
              Each project includes a defined number of revision rounds as
              outlined in the proposal.
            </li>

            <li>
              Requests beyond the agreed scope or revision limit may incur
              additional fees.
            </li>

            <li>
              Significant changes after design approval may be treated as a new
              project.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>9. third-Party tools & services</p>

        <p>
          We may use third-party platforms such as hosting providers, analytics
          tools, or payment processors. Bloom Digitale is not responsible for:
          <ul>
            <li>
              Downtime, errors, or service interruptions caused by third
              parties.
            </li>
            <li>Changes to third-party pricing or terms.</li>
          </ul>
        </p>
      </div>

      <div>
        <p>10. limitation of liability </p>

        <p>
          To the maximum extent permitted by law, Bloom Digitale shall not be
          liable for:
          <ul>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>Delays caused by circumstances beyond our control</li>
          </ul>
          Our total liability shall not exceed the amount paid for the specific
          service giving rise to the claim.
        </p>
      </div>

      <div>
        <p>11. confidentiality</p>

        <p>
          All non-public information shared with us during a project will be
          treated as confidential and will not be disclosed to third parties
          except where required by law or necessary to complete the service.
        </p>
      </div>

      <div>
        <p>12. termination</p>

        <p>
          Either party may terminate a project with written notice. In the event
          of termination:
          <ul>
            <li>
              The client remains responsible for payment of all work completed
              up to the termination date
            </li>
            <li>
              Bloom Digitale reserves the right to withhold partially completed
              work until outstanding payments are settled.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>13. Updates to These Terms</p>

        <p>
          We may update these Terms from time to time. Any changes will be
          posted on this page with an updated “Last updated” date.
        </p>
      </div>

      <div>
        <p>14. contact us</p>

        <p>
          If you have questions regarding these terms, please contact us at:
          <ul>
            <li>bloomdigitale@gmail.com</li>
            <li>www.bloomdigitale.com</li>
          </ul>
        </p>
      </div>
    </ComponentAnimation>
  );
}
