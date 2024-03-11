!(function () {
  const e = document.querySelector("body");
  e.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".mouse-tracking").forEach((t) => {
      let o = t.getBoundingClientRect(),
        n = e.clientX - o.left,
        l = e.clientY - o.top;
      n >= 0 &&
        n <= o.width &&
        l >= 0 &&
        l <= o.height &&
        (t.style.setProperty("--x", n + "px"),
        t.style.setProperty("--y", l + "px"));
    });
  }),
    e.addEventListener("touchmove", (e) => {
      document.querySelectorAll(".mouse-tracking").forEach((t) => {
        let o = t.getBoundingClientRect(),
          n = e.touches[0],
          l = n.clientX - o.left,
          c = n.clientY - o.top;
        l >= 0 &&
          l <= o.width &&
          c >= 0 &&
          c <= o.height &&
          (t.style.setProperty("--x", l + "px"),
          t.style.setProperty("--y", c + "px"));
      });
    });
})();
