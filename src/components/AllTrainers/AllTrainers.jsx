import React from "react";
import styles from "./AllTrainers.module.css";
import { data } from "../Training/Data/TrainerData";

const AllTrainers = () => {
  return (
    <>
      <h1 className={styles.heading}>All Trainer List</h1>
      <div className={styles.slider}>
        {data.map((trainer) => (
          <div className={styles.slide}>
            <img src={trainer.urls.regular} alt={trainer.alt_description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTrainers;