import React from "react";
import style from "./main.module.css";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { Navbar } from "./Navbar";
import { AboutPage } from "../About/about";
import { Trainer } from "../Training/Trainer";
import { PricingSection } from "../Pricing/Pricing";
import { FooterPage } from "../Footer/footer";
// menu icon
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
export function MainPage() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <nav className={style.navbar_container}>
          <HashLink to="#home" smooth style={{ textDecoration: "none" }}>
            <a href="" className={style.left_logo}>
              <h2>
                GymClub
                <CgGym style={{ color: "rgb(249, 249, 167)" }} />
              </h2>
            </a>
          </HashLink>

          <div className={style.menuIcon} onClick={toggleMenu}>
            {showMenu ? <FiX /> : <FaBars />}
          </div>

          <ul className={`${style.navLinks} ${showMenu ? style.showMenu : ""}`}>
            <li>
              <HashLink to="#home" smooth>
                <a href="">Home</a>
              </HashLink>
            </li>
            <li>
              <HashLink to="#about" smooth>
                <a href="">About Us</a>{" "}
              </HashLink>
            </li>
            <li>
              <Link to="/alltrainers">
                <a href="">Program</a>
              </Link>
            </li>
            <li>
              <HashLink to="#training" smooth>
                {" "}
                <a href="">Training</a>
              </HashLink>
            </li>
            <li>
              <HashLink to="#pricing" smooth>
                {" "}
                <a href="">Pricing</a>
              </HashLink>
            </li>
            <Link to="/registor">
            <button className={style.JoinUs_btn}>Join Us</button>
          </Link>
          </ul>

        </nav>

        <div className={style.Text_container}>
          <div className={style.Text_inner_container}>
            <h1>Fitness Club</h1>
            <p>
              <span style={{ color: "red" }}>"Take</span> care of your{" "}
              <span style={{ color: "red" }}>body.</span>
              <br /> It's the only place you have to{" "}
              <span style={{ color: "red" }}>live"</span>
            </p>
            <Link to="/registor">
              {" "}
              <button className={style.text_btn}>Join With Us</button>
            </Link>
          </div>
        </div>
      </div>

      <AboutPage/>
      <Trainer/>
      <PricingSection/>
      <FooterPage/>
    </>
  );
}
