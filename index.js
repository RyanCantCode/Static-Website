gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({repeat:0});

gsap.from(".logo", {
    opacity: 0, 
    x: -100, 
    duration: 1
});
gsap.from(".nav-item", {
    opacity: 0, 
    y: -100, 
    duration: 1
});
gsap.from(".account", {
    opacity: 0, 
    x: 100, 
    duration: 1
});

tl.from(".hike-guide", {
    opacity: 0, 
    y: -100, 
    duration: 1
})
tl.from(".header-heading", {
    opacity: 0, 
    x: 100, 
    duration: 1
})

tl.from(".cta", {
    opacity: 0, 
    y: -100, 
    duration: 0.5
  });

  gsap.from(".content-01", {
      scrollTrigger: {
          trigger: ".image-01",
          toggleActions: "restart reverse restart pause"
      },
      opacity: 0,
      x: -200,
      duration: 1.5
  });
  
  gsap.from(".image-01", {
      scrollTrigger: {
          trigger: ".content-01",
          toggleActions: "restart reverse restart pause"
      },
      opacity: 0,
      x: 200,
      duration: 1.5
  });
  
  gsap.from(".content-02", {
      scrollTrigger: {
          trigger: ".tag-02",
          toggleActions: "restart reverse restart pause"
      },
      opacity: 0,
      x: 200,
      duration: 1.5
  });

  gsap.from(".image-02", {
      scrollTrigger: {
          trigger: ".tag-02",
          toggleActions: "restart reverse restart pause"
      },
      opacity: 0,
      x: -200,
      duration: 1.5
  });
  
  gsap.from(".content-03", {
      scrollTrigger: {
          trigger: ".tag-03",
          toggleActions: "restart pause restart pause"
      },
      opacity: 0,
      x: -200,
      duration: 1.5
  });

  gsap.from(".image-03", {
      scrollTrigger: {
          trigger: ".tag-03",
          toggleActions: "restart pause restart pause"
      },
      opacity: 0,
      x: 200,
      duration: 1.5
  });




