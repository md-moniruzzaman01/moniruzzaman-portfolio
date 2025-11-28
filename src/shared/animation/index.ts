// /src/lib/gsapAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  if (typeof window === "undefined") return;
  // register plugin
  gsap.registerPlugin(ScrollTrigger);

  /** 1. Custom cursor logic (if you still want) **/
  let cursor = document.getElementById("cursor") as HTMLDivElement | null;
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.id = "cursor";
    Object.assign(cursor.style, {
      position: "fixed",
      width: "20px",
      height: "20px",
      backgroundColor: "#FFFFE0",
      borderRadius: "50%",
      pointerEvents: "none",
      top: "0px",
      left: "0px",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });
    document.body.appendChild(cursor);
  }

  const moveHandler = (e: MouseEvent) => {
    gsap.to(cursor!, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power1.out",
    });
  };
  document.addEventListener("mousemove", moveHandler);

  // (optional) hover‑scale for headings
  const boldText = document.querySelectorAll<HTMLElement>(".textZoom");

  boldText.forEach((h) => {
    h.addEventListener("mouseenter", () => {
      gsap.to(cursor!, {
        scale: 2.5,
        backgroundColor: "rgba(255,255,0,0.6)",
        duration: 0.3,
      });
    });
    h.addEventListener("mouseleave", () => {
      gsap.to(cursor!, { scale: 1, backgroundColor: "#FFFFE0", duration: 0.3 });
    });
  });

  //title type effect
  // const title = document.querySelector<HTMLElement>(".developer");
  // if (title && title.textContent) {
  //   const titleText = title.textContent;
  //   const splittedText = titleText.split("");

  //   let clutter = "";
  //   splittedText.forEach((elm) => {
  //     // Add a span with class for animation
  //     clutter += `<span class="letter">${elm}</span>`;
  //   });

  //   title.innerHTML = clutter;

  //   gsap.from(".letter", {
  //     y: 30,
  //     opacity: 0,
  //     duration: 1.2,
  //     stagger: 0.03,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".letter",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // }

  const button = document.querySelector<HTMLElement>(".float-btn");

  if (button) {
    gsap.to(button, {
      y: -20, // move up 20px
      duration: 2, // duration of one float
      repeat: -1, // infinite loop
      yoyo: true, // go back to original position
      ease: "power1.inOut",
    });
  }
  // hero section background
  gsap.to(".shadowText", {
    x: "-10%",
    ease: "none",
    scrollTrigger: {
      trigger: ".shadowText",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".vertical-line",
    { scaleY: 0, transformOrigin: "top center" },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#services",
        start: "top 70%",
        end: "bottom 60%",
        scrub: 1,
      },
    }
  );

  // ICONS
  const icons = gsap.utils.toArray<HTMLElement>(".timeline-icon");

  icons.forEach((icon) => {
    gsap.fromTo(
      icon,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: icon,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      }
    );
  });

  /** 3. (Optional) Text fade‑in / reveal / parallax / more scroll‑animations **/
  // Example: fade in each section when scrolled to view
  const fadeElems = document.querySelectorAll<HTMLElement>(".fade-on-scroll");
  fadeElems.forEach((elem) => {
    gsap.from(elem, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
        end: "top 60%",
        scrub: false,
      },
      duration: 0.8,
      ease: "power2.out",
    });
  });

  // hero section animated with time line

  const tl = gsap.timeline();
  tl.from("nav ul li", {
    y: -30,
    direction: 0.5,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
  });
  tl.from(".hero-part1 h1,.hero-part1 p", {
    x: -200,
    opacity: 0,
    direction: 0.5,
  });
  tl.from(".hero-btn a", {
    opacity: 0,
    direction: 0.4,
  });
  tl.from(".hero-part2", {
    opacity: 0,
    direction: 0.5,
  },"-=1");


  /** 4. Return cleanup function if needed **/
  return () => {
    document.removeEventListener("mousemove", moveHandler);
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // optionally remove cursor
    // cursor?.remove();
  };
}
