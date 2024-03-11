!(function () {
  var t = document.querySelector(".typewriter .typing-data"),
    n = t.getAttribute("data-text").split(", "),
    e = n.length;
  !(function r(i, a) {
    var u = 0,
      c = a.length - 1,
      l = setInterval(function () {
        (t.innerHTML += a[u]),
          u == c
            ? (clearInterval(l),
              setTimeout(function () {
                !(function (i, a) {
                  var u = a.length - 1,
                    c = setInterval(function () {
                      (t.innerHTML = a.substr(0, u)),
                        0 == u
                          ? (clearInterval(c),
                            i + 1 == e ? (i = 0) : (i += 1),
                            setTimeout(function () {
                              r(i, n[i]);
                            }, 450))
                          : (u -= 1);
                    }, 45);
                })(i, a);
              }, 2250))
            : (u += 1);
      }, 75);
  })(0, n[0]);
})();
