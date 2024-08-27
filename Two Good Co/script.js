function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
    smoothMobile: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.2,
  });
  gsap.from("#page1 #img-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}

loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();

function page5imgAnimation() {
  gsap.from(".page5img img", {
    // transform: "translateY(100%)",
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
    },
  });
}

page5imgAnimation();

function page6Animation() {
  gsap.from(".text a", {
    transform: "translateY(100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
    },
  });

  gsap.from("#page6part2 span", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      stagger: true,
      scrub: true,
    },
  });
}

page6Animation();
