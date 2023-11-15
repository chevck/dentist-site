import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as Icons from "react-bootstrap-icons";
import Tooth from "../assets/tooth.svg";
import gsap from "gsap";
import "animate.css";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";
// import Img1 from "../assets/img-1.jpg";
import Img2 from "../assets/img-2.jpg";
import Img3 from "../assets/img-3.jpg";
import Img4 from "../assets/img-4.jpg";
import Img5 from "../assets/img-5.jpg";
import Hr1 from "../assets/hr-1.jpg";
import Hr2 from "../assets/hr-2.jpg";
import Hr3 from "../assets/hr-3.jpg";
import Hr4 from "../assets/hr-4.jpg";
import FriendVideo from "../assets/friends-1.jpg";
import ExploreImg1 from "../assets/explore-1.jpg";
import ExploreImg2 from "../assets/explore-2.jpg";
import ExploreImg3 from "../assets/explore-3.jpg";
import ExploreImg4 from "../assets/explore-4.jpg";

const Header = () => {
  return (
    <div className='header-container'>
      {/* <div className='container-fluid'> */}
      <div className='row'>
        <div className='col-3'>
          <button>Menu</button>
          <button className='icon-button'>
            <Icons.TextRight />
          </button>
        </div>
        <div className='col-2'></div>
        <div className='col-1 logo-wrapper'>
          <p className='tooth-wrapper'>
            <img src={Tooth} alt='tooth' />
          </p>
          <p>DENTYTECH</p>
        </div>
        <div className='col-3'></div>
        <div className='col-3 action-buttons'>
          <button>Log In</button>
          <button className='theme_bg'>Sign Up</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='row landing-page_footer'>
      <div className='col-4'>
        <p className='dot'></p>
        <p>Your Smile, Our Passion.</p>
      </div>
      <div className='col-4'></div>
      <div className='col-4 social-section'>
        <div className='social-icons'>
          <Icons.Instagram />
          <Icons.Youtube />
          <Icons.Facebook />
        </div>
        <p>Best Start Up of 2023</p>
      </div>
    </div>
  );
};

function LandingPage() {
  gsap.registerPlugin(ScrollToPlugin);
  const firstDivMainTextRef = useRef();
  const [count, setCount] = useState(4);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "._one",
        start: "top top",
        end: "+1000",
        scrub: true,
      },
    });
    tl.to(".first-div .main-text", {
      marginLeft: 0,
      ease: "power2.in",
      duration: 2,
    });
    tl.to(".first-div .hide-first", { display: "block", duration: 2 }, 1);
    tl.to(
      ".second-div .main-text",
      {
        x: 0,
        ease: "power2.inOut",
        duration: 2,
      },
      1
    );
    tl.from(".second-div .hide-first", { opacity: 0, duration: 2 }, 1);
    tl.to(
      ".second-div .hide-first",
      {
        display: "flex",
        opacity: 1,
        duration: 2,
      },
      1
    );
    tl.to(
      ".third-div .main-text",
      { marginLeft: 0, ease: "power2.in", duration: 2 },
      1
    );
    // tl.from(".third-div .hide-first", {
    //   opacity: 0,
    //   display: "none",
    // });
    tl.to(
      ".third-div .headshots.hide-first",
      {
        display: "flex",
        opacity: 1,
        duration: 2,
        ease: "power2.in",
      },
      1
    );
    tl.to(
      ".third-div .tech-video.hide-first",
      {
        display: "block",
        opacity: 1,
        duration: 2,
        ease: "power2.in",
      },
      1
    );
  }, []);
  useEffect(() => {
    gsap.to(".first-div .main-text", { scrollTrigger: {} });
    // gsap.fromTo(
    //   ".first-div .main-text",
    //   {
    //     x: "350px",
    //   },
    //   { x: "-70px", ease: "power2.in", duration: 4 }
    // );
    // gsap.fromTo(
    //   ".care-flex",
    //   { display: "none", opacity: 0, ease: "power2.out" },
    //   {
    //     display: "flex",
    //     opacity: 1,
    //     ease: "power2.in",
    //     scrollTo: {
    //       trigger: ".care-flex",
    //       // trigger: ".hide-first",
    //       start: "top 80%", // Adjust the start position based on your needs
    //       end: "bottom 20%", // Adjust the end position based on your needs
    //       toggleActions: "play reverse play reverse", // Show on scroll down, hide on scroll up
    //     },
    //   }
    // );
    // gsap.to(".hide-first", {
    //   opacity: 0,
    //   y: 50,
    //   scrollTrigger: {
    //     trigger: ".hide-first",
    //     start: "top 80%", // Adjust the start position based on your needs
    //     end: "bottom 20%", // Adjust the end position based on your needs
    //     toggleActions: "play reverse play reverse", // Show on scroll down, hide on scroll up
    //   },
    // });
  }, []);

  const skipImage = () => {
    gsap.fromTo(
      ".down-scroll svg",
      { ease: "power2.out", y: -10, opacity: 0.5 },
      { ease: "power2.inOut", y: 10, opacity: 1 }
    );
    for (let i = count; i > 0; --i) {
      gsap.to(`._${i}`, {
        ease: "power2.out",
        rotation: -90,
        y: -1000,
        duration: 3,
      });
      return setCount(count - 1);
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#one",
        offsetY: 110,
        autoKill: false,
      },
      ease: "power2.inOut",
    });
  };

  return (
    <div className='landing-page'>
      <Header />
      <div className='landing-page-container'>
        <h2>Our advantages</h2>
        <div className='introduction-pics'>
          <div className='pic-details _1'>
            <img src={Img5} alt='p-1' />
            <div className='pic-details_info'>
              <p>
                <Icons.PersonBoundingBox />
              </p>
              <p>Personalized Care</p>
            </div>
          </div>
          <div className='pic-details _2'>
            <img src={Img2} alt='p-1' />
            <div className='pic-details_info'>
              <p>
                <Icons.Diagram2 />
              </p>
              <p>Modern Solutions</p>
            </div>
          </div>
          <div className='pic-details _3'>
            <img src={Img3} alt='p-1' />
            <div className='pic-details_info'>
              <p>
                <Icons.HandIndex />
              </p>
              <p>Convenience</p>
            </div>
          </div>
          <div className='pic-details _4'>
            <img src={Img4} alt='p-1' />
            <div className='pic-details_info'>
              <p>
                <Icons.Gear />
              </p>
              <p>Advanced Technology</p>
            </div>
          </div>
        </div>
        <div className='down-scroll' onClick={skipImage}>
          <Icons.ArrowDown />
        </div>
      </div>

      <div className='landing-page_section _one' id='one'>
        <div className='first-div'>
          <p className='main-text' ref={firstDivMainTextRef}>
            Revolutionizing
          </p>
          <div className='revolution-icon-set hide-first'>
            <div className='icons-flex'>
              <p>
                <Icons.Amd />
              </p>
              <p>
                <Icons.Award />
              </p>
              <p>
                <Icons.Balloon />
              </p>
            </div>
            <p>Modern Solutions, Timeless Smiles</p>
          </div>
        </div>
        <div className='second-div'>
          <div className='assistance-section hide-first'>
            <p>assistance</p>
            <p className='tooth-wrapper '>
              <img src={Tooth} alt='tooth' />
            </p>
          </div>
          <span className='main-text'>Dental</span>
          <div className='care-flex hide-first'>
            <p className='overboard'>
              <img src={Img5} alt='young-girl' />
            </p>
            <p className='overboard'>
              <Icons.Flower3 />
            </p>
          </div>
          <span className='main-text'>Care</span>
        </div>
        <div className='third-div'>
          <div className='tech-video hide-first'>
            <img src={FriendVideo} alt='friends' />
            <p>
              <Icons.Play />
            </p>
          </div>
          <p className='main-text'>with technology</p>
          <div className='headshots hide-first'>
            <img src={Hr1} alt='hr-1' />
            <img src={Hr2} alt='hr-2' />
            <img src={Hr3} alt='hr-3' />
            <img src={Hr4} alt='hr-4' />
            <p className='add-hr-img'>
              <Icons.Plus />
            </p>
          </div>
        </div>
        <div className='fourth-div'>
          <div>
            <p className='get-started-circle'>
              Get <br /> Started
            </p>
            <p className='curve-line'></p>
          </div>
        </div>
      </div>
      <div className='landing-page_section _two'>
        <div className='row'>
          <div className='col-7 left'>
            <div className='icons-flex'>
              <p>
                <Icons.Amd />
              </p>
              <p>
                <Icons.Award />
              </p>
              <p>
                <Icons.Balloon />
              </p>
            </div>
            <h2>explore our</h2>
            <h2>service, make</h2>
            <h2>your smile shine</h2>
            <div className='app-button'>
              <button>Get The App</button>
              <button>Meet the team</button>
            </div>
          </div>
          <div className='col-5 right'>
            <div className='explore-flex'>
              <div className='explore-flex_left'>
                <div className='explore-pic'>
                  <img src={ExploreImg1} alt='explore-1' />
                </div>
                <div className='explore-pic'>
                  <img src={ExploreImg2} alt='explore-1' />
                </div>
                <div className='explore-pic'>
                  <img src={ExploreImg3} alt='explore-1' />
                </div>
              </div>
              <div className='explore-flex_right'>
                <div className='explore-pic'>
                  <img src={ExploreImg3} alt='explore-1' />
                </div>
                <div className='explore-pic'>
                  <img src={ExploreImg4} alt='explore-1' />
                </div>
                <div className='explore-pic'>
                  <img src={ExploreImg1} alt='explore-1' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* <div className='kk'>
        <div class='stack-container'>
          <img class='stack-picture' src={Img1} alt='Picture 1' />
          <img class='stack-picture' src={Img2} alt='Picture 2' />
          <img class='stack-picture' src={Img3} alt='Picture 3' />
          
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
