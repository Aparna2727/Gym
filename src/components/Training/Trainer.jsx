import React from "react";
import styles from "./trainer.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRef } from "react";
import { data } from "./Data/TrainerData";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Trainer() {
  console.log(data);
  const navigate = useNavigate();
  const scrollRef = useRef();
  const handleLeftScroll = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const handleShowAllTrainers = () => {
    // Logic to handle "Show All Trainers" button click
    // Implement the desired behavior here
    navigate("/alltrainers");
  };

  return (
    <>
      <div id="training" className={styles.trainerContainer}>
        <h1>Training Program</h1>
        <h3 style={{color:"red", marginTop:"-2rem", fontSize:"1.5rem"}}>MEET OUR TEAM</h3>
        <p style={{color:"gray"}}>We are a team of experienced people,nutntion,sports and fitness passionate expert with talent <br /> and knowledge unsurpassed in the industry.Get to know us.</p>
        <div ref={scrollRef} className={styles.slider}>
          {data.map((trainer) => (
            <div className={styles.slide}>
              <img src={trainer.urls.regular} alt={trainer.alt_description} />
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.showAllButton}
            onClick={handleShowAllTrainers}
          >
            SEE THE WHOLE TEAM
          </button>
          <button className={styles.button} onClick={handleLeftScroll}>
            <MdArrowBack size={26} />
          </button>
          <button className={styles.button} onClick={handleRightScroll}>
            <MdArrowForward size={26} />
          </button>
        </div>
      </div>
    </>
  );
};

