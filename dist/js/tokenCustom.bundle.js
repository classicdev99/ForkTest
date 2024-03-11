document.querySelectorAll("#toggleCharts").forEach(function (e) {
  e.addEventListener("click", function () {
    document.querySelectorAll("#subtitle").forEach(function (e) {
      "Detailed View" === e.innerHTML
        ? (e.innerHTML = "Public Sale View")
        : (e.innerHTML = "Detailed View");
    }),
      document.querySelectorAll("#chart").forEach(function (e) {
        e.children[0].classList.contains("hidden")
          ? (e.children[0].classList.remove("hidden"),
            e.children[1].classList.add("hidden"))
          : (e.children[0].classList.add("hidden"),
            e.children[1].classList.remove("hidden"));
      });
  });
});
