gsap.to(".box", {
  duration: 3,
  x: 200,
  rotation: 360,
  transformOrigin: "center 2%",
  yoyo: true,
  repeat: -1,
  ease: "steps(12)",
});

let obj = { myNum: 10, myColor: "red" };

gsap.to(obj, {
  myNum: 200,
  myColor: "blue",
  onUpdate: () => console.log(obj.myNum, obj.myColor),
});

// The green box with no ease spins around at a consistent speed, whereas the purple box with the 'bounce' ease revs up, races along and then bounces to a stop.

// gsap.to(".green", { rotation: 360, duration: 2, ease: "none" });

// gsap.to(".purple", { rotation: 360, duration: 2, ease: "bounce.out" });
