import { useEffect, useRef, useState } from "react";
import * as Icon from "react-bootstrap-icons";
// import "animate.css";
import gsap from "gsap";
import Tooth from "./assets/tooth.svg";

function App() {
  const [arrDirOne, setArrDirOne] = useState("right");
  const [changeArrDirection, setChangeArrDirection] = useState(false);

  const svgMarkUp = `<img src=${Tooth} className='tooth-svg' />`;
  const svgArrLeft =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>';
  const svgArrRight =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>';

  const TL = gsap.timeline();

  useEffect(() => {
    gsap.fromTo(
      "#sub-text_1",
      {
        borderRadius: "40%",
        delay: 4,
        ease: "power3.in",
      },
      {
        width: "33px",
        delay: 2,
        padding: "15px",
        borderRadius: "50%",
        innerHTML: svgArrRight,
        duration: 1,
        onComplete: () => {
          console.log("completed changing dental to arrow");
          gsap.to("#arrOne", {
            rotation: 90,
            duration: 1,
            onComplete: () => {
              gsap.to("#arrOne", {
                y: 40,
                onComplete: () => {
                  gsap.to("#arrOne", { rotate: 0 });
                },
              });
            },
          });
          gsap.to("#sub-text_1", {
            innerHTML: svgArrRight,
            delay: 0.1,
            onComplete: () => {
              gsap.to("#sub-text_1", {
                rotation: 90,
                // delay: 0.05,
                // duration: 2,
                onComplete: () => {
                  gsap.to("#sub-text_1", {
                    y: 40,
                    // duration: 0,
                    //  delay: 0.2
                    onComplete: () => {
                      gsap.to("#sub-text_1", { rotate: 0 });
                    },
                  });
                },
              });
            },
          });
        },
      }
    );
    gsap.fromTo(
      "#sub-text_2",
      {
        borderRadius: "40%",
        delay: 4,
        ease: "power3.in",
      },
      {
        width: "33px",
        delay: 2,
        padding: "15px",
        borderRadius: "50%",
        innerHTML: svgArrLeft,
        duration: 1,
        onComplete: () => {
          gsap.to("#sub-text_2", {
            rotation: 90,
            duration: 1,
            onComplete: () => {
              gsap.to("#sub-text_2", {
                y: -53,
              });
              gsap.to("#arrTwo", { y: -53 });
            },
          });
          levelIconCircles();
        },
      }
    );
  });

  const levelIconCircles = () => {
    const text1 = document.getElementById("sub-text_1");
    const text2 = document.getElementById("sub-text_2");
    const arrOne = document.getElementById("arrOne");
    const arrTwo = document.getElementById("arrTwo");

    TL.to(arrOne, { x: 80, duration: 2, opacity: 0, delay: 2 }, 1);
    TL.to(arrTwo, { x: -80, duration: 2, delay: 2 }, 1);

    TL.to(text1, { x: 40, duration: 2, delay: 2, opacity: 0 }, 1);
    TL.to(
      text2,
      {
        x: -60,
        duration: 2,
        delay: 2,
        opacity: 0,
        onComplete: () => {
          gsap.fromTo(
            "#companyname",
            { y: 50, opacity: 0 },
            {
              height: "auto",
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );
        },
      },
      1
    );
  };

  return (
    <div className='background_one'>
      <div className='container-fluid'>
        <div className='icons_list' id='list_one'>
          <p className='icon_wrapper initial' id='arrOne'>
            <Icon.ArrowRight />
          </p>
          <p className='icon_wrapper theme_bg' id='sub-text_1'>
            DENTAL
          </p>
        </div>
        <div className='icons_list' id='list_two'>
          <p className='icon_wrapper theme_white theme_text' id='sub-text_2'>
            ASSISTANCE
          </p>
          <p className='icon_wrapper initial theme_bg' id='arrTwo'>
            <img src={Tooth} alt='tooth' />
          </p>
          <h4 id='companyname' className='theme_text'>
            DENTYTECH
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
