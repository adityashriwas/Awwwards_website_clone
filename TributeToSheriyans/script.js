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
gsap.registerPlugin(ScrollTrigger);


gsap.to(".c", {
  ScrollTrigger: {
    trigger: ".c"
  },
  x: 400,
  rotation: 360
});


function navbarAnimation() {
  gsap.from("#navbar h1", {
    transform: "translateY(-100%)",
    opacity: 0,
    delay: 0.1,
  });
  gsap.from("#navbar img", {
    transform: "translateY(-100%)",
    opacity: 0,
    delay: 0.1,
  });
}
navbarAnimation();

let HarshSharma = document.querySelector("#main h1");

gsap.from("#page1 .HH1", {
  x: -100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
  stagger: 0.2,
});

gsap.from("#page1 .HH2", {
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.2,
  });

gsap.from("#page1 .line", {
  scale: 0.5,
  opacity: 0,
  delay: 1.5,
  duration: 0.9,
  stagger: 0.2,
});


gsap.from("#page2 #page2part2 img", {
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        //   markers: true,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
    },
});

gsap.from("#family", {
    x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 0%",
    scrub: true,
  },
});

gsap.from("#page3 #familyText p", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
    },
});


gsap.from("#page4 #page4part2 img", {
  opacity: 0,
  scale: 0.9,
  scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      //   markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});


gsap.from("#page5 #page5part2 img", {
  opacity: 0,
  scale: 0.9,
  scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      //   markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".left", {
  x: -50,
  y: -100,
  scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".right", {
  x: 100,
  y: 100,
  scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".left4", {
  x: -50,
  y: -100,
  scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".right4", {
  x: 100,
  y: 100,
  scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".left5", {
  x: -50,
  y: -100,
  scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from(".right5", {
  x: 100,
  y: 100,
  scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from("#page2 p", {
  scale: 0.5,
  scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from("#page4 p", {
  scale: 0.5,
  scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});

gsap.from("#page5 p", {
  scale: 0.5,
  scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
        // markers: true,
      start: "top 70%",
      end: "top 0%",
      scrub: true,
  },
});