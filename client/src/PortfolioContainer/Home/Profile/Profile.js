import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
              <div className="colz-icon">    
            <a href="https://www.facebook.com/samujjwal.kumar">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/u_samk1/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCsmyFvNAkggwBtNc4BIuckg">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://twitter.com/kumar_samujjwal">
              <i className="fa fa-twitter-square"></i>
            </a>
              </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Sam</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🧑‍💻",
                    1000,
                    "Full Stack Developer💻",
                    1000,
                    "MERN Stack Dev✍",
                    1000,
                    "ML Enthusiast📖",
                    1000,
                    "Curious Learner👀",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                A passionate developer of front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
          <button className="btn primary-btn"
                 onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >
              {""}
              Contact Me{" "}
            </button>
            <a href="samcv.pdf" download="Sam Kumarcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
