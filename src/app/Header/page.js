"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../assets/style/Header.module.css";
import { useState , useEffect } from "react";

function Header() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  console.log(window.scrollY);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={` ${styles.main_nav_container} ${
        isScrolled && styles.main_nav_small_container
      } navbar navbar-expand-lg bg-secondary text-uppercase fixed-top`}
      id="mainNav"
    >
      <Container>
        <Navbar.Brand href="#" className={styles.main_title}>
          Create bootstrap
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.menu_button}
        >
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#portfolio" className={styles.nav_items}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#about" className={styles.nav_items}>
              About
            </Nav.Link>
            <Nav.Link href="#footer" className={styles.nav_items}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
