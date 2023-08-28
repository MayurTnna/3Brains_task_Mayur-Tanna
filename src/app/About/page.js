"use client";
import React from "react";
import styles from "../assets/style/About.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.about_main_container} id="about">
      <h2 className={styles.about_title}>About</h2>
      <div className={`${styles.divider_custom} ${styles.divider_light}`}>
        <div className={styles.divider_custom_line}></div>
        <div className={styles.divider_custom_icon}>
          <BsFillStarFill />
        </div>
        <div className={styles.divider_custom_line}></div>
      </div>
      <div className={styles.about_description}>
        <div className={`${styles.about_text_container} row mx-auto container`}>
          <div
            className={`${styles.about_description_text} col-lg-6 col-md-6 col-sm-12`}
          >
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div
            className={`${styles.about_description_text} col-lg-6 col-md-6 col-sm-12`}
          >
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </div>
        </div>
        <div className={styles.about_button}>
          <Button
            variant="outline-light"
            className={`${styles.about_button} mx-auto d-flex justify-content-center align-items-center`}
            size="lg"
          >
            Light
            <span className="mb-1 mx-2">
              <FaDownload />
            </span>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
