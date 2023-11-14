import { useEffect } from "react";
import gsap from "gsap";
import Tooth from "../assets/tooth.svg";
import * as Icon from "react-bootstrap-icons";

function PreLandingPage({ changePage }) {
  const svgArrLeft =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>';
  const svgArrRight =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>';

  const TL = gsap.timeline();

  useEffect(() => {
    gsap.fromTo(
      "#sub-text_1",
      {
        //   borderRadius: "40%",
        width: "139",
        delay: 4,
        //   ease: "power3.in",
      },
      {
        width: "78px",
        minWidth: "auto",
        delay: 2,
        display: "flex",
        margin: "unset",
        alignItems: "center",
        padding: "14px 20px",
        borderRadius: "50%",
        innerHTML: svgArrRight,
        ease: "power2.out",
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
                onComplete: () => {
                  gsap.to("#sub-text_1", {
                    y: 40,
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
        delay: 4,
        ease: "power3.in",
      },
      {
        width: "78px",
        minWidth: "auto",
        delay: 2,
        display: "flex",
        margin: "unset",
        alignItems: "center",
        padding: "14px 20px",
        borderRadius: "50%",
        innerHTML: svgArrLeft,
        ease: "power2.out",
        duration: 1,
        onComplete: () => {
          gsap.to("#sub-text_2", {
            rotation: 90,
            duration: 1,
            onComplete: () => {
              gsap.to("#sub-text_2", {
                y: -47,
              });
              gsap.to("#arrTwo", { y: -47 });
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
    TL.to(arrTwo, { x: -210, duration: 2, delay: 2 }, 1);

    TL.to(text1, { x: -12, duration: 2, delay: 2, opacity: 0 }, 1);
    TL.to(
      text2,
      {
        x: -78,
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
              opacity: 2,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                changePage();
              },
            }
          );
        },
      },
      1
    );
  };

  return (
    <div className='pre-landing_background'>
      <div className='pre-landing_container'>
        <div className='pre-landing_section _one' id='list_one'>
          <p className='icon' id='arrOne'>
            <Icon.ArrowRight />
          </p>
          <p id='sub-text_1'>dental</p>
        </div>
        <div className='break' />
        <div className='pre-landing_section _two' id='list_two'>
          <p id='sub-text_2'>Assistance</p>
          <p className='icon' id='arrTwo'>
            <img src={Tooth} alt='tooth' />
          </p>
        </div>
        <div className='break' />
        <div className='pre-landing_section _three' id='companyname'>
          <p>DentyTech</p>
        </div>
      </div>
    </div>
  );
}

export default PreLandingPage;
