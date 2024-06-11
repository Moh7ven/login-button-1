import "./style.scss";
import gsap from "gsap";

const start = document.querySelector(".start");
const container = document.querySelector(".container");
const save = document.querySelector(".save");
const startSpans = document.querySelectorAll(".start-container span");

let step = 0;

const ease = "power2.inOut";

start.addEventListener("click", () => {
  switch (step) {
    case 0:
      step = 1;
      gsap.to(start, {
        width: "130px",
        ease: ease,
      });
      start.classList.add("close");
      gsap.to(container, {
        width: "360px",
        height: "315px",
        padding: "10px",
        borderWidth: "2px",
        duration: 0.5,
        ease: ease,
      });
      gsap.to(startSpans, {
        y: "-24px",
        duration: 0.5,
        ease: ease,
      });
      break;
    case 1:
      step = 0;
      gsap.to(start, {
        width: "100%",
        ease: ease,
      });
      start.classList.remove("close");
      gsap.to(container, {
        width: "130px",
        height: "50px",
        padding: "0px",
        borderWidth: "0px",
        duration: 0.3,
        ease: "power2.ease",
      });
      gsap.to(startSpans, {
        y: "0px",
        duration: 0.5,
        ease: ease,
      });
      break;
    case 2:
      step = 1;
      start.classList.add("close");
      gsap.to(".middle", {
        x: "0px",
        height: "192px",
        duration: 0.5,
        ease: ease,
      });
      gsap.to(container, {
        width: "360px",
        height: "315px",
        padding: "10px",
        borderWidth: "2px",
        duration: 0.5,
        ease: ease,
      });
      gsap.to(startSpans, {
        y: "-24px",
        duration: 0.5,
        ease: ease,
      });
  }

  document.querySelectorAll(".anim").forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: 0.2 * index,
        ease: ease,
      }
    );
  });
});

save.addEventListener("click", () => {
  step = 2;
  start.classList.remove("close");
  gsap.to(".middle", {
    x: "-370px",
    height: "95px",
    duration: 0.5,
    ease: ease,
  });
  gsap.to(container, {
    width: "360px",
    height: "215px",
    padding: "10px",
    borderWidth: "2px",
    duration: 0.5,
    ease: ease,
  });
  gsap.to(startSpans, {
    y: "-48px",
    duration: 0.5,
    ease: ease,
  });
});
