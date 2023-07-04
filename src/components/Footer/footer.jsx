import React from "react";
import style from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

export function FooterPage() {
  return (
    <>
      <div className={style.full_div}>
        <footer className={style.footer_section}>
          <div className={style.left_side}>
            <h1 style={{ color: "rgb(244, 56, 87)" }}>GYM</h1>
            <p
              style={{ color: "white", fontSize: "1.2rem", textAlign: "start" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              modi quas incidunt harum cupiditate omnis?
            </p>
            <div className={style.footer_icons}>
             <a href="https://www.facebook.com/aparna.sahu.50364">
             <BsFacebook
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  cursor: "pointer",
                }}
              />
              </a> 
              <a href="https://instagram.com/aparna_sahuu?igshid=MzNlNGNkZWQ4Mg==">
              <GrInstagram
                style={{
                  marginLeft: "1rem",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  background: "white",
                  cursor: "pointer",
                }}
              />
              </a>
              
              <a href="https://twitter.com/home?lang=en">
              <AiFillTwitterCircle
                style={{
                  marginLeft: "1rem",
                  background: "white",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  cursor: "pointer",
                }}
              />
              </a>
              
            </div>
          </div>

          <div className={style.right_side}>
            <div className={style.right_line1}>
              <h2 style={{ color: "white" }}>Healthy living</h2>
              <div className={style.UL}>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
              </div>
            </div>
            <div className={style.right_line2}>
              <h2 style={{ color: "white" }}>Services</h2>
              <div className={style.UL}>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
              </div>
            </div>
            <div className={style.right_line3}>
              <h2 style={{ color: "white" }}>Programms</h2>
              <div className={style.UL}>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
                <p>Lorem</p>
                <p>Lorem, ipsum</p>
              </div>
            </div>
          </div>
        </footer>
        <p>@2023 isr All rights copy reserved</p>
      </div>
    </>
  );
}
