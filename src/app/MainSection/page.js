"use client";
import React from "react";
import styles from "../assets/style/MainSection.module.css";
import main_image from "../assets/images/main-hero.svg"; // Correct the import statement
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";

const MainSection = () => {
  return (
    <div className={styles.hero_main_container}>
      <div className={styles.main_image_container}>
        <Image src={main_image} />
      </div>
      <h1 className={styles.hero_title}>start bootstrap</h1>
      <div className={`${styles.divider_custom} ${styles.divider_light}`}>
        <div className={styles.divider_custom_line}></div>
        <div className={styles.divider_custom_icon}>
          <BsFillStarFill />
        </div>
        <div className={styles.divider_custom_line}></div>
      </div>
      <p className={styles.hero_subtitles}>
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
};

export default MainSection;
