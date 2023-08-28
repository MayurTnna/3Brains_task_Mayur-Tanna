"use client";
import React from "react";
import styles from "../assets/style/Contact.module.css";
import { BsFillStarFill } from "react-icons/bs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <>
      <div className={styles.contact_main_container} id="footer">
        <p className={styles.contact_title}>Contact me</p>
        <div className={`${styles.divider_custom} ${styles.divider_light}`}>
          <div className={styles.divider_custom_line}></div>
          <div className={styles.divider_custom_icon}>
            <BsFillStarFill />
          </div>
          <div className={styles.divider_custom_line}></div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.main_input_container}>
            <FloatingLabel
              controlId="floatingInput"
              label="Full name"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className={styles.main_input}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className={styles.main_input}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Phone number">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                className={styles.main_input}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="message">
              <Form.Control
                type="text"
                placeholder="message"
                className={styles.main_input}
              />
            </FloatingLabel>
            <div className={styles.button_container}>
              <button className={styles.submit_button}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
