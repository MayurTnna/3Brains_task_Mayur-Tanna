"use client";
import React from "react";
import styles from "../assets/style/Portfolio.module.css";
import { BsFillStarFill } from "react-icons/bs";
import circus from "../../../public/portfolio/cake.jpg";
import circus1 from "../../../public/portfolio/circus.png";
import circus2 from "../../../public/portfolio/game.png";
import circus3 from "../../../public/portfolio/safe.png";
import circus4 from "../../../public/portfolio/submarine.png";

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
            <div className="row   mx-auto    ">
              <div className="col col-lg-4 col-md-6 col-sm-12  gy-5 gx-5 ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={350}
                  height={300}
                  priority
                  sizes="(max-width:768px) 100vw , 350vw"
                  className={styles.port_image}
                  rounded={true}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 gy-5 gx-5  ">
                <Image
                  src={circus1}
                  alt="cirkus"
                  width={350}
                  height={300}
                  priority
                  sizes="(max-width:768px) 100vw , 350px"
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 gy-5 gx-5  ">
                <Image
                  src={circus2}
                  alt="cirkus"
                  width={350}
                  height={300}
                  priority
                  sizes="(max-width:768px) 100vw , 350px"
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 gy-5 gx-5 ">
                <Image
                  src={circus3}
                  alt="cirkus"
                  /* The `width` and `height` attributes in the `Image` component are used to specify
                 the dimensions of the image being displayed. In this case, the image will be
                 displayed with a width of 350 pixels and a height of 300 pixels. */
                  width={350}
                  height={300}
                  priority
                  sizes="(max-width:768px) 100vw , 350px"
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 gy-5 gx-5  ">
                <Image
                  src={circus4}
                  alt="cirkus"
                  width={350}
                  height={300}
                  priority
                  sizes="(max-width:768px) 100vw , 350px"
                  className={styles.port_image}
                />
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 gy-5 gx-5 ">
                <Image
                  src={circus}
                  alt="cirkus"
                  width={350}
                  height={300}  
                  priority
                  sizes="(max-width:768px) 100vw , 350px"
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
