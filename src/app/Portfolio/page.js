"use client";
import React from "react";
import styles from "../assets/style/Portfolio.module.css";
import { BsFillStarFill } from "react-icons/bs";
import circus from "../assets/images/main-hero.svg";
import Image from "next/image";
const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolio_main_container} id="portfolio">
        <h1 className={styles.portfolio_title}>Portfolio</h1>
        <div className={`${styles.divider_custom} ${styles.divider_light}`}>
          <div className={styles.divider_custom_line}></div>
          <div className={styles.divider_custom_icon}>
            <BsFillStarFill />
          </div>
          <div className={styles.divider_custom_line}></div>
        </div>
        <div className={styles.portfolio_cartoon_container}>
          <div className="container ">
            <div className="row   mx-auto container  ">
              <div className="col col-lg-4 col-md-6 col-sm-12  ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12  ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12  mx-auto">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={400}
                  height={300}
                  className={styles.port_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Portfolio;
