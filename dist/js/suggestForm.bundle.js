document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("suggestionForm"),
    t = e.querySelector("#form-fields"),
    r = e.querySelector(".modal-footer"),
    n = e.querySelector("#submit"),
    s = e.querySelector("#form-notice");
  n.addEventListener("click", (o) => {
    o.preventDefault();
    let a = Array.from(e.querySelectorAll(".input-item")),
      i = new FormData();
    a.forEach((e) => {
      if ("checkbox" === e.type) {
        const t = e.checked ? "checked" : "";
        i.append(e.name, t);
      } else i.append(e.name, e.value);
    }),
      (function (o) {
        n.classList.add("!grayscale", "pointer-events-none"),
          o.append("submit", n.name);
        for (const e of o.entries()) console.log(e[0] + ", " + e[1]);
        (async () => {
          const a = await fetch(
              window.location.origin + "/dist/admin/post-form.php",
              { method: "POST", body: o }
            ),
            i = await a.json();
          n.classList.remove("!grayscale", "pointer-events-none"),
            "success" === i.info
              ? ((t.style.maxHeight = "0rem"),
                s.classList.remove("alert-error", "hidden"),
                s.classList.add("alert-success"),
                (s.innerHTML = i.alert),
                (r.style.display = "none"))
              : "error" === i.info &&
                ((errInput = e.querySelector(`.input-item[name="${i.for}"]`)),
                errInput.classList.add("border-red"),
                errInput.focus(),
                s.classList.remove("alert-success", "hidden"),
                s.classList.add("alert-error"),
                (s.innerHTML = i.alert),
                errInput.addEventListener(
                  "input",
                  function () {
                    s.classList.add("hidden"),
                      errInput.classList.remove("border-red");
                  }.bind()
                ));
        })();
      })(i);
  });
});
