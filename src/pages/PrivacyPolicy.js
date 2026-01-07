// imported animation components
import PageAnimation from "../components/PageAnimation";
import ComponentAnimation from "../components/ComponentAnimation";

// imported page components
import CircleButton from "../components/Circlebtn";
import Button from "../components/Button";

// imported page image
import image1 from "../assets/privacy_policy/privacyPolicyImage1.png";

export default function PrivacyPolicy() {
  return (
    <PageAnimation className="contact-us-container">
      <p className="mobile-heading">Privacy Policy</p>
      <HeaderSection />
      <MainSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="contact-us-header">
      <p>Your privacy isn’t just policy — it’s our promise</p>

      <div className="contact-us-hero">
        <p className="pc-heading">Privacy Policy</p>
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
          Welcome to Bloom Digitale. Your privacy is paramount to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you visit our website, engage our services, or
          interact with our digital platforms. By using our services, you agree
          to the terms outlined in this policy.
        </p>
      </div>

      <div>
        <p>2. who we are </p>

        <p>
          Bloom Digitale is a digital product studio specializing in branding,
          website and mobile app development, engineered to help businesses
          scale in the modern era. <br />
          If you have questions regarding this policy, please email us at:
          <br />
          📧bloomdigitale@gmail.com
        </p>
      </div>

      <div>
        <p>3. information we collect </p>

        <p>
          To provide top-quality service and improve your experience, we collect
          the following:
        </p>

        <p>
          a. Personal Information: <br />
          When you fill out a contact form, request a quote, or subscribe to
          updates, we may collect:
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Business/Company Name</li>
            <li>Project Details or Inquiry Messages</li>
          </ul>
        </p>

        <p>
          b. Non-Personal Information: <br />
          We automatically collect data to analyze website performance,
          including:
          <ul>
            <li>IP Address</li>
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our site</li>
          </ul>
        </p>
      </div>

      <div>
        <p>4. how we use your information </p>

        <p>
          We use the collected data to:
          <ul>
            <li>
              Facilitate communication regarding inquiries or ongoing projects
            </li>
            <li>Deliever and optimize the services you request.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>
              Send occasional project updates, industry insights, or newsletters
              (you may opt out at any time).{" "}
            </li>
            <li>Maintain internal records and ensure legal compliance.</li>
          </ul>
        </p>
      </div>

      <div>
        <p>5. data protection & security </p>

        <p>
          We implement industry-standard security measures to protect your data
          against unauthorized access, disclosure, or alteration. These include:
          <ul>
            <li>SSL Encryption for all data transmission.</li>
            <li>Secure Servers and robust firewalls.</li>
            <li>
              Restricted Access: Only authorized personnel essential to your
              project have access to your data.
            </li>
          </ul>
          <i>
            Note: While we tak every reasonable precaution, no method of
            electronic transmission is 100% secure.
          </i>
        </p>
      </div>

      <div>
        <p>6. sharing of information </p>

        <p>
          We do not sell, rent, or trade your personal information to third
          parties. Data is only shared in the following circumstances:
          <ul>
            <li>
              <span>Service Providers:</span> With trusted partners (e.g.,
              hosting providers, email tools) who assist in our operations under
              strict confidentiality agreements.
            </li>
            <li>
              <span>Legal Requirements:</span> If required by law or to protect
              the legal rights and safety of Bloom Digitale and our clients.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <p>7. Cookies and Tracking</p>

        <p>
          Our website uses cookies to enhance your experience. These help us
          understand user behavior and personalize content. You can modify your
          browser settings to decline cookies, though some site features may be
          limited as a result.
        </p>
      </div>

      <div>
        <p>8. your rights & choices</p>

        <p>
          Depending on your location, you have the right to:
          <ul>
            <li>
              <span>Access:</span> Request a copy of the data we hold about you.
            </li>

            <li>
              <span>Correction:</span> Request updates to inaccurate or
              incomplete information.
            </li>

            <li>
              <span>Deletion:</span> Request the permanent removal of your
              personal data.
            </li>

            <li>
              <span>Withdrawal:</span> Opt-out of marketing communications at
              any time.
            </li>
          </ul>
          To exercise these rights, please email us at bloomdigitale@gmail.com.
        </p>
      </div>

      <div>
        <p>9. international data transfers</p>

        <p>
          As a global-facing agency, your information may be processed in
          countries where data protection laws differ from your own. We ensure
          all transfers comply with applicable legal frameworks to maintain the
          security of your data.
        </p>
      </div>

      <div>
        <p>10. updates to this policy </p>

        <p>
          We may update this policy periodically to reflect changes in our
          practices. Updates will be posted on this page with a revised "Last
          Updated" date.
        </p>
      </div>

      <div>
        <p>11. contact us</p>

        <p>
          If you have questions regarding these policies, please contact us at:
          <ul>
            <li>bloomdigitale@gmail.com</li>
            <li>www.bloomdigitale.com</li>
          </ul>
        </p>
      </div>
    </ComponentAnimation>
  );
}
