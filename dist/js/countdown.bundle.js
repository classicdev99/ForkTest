/*! For license information please see countdown.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      31093: function (e) {
        !(function () {
          "use strict";
          var t,
            n,
            s,
            i,
            r,
            o,
            u,
            a,
            d = 1e3,
            c = 60,
            l = 60,
            m = 24,
            h = 864e5,
            f = 12,
            y = 10,
            w = 10,
            p = 10,
            g = Math.ceil,
            M = Math.floor;
          function v(e, t) {
            var n = e.getTime();
            return (
              e.setMonth(e.getMonth() + t), Math.round((e.getTime() - n) / h)
            );
          }
          function S(e) {
            var t = e.getTime(),
              n = new Date(t);
            return (
              n.setMonth(e.getMonth() + 1), Math.round((n.getTime() - t) / h)
            );
          }
          function N(e, t) {
            if (
              ((t =
                t instanceof Date || (null !== t && isFinite(t))
                  ? new Date(+t)
                  : new Date()),
              !e)
            )
              return t;
            var n = +e.value || 0;
            return n
              ? (t.setTime(t.getTime() + n), t)
              : ((n = +e.milliseconds || 0) &&
                  t.setMilliseconds(t.getMilliseconds() + n),
                (n = +e.seconds || 0) && t.setSeconds(t.getSeconds() + n),
                (n = +e.minutes || 0) && t.setMinutes(t.getMinutes() + n),
                (n = +e.hours || 0) && t.setHours(t.getHours() + n),
                (n = +e.weeks || 0) && (n *= 7),
                (n += +e.days || 0) && t.setDate(t.getDate() + n),
                (n = +e.months || 0) && t.setMonth(t.getMonth() + n),
                (n = +e.millennia || 0) && (n *= p),
                (n += +e.centuries || 0) && (n *= w),
                (n += +e.decades || 0) && (n *= y),
                (n += +e.years || 0) && t.setFullYear(t.getFullYear() + n),
                t);
          }
          function D(e, s) {
            return u(e) + (1 === e ? t[s] : n[s]);
          }
          function E() {}
          function T(e, t, n, s, i, r) {
            return (
              e[n] >= 0 && ((t += e[n]), delete e[n]),
              1 + (t /= i) <= 1
                ? 0
                : e[s] >= 0
                ? ((e[s] = +(e[s] + t).toFixed(r)),
                  (function (e, t) {
                    switch (t) {
                      case "seconds":
                        if (e.seconds !== c || isNaN(e.minutes)) return;
                        e.minutes++, (e.seconds = 0);
                      case "minutes":
                        if (e.minutes !== l || isNaN(e.hours)) return;
                        e.hours++, (e.minutes = 0);
                      case "hours":
                        if (e.hours !== m || isNaN(e.days)) return;
                        e.days++, (e.hours = 0);
                      case "days":
                        if (7 !== e.days || isNaN(e.weeks)) return;
                        e.weeks++, (e.days = 0);
                      case "weeks":
                        if (e.weeks !== S(e.refMonth) / 7 || isNaN(e.months))
                          return;
                        e.months++, (e.weeks = 0);
                      case "months":
                        if (e.months !== f || isNaN(e.years)) return;
                        e.years++, (e.months = 0);
                      case "years":
                        if (e.years !== y || isNaN(e.decades)) return;
                        e.decades++, (e.years = 0);
                      case "decades":
                        if (e.decades !== w || isNaN(e.centuries)) return;
                        e.centuries++, (e.decades = 0);
                      case "centuries":
                        if (e.centuries !== p || isNaN(e.millennia)) return;
                        e.millennia++, (e.centuries = 0);
                    }
                  })(e, s),
                  0)
                : t
            );
          }
          function b(e, t, n, s, i, r) {
            var o = new Date();
            if (
              ((e.start = t = t || o),
              (e.end = n = n || o),
              (e.units = s),
              (e.value = n.getTime() - t.getTime()),
              e.value < 0)
            ) {
              var u = n;
              (n = t), (t = u);
            }
            e.refMonth = new Date(t.getFullYear(), t.getMonth(), 15, 12, 0, 0);
            try {
              (e.millennia = 0),
                (e.centuries = 0),
                (e.decades = 0),
                (e.years = n.getFullYear() - t.getFullYear()),
                (e.months = n.getMonth() - t.getMonth()),
                (e.weeks = 0),
                (e.days = n.getDate() - t.getDate()),
                (e.hours = n.getHours() - t.getHours()),
                (e.minutes = n.getMinutes() - t.getMinutes()),
                (e.seconds = n.getSeconds() - t.getSeconds()),
                (e.milliseconds = n.getMilliseconds() - t.getMilliseconds()),
                (function (e) {
                  var t;
                  for (
                    e.milliseconds < 0
                      ? ((t = g(-e.milliseconds / d)),
                        (e.seconds -= t),
                        (e.milliseconds += t * d))
                      : e.milliseconds >= d &&
                        ((e.seconds += M(e.milliseconds / d)),
                        (e.milliseconds %= d)),
                      e.seconds < 0
                        ? ((t = g(-e.seconds / c)),
                          (e.minutes -= t),
                          (e.seconds += t * c))
                        : e.seconds >= c &&
                          ((e.minutes += M(e.seconds / c)), (e.seconds %= c)),
                      e.minutes < 0
                        ? ((t = g(-e.minutes / l)),
                          (e.hours -= t),
                          (e.minutes += t * l))
                        : e.minutes >= l &&
                          ((e.hours += M(e.minutes / l)), (e.minutes %= l)),
                      e.hours < 0
                        ? ((t = g(-e.hours / m)),
                          (e.days -= t),
                          (e.hours += t * m))
                        : e.hours >= m &&
                          ((e.days += M(e.hours / m)), (e.hours %= m));
                    e.days < 0;

                  )
                    e.months--, (e.days += v(e.refMonth, 1));
                  e.days >= 7 && ((e.weeks += M(e.days / 7)), (e.days %= 7)),
                    e.months < 0
                      ? ((t = g(-e.months / f)),
                        (e.years -= t),
                        (e.months += t * f))
                      : e.months >= f &&
                        ((e.years += M(e.months / f)), (e.months %= f)),
                    e.years >= y &&
                      ((e.decades += M(e.years / y)),
                      (e.years %= y),
                      e.decades >= w &&
                        ((e.centuries += M(e.decades / w)),
                        (e.decades %= w),
                        e.centuries >= p &&
                          ((e.millennia += M(e.centuries / p)),
                          (e.centuries %= p))));
                })(e),
                (function (e, t, n, s) {
                  var i = 0;
                  !(1024 & t) || i >= n
                    ? ((e.centuries += e.millennia * p), delete e.millennia)
                    : e.millennia && i++,
                    !(512 & t) || i >= n
                      ? ((e.decades += e.centuries * w), delete e.centuries)
                      : e.centuries && i++,
                    !(256 & t) || i >= n
                      ? ((e.years += e.decades * y), delete e.decades)
                      : e.decades && i++,
                    !(128 & t) || i >= n
                      ? ((e.months += e.years * f), delete e.years)
                      : e.years && i++,
                    !(64 & t) || i >= n
                      ? (e.months && (e.days += v(e.refMonth, e.months)),
                        delete e.months,
                        e.days >= 7 &&
                          ((e.weeks += M(e.days / 7)), (e.days %= 7)))
                      : e.months && i++,
                    !(32 & t) || i >= n
                      ? ((e.days += 7 * e.weeks), delete e.weeks)
                      : e.weeks && i++,
                    !(16 & t) || i >= n
                      ? ((e.hours += e.days * m), delete e.days)
                      : e.days && i++,
                    !(8 & t) || i >= n
                      ? ((e.minutes += e.hours * l), delete e.hours)
                      : e.hours && i++,
                    !(4 & t) || i >= n
                      ? ((e.seconds += e.minutes * c), delete e.minutes)
                      : e.minutes && i++,
                    !(2 & t) || i >= n
                      ? ((e.milliseconds += e.seconds * d), delete e.seconds)
                      : e.seconds && i++,
                    (1 & t && !(i >= n)) ||
                      (function (e, t) {
                        var n,
                          s,
                          i,
                          r = T(e, 0, "milliseconds", "seconds", d, t);
                        if (
                          r &&
                          (r = T(e, r, "seconds", "minutes", c, t)) &&
                          (r = T(e, r, "minutes", "hours", l, t)) &&
                          (r = T(e, r, "hours", "days", m, t)) &&
                          (r = T(e, r, "days", "weeks", 7, t)) &&
                          (r = T(
                            e,
                            r,
                            "weeks",
                            "months",
                            S(e.refMonth) / 7,
                            t
                          )) &&
                          (r = T(
                            e,
                            r,
                            "months",
                            "years",
                            ((s = (n = e.refMonth).getTime()),
                            (i = new Date(s)).setFullYear(n.getFullYear() + 1),
                            Math.round((i.getTime() - s) / h) / S(e.refMonth)),
                            t
                          )) &&
                          (r = T(e, r, "years", "decades", y, t)) &&
                          (r = T(e, r, "decades", "centuries", w, t)) &&
                          (r = T(e, r, "centuries", "millennia", p, t))
                        )
                          throw new Error("Fractional unit overflow");
                      })(e, s);
                })(e, s, i, r);
            } finally {
              delete e.refMonth;
            }
            return e;
          }
          function L(e, t, n, s, i) {
            var r;
            (n = +n || 222),
              (s = s > 0 ? s : NaN),
              (i = i > 0 ? (i < 20 ? Math.round(i) : 20) : 0);
            var o = null;
            "function" == typeof e
              ? ((r = e), (e = null))
              : e instanceof Date ||
                (null !== e && isFinite(e)
                  ? (e = new Date(+e))
                  : ("object" == typeof o && (o = e), (e = null)));
            var u = null;
            if (
              ("function" == typeof t
                ? ((r = t), (t = null))
                : t instanceof Date ||
                  (null !== t && isFinite(t)
                    ? (t = new Date(+t))
                    : ("object" == typeof t && (u = t), (t = null))),
              o && (e = N(o, t)),
              u && (t = N(u, e)),
              !e && !t)
            )
              return new E();
            if (!r) return b(new E(), e, t, n, s, i);
            var a,
              c = (function (e) {
                return 1 & e
                  ? 33.333333333333336
                  : 2 & e
                  ? d
                  : 4 & e
                  ? 6e4
                  : 8 & e
                  ? 36e5
                  : 16 & e
                  ? 864e5
                  : 6048e5;
              })(n),
              l = function () {
                r(b(new E(), e, t, n, s, i), a);
              };
            return l(), (a = setInterval(l, c));
          }
          (E.prototype.toString = function (e) {
            var t = a(this),
              n = t.length;
            if (!n) return e ? "" + e : r;
            if (1 === n) return t[0];
            var o = s + t.pop();
            return t.join(i) + o;
          }),
            (E.prototype.toHTML = function (e, t) {
              e = e || "span";
              var n = a(this),
                o = n.length;
              if (!o)
                return (t = t || r) ? "<" + e + ">" + t + "</" + e + ">" : t;
              for (var u = 0; u < o; u++)
                n[u] = "<" + e + ">" + n[u] + "</" + e + ">";
              if (1 === o) return n[0];
              var d = s + n.pop();
              return n.join(i) + d;
            }),
            (E.prototype.addTo = function (e) {
              return N(this, e);
            }),
            (a = function (e) {
              var t = [],
                n = e.millennia;
              return (
                n && t.push(o(n, 10)),
                (n = e.centuries) && t.push(o(n, 9)),
                (n = e.decades) && t.push(o(n, 8)),
                (n = e.years) && t.push(o(n, 7)),
                (n = e.months) && t.push(o(n, 6)),
                (n = e.weeks) && t.push(o(n, 5)),
                (n = e.days) && t.push(o(n, 4)),
                (n = e.hours) && t.push(o(n, 3)),
                (n = e.minutes) && t.push(o(n, 2)),
                (n = e.seconds) && t.push(o(n, 1)),
                (n = e.milliseconds) && t.push(o(n, 0)),
                t
              );
            }),
            (L.MILLISECONDS = 1),
            (L.SECONDS = 2),
            (L.MINUTES = 4),
            (L.HOURS = 8),
            (L.DAYS = 16),
            (L.WEEKS = 32),
            (L.MONTHS = 64),
            (L.YEARS = 128),
            (L.DECADES = 256),
            (L.CENTURIES = 512),
            (L.MILLENNIA = 1024),
            (L.DEFAULTS = 222),
            (L.ALL = 2047);
          var H = (L.setFormat = function (e) {
              if (e) {
                if ("singular" in e || "plural" in e) {
                  var a = e.singular || [];
                  a.split && (a = a.split("|"));
                  var d = e.plural || [];
                  d.split && (d = d.split("|"));
                  for (var c = 0; c <= 10; c++)
                    (t[c] = a[c] || t[c]), (n[c] = d[c] || n[c]);
                }
                "string" == typeof e.last && (s = e.last),
                  "string" == typeof e.delim && (i = e.delim),
                  "string" == typeof e.empty && (r = e.empty),
                  "function" == typeof e.formatNumber && (u = e.formatNumber),
                  "function" == typeof e.formatter && (o = e.formatter);
              }
            }),
            k = (L.resetFormat = function () {
              (t =
                " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split(
                  "|"
                )),
                (n =
                  " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split(
                    "|"
                  )),
                (s = " and "),
                (i = ", "),
                (r = ""),
                (u = function (e) {
                  return e;
                }),
                (o = D);
            });
          (L.setLabels = function (e, t, n, s, i, r, o) {
            H({
              singular: e,
              plural: t,
              last: n,
              delim: s,
              empty: i,
              formatNumber: r,
              formatter: o,
            });
          }),
            (L.resetLabels = k),
            k(),
            e.exports
              ? (e.exports = L)
              : "undefined" != typeof window &&
                "function" == typeof window.define &&
                void 0 !== window.define.amd &&
                window.define("countdown", [], function () {
                  return L;
                });
        })();
      },
    },
    t = {};
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var s in t)
        n.o(t, s) &&
          !n.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var e = n(31093),
        t = n.n(e);
      new (class {
        constructor() {
          (this.timers = document.querySelectorAll(".js-countdown-timer")),
            (this.timer = document.querySelector(".js-countdown-single-timer")),
            (this.timerDays = document.querySelector(
              ".js-countdown-days-number"
            )),
            (this.timerHours = document.querySelector(
              ".js-countdown-hours-number"
            )),
            (this.timerMinutes = document.querySelector(
              ".js-countdown-minutes-number"
            )),
            (this.timerSeconds = document.querySelector(
              ".js-countdown-seconds-number"
            )),
            (this.timerEndsLabel = document.querySelector(
              ".js-countdown-ends-label"
            )),
            this.initCountdown(),
            this.initCountdownSingle();
        }
        format(e) {
          return e < 10 ? "0" + e : e;
        }
        initCountdownSingle() {
          if (!this.timer) return;
          const e = this.timer.dataset.countdown.toString();
          var n = t()(
            new Date(e),
            (e) => {
              e.value > 0
                ? ((this.timer.innerHTML = this.timer.dataset.expired),
                  this.timerEndsLabel.remove(),
                  window.clearInterval(n))
                : ((this.timerDays.innerHTML = this.format(e.days)),
                  (this.timerHours.innerHTML = this.format(e.hours)),
                  (this.timerMinutes.innerHTML = this.format(e.minutes)),
                  (this.timerSeconds.innerHTML = this.format(e.seconds)));
            },
            t().DAYS | t().HOURS | t().MINUTES | t().SECONDS
          );
        }
        initCountdown() {
          this.timers &&
            this.timers.forEach((e) => {
              const n = e.dataset.countdown.toString();
              var s = t()(
                new Date(n),
                (t) => {
                  const n = t.days ? this.format(t.days) + " : " : "",
                    i = t.hours | t.days ? this.format(t.hours) + " : " : "";
                  if (t.value > 0)
                    (e.innerHTML = e.dataset.expired),
                      e.nextElementSibling && e.nextElementSibling.remove(),
                      e.previousElementSibling &&
                        e.previousElementSibling.remove(),
                      window.clearInterval(s);
                  else {
                    const s = e.nextElementSibling.dataset.countdownleft;
                    (e.innerHTML =
                      n +
                      i +
                      this.format(t.minutes) +
                      " : " +
                      this.format(t.seconds)),
                      (e.nextElementSibling.textContent = s);
                  }
                },
                t().DAYS | t().HOURS | t().MINUTES | t().SECONDS
              );
            });
        }
      })();
    })();
})();
