!(function () {
  let e = [];
  const t = new IntersectionObserver((t) => {
      t[0].isIntersecting
        ? document.querySelectorAll(".animate-square rect").forEach((t, r) => {
            setTimeout(() => {
              let c = 0;
              t.style.opacity = c;
              const a = setInterval(() => {
                (c += 0.05), (t.style.opacity = c), c >= 1 && clearInterval(a);
              }, 40);
              if (
                2 === r ||
                5 === r ||
                7 === r ||
                8 === r ||
                9 === r ||
                10 === r ||
                14 === r ||
                15 === r ||
                17 === r
              ) {
                const a = setTimeout(() => {
                  c = 1;
                  const r = setInterval(() => {
                    (c -= 0.05),
                      (t.style.opacity = c),
                      c <= 0 && clearInterval(r);
                  }, 40);
                  e.push(r);
                }, 1e3 + 100 * r);
                e.push(a);
              }
            }, 100 * r);
          })
        : (e.forEach((e) => clearInterval(e)),
          document.querySelectorAll(".animate-square rect").forEach((e, t) => {
            e.style.opacity = 0;
          }));
    }),
    r = document.querySelector(".animate-square");
  t.observe(r);
})();
