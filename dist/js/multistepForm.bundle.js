document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("multi-step");
  let t = e.querySelector("#form-fields"),
    r = Array.from(e.querySelectorAll("fieldset")),
    n = e.querySelector("#form-progress ul"),
    s = Array.from(n.children),
    a = e.querySelector("#form-nav"),
    l = e.querySelector("#form-nav #next"),
    o = e.querySelector("#form-nav #back"),
    c = e.querySelector("#form-nav #submit"),
    i = e.querySelector("#form-nav #reset"),
    d = e.querySelector("#word"),
    u = e.querySelector("#color"),
    m = e.querySelector("#color-algorithm"),
    p = e.querySelector("#form-notice"),
    y = 0;
  function f(e) {
    r.forEach((t, r) => {
      r === e
        ? ((t.style.display = ""), s[r].classList.add("!bg-accent"))
        : ((t.style.display = "none"), s[r].classList.remove("!bg-accent"));
    }),
      (i.style.display = "none"),
      (o.style.display = e > 0 ? "" : "none"),
      (l.style.display = e < r.length - 1 ? "" : "none"),
      (c.style.display = e === r.length - 1 ? "" : "none");
  }
  function h(n, s) {
    a.classList.add("!grayscale", "pointer-events-none"),
      s.append("submit", c.name);
    const l = async () => {
      const d = await fetch(
          window.location.origin + "/dist/admin/post-form.php",
          { method: "POST", body: s }
        ),
        u = await d.json();
      a.classList.remove("!grayscale", "pointer-events-none"),
        "confirm" === u.info
          ? n < r.length - 1
            ? (y++, f(y))
            : n === r.length - 1 && (s.append("conf", ""), l())
          : "success" === u.info
          ? ((t.style.maxHeight = "0rem"),
            p.classList.remove("alert-error", "hidden"),
            p.classList.add("alert-success"),
            (p.innerHTML = u.alert),
            (c.style.display = "none"),
            (o.style.display = "none"),
            (i.style.display = ""))
          : "error" === u.info &&
            ((errInput = e.querySelector(`.input-item[name="${u.for}"]`)),
            errInput.classList.add("border-red"),
            errInput.focus(),
            p.classList.remove("alert-success", "hidden"),
            p.classList.add("alert-error"),
            (p.innerHTML = u.alert),
            errInput.addEventListener(
              "input",
              function () {
                p.classList.add("hidden"),
                  errInput.classList.remove("border-red");
              }.bind()
            ));
    };
    l();
  }
  d.addEventListener("input", () => {
    const e = d.value.trim(),
      t = /^[\p{L}]+$/u,
      r = e
        .split("")
        .filter((e) => t.test(e))
        .join("")
        .slice(0, 12);
    d.value = r;
  }),
    u.addEventListener("change", () => {
      let e = u.value;
      if (((m.innerHTML = ""), e && "" !== e)) {
        const t = document.createElement("img");
        (t.src = `/dist/img/examples/${e}.png`),
          (t.width = 200),
          (t.height = 200),
          t.classList.add("rounded", "border", "border-jacarta-700"),
          m.appendChild(t);
      }
    }),
    l.addEventListener("click", () => {
      if (y < r.length - 1) {
        let e = Array.from(r[y].querySelectorAll(".input-item")),
          t = new FormData();
        e.forEach((e) => {
          if ("checkbox" === e.type) {
            const r = e.checked ? "checked" : "";
            t.append(e.name, r);
          } else t.append(e.name, e.value);
        }),
          h(y, t);
      }
    }),
    o.addEventListener("click", () => {
      y > 0 && (y--, f(y));
    }),
    c.addEventListener("click", (t) => {
      t.preventDefault();
      let r = Array.from(e.querySelectorAll(".input-item")),
        n = new FormData();
      r.forEach((e) => {
        if ("checkbox" === e.type) {
          const t = e.checked ? "checked" : "";
          n.append(e.name, t);
        } else n.append(e.name, e.value);
      }),
        h(y, n);
    }),
    i.addEventListener("click", () => {
      (y = 0),
        Array.from(e.querySelectorAll(".input-item")).forEach((e) => {
          "checkbox" === e.type ? (e.checked = !1) : (e.value = "");
        }),
        (p.innerHTML = ""),
        (m.innerHTML = ""),
        p.classList.add("hidden"),
        t.removeAttribute("style"),
        f(y);
    }),
    f(y);
});
