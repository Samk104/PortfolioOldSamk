import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Kotlin", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 95 },
    { skill: "Mongo DB", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 88 },
    { skill: "CSS", ratingPercentage: 89 },
    { skill: "Flutter", ratingPercentage: 75 },
    { skill: "Firebase", ratingPercentage: 92 },
  ];

  const projectsDetails = [
   {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A personal portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },

    {
      title: "News App",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A news app that uses an api to fetch latest news for a region.",
      subHeading: "Technologies Used: Kotlin, Java",
    },

    {
      title: "Procoder - Founder and CTO",
      duration: { fromDate: "2020", toDate: "2022" },
      description: "Developed a platform for high schoolers for programming practicals during the pandemic.Designed special courses for specailly abled students. Developed and organized the course content and scaled the userbase from scratch to 2000 learners. Also harnesses the userbase to crowdfund NGOs.",
      subHeading: "Technologies Used: HTML, CSS, Javascript",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
       <ResumeHeading
        heading={"Honors College @ Georgia State University, Atlanta"}
        subHeading={"Bachelor of Science in Computer Science"}
        fromDate={"2021"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Saint Xavier's School, Bokaro"}
        subHeading={"High School"}
        fromDate={"2018"}
        toDate={"2021"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"PantherTech"}
          subHeading={"Tech Lead"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an online instructor.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed workshops and material inspired by project-based learning. Organized and conducted 
            workshops for students,staff anf faculty members.
          </span>
          <br />
          <span className="resume-description-text">
            - Designed and developed wesites, webapps and android applications providing follow along tutorials as well as support.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Contributed to a number of new projects and increase in attendance of workshops by 50%.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
          heading="Teaching"
          description="Apart from being a tech enthusiast and a passionate developer, I also love to share my knowledge with others!"
        />
        <ResumeHeading
          heading="Music"
          description="My second love has always been music! I love listening to soothing songs when I take breaks and I also love playing instruments!"
        />
        <ResumeHeading
          heading="Film Making"
          description="Capturing the beauty of things around me has always been a hobby. I enjoy taking out my camera and documenting the beauty of things around me!"
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
