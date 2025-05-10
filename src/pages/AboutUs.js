// imported animation components
import ComponentAnimation from "../components/ComponentAnimation";
import PageAnimation from "../components/PageAnimation";
import LeftComponentAnimation from "../components/LeftComponentAnimation";
import RightComponentAnimation from "../components/RightComponentAnimation";
import TextAnimation from "../components/TextAnimation";

// imported reusable component
import CircleButton from "../components/Circlebtn";
import Box from "../components/Box";
import RequestForCallSection from "../components/RequestForCallSection";

// imported images
import image1 from "../assets/about_us/aboutImage1.png";
import image2 from "../assets/about_us/aboutImage2.png";
import image3 from "../assets/about_us/aboutImage3.png";
import image4 from "../assets/about_us/aboutImage4.png";
import image5 from "../assets/about_us/aboutImage5.png";
import image6 from "../assets/about_us/aboutImage6.png";
import image7 from "../assets/about_us/aboutImage7.png";

export default function AboutUs() {
  return (
    <PageAnimation className="about-us-container">
      <HeaderSection />
      <MainSection />
      <RequestForCallSection />
    </PageAnimation>
  );
}

function HeaderSection() {
  return (
    <ComponentAnimation className="about-us-header">
      <p>
        Learn about our commiment to excellence, innovation and the principle
        that guides our work every day.
      </p>

      <div className="about-us-hero">
        <p>About Us</p>
        <img src={image1} alt="" />
        <CircleButton
          background="#ff6016"
          fontSize={30}
          height={100}
          width={101}
          className="about-us-hero-circle"
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </CircleButton>
      </div>
    </ComponentAnimation>
  );
}

function MainSection() {
  return (
    <section className="about-us-main">
      <CompanyBio />
      <ProjectsBoard />
      <WhyBloom />
      <MessageFromCeo />
      <MeetTheTeam />
    </section>
  );
}

function CompanyBio() {
  return (
    <section className="company-bio">
      <LeftComponentAnimation className="team">
        <div>
          <ion-icon name="code-outline" className="code-icon"></ion-icon>
          <p>
            {"\u00a0"}Our team of experts works tirelessly to bring your vision
            to life, ensuring every project we undertake not only meets but
            exceeds expectations. We are dedicated to transforming your ideas
            into impactful digital experiences that resonate with your audience
            and drive success. Let me know if you want me to refine or rewrite
            it in a different style.
          </p>
          <ion-icon name="code-slash-outline" className="code-icon"></ion-icon>
        </div>

        <Box
          background="#D9D9D9"
          height={147}
          width={561}
          borderRadius={2}
          className="bio-box"
        ></Box>
      </LeftComponentAnimation>

      <RightComponentAnimation>
        <Box
          width={614}
          height={491}
          gap={2}
          background="#5B94FF"
          color="#ffffff"
          borderRadius={2}
          flexDirection="column"
          className="about"
        >
          <p>about us</p>

          <p>
            We believe in the power of collaboration and creativity. By
            partnering closely with our clients, we gain a deep understanding of
            their unique needs and goals, allowing us to deliver customized
            solutions that truly make a difference.
            <br /> <br />
            Our holistic approach integrates design, technology, and strategy to
            create seamless and engaging digital experiences. By staying ahead
            of the curve and embracing the latest trends and technologies, we
            ensure that we provide cutting edge solutions that not only address
            current challenges but also anticipate future opportunities. Let us
            help you navigate the digital landscape and achieve your business
            objectives with Bloom.
          </p>
        </Box>
      </RightComponentAnimation>
    </section>
  );
}

function ProjectsBoard() {
  return (
    <ComponentAnimation className="board-box-container">
      <Box
        border="solid 1px #141414"
        borderRadius={3.3}
        width={1236}
        height={154}
        className="board-box"
      >
        <div className="board">
          <div>
            <p>
              <TextAnimation
                text={200}
                duration={4}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Project <br /> Completed
            </p>
          </div>

          <div>
            <p>
              <TextAnimation
                text={150}
                duration={5}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Project <br /> Completed
            </p>
          </div>

          <div>
            <p>
              <TextAnimation
                text={50}
                duration={6}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Project <br /> Review
            </p>
          </div>
        </div>
      </Box>
    </ComponentAnimation>
  );
}

function WhyBloom() {
  return (
    <ComponentAnimation className="why-bloom">
      <div>
        <p>Why Bloom?</p>

        <p>
          A forward thinking digital agency committed to crafting innovative,
          user centric solutions that drive success.
        </p>
      </div>

      <div>
        <LeftComponentAnimation className="why-bloom-text">
          At Bloom, we create strategic solutions that help brands grow and stay
          ahead of the competition. From web design, branding, UIUX, and mobile
          app development to Flutter development, we craft experiences that
          drive engagement and maximize ROI. <br /> <br /> We don’t just help
          businesses rise to the top—we ensure they stay there. From strategy to
          execution, Bloom takes care of your entire marketing and digital
          presence, setting you apart from competitors by a large margin. Our
          mission is to connect businesses with their target audience through
          innovative digital solutions. With our full-service marketing and
          development expertise, we help brands make a lasting impact in their
          industry.
        </LeftComponentAnimation>

        <RightComponentAnimation className="why-bloom-img">
          <img src={image2} alt="" />
        </RightComponentAnimation>
      </div>
    </ComponentAnimation>
  );
}

function MessageFromCeo() {
  return (
    <ComponentAnimation className="message-main-container">
      <Box
        background="#5B94FF"
        color="#ffffff"
        width={1240}
        height={799}
        gap={3}
        borderRadius={3}
        className="ceo-message"
      >
        <div>
          <p>Dear Entreprener, we've been waiting for you</p>

          <p>
            <span>“</span>
            <span>A Word from Our Founder and CEO</span> <br /> I’m Your Name,
            the <span>Founder and CEO</span> at Bloom. Bloom started as a simple
            idea—a passion for creating exceptional digital experiences. At
            first, it was just me, designing and strategizing, working on small
            projects with a big vision in mind. But as demand grew, so did the
            team, and today, we are a dedicated group of FRFF creatives driven
            by innovation, strategy, and results.
            <br /> <br />
            At Bloom, we believe design is more than just aesthetics; it’s about
            impact. Every project we take on is crafted to not only look
            stunning but to enhance user experience, drive engagement, and
            ultimately help businesses grow. We are here to turn ideas into
            reality, to push creative boundaries, and to build solutions that
            matter. Welcome to Bloom—let’s create something remarkable together.
          </p>
        </div>

        <div>
          <img src={image3} alt="CEO's portriate" />

          <p>
            JAMES FELIX <br />
            <span>Founder and CEO</span>
          </p>
        </div>
      </Box>
    </ComponentAnimation>
  );
}

function MeetTheTeam() {
  return (
    <ComponentAnimation className="meet-the-team">
      <div>
        <p>Let's Meet Our Team</p>

        <p>
          Meet the awesome team making things happen at Bloom—creative,
          passionate, and ready to bring your ideas to life!
        </p>
      </div>

      <TheTeam />
    </ComponentAnimation>
  );
}

function TheTeam() {
  const pastCompany = "Used to work at IBM but quit because of bloom";

  const socialIcons = [
    <ion-icon name="logo-twitter"></ion-icon>,
    <ion-icon name="logo-facebook"></ion-icon>,
    <ion-icon name="logo-linkedin"></ion-icon>,
  ];

  const teamMember = [
    {
      img: image4,
      name: "James Felix",
      position: "Founder and CEO",
      pastCompany: `${pastCompany}`,
    },
    {
      img: image5,
      name: "Rabid Zainab",
      position: "Team Lead",
      pastCompany: `${pastCompany}`,
    },
    {
      img: image6,
      name: "Christiana Dave",
      position: "Product Designer",
      pastCompany: `${pastCompany}`,
    },
    {
      img: image7,
      name: "Lawrence Luke",
      position: "Flutter Developer",
      pastCompany: `${pastCompany}`,
    },
    {
      img: image5,
      name: "Julius Ozima",
      position: "Brand Designer",
      pastCompany: `${pastCompany}`,
    },
    {
      img: image6,
      name: "Rachel Richards",
      position: "Frontend Developer",
      pastCompany: `${pastCompany}`,
    },
  ];
  return (
    <section className="team-grid">
      {teamMember.map((member) => (
        <ComponentAnimation className="member-details" key={member.name}>
          <div>
            <img src={member.img} alt={member.name} />
            <p className="member-name">{member.name}</p>
            <p className="member-role">{member.position}</p>
          </div>

          <div className="member-socials-container">
            <p>{member.pastCompany}</p>

            <div className="member-socials">
              {socialIcons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </div>
        </ComponentAnimation>
      ))}
    </section>
  );
}
