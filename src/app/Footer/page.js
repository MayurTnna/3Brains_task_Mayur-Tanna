import React from "react";
import styles from "../assets/style/Footer.module.css";
import Image from "next/image";
import neon from "../assets/images/neon.svg";
import neon2 from "../assets/images/neon2.svg";
import neon3 from "../assets/images/neon3.svg";
import neon1 from "../assets/images/neon1.svg";

const Footer = () => {
  return (
    <div className={styles.footer_main_container}>
      <div className={`${styles.footer_sub_container} container`}>
        <div className="row">
          <div className="col-lg-4 col-md-12 my-4">
            <p className={styles.uptext}>Location</p>
            <p className={styles.downtext}>
              2215 John Daniel Drive Clark, MO 65243
            </p>
          </div>
          <div className="col-lg-4 col-md-12 my-4">
            <p className={styles.uptext}>AROUND THE WEB</p>
            <div className="d-flex">
              <Image
                src={neon}
                alt="neon"
                height={50}
                width={50}
                className={`${styles.footer_icons} mx-2`}
              />
              <Image
                src={neon1}
                alt="neon1"
                height={50}
                width={50}
                className={`${styles.footer_icons} mx-2`}
              />
              <Image
                src={neon2}
                alt="neon2"
                height={50}
                width={50}
                className={`${styles.footer_icons} mx-2`}
              />
              <Image
                src={neon3}
                alt="neon3"
                height={50}
                width={50}
                className={`${styles.footer_icons} mx-2`}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <p className={styles.uptext}>ABOUT FREELANCER</p>
            <p className={styles.downtext}>
              2215 John Daniel Drive Clark, MO 65243
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
