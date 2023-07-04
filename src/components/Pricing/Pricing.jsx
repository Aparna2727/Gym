import React from "react";
import styles from "./pricing.module.css";
import {BiRightArrowCircle} from 'react-icons/bi'
import {BsCurrencyDollar} from 'react-icons/bs'
import EastIcon from "@mui/icons-material/East";

export function PricingSection() {
  return (
    <>
      <div id="pricing" className={styles.main_container}>
        <div className={styles.contents}>
          {/* card1 */}
          <div className={styles.card1_part}>
            <div className={styles.C1}>
              <div className={styles.head1}>
                <h4>Day Pass</h4>
                <h1><BsCurrencyDollar/>20</h1>
                <small
                  style={{
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "rgb(200, 198, 198)",
                    fontWeight: "bold",
                  }}
                >
                  /pass
                </small>
              </div>
              <div className={styles.mid1}>
                <p><BiRightArrowCircle  style={{color:"gray", fontSize:"1.2rem"}}/>{" "}1 Day Pass</p>
                <p><BiRightArrowCircle  style={{color:"gray", fontSize:"1.2rem"}}/>{" "}Free Gym Access</p>
                <p><BiRightArrowCircle  style={{color:"gray", fontSize:"1.2rem"}}/>{" "}24 Hour Access</p>
              </div>

              <button className={styles.btn_card1}>GET STARTED</button>
            </div>
          </div>

          {/* card2 */}
          <div className={styles.card2_part}>
            <div className={styles.C2}>
              <div className={styles.head2}>
                <h4>Month to Month</h4>
                <h1><BsCurrencyDollar/>90</h1>
                <small
                  style={{
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "gry",
                    fontWeight: "bold",
                  }}
                >
                  /month
                </small>
              </div>
              <div className={styles.mid2}>
                <p><BiRightArrowCircle style={{color:"green", fontSize:"1.2rem"}}/>{" "}$ 99 Joining Free</p>
                <p><BiRightArrowCircle  style={{color:"green", fontSize:"1.2rem"}}/>{" "}No Contract</p>
                <p><BiRightArrowCircle  style={{color:"green", fontSize:"1.2rem"}}/>{" "}Free Gym Access</p>
                <p><BiRightArrowCircle  style={{color:"green", fontSize:"1.2rem"}}/>{" "}1 Group Class Included</p>
                <p><BiRightArrowCircle  style={{color:"green", fontSize:"1.2rem"}}/>{" "}24 Hour Access</p>
              </div>
              <button className={styles.btn_card2}>GET STARTED</button>
            </div>
          </div>

          {/* text coloumn */}
          <div className={styles.text_part}>
            <div className={styles.text1_intro}>
              <h3>Membership</h3>
              <h2>From Punch Pass to Monthly or Annual</h2>
              <p>
                At Gym Base,we offer a wide range of membership with option to
                suit <br />
                every budget Everything from One Day Pass, Punch Pass to monthly
                or <br />
                annual prepaid memberships. What's more, we won't tie you in to
                a long <br />
                team contract giving you greater flexibility.{" "}
              </p>
            </div>

            <div className={styles.text2_plan}>
              <h3>Each plan included</h3>
              <p>
                <EastIcon style={{ color: "green" }} /> The best equipment
                global brands
              </p>
              <p>
                <EastIcon style={{ color: "green" }} /> The gym is open 24 hours
                a day,7 days a week
              </p>
              <p>
                <EastIcon style={{ color: "green" }} /> Two safe payment methods
              </p>
              <p>
                <EastIcon style={{ color: "green" }} /> Group fitness classes in
                the price of the subscription
              </p>
              <p>
                <EastIcon style={{ color: "green" }} /> No long-team
                contract,period
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
