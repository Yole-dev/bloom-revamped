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
// import image2 from "../assets/about_us/aboutImage2.png";
import image3 from "../assets/about_us/aboutImage3.jpeg";
// import image4 from "../assets/about_us/aboutImage4.png";
// import image5 from "../assets/about_us/aboutImage5.png";
// import image6 from "../assets/about_us/aboutImage6.png";
// import image7 from "../assets/about_us/aboutImage7.png";
import image8 from "../assets/about_us/aboutImage8.png";

export default function AboutUs() {
  return (
    <PageAnimation className="about-us-container">
      <p className="mobile-heading">About Us</p>

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
        <p className="pc-heading">About Us</p>
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
      <VisionMission />
      {/* <WhyBloom /> */}
      <MessageFromCeo />
      {/* <MeetTheTeam /> */}
    </section>
  );
}

function CompanyBio() {
  return (
    <section className="company-bio">
      <RightComponentAnimation>
        <Box
          width={1289}
          height={491}
          gap={2}
          background="#02acb9"
          color="#ffffff"
          borderRadius={2}
          flexDirection="column"
          className="about"
        >
          <p>
            Bloom Digitale is a digital agency built on collaboration,
            creativity, and results. We partner closely with our clients to
            understand their goals at a deeper level, allowing us to design and
            develop solutions that are purposeful, effective, and scalable. By
            combining design, technology, and strategy, we create digital
            experiences that are intuitive, engaging, and built for growth. We
            stay ahead of industry trends to ensure every solution we deliver is
            not only relevant today, but ready for what’s next. At Bloom
            Digitale, we help businesses move forward with digital solutions
            that truly work.
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
                text={20}
                duration={4}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Projects <br /> Delivered
            </p>
          </div>

          <div>
            <p>
              <TextAnimation
                text={15}
                duration={5}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Clients <br /> Worked With
            </p>
          </div>

          <div>
            <p>
              <TextAnimation
                text={5}
                duration={6}
                color="#0755e9"
                animationType="count"
              />
              +
            </p>
            <p>
              Years <br /> Of Experience{" "}
            </p>
          </div>
        </div>
      </Box>
    </ComponentAnimation>
  );
}

function VisionMission() {
  return (
    <ComponentAnimation className="vision-mission">
      <LeftComponentAnimation className="vision-mission-text">
        <p>Our Vision and Mission</p>

        <p>
          Our vision is to empower businesses and brands through
          forward-thinking digital solutions that position them for growth in
          the modern digital era. Supporting this vision, our mission is to
          deliver strategically designed, user-centric websites and mobile
          applications that enhance performance, improve customer engagement,
          and drive measurable results.
        </p>
      </LeftComponentAnimation>

      <RightComponentAnimation className="vision-mission-img">
        <img src={image8} alt="" />
      </RightComponentAnimation>
    </ComponentAnimation>
  );
}

// function WhyBloom() {
//   return (
//     <ComponentAnimation className="why-bloom">
//       <div>
//         <p>Why Bloom Digitale?</p>

//         <p>
//           A forward thinking digital agency committed to crafting innovative,
//           user centric solutions that drive success.
//         </p>
//       </div>

//       <div>
//         <LeftComponentAnimation className="why-bloom-text">
//           At Bloom, we create strategic solutions that help brands grow and stay
//           ahead of the competition. From web design, branding, UIUX, and mobile
//           app development to Flutter development, we craft experiences that
//           drive engagement and maximize ROI. <br /> <br /> We don’t just help
//           businesses rise to the top—we ensure they stay there. From strategy to
//           execution, Bloom takes care of your entire marketing and digital
//           presence, setting you apart from competitors by a large margin. Our
//           mission is to connect businesses with their target audience through
//           innovative digital solutions. With our full-service marketing and
//           development expertise, we help brands make a lasting impact in their
//           industry.
//         </LeftComponentAnimation>

//         <RightComponentAnimation className="why-bloom-img">
//           <img src={image2} alt="" />
//         </RightComponentAnimation>
//       </div>
//     </ComponentAnimation>
//   );
// }

function MessageFromCeo() {
  return (
    <ComponentAnimation className="message-main-container">
      <Box
        background="#02acb9"
        color="#ffffff"
        width={1240}
        height={799}
        gap={3}
        borderRadius={3}
        className="ceo-message"
      >
        <div>
          <p>A Word from Our Founder & CEO</p>

          <p>
            <span>Bloom Digitale</span> began with a simple idea, a commitment
            to creating thoughtful, high-quality digital experiences that solve
            real business problems. What started as a one-person pursuit of
            design and strategy quickly evolved as more clients trusted the
            vision and the work. <br />
            Today, Bloom Digitale is a growing team of designers, developers,
            and strategists united by a shared focus on clarity, innovation, and
            results. We believe design is more than how something looks, it’s
            how it works, how it feels, and the impact it creates. Every project
            we take on is approached with purpose: to improve user experience,
            drive engagement, and help businesses grow with confidence. At Bloom
            Digitale, we don’t just build digital products, we build solutions
            that move brands forward.
            <br />
            <span>Welcome to Bloom Digitale.</span>
          </p>
        </div>

        <div>
          <img src={image3} alt="CEO's portriate" />

          <p>
            CHINEDU UMEH <br />
            <span>Founder and CEO</span>
          </p>
        </div>
      </Box>
    </ComponentAnimation>
  );
}

// Temproarily removed this section of the about us page.

// function MeetTheTeam() {
//   return (
//     <ComponentAnimation className="meet-the-team">
//       <div>
//         <p>Let's Meet Our Team</p>

//         <p>
//           Meet the awesome team making things happen at Bloom—creative,
//           passionate, and ready to bring your ideas to life!
//         </p>
//       </div>

//       <TheTeam />
//     </ComponentAnimation>
//   );
// }

// function TheTeam() {
//   const pastCompany = "Used to work at IBM but quit because of bloom";

//   const socialIcons = [
//     <ion-icon name="logo-twitter"></ion-icon>,
//     <ion-icon name="logo-facebook"></ion-icon>,
//     <ion-icon name="logo-linkedin"></ion-icon>,
//   ];

//   const teamMember = [
//     {
//       img: image4,
//       name: "James Felix",
//       position: "Founder and CEO",
//       pastCompany: `${pastCompany}`,
//     },
//     {
//       img: image5,
//       name: "Rabid Zainab",
//       position: "Team Lead",
//       pastCompany: `${pastCompany}`,
//     },
//     {
//       img: image6,
//       name: "Christiana Dave",
//       position: "Product Designer",
//       pastCompany: `${pastCompany}`,
//     },
//     {
//       img: image7,
//       name: "Lawrence Luke",
//       position: "Flutter Developer",
//       pastCompany: `${pastCompany}`,
//     },
//     {
//       img: image5,
//       name: "Julius Ozima",
//       position: "Brand Designer",
//       pastCompany: `${pastCompany}`,
//     },
//     {
//       img: image6,
//       name: "Rachel Richards",
//       position: "Frontend Developer",
//       pastCompany: `${pastCompany}`,
//     },
//   ];
//   return (
//     <section className="team-grid">
//       {teamMember.map((member) => (
//         <ComponentAnimation className="member-details" key={member.name}>
//           <div>
//             <img src={member.img} alt={member.name} />
//             <p className="member-name">{member.name}</p>
//             <p className="member-role">{member.position}</p>
//           </div>

//           <div className="member-socials-container">
//             <p>{member.pastCompany}</p>

//             <div className="member-socials">
//               {socialIcons.map((icon, i) => (
//                 <span key={i}>{icon}</span>
//               ))}
//             </div>
//           </div>
//         </ComponentAnimation>
//       ))}
//     </section>
//   );
// }
