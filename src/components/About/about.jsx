import React from "react";
import style from "./about.module.css";

export function AboutPage() {

function handleClick(){
  alert("Clicked from about us section")
}

  return (

    <>
      <div
      id="about" className={style.aboutContainer}
        // style={{
        //   backgroundImage: `url("https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "100%",
        //   height: "120vh",
        // }}
      >
        <div className={style.part1}>
          <label className={style.video1}>
            <iframe
              width="300"
              height="350"
              src="https://www.youtube.com/embed/3-06gJotbHc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </label>

          <div className={style.aboutText_part1}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ducimus unde voluptas sapiente fugiat ad ratione
              officiis minus officia nisi similique maxime quas exercitationem
              ea necessitatibus corporis recusandae deleniti consectetur
              deserunt dolore, temporibus dicta nostrum vel non? Veritatis, nam
              architecto?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cum laboriosam quibusdam cumque sunt quisquam nulla
              assumenda sit delectus libero dolorum.
            </p>

            <button className={style.about_btn}>
              {" "}
              <a
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "white",
                }}
                href="https://www.youtube.com/@RohitKhatriFitness"
                onClick={handleClick}
              >
                Learn More
              </a>
            </button>
          </div>
        </div>

        <div className={style.part2}>
          <div className={style.aboutText_part2}>
            <h1>Why Choose Us?</h1>
            <div>
              <h3>
                <input type="radio" /> Consultations with Expert
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora nam voluptatem repellendus, quibusdam alias accusamus
                aliquid, itaque enim distinctio delectus placeat, ullam
                reprehenderit necessitatibus at eos deserunt corrupti officia?
                Tenetur!
              </p>
              <h3>
                <input type="radio" /> Consultations with Expert
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora nam voluptatem repellendus, quibusdam alias accusamus
                aliquid, itaque enim distinctio delectus placeat, ullam
                reprehenderit necessitatibus at eos deserunt corrupti officia?
                Tenetur!
              </p>
            </div>
          </div>

          <label className={style.video2}>
            <iframe
              width="300"
              height="350"
              src="https://www.youtube.com/embed/PCZ2JHaPvZ4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </label>
        </div>
      </div>
    </>
  );
}

