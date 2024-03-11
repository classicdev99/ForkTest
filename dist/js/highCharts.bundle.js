!(function () {
  "use strict";
  var t,
    e,
    i,
    s = {
      78840: function (t, e, i) {
        var s, o, r;
        (o = "undefined" != typeof window ? window : this),
          (r = function (t) {
            function e(e, i, s, o) {
              e.hasOwnProperty(i) ||
                ((e[i] = o.apply(null, s)),
                "function" == typeof CustomEvent &&
                  t.dispatchEvent(
                    new CustomEvent("HighchartsModuleLoaded", {
                      detail: { path: i, module: e[i] },
                    })
                  ));
            }
            var i = {};
            return (
              e(i, "Core/Globals.js", [], function () {
                var e;
                return (
                  (function (e) {
                    (e.SVG_NS = "http://www.w3.org/2000/svg"),
                      (e.product = "Highcharts"),
                      (e.version = "11.1.0"),
                      (e.win = void 0 !== t ? t : {}),
                      (e.doc = e.win.document),
                      (e.svg =
                        e.doc &&
                        e.doc.createElementNS &&
                        !!e.doc.createElementNS(e.SVG_NS, "svg").createSVGRect),
                      (e.userAgent =
                        (e.win.navigator && e.win.navigator.userAgent) || ""),
                      (e.isChrome = -1 !== e.userAgent.indexOf("Chrome")),
                      (e.isFirefox = -1 !== e.userAgent.indexOf("Firefox")),
                      (e.isMS =
                        /(edge|msie|trident)/i.test(e.userAgent) &&
                        !e.win.opera),
                      (e.isSafari =
                        !e.isChrome && -1 !== e.userAgent.indexOf("Safari")),
                      (e.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(
                        e.userAgent
                      )),
                      (e.isWebKit = -1 !== e.userAgent.indexOf("AppleWebKit")),
                      (e.deg2rad = (2 * Math.PI) / 360),
                      (e.hasBidiBug =
                        e.isFirefox &&
                        4 > parseInt(e.userAgent.split("Firefox/")[1], 10)),
                      (e.hasTouch = !!e.win.TouchEvent),
                      (e.marginNames = [
                        "plotTop",
                        "marginRight",
                        "marginBottom",
                        "plotLeft",
                      ]),
                      (e.noop = function () {}),
                      (e.supportsPassiveEvents = (function () {
                        let t = !1;
                        if (!e.isMS) {
                          const i = Object.defineProperty({}, "passive", {
                            get: function () {
                              t = !0;
                            },
                          });
                          e.win.addEventListener &&
                            e.win.removeEventListener &&
                            (e.win.addEventListener("testPassive", e.noop, i),
                            e.win.removeEventListener(
                              "testPassive",
                              e.noop,
                              i
                            ));
                        }
                        return t;
                      })()),
                      (e.charts = []),
                      (e.dateFormats = {}),
                      (e.seriesTypes = {}),
                      (e.symbolSizes = {}),
                      (e.chartCount = 0);
                  })(e || (e = {})),
                  e
                );
              }),
              e(i, "Core/Utilities.js", [i["Core/Globals.js"]], function (t) {
                function e(i, s, o, r) {
                  const n = s ? "Highcharts error" : "Highcharts warning";
                  32 === i && (i = `${n}: Deprecated member`);
                  const a = h(i);
                  let l = a
                    ? `${n} #${i}: www.highcharts.com/errors/${i}/`
                    : i.toString();
                  if (void 0 !== r) {
                    let t = "";
                    a && (l += "?"),
                      x(r, function (e, i) {
                        (t += `\n - ${i}: ${e}`),
                          a && (l += encodeURI(i) + "=" + encodeURI(e));
                      }),
                      (l += t);
                  }
                  b(
                    t,
                    "displayError",
                    { chart: o, code: i, message: l, params: r },
                    function () {
                      if (s) throw Error(l);
                      k.console &&
                        -1 === e.messages.indexOf(l) &&
                        console.warn(l);
                    }
                  ),
                    e.messages.push(l);
                }
                function i(t, e) {
                  return parseInt(t, e || 10);
                }
                function s(t) {
                  return "string" == typeof t;
                }
                function o(t) {
                  return (
                    "[object Array]" ===
                      (t = Object.prototype.toString.call(t)) ||
                    "[object Array Iterator]" === t
                  );
                }
                function r(t, e) {
                  return !(!t || "object" != typeof t || (e && o(t)));
                }
                function n(t) {
                  return r(t) && "number" == typeof t.nodeType;
                }
                function a(t) {
                  const e = t && t.constructor;
                  return !(
                    !r(t, !0) ||
                    n(t) ||
                    !e ||
                    !e.name ||
                    "Object" === e.name
                  );
                }
                function h(t) {
                  return (
                    "number" == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                  );
                }
                function l(t) {
                  return null != t;
                }
                function c(t, e, i) {
                  const o = s(e) && !l(i);
                  let r;
                  const n = (e, i) => {
                    l(e)
                      ? t.setAttribute(i, e)
                      : o
                      ? (r = t.getAttribute(i)) ||
                        "class" !== i ||
                        (r = t.getAttribute(i + "Name"))
                      : t.removeAttribute(i);
                  };
                  return s(e) ? n(i, e) : x(e, n), r;
                }
                function d(t) {
                  return o(t) ? t : [t];
                }
                function p(t, e) {
                  let i;
                  for (i in (t || (t = {}), e)) t[i] = e[i];
                  return t;
                }
                function u() {
                  const t = arguments,
                    e = t.length;
                  for (let i = 0; i < e; i++) {
                    const e = t[i];
                    if (null != e) return e;
                  }
                }
                function g(e, i) {
                  t.isMS &&
                    !t.svg &&
                    i &&
                    l(i.opacity) &&
                    (i.filter = `alpha(opacity=${100 * i.opacity})`),
                    p(e.style, i);
                }
                function f(t) {
                  return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
                }
                function m(t, e) {
                  return 1e14 < t ? t : parseFloat(t.toPrecision(e || 14));
                }
                function x(t, e, i) {
                  for (const s in t)
                    Object.hasOwnProperty.call(t, s) &&
                      e.call(i || t[s], t[s], s, t);
                }
                function y(t, e, i) {
                  function s(e, i) {
                    const s = t.removeEventListener;
                    s && s.call(t, e, i, !1);
                  }
                  function o(i) {
                    let o, r;
                    t.nodeName &&
                      (e ? ((o = {}), (o[e] = !0)) : (o = i),
                      x(o, function (t, e) {
                        if (i[e]) for (r = i[e].length; r--; ) s(e, i[e][r].fn);
                      }));
                  }
                  var r = ("function" == typeof t && t.prototype) || t;
                  if (Object.hasOwnProperty.call(r, "hcEvents")) {
                    const t = r.hcEvents;
                    e
                      ? ((r = t[e] || []),
                        i
                          ? ((t[e] = r.filter(function (t) {
                              return i !== t.fn;
                            })),
                            s(e, i))
                          : (o(t), (t[e] = [])))
                      : (o(t), delete r.hcEvents);
                  }
                }
                function b(e, i, s, o) {
                  if (
                    ((s = s || {}),
                    S.createEvent &&
                      (e.dispatchEvent || (e.fireEvent && e !== t)))
                  ) {
                    var r = S.createEvent("Events");
                    r.initEvent(i, !0, !0),
                      (s = p(r, s)),
                      e.dispatchEvent ? e.dispatchEvent(s) : e.fireEvent(i, s);
                  } else if (e.hcEvents) {
                    s.target ||
                      p(s, {
                        preventDefault: function () {
                          s.defaultPrevented = !0;
                        },
                        target: e,
                        type: i,
                      }),
                      (r = []);
                    let t = e,
                      o = !1;
                    for (; t.hcEvents; )
                      Object.hasOwnProperty.call(t, "hcEvents") &&
                        t.hcEvents[i] &&
                        (r.length && (o = !0),
                        r.unshift.apply(r, t.hcEvents[i])),
                        (t = Object.getPrototypeOf(t));
                    o && r.sort((t, e) => t.order - e.order),
                      r.forEach((t) => {
                        !1 === t.fn.call(e, s) && s.preventDefault();
                      });
                  }
                  o && !s.defaultPrevented && o.call(e, s);
                }
                const { charts: v, doc: S, win: k } = t;
                ((e || (e = {})).messages = []),
                  (Math.easeInOutSine = function (t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                  });
                var M = Array.prototype.find
                  ? function (t, e) {
                      return t.find(e);
                    }
                  : function (t, e) {
                      let i;
                      const s = t.length;
                      for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
                    };
                let C;
                x(
                  {
                    map: "map",
                    each: "forEach",
                    grep: "filter",
                    reduce: "reduce",
                    some: "some",
                  },
                  function (i, s) {
                    t[s] = function (t) {
                      return (
                        e(32, !1, void 0, {
                          [`Highcharts.${s}`]: `use Array.${i}`,
                        }),
                        Array.prototype[i].apply(t, [].slice.call(arguments, 1))
                      );
                    };
                  }
                );
                const w = (function () {
                  const t = Math.random().toString(36).substring(2, 9) + "-";
                  let e = 0;
                  return function () {
                    return "highcharts-" + (C ? "" : t) + e++;
                  };
                })();
                return (
                  k.jQuery &&
                    (k.jQuery.fn.highcharts = function () {
                      const e = [].slice.call(arguments);
                      if (this[0])
                        return e[0]
                          ? (new t[s(e[0]) ? e.shift() : "Chart"](
                              this[0],
                              e[0],
                              e[1]
                            ),
                            this)
                          : v[c(this[0], "data-highcharts-chart")];
                    }),
                  (M = {
                    addEvent: function (e, i, s, o = {}) {
                      var r = ("function" == typeof e && e.prototype) || e;
                      Object.hasOwnProperty.call(r, "hcEvents") ||
                        (r.hcEvents = {}),
                        (r = r.hcEvents),
                        t.Point &&
                          e instanceof t.Point &&
                          e.series &&
                          e.series.chart &&
                          (e.series.chart.runTrackerClick = !0);
                      const n = e.addEventListener;
                      return (
                        n &&
                          n.call(
                            e,
                            i,
                            s,
                            !!t.supportsPassiveEvents && {
                              passive:
                                void 0 === o.passive
                                  ? -1 !== i.indexOf("touch")
                                  : o.passive,
                              capture: !1,
                            }
                          ),
                        r[i] || (r[i] = []),
                        r[i].push({
                          fn: s,
                          order: "number" == typeof o.order ? o.order : 1 / 0,
                        }),
                        r[i].sort((t, e) => t.order - e.order),
                        function () {
                          y(e, i, s);
                        }
                      );
                    },
                    arrayMax: function (t) {
                      let e = t.length,
                        i = t[0];
                      for (; e--; ) t[e] > i && (i = t[e]);
                      return i;
                    },
                    arrayMin: function (t) {
                      let e = t.length,
                        i = t[0];
                      for (; e--; ) t[e] < i && (i = t[e]);
                      return i;
                    },
                    attr: c,
                    clamp: function (t, e, i) {
                      return t > e ? (t < i ? t : i) : e;
                    },
                    clearTimeout: function (t) {
                      l(t) && clearTimeout(t);
                    },
                    correctFloat: m,
                    createElement: function (t, e, i, s, o) {
                      return (
                        (t = S.createElement(t)),
                        e && p(t, e),
                        o &&
                          g(t, { padding: "0", border: "none", margin: "0" }),
                        i && g(t, i),
                        s && s.appendChild(t),
                        t
                      );
                    },
                    css: g,
                    defined: l,
                    destroyObjectProperties: function (t, e) {
                      x(t, function (i, s) {
                        i && i !== e && i.destroy && i.destroy(), delete t[s];
                      });
                    },
                    diffObjects: function (t, e, i, s) {
                      const n = {};
                      return (
                        (function t(e, n, a, h) {
                          const l = i ? n : e;
                          x(e, function (i, c) {
                            if (!h && s && -1 < s.indexOf(c) && n[c]) {
                              (i = d(i)), (a[c] = []);
                              for (
                                let e = 0;
                                e < Math.max(i.length, n[c].length);
                                e++
                              )
                                n[c][e] &&
                                  (void 0 === i[e]
                                    ? (a[c][e] = n[c][e])
                                    : ((a[c][e] = {}),
                                      t(i[e], n[c][e], a[c][e], h + 1)));
                            } else r(i, !0) && !i.nodeType ? ((a[c] = o(i) ? [] : {}), t(i, n[c] || {}, a[c], h + 1), 0 !== Object.keys(a[c]).length || ("colorAxis" === c && 0 === h) || delete a[c]) : (e[c] !== n[c] || (c in e && !(c in n))) && (a[c] = l[c]);
                          });
                        })(t, e, n, 0),
                        n
                      );
                    },
                    discardElement: function (t) {
                      t && t.parentElement && t.parentElement.removeChild(t);
                    },
                    erase: function (t, e) {
                      let i = t.length;
                      for (; i--; )
                        if (t[i] === e) {
                          t.splice(i, 1);
                          break;
                        }
                    },
                    error: e,
                    extend: p,
                    extendClass: function (t, e) {
                      const i = function () {};
                      return p((i.prototype = new t()), e), i;
                    },
                    find: M,
                    fireEvent: b,
                    getClosestDistance: function (t, e) {
                      const i = !e;
                      let s, o, r, n;
                      return (
                        t.forEach((t) => {
                          if (1 < t.length)
                            for (n = o = t.length - 1; 0 < n; n--)
                              (r = t[n] - t[n - 1]),
                                0 > r && !i
                                  ? (null == e || e(), (e = void 0))
                                  : r && (void 0 === s || r < s) && (s = r);
                        }),
                        s
                      );
                    },
                    getMagnitude: f,
                    getNestedProperty: function (t, e) {
                      for (t = t.split("."); t.length && l(e); ) {
                        const i = t.shift();
                        if (void 0 === i || "__proto__" === i) return;
                        if ("this" === i) {
                          let t;
                          return r(e) && (t = e["@this"]), null != t ? t : e;
                        }
                        if (
                          !l((e = e[i])) ||
                          "function" == typeof e ||
                          "number" == typeof e.nodeType ||
                          e === k
                        )
                          return;
                      }
                      return e;
                    },
                    getStyle: function t(e, s, o) {
                      let r;
                      return "width" === s
                        ? ((s = Math.min(e.offsetWidth, e.scrollWidth)),
                          (o =
                            e.getBoundingClientRect &&
                            e.getBoundingClientRect().width) < s &&
                            o >= s - 1 &&
                            (s = Math.floor(o)),
                          Math.max(
                            0,
                            s -
                              (t(e, "padding-left", !0) || 0) -
                              (t(e, "padding-right", !0) || 0)
                          ))
                        : "height" === s
                        ? Math.max(
                            0,
                            Math.min(e.offsetHeight, e.scrollHeight) -
                              (t(e, "padding-top", !0) || 0) -
                              (t(e, "padding-bottom", !0) || 0)
                          )
                        : ((e = k.getComputedStyle(e, void 0)) &&
                            ((r = e.getPropertyValue(s)),
                            u(o, "opacity" !== s) && (r = i(r))),
                          r);
                    },
                    inArray: function (t, i, s) {
                      return (
                        e(32, !1, void 0, {
                          "Highcharts.inArray": "use Array.indexOf",
                        }),
                        i.indexOf(t, s)
                      );
                    },
                    insertItem: function (t, e) {
                      const i = t.options.index,
                        s = e.length;
                      let o;
                      for (o = t.options.isInternal ? s : 0; o < s + 1; o++)
                        if (
                          !e[o] ||
                          (h(i) && i < u(e[o].options.index, e[o]._i)) ||
                          e[o].options.isInternal
                        ) {
                          e.splice(o, 0, t);
                          break;
                        }
                      return o;
                    },
                    isArray: o,
                    isClass: a,
                    isDOMElement: n,
                    isFunction: function (t) {
                      return "function" == typeof t;
                    },
                    isNumber: h,
                    isObject: r,
                    isString: s,
                    keys: function (t) {
                      return (
                        e(32, !1, void 0, {
                          "Highcharts.keys": "use Object.keys",
                        }),
                        Object.keys(t)
                      );
                    },
                    merge: function () {
                      let t,
                        e = arguments,
                        i = {};
                      const s = function (t, e) {
                        return (
                          "object" != typeof t && (t = {}),
                          x(e, function (i, o) {
                            "__proto__" !== o &&
                              "constructor" !== o &&
                              (!r(i, !0) || a(i) || n(i)
                                ? (t[o] = e[o])
                                : (t[o] = s(t[o] || {}, i)));
                          }),
                          t
                        );
                      };
                      !0 === e[0] &&
                        ((i = e[1]), (e = Array.prototype.slice.call(e, 2)));
                      const o = e.length;
                      for (t = 0; t < o; t++) i = s(i, e[t]);
                      return i;
                    },
                    normalizeTickInterval: function (t, e, i, s, o) {
                      let r = t;
                      const n = t / (i = u(i, f(t)));
                      for (
                        e ||
                          ((e = o
                            ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                            : [1, 2, 2.5, 5, 10]),
                          !1 === s &&
                            (1 === i
                              ? (e = e.filter(function (t) {
                                  return 0 == t % 1;
                                }))
                              : 0.1 >= i && (e = [1 / i]))),
                          s = 0;
                        s < e.length &&
                        ((r = e[s]),
                        !(
                          (o && r * i >= t) ||
                          (!o && n <= (e[s] + (e[s + 1] || e[s])) / 2)
                        ));
                        s++
                      );
                      return m(r * i, -Math.round(Math.log(0.001) / Math.LN10));
                    },
                    objectEach: x,
                    offset: function (t) {
                      const e = S.documentElement;
                      return {
                        top:
                          (t =
                            t.parentElement || t.parentNode
                              ? t.getBoundingClientRect()
                              : { top: 0, left: 0, width: 0, height: 0 }).top +
                          (k.pageYOffset || e.scrollTop) -
                          (e.clientTop || 0),
                        left:
                          t.left +
                          (k.pageXOffset || e.scrollLeft) -
                          (e.clientLeft || 0),
                        width: t.width,
                        height: t.height,
                      };
                    },
                    pad: function (t, e, i) {
                      return (
                        Array(
                          (e || 2) + 1 - String(t).replace("-", "").length
                        ).join(i || "0") + t
                      );
                    },
                    pick: u,
                    pInt: i,
                    pushUnique: function (t, e) {
                      return 0 > t.indexOf(e) && !!t.push(e);
                    },
                    relativeLength: function (t, e, i) {
                      return /%$/.test(t)
                        ? (e * parseFloat(t)) / 100 + (i || 0)
                        : parseFloat(t);
                    },
                    removeEvent: y,
                    splat: d,
                    stableSort: function (t, e) {
                      const i = t.length;
                      let s, o;
                      for (o = 0; o < i; o++) t[o].safeI = o;
                      for (
                        t.sort(function (t, i) {
                          return (s = e(t, i)), 0 === s ? t.safeI - i.safeI : s;
                        }),
                          o = 0;
                        o < i;
                        o++
                      )
                        delete t[o].safeI;
                    },
                    syncTimeout: function (t, e, i) {
                      return 0 < e ? setTimeout(t, e, i) : (t.call(0, i), -1);
                    },
                    timeUnits: {
                      millisecond: 1,
                      second: 1e3,
                      minute: 6e4,
                      hour: 36e5,
                      day: 864e5,
                      week: 6048e5,
                      month: 24192e5,
                      year: 314496e5,
                    },
                    uniqueKey: w,
                    useSerialIds: function (t) {
                      return (C = u(t, C));
                    },
                    wrap: function (t, e, i) {
                      const s = t[e];
                      t[e] = function () {
                        const t = arguments,
                          e = this;
                        return i.apply(
                          this,
                          [
                            function () {
                              return s.apply(
                                e,
                                arguments.length ? arguments : t
                              );
                            },
                          ].concat([].slice.call(arguments))
                        );
                      };
                    },
                  }),
                  M
                );
              }),
              e(i, "Core/Chart/ChartDefaults.js", [], function () {
                return {
                  alignThresholds: !1,
                  panning: { enabled: !1, type: "x" },
                  styledMode: !1,
                  borderRadius: 0,
                  colorCount: 10,
                  allowMutatingData: !0,
                  ignoreHiddenSeries: !0,
                  spacing: [10, 10, 15, 10],
                  resetZoomButton: {
                    theme: { zIndex: 6 },
                    position: { align: "right", x: -10, y: 10 },
                  },
                  reflow: !0,
                  type: "line",
                  zooming: {
                    singleTouch: !1,
                    resetButton: {
                      theme: { zIndex: 6 },
                      position: { align: "right", x: -10, y: 10 },
                    },
                  },
                  width: null,
                  height: null,
                  borderColor: "#334eff",
                  backgroundColor: "#ffffff",
                  plotBorderColor: "#cccccc",
                };
              }),
              e(
                i,
                "Core/Color/Color.js",
                [i["Core/Globals.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  const { isNumber: i, merge: s, pInt: o } = e;
                  class r {
                    static parse(t) {
                      return t ? new r(t) : r.None;
                    }
                    constructor(e) {
                      (this.rgba = [NaN, NaN, NaN, NaN]), (this.input = e);
                      const i = t.Color;
                      if (i && i !== r) return new i(e);
                      this.init(e);
                    }
                    init(t) {
                      let e, i;
                      if ("object" == typeof t && void 0 !== t.stops)
                        this.stops = t.stops.map((t) => new r(t[1]));
                      else if ("string" == typeof t) {
                        if (
                          ((this.input = t = r.names[t.toLowerCase()] || t),
                          "#" === t.charAt(0))
                        ) {
                          var s = t.length,
                            o = parseInt(t.substr(1), 16);
                          7 === s
                            ? (e = [
                                (16711680 & o) >> 16,
                                (65280 & o) >> 8,
                                255 & o,
                                1,
                              ])
                            : 4 === s &&
                              (e = [
                                ((3840 & o) >> 4) | ((3840 & o) >> 8),
                                ((240 & o) >> 4) | (240 & o),
                                ((15 & o) << 4) | (15 & o),
                                1,
                              ]);
                        }
                        if (!e)
                          for (o = r.parsers.length; o-- && !e; )
                            (i = r.parsers[o]),
                              (s = i.regex.exec(t)) && (e = i.parse(s));
                      }
                      e && (this.rgba = e);
                    }
                    get(t) {
                      const e = this.input,
                        o = this.rgba;
                      if ("object" == typeof e && void 0 !== this.stops) {
                        const i = s(e);
                        return (
                          (i.stops = [].slice.call(i.stops)),
                          this.stops.forEach((e, s) => {
                            i.stops[s] = [i.stops[s][0], e.get(t)];
                          }),
                          i
                        );
                      }
                      return o && i(o[0])
                        ? "rgb" === t || (!t && 1 === o[3])
                          ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")"
                          : "a" === t
                          ? `${o[3]}`
                          : "rgba(" + o.join(",") + ")"
                        : e;
                    }
                    brighten(t) {
                      const e = this.rgba;
                      if (this.stops)
                        this.stops.forEach(function (e) {
                          e.brighten(t);
                        });
                      else if (i(t) && 0 !== t)
                        for (let i = 0; 3 > i; i++)
                          (e[i] += o(255 * t)),
                            0 > e[i] && (e[i] = 0),
                            255 < e[i] && (e[i] = 255);
                      return this;
                    }
                    setOpacity(t) {
                      return (this.rgba[3] = t), this;
                    }
                    tweenTo(t, e) {
                      const s = this.rgba,
                        o = t.rgba;
                      return i(s[0]) && i(o[0])
                        ? ((t = 1 !== o[3] || 1 !== s[3]) ? "rgba(" : "rgb(") +
                            Math.round(o[0] + (s[0] - o[0]) * (1 - e)) +
                            "," +
                            Math.round(o[1] + (s[1] - o[1]) * (1 - e)) +
                            "," +
                            Math.round(o[2] + (s[2] - o[2]) * (1 - e)) +
                            (t ? "," + (o[3] + (s[3] - o[3]) * (1 - e)) : "") +
                            ")"
                        : t.input || "none";
                    }
                  }
                  return (
                    (r.names = { white: "#ffffff", black: "#000000" }),
                    (r.parsers = [
                      {
                        regex:
                          /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                        parse: function (t) {
                          return [
                            o(t[1]),
                            o(t[2]),
                            o(t[3]),
                            parseFloat(t[4], 10),
                          ];
                        },
                      },
                      {
                        regex:
                          /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                        parse: function (t) {
                          return [o(t[1]), o(t[2]), o(t[3]), 1];
                        },
                      },
                    ]),
                    (r.None = new r("")),
                    r
                  );
                }
              ),
              e(i, "Core/Color/Palettes.js", [], function () {
                return {
                  colors:
                    "#2caffe #544fc5 #00e272 #fe6a35 #6b8abc #d568fb #2ee0ca #fa4b42 #feb56a #91e8e1".split(
                      " "
                    ),
                };
              }),
              e(
                i,
                "Core/Time.js",
                [i["Core/Globals.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  const { win: i } = t,
                    {
                      defined: s,
                      error: o,
                      extend: r,
                      isObject: n,
                      merge: a,
                      objectEach: h,
                      pad: l,
                      pick: c,
                      splat: d,
                      timeUnits: p,
                    } = e,
                    u =
                      t.isSafari &&
                      i.Intl &&
                      i.Intl.DateTimeFormat.prototype.formatRange,
                    g =
                      t.isSafari &&
                      i.Intl &&
                      !i.Intl.DateTimeFormat.prototype.formatRange;
                  return class {
                    constructor(t) {
                      (this.options = {}),
                        (this.variableTimezone = this.useUTC = !1),
                        (this.Date = i.Date),
                        (this.getTimezoneOffset =
                          this.timezoneOffsetFunction()),
                        this.update(t);
                    }
                    get(t, e) {
                      if (this.variableTimezone || this.timezoneOffset) {
                        const i = e.getTime(),
                          s = i - this.getTimezoneOffset(e);
                        return (
                          e.setTime(s), (t = e["getUTC" + t]()), e.setTime(i), t
                        );
                      }
                      return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
                    }
                    set(t, e, i) {
                      if (this.variableTimezone || this.timezoneOffset) {
                        if (
                          "Milliseconds" === t ||
                          "Seconds" === t ||
                          ("Minutes" === t &&
                            0 == this.getTimezoneOffset(e) % 36e5)
                        )
                          return e["setUTC" + t](i);
                        var s = this.getTimezoneOffset(e);
                        return (
                          (s = e.getTime() - s),
                          e.setTime(s),
                          e["setUTC" + t](i),
                          (t = this.getTimezoneOffset(e)),
                          (s = e.getTime() + t),
                          e.setTime(s)
                        );
                      }
                      return this.useUTC || (u && "FullYear" === t)
                        ? e["setUTC" + t](i)
                        : e["set" + t](i);
                    }
                    update(t = {}) {
                      const e = c(t.useUTC, !0);
                      (this.options = t = a(!0, this.options, t)),
                        (this.Date = t.Date || i.Date || Date),
                        (this.timezoneOffset =
                          ((this.useUTC = e) && t.timezoneOffset) || void 0),
                        (this.getTimezoneOffset =
                          this.timezoneOffsetFunction()),
                        (this.variableTimezone =
                          e && !(!t.getTimezoneOffset && !t.timezone));
                    }
                    makeTime(t, e, i, s, o, r) {
                      let n, a, h;
                      return (
                        this.useUTC
                          ? ((n = this.Date.UTC.apply(0, arguments)),
                            (a = this.getTimezoneOffset(n)),
                            (n += a),
                            (h = this.getTimezoneOffset(n)),
                            a !== h
                              ? (n += h - a)
                              : a - 36e5 !== this.getTimezoneOffset(n - 36e5) ||
                                g ||
                                (n -= 36e5))
                          : (n = new this.Date(
                              t,
                              e,
                              c(i, 1),
                              c(s, 0),
                              c(o, 0),
                              c(r, 0)
                            ).getTime()),
                        n
                      );
                    }
                    timezoneOffsetFunction() {
                      const t = this,
                        e = this.options,
                        s = e.getTimezoneOffset,
                        r = e.moment || i.moment;
                      if (!this.useUTC)
                        return function (t) {
                          return (
                            6e4 * new Date(t.toString()).getTimezoneOffset()
                          );
                        };
                      if (e.timezone) {
                        if (r)
                          return function (t) {
                            return 6e4 * -r.tz(t, e.timezone).utcOffset();
                          };
                        o(25);
                      }
                      return this.useUTC && s
                        ? function (t) {
                            return 6e4 * s(t.valueOf());
                          }
                        : function () {
                            return 6e4 * (t.timezoneOffset || 0);
                          };
                    }
                    dateFormat(e, i, o) {
                      if (!s(i) || isNaN(i))
                        return (
                          (t.defaultOptions.lang &&
                            t.defaultOptions.lang.invalidDate) ||
                          ""
                        );
                      e = c(e, "%Y-%m-%d %H:%M:%S");
                      const n = this;
                      var a = new this.Date(i);
                      const d = this.get("Hours", a),
                        p = this.get("Day", a),
                        u = this.get("Date", a),
                        g = this.get("Month", a),
                        f = this.get("FullYear", a),
                        m = t.defaultOptions.lang,
                        x = m && m.weekdays,
                        y = m && m.shortWeekdays;
                      return (
                        (a = r(
                          {
                            a: y ? y[p] : x[p].substr(0, 3),
                            A: x[p],
                            d: l(u),
                            e: l(u, 2, " "),
                            w: p,
                            b: m.shortMonths[g],
                            B: m.months[g],
                            m: l(g + 1),
                            o: g + 1,
                            y: f.toString().substr(2, 2),
                            Y: f,
                            H: l(d),
                            k: d,
                            I: l(d % 12 || 12),
                            l: d % 12 || 12,
                            M: l(this.get("Minutes", a)),
                            p: 12 > d ? "AM" : "PM",
                            P: 12 > d ? "am" : "pm",
                            S: l(a.getSeconds()),
                            L: l(Math.floor(i % 1e3), 3),
                          },
                          t.dateFormats
                        )),
                        h(a, function (t, s) {
                          for (; -1 !== e.indexOf("%" + s); )
                            e = e.replace(
                              "%" + s,
                              "function" == typeof t ? t.call(n, i) : t
                            );
                        }),
                        o ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                      );
                    }
                    resolveDTLFormat(t) {
                      return n(t, !0)
                        ? t
                        : { main: (t = d(t))[0], from: t[1], to: t[2] };
                    }
                    getTimeTicks(t, e, i, o) {
                      const n = this,
                        a = [],
                        h = {};
                      var l = new n.Date(e);
                      const d = t.unitRange,
                        u = t.count || 1;
                      let g;
                      if (((o = c(o, 1)), s(e))) {
                        if (
                          (n.set(
                            "Milliseconds",
                            l,
                            d >= p.second
                              ? 0
                              : u * Math.floor(n.get("Milliseconds", l) / u)
                          ),
                          d >= p.second &&
                            n.set(
                              "Seconds",
                              l,
                              d >= p.minute
                                ? 0
                                : u * Math.floor(n.get("Seconds", l) / u)
                            ),
                          d >= p.minute &&
                            n.set(
                              "Minutes",
                              l,
                              d >= p.hour
                                ? 0
                                : u * Math.floor(n.get("Minutes", l) / u)
                            ),
                          d >= p.hour &&
                            n.set(
                              "Hours",
                              l,
                              d >= p.day
                                ? 0
                                : u * Math.floor(n.get("Hours", l) / u)
                            ),
                          d >= p.day &&
                            n.set(
                              "Date",
                              l,
                              d >= p.month
                                ? 1
                                : Math.max(
                                    1,
                                    u * Math.floor(n.get("Date", l) / u)
                                  )
                            ),
                          d >= p.month)
                        ) {
                          n.set(
                            "Month",
                            l,
                            d >= p.year
                              ? 0
                              : u * Math.floor(n.get("Month", l) / u)
                          );
                          var f = n.get("FullYear", l);
                        }
                        d >= p.year && n.set("FullYear", l, f - (f % u)),
                          d === p.week &&
                            ((f = n.get("Day", l)),
                            n.set(
                              "Date",
                              l,
                              n.get("Date", l) - f + o + (f < o ? -7 : 0)
                            )),
                          (f = n.get("FullYear", l)),
                          (o = n.get("Month", l));
                        const t = n.get("Date", l),
                          r = n.get("Hours", l);
                        for (
                          e = l.getTime(),
                            (!n.variableTimezone && n.useUTC) ||
                              !s(i) ||
                              (g =
                                i - e > 4 * p.month ||
                                n.getTimezoneOffset(e) !==
                                  n.getTimezoneOffset(i)),
                            e = l.getTime(),
                            l = 1;
                          e < i;

                        )
                          a.push(e),
                            (e =
                              d === p.year
                                ? n.makeTime(f + l * u, 0)
                                : d === p.month
                                ? n.makeTime(f, o + l * u)
                                : !g || (d !== p.day && d !== p.week)
                                ? g && d === p.hour && 1 < u
                                  ? n.makeTime(f, o, t, r + l * u)
                                  : e + d * u
                                : n.makeTime(
                                    f,
                                    o,
                                    t + l * u * (d === p.day ? 1 : 7)
                                  )),
                            l++;
                        a.push(e),
                          d <= p.hour &&
                            1e4 > a.length &&
                            a.forEach(function (t) {
                              0 == t % 18e5 &&
                                "000000000" === n.dateFormat("%H%M%S%L", t) &&
                                (h[t] = "day");
                            });
                      }
                      return (
                        (a.info = r(t, { higherRanks: h, totalRange: d * u })),
                        a
                      );
                    }
                    getDateFormat(t, e, i, s) {
                      const o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                        r = {
                          millisecond: 15,
                          second: 12,
                          minute: 9,
                          hour: 6,
                          day: 3,
                        };
                      let n,
                        a = "millisecond";
                      for (n in p) {
                        if (
                          t === p.week &&
                          +this.dateFormat("%w", e) === i &&
                          "00:00:00.000" === o.substr(6)
                        ) {
                          n = "week";
                          break;
                        }
                        if (p[n] > t) {
                          n = a;
                          break;
                        }
                        if (
                          r[n] &&
                          o.substr(r[n]) !== "01-01 00:00:00.000".substr(r[n])
                        )
                          break;
                        "week" !== n && (a = n);
                      }
                      return this.resolveDTLFormat(s[n]).main;
                    }
                  };
                }
              ),
              e(
                i,
                "Core/Defaults.js",
                [
                  i["Core/Chart/ChartDefaults.js"],
                  i["Core/Color/Color.js"],
                  i["Core/Globals.js"],
                  i["Core/Color/Palettes.js"],
                  i["Core/Time.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r) {
                  const { isTouchDevice: n, svg: a } = i,
                    { merge: h } = r,
                    l = {
                      colors: s.colors,
                      symbols: [
                        "circle",
                        "diamond",
                        "square",
                        "triangle",
                        "triangle-down",
                      ],
                      lang: {
                        loading: "Loading...",
                        months:
                          "January February March April May June July August September October November December".split(
                            " "
                          ),
                        shortMonths:
                          "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
                            " "
                          ),
                        weekdays:
                          "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                            " "
                          ),
                        decimalPoint: ".",
                        numericSymbols: "kMGTPE".split(""),
                        resetZoom: "Reset zoom",
                        resetZoomTitle: "Reset zoom level 1:1",
                        thousandsSep: " ",
                      },
                      global: {},
                      time: {
                        Date: void 0,
                        getTimezoneOffset: void 0,
                        timezone: void 0,
                        timezoneOffset: 0,
                        useUTC: !0,
                      },
                      chart: t,
                      title: {
                        style: { color: "#333333", fontWeight: "bold" },
                        text: "Chart title",
                        align: "center",
                        margin: 15,
                        widthAdjust: -44,
                      },
                      subtitle: {
                        style: { color: "#666666", fontSize: "0.8em" },
                        text: "",
                        align: "center",
                        widthAdjust: -44,
                      },
                      caption: {
                        margin: 15,
                        style: { color: "#666666", fontSize: "0.8em" },
                        text: "",
                        align: "left",
                        verticalAlign: "bottom",
                      },
                      plotOptions: {},
                      legend: {
                        enabled: !0,
                        align: "center",
                        alignColumns: !0,
                        className: "highcharts-no-tooltip",
                        layout: "horizontal",
                        itemMarginBottom: 2,
                        itemMarginTop: 2,
                        labelFormatter: function () {
                          return this.name;
                        },
                        borderColor: "#999999",
                        borderRadius: 0,
                        navigation: {
                          style: { fontSize: "0.8em" },
                          activeColor: "#0022ff",
                          inactiveColor: "#cccccc",
                        },
                        itemStyle: {
                          color: "#333333",
                          cursor: "pointer",
                          fontSize: "0.8em",
                          textDecoration: "none",
                          textOverflow: "ellipsis",
                        },
                        itemHoverStyle: { color: "#000000" },
                        itemHiddenStyle: {
                          color: "#666666",
                          textDecoration: "line-through",
                        },
                        shadow: !1,
                        itemCheckboxStyle: {
                          position: "absolute",
                          width: "13px",
                          height: "13px",
                        },
                        squareSymbol: !0,
                        symbolPadding: 5,
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        title: {
                          style: { fontSize: "0.8em", fontWeight: "bold" },
                        },
                      },
                      loading: {
                        labelStyle: {
                          fontWeight: "bold",
                          position: "relative",
                          top: "45%",
                        },
                        style: {
                          position: "absolute",
                          backgroundColor: "#ffffff",
                          opacity: 0.5,
                          textAlign: "center",
                        },
                      },
                      tooltip: {
                        enabled: !0,
                        animation: a,
                        borderRadius: 3,
                        dateTimeLabelFormats: {
                          millisecond: "%A, %e %b, %H:%M:%S.%L",
                          second: "%A, %e %b, %H:%M:%S",
                          minute: "%A, %e %b, %H:%M",
                          hour: "%A, %e %b, %H:%M",
                          day: "%A, %e %b %Y",
                          week: "Week from %A, %e %b %Y",
                          month: "%B %Y",
                          year: "%Y",
                        },
                        footerFormat: "",
                        headerShape: "callout",
                        hideDelay: 500,
                        padding: 8,
                        shape: "callout",
                        shared: !1,
                        snap: n ? 25 : 10,
                        headerFormat:
                          '<span style="font-size: 0.8em">{point.key}</span><br/>',
                        pointFormat:
                          '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                        backgroundColor: "#ffffff",
                        borderWidth: void 0,
                        shadow: !0,
                        stickOnContact: !1,
                        style: {
                          color: "#333333",
                          cursor: "default",
                          fontSize: "0.8em",
                        },
                        useHTML: !1,
                      },
                      credits: {
                        enabled: !0,
                        href: "https://www.highcharts.com?credits",
                        position: {
                          align: "right",
                          x: -10,
                          verticalAlign: "bottom",
                          y: -5,
                        },
                        style: {
                          cursor: "pointer",
                          color: "#999999",
                          fontSize: "0.6em",
                        },
                        text: "Highcharts.com",
                      },
                    };
                  l.chart.styledMode = !1;
                  const c = new o(l.time);
                  return {
                    defaultOptions: l,
                    defaultTime: c,
                    getOptions: function () {
                      return l;
                    },
                    setOptions: function (t) {
                      return (
                        h(!0, l, t),
                        (t.time || t.global) &&
                          (i.time
                            ? i.time.update(
                                h(l.global, l.time, t.global, t.time)
                              )
                            : (i.time = c)),
                        l
                      );
                    },
                  };
                }
              ),
              e(
                i,
                "Core/Animation/Fx.js",
                [
                  i["Core/Color/Color.js"],
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { parse: s } = t,
                    { win: o } = e,
                    { isNumber: r, objectEach: n } = i;
                  class a {
                    constructor(t, e, i) {
                      (this.pos = NaN),
                        (this.options = e),
                        (this.elem = t),
                        (this.prop = i);
                    }
                    dSetter() {
                      var t = this.paths;
                      const e = t && t[0];
                      t = t && t[1];
                      const i = this.now || 0;
                      let s = [];
                      if (1 !== i && e && t)
                        if (e.length === t.length && 1 > i)
                          for (let o = 0; o < t.length; o++) {
                            const n = e[o],
                              a = t[o],
                              h = [];
                            for (let t = 0; t < a.length; t++) {
                              const e = n[t],
                                s = a[t];
                              r(e) &&
                              r(s) &&
                              ("A" !== a[0] || (4 !== t && 5 !== t))
                                ? (h[t] = e + i * (s - e))
                                : (h[t] = s);
                            }
                            s.push(h);
                          }
                        else s = t;
                      else s = this.toD || [];
                      this.elem.attr("d", s, void 0, !0);
                    }
                    update() {
                      const t = this.elem,
                        e = this.prop,
                        i = this.now,
                        s = this.options.step;
                      this[e + "Setter"]
                        ? this[e + "Setter"]()
                        : t.attr
                        ? t.element && t.attr(e, i, null, !0)
                        : (t.style[e] = i + this.unit),
                        s && s.call(t, i, this);
                    }
                    run(t, e, i) {
                      const s = this,
                        r = s.options,
                        n = function (t) {
                          return !n.stopped && s.step(t);
                        },
                        h =
                          o.requestAnimationFrame ||
                          function (t) {
                            setTimeout(t, 13);
                          },
                        l = function () {
                          for (let t = 0; t < a.timers.length; t++)
                            a.timers[t]() || a.timers.splice(t--, 1);
                          a.timers.length && h(l);
                        };
                      t !== e || this.elem["forceAnimate:" + this.prop]
                        ? ((this.startTime = +new Date()),
                          (this.start = t),
                          (this.end = e),
                          (this.unit = i),
                          (this.now = this.start),
                          (this.pos = 0),
                          (n.elem = this.elem),
                          (n.prop = this.prop),
                          n() && 1 === a.timers.push(n) && h(l))
                        : (delete r.curAnim[this.prop],
                          r.complete &&
                            0 === Object.keys(r.curAnim).length &&
                            r.complete.call(this.elem));
                    }
                    step(t) {
                      const e = +new Date(),
                        i = this.options,
                        s = this.elem,
                        o = i.complete,
                        r = i.duration,
                        a = i.curAnim;
                      let h;
                      return (
                        s.attr && !s.element
                          ? (t = !1)
                          : t || e >= r + this.startTime
                          ? ((this.now = this.end),
                            (this.pos = 1),
                            this.update(),
                            (h = a[this.prop] = !0),
                            n(a, function (t) {
                              !0 !== t && (h = !1);
                            }),
                            h && o && o.call(s),
                            (t = !1))
                          : ((this.pos = i.easing((e - this.startTime) / r)),
                            (this.now =
                              this.start + (this.end - this.start) * this.pos),
                            this.update(),
                            (t = !0)),
                        t
                      );
                    }
                    initPath(t, e, i) {
                      function s(t, e) {
                        for (; t.length < d; ) {
                          var i = t[0];
                          const s = e[d - t.length];
                          s &&
                            "M" === i[0] &&
                            (t[0] =
                              "C" === s[0]
                                ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]]
                                : ["L", i[1], i[2]]),
                            t.unshift(i),
                            h && ((i = t.pop()), t.push(t[t.length - 1], i));
                        }
                      }
                      function o(t, e) {
                        for (; t.length < d; )
                          if (
                            ("C" ===
                              (e =
                                t[Math.floor(t.length / l) - 1].slice())[0] &&
                              ((e[1] = e[5]), (e[2] = e[6])),
                            h)
                          ) {
                            const i = t[Math.floor(t.length / l)].slice();
                            t.splice(t.length / 2, 0, e, i);
                          } else t.push(e);
                      }
                      const n = t.startX,
                        a = t.endX;
                      i = i.slice();
                      const h = t.isArea,
                        l = h ? 2 : 1;
                      let c, d, p;
                      if (!(e = e && e.slice())) return [i, i];
                      if (n && a && a.length) {
                        for (t = 0; t < n.length; t++) {
                          if (n[t] === a[0]) {
                            c = t;
                            break;
                          }
                          if (n[0] === a[a.length - n.length + t]) {
                            (c = t), (p = !0);
                            break;
                          }
                          if (n[n.length - 1] === a[a.length - n.length + t]) {
                            c = n.length - t;
                            break;
                          }
                        }
                        void 0 === c && (e = []);
                      }
                      return (
                        e.length &&
                          r(c) &&
                          ((d = i.length + c * l),
                          p ? (s(e, i), o(i, e)) : (s(i, e), o(e, i))),
                        [e, i]
                      );
                    }
                    fillSetter() {
                      a.prototype.strokeSetter.apply(this, arguments);
                    }
                    strokeSetter() {
                      this.elem.attr(
                        this.prop,
                        s(this.start).tweenTo(s(this.end), this.pos),
                        void 0,
                        !0
                      );
                    }
                  }
                  return (a.timers = []), a;
                }
              ),
              e(
                i,
                "Core/Animation/AnimationUtilities.js",
                [i["Core/Animation/Fx.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  function i(t) {
                    return h(t)
                      ? l({ duration: 500, defer: 0 }, t)
                      : { duration: t ? 500 : 0, defer: 0 };
                  }
                  function s(e, i) {
                    let s = t.timers.length;
                    for (; s--; )
                      t.timers[s].elem !== e ||
                        (i && i !== t.timers[s].prop) ||
                        (t.timers[s].stopped = !0);
                  }
                  const {
                    defined: o,
                    getStyle: r,
                    isArray: n,
                    isNumber: a,
                    isObject: h,
                    merge: l,
                    objectEach: c,
                    pick: d,
                  } = e;
                  return {
                    animate: function (e, i, o) {
                      let d,
                        p,
                        u,
                        g,
                        f = "";
                      h(o) ||
                        ((g = arguments),
                        (o = { duration: g[2], easing: g[3], complete: g[4] })),
                        a(o.duration) || (o.duration = 400),
                        (o.easing =
                          "function" == typeof o.easing
                            ? o.easing
                            : Math[o.easing] || Math.easeInOutSine),
                        (o.curAnim = l(i)),
                        c(i, function (a, h) {
                          s(e, h),
                            (u = new t(e, o, h)),
                            (p = void 0),
                            "d" === h && n(i.d)
                              ? ((u.paths = u.initPath(e, e.pathArray, i.d)),
                                (u.toD = i.d),
                                (d = 0),
                                (p = 1))
                              : e.attr
                              ? (d = e.attr(h))
                              : ((d = parseFloat(r(e, h)) || 0),
                                "opacity" !== h && (f = "px")),
                            p || (p = a),
                            "string" == typeof p &&
                              p.match("px") &&
                              (p = p.replace(/px/g, "")),
                            u.run(d, p, f);
                        });
                    },
                    animObject: i,
                    getDeferredAnimation: function (t, e, s) {
                      const r = i(e);
                      let n = 0,
                        a = 0;
                      return (
                        (s ? [s] : t.series).forEach((t) => {
                          (t = i(t.options.animation)),
                            (n =
                              e && o(e.defer)
                                ? r.defer
                                : Math.max(n, t.duration + t.defer)),
                            (a = Math.min(r.duration, t.duration));
                        }),
                        t.renderer.forExport && (n = 0),
                        { defer: Math.max(0, n - a), duration: Math.min(n, a) }
                      );
                    },
                    setAnimation: function (t, e) {
                      e.renderer.globalAnimation = d(
                        t,
                        e.options.chart.animation,
                        !0
                      );
                    },
                    stop: s,
                  };
                }
              ),
              e(
                i,
                "Core/Renderer/HTML/AST.js",
                [i["Core/Globals.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  const { SVG_NS: i, win: s } = t,
                    {
                      attr: o,
                      createElement: r,
                      css: n,
                      error: a,
                      isFunction: h,
                      isString: l,
                      objectEach: c,
                      splat: d,
                    } = e;
                  ({ trustedTypes: e } = s);
                  const p =
                    e &&
                    h(e.createPolicy) &&
                    e.createPolicy("highcharts", { createHTML: (t) => t });
                  e = p ? p.createHTML("") : "";
                  try {
                    var u = !!new DOMParser().parseFromString(e, "text/html");
                  } catch (t) {
                    u = !1;
                  }
                  const g = u;
                  class f {
                    static filterUserAttributes(t) {
                      return (
                        c(t, (e, i) => {
                          let s = !0;
                          -1 === f.allowedAttributes.indexOf(i) && (s = !1),
                            -1 !==
                              [
                                "background",
                                "dynsrc",
                                "href",
                                "lowsrc",
                                "src",
                              ].indexOf(i) &&
                              (s =
                                l(e) &&
                                f.allowedReferences.some(
                                  (t) => 0 === e.indexOf(t)
                                )),
                            s ||
                              (a(33, !1, void 0, {
                                "Invalid attribute in config": `${i}`,
                              }),
                              delete t[i]),
                            l(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
                        }),
                        t
                      );
                    }
                    static parseStyle(t) {
                      return t.split(";").reduce((t, e) => {
                        const i = (e = e
                          .split(":")
                          .map((t) => t.trim())).shift();
                        return (
                          i &&
                            e.length &&
                            (t[
                              i.replace(/-([a-z])/g, (t) => t[1].toUpperCase())
                            ] = e.join(":")),
                          t
                        );
                      }, {});
                    }
                    static setElementHTML(t, e) {
                      (t.innerHTML = f.emptyHTML), e && new f(e).addToDOM(t);
                    }
                    constructor(t) {
                      this.nodes =
                        "string" == typeof t ? this.parseMarkup(t) : t;
                    }
                    addToDOM(e) {
                      return (function e(s, r) {
                        let h;
                        return (
                          d(s).forEach(function (s) {
                            var l = s.tagName;
                            const d = s.textContent
                                ? t.doc.createTextNode(s.textContent)
                                : void 0,
                              p = f.bypassHTMLFiltering;
                            let u;
                            if (l)
                              if ("#text" === l) u = d;
                              else if (-1 !== f.allowedTags.indexOf(l) || p) {
                                l = t.doc.createElementNS(
                                  "svg" === l ? i : r.namespaceURI || i,
                                  l
                                );
                                const a = s.attributes || {};
                                c(s, function (t, e) {
                                  "tagName" !== e &&
                                    "attributes" !== e &&
                                    "children" !== e &&
                                    "style" !== e &&
                                    "textContent" !== e &&
                                    (a[e] = t);
                                }),
                                  o(l, p ? a : f.filterUserAttributes(a)),
                                  s.style && n(l, s.style),
                                  d && l.appendChild(d),
                                  e(s.children || [], l),
                                  (u = l);
                              } else
                                a(33, !1, void 0, {
                                  "Invalid tagName in config": l,
                                });
                            u && r.appendChild(u), (h = u);
                          }),
                          h
                        );
                      })(this.nodes, e);
                    }
                    parseMarkup(t) {
                      const e = [];
                      if (
                        ((t = t
                          .trim()
                          .replace(/ style=(["'])/g, " data-style=$1")),
                        g)
                      )
                        t = new DOMParser().parseFromString(
                          p ? p.createHTML(t) : t,
                          "text/html"
                        );
                      else {
                        const e = r("div");
                        (e.innerHTML = t), (t = { body: e });
                      }
                      const i = (t, e) => {
                        var s = t.nodeName.toLowerCase();
                        const o = { tagName: s };
                        if (
                          ("#text" === s &&
                            (o.textContent = t.textContent || ""),
                          (s = t.attributes))
                        ) {
                          const t = {};
                          [].forEach.call(s, (e) => {
                            "data-style" === e.name
                              ? (o.style = f.parseStyle(e.value))
                              : (t[e.name] = e.value);
                          }),
                            (o.attributes = t);
                        }
                        if (t.childNodes.length) {
                          const e = [];
                          [].forEach.call(t.childNodes, (t) => {
                            i(t, e);
                          }),
                            e.length && (o.children = e);
                        }
                        e.push(o);
                      };
                      return (
                        [].forEach.call(t.body.childNodes, (t) => i(t, e)), e
                      );
                    }
                  }
                  return (
                    (f.allowedAttributes =
                      "alt aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill flood-color flood-opacity height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(
                        " "
                      )),
                    (f.allowedReferences =
                      "https:// http:// mailto: / ../ ./ #".split(" ")),
                    (f.allowedTags =
                      "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feDropShadow feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(
                        " "
                      )),
                    (f.emptyHTML = e),
                    (f.bypassHTMLFiltering = !1),
                    f
                  );
                }
              ),
              e(
                i,
                "Core/Templating.js",
                [i["Core/Defaults.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  function i(t = "", e, n) {
                    const h = /\{([a-zA-Z0-9:\.,;\-\/<>%_@"'= #\(\)]+)\}/g,
                      l = /\(([a-zA-Z0-9:\.,;\-\/<>%_@"'= ]+)\)/g,
                      c = [],
                      p = /f$/,
                      g = /\.([0-9])/,
                      f = o.lang,
                      m = (n && n.time) || r,
                      x = (n && n.numberFormatter) || s,
                      y = (t = "") => {
                        let i;
                        return (
                          "true" === t ||
                          ("false" !== t &&
                            ((i = Number(t)).toString() === t ? i : a(t, e)))
                        );
                      };
                    let b,
                      v,
                      S,
                      k = 0;
                    for (; null !== (b = h.exec(t)); ) {
                      const i = l.exec(b[1]);
                      i && ((b = i), (S = !0)),
                        (v && v.isBlock) ||
                          (v = {
                            ctx: e,
                            expression: b[1],
                            find: b[0],
                            isBlock: "#" === b[1].charAt(0),
                            start: b.index,
                            startInner: b.index + b[0].length,
                            length: b[0].length,
                          });
                      var M = b[1].split(" ")[0].replace("#", "");
                      if (
                        (u[M] &&
                          (v.isBlock && M === v.fn && k++, v.fn || (v.fn = M)),
                        (M = "else" === b[1]),
                        v.isBlock && v.fn && (b[1] === `/${v.fn}` || M))
                      )
                        if (k) M || k--;
                        else {
                          var C = v.startInner;
                          (C = t.substr(C, b.index - C)),
                            void 0 === v.body
                              ? ((v.body = C),
                                (v.startInner = b.index + b[0].length))
                              : (v.elseBody = C),
                            (v.find += C + b[0]),
                            M || (c.push(v), (v = void 0));
                        }
                      else v.isBlock || c.push(v);
                      if (i && (null == v || !v.isBlock)) break;
                    }
                    return (
                      c.forEach((s) => {
                        const {
                          body: o,
                          elseBody: r,
                          expression: n,
                          fn: a,
                        } = s;
                        var h;
                        if (a) {
                          var l = [s],
                            c = n.split(" ");
                          for (h = u[a].length; h--; ) l.unshift(y(c[h + 1]));
                          (h = u[a].apply(e, l)),
                            s.isBlock &&
                              "boolean" == typeof h &&
                              (h = i(h ? o : r, e));
                        } else
                          (l = n.split(":")),
                            (h = y(l.shift() || "")),
                            l.length &&
                              "number" == typeof h &&
                              ((l = l.join(":")),
                              p.test(l)
                                ? ((c = parseInt(
                                    (l.match(g) || ["", "-1"])[1],
                                    10
                                  )),
                                  null !== h &&
                                    (h = x(
                                      h,
                                      c,
                                      f.decimalPoint,
                                      -1 < l.indexOf(",") ? f.thousandsSep : ""
                                    )))
                                : (h = m.dateFormat(l, h)));
                        t = t.replace(s.find, d(h, ""));
                      }),
                      S ? i(t, e, n) : t
                    );
                  }
                  function s(t, e, i, s) {
                    (t = +t || 0), (e = +e);
                    const r = o.lang;
                    var n = (t.toString().split(".")[1] || "").split("e")[0]
                      .length;
                    const a = t.toString().split("e"),
                      h = e;
                    if (-1 === e) e = Math.min(n, 20);
                    else if (l(e)) {
                      if (e && a[1] && 0 > a[1]) {
                        var c = e + +a[1];
                        0 <= c
                          ? ((a[0] = (+a[0]).toExponential(c).split("e")[0]),
                            (e = c))
                          : ((a[0] = a[0].split(".")[0] || 0),
                            (t =
                              20 > e
                                ? (a[0] * Math.pow(10, a[1])).toFixed(e)
                                : 0),
                            (a[1] = 0));
                      }
                    } else e = 2;
                    c = (
                      Math.abs(a[1] ? a[0] : t) +
                      Math.pow(10, -Math.max(e, n) - 1)
                    ).toFixed(e);
                    const u = 3 < (n = String(p(c))).length ? n.length % 3 : 0;
                    return (
                      (i = d(i, r.decimalPoint)),
                      (s = d(s, r.thousandsSep)),
                      (t = (0 > t ? "-" : "") + (u ? n.substr(0, u) + s : "")),
                      (t =
                        0 > +a[1] && !h
                          ? "0"
                          : t +
                            n.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + s)),
                      e && (t += i + c.slice(-e)),
                      a[1] && 0 != +t && (t += "e" + a[1]),
                      t
                    );
                  }
                  const { defaultOptions: o, defaultTime: r } = t,
                    {
                      extend: n,
                      getNestedProperty: a,
                      isArray: h,
                      isNumber: l,
                      isObject: c,
                      pick: d,
                      pInt: p,
                    } = e,
                    u = {
                      add: (t, e) => t + e,
                      divide: (t, e) => (0 !== e ? t / e : ""),
                      eq: (t, e) => t == e,
                      each: function (t) {
                        const e = arguments[arguments.length - 1];
                        return (
                          !!h(t) &&
                          t
                            .map((s, o) =>
                              i(
                                e.body,
                                n(c(s) ? s : { "@this": s }, {
                                  "@index": o,
                                  "@first": 0 === o,
                                  "@last": o === t.length - 1,
                                })
                              )
                            )
                            .join("")
                        );
                      },
                      ge: (t, e) => t >= e,
                      gt: (t, e) => t > e,
                      if: (t) => !!t,
                      le: (t, e) => t <= e,
                      lt: (t, e) => t < e,
                      multiply: (t, e) => t * e,
                      ne: (t, e) => t != e,
                      subtract: (t, e) => t - e,
                      unless: (t) => !t,
                    };
                  return {
                    dateFormat: function (t, e, i) {
                      return r.dateFormat(t, e, i);
                    },
                    format: i,
                    helpers: u,
                    numberFormat: s,
                  };
                }
              ),
              e(
                i,
                "Core/Renderer/RendererUtilities.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const { clamp: e, pick: i, stableSort: s } = t;
                  var o;
                  return (
                    (function (t) {
                      t.distribute = function t(o, r, n) {
                        const a = o;
                        var h = a.reducedLen || r,
                          l = (t, e) => (e.rank || 0) - (t.rank || 0);
                        const c = (t, e) => t.target - e.target;
                        let d,
                          p = !0,
                          u = [],
                          g = 0;
                        for (d = o.length; d--; ) g += o[d].size;
                        if (g > h) {
                          for (s(o, l), g = d = 0; g <= h; )
                            (g += o[d].size), d++;
                          u = o.splice(d - 1, o.length);
                        }
                        for (
                          s(o, c),
                            o = o.map((t) => ({
                              size: t.size,
                              targets: [t.target],
                              align: i(t.align, 0.5),
                            }));
                          p;

                        ) {
                          for (d = o.length; d--; )
                            (h = o[d]),
                              (l =
                                (Math.min.apply(0, h.targets) +
                                  Math.max.apply(0, h.targets)) /
                                2),
                              (h.pos = e(l - h.size * h.align, 0, r - h.size));
                          for (d = o.length, p = !1; d--; )
                            0 < d &&
                              o[d - 1].pos + o[d - 1].size > o[d].pos &&
                              ((o[d - 1].size += o[d].size),
                              (o[d - 1].targets = o[d - 1].targets.concat(
                                o[d].targets
                              )),
                              (o[d - 1].align = 0.5),
                              o[d - 1].pos + o[d - 1].size > r &&
                                (o[d - 1].pos = r - o[d - 1].size),
                              o.splice(d, 1),
                              (p = !0));
                        }
                        return (
                          a.push.apply(a, u),
                          (d = 0),
                          o.some((e) => {
                            let i = 0;
                            return (e.targets || []).some(
                              () => (
                                (a[d].pos = e.pos + i),
                                void 0 !== n &&
                                Math.abs(a[d].pos - a[d].target) > n
                                  ? (a
                                      .slice(0, d + 1)
                                      .forEach((t) => delete t.pos),
                                    (a.reducedLen =
                                      (a.reducedLen || r) - 0.1 * r),
                                    a.reducedLen > 0.1 * r && t(a, r, n),
                                    !0)
                                  : ((i += a[d].size), d++, !1)
                              )
                            );
                          }),
                          s(a, c),
                          a
                        );
                      };
                    })(o || (o = {})),
                    o
                  );
                }
              ),
              e(
                i,
                "Core/Renderer/SVG/SVGElement.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Color/Color.js"],
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s) {
                  const { animate: o, animObject: r, stop: n } = t,
                    { deg2rad: a, doc: h, svg: l, SVG_NS: c, win: d } = i,
                    {
                      addEvent: p,
                      attr: u,
                      createElement: g,
                      css: f,
                      defined: m,
                      erase: x,
                      extend: y,
                      fireEvent: b,
                      isArray: v,
                      isFunction: S,
                      isObject: k,
                      isString: M,
                      merge: C,
                      objectEach: w,
                      pick: T,
                      pInt: A,
                      syncTimeout: P,
                      uniqueKey: L,
                    } = s;
                  class O {
                    constructor() {
                      (this.element = void 0),
                        (this.onEvents = {}),
                        (this.opacity = 1),
                        (this.renderer = void 0),
                        (this.SVG_NS = c);
                    }
                    _defaultGetter(t) {
                      return (
                        (t = T(
                          this[t + "Value"],
                          this[t],
                          this.element ? this.element.getAttribute(t) : null,
                          0
                        )),
                        /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)),
                        t
                      );
                    }
                    _defaultSetter(t, e, i) {
                      i.setAttribute(e, t);
                    }
                    add(t) {
                      const e = this.renderer,
                        i = this.element;
                      let s;
                      return (
                        t && (this.parentGroup = t),
                        void 0 !== this.textStr &&
                          "text" === this.element.nodeName &&
                          e.buildText(this),
                        (this.added = !0),
                        (!t || t.handleZ || this.zIndex) &&
                          (s = this.zIndexSetter()),
                        s || (t ? t.element : e.box).appendChild(i),
                        this.onAdd && this.onAdd(),
                        this
                      );
                    }
                    addClass(t, e) {
                      const i = e ? "" : this.attr("class") || "";
                      return (
                        (t = (t || "")
                          .split(/ /g)
                          .reduce(
                            function (t, e) {
                              return -1 === i.indexOf(e) && t.push(e), t;
                            },
                            i ? [i] : []
                          )
                          .join(" ")),
                        t !== i && this.attr("class", t),
                        this
                      );
                    }
                    afterSetters() {
                      this.doTransform &&
                        (this.updateTransform(), (this.doTransform = !1));
                    }
                    align(t, e, i) {
                      const s = {};
                      var o,
                        r = this.renderer,
                        n = r.alignedObjects;
                      let a, h;
                      t
                        ? ((this.alignOptions = t),
                          (this.alignByTranslate = e),
                          (!i || M(i)) &&
                            ((this.alignTo = o = i || "renderer"),
                            x(n, this),
                            n.push(this),
                            (i = void 0)))
                        : ((t = this.alignOptions),
                          (e = this.alignByTranslate),
                          (o = this.alignTo)),
                        (i = T(
                          i,
                          r[o],
                          "scrollablePlotBox" === o ? r.plotBox : void 0,
                          r
                        )),
                        (o = t.align);
                      const l = t.verticalAlign;
                      return (
                        (r = (i.x || 0) + (t.x || 0)),
                        (n = (i.y || 0) + (t.y || 0)),
                        "right" === o ? (a = 1) : "center" === o && (a = 2),
                        a && (r += (i.width - (t.width || 0)) / a),
                        (s[e ? "translateX" : "x"] = Math.round(r)),
                        "bottom" === l ? (h = 1) : "middle" === l && (h = 2),
                        h && (n += (i.height - (t.height || 0)) / h),
                        (s[e ? "translateY" : "y"] = Math.round(n)),
                        this[this.placed ? "animate" : "attr"](s),
                        (this.placed = !0),
                        (this.alignAttr = s),
                        this
                      );
                    }
                    alignSetter(t) {
                      const e = {
                        left: "start",
                        center: "middle",
                        right: "end",
                      };
                      e[t] &&
                        ((this.alignValue = t),
                        this.element.setAttribute("text-anchor", e[t]));
                    }
                    animate(t, e, i) {
                      const s = r(T(e, this.renderer.globalAnimation, !0));
                      return (
                        (e = s.defer),
                        h.hidden && (s.duration = 0),
                        0 !== s.duration
                          ? (i && (s.complete = i),
                            P(() => {
                              this.element && o(this, t, s);
                            }, e))
                          : (this.attr(t, void 0, i || s.complete),
                            w(
                              t,
                              function (t, e) {
                                s.step &&
                                  s.step.call(this, t, {
                                    prop: e,
                                    pos: 1,
                                    elem: this,
                                  });
                              },
                              this
                            )),
                        this
                      );
                    }
                    applyTextOutline(t) {
                      const e = this.element;
                      -1 !== t.indexOf("contrast") &&
                        (t = t.replace(
                          /contrast/g,
                          this.renderer.getContrast(e.style.fill)
                        ));
                      var s = t.split(" ");
                      if (
                        ((t = s[s.length - 1]),
                        (s = s[0]) && "none" !== s && i.svg)
                      ) {
                        (this.fakeTS = !0),
                          (s = s.replace(
                            /(^[\d\.]+)(.*?)$/g,
                            function (t, e, i) {
                              return 2 * Number(e) + i;
                            }
                          )),
                          this.removeTextOutline();
                        const i = h.createElementNS(c, "tspan");
                        u(i, {
                          class: "highcharts-text-outline",
                          fill: t,
                          stroke: t,
                          "stroke-width": s,
                          "stroke-linejoin": "round",
                        }),
                          (t = e.querySelector("textPath") || e),
                          [].forEach.call(t.childNodes, (t) => {
                            const e = t.cloneNode(!0);
                            e.removeAttribute &&
                              [
                                "fill",
                                "stroke",
                                "stroke-width",
                                "stroke",
                              ].forEach((t) => e.removeAttribute(t)),
                              i.appendChild(e);
                          });
                        let o = 0;
                        [].forEach.call(
                          t.querySelectorAll("text tspan"),
                          (t) => {
                            o += Number(t.getAttribute("dy"));
                          }
                        ),
                          ((s = h.createElementNS(c, "tspan")).textContent =
                            "​"),
                          u(s, { x: Number(e.getAttribute("x")), dy: -o }),
                          i.appendChild(s),
                          t.insertBefore(i, t.firstChild);
                      }
                    }
                    attr(t, e, i, s) {
                      const o = this.element,
                        r = O.symbolCustomAttribs;
                      let a,
                        h,
                        l,
                        c,
                        d = this;
                      return (
                        "string" == typeof t &&
                          void 0 !== e &&
                          ((a = t), ((t = {})[a] = e)),
                        "string" == typeof t
                          ? (d = (
                              this[t + "Getter"] || this._defaultGetter
                            ).call(this, t, o))
                          : (w(
                              t,
                              function (e, i) {
                                (l = !1),
                                  s || n(this, i),
                                  this.symbolName &&
                                    -1 !== r.indexOf(i) &&
                                    (h || (this.symbolAttr(t), (h = !0)),
                                    (l = !0)),
                                  !this.rotation ||
                                    ("x" !== i && "y" !== i) ||
                                    (this.doTransform = !0),
                                  l ||
                                    ((c =
                                      this[i + "Setter"] ||
                                      this._defaultSetter),
                                    c.call(this, e, i, o));
                              },
                              this
                            ),
                            this.afterSetters()),
                        i && i.call(this),
                        d
                      );
                    }
                    clip(t) {
                      return this.attr(
                        "clip-path",
                        t
                          ? "url(" + this.renderer.url + "#" + t.id + ")"
                          : "none"
                      );
                    }
                    crisp(t, e) {
                      e = e || t.strokeWidth || 0;
                      const i = (Math.round(e) % 2) / 2;
                      return (
                        (t.x = Math.floor(t.x || this.x || 0) + i),
                        (t.y = Math.floor(t.y || this.y || 0) + i),
                        (t.width = Math.floor(
                          (t.width || this.width || 0) - 2 * i
                        )),
                        (t.height = Math.floor(
                          (t.height || this.height || 0) - 2 * i
                        )),
                        m(t.strokeWidth) && (t.strokeWidth = e),
                        t
                      );
                    }
                    complexColor(t, i, s) {
                      const o = this.renderer;
                      let r,
                        n,
                        a,
                        h,
                        l,
                        c,
                        d,
                        p,
                        u,
                        g,
                        f,
                        x = [];
                      b(
                        this.renderer,
                        "complexColor",
                        { args: arguments },
                        function () {
                          if (
                            (t.radialGradient
                              ? (n = "radialGradient")
                              : t.linearGradient && (n = "linearGradient"),
                            n)
                          ) {
                            if (
                              ((a = t[n]),
                              (l = o.gradients),
                              (c = t.stops),
                              (u = s.radialReference),
                              v(a) &&
                                (t[n] = a =
                                  {
                                    x1: a[0],
                                    y1: a[1],
                                    x2: a[2],
                                    y2: a[3],
                                    gradientUnits: "userSpaceOnUse",
                                  }),
                              "radialGradient" === n &&
                                u &&
                                !m(a.gradientUnits) &&
                                ((h = a),
                                (a = C(a, o.getRadialAttr(u, h), {
                                  gradientUnits: "userSpaceOnUse",
                                }))),
                              w(a, function (t, e) {
                                "id" !== e && x.push(e, t);
                              }),
                              w(c, function (t) {
                                x.push(t);
                              }),
                              (x = x.join(",")),
                              l[x])
                            )
                              g = l[x].attr("id");
                            else {
                              a.id = g = L();
                              const t = (l[x] = o
                                .createElement(n)
                                .attr(a)
                                .add(o.defs));
                              (t.radAttr = h),
                                (t.stops = []),
                                c.forEach(function (i) {
                                  0 === i[1].indexOf("rgba")
                                    ? ((r = e.parse(i[1])),
                                      (d = r.get("rgb")),
                                      (p = r.get("a")))
                                    : ((d = i[1]), (p = 1)),
                                    (i = o
                                      .createElement("stop")
                                      .attr({
                                        offset: i[0],
                                        "stop-color": d,
                                        "stop-opacity": p,
                                      })
                                      .add(t)),
                                    t.stops.push(i);
                                });
                            }
                            (f = "url(" + o.url + "#" + g + ")"),
                              s.setAttribute(i, f),
                              (s.gradient = x),
                              (t.toString = function () {
                                return f;
                              });
                          }
                        }
                      );
                    }
                    css(t) {
                      const e = this.styles,
                        i = {},
                        s = this.element;
                      let o,
                        r = !e;
                      if (
                        (e &&
                          w(t, function (t, s) {
                            e && e[s] !== t && ((i[s] = t), (r = !0));
                          }),
                        r)
                      ) {
                        e && (t = y(e, i)),
                          null === t.width || "auto" === t.width
                            ? delete this.textWidth
                            : "text" === s.nodeName.toLowerCase() &&
                              t.width &&
                              (o = this.textWidth = A(t.width)),
                          (this.styles = t),
                          o && !l && this.renderer.forExport && delete t.width;
                        const r = C(t);
                        s.namespaceURI === this.SVG_NS &&
                          (["textOutline", "textOverflow", "width"].forEach(
                            (t) => r && delete r[t]
                          ),
                          r.color && (r.fill = r.color)),
                          f(s, r);
                      }
                      return (
                        this.added &&
                          ("text" === this.element.nodeName &&
                            this.renderer.buildText(this),
                          t.textOutline &&
                            this.applyTextOutline(t.textOutline)),
                        this
                      );
                    }
                    dashstyleSetter(t) {
                      let e = this["stroke-width"];
                      if (
                        ("inherit" === e && (e = 1), (t = t && t.toLowerCase()))
                      ) {
                        const i = t
                          .replace("shortdashdotdot", "3,1,1,1,1,1,")
                          .replace("shortdashdot", "3,1,1,1")
                          .replace("shortdot", "1,1,")
                          .replace("shortdash", "3,1,")
                          .replace("longdash", "8,3,")
                          .replace(/dot/g, "1,3,")
                          .replace("dash", "4,3,")
                          .replace(/,$/, "")
                          .split(",");
                        for (t = i.length; t--; )
                          i[t] = "" + A(i[t]) * T(e, NaN);
                        (t = i.join(",").replace(/NaN/g, "none")),
                          this.element.setAttribute("stroke-dasharray", t);
                      }
                    }
                    destroy() {
                      const t = this;
                      var e = t.element || {};
                      const i = t.renderer;
                      var s = e.ownerSVGElement;
                      let o =
                        ("SPAN" === e.nodeName && t.parentGroup) || void 0;
                      if (
                        ((e.onclick =
                          e.onmouseout =
                          e.onmouseover =
                          e.onmousemove =
                          e.point =
                            null),
                        n(t),
                        t.clipPath && s)
                      ) {
                        const e = t.clipPath;
                        [].forEach.call(
                          s.querySelectorAll("[clip-path],[CLIP-PATH]"),
                          function (t) {
                            -1 <
                              t
                                .getAttribute("clip-path")
                                .indexOf(e.element.id) &&
                              t.removeAttribute("clip-path");
                          }
                        ),
                          (t.clipPath = e.destroy());
                      }
                      if (t.stops) {
                        for (s = 0; s < t.stops.length; s++)
                          t.stops[s].destroy();
                        (t.stops.length = 0), (t.stops = void 0);
                      }
                      for (
                        t.safeRemoveChild(e);
                        o && o.div && 0 === o.div.childNodes.length;

                      )
                        (e = o.parentGroup),
                          t.safeRemoveChild(o.div),
                          delete o.div,
                          (o = e);
                      t.alignTo && x(i.alignedObjects, t),
                        w(t, function (e, i) {
                          t[i] &&
                            t[i].parentGroup === t &&
                            t[i].destroy &&
                            t[i].destroy(),
                            delete t[i];
                        });
                    }
                    dSetter(t, e, i) {
                      v(t) &&
                        ("string" == typeof t[0] &&
                          (t = this.renderer.pathToSegments(t)),
                        (this.pathArray = t),
                        (t = t.reduce(
                          (t, e, i) =>
                            e && e.join
                              ? (i ? t + " " : "") + e.join(" ")
                              : (e || "").toString(),
                          ""
                        ))),
                        /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
                        this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
                    }
                    fadeOut(t) {
                      const e = this;
                      e.animate(
                        { opacity: 0 },
                        {
                          duration: T(t, 150),
                          complete: function () {
                            e.hide();
                          },
                        }
                      );
                    }
                    fillSetter(t, e, i) {
                      "string" == typeof t
                        ? i.setAttribute(e, t)
                        : t && this.complexColor(t, e, i);
                    }
                    getBBox(t, e) {
                      const {
                          alignValue: i,
                          element: s,
                          renderer: o,
                          styles: r,
                          textStr: n,
                        } = this,
                        { cache: h, cacheKeys: l } = o;
                      var c = s.namespaceURI === this.SVG_NS;
                      e = T(e, this.rotation, 0);
                      var d = o.styledMode
                        ? s && O.prototype.getStyle.call(s, "font-size")
                        : r && r.fontSize;
                      let p, u;
                      if (
                        (m(n) &&
                          ((u = n.toString()),
                          -1 === u.indexOf("<") &&
                            (u = u.replace(/[0-9]/g, "0")),
                          (u += [
                            "",
                            o.rootFontSize,
                            d,
                            e,
                            this.textWidth,
                            i,
                            r && r.textOverflow,
                            r && r.fontWeight,
                          ].join())),
                        u && !t && (p = h[u]),
                        !p)
                      ) {
                        if (c || o.forExport) {
                          try {
                            var g =
                              this.fakeTS &&
                              function (t) {
                                const e = s.querySelector(
                                  ".highcharts-text-outline"
                                );
                                e && f(e, { display: t });
                              };
                            S(g) && g("none"),
                              (p = s.getBBox
                                ? y({}, s.getBBox())
                                : {
                                    width: s.offsetWidth,
                                    height: s.offsetHeight,
                                    x: 0,
                                    y: 0,
                                  }),
                              S(g) && g("");
                          } catch (t) {}
                          (!p || 0 > p.width) &&
                            (p = { x: 0, y: 0, width: 0, height: 0 });
                        } else p = this.htmlGetBBox();
                        if (
                          ((g = p.width),
                          (t = p.height),
                          c &&
                            (p.height = t =
                              { "11px,17": 14, "13px,20": 16 }[
                                `${d || ""},${Math.round(t)}`
                              ] || t),
                          e)
                        ) {
                          (c = Number(s.getAttribute("y") || 0) - p.y),
                            (d = { right: 1, center: 0.5 }[i || 0] || 0);
                          var x = e * a,
                            b = (e - 90) * a,
                            v = g * Math.cos(x);
                          e = g * Math.sin(x);
                          var k = Math.cos(b);
                          (x = Math.sin(b)),
                            (v =
                              (k =
                                (b = (g = p.x + d * (g - v) + c * k) + v) -
                                t * k) - v),
                            (e =
                              (t =
                                (d = (c = p.y + c - d * e + c * x) + e) -
                                t * x) - e),
                            (p.x = Math.min(g, b, k, v)),
                            (p.y = Math.min(c, d, t, e)),
                            (p.width = Math.max(g, b, k, v) - p.x),
                            (p.height = Math.max(c, d, t, e) - p.y);
                        }
                      }
                      if (u && ("" === n || 0 < p.height)) {
                        for (; 250 < l.length; ) delete h[l.shift()];
                        h[u] || l.push(u), (h[u] = p);
                      }
                      return p;
                    }
                    getStyle(t) {
                      return d
                        .getComputedStyle(this.element || this, "")
                        .getPropertyValue(t);
                    }
                    hasClass(t) {
                      return (
                        -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                      );
                    }
                    hide() {
                      return this.attr({ visibility: "hidden" });
                    }
                    htmlGetBBox() {
                      return { height: 0, width: 0, x: 0, y: 0 };
                    }
                    init(t, e) {
                      (this.element =
                        "span" === e
                          ? g(e)
                          : h.createElementNS(this.SVG_NS, e)),
                        (this.renderer = t),
                        b(this, "afterInit");
                    }
                    on(t, e) {
                      const { onEvents: i } = this;
                      return (
                        i[t] && i[t](), (i[t] = p(this.element, t, e)), this
                      );
                    }
                    opacitySetter(t, e, i) {
                      (this.opacity = t = Number(Number(t).toFixed(3))),
                        i.setAttribute(e, t);
                    }
                    removeClass(t) {
                      return this.attr(
                        "class",
                        ("" + this.attr("class"))
                          .replace(M(t) ? new RegExp(`(^| )${t}( |$)`) : t, " ")
                          .replace(/ +/g, " ")
                          .trim()
                      );
                    }
                    removeTextOutline() {
                      const t = this.element.querySelector(
                        "tspan.highcharts-text-outline"
                      );
                      t && this.safeRemoveChild(t);
                    }
                    safeRemoveChild(t) {
                      const e = t.parentNode;
                      e && e.removeChild(t);
                    }
                    setRadialReference(t) {
                      const e =
                        this.element.gradient &&
                        this.renderer.gradients[this.element.gradient];
                      return (
                        (this.element.radialReference = t),
                        e &&
                          e.radAttr &&
                          e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
                        this
                      );
                    }
                    setTextPath(t, e) {
                      e = C(
                        !0,
                        {
                          enabled: !0,
                          attributes: {
                            dy: -5,
                            startOffset: "50%",
                            textAnchor: "middle",
                          },
                        },
                        e
                      );
                      const i = this.renderer.url,
                        s = this.text || this,
                        o = s.textPath,
                        { attributes: r, enabled: n } = e;
                      return (
                        (t = t || (o && o.path)),
                        o && o.undo(),
                        t && n
                          ? ((e = p(s, "afterModifyTree", (e) => {
                              if (t && n) {
                                let n = t.attr("id");
                                n || t.attr("id", (n = L()));
                                var o = { x: 0, y: 0 };
                                m(r.dx) && ((o.dx = r.dx), delete r.dx),
                                  m(r.dy) && ((o.dy = r.dy), delete r.dy),
                                  s.attr(o),
                                  this.attr({ transform: "" }),
                                  this.box && (this.box = this.box.destroy()),
                                  (o = e.nodes.slice(0)),
                                  (e.nodes.length = 0),
                                  (e.nodes[0] = {
                                    tagName: "textPath",
                                    attributes: y(r, {
                                      "text-anchor": r.textAnchor,
                                      href: `${i}#${n}`,
                                    }),
                                    children: o,
                                  });
                              }
                            })),
                            (s.textPath = { path: t, undo: e }))
                          : (s.attr({ dx: 0, dy: 0 }), delete s.textPath),
                        this.added &&
                          ((s.textCache = ""), this.renderer.buildText(s)),
                        this
                      );
                    }
                    shadow(t) {
                      var e;
                      const { renderer: i } = this,
                        s = C(
                          90 ===
                            (null === (e = this.parentGroup) || void 0 === e
                              ? void 0
                              : e.rotation)
                            ? { offsetX: -1, offsetY: -1 }
                            : {},
                          k(t) ? t : {}
                        );
                      return (
                        (e = i.shadowDefinition(s)),
                        this.attr({ filter: t ? `url(${i.url}#${e})` : "none" })
                      );
                    }
                    show(t = !0) {
                      return this.attr({
                        visibility: t ? "inherit" : "visible",
                      });
                    }
                    "stroke-widthSetter"(t, e, i) {
                      (this[e] = t), i.setAttribute(e, t);
                    }
                    strokeWidth() {
                      if (!this.renderer.styledMode)
                        return this["stroke-width"] || 0;
                      const t = this.getStyle("stroke-width");
                      let e,
                        i = 0;
                      return (
                        t.indexOf("px") === t.length - 2
                          ? (i = A(t))
                          : "" !== t &&
                            ((e = h.createElementNS(c, "rect")),
                            u(e, { width: t, "stroke-width": 0 }),
                            this.element.parentNode.appendChild(e),
                            (i = e.getBBox().width),
                            e.parentNode.removeChild(e)),
                        i
                      );
                    }
                    symbolAttr(t) {
                      const e = this;
                      O.symbolCustomAttribs.forEach(function (i) {
                        e[i] = T(t[i], e[i]);
                      }),
                        e.attr({
                          d: e.renderer.symbols[e.symbolName](
                            e.x,
                            e.y,
                            e.width,
                            e.height,
                            e
                          ),
                        });
                    }
                    textSetter(t) {
                      t !== this.textStr &&
                        (delete this.textPxLength,
                        (this.textStr = t),
                        this.added && this.renderer.buildText(this));
                    }
                    titleSetter(t) {
                      const e = this.element,
                        i =
                          e.getElementsByTagName("title")[0] ||
                          h.createElementNS(this.SVG_NS, "title");
                      e.insertBefore
                        ? e.insertBefore(i, e.firstChild)
                        : e.appendChild(i),
                        (i.textContent = String(T(t, ""))
                          .replace(/<[^>]*>/g, "")
                          .replace(/&lt;/g, "<")
                          .replace(/&gt;/g, ">"));
                    }
                    toFront() {
                      const t = this.element;
                      return t.parentNode.appendChild(t), this;
                    }
                    translate(t, e) {
                      return this.attr({ translateX: t, translateY: e });
                    }
                    updateTransform() {
                      const {
                          element: t,
                          matrix: e,
                          rotation: i = 0,
                          scaleX: s,
                          scaleY: o,
                          translateX: r = 0,
                          translateY: n = 0,
                        } = this,
                        a = ["translate(" + r + "," + n + ")"];
                      m(e) && a.push("matrix(" + e.join(",") + ")"),
                        i &&
                          a.push(
                            "rotate(" +
                              i +
                              " " +
                              T(this.rotationOriginX, t.getAttribute("x"), 0) +
                              " " +
                              T(
                                this.rotationOriginY,
                                t.getAttribute("y") || 0
                              ) +
                              ")"
                          ),
                        (m(s) || m(o)) &&
                          a.push("scale(" + T(s, 1) + " " + T(o, 1) + ")"),
                        a.length &&
                          !(this.text || this).textPath &&
                          t.setAttribute("transform", a.join(" "));
                    }
                    visibilitySetter(t, e, i) {
                      "inherit" === t
                        ? i.removeAttribute(e)
                        : this[e] !== t && i.setAttribute(e, t),
                        (this[e] = t);
                    }
                    xGetter(t) {
                      return (
                        "circle" === this.element.nodeName &&
                          ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
                        this._defaultGetter(t)
                      );
                    }
                    zIndexSetter(t, e) {
                      var i = this.renderer,
                        s = this.parentGroup;
                      const o = (s || i).element || i.box,
                        r = this.element;
                      i = o === i.box;
                      let n,
                        a = !1;
                      var h = this.added;
                      let l;
                      if (
                        (m(t)
                          ? (r.setAttribute("data-z-index", t),
                            (t = +t),
                            this[e] === t && (h = !1))
                          : m(this[e]) && r.removeAttribute("data-z-index"),
                        (this[e] = t),
                        h)
                      ) {
                        for (
                          (t = this.zIndex) && s && (s.handleZ = !0),
                            l = (e = o.childNodes).length - 1;
                          0 <= l && !a;
                          l--
                        )
                          (h = (s = e[l]).getAttribute("data-z-index")),
                            (n = !m(h)),
                            s !== r &&
                              (0 > t && n && !i && !l
                                ? (o.insertBefore(r, e[l]), (a = !0))
                                : (A(h) <= t || (n && (!m(t) || 0 <= t))) &&
                                  (o.insertBefore(r, e[l + 1]), (a = !0)));
                        a || (o.insertBefore(r, e[i ? 3 : 0]), (a = !0));
                      }
                      return a;
                    }
                  }
                  return (
                    (O.symbolCustomAttribs =
                      "anchorX anchorY clockwise end height innerR r start width x y".split(
                        " "
                      )),
                    (O.prototype.strokeSetter = O.prototype.fillSetter),
                    (O.prototype.yGetter = O.prototype.xGetter),
                    (O.prototype.matrixSetter =
                      O.prototype.rotationOriginXSetter =
                      O.prototype.rotationOriginYSetter =
                      O.prototype.rotationSetter =
                      O.prototype.scaleXSetter =
                      O.prototype.scaleYSetter =
                      O.prototype.translateXSetter =
                      O.prototype.translateYSetter =
                      O.prototype.verticalAlignSetter =
                        function (t, e) {
                          (this[e] = t), (this.doTransform = !0);
                        }),
                    O
                  );
                }
              ),
              e(
                i,
                "Core/Renderer/RendererRegistry.js",
                [i["Core/Globals.js"]],
                function (t) {
                  var e;
                  return (
                    (function (e) {
                      let i;
                      (e.rendererTypes = {}),
                        (e.getRendererType = function (t = i) {
                          return e.rendererTypes[t] || e.rendererTypes[i];
                        }),
                        (e.registerRendererType = function (s, o, r) {
                          (e.rendererTypes[s] = o),
                            (i && !r) || ((i = s), (t.Renderer = o));
                        });
                    })(e || (e = {})),
                    e
                  );
                }
              ),
              e(
                i,
                "Core/Renderer/SVG/SVGLabel.js",
                [i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  const {
                    defined: i,
                    extend: s,
                    isNumber: o,
                    merge: r,
                    pick: n,
                    removeEvent: a,
                  } = e;
                  class h extends t {
                    constructor(t, e, i, s, o, r, n, a, l, c) {
                      let d;
                      super(),
                        (this.paddingRightSetter = this.paddingLeftSetter =
                          this.paddingSetter),
                        this.init(t, "g"),
                        (this.textStr = e),
                        (this.x = i),
                        (this.y = s),
                        (this.anchorX = r),
                        (this.anchorY = n),
                        (this.baseline = l),
                        (this.className = c),
                        this.addClass(
                          "button" === c
                            ? "highcharts-no-tooltip"
                            : "highcharts-label"
                        ),
                        c && this.addClass("highcharts-" + c),
                        (this.text = t
                          .text(void 0, 0, 0, a)
                          .attr({ zIndex: 1 })),
                        "string" == typeof o &&
                          ((d = /^url\((.*?)\)$/.test(o)) ||
                            this.renderer.symbols[o]) &&
                          (this.symbolKey = o),
                        (this.bBox = h.emptyBBox),
                        (this.padding = 3),
                        (this.baselineOffset = 0),
                        (this.needsBox = t.styledMode || d),
                        (this.deferredAttr = {}),
                        (this.alignFactor = 0);
                    }
                    alignSetter(t) {
                      (t = { left: 0, center: 0.5, right: 1 }[t]) !==
                        this.alignFactor &&
                        ((this.alignFactor = t),
                        this.bBox &&
                          o(this.xSetting) &&
                          this.attr({ x: this.xSetting }));
                    }
                    anchorXSetter(t, e) {
                      (this.anchorX = t),
                        this.boxAttr(
                          e,
                          Math.round(t) - this.getCrispAdjust() - this.xSetting
                        );
                    }
                    anchorYSetter(t, e) {
                      (this.anchorY = t), this.boxAttr(e, t - this.ySetting);
                    }
                    boxAttr(t, e) {
                      this.box
                        ? this.box.attr(t, e)
                        : (this.deferredAttr[t] = e);
                    }
                    css(e) {
                      if (e) {
                        const t = {};
                        (e = r(e)),
                          h.textProps.forEach((i) => {
                            void 0 !== e[i] && ((t[i] = e[i]), delete e[i]);
                          }),
                          this.text.css(t),
                          "fontSize" in t || "fontWeight" in t
                            ? this.updateTextPadding()
                            : ("width" in t || "textOverflow" in t) &&
                              this.updateBoxSize();
                      }
                      return t.prototype.css.call(this, e);
                    }
                    destroy() {
                      a(this.element, "mouseenter"),
                        a(this.element, "mouseleave"),
                        this.text && this.text.destroy(),
                        this.box && (this.box = this.box.destroy()),
                        t.prototype.destroy.call(this);
                    }
                    fillSetter(t, e) {
                      t && (this.needsBox = !0),
                        (this.fill = t),
                        this.boxAttr(e, t);
                    }
                    getBBox() {
                      this.textStr &&
                        0 === this.bBox.width &&
                        0 === this.bBox.height &&
                        this.updateBoxSize();
                      const t = this.padding,
                        e = n(this.paddingLeft, t);
                      return {
                        width: this.width,
                        height: this.height,
                        x: this.bBox.x - e,
                        y: this.bBox.y - t,
                      };
                    }
                    getCrispAdjust() {
                      return this.renderer.styledMode && this.box
                        ? (this.box.strokeWidth() % 2) / 2
                        : ((this["stroke-width"]
                            ? parseInt(this["stroke-width"], 10)
                            : 0) %
                            2) /
                            2;
                    }
                    heightSetter(t) {
                      this.heightSetting = t;
                    }
                    onAdd() {
                      this.text.add(this),
                        this.attr({
                          text: n(this.textStr, ""),
                          x: this.x || 0,
                          y: this.y || 0,
                        }),
                        this.box &&
                          i(this.anchorX) &&
                          this.attr({
                            anchorX: this.anchorX,
                            anchorY: this.anchorY,
                          });
                    }
                    paddingSetter(t, e) {
                      o(t)
                        ? t !== this[e] &&
                          ((this[e] = t), this.updateTextPadding())
                        : (this[e] = void 0);
                    }
                    rSetter(t, e) {
                      this.boxAttr(e, t);
                    }
                    strokeSetter(t, e) {
                      (this.stroke = t), this.boxAttr(e, t);
                    }
                    "stroke-widthSetter"(t, e) {
                      t && (this.needsBox = !0),
                        (this["stroke-width"] = t),
                        this.boxAttr(e, t);
                    }
                    "text-alignSetter"(t) {
                      this.textAlign = t;
                    }
                    textSetter(t) {
                      void 0 !== t && this.text.attr({ text: t }),
                        this.updateTextPadding();
                    }
                    updateBoxSize() {
                      var t = this.text;
                      const e = {},
                        r = this.padding,
                        n = (this.bBox =
                          (o(this.widthSetting) &&
                            o(this.heightSetting) &&
                            !this.textAlign) ||
                          !i(t.textStr)
                            ? h.emptyBBox
                            : t.getBBox());
                      (this.width = this.getPaddedWidth()),
                        (this.height =
                          (this.heightSetting || n.height || 0) + 2 * r);
                      const a = this.renderer.fontMetrics(t);
                      (this.baselineOffset =
                        r +
                        Math.min(
                          (this.text.firstLineMetrics || a).b,
                          n.height || 1 / 0
                        )),
                        this.heightSetting &&
                          (this.baselineOffset +=
                            (this.heightSetting - a.h) / 2),
                        this.needsBox &&
                          !t.textPath &&
                          (this.box ||
                            ((t = this.box =
                              this.symbolKey
                                ? this.renderer.symbol(this.symbolKey)
                                : this.renderer.rect()).addClass(
                              ("button" === this.className
                                ? ""
                                : "highcharts-label-box") +
                                (this.className
                                  ? " highcharts-" + this.className + "-box"
                                  : "")
                            ),
                            t.add(this)),
                          (t = this.getCrispAdjust()),
                          (e.x = t),
                          (e.y =
                            (this.baseline ? -this.baselineOffset : 0) + t),
                          (e.width = Math.round(this.width)),
                          (e.height = Math.round(this.height)),
                          this.box.attr(s(e, this.deferredAttr)),
                          (this.deferredAttr = {}));
                    }
                    updateTextPadding() {
                      const t = this.text;
                      if (!t.textPath) {
                        this.updateBoxSize();
                        const e = this.baseline ? 0 : this.baselineOffset;
                        let s = n(this.paddingLeft, this.padding);
                        i(this.widthSetting) &&
                          this.bBox &&
                          ("center" === this.textAlign ||
                            "right" === this.textAlign) &&
                          (s +=
                            { center: 0.5, right: 1 }[this.textAlign] *
                            (this.widthSetting - this.bBox.width)),
                          (s === t.x && e === t.y) ||
                            (t.attr("x", s),
                            t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)),
                            void 0 !== e && t.attr("y", e)),
                          (t.x = s),
                          (t.y = e);
                      }
                    }
                    widthSetter(t) {
                      this.widthSetting = o(t) ? t : void 0;
                    }
                    getPaddedWidth() {
                      var t = this.padding;
                      const e = n(this.paddingLeft, t);
                      return (
                        (t = n(this.paddingRight, t)),
                        (this.widthSetting || this.bBox.width || 0) + e + t
                      );
                    }
                    xSetter(t) {
                      (this.x = t),
                        this.alignFactor &&
                          ((t -= this.alignFactor * this.getPaddedWidth()),
                          (this["forceAnimate:x"] = !0)),
                        (this.xSetting = Math.round(t)),
                        this.attr("translateX", this.xSetting);
                    }
                    ySetter(t) {
                      (this.ySetting = this.y = Math.round(t)),
                        this.attr("translateY", this.ySetting);
                    }
                  }
                  return (
                    (h.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }),
                    (h.textProps =
                      "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow whiteSpace width".split(
                        " "
                      )),
                    h
                  );
                }
              ),
              e(
                i,
                "Core/Renderer/SVG/Symbols.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  function e(t, e, i, s, r) {
                    const a = [];
                    if (r) {
                      const h = r.start || 0,
                        l = n(r.r, i);
                      (i = n(r.r, s || i)), (s = (r.end || 0) - 0.001);
                      const c = r.innerR,
                        d = n(
                          r.open,
                          0.001 > Math.abs((r.end || 0) - h - 2 * Math.PI)
                        ),
                        p = Math.cos(h),
                        u = Math.sin(h),
                        g = Math.cos(s),
                        f = Math.sin(s),
                        m = n(r.longArc, 0.001 > s - h - Math.PI ? 0 : 1);
                      let x = [
                        "A",
                        l,
                        i,
                        0,
                        m,
                        n(r.clockwise, 1),
                        t + l * g,
                        e + i * f,
                      ];
                      (x.params = { start: h, end: s, cx: t, cy: e }),
                        a.push(["M", t + l * p, e + i * u], x),
                        o(c) &&
                          ((x = [
                            "A",
                            c,
                            c,
                            0,
                            m,
                            o(r.clockwise) ? 1 - r.clockwise : 0,
                            t + c * p,
                            e + c * u,
                          ]),
                          (x.params = { start: s, end: h, cx: t, cy: e }),
                          a.push(
                            d
                              ? ["M", t + c * g, e + c * f]
                              : ["L", t + c * g, e + c * f],
                            x
                          )),
                        d || a.push(["Z"]);
                    }
                    return a;
                  }
                  function i(t, e, i, o, r) {
                    return r && r.r
                      ? s(t, e, i, o, r)
                      : [
                          ["M", t, e],
                          ["L", t + i, e],
                          ["L", t + i, e + o],
                          ["L", t, e + o],
                          ["Z"],
                        ];
                  }
                  function s(t, e, i, s, o) {
                    return [
                      ["M", t + (o = (null == o ? void 0 : o.r) || 0), e],
                      ["L", t + i - o, e],
                      ["A", o, o, 0, 0, 1, t + i, e + o],
                      ["L", t + i, e + s - o],
                      ["A", o, o, 0, 0, 1, t + i - o, e + s],
                      ["L", t + o, e + s],
                      ["A", o, o, 0, 0, 1, t, e + s - o],
                      ["L", t, e + o],
                      ["A", o, o, 0, 0, 1, t + o, e],
                      ["Z"],
                    ];
                  }
                  const { defined: o, isNumber: r, pick: n } = t;
                  return {
                    arc: e,
                    callout: function (t, e, i, o, n) {
                      const a = Math.min((n && n.r) || 0, i, o),
                        h = a + 6,
                        l = n && n.anchorX;
                      n = (n && n.anchorY) || 0;
                      const c = s(t, e, i, o, { r: a });
                      return r(l)
                        ? (t + l >= i
                            ? n > e + h && n < e + o - h
                              ? c.splice(
                                  3,
                                  1,
                                  ["L", t + i, n - 6],
                                  ["L", t + i + 6, n],
                                  ["L", t + i, n + 6],
                                  ["L", t + i, e + o - a]
                                )
                              : c.splice(
                                  3,
                                  1,
                                  ["L", t + i, o / 2],
                                  ["L", l, n],
                                  ["L", t + i, o / 2],
                                  ["L", t + i, e + o - a]
                                )
                            : 0 >= t + l
                            ? n > e + h && n < e + o - h
                              ? c.splice(
                                  7,
                                  1,
                                  ["L", t, n + 6],
                                  ["L", t - 6, n],
                                  ["L", t, n - 6],
                                  ["L", t, e + a]
                                )
                              : c.splice(
                                  7,
                                  1,
                                  ["L", t, o / 2],
                                  ["L", l, n],
                                  ["L", t, o / 2],
                                  ["L", t, e + a]
                                )
                            : n && n > o && l > t + h && l < t + i - h
                            ? c.splice(
                                5,
                                1,
                                ["L", l + 6, e + o],
                                ["L", l, e + o + 6],
                                ["L", l - 6, e + o],
                                ["L", t + a, e + o]
                              )
                            : n &&
                              0 > n &&
                              l > t + h &&
                              l < t + i - h &&
                              c.splice(
                                1,
                                1,
                                ["L", l - 6, e],
                                ["L", l, e - 6],
                                ["L", l + 6, e],
                                ["L", i - a, e]
                              ),
                          c)
                        : c;
                    },
                    circle: function (t, i, s, o) {
                      return e(t + s / 2, i + o / 2, s / 2, o / 2, {
                        start: 0.5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1,
                      });
                    },
                    diamond: function (t, e, i, s) {
                      return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s / 2],
                        ["L", t + i / 2, e + s],
                        ["L", t, e + s / 2],
                        ["Z"],
                      ];
                    },
                    rect: i,
                    roundedRect: s,
                    square: i,
                    triangle: function (t, e, i, s) {
                      return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s],
                        ["L", t, e + s],
                        ["Z"],
                      ];
                    },
                    "triangle-down": function (t, e, i, s) {
                      return [
                        ["M", t, e],
                        ["L", t + i, e],
                        ["L", t + i / 2, e + s],
                        ["Z"],
                      ];
                    },
                  };
                }
              ),
              e(
                i,
                "Core/Renderer/SVG/TextBuilder.js",
                [
                  i["Core/Renderer/HTML/AST.js"],
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { doc: s, SVG_NS: o, win: r } = e,
                    {
                      attr: n,
                      extend: a,
                      fireEvent: h,
                      isString: l,
                      objectEach: c,
                      pick: d,
                    } = i;
                  return class {
                    constructor(t) {
                      const e = t.styles;
                      (this.renderer = t.renderer),
                        (this.svgElement = t),
                        (this.width = t.textWidth),
                        (this.textLineHeight = e && e.lineHeight),
                        (this.textOutline = e && e.textOutline),
                        (this.ellipsis = !(
                          !e || "ellipsis" !== e.textOverflow
                        )),
                        (this.noWrap = !(!e || "nowrap" !== e.whiteSpace));
                    }
                    buildSVG() {
                      const e = this.svgElement,
                        i = e.element;
                      var o = e.renderer,
                        r = d(e.textStr, "").toString();
                      const n = -1 !== r.indexOf("<"),
                        a = i.childNodes;
                      o = !e.added && o.box;
                      const h = /<br.*?>/g;
                      var c = [
                        r,
                        this.ellipsis,
                        this.noWrap,
                        this.textLineHeight,
                        this.textOutline,
                        e.getStyle("font-size"),
                        this.width,
                      ].join();
                      if (c !== e.textCache) {
                        for (
                          e.textCache = c, delete e.actualWidth, c = a.length;
                          c--;

                        )
                          i.removeChild(a[c]);
                        n ||
                        this.ellipsis ||
                        this.width ||
                        e.textPath ||
                        (-1 !== r.indexOf(" ") && (!this.noWrap || h.test(r)))
                          ? "" !== r &&
                            (o && o.appendChild(i),
                            (r = new t(r)),
                            this.modifyTree(r.nodes),
                            r.addToDOM(i),
                            this.modifyDOM(),
                            this.ellipsis &&
                              -1 !== (i.textContent || "").indexOf("…") &&
                              e.attr(
                                "title",
                                this.unescapeEntities(e.textStr || "", [
                                  "&lt;",
                                  "&gt;",
                                ])
                              ),
                            o && o.removeChild(i))
                          : i.appendChild(
                              s.createTextNode(this.unescapeEntities(r))
                            ),
                          l(this.textOutline) &&
                            e.applyTextOutline &&
                            e.applyTextOutline(this.textOutline);
                      }
                    }
                    modifyDOM() {
                      const t = this.svgElement,
                        e = n(t.element, "x");
                      let i;
                      for (
                        t.firstLineMetrics = void 0;
                        (i = t.element.firstChild) &&
                        /^[\s\u200B]*$/.test(i.textContent || " ");

                      )
                        t.element.removeChild(i);
                      [].forEach.call(
                        t.element.querySelectorAll("tspan.highcharts-br"),
                        (i, s) => {
                          i.nextSibling &&
                            i.previousSibling &&
                            (0 === s &&
                              1 === i.previousSibling.nodeType &&
                              (t.firstLineMetrics = t.renderer.fontMetrics(
                                i.previousSibling
                              )),
                            n(i, {
                              dy: this.getLineHeight(i.nextSibling),
                              x: e,
                            }));
                        }
                      );
                      const a = this.width || 0;
                      if (a) {
                        var h = (i, r) => {
                            var h = i.textContent || "";
                            const l = h.replace(/([^\^])-/g, "$1- ").split(" ");
                            var c =
                              !this.noWrap &&
                              (1 < l.length || 1 < t.element.childNodes.length);
                            const d = this.getLineHeight(r);
                            let p = 0,
                              u = t.actualWidth;
                            if (this.ellipsis)
                              h &&
                                this.truncate(
                                  i,
                                  h,
                                  void 0,
                                  0,
                                  Math.max(0, a - 0.8 * d),
                                  (t, e) => t.substring(0, e) + "…"
                                );
                            else if (c) {
                              for (
                                h = [], c = [];
                                r.firstChild && r.firstChild !== i;

                              )
                                c.push(r.firstChild),
                                  r.removeChild(r.firstChild);
                              for (; l.length; )
                                l.length &&
                                  !this.noWrap &&
                                  0 < p &&
                                  (h.push(i.textContent || ""),
                                  (i.textContent = l
                                    .join(" ")
                                    .replace(/- /g, "-"))),
                                  this.truncate(
                                    i,
                                    void 0,
                                    l,
                                    (0 === p && u) || 0,
                                    a,
                                    (t, e) =>
                                      l
                                        .slice(0, e)
                                        .join(" ")
                                        .replace(/- /g, "-")
                                  ),
                                  (u = t.actualWidth),
                                  p++;
                              c.forEach((t) => {
                                r.insertBefore(t, i);
                              }),
                                h.forEach((t) => {
                                  r.insertBefore(s.createTextNode(t), i),
                                    ((t = s.createElementNS(
                                      o,
                                      "tspan"
                                    )).textContent = "​"),
                                    n(t, { dy: d, x: e }),
                                    r.insertBefore(t, i);
                                });
                            }
                          },
                          l = (e) => {
                            [].slice.call(e.childNodes).forEach((i) => {
                              i.nodeType === r.Node.TEXT_NODE
                                ? h(i, e)
                                : (-1 !==
                                    i.className.baseVal.indexOf(
                                      "highcharts-br"
                                    ) && (t.actualWidth = 0),
                                  l(i));
                            });
                          };
                        l(t.element);
                      }
                    }
                    getLineHeight(t) {
                      return (
                        (t =
                          t.nodeType === r.Node.TEXT_NODE
                            ? t.parentElement
                            : t),
                        this.textLineHeight
                          ? parseInt(this.textLineHeight.toString(), 10)
                          : this.renderer.fontMetrics(
                              t || this.svgElement.element
                            ).h
                      );
                    }
                    modifyTree(t) {
                      const e = (i, s) => {
                        const {
                            attributes: o = {},
                            children: r,
                            style: n = {},
                            tagName: h,
                          } = i,
                          l = this.renderer.styledMode;
                        "b" === h || "strong" === h
                          ? l
                            ? (o.class = "highcharts-strong")
                            : (n.fontWeight = "bold")
                          : ("i" !== h && "em" !== h) ||
                            (l
                              ? (o.class = "highcharts-emphasized")
                              : (n.fontStyle = "italic")),
                          n && n.color && (n.fill = n.color),
                          "br" === h
                            ? ((o.class = "highcharts-br"),
                              (i.textContent = "​"),
                              (s = t[s + 1]) &&
                                s.textContent &&
                                (s.textContent = s.textContent.replace(
                                  /^ +/gm,
                                  ""
                                )))
                            : "a" === h &&
                              r &&
                              r.some((t) => "#text" === t.tagName) &&
                              (i.children = [
                                { children: r, tagName: "tspan" },
                              ]),
                          "#text" !== h && "a" !== h && (i.tagName = "tspan"),
                          a(i, { attributes: o, style: n }),
                          r &&
                            r.filter((t) => "#text" !== t.tagName).forEach(e);
                      };
                      t.forEach(e),
                        h(this.svgElement, "afterModifyTree", { nodes: t });
                    }
                    truncate(t, e, i, s, o, r) {
                      const n = this.svgElement,
                        { rotation: a } = n,
                        h = [];
                      let l,
                        c,
                        d = i ? 1 : 0,
                        p = (e || i || "").length,
                        u = p;
                      const g = function (e, o) {
                        if (
                          ((e = o || e),
                          (o = t.parentNode) &&
                            void 0 === h[e] &&
                            o.getSubStringLength)
                        )
                          try {
                            h[e] = s + o.getSubStringLength(0, i ? e + 1 : e);
                          } catch (t) {}
                        return h[e];
                      };
                      if (
                        ((n.rotation = 0),
                        (c = g(t.textContent.length)),
                        s + c > o)
                      ) {
                        for (; d <= p; )
                          (u = Math.ceil((d + p) / 2)),
                            i && (l = r(i, u)),
                            (c = g(u, l && l.length - 1)),
                            d === p
                              ? (d = p + 1)
                              : c > o
                              ? (p = u - 1)
                              : (d = u);
                        0 === p
                          ? (t.textContent = "")
                          : (e && p === e.length - 1) ||
                            (t.textContent = l || r(e || i, u));
                      }
                      i && i.splice(0, u),
                        (n.actualWidth = c),
                        (n.rotation = a);
                    }
                    unescapeEntities(t, e) {
                      return (
                        c(this.renderer.escapes, function (i, s) {
                          (e && -1 !== e.indexOf(i)) ||
                            (t = t.toString().replace(new RegExp(i, "g"), s));
                        }),
                        t
                      );
                    }
                  };
                }
              ),
              e(
                i,
                "Core/Renderer/SVG/SVGRenderer.js",
                [
                  i["Core/Renderer/HTML/AST.js"],
                  i["Core/Color/Color.js"],
                  i["Core/Globals.js"],
                  i["Core/Renderer/RendererRegistry.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Renderer/SVG/SVGLabel.js"],
                  i["Core/Renderer/SVG/Symbols.js"],
                  i["Core/Renderer/SVG/TextBuilder.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r, n, a, h) {
                  const {
                      charts: l,
                      deg2rad: c,
                      doc: d,
                      isFirefox: p,
                      isMS: u,
                      isWebKit: g,
                      noop: f,
                      SVG_NS: m,
                      symbolSizes: x,
                      win: y,
                    } = i,
                    {
                      addEvent: b,
                      attr: v,
                      createElement: S,
                      css: k,
                      defined: M,
                      destroyObjectProperties: C,
                      extend: w,
                      isArray: T,
                      isNumber: A,
                      isObject: P,
                      isString: L,
                      merge: O,
                      pick: E,
                      pInt: D,
                      uniqueKey: j,
                    } = h;
                  let I;
                  class B {
                    constructor(t, e, i, s, o, r, n) {
                      (this.width =
                        this.url =
                        this.style =
                        this.imgCount =
                        this.height =
                        this.gradients =
                        this.globalAnimation =
                        this.defs =
                        this.chartIndex =
                        this.cacheKeys =
                        this.cache =
                        this.boxWrapper =
                        this.box =
                        this.alignedObjects =
                          void 0),
                        this.init(t, e, i, s, o, r, n);
                    }
                    init(t, e, i, s, o, r, n) {
                      const a = this.createElement("svg").attr({
                          version: "1.1",
                          class: "highcharts-root",
                        }),
                        h = a.element;
                      let l;
                      n || a.css(this.getStyle(s)),
                        t.appendChild(h),
                        v(t, "dir", "ltr"),
                        -1 === t.innerHTML.indexOf("xmlns") &&
                          v(h, "xmlns", this.SVG_NS),
                        (this.box = h),
                        (this.boxWrapper = a),
                        (this.alignedObjects = []),
                        (this.url = this.getReferenceURL()),
                        this.createElement("desc")
                          .add()
                          .element.appendChild(
                            d.createTextNode("Created with Highcharts 11.1.0")
                          ),
                        (this.defs = this.createElement("defs").add()),
                        (this.allowHTML = r),
                        (this.forExport = o),
                        (this.styledMode = n),
                        (this.gradients = {}),
                        (this.cache = {}),
                        (this.cacheKeys = []),
                        (this.imgCount = 0),
                        (this.rootFontSize = a.getStyle("font-size")),
                        this.setSize(e, i, !1),
                        p &&
                          t.getBoundingClientRect &&
                          ((e = function () {
                            k(t, { left: 0, top: 0 }),
                              (l = t.getBoundingClientRect()),
                              k(t, {
                                left: Math.ceil(l.left) - l.left + "px",
                                top: Math.ceil(l.top) - l.top + "px",
                              });
                          })(),
                          (this.unSubPixelFix = b(y, "resize", e)));
                    }
                    definition(e) {
                      return new t([e]).addToDOM(this.defs.element);
                    }
                    getReferenceURL() {
                      if ((p || g) && d.getElementsByTagName("base").length) {
                        if (!M(I)) {
                          var e = j();
                          (e = new t([
                            {
                              tagName: "svg",
                              attributes: { width: 8, height: 8 },
                              children: [
                                {
                                  tagName: "defs",
                                  children: [
                                    {
                                      tagName: "clipPath",
                                      attributes: { id: e },
                                      children: [
                                        {
                                          tagName: "rect",
                                          attributes: { width: 4, height: 4 },
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  tagName: "rect",
                                  attributes: {
                                    id: "hitme",
                                    width: 8,
                                    height: 8,
                                    "clip-path": `url(#${e})`,
                                    fill: "rgba(0,0,0,0.001)",
                                  },
                                },
                              ],
                            },
                          ]).addToDOM(d.body)),
                            k(e, {
                              position: "fixed",
                              top: 0,
                              left: 0,
                              zIndex: 9e5,
                            });
                          const i = d.elementFromPoint(6, 6);
                          (I = "hitme" === (i && i.id)), d.body.removeChild(e);
                        }
                        if (I)
                          return y.location.href
                            .split("#")[0]
                            .replace(/<[^>]*>/g, "")
                            .replace(/([\('\)])/g, "\\$1")
                            .replace(/ /g, "%20");
                      }
                      return "";
                    }
                    getStyle(t) {
                      return (this.style = w(
                        {
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "1rem",
                        },
                        t
                      ));
                    }
                    setStyle(t) {
                      this.boxWrapper.css(this.getStyle(t));
                    }
                    isHidden() {
                      return !this.boxWrapper.getBBox().width;
                    }
                    destroy() {
                      const t = this.defs;
                      return (
                        (this.box = null),
                        (this.boxWrapper = this.boxWrapper.destroy()),
                        C(this.gradients || {}),
                        (this.gradients = null),
                        (this.defs = t.destroy()),
                        this.unSubPixelFix && this.unSubPixelFix(),
                        (this.alignedObjects = null)
                      );
                    }
                    createElement(t) {
                      const e = new this.Element();
                      return e.init(this, t), e;
                    }
                    getRadialAttr(t, e) {
                      return {
                        cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                        cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                        r: (e.r || 0) * t[2],
                      };
                    }
                    shadowDefinition(t) {
                      const e = [
                          `highcharts-drop-shadow-${this.chartIndex}`,
                          ...Object.keys(t).map((e) => t[e]),
                        ]
                          .join("-")
                          .replace(/[^a-z0-9\-]/g, ""),
                        i = O(
                          {
                            color: "#000000",
                            offsetX: 1,
                            offsetY: 1,
                            opacity: 0.15,
                            width: 5,
                          },
                          t
                        );
                      return (
                        this.defs.element.querySelector(`#${e}`) ||
                          this.definition({
                            tagName: "filter",
                            attributes: { id: e },
                            children: [
                              {
                                tagName: "feDropShadow",
                                attributes: {
                                  dx: i.offsetX,
                                  dy: i.offsetY,
                                  "flood-color": i.color,
                                  "flood-opacity": Math.min(5 * i.opacity, 1),
                                  stdDeviation: i.width / 2,
                                },
                              },
                            ],
                          }),
                        e
                      );
                    }
                    buildText(t) {
                      new a(t).buildSVG();
                    }
                    getContrast(t) {
                      return 1.05 /
                        (0.05 +
                          (t =
                            0.2126 *
                              (t = e
                                .parse(t)
                                .rgba.map((t) =>
                                  0.03928 >= (t /= 255)
                                    ? t / 12.92
                                    : Math.pow((t + 0.055) / 1.055, 2.4)
                                ))[0] +
                            0.7152 * t[1] +
                            0.0722 * t[2])) >
                        (t + 0.05) / 0.05
                        ? "#FFFFFF"
                        : "#000000";
                    }
                    button(e, i, s, o, r = {}, n, a, h, l, c) {
                      const d = this.label(
                          e,
                          i,
                          s,
                          l,
                          void 0,
                          void 0,
                          c,
                          void 0,
                          "button"
                        ),
                        p = this.styledMode;
                      e = r.states || {};
                      let g = 0;
                      delete (r = O(r)).states;
                      const f = O(
                        {
                          color: "#333333",
                          cursor: "pointer",
                          fontSize: "0.8em",
                          fontWeight: "normal",
                        },
                        r.style
                      );
                      delete r.style;
                      let m,
                        x,
                        y,
                        v = t.filterUserAttributes(r);
                      return (
                        d.attr(O({ padding: 8, r: 2 }, v)),
                        p ||
                          ((v = O(
                            {
                              fill: "#f7f7f7",
                              stroke: "#cccccc",
                              "stroke-width": 1,
                            },
                            v
                          )),
                          (n = O(
                            v,
                            { fill: "#e6e6e6" },
                            t.filterUserAttributes(n || e.hover || {})
                          )),
                          (m = n.style),
                          delete n.style,
                          (a = O(
                            v,
                            {
                              fill: "#e6e9ff",
                              style: { color: "#000000", fontWeight: "bold" },
                            },
                            t.filterUserAttributes(a || e.select || {})
                          )),
                          (x = a.style),
                          delete a.style,
                          (h = O(
                            v,
                            { style: { color: "#cccccc" } },
                            t.filterUserAttributes(h || e.disabled || {})
                          )),
                          (y = h.style),
                          delete h.style),
                        b(
                          d.element,
                          u ? "mouseover" : "mouseenter",
                          function () {
                            3 !== g && d.setState(1);
                          }
                        ),
                        b(
                          d.element,
                          u ? "mouseout" : "mouseleave",
                          function () {
                            3 !== g && d.setState(g);
                          }
                        ),
                        (d.setState = function (t) {
                          1 !== t && (d.state = g = t),
                            d
                              .removeClass(
                                /highcharts-button-(normal|hover|pressed|disabled)/
                              )
                              .addClass(
                                "highcharts-button-" +
                                  ["normal", "hover", "pressed", "disabled"][
                                    t || 0
                                  ]
                              ),
                            p ||
                              (d.attr([v, n, a, h][t || 0]),
                              P((t = [f, m, x, y][t || 0])) && d.css(t));
                        }),
                        p ||
                          (d.attr(v).css(w({ cursor: "default" }, f)),
                          c && d.text.css({ pointerEvents: "none" })),
                        d
                          .on("touchstart", (t) => t.stopPropagation())
                          .on("click", function (t) {
                            3 !== g && o.call(d, t);
                          })
                      );
                    }
                    crispLine(t, e, i = "round") {
                      const s = t[0],
                        o = t[1];
                      return (
                        M(s[1]) &&
                          s[1] === o[1] &&
                          (s[1] = o[1] = Math[i](s[1]) - (e % 2) / 2),
                        M(s[2]) &&
                          s[2] === o[2] &&
                          (s[2] = o[2] = Math[i](s[2]) + (e % 2) / 2),
                        t
                      );
                    }
                    path(t) {
                      const e = this.styledMode ? {} : { fill: "none" };
                      return (
                        T(t) ? (e.d = t) : P(t) && w(e, t),
                        this.createElement("path").attr(e)
                      );
                    }
                    circle(t, e, i) {
                      return (
                        (t = P(t)
                          ? t
                          : void 0 === t
                          ? {}
                          : { x: t, y: e, r: i }),
                        ((e = this.createElement("circle")).xSetter =
                          e.ySetter =
                            function (t, e, i) {
                              i.setAttribute("c" + e, t);
                            }),
                        e.attr(t)
                      );
                    }
                    arc(t, e, i, s, o, r) {
                      return (
                        P(t)
                          ? ((e = (s = t).y), (i = s.r), (t = s.x))
                          : (s = { innerR: s, start: o, end: r }),
                        ((t = this.symbol("arc", t, e, i, i, s)).r = i),
                        t
                      );
                    }
                    rect(t, e, i, s, o, r) {
                      t = P(t)
                        ? t
                        : void 0 === t
                        ? {}
                        : {
                            x: t,
                            y: e,
                            r: o,
                            width: Math.max(i || 0, 0),
                            height: Math.max(s || 0, 0),
                          };
                      const n = this.createElement("rect");
                      return (
                        this.styledMode ||
                          (void 0 !== r &&
                            ((t["stroke-width"] = r), w(t, n.crisp(t))),
                          (t.fill = "none")),
                        (n.rSetter = function (t, e, i) {
                          (n.r = t), v(i, { rx: t, ry: t });
                        }),
                        (n.rGetter = function () {
                          return n.r || 0;
                        }),
                        n.attr(t)
                      );
                    }
                    roundedRect(t) {
                      return this.symbol("roundedRect").attr(t);
                    }
                    setSize(t, e, i) {
                      (this.width = t),
                        (this.height = e),
                        this.boxWrapper.animate(
                          { width: t, height: e },
                          {
                            step: function () {
                              this.attr({
                                viewBox:
                                  "0 0 " +
                                  this.attr("width") +
                                  " " +
                                  this.attr("height"),
                              });
                            },
                            duration: E(i, !0) ? void 0 : 0,
                          }
                        ),
                        this.alignElements();
                    }
                    g(t) {
                      const e = this.createElement("g");
                      return t ? e.attr({ class: "highcharts-" + t }) : e;
                    }
                    image(t, e, i, s, o, r) {
                      const n = { preserveAspectRatio: "none" };
                      A(e) && (n.x = e),
                        A(i) && (n.y = i),
                        A(s) && (n.width = s),
                        A(o) && (n.height = o);
                      const a = this.createElement("image").attr(n);
                      return (
                        (e = function (e) {
                          a.attr({ href: t }), r.call(a, e);
                        }),
                        r
                          ? (a.attr({
                              href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                            }),
                            (i = new y.Image()),
                            b(i, "load", e),
                            (i.src = t),
                            i.complete && e({}))
                          : a.attr({ href: t }),
                        a
                      );
                    }
                    symbol(t, e, i, s, o, r) {
                      const n = this,
                        a = /^url\((.*?)\)$/,
                        h = a.test(t),
                        c = !h && (this.symbols[t] ? t : "circle"),
                        p = c && this.symbols[c];
                      let u, g, f, m;
                      if (p)
                        "number" == typeof e &&
                          (g = p.call(
                            this.symbols,
                            Math.round(e || 0),
                            Math.round(i || 0),
                            s || 0,
                            o || 0,
                            r
                          )),
                          (u = this.path(g)),
                          n.styledMode || u.attr("fill", "none"),
                          w(u, {
                            symbolName: c || void 0,
                            x: e,
                            y: i,
                            width: s,
                            height: o,
                          }),
                          r && w(u, r);
                      else if (h) {
                        f = t.match(a)[1];
                        const s = (u = this.image(f));
                        (s.imgwidth = E(r && r.width, x[f] && x[f].width)),
                          (s.imgheight = E(r && r.height, x[f] && x[f].height)),
                          (m = (t) =>
                            t.attr({ width: t.width, height: t.height })),
                          ["width", "height"].forEach(function (t) {
                            s[t + "Setter"] = function (t, e) {
                              this[e] = t;
                              const {
                                alignByTranslate: i,
                                element: s,
                                width: o,
                                height: n,
                                imgwidth: a,
                                imgheight: h,
                              } = this;
                              if (((t = this["img" + e]), M(t))) {
                                let l = 1;
                                r && "within" === r.backgroundSize && o && n
                                  ? ((l = Math.min(o / a, n / h)),
                                    v(s, {
                                      width: Math.round(a * l),
                                      height: Math.round(h * l),
                                    }))
                                  : s && s.setAttribute(e, t),
                                  i ||
                                    this.translate(
                                      ((o || 0) - a * l) / 2,
                                      ((n || 0) - h * l) / 2
                                    );
                              }
                            };
                          }),
                          M(e) && s.attr({ x: e, y: i }),
                          (s.isImg = !0),
                          M(s.imgwidth) && M(s.imgheight)
                            ? m(s)
                            : (s.attr({ width: 0, height: 0 }),
                              S("img", {
                                onload: function () {
                                  const t = l[n.chartIndex];
                                  0 === this.width &&
                                    (k(this, {
                                      position: "absolute",
                                      top: "-999em",
                                    }),
                                    d.body.appendChild(this)),
                                    (x[f] = {
                                      width: this.width,
                                      height: this.height,
                                    }),
                                    (s.imgwidth = this.width),
                                    (s.imgheight = this.height),
                                    s.element && m(s),
                                    this.parentNode &&
                                      this.parentNode.removeChild(this),
                                    n.imgCount--,
                                    n.imgCount ||
                                      !t ||
                                      t.hasLoaded ||
                                      t.onload();
                                },
                                src: f,
                              }),
                              this.imgCount++);
                      }
                      return u;
                    }
                    clipRect(t, e, i, s) {
                      const o = j() + "-",
                        r = this.createElement("clipPath")
                          .attr({ id: o })
                          .add(this.defs);
                      return (
                        ((t = this.rect(t, e, i, s, 0).add(r)).id = o),
                        (t.clipPath = r),
                        (t.count = 0),
                        t
                      );
                    }
                    text(t, e, i, s) {
                      const o = {};
                      return !s || (!this.allowHTML && this.forExport)
                        ? ((o.x = Math.round(e || 0)),
                          i && (o.y = Math.round(i)),
                          M(t) && (o.text = t),
                          (t = this.createElement("text").attr(o)),
                          (!s || (this.forExport && !this.allowHTML)) &&
                            (t.xSetter = function (t, e, i) {
                              const s = i.getElementsByTagName("tspan"),
                                o = i.getAttribute(e);
                              for (let i, r = 0; r < s.length; r++)
                                (i = s[r]),
                                  i.getAttribute(e) === o &&
                                    i.setAttribute(e, t);
                              i.setAttribute(e, t);
                            }),
                          t)
                        : this.html(t, e, i);
                    }
                    fontMetrics(t) {
                      const e =
                        24 >
                        (t = D(o.prototype.getStyle.call(t, "font-size") || 0))
                          ? t + 3
                          : Math.round(1.2 * t);
                      return { h: e, b: Math.round(0.8 * e), f: t };
                    }
                    rotCorr(t, e, i) {
                      let s = t;
                      return (
                        e && i && (s = Math.max(s * Math.cos(e * c), 4)),
                        { x: (-t / 3) * Math.sin(e * c), y: s }
                      );
                    }
                    pathToSegments(t) {
                      const e = [],
                        i = [],
                        s = {
                          A: 8,
                          C: 7,
                          H: 2,
                          L: 3,
                          M: 3,
                          Q: 5,
                          S: 5,
                          T: 3,
                          V: 2,
                        };
                      for (let o = 0; o < t.length; o++)
                        L(i[0]) &&
                          A(t[o]) &&
                          i.length === s[i[0].toUpperCase()] &&
                          t.splice(
                            o,
                            0,
                            i[0].replace("M", "L").replace("m", "l")
                          ),
                          "string" == typeof t[o] &&
                            (i.length && e.push(i.slice(0)), (i.length = 0)),
                          i.push(t[o]);
                      return e.push(i.slice(0)), e;
                    }
                    label(t, e, i, s, o, n, a, h, l) {
                      return new r(this, t, e, i, s, o, n, a, h, l);
                    }
                    alignElements() {
                      this.alignedObjects.forEach((t) => t.align());
                    }
                  }
                  return (
                    w(B.prototype, {
                      Element: o,
                      SVG_NS: m,
                      escapes: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;",
                      },
                      symbols: n,
                      draw: f,
                    }),
                    s.registerRendererType("svg", B, !0),
                    B
                  );
                }
              ),
              e(
                i,
                "Core/Renderer/HTML/HTMLElement.js",
                [
                  i["Core/Globals.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { isFirefox: s, isMS: o, isWebKit: r, win: n } = t,
                    { css: a, defined: h, extend: l, pick: c, pInt: d } = i,
                    p = [];
                  class u extends e {
                    static compose(t) {
                      if (i.pushUnique(p, t)) {
                        const e = u.prototype,
                          i = t.prototype;
                        (i.getSpanCorrection = e.getSpanCorrection),
                          (i.htmlCss = e.htmlCss),
                          (i.htmlGetBBox = e.htmlGetBBox),
                          (i.htmlUpdateTransform = e.htmlUpdateTransform),
                          (i.setSpanRotation = e.setSpanRotation);
                      }
                      return t;
                    }
                    getSpanCorrection(t, e, i) {
                      (this.xCorr = -t * i), (this.yCorr = -e);
                    }
                    htmlCss(t) {
                      const e =
                          "SPAN" === this.element.tagName && t && "width" in t,
                        i = c(e && t.width, void 0);
                      let s;
                      return (
                        e && (delete t.width, (this.textWidth = i), (s = !0)),
                        t &&
                          "ellipsis" === t.textOverflow &&
                          ((t.whiteSpace = "nowrap"), (t.overflow = "hidden")),
                        (this.styles = l(this.styles, t)),
                        a(this.element, t),
                        s && this.htmlUpdateTransform(),
                        this
                      );
                    }
                    htmlGetBBox() {
                      const t = this.element;
                      return {
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: t.offsetWidth,
                        height: t.offsetHeight,
                      };
                    }
                    htmlUpdateTransform() {
                      if (this.added) {
                        var t = this.renderer,
                          e = this.element,
                          i = this.x || 0,
                          s = this.y || 0,
                          o = this.textAlign || "left",
                          r = { left: 0, center: 0.5, right: 1 }[o],
                          n = this.styles,
                          l = n && n.whiteSpace;
                        if (
                          (a(e, {
                            marginLeft: this.translateX || 0,
                            marginTop: this.translateY || 0,
                          }),
                          "SPAN" === e.tagName)
                        ) {
                          n = this.rotation;
                          const p = this.textWidth && d(this.textWidth),
                            u = [
                              n,
                              o,
                              e.innerHTML,
                              this.textWidth,
                              this.textAlign,
                            ].join();
                          let g = !1;
                          if (p !== this.oldTextWidth) {
                            if (this.textPxLength) var c = this.textPxLength;
                            else
                              a(e, { width: "", whiteSpace: l || "nowrap" }),
                                (c = e.offsetWidth);
                            (p > this.oldTextWidth || c > p) &&
                              (/[ \-]/.test(e.textContent || e.innerText) ||
                                "ellipsis" === e.style.textOverflow) &&
                              (a(e, {
                                width: c > p || n ? p + "px" : "auto",
                                display: "block",
                                whiteSpace: l || "normal",
                              }),
                              (this.oldTextWidth = p),
                              (g = !0));
                          }
                          (this.hasBoxWidthChanged = g),
                            u !== this.cTT &&
                              ((t = t.fontMetrics(e).b),
                              !h(n) ||
                                (n === (this.oldRotation || 0) &&
                                  o === this.oldAlign) ||
                                this.setSpanRotation(n, r, t),
                              this.getSpanCorrection(
                                (!h(n) && this.textPxLength) || e.offsetWidth,
                                t,
                                r,
                                n,
                                o
                              )),
                            a(e, {
                              left: i + (this.xCorr || 0) + "px",
                              top: s + (this.yCorr || 0) + "px",
                            }),
                            (this.cTT = u),
                            (this.oldRotation = n),
                            (this.oldAlign = o);
                        }
                      } else this.alignOnAdd = !0;
                    }
                    setSpanRotation(t, e, i) {
                      const h = {},
                        l =
                          o && !/Edge/.test(n.navigator.userAgent)
                            ? "-ms-transform"
                            : r
                            ? "-webkit-transform"
                            : s
                            ? "MozTransform"
                            : n.opera
                            ? "-o-transform"
                            : void 0;
                      l &&
                        ((h[l] = h.transform = "rotate(" + t + "deg)"),
                        (h[l + (s ? "Origin" : "-origin")] = h.transformOrigin =
                          100 * e + "% " + i + "px"),
                        a(this.element, h));
                    }
                  }
                  return u;
                }
              ),
              e(
                i,
                "Core/Renderer/HTML/HTMLRenderer.js",
                [
                  i["Core/Renderer/HTML/AST.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Renderer/SVG/SVGRenderer.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s) {
                  const { attr: o, createElement: r, extend: n, pick: a } = s,
                    h = [];
                  class l extends i {
                    static compose(t) {
                      return (
                        s.pushUnique(h, t) &&
                          (t.prototype.html = l.prototype.html),
                        t
                      );
                    }
                    html(i, s, h) {
                      const l = this.createElement("span"),
                        c = l.element,
                        d = l.renderer,
                        p = function (t, i) {
                          ["opacity", "visibility"].forEach(function (s) {
                            t[s + "Setter"] = function (o, r, n) {
                              const a = t.div ? t.div.style : i;
                              e.prototype[s + "Setter"].call(this, o, r, n),
                                a && (a[r] = o);
                            };
                          }),
                            (t.addedSetters = !0);
                        };
                      return (
                        (l.textSetter = function (e) {
                          e !== this.textStr &&
                            (delete this.bBox,
                            delete this.oldTextWidth,
                            t.setElementHTML(this.element, a(e, "")),
                            (this.textStr = e),
                            (l.doTransform = !0));
                        }),
                        p(l, l.element.style),
                        (l.xSetter =
                          l.ySetter =
                          l.alignSetter =
                          l.rotationSetter =
                            function (t, e) {
                              "align" === e
                                ? (l.alignValue = l.textAlign = t)
                                : (l[e] = t),
                                (l.doTransform = !0);
                            }),
                        (l.afterSetters = function () {
                          this.doTransform &&
                            (this.htmlUpdateTransform(),
                            (this.doTransform = !1));
                        }),
                        l
                          .attr({ text: i, x: Math.round(s), y: Math.round(h) })
                          .css({ position: "absolute" }),
                        d.styledMode ||
                          l.css({
                            fontFamily: this.style.fontFamily,
                            fontSize: this.style.fontSize,
                          }),
                        (c.style.whiteSpace = "nowrap"),
                        (l.css = l.htmlCss),
                        (l.add = function (t) {
                          const e = d.box.parentNode,
                            i = [];
                          let s;
                          if ((this.parentGroup = t)) {
                            if (((s = t.div), !s)) {
                              for (; t; ) i.push(t), (t = t.parentGroup);
                              i.reverse().forEach(function (t) {
                                function a(e, i) {
                                  (t[i] = e),
                                    "translateX" === i
                                      ? (d.left = e + "px")
                                      : (d.top = e + "px"),
                                    (t.doTransform = !0);
                                }
                                const h = o(t.element, "class"),
                                  c = t.styles || {};
                                s = t.div =
                                  t.div ||
                                  r(
                                    "div",
                                    h ? { className: h } : void 0,
                                    {
                                      position: "absolute",
                                      left: (t.translateX || 0) + "px",
                                      top: (t.translateY || 0) + "px",
                                      display: t.display,
                                      opacity: t.opacity,
                                      visibility: t.visibility,
                                    },
                                    s || e
                                  );
                                const d = s.style;
                                n(t, {
                                  classSetter: (function (t) {
                                    return function (e) {
                                      this.element.setAttribute("class", e),
                                        (t.className = e);
                                    };
                                  })(s),
                                  css: function (e) {
                                    return (
                                      l.css.call(t, e),
                                      ["cursor", "pointerEvents"].forEach(
                                        (t) => {
                                          e[t] && (d[t] = e[t]);
                                        }
                                      ),
                                      t
                                    );
                                  },
                                  on: function () {
                                    return (
                                      i[0].div &&
                                        l.on.apply(
                                          {
                                            element: i[0].div,
                                            onEvents: t.onEvents,
                                          },
                                          arguments
                                        ),
                                      t
                                    );
                                  },
                                  translateXSetter: a,
                                  translateYSetter: a,
                                }),
                                  t.addedSetters || p(t),
                                  t.css(c);
                              });
                            }
                          } else s = e;
                          return (
                            s.appendChild(c),
                            (l.added = !0),
                            l.alignOnAdd && l.htmlUpdateTransform(),
                            l
                          );
                        }),
                        l
                      );
                    }
                  }
                  return l;
                }
              ),
              e(i, "Core/Axis/AxisDefaults.js", [], function () {
                var t;
                return (
                  (function (t) {
                    (t.defaultXAxisOptions = {
                      alignTicks: !0,
                      allowDecimals: void 0,
                      panningEnabled: !0,
                      zIndex: 2,
                      zoomEnabled: !0,
                      dateTimeLabelFormats: {
                        millisecond: { main: "%H:%M:%S.%L", range: !1 },
                        second: { main: "%H:%M:%S", range: !1 },
                        minute: { main: "%H:%M", range: !1 },
                        hour: { main: "%H:%M", range: !1 },
                        day: { main: "%e %b" },
                        week: { main: "%e %b" },
                        month: { main: "%b '%y" },
                        year: { main: "%Y" },
                      },
                      endOnTick: !1,
                      gridLineDashStyle: "Solid",
                      gridZIndex: 1,
                      labels: {
                        autoRotation: void 0,
                        autoRotationLimit: 80,
                        distance: 15,
                        enabled: !0,
                        indentation: 10,
                        overflow: "justify",
                        padding: 5,
                        reserveSpace: void 0,
                        rotation: void 0,
                        staggerLines: 0,
                        step: 0,
                        useHTML: !1,
                        zIndex: 7,
                        style: {
                          color: "#333333",
                          cursor: "default",
                          fontSize: "0.8em",
                        },
                      },
                      maxPadding: 0.01,
                      minorGridLineDashStyle: "Solid",
                      minorTickLength: 2,
                      minorTickPosition: "outside",
                      minorTicksPerMajor: 5,
                      minPadding: 0.01,
                      offset: void 0,
                      opposite: !1,
                      reversed: void 0,
                      reversedStacks: !1,
                      showEmpty: !0,
                      showFirstLabel: !0,
                      showLastLabel: !0,
                      startOfWeek: 1,
                      startOnTick: !1,
                      tickLength: 10,
                      tickPixelInterval: 100,
                      tickmarkPlacement: "between",
                      tickPosition: "outside",
                      title: {
                        align: "middle",
                        rotation: 0,
                        useHTML: !1,
                        x: 0,
                        y: 0,
                        style: { color: "#666666", fontSize: "0.8em" },
                      },
                      type: "linear",
                      uniqueNames: !0,
                      visible: !0,
                      minorGridLineColor: "#f2f2f2",
                      minorGridLineWidth: 1,
                      minorTickColor: "#999999",
                      lineColor: "#333333",
                      lineWidth: 1,
                      gridLineColor: "#e6e6e6",
                      gridLineWidth: void 0,
                      tickColor: "#333333",
                    }),
                      (t.defaultYAxisOptions = {
                        reversedStacks: !0,
                        endOnTick: !0,
                        maxPadding: 0.05,
                        minPadding: 0.05,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: { x: void 0 },
                        startOnTick: !0,
                        title: { rotation: 270, text: "Values" },
                        stackLabels: {
                          animation: {},
                          allowOverlap: !1,
                          enabled: !1,
                          crop: !0,
                          overflow: "justify",
                          formatter: function () {
                            const { numberFormatter: t } = this.axis.chart;
                            return t(this.total || 0, -1);
                          },
                          style: {
                            color: "#000000",
                            fontSize: "0.7em",
                            fontWeight: "bold",
                            textOutline: "1px contrast",
                          },
                        },
                        gridLineWidth: 1,
                        lineWidth: 0,
                      }),
                      (t.defaultLeftAxisOptions = { title: { rotation: 270 } }),
                      (t.defaultRightAxisOptions = { title: { rotation: 90 } }),
                      (t.defaultBottomAxisOptions = {
                        labels: { autoRotation: [-45] },
                        margin: 15,
                        title: { rotation: 0 },
                      }),
                      (t.defaultTopAxisOptions = {
                        labels: { autoRotation: [-45] },
                        margin: 15,
                        title: { rotation: 0 },
                      });
                  })(t || (t = {})),
                  t
                );
              }),
              e(
                i,
                "Core/Foundation.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const {
                    addEvent: e,
                    isFunction: i,
                    objectEach: s,
                    removeEvent: o,
                  } = t;
                  var r;
                  return (
                    (function (t) {
                      t.registerEventOptions = function (t, r) {
                        (t.eventOptions = t.eventOptions || {}),
                          s(r.events, function (s, r) {
                            t.eventOptions[r] !== s &&
                              (t.eventOptions[r] &&
                                (o(t, r, t.eventOptions[r]),
                                delete t.eventOptions[r]),
                              i(s) &&
                                ((t.eventOptions[r] = s),
                                e(t, r, s, { order: 0 })));
                          });
                      };
                    })(r || (r = {})),
                    r
                  );
                }
              ),
              e(
                i,
                "Core/Axis/Tick.js",
                [
                  i["Core/Templating.js"],
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { deg2rad: s } = e,
                    {
                      clamp: o,
                      correctFloat: r,
                      defined: n,
                      destroyObjectProperties: a,
                      extend: h,
                      fireEvent: l,
                      isNumber: c,
                      merge: d,
                      objectEach: p,
                      pick: u,
                    } = i;
                  return class {
                    constructor(t, e, i, s, o) {
                      (this.isNewLabel = this.isNew = !0),
                        (this.axis = t),
                        (this.pos = e),
                        (this.type = i || ""),
                        (this.parameters = o || {}),
                        (this.tickmarkOffset = this.parameters.tickmarkOffset),
                        (this.options = this.parameters.options),
                        l(this, "init"),
                        i || s || this.addLabel();
                    }
                    addLabel() {
                      const e = this,
                        i = e.axis;
                      var s = i.options;
                      const o = i.chart;
                      var a = i.categories;
                      const d = i.logarithmic,
                        p = i.names,
                        g = e.pos,
                        f = u(e.options && e.options.labels, s.labels);
                      var m = i.tickPositions;
                      const x = g === m[0],
                        y = g === m[m.length - 1],
                        b = (!f.step || 1 === f.step) && 1 === i.tickInterval;
                      m = m.info;
                      let v,
                        S,
                        k,
                        M = e.label;
                      (a =
                        this.parameters.category || (a ? u(a[g], p[g], g) : g)),
                        d && c(a) && (a = r(d.lin2log(a))),
                        i.dateTime &&
                          (m
                            ? ((S = o.time.resolveDTLFormat(
                                s.dateTimeLabelFormats[
                                  (!s.grid && m.higherRanks[g]) || m.unitName
                                ]
                              )),
                              (v = S.main))
                            : c(a) &&
                              (v = i.dateTime.getXDateFormat(
                                a,
                                s.dateTimeLabelFormats || {}
                              ))),
                        (e.isFirst = x),
                        (e.isLast = y);
                      const C = {
                        axis: i,
                        chart: o,
                        dateTimeLabelFormat: v,
                        isFirst: x,
                        isLast: y,
                        pos: g,
                        tick: e,
                        tickPositionInfo: m,
                        value: a,
                      };
                      l(this, "labelFormat", C);
                      const w = (e) =>
                        f.formatter
                          ? f.formatter.call(e, e)
                          : f.format
                          ? ((e.text = i.defaultLabelFormatter.call(e, e)),
                            t.format(f.format, e, o))
                          : i.defaultLabelFormatter.call(e, e);
                      s = w.call(C, C);
                      const T = S && S.list;
                      (e.shortenLabel = T
                        ? function () {
                            for (k = 0; k < T.length; k++)
                              if (
                                (h(C, { dateTimeLabelFormat: T[k] }),
                                M.attr({ text: w.call(C, C) }),
                                M.getBBox().width <
                                  i.getSlotWidth(e) - 2 * f.padding)
                              )
                                return;
                            M.attr({ text: "" });
                          }
                        : void 0),
                        b && i._addedPlotLB && e.moveLabel(s, f),
                        n(M) || e.movedLabel
                          ? M &&
                            M.textStr !== s &&
                            !b &&
                            (!M.textWidth ||
                              f.style.width ||
                              M.styles.width ||
                              M.css({ width: null }),
                            M.attr({ text: s }),
                            (M.textPxLength = M.getBBox().width))
                          : ((e.label = M =
                              e.createLabel({ x: 0, y: 0 }, s, f)),
                            (e.rotation = 0));
                    }
                    createLabel(t, e, i) {
                      const s = this.axis,
                        o = s.chart;
                      return (
                        (t =
                          n(e) && i.enabled
                            ? o.renderer
                                .text(e, t.x, t.y, i.useHTML)
                                .add(s.labelGroup)
                            : null) &&
                          (o.styledMode || t.css(d(i.style)),
                          (t.textPxLength = t.getBBox().width)),
                        t
                      );
                    }
                    destroy() {
                      a(this, this.axis);
                    }
                    getPosition(t, e, i, s) {
                      const n = this.axis,
                        a = n.chart,
                        h = (s && a.oldChartHeight) || a.chartHeight;
                      return (
                        ((t = {
                          x: t
                            ? r(
                                n.translate(e + i, void 0, void 0, s) + n.transB
                              )
                            : n.left +
                              n.offset +
                              (n.opposite
                                ? ((s && a.oldChartWidth) || a.chartWidth) -
                                  n.right -
                                  n.left
                                : 0),
                          y: t
                            ? h -
                              n.bottom +
                              n.offset -
                              (n.opposite ? n.height : 0)
                            : r(
                                h -
                                  n.translate(e + i, void 0, void 0, s) -
                                  n.transB
                              ),
                        }).y = o(t.y, -1e5, 1e5)),
                        l(this, "afterGetPosition", { pos: t }),
                        t
                      );
                    }
                    getLabelPosition(t, e, i, o, r, a, h, c) {
                      const d = this.axis,
                        p = d.transA,
                        g =
                          d.isLinked && d.linkedParent
                            ? d.linkedParent.reversed
                            : d.reversed,
                        f = d.staggerLines,
                        m = d.tickRotCorr || { x: 0, y: 0 },
                        x =
                          o || d.reserveSpaceDefault
                            ? 0
                            : -d.labelOffset *
                              ("center" === d.labelAlign ? 0.5 : 1),
                        y = r.distance,
                        b = {};
                      return (
                        (i =
                          0 === d.side
                            ? i.rotation
                              ? -y
                              : -i.getBBox().height
                            : 2 === d.side
                            ? m.y + y
                            : Math.cos(i.rotation * s) *
                              (m.y - i.getBBox(!1, 0).height / 2)),
                        n(r.y) && (i = 0 === d.side && d.horiz ? r.y + i : r.y),
                        (t =
                          t +
                          u(r.x, [0, 1, 0, -1][d.side] * y) +
                          x +
                          m.x -
                          (a && o ? a * p * (g ? -1 : 1) : 0)),
                        (e = e + i - (a && !o ? a * p * (g ? 1 : -1) : 0)),
                        f &&
                          ((o = (h / (c || 1)) % f),
                          d.opposite && (o = f - o - 1),
                          (e += (d.labelOffset / f) * o)),
                        (b.x = t),
                        (b.y = Math.round(e)),
                        l(this, "afterGetLabelPosition", {
                          pos: b,
                          tickmarkOffset: a,
                          index: h,
                        }),
                        b
                      );
                    }
                    getLabelSize() {
                      return this.label
                        ? this.label.getBBox()[
                            this.axis.horiz ? "height" : "width"
                          ]
                        : 0;
                    }
                    getMarkPath(t, e, i, s, o, r) {
                      return r.crispLine(
                        [
                          ["M", t, e],
                          ["L", t + (o ? 0 : -i), e + (o ? i : 0)],
                        ],
                        s
                      );
                    }
                    handleOverflow(t) {
                      const e = this.axis,
                        i = e.options.labels,
                        o = t.x;
                      var r = e.chart.chartWidth,
                        n = e.chart.spacing;
                      const a = u(e.labelLeft, Math.min(e.pos, n[3]));
                      n = u(
                        e.labelRight,
                        Math.max(e.isRadial ? 0 : e.pos + e.len, r - n[1])
                      );
                      const h = this.label,
                        l = this.rotation,
                        c = { left: 0, center: 0.5, right: 1 }[
                          e.labelAlign || h.attr("align")
                        ],
                        d = h.getBBox().width,
                        p = e.getSlotWidth(this),
                        g = {};
                      let f,
                        m = p,
                        x = 1;
                      l || "justify" !== i.overflow
                        ? 0 > l && o - c * d < a
                          ? (f = Math.round(o / Math.cos(l * s) - a))
                          : 0 < l &&
                            o + c * d > n &&
                            (f = Math.round((r - o) / Math.cos(l * s)))
                        : ((r = o + (1 - c) * d),
                          o - c * d < a
                            ? (m = t.x + m * (1 - c) - a)
                            : r > n && ((m = n - t.x + m * c), (x = -1)),
                          (m = Math.min(p, m)),
                          m < p &&
                            "center" === e.labelAlign &&
                            (t.x += x * (p - m - c * (p - Math.min(d, m)))),
                          (d > m ||
                            (e.autoRotation && (h.styles || {}).width)) &&
                            (f = m)),
                        f &&
                          (this.shortenLabel
                            ? this.shortenLabel()
                            : ((g.width = Math.floor(f) + "px"),
                              (i.style || {}).textOverflow ||
                                (g.textOverflow = "ellipsis"),
                              h.css(g)));
                    }
                    moveLabel(t, e) {
                      const i = this;
                      var s = i.label;
                      const o = i.axis;
                      let r = !1;
                      s && s.textStr === t
                        ? ((i.movedLabel = s), (r = !0), delete i.label)
                        : p(o.ticks, function (e) {
                            r ||
                              e.isNew ||
                              e === i ||
                              !e.label ||
                              e.label.textStr !== t ||
                              ((i.movedLabel = e.label),
                              (r = !0),
                              (e.labelPos = i.movedLabel.xy),
                              delete e.label);
                          }),
                        r ||
                          (!i.labelPos && !s) ||
                          ((s = i.labelPos || s.xy),
                          (i.movedLabel = i.createLabel(s, t, e)),
                          i.movedLabel && i.movedLabel.attr({ opacity: 0 }));
                    }
                    render(t, e, i) {
                      var s = this.axis,
                        o = s.horiz,
                        r = this.pos,
                        n = u(this.tickmarkOffset, s.tickmarkOffset);
                      n = (r = this.getPosition(o, r, n, e)).x;
                      const a = r.y;
                      (s =
                        (o && n === s.pos + s.len) || (!o && a === s.pos)
                          ? -1
                          : 1),
                        (o = u(i, this.label && this.label.newOpacity, 1)),
                        (i = u(i, 1)),
                        (this.isActive = !0),
                        this.renderGridLine(e, i, s),
                        this.renderMark(r, i, s),
                        this.renderLabel(r, e, o, t),
                        (this.isNew = !1),
                        l(this, "afterRender");
                    }
                    renderGridLine(t, e, i) {
                      const s = this.axis,
                        o = s.options,
                        r = {},
                        n = this.pos,
                        a = this.type,
                        h = u(this.tickmarkOffset, s.tickmarkOffset),
                        l = s.chart.renderer;
                      let c = this.gridLine,
                        d = o.gridLineWidth,
                        p = o.gridLineColor,
                        g = o.gridLineDashStyle;
                      "minor" === this.type &&
                        ((d = o.minorGridLineWidth),
                        (p = o.minorGridLineColor),
                        (g = o.minorGridLineDashStyle)),
                        c ||
                          (s.chart.styledMode ||
                            ((r.stroke = p),
                            (r["stroke-width"] = d || 0),
                            (r.dashstyle = g)),
                          a || (r.zIndex = 1),
                          t && (e = 0),
                          (this.gridLine = c =
                            l
                              .path()
                              .attr(r)
                              .addClass(
                                "highcharts-" + (a ? a + "-" : "") + "grid-line"
                              )
                              .add(s.gridGroup))),
                        c &&
                          (i = s.getPlotLinePath({
                            value: n + h,
                            lineWidth: c.strokeWidth() * i,
                            force: "pass",
                            old: t,
                            acrossPanes: !1,
                          })) &&
                          c[t || this.isNew ? "attr" : "animate"]({
                            d: i,
                            opacity: e,
                          });
                    }
                    renderMark(t, e, i) {
                      const s = this.axis;
                      var o = s.options;
                      const r = s.chart.renderer,
                        n = this.type,
                        a = s.tickSize(n ? n + "Tick" : "tick"),
                        h = t.x;
                      t = t.y;
                      const l = u(
                        o["minor" !== n ? "tickWidth" : "minorTickWidth"],
                        !n && s.isXAxis ? 1 : 0
                      );
                      o = o["minor" !== n ? "tickColor" : "minorTickColor"];
                      let c = this.mark;
                      const d = !c;
                      a &&
                        (s.opposite && (a[0] = -a[0]),
                        c ||
                          ((this.mark = c =
                            r
                              .path()
                              .addClass(
                                "highcharts-" + (n ? n + "-" : "") + "tick"
                              )
                              .add(s.axisGroup)),
                          s.chart.styledMode ||
                            c.attr({ stroke: o, "stroke-width": l })),
                        c[d ? "attr" : "animate"]({
                          d: this.getMarkPath(
                            h,
                            t,
                            a[0],
                            c.strokeWidth() * i,
                            s.horiz,
                            r
                          ),
                          opacity: e,
                        }));
                    }
                    renderLabel(t, e, i, s) {
                      var o = this.axis;
                      const r = o.horiz,
                        n = o.options,
                        a = this.label,
                        h = n.labels,
                        l = h.step;
                      o = u(this.tickmarkOffset, o.tickmarkOffset);
                      const d = t.x;
                      t = t.y;
                      let p = !0;
                      a &&
                        c(d) &&
                        ((a.xy = t =
                          this.getLabelPosition(d, t, a, r, h, o, s, l)),
                        (this.isFirst && !this.isLast && !n.showFirstLabel) ||
                        (this.isLast && !this.isFirst && !n.showLastLabel)
                          ? (p = !1)
                          : !r ||
                            h.step ||
                            h.rotation ||
                            e ||
                            0 === i ||
                            this.handleOverflow(t),
                        l && s % l && (p = !1),
                        p && c(t.y)
                          ? ((t.opacity = i),
                            a[this.isNewLabel ? "attr" : "animate"](t).show(!0),
                            (this.isNewLabel = !1))
                          : (a.hide(), (this.isNewLabel = !0)));
                    }
                    replaceMovedLabel() {
                      const t = this.label,
                        e = this.axis;
                      t &&
                        !this.isNew &&
                        (t.animate({ opacity: 0 }, void 0, t.destroy),
                        delete this.label),
                        (e.isDirty = !0),
                        (this.label = this.movedLabel),
                        delete this.movedLabel;
                    }
                  };
                }
              ),
              e(
                i,
                "Core/Axis/Axis.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Axis/AxisDefaults.js"],
                  i["Core/Color/Color.js"],
                  i["Core/Defaults.js"],
                  i["Core/Foundation.js"],
                  i["Core/Globals.js"],
                  i["Core/Axis/Tick.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r, n, a) {
                  const { animObject: h } = t,
                    { defaultOptions: l } = s,
                    { registerEventOptions: c } = o,
                    { deg2rad: d } = r,
                    {
                      arrayMax: p,
                      arrayMin: u,
                      clamp: g,
                      correctFloat: f,
                      defined: m,
                      destroyObjectProperties: x,
                      erase: y,
                      error: b,
                      extend: v,
                      fireEvent: S,
                      getClosestDistance: k,
                      insertItem: M,
                      isArray: C,
                      isNumber: w,
                      isString: T,
                      merge: A,
                      normalizeTickInterval: P,
                      objectEach: L,
                      pick: O,
                      relativeLength: E,
                      removeEvent: D,
                      splat: j,
                      syncTimeout: I,
                    } = a,
                    B = (t, e) =>
                      P(
                        e,
                        void 0,
                        void 0,
                        O(
                          t.options.allowDecimals,
                          0.5 > e || void 0 !== t.tickAmount
                        ),
                        !!t.tickAmount
                      );
                  class R {
                    constructor(t, e, i) {
                      (this.zoomEnabled =
                        this.width =
                        this.visible =
                        this.userOptions =
                        this.translationSlope =
                        this.transB =
                        this.transA =
                        this.top =
                        this.ticks =
                        this.tickRotCorr =
                        this.tickPositions =
                        this.tickmarkOffset =
                        this.tickInterval =
                        this.tickAmount =
                        this.side =
                        this.series =
                        this.right =
                        this.positiveValuesOnly =
                        this.pos =
                        this.pointRangePadding =
                        this.pointRange =
                        this.plotLinesAndBandsGroups =
                        this.plotLinesAndBands =
                        this.paddedTicks =
                        this.overlap =
                        this.options =
                        this.offset =
                        this.names =
                        this.minPixelPadding =
                        this.minorTicks =
                        this.minorTickInterval =
                        this.min =
                        this.maxLabelLength =
                        this.max =
                        this.len =
                        this.left =
                        this.labelFormatter =
                        this.labelEdge =
                        this.isLinked =
                        this.index =
                        this.height =
                        this.hasVisibleSeries =
                        this.hasNames =
                        this.eventOptions =
                        this.coll =
                        this.closestPointRange =
                        this.chart =
                        this.bottom =
                        this.alternateBands =
                          void 0),
                        this.init(t, e, i);
                    }
                    init(t, e, i = this.coll) {
                      const s = "xAxis" === i;
                      (this.chart = t),
                        (this.horiz = this.isZAxis || (t.inverted ? !s : s)),
                        (this.isXAxis = s),
                        (this.coll = i),
                        S(this, "init", { userOptions: e }),
                        (this.opposite = O(e.opposite, this.opposite)),
                        (this.side = O(
                          e.side,
                          this.side,
                          this.horiz
                            ? this.opposite
                              ? 0
                              : 2
                            : this.opposite
                            ? 1
                            : 3
                        )),
                        this.setOptions(e);
                      const o = (i = this.options).labels,
                        r = i.type;
                      (this.userOptions = e),
                        (this.minPixelPadding = 0),
                        (this.reversed = O(i.reversed, this.reversed)),
                        (this.visible = i.visible),
                        (this.zoomEnabled = i.zoomEnabled),
                        (this.hasNames =
                          "category" === r || !0 === i.categories),
                        (this.categories =
                          i.categories || (this.hasNames ? [] : void 0)),
                        this.names ||
                          ((this.names = []), (this.names.keys = {})),
                        (this.plotLinesAndBandsGroups = {}),
                        (this.positiveValuesOnly = !!this.logarithmic),
                        (this.isLinked = m(i.linkedTo)),
                        (this.ticks = {}),
                        (this.labelEdge = []),
                        (this.minorTicks = {}),
                        (this.plotLinesAndBands = []),
                        (this.alternateBands = {}),
                        (this.len = 0),
                        (this.minRange = this.userMinRange =
                          i.minRange || i.maxZoom),
                        (this.range = i.range),
                        (this.offset = i.offset || 0),
                        (this.min = this.max = null),
                        (e = O(
                          i.crosshair,
                          j(t.options.tooltip.crosshairs)[s ? 0 : 1]
                        )),
                        (this.crosshair = !0 === e ? {} : e),
                        -1 === t.axes.indexOf(this) &&
                          (s
                            ? t.axes.splice(t.xAxis.length, 0, this)
                            : t.axes.push(this),
                          M(this, t[this.coll])),
                        t.orderItems(this.coll),
                        (this.series = this.series || []),
                        t.inverted &&
                          !this.isZAxis &&
                          s &&
                          void 0 === this.reversed &&
                          (this.reversed = !0),
                        (this.labelRotation = w(o.rotation)
                          ? o.rotation
                          : void 0),
                        c(this, i),
                        S(this, "afterInit");
                    }
                    setOptions(t) {
                      (this.options = A(
                        e.defaultXAxisOptions,
                        "yAxis" === this.coll && e.defaultYAxisOptions,
                        [
                          e.defaultTopAxisOptions,
                          e.defaultRightAxisOptions,
                          e.defaultBottomAxisOptions,
                          e.defaultLeftAxisOptions,
                        ][this.side],
                        A(l[this.coll], t)
                      )),
                        S(this, "afterSetOptions", { userOptions: t });
                    }
                    defaultLabelFormatter(t) {
                      var e = this.axis;
                      ({ numberFormatter: t } = this.chart);
                      const i = w(this.value) ? this.value : NaN,
                        s = e.chart.time,
                        o = this.dateTimeLabelFormat;
                      var r = l.lang;
                      const n = r.numericSymbols;
                      r = r.numericSymbolMagnitude || 1e3;
                      const a = e.logarithmic ? Math.abs(i) : e.tickInterval;
                      let h,
                        c = n && n.length;
                      if (e.categories) h = `${this.value}`;
                      else if (o) h = s.dateFormat(o, i);
                      else if (c && 1e3 <= a)
                        for (; c-- && void 0 === h; )
                          a >= (e = Math.pow(r, c + 1)) &&
                            0 == (10 * i) % e &&
                            null !== n[c] &&
                            0 !== i &&
                            (h = t(i / e, -1) + n[c]);
                      return (
                        void 0 === h &&
                          (h =
                            1e4 <= Math.abs(i)
                              ? t(i, -1)
                              : t(i, -1, void 0, "")),
                        h
                      );
                    }
                    getSeriesExtremes() {
                      const t = this,
                        e = t.chart;
                      let i;
                      S(this, "getSeriesExtremes", null, function () {
                        (t.hasVisibleSeries = !1),
                          (t.dataMin = t.dataMax = t.threshold = null),
                          (t.softThreshold = !t.isXAxis),
                          t.series.forEach(function (s) {
                            if (
                              s.visible ||
                              !e.options.chart.ignoreHiddenSeries
                            ) {
                              var o = s.options;
                              let e,
                                r,
                                n = o.threshold;
                              (t.hasVisibleSeries = !0),
                                t.positiveValuesOnly && 0 >= n && (n = null),
                                t.isXAxis
                                  ? (o = s.xData) &&
                                    o.length &&
                                    ((o = t.logarithmic
                                      ? o.filter((t) => 0 < t)
                                      : o),
                                    (i = s.getXExtremes(o)),
                                    (e = i.min),
                                    (r = i.max),
                                    w(e) ||
                                      e instanceof Date ||
                                      ((o = o.filter(w)),
                                      (i = s.getXExtremes(o)),
                                      (e = i.min),
                                      (r = i.max)),
                                    o.length &&
                                      ((t.dataMin = Math.min(
                                        O(t.dataMin, e),
                                        e
                                      )),
                                      (t.dataMax = Math.max(
                                        O(t.dataMax, r),
                                        r
                                      ))))
                                  : ((s = s.applyExtremes()),
                                    w(s.dataMin) &&
                                      ((e = s.dataMin),
                                      (t.dataMin = Math.min(
                                        O(t.dataMin, e),
                                        e
                                      ))),
                                    w(s.dataMax) &&
                                      ((r = s.dataMax),
                                      (t.dataMax = Math.max(
                                        O(t.dataMax, r),
                                        r
                                      ))),
                                    m(n) && (t.threshold = n),
                                    (!o.softThreshold ||
                                      t.positiveValuesOnly) &&
                                      (t.softThreshold = !1));
                            }
                          });
                      }),
                        S(this, "afterGetSeriesExtremes");
                    }
                    translate(t, e, i, s, o, r) {
                      const n = this.linkedParent || this,
                        a = s && n.old ? n.old.min : n.min;
                      if (!w(a)) return NaN;
                      const h = n.minPixelPadding;
                      o =
                        (n.isOrdinal ||
                          (n.brokenAxis && n.brokenAxis.hasBreaks) ||
                          (n.logarithmic && o)) &&
                        n.lin2val;
                      let l = 1,
                        c = 0;
                      return (
                        (s = s && n.old ? n.old.transA : n.transA) ||
                          (s = n.transA),
                        i && ((l *= -1), (c = n.len)),
                        n.reversed &&
                          ((l *= -1), (c -= l * (n.sector || n.len))),
                        e
                          ? ((r = (t * l + c - h) / s + a),
                            o && (r = n.lin2val(r)))
                          : (o && (t = n.val2lin(t)),
                            (t = l * (t - a) * s),
                            (r =
                              (n.isRadial ? t : f(t)) +
                              c +
                              l * h +
                              (w(r) ? s * r : 0))),
                        r
                      );
                    }
                    toPixels(t, e) {
                      return (
                        this.translate(t, !1, !this.horiz, void 0, !0) +
                        (e ? 0 : this.pos)
                      );
                    }
                    toValue(t, e) {
                      return this.translate(
                        t - (e ? 0 : this.pos),
                        !0,
                        !this.horiz,
                        void 0,
                        !0
                      );
                    }
                    getPlotLinePath(t) {
                      function e(t, e, i) {
                        return (
                          "pass" !== b &&
                            (t < e || t > i) &&
                            (b ? (t = g(t, e, i)) : (x = !0)),
                          t
                        );
                      }
                      const i = this,
                        s = i.chart,
                        o = i.left,
                        r = i.top,
                        n = t.old,
                        a = t.value,
                        h = t.lineWidth,
                        l = (n && s.oldChartHeight) || s.chartHeight,
                        c = (n && s.oldChartWidth) || s.chartWidth,
                        d = i.transB;
                      let p,
                        u,
                        f,
                        m,
                        x,
                        y = t.translatedValue,
                        b = t.force;
                      return (
                        (t = {
                          value: a,
                          lineWidth: h,
                          old: n,
                          force: b,
                          acrossPanes: t.acrossPanes,
                          translatedValue: y,
                        }),
                        S(this, "getPlotLinePath", t, function (t) {
                          (y = O(y, i.translate(a, void 0, void 0, n))),
                            (y = g(y, -1e5, 1e5)),
                            (p = f = Math.round(y + d)),
                            (u = m = Math.round(l - y - d)),
                            w(y)
                              ? i.horiz
                                ? ((u = r),
                                  (m = l - i.bottom),
                                  (p = f = e(p, o, o + i.width)))
                                : ((p = o),
                                  (f = c - i.right),
                                  (u = m = e(u, r, r + i.height)))
                              : ((x = !0), (b = !1)),
                            (t.path =
                              x && !b
                                ? null
                                : s.renderer.crispLine(
                                    [
                                      ["M", p, u],
                                      ["L", f, m],
                                    ],
                                    h || 1
                                  ));
                        }),
                        t.path
                      );
                    }
                    getLinearTickPositions(t, e, i) {
                      const s = f(Math.floor(e / t) * t);
                      i = f(Math.ceil(i / t) * t);
                      const o = [];
                      let r, n;
                      if ((f(s + t) === s && (n = 20), this.single)) return [e];
                      for (
                        e = s;
                        e <= i && (o.push(e), (e = f(e + t, n)) !== r);

                      )
                        r = e;
                      return o;
                    }
                    getMinorTickInterval() {
                      const t = this.options;
                      return !0 === t.minorTicks
                        ? O(t.minorTickInterval, "auto")
                        : !1 === t.minorTicks
                        ? null
                        : t.minorTickInterval;
                    }
                    getMinorTickPositions() {
                      var t = this.options;
                      const e = this.tickPositions,
                        i = this.minorTickInterval;
                      var s = this.pointRangePadding || 0;
                      const o = this.min - s,
                        r = (s = this.max + s) - o;
                      let n = [];
                      if (r && r / i < this.len / 3) {
                        const r = this.logarithmic;
                        if (r)
                          this.paddedTicks.forEach(function (t, e, s) {
                            e &&
                              n.push.apply(
                                n,
                                r.getLogTickPositions(i, s[e - 1], s[e], !0)
                              );
                          });
                        else if (
                          this.dateTime &&
                          "auto" === this.getMinorTickInterval()
                        )
                          n = n.concat(
                            this.getTimeTicks(
                              this.dateTime.normalizeTimeTickInterval(i),
                              o,
                              s,
                              t.startOfWeek
                            )
                          );
                        else
                          for (
                            t = o + ((e[0] - o) % i);
                            t <= s && t !== n[0];
                            t += i
                          )
                            n.push(t);
                      }
                      return 0 !== n.length && this.trimTicks(n), n;
                    }
                    adjustForMinRange() {
                      const t = this.options,
                        e = this.logarithmic;
                      let i = this.min;
                      var s = this.max;
                      let o, r;
                      if (this.isXAxis && void 0 === this.minRange && !e)
                        if (m(t.min) || m(t.max) || m(t.floor) || m(t.ceiling))
                          this.minRange = null;
                        else {
                          var n =
                            k(
                              this.series.map((t) => {
                                var e;
                                return (
                                  (t.xIncrement
                                    ? null === (e = t.xData) || void 0 === e
                                      ? void 0
                                      : e.slice(0, 2)
                                    : t.xData) || []
                                );
                              })
                            ) || 0;
                          this.minRange = Math.min(
                            5 * n,
                            this.dataMax - this.dataMin
                          );
                        }
                      s - i < this.minRange &&
                        ((n = this.dataMax - this.dataMin >= this.minRange),
                        (r = this.minRange),
                        (o = [i - (s = (r - s + i) / 2), O(t.min, i - s)]),
                        n &&
                          (o[2] = e ? e.log2lin(this.dataMin) : this.dataMin),
                        (i = p(o)),
                        (s = [i + r, O(t.max, i + r)]),
                        n &&
                          (s[2] = e ? e.log2lin(this.dataMax) : this.dataMax),
                        (s = u(s)) - i < r &&
                          ((o[0] = s - r),
                          (o[1] = O(t.min, s - r)),
                          (i = p(o)))),
                        (this.min = i),
                        (this.max = s);
                    }
                    getClosest() {
                      let t, e;
                      if (this.categories) e = 1;
                      else {
                        const i = [];
                        this.series.forEach(function (t) {
                          var s;
                          const o = t.closestPointRange,
                            r =
                              t.visible ||
                              !t.chart.options.chart.ignoreHiddenSeries;
                          1 ===
                          (null === (s = t.xData) || void 0 === s
                            ? void 0
                            : s.length)
                            ? i.push(t.xData[0])
                            : !t.noSharedTooltip &&
                              m(o) &&
                              r &&
                              (e = m(e) ? Math.min(e, o) : o);
                        }),
                          i.length && (i.sort((t, e) => t - e), (t = k([i])));
                      }
                      return t && e ? Math.min(t, e) : t || e;
                    }
                    nameToX(t) {
                      const e = C(this.options.categories),
                        i = e ? this.categories : this.names;
                      let s,
                        o = t.options.x;
                      return (
                        (t.series.requireSorting = !1),
                        m(o) ||
                          (o =
                            this.options.uniqueNames && i
                              ? e
                                ? i.indexOf(t.name)
                                : O(i.keys[t.name], -1)
                              : t.series.autoIncrement()),
                        -1 === o ? !e && i && (s = i.length) : (s = o),
                        void 0 !== s
                          ? ((this.names[s] = t.name),
                            (this.names.keys[t.name] = s))
                          : t.x && (s = t.x),
                        s
                      );
                    }
                    updateNames() {
                      const t = this,
                        e = this.names;
                      0 < e.length &&
                        (Object.keys(e.keys).forEach(function (t) {
                          delete e.keys[t];
                        }),
                        (e.length = 0),
                        (this.minRange = this.userMinRange),
                        (this.series || []).forEach(function (e) {
                          (e.xIncrement = null),
                            (e.points && !e.isDirtyData) ||
                              ((t.max = Math.max(t.max, e.xData.length - 1)),
                              e.processData(),
                              e.generatePoints()),
                            e.data.forEach(function (i, s) {
                              let o;
                              i &&
                                i.options &&
                                void 0 !== i.name &&
                                ((o = t.nameToX(i)),
                                void 0 !== o &&
                                  o !== i.x &&
                                  ((i.x = o), (e.xData[s] = o)));
                            });
                        }));
                    }
                    setAxisTranslation() {
                      const t = this,
                        e = t.max - t.min;
                      var i = t.linkedParent;
                      const s = !!t.categories,
                        o = t.isXAxis;
                      let r,
                        n = t.axisPointRange || 0,
                        a = 0,
                        h = 0,
                        l = t.transA;
                      (o || s || n) &&
                        ((r = t.getClosest()),
                        i
                          ? ((a = i.minPointOffset), (h = i.pointRangePadding))
                          : t.series.forEach(function (e) {
                              const i = s
                                  ? 1
                                  : o
                                  ? O(e.options.pointRange, r, 0)
                                  : t.axisPointRange || 0,
                                l = e.options.pointPlacement;
                              (n = Math.max(n, i)),
                                (t.single && !s) ||
                                  ((e = e.is("xrange") ? !o : o),
                                  (a = Math.max(a, e && T(l) ? 0 : i / 2)),
                                  (h = Math.max(h, e && "on" === l ? 0 : i)));
                            }),
                        (i =
                          t.ordinal && t.ordinal.slope && r
                            ? t.ordinal.slope / r
                            : 1),
                        (t.minPointOffset = a *= i),
                        (t.pointRangePadding = h *= i),
                        (t.pointRange = Math.min(n, t.single && s ? 1 : e)),
                        o && r && (t.closestPointRange = r)),
                        (t.translationSlope =
                          t.transA =
                          l =
                            t.staticScale || t.len / (e + h || 1)),
                        (t.transB = t.horiz ? t.left : t.bottom),
                        (t.minPixelPadding = l * a),
                        S(this, "afterSetAxisTranslation");
                    }
                    minFromRange() {
                      return this.max - this.range;
                    }
                    setTickInterval(t) {
                      var e = this.chart;
                      const i = this.logarithmic,
                        s = this.options,
                        o = this.isXAxis,
                        r = this.isLinked,
                        n = s.tickPixelInterval,
                        a = this.categories,
                        h = this.softThreshold;
                      let l,
                        c,
                        d,
                        p = s.maxPadding,
                        u = s.minPadding,
                        g =
                          w(s.tickInterval) && 0 <= s.tickInterval
                            ? s.tickInterval
                            : void 0,
                        x = w(this.threshold) ? this.threshold : null;
                      if (
                        (this.dateTime || a || r || this.getTickAmount(),
                        (c = O(this.userMin, s.min)),
                        (d = O(this.userMax, s.max)),
                        r)
                      ) {
                        this.linkedParent = e[this.coll][s.linkedTo];
                        var y = this.linkedParent.getExtremes();
                        (this.min = O(y.min, y.dataMin)),
                          (this.max = O(y.max, y.dataMax)),
                          s.type !== this.linkedParent.options.type &&
                            b(11, 1, e);
                      } else
                        h &&
                          m(x) &&
                          (this.dataMin >= x
                            ? ((y = x), (u = 0))
                            : this.dataMax <= x && ((l = x), (p = 0))),
                          (this.min = O(c, y, this.dataMin)),
                          (this.max = O(d, l, this.dataMax));
                      if (
                        (i &&
                          (this.positiveValuesOnly &&
                            !t &&
                            0 >=
                              Math.min(this.min, O(this.dataMin, this.min)) &&
                            b(10, 1, e),
                          (this.min = f(i.log2lin(this.min), 16)),
                          (this.max = f(i.log2lin(this.max), 16))),
                        this.range &&
                          m(this.max) &&
                          ((this.userMin =
                            this.min =
                            c =
                              Math.max(this.dataMin, this.minFromRange())),
                          (this.userMax = d = this.max),
                          (this.range = null)),
                        S(this, "foundExtremes"),
                        this.beforePadding && this.beforePadding(),
                        this.adjustForMinRange(),
                        !w(this.userMin) &&
                          w(s.softMin) &&
                          s.softMin < this.min &&
                          (this.min = c = s.softMin),
                        !w(this.userMax) &&
                          w(s.softMax) &&
                          s.softMax > this.max &&
                          (this.max = d = s.softMax),
                        !(
                          a ||
                          this.axisPointRange ||
                          (this.stacking && this.stacking.usePercentage) ||
                          r
                        ) &&
                          m(this.min) &&
                          m(this.max) &&
                          (e = this.max - this.min) &&
                          (!m(c) && u && (this.min -= e * u),
                          !m(d) && p && (this.max += e * p)),
                        !w(this.userMin) &&
                          w(s.floor) &&
                          (this.min = Math.max(this.min, s.floor)),
                        !w(this.userMax) &&
                          w(s.ceiling) &&
                          (this.max = Math.min(this.max, s.ceiling)),
                        h &&
                          m(this.dataMin) &&
                          ((x = x || 0),
                          !m(c) && this.min < x && this.dataMin >= x
                            ? (this.min = this.options.minRange
                                ? Math.min(x, this.max - this.minRange)
                                : x)
                            : !m(d) &&
                              this.max > x &&
                              this.dataMax <= x &&
                              (this.max = this.options.minRange
                                ? Math.max(x, this.min + this.minRange)
                                : x)),
                        w(this.min) &&
                          w(this.max) &&
                          !this.chart.polar &&
                          this.min > this.max &&
                          (m(this.options.min)
                            ? (this.max = this.min)
                            : m(this.options.max) && (this.min = this.max)),
                        (this.tickInterval =
                          this.min === this.max ||
                          void 0 === this.min ||
                          void 0 === this.max
                            ? 1
                            : r &&
                              this.linkedParent &&
                              !g &&
                              n === this.linkedParent.options.tickPixelInterval
                            ? (g = this.linkedParent.tickInterval)
                            : O(
                                g,
                                this.tickAmount
                                  ? (this.max - this.min) /
                                      Math.max(this.tickAmount - 1, 1)
                                  : void 0,
                                a
                                  ? 1
                                  : ((this.max - this.min) * n) /
                                      Math.max(this.len, n)
                              )),
                        o && !t)
                      ) {
                        const t =
                          this.min !== (this.old && this.old.min) ||
                          this.max !== (this.old && this.old.max);
                        this.series.forEach(function (e) {
                          (e.forceCrop = e.forceCropping && e.forceCropping()),
                            e.processData(t);
                        }),
                          S(this, "postProcessData", { hasExtremesChanged: t });
                      }
                      this.setAxisTranslation(),
                        S(this, "initialAxisTranslation"),
                        this.pointRange &&
                          !g &&
                          (this.tickInterval = Math.max(
                            this.pointRange,
                            this.tickInterval
                          )),
                        (t = O(
                          s.minTickInterval,
                          this.dateTime &&
                            !this.series.some((t) => t.noSharedTooltip)
                            ? this.closestPointRange
                            : 0
                        )),
                        !g && this.tickInterval < t && (this.tickInterval = t),
                        this.dateTime ||
                          this.logarithmic ||
                          g ||
                          (this.tickInterval = B(this, this.tickInterval)),
                        this.tickAmount ||
                          (this.tickInterval = this.unsquish()),
                        this.setTickPositions();
                    }
                    setTickPositions() {
                      var t = this.options;
                      const e = t.tickPositions,
                        i = t.tickPositioner;
                      var s = this.getMinorTickInterval(),
                        o = this.hasVerticalPanning(),
                        r = "colorAxis" === this.coll;
                      const n = (r || !o) && t.startOnTick;
                      let a;
                      if (
                        ((o = (r || !o) && t.endOnTick),
                        (r = []),
                        (this.tickmarkOffset =
                          this.categories &&
                          "between" === t.tickmarkPlacement &&
                          1 === this.tickInterval
                            ? 0.5
                            : 0),
                        (this.minorTickInterval =
                          "auto" === s && this.tickInterval
                            ? this.tickInterval / t.minorTicksPerMajor
                            : s),
                        (this.single =
                          this.min === this.max &&
                          m(this.min) &&
                          !this.tickAmount &&
                          (parseInt(this.min, 10) === this.min ||
                            !1 !== t.allowDecimals)),
                        e)
                      )
                        r = e.slice();
                      else if (w(this.min) && w(this.max)) {
                        if (
                          (this.ordinal && this.ordinal.positions) ||
                          !(
                            (this.max - this.min) / this.tickInterval >
                            Math.max(2 * this.len, 200)
                          )
                        )
                          if (this.dateTime)
                            r = this.getTimeTicks(
                              this.dateTime.normalizeTimeTickInterval(
                                this.tickInterval,
                                t.units
                              ),
                              this.min,
                              this.max,
                              t.startOfWeek,
                              this.ordinal && this.ordinal.positions,
                              this.closestPointRange,
                              !0
                            );
                          else if (this.logarithmic)
                            r = this.logarithmic.getLogTickPositions(
                              this.tickInterval,
                              this.min,
                              this.max
                            );
                          else
                            for (
                              s = t = this.tickInterval;
                              s <= 2 * t &&
                              ((r = this.getLinearTickPositions(
                                this.tickInterval,
                                this.min,
                                this.max
                              )),
                              this.tickAmount && r.length > this.tickAmount);

                            )
                              this.tickInterval = B(this, (s *= 1.1));
                        else (r = [this.min, this.max]), b(19, !1, this.chart);
                        r.length > this.len &&
                          (r = [r[0], r[r.length - 1]])[0] === r[1] &&
                          (r.length = 1),
                          i &&
                            ((this.tickPositions = r),
                            (a = i.apply(this, [this.min, this.max])) &&
                              (r = a));
                      }
                      (this.tickPositions = r),
                        (this.paddedTicks = r.slice(0)),
                        this.trimTicks(r, n, o),
                        !this.isLinked &&
                          w(this.min) &&
                          w(this.max) &&
                          (this.single &&
                            2 > r.length &&
                            !this.categories &&
                            !this.series.some(
                              (t) =>
                                t.is("heatmap") &&
                                "between" === t.options.pointPlacement
                            ) &&
                            ((this.min -= 0.5), (this.max += 0.5)),
                          e || a || this.adjustTickAmount()),
                        S(this, "afterSetTickPositions");
                    }
                    trimTicks(t, e, i) {
                      const s = t[0],
                        o = t[t.length - 1],
                        r = (!this.isOrdinal && this.minPointOffset) || 0;
                      if ((S(this, "trimTicks"), !this.isLinked)) {
                        if (e && -1 / 0 !== s) this.min = s;
                        else for (; this.min - r > t[0]; ) t.shift();
                        if (i) this.max = o;
                        else for (; this.max + r < t[t.length - 1]; ) t.pop();
                        0 === t.length &&
                          m(s) &&
                          !this.options.tickPositions &&
                          t.push((o + s) / 2);
                      }
                    }
                    alignToOthers() {
                      const t = this,
                        e = [this],
                        i = t.options,
                        s =
                          "yAxis" === this.coll &&
                          this.chart.options.chart.alignThresholds,
                        o = [];
                      let r;
                      if (
                        ((t.thresholdAlignment = void 0),
                        ((!1 !== this.chart.options.chart.alignTicks &&
                          i.alignTicks) ||
                          s) &&
                          !1 !== i.startOnTick &&
                          !1 !== i.endOnTick &&
                          !t.logarithmic)
                      ) {
                        const i = (t) => {
                            const { horiz: e, options: i } = t;
                            return [
                              e ? i.left : i.top,
                              i.width,
                              i.height,
                              i.pane,
                            ].join();
                          },
                          s = i(this);
                        this.chart[this.coll].forEach(function (o) {
                          const { series: n } = o;
                          n.length &&
                            n.some((t) => t.visible) &&
                            o !== t &&
                            i(o) === s &&
                            ((r = !0), e.push(o));
                        });
                      }
                      if (r && s) {
                        e.forEach((e) => {
                          (e = e.getThresholdAlignment(t)), w(e) && o.push(e);
                        });
                        const i =
                          1 < o.length
                            ? o.reduce((t, e) => t + e, 0) / o.length
                            : void 0;
                        e.forEach((t) => {
                          t.thresholdAlignment = i;
                        });
                      }
                      return r;
                    }
                    getThresholdAlignment(t) {
                      if (
                        ((!w(this.dataMin) ||
                          (this !== t &&
                            this.series.some(
                              (t) => t.isDirty || t.isDirtyData
                            ))) &&
                          this.getSeriesExtremes(),
                        w(this.threshold))
                      )
                        return (
                          (t = g(
                            (this.threshold - (this.dataMin || 0)) /
                              ((this.dataMax || 0) - (this.dataMin || 0)),
                            0,
                            1
                          )),
                          this.options.reversed && (t = 1 - t),
                          t
                        );
                    }
                    getTickAmount() {
                      const t = this.options,
                        e = t.tickPixelInterval;
                      let i = t.tickAmount;
                      !m(t.tickInterval) &&
                        !i &&
                        this.len < e &&
                        !this.isRadial &&
                        !this.logarithmic &&
                        t.startOnTick &&
                        t.endOnTick &&
                        (i = 2),
                        !i &&
                          this.alignToOthers() &&
                          (i = Math.ceil(this.len / e) + 1),
                        4 > i && ((this.finalTickAmt = i), (i = 5)),
                        (this.tickAmount = i);
                    }
                    adjustTickAmount() {
                      const t = this,
                        {
                          finalTickAmt: e,
                          max: i,
                          min: s,
                          options: o,
                          tickPositions: r,
                          tickAmount: n,
                          thresholdAlignment: a,
                        } = t,
                        h = r && r.length;
                      var l = O(t.threshold, t.softThreshold ? 0 : null),
                        c = t.tickInterval;
                      let d;
                      if (
                        (w(a) &&
                          ((d =
                            0.5 > a
                              ? Math.ceil(a * (n - 1))
                              : Math.floor(a * (n - 1))),
                          o.reversed && (d = n - 1 - d)),
                        t.hasData() && w(s) && w(i))
                      ) {
                        const a = () => {
                          (t.transA *= (h - 1) / (n - 1)),
                            (t.min = o.startOnTick ? r[0] : Math.min(s, r[0])),
                            (t.max = o.endOnTick
                              ? r[r.length - 1]
                              : Math.max(i, r[r.length - 1]));
                        };
                        if (w(d) && w(t.threshold)) {
                          for (
                            ;
                            r[d] !== l ||
                            r.length !== n ||
                            r[0] > s ||
                            r[r.length - 1] < i;

                          ) {
                            for (
                              r.length = 0, r.push(t.threshold);
                              r.length < n;

                            )
                              void 0 === r[d] || r[d] > t.threshold
                                ? r.unshift(f(r[0] - c))
                                : r.push(f(r[r.length - 1] + c));
                            if (c > 8 * t.tickInterval) break;
                            c *= 2;
                          }
                          a();
                        } else if (h < n) {
                          for (; r.length < n; )
                            r.length % 2 || s === l
                              ? r.push(f(r[r.length - 1] + c))
                              : r.unshift(f(r[0] - c));
                          a();
                        }
                        if (m(e)) {
                          for (c = l = r.length; c--; )
                            ((3 === e && 1 == c % 2) ||
                              (2 >= e && 0 < c && c < l - 1)) &&
                              r.splice(c, 1);
                          t.finalTickAmt = void 0;
                        }
                      }
                    }
                    setScale() {
                      let t = !1,
                        e = !1;
                      this.series.forEach(function (i) {
                        (t = t || i.isDirtyData || i.isDirty),
                          (e = e || (i.xAxis && i.xAxis.isDirty) || !1);
                      }),
                        this.setAxisSize();
                      const i = this.len !== (this.old && this.old.len);
                      i ||
                      t ||
                      e ||
                      this.isLinked ||
                      this.forceRedraw ||
                      this.userMin !== (this.old && this.old.userMin) ||
                      this.userMax !== (this.old && this.old.userMax) ||
                      this.alignToOthers()
                        ? (this.stacking &&
                            (this.stacking.resetStacks(),
                            this.stacking.buildStacks()),
                          (this.forceRedraw = !1),
                          this.userMinRange || (this.minRange = void 0),
                          this.getSeriesExtremes(),
                          this.setTickInterval(),
                          this.isDirty ||
                            (this.isDirty =
                              i ||
                              this.min !== (this.old && this.old.min) ||
                              this.max !== (this.old && this.old.max)))
                        : this.stacking && this.stacking.cleanStacks(),
                        t &&
                          this.panningState &&
                          (this.panningState.isDirty = !0),
                        S(this, "afterSetScale");
                    }
                    setExtremes(t, e, i, s, o) {
                      const r = this,
                        n = r.chart;
                      (i = O(i, !0)),
                        r.series.forEach(function (t) {
                          delete t.kdTree;
                        }),
                        (o = v(o, { min: t, max: e })),
                        S(r, "setExtremes", o, function () {
                          (r.userMin = t),
                            (r.userMax = e),
                            (r.eventArgs = o),
                            i && n.redraw(s);
                        });
                    }
                    zoom(t, e) {
                      const i = this,
                        s = this.dataMin,
                        o = this.dataMax,
                        r = this.options,
                        n = Math.min(s, O(r.min, s)),
                        a = Math.max(o, O(r.max, o));
                      return (
                        S(
                          this,
                          "zoom",
                          (t = { newMin: t, newMax: e }),
                          function (t) {
                            let e = t.newMin,
                              r = t.newMax;
                            (e === i.min && r === i.max) ||
                              (i.allowZoomOutside ||
                                (m(s) && (e < n && (e = n), e > a && (e = a)),
                                m(o) && (r < n && (r = n), r > a && (r = a))),
                              (i.displayBtn = void 0 !== e || void 0 !== r),
                              i.setExtremes(e, r, !1, void 0, {
                                trigger: "zoom",
                              })),
                              (t.zoomed = !0);
                          }
                        ),
                        t.zoomed
                      );
                    }
                    setAxisSize() {
                      const t = this.chart;
                      var e = this.options;
                      const i = e.offsets || [0, 0, 0, 0],
                        s = this.horiz,
                        o = (this.width = Math.round(
                          E(O(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
                        )),
                        r = (this.height = Math.round(
                          E(
                            O(e.height, t.plotHeight - i[0] + i[2]),
                            t.plotHeight
                          )
                        )),
                        n = (this.top = Math.round(
                          E(O(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
                        ));
                      (e = this.left =
                        Math.round(
                          E(
                            O(e.left, t.plotLeft + i[3]),
                            t.plotWidth,
                            t.plotLeft
                          )
                        )),
                        (this.bottom = t.chartHeight - r - n),
                        (this.right = t.chartWidth - o - e),
                        (this.len = Math.max(s ? o : r, 0)),
                        (this.pos = s ? e : n);
                    }
                    getExtremes() {
                      const t = this.logarithmic;
                      return {
                        min: t ? f(t.lin2log(this.min)) : this.min,
                        max: t ? f(t.lin2log(this.max)) : this.max,
                        dataMin: this.dataMin,
                        dataMax: this.dataMax,
                        userMin: this.userMin,
                        userMax: this.userMax,
                      };
                    }
                    getThreshold(t) {
                      var e = this.logarithmic;
                      const i = e ? e.lin2log(this.min) : this.min;
                      return (
                        (e = e ? e.lin2log(this.max) : this.max),
                        null === t || -1 / 0 === t
                          ? (t = i)
                          : 1 / 0 === t
                          ? (t = e)
                          : i > t
                          ? (t = i)
                          : e < t && (t = e),
                        this.translate(t, 0, 1, 0, 1)
                      );
                    }
                    autoLabelAlign(t) {
                      const e = (O(t, 0) - 90 * this.side + 720) % 360;
                      return (
                        S(
                          this,
                          "autoLabelAlign",
                          (t = { align: "center" }),
                          function (t) {
                            15 < e && 165 > e
                              ? (t.align = "right")
                              : 195 < e && 345 > e && (t.align = "left");
                          }
                        ),
                        t.align
                      );
                    }
                    tickSize(t) {
                      const e = this.options,
                        i = O(
                          e["tick" === t ? "tickWidth" : "minorTickWidth"],
                          "tick" === t && this.isXAxis && !this.categories
                            ? 1
                            : 0
                        );
                      let s,
                        o = e["tick" === t ? "tickLength" : "minorTickLength"];
                      return (
                        i &&
                          o &&
                          ("inside" === e[t + "Position"] && (o = -o),
                          (s = [o, i])),
                        S(this, "afterTickSize", (t = { tickSize: s })),
                        t.tickSize
                      );
                    }
                    labelMetrics() {
                      const t = this.chart.renderer;
                      var e = this.ticks;
                      return (
                        (e = e[Object.keys(e)[0]] || {}),
                        this.chart.renderer.fontMetrics(
                          e.label || e.movedLabel || t.box
                        )
                      );
                    }
                    unsquish() {
                      const t = this.options.labels;
                      var e = this.horiz;
                      const i = this.tickInterval,
                        s =
                          this.len /
                          (((this.categories ? 1 : 0) + this.max - this.min) /
                            i),
                        o = t.rotation,
                        r = 0.75 * this.labelMetrics().h,
                        n = Math.max(this.max - this.min, 0),
                        a = function (t) {
                          let e = t / (s || 1);
                          return (
                            (e = 1 < e ? Math.ceil(e) : 1),
                            e * i > n &&
                              1 / 0 !== t &&
                              1 / 0 !== s &&
                              n &&
                              (e = Math.ceil(n / i)),
                            f(e * i)
                          );
                        };
                      let h,
                        l,
                        c = i,
                        p = Number.MAX_VALUE;
                      if (e) {
                        if (
                          (t.staggerLines ||
                            (w(o)
                              ? (l = [o])
                              : s < t.autoRotationLimit &&
                                (l = t.autoRotation)),
                          l)
                        ) {
                          let t;
                          for (const i of l)
                            (i === o || (i && -90 <= i && 90 >= i)) &&
                              ((e = a(Math.abs(r / Math.sin(d * i)))),
                              (t = e + Math.abs(i / 360)),
                              t < p && ((p = t), (h = i), (c = e)));
                        }
                      } else c = a(r);
                      return (
                        (this.autoRotation = l),
                        (this.labelRotation = O(h, w(o) ? o : 0)),
                        t.step ? i : c
                      );
                    }
                    getSlotWidth(t) {
                      const e = this.chart,
                        i = this.horiz,
                        s = this.options.labels,
                        o = Math.max(
                          this.tickPositions.length - (this.categories ? 0 : 1),
                          1
                        ),
                        r = e.margin[3];
                      if (t && w(t.slotWidth)) return t.slotWidth;
                      if (i && 2 > s.step)
                        return s.rotation
                          ? 0
                          : ((this.staggerLines || 1) * this.len) / o;
                      if (!i) {
                        if (void 0 !== (t = s.style.width))
                          return parseInt(String(t), 10);
                        if (r) return r - e.spacing[3];
                      }
                      return 0.33 * e.chartWidth;
                    }
                    renderUnsquish() {
                      const t = this.chart,
                        e = t.renderer,
                        i = this.tickPositions,
                        s = this.ticks,
                        o = this.options.labels,
                        r = o.style,
                        n = this.horiz,
                        a = this.getSlotWidth();
                      var h = Math.max(1, Math.round(a - 2 * o.padding));
                      const l = {},
                        c = this.labelMetrics(),
                        d = r.textOverflow;
                      let p,
                        u,
                        g = 0;
                      if (
                        (T(o.rotation) || (l.rotation = o.rotation || 0),
                        i.forEach(function (t) {
                          (t = s[t]).movedLabel && t.replaceMovedLabel(),
                            t &&
                              t.label &&
                              t.label.textPxLength > g &&
                              (g = t.label.textPxLength);
                        }),
                        (this.maxLabelLength = g),
                        this.autoRotation)
                      )
                        g > h && g > c.h
                          ? (l.rotation = this.labelRotation)
                          : (this.labelRotation = 0);
                      else if (a && ((p = h), !d))
                        for (u = "clip", h = i.length; !n && h--; ) {
                          var f = i[h];
                          (f = s[f].label) &&
                            (f.styles && "ellipsis" === f.styles.textOverflow
                              ? f.css({ textOverflow: "clip" })
                              : f.textPxLength > a &&
                                f.css({ width: a + "px" }),
                            f.getBBox().height >
                              this.len / i.length - (c.h - c.f) &&
                              (f.specificTextOverflow = "ellipsis"));
                        }
                      l.rotation &&
                        ((p =
                          g > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : g),
                        d || (u = "ellipsis")),
                        (this.labelAlign =
                          o.align || this.autoLabelAlign(this.labelRotation)) &&
                          (l.align = this.labelAlign),
                        i.forEach(function (t) {
                          const e = (t = s[t]) && t.label,
                            i = r.width,
                            o = {};
                          e &&
                            (e.attr(l),
                            t.shortenLabel
                              ? t.shortenLabel()
                              : p &&
                                !i &&
                                "nowrap" !== r.whiteSpace &&
                                (p < e.textPxLength ||
                                  "SPAN" === e.element.tagName)
                              ? ((o.width = p + "px"),
                                d ||
                                  (o.textOverflow =
                                    e.specificTextOverflow || u),
                                e.css(o))
                              : e.styles &&
                                e.styles.width &&
                                !o.width &&
                                !i &&
                                e.css({ width: null }),
                            delete e.specificTextOverflow,
                            (t.rotation = l.rotation));
                        }, this),
                        (this.tickRotCorr = e.rotCorr(
                          c.b,
                          this.labelRotation || 0,
                          0 !== this.side
                        ));
                    }
                    hasData() {
                      return (
                        this.series.some(function (t) {
                          return t.hasData();
                        }) ||
                        (this.options.showEmpty && m(this.min) && m(this.max))
                      );
                    }
                    addTitle(t) {
                      const e = this.chart.renderer,
                        i = this.horiz,
                        s = this.opposite,
                        o = this.options.title,
                        r = this.chart.styledMode;
                      let n;
                      this.axisTitle ||
                        ((n = o.textAlign) ||
                          (n = (
                            i
                              ? { low: "left", middle: "center", high: "right" }
                              : {
                                  low: s ? "right" : "left",
                                  middle: "center",
                                  high: s ? "left" : "right",
                                }
                          )[o.align]),
                        (this.axisTitle = e
                          .text(o.text || "", 0, 0, o.useHTML)
                          .attr({ zIndex: 7, rotation: o.rotation, align: n })
                          .addClass("highcharts-axis-title")),
                        r || this.axisTitle.css(A(o.style)),
                        this.axisTitle.add(this.axisGroup),
                        (this.axisTitle.isNew = !0)),
                        r ||
                          o.style.width ||
                          this.isRadial ||
                          this.axisTitle.css({ width: this.len + "px" }),
                        this.axisTitle[t ? "show" : "hide"](t);
                    }
                    generateTick(t) {
                      const e = this.ticks;
                      e[t] ? e[t].addLabel() : (e[t] = new n(this, t));
                    }
                    getOffset() {
                      const t = this,
                        {
                          chart: e,
                          horiz: i,
                          options: s,
                          side: o,
                          ticks: r,
                          tickPositions: n,
                          coll: a,
                          axisParent: h,
                        } = t,
                        l = e.renderer,
                        c = e.inverted && !t.isZAxis ? [1, 0, 3, 2][o] : o;
                      var d = t.hasData();
                      const p = s.title;
                      var u = s.labels;
                      const g = w(s.crossing);
                      var f = e.axisOffset;
                      const x = e.clipOffset,
                        y = [-1, 1, 1, -1][o],
                        b = s.className;
                      let v,
                        k,
                        M = 0;
                      var C = 0;
                      let T = 0;
                      if (
                        ((t.showAxis = v = d || s.showEmpty),
                        (t.staggerLines =
                          (t.horiz && u.staggerLines) || void 0),
                        !t.axisGroup)
                      ) {
                        const e = (t, e, i) =>
                          l
                            .g(t)
                            .attr({ zIndex: i })
                            .addClass(
                              `highcharts-${a.toLowerCase()}${e} ` +
                                (this.isRadial
                                  ? `highcharts-radial-axis${e} `
                                  : "") +
                                (b || "")
                            )
                            .add(h);
                        (t.gridGroup = e("grid", "-grid", s.gridZIndex)),
                          (t.axisGroup = e("axis", "", s.zIndex)),
                          (t.labelGroup = e(
                            "axis-labels",
                            "-labels",
                            u.zIndex
                          ));
                      }
                      d || t.isLinked
                        ? (n.forEach(function (e) {
                            t.generateTick(e);
                          }),
                          t.renderUnsquish(),
                          (t.reserveSpaceDefault =
                            0 === o ||
                            2 === o ||
                            { 1: "left", 3: "right" }[o] === t.labelAlign),
                          O(
                            u.reserveSpace,
                            !g && null,
                            "center" === t.labelAlign || null,
                            t.reserveSpaceDefault
                          ) &&
                            n.forEach(function (t) {
                              T = Math.max(r[t].getLabelSize(), T);
                            }),
                          t.staggerLines && (T *= t.staggerLines),
                          (t.labelOffset = T * (t.opposite ? -1 : 1)))
                        : L(r, function (t, e) {
                            t.destroy(), delete r[e];
                          }),
                        p &&
                          p.text &&
                          !1 !== p.enabled &&
                          (t.addTitle(v),
                          v &&
                            !g &&
                            !1 !== p.reserveSpace &&
                            ((t.titleOffset = M =
                              t.axisTitle.getBBox()[i ? "height" : "width"]),
                            (k = p.offset),
                            (C = m(k) ? 0 : O(p.margin, i ? 5 : 10)))),
                        t.renderLine(),
                        (t.offset =
                          y * O(s.offset, f[o] ? f[o] + (s.margin || 0) : 0)),
                        (t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }),
                        (d =
                          0 === o
                            ? -t.labelMetrics().h
                            : 2 === o
                            ? t.tickRotCorr.y
                            : 0),
                        (C = Math.abs(T) + C),
                        T &&
                          (C =
                            C -
                            d +
                            y *
                              (i
                                ? O(u.y, t.tickRotCorr.y + y * u.distance)
                                : O(u.x, y * u.distance))),
                        (t.axisTitleMargin = O(k, C)),
                        t.getMaxLabelDimensions &&
                          (t.maxLabelDimensions = t.getMaxLabelDimensions(
                            r,
                            n
                          )),
                        "colorAxis" !== a &&
                          ((u = this.tickSize("tick")),
                          (f[o] = Math.max(
                            f[o],
                            (t.axisTitleMargin || 0) + M + y * t.offset,
                            C,
                            n && n.length && u ? u[0] + y * t.offset : 0
                          )),
                          (f =
                            !t.axisLine || s.offset
                              ? 0
                              : 2 * Math.floor(t.axisLine.strokeWidth() / 2)),
                          (x[c] = Math.max(x[c], f))),
                        S(this, "afterGetOffset");
                    }
                    getLinePath(t) {
                      const e = this.chart,
                        i = this.opposite;
                      var s = this.offset;
                      const o = this.horiz,
                        r = this.left + (i ? this.width : 0) + s;
                      return (
                        (s =
                          e.chartHeight -
                          this.bottom -
                          (i ? this.height : 0) +
                          s),
                        i && (t *= -1),
                        e.renderer.crispLine(
                          [
                            ["M", o ? this.left : r, o ? s : this.top],
                            [
                              "L",
                              o ? e.chartWidth - this.right : r,
                              o ? s : e.chartHeight - this.bottom,
                            ],
                          ],
                          t
                        )
                      );
                    }
                    renderLine() {
                      this.axisLine ||
                        ((this.axisLine = this.chart.renderer
                          .path()
                          .addClass("highcharts-axis-line")
                          .add(this.axisGroup)),
                        this.chart.styledMode ||
                          this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7,
                          }));
                    }
                    getTitlePosition(t) {
                      var e = this.horiz,
                        i = this.left;
                      const s = this.top;
                      var o = this.len;
                      const r = this.options.title,
                        n = e ? i : s,
                        a = this.opposite,
                        h = this.offset,
                        l = r.x,
                        c = r.y,
                        d = this.chart.renderer.fontMetrics(t);
                      return (
                        (t = t
                          ? Math.max(t.getBBox(!1, 0).height - d.h - 1, 0)
                          : 0),
                        (o = {
                          low: n + (e ? 0 : o),
                          middle: n + o / 2,
                          high: n + (e ? o : 0),
                        }[r.align]),
                        (i =
                          (e ? s + this.height : i) +
                          (e ? 1 : -1) *
                            (a ? -1 : 1) *
                            (this.axisTitleMargin || 0) +
                          [-t, t, d.f, -t][this.side]),
                        (e = {
                          x: e ? o + l : i + (a ? this.width : 0) + h + l,
                          y: e ? i + c - (a ? this.height : 0) + h : o + c,
                        }),
                        S(this, "afterGetTitlePosition", { titlePosition: e }),
                        e
                      );
                    }
                    renderMinorTick(t, e) {
                      const i = this.minorTicks;
                      i[t] || (i[t] = new n(this, t, "minor")),
                        e && i[t].isNew && i[t].render(null, !0),
                        i[t].render(null, !1, 1);
                    }
                    renderTick(t, e, i) {
                      const s = this.ticks;
                      (!this.isLinked ||
                        (t >= this.min && t <= this.max) ||
                        (this.grid && this.grid.isColumn)) &&
                        (s[t] || (s[t] = new n(this, t)),
                        i && s[t].isNew && s[t].render(e, !0, -1),
                        s[t].render(e));
                    }
                    render() {
                      const t = this,
                        e = t.chart,
                        i = t.logarithmic,
                        s = t.options,
                        o = t.isLinked,
                        a = t.tickPositions,
                        l = t.axisTitle,
                        c = t.ticks,
                        d = t.minorTicks,
                        p = t.alternateBands,
                        u = s.stackLabels,
                        g = s.alternateGridColor;
                      var f = s.crossing;
                      const m = t.tickmarkOffset,
                        x = t.axisLine,
                        y = t.showAxis,
                        b = h(e.renderer.globalAnimation);
                      let v, k;
                      if (
                        ((t.labelEdge.length = 0),
                        (t.overlap = !1),
                        [c, d, p].forEach(function (t) {
                          L(t, function (t) {
                            t.isActive = !1;
                          });
                        }),
                        w(f))
                      ) {
                        const i = this.isXAxis ? e.yAxis[0] : e.xAxis[0],
                          s = [1, -1, -1, 1][this.side];
                        i &&
                          ((f = i.toPixels(f, !0)),
                          t.horiz && (f = i.len - f),
                          (t.offset = s * f));
                      }
                      if (t.hasData() || o) {
                        const o = t.chart.hasRendered && t.old && w(t.old.min);
                        t.minorTickInterval &&
                          !t.categories &&
                          t.getMinorTickPositions().forEach(function (e) {
                            t.renderMinorTick(e, o);
                          }),
                          a.length &&
                            (a.forEach(function (e, i) {
                              t.renderTick(e, i, o);
                            }),
                            m &&
                              (0 === t.min || t.single) &&
                              (c[-1] || (c[-1] = new n(t, -1, null, !0)),
                              c[-1].render(-1))),
                          g &&
                            a.forEach(function (s, o) {
                              (k =
                                void 0 !== a[o + 1] ? a[o + 1] + m : t.max - m),
                                0 == o % 2 &&
                                  s < t.max &&
                                  k <= t.max + (e.polar ? -m : m) &&
                                  (p[s] || (p[s] = new r.PlotLineOrBand(t)),
                                  (v = s + m),
                                  (p[s].options = {
                                    from: i ? i.lin2log(v) : v,
                                    to: i ? i.lin2log(k) : k,
                                    color: g,
                                    className: "highcharts-alternate-grid",
                                  }),
                                  p[s].render(),
                                  (p[s].isActive = !0));
                            }),
                          t._addedPlotLB ||
                            ((t._addedPlotLB = !0),
                            (s.plotLines || [])
                              .concat(s.plotBands || [])
                              .forEach(function (e) {
                                t.addPlotBandOrLine(e);
                              }));
                      }
                      [c, d, p].forEach(function (t) {
                        const i = [],
                          s = b.duration;
                        L(t, function (t, e) {
                          t.isActive ||
                            (t.render(e, !1, 0), (t.isActive = !1), i.push(e));
                        }),
                          I(
                            function () {
                              let e = i.length;
                              for (; e--; )
                                t[i[e]] &&
                                  !t[i[e]].isActive &&
                                  (t[i[e]].destroy(), delete t[i[e]]);
                            },
                            t !== p && e.hasRendered && s ? s : 0
                          );
                      }),
                        x &&
                          (x[x.isPlaced ? "animate" : "attr"]({
                            d: this.getLinePath(x.strokeWidth()),
                          }),
                          (x.isPlaced = !0),
                          x[y ? "show" : "hide"](y)),
                        l &&
                          y &&
                          (l[l.isNew ? "attr" : "animate"](
                            t.getTitlePosition(l)
                          ),
                          (l.isNew = !1)),
                        u &&
                          u.enabled &&
                          t.stacking &&
                          t.stacking.renderStackTotals(),
                        (t.old = {
                          len: t.len,
                          max: t.max,
                          min: t.min,
                          transA: t.transA,
                          userMax: t.userMax,
                          userMin: t.userMin,
                        }),
                        (t.isDirty = !1),
                        S(this, "afterRender");
                    }
                    redraw() {
                      this.visible &&
                        (this.render(),
                        this.plotLinesAndBands.forEach(function (t) {
                          t.render();
                        })),
                        this.series.forEach(function (t) {
                          t.isDirty = !0;
                        });
                    }
                    getKeepProps() {
                      return this.keepProps || R.keepProps;
                    }
                    destroy(t) {
                      const e = this,
                        i = e.plotLinesAndBands,
                        s = this.eventOptions;
                      if (
                        (S(this, "destroy", { keepEvents: t }),
                        t || D(e),
                        [e.ticks, e.minorTicks, e.alternateBands].forEach(
                          function (t) {
                            x(t);
                          }
                        ),
                        i)
                      )
                        for (t = i.length; t--; ) i[t].destroy();
                      "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                        .split(" ")
                        .forEach(function (t) {
                          e[t] && (e[t] = e[t].destroy());
                        });
                      for (const t in e.plotLinesAndBandsGroups)
                        e.plotLinesAndBandsGroups[t] =
                          e.plotLinesAndBandsGroups[t].destroy();
                      L(e, function (t, i) {
                        -1 === e.getKeepProps().indexOf(i) && delete e[i];
                      }),
                        (this.eventOptions = s);
                    }
                    drawCrosshair(t, e) {
                      const s = this.crosshair;
                      var o = O(s && s.snap, !0);
                      const r = this.chart;
                      let n,
                        a = this.cross;
                      if (
                        (S(this, "drawCrosshair", { e: t, point: e }),
                        t || (t = this.cross && this.cross.e),
                        s && !1 !== (m(e) || !o))
                      ) {
                        if (
                          (o
                            ? m(e) &&
                              (n = O(
                                "colorAxis" !== this.coll
                                  ? e.crosshairPos
                                  : null,
                                this.isXAxis ? e.plotX : this.len - e.plotY
                              ))
                            : (n =
                                t &&
                                (this.horiz
                                  ? t.chartX - this.pos
                                  : this.len - t.chartY + this.pos)),
                          m(n))
                        ) {
                          var h = {
                            value: e && (this.isXAxis ? e.x : O(e.stackY, e.y)),
                            translatedValue: n,
                          };
                          r.polar &&
                            v(h, {
                              isCrosshair: !0,
                              chartX: t && t.chartX,
                              chartY: t && t.chartY,
                              point: e,
                            }),
                            (h = this.getPlotLinePath(h) || null);
                        }
                        if (!m(h)) return void this.hideCrosshair();
                        (o = this.categories && !this.isRadial),
                          a ||
                            ((this.cross = a =
                              r.renderer
                                .path()
                                .addClass(
                                  "highcharts-crosshair highcharts-crosshair-" +
                                    (o ? "category " : "thin ") +
                                    (s.className || "")
                                )
                                .attr({ zIndex: O(s.zIndex, 2) })
                                .add()),
                            r.styledMode ||
                              (a
                                .attr({
                                  stroke:
                                    s.color ||
                                    (o
                                      ? i
                                          .parse("#ccd3ff")
                                          .setOpacity(0.25)
                                          .get()
                                      : "#cccccc"),
                                  "stroke-width": O(s.width, 1),
                                })
                                .css({ "pointer-events": "none" }),
                              s.dashStyle &&
                                a.attr({ dashstyle: s.dashStyle }))),
                          a.show().attr({ d: h }),
                          o &&
                            !s.width &&
                            a.attr({ "stroke-width": this.transA }),
                          (this.cross.e = t);
                      } else this.hideCrosshair();
                      S(this, "afterDrawCrosshair", { e: t, point: e });
                    }
                    hideCrosshair() {
                      this.cross && this.cross.hide(),
                        S(this, "afterHideCrosshair");
                    }
                    hasVerticalPanning() {
                      const t = this.chart.options.chart.panning;
                      return !!(t && t.enabled && /y/.test(t.type));
                    }
                    update(t, e) {
                      const i = this.chart;
                      (t = A(this.userOptions, t)),
                        this.destroy(!0),
                        this.init(i, t),
                        (i.isDirtyBox = !0),
                        O(e, !0) && i.redraw();
                    }
                    remove(t) {
                      const e = this.chart,
                        i = this.coll,
                        s = this.series;
                      let o = s.length;
                      for (; o--; ) s[o] && s[o].remove(!1);
                      y(e.axes, this),
                        y(e[i] || [], this),
                        e.orderItems(i),
                        this.destroy(),
                        (e.isDirtyBox = !0),
                        O(t, !0) && e.redraw();
                    }
                    setTitle(t, e) {
                      this.update({ title: t }, e);
                    }
                    setCategories(t, e) {
                      this.update({ categories: t }, e);
                    }
                  }
                  return (
                    (R.defaultOptions = e.defaultXAxisOptions),
                    (R.keepProps =
                      "coll extKey hcEvents names series userMax userMin".split(
                        " "
                      )),
                    R
                  );
                }
              ),
              e(
                i,
                "Core/Axis/DateTimeAxis.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const {
                    addEvent: e,
                    getMagnitude: i,
                    normalizeTickInterval: s,
                    timeUnits: o,
                  } = t;
                  var r;
                  return (
                    (function (r) {
                      function n() {
                        return this.chart.time.getTimeTicks.apply(
                          this.chart.time,
                          arguments
                        );
                      }
                      function a(t) {
                        "datetime" !== t.userOptions.type
                          ? (this.dateTime = void 0)
                          : this.dateTime || (this.dateTime = new l(this));
                      }
                      const h = [];
                      r.compose = function (i) {
                        return (
                          t.pushUnique(h, i) &&
                            (i.keepProps.push("dateTime"),
                            (i.prototype.getTimeTicks = n),
                            e(i, "init", a)),
                          i
                        );
                      };
                      class l {
                        constructor(t) {
                          this.axis = t;
                        }
                        normalizeTimeTickInterval(t, e) {
                          const r = e || [
                            [
                              "millisecond",
                              [1, 2, 5, 10, 20, 25, 50, 100, 200, 500],
                            ],
                            ["second", [1, 2, 5, 10, 15, 30]],
                            ["minute", [1, 2, 5, 10, 15, 30]],
                            ["hour", [1, 2, 3, 4, 6, 8, 12]],
                            ["day", [1, 2]],
                            ["week", [1, 2]],
                            ["month", [1, 2, 3, 4, 6]],
                            ["year", null],
                          ];
                          e = r[r.length - 1];
                          let n,
                            a = o[e[0]],
                            h = e[1];
                          for (
                            n = 0;
                            n < r.length &&
                            ((e = r[n]),
                            (a = o[e[0]]),
                            (h = e[1]),
                            !(
                              r[n + 1] &&
                              t <= (a * h[h.length - 1] + o[r[n + 1][0]]) / 2
                            ));
                            n++
                          );
                          return (
                            a === o.year && t < 5 * a && (h = [1, 2, 5]),
                            {
                              unitRange: a,
                              count: (t = s(
                                t / a,
                                h,
                                "year" === e[0] ? Math.max(i(t / a), 1) : 1
                              )),
                              unitName: e[0],
                            }
                          );
                        }
                        getXDateFormat(t, e) {
                          const { axis: i } = this,
                            s = i.chart.time;
                          return i.closestPointRange
                            ? s.getDateFormat(
                                i.closestPointRange,
                                t,
                                i.options.startOfWeek,
                                e
                              ) || s.resolveDTLFormat(e.year).main
                            : s.resolveDTLFormat(e.day).main;
                        }
                      }
                      r.Additions = l;
                    })(r || (r = {})),
                    r
                  );
                }
              ),
              e(
                i,
                "Core/Axis/LogarithmicAxis.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const { addEvent: e, normalizeTickInterval: i, pick: s } = t;
                  var o;
                  return (
                    (function (o) {
                      function r(t) {
                        let e = this.logarithmic;
                        "logarithmic" !== t.userOptions.type
                          ? (this.logarithmic = void 0)
                          : e || (this.logarithmic = new h(this));
                      }
                      function n() {
                        const t = this.logarithmic;
                        t &&
                          ((this.lin2val = function (e) {
                            return t.lin2log(e);
                          }),
                          (this.val2lin = function (e) {
                            return t.log2lin(e);
                          }));
                      }
                      const a = [];
                      o.compose = function (i) {
                        return (
                          t.pushUnique(a, i) &&
                            (i.keepProps.push("logarithmic"),
                            e(i, "init", r),
                            e(i, "afterInit", n)),
                          i
                        );
                      };
                      class h {
                        constructor(t) {
                          this.axis = t;
                        }
                        getLogTickPositions(t, e, o, r) {
                          const n = this.axis;
                          var a = n.len,
                            h = n.options;
                          let l = [];
                          if (
                            (r || (this.minorAutoInterval = void 0), 0.5 <= t)
                          )
                            (t = Math.round(t)),
                              (l = n.getLinearTickPositions(t, e, o));
                          else if (0.08 <= t) {
                            let i, s, n, c, d;
                            for (
                              h = Math.floor(e),
                                a =
                                  0.3 < t
                                    ? [1, 2, 4]
                                    : 0.15 < t
                                    ? [1, 2, 4, 6, 8]
                                    : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                              h < o + 1 && !d;
                              h++
                            )
                              for (s = a.length, i = 0; i < s && !d; i++)
                                (n = this.log2lin(this.lin2log(h) * a[i])),
                                  n > e &&
                                    (!r || c <= o) &&
                                    void 0 !== c &&
                                    l.push(c),
                                  c > o && (d = !0),
                                  (c = n);
                          } else
                            (e = this.lin2log(e)),
                              (o = this.lin2log(o)),
                              (t = r
                                ? n.getMinorTickInterval()
                                : h.tickInterval),
                              (t = s(
                                "auto" === t ? null : t,
                                this.minorAutoInterval,
                                ((h.tickPixelInterval / (r ? 5 : 1)) *
                                  (o - e)) /
                                  ((r ? a / n.tickPositions.length : a) || 1)
                              )),
                              (t = i(t)),
                              (l = n
                                .getLinearTickPositions(t, e, o)
                                .map(this.log2lin)),
                              r || (this.minorAutoInterval = t / 5);
                          return r || (n.tickInterval = t), l;
                        }
                        lin2log(t) {
                          return Math.pow(10, t);
                        }
                        log2lin(t) {
                          return Math.log(t) / Math.LN10;
                        }
                      }
                      o.Additions = h;
                    })(o || (o = {})),
                    o
                  );
                }
              ),
              e(
                i,
                "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const { erase: e, extend: i, isNumber: s } = t;
                  var o;
                  return (
                    (function (o) {
                      function r(t) {
                        return this.addPlotBandOrLine(t, "plotBands");
                      }
                      function n(t, e) {
                        const i = this.userOptions;
                        let s = new u(this, t);
                        if ((this.visible && (s = s.render()), s)) {
                          if (
                            (this._addedPlotLB ||
                              ((this._addedPlotLB = !0),
                              (i.plotLines || [])
                                .concat(i.plotBands || [])
                                .forEach((t) => {
                                  this.addPlotBandOrLine(t);
                                })),
                            e)
                          ) {
                            const s = i[e] || [];
                            s.push(t), (i[e] = s);
                          }
                          this.plotLinesAndBands.push(s);
                        }
                        return s;
                      }
                      function a(t) {
                        return this.addPlotBandOrLine(t, "plotLines");
                      }
                      function h(t, e, i = this.options) {
                        const o = this.getPlotLinePath({
                            value: e,
                            force: !0,
                            acrossPanes: i.acrossPanes,
                          }),
                          r = [],
                          n = this.horiz;
                        let a;
                        if (
                          ((e =
                            !s(this.min) ||
                            !s(this.max) ||
                            (t < this.min && e < this.min) ||
                            (t > this.max && e > this.max)),
                          (t = this.getPlotLinePath({
                            value: t,
                            force: !0,
                            acrossPanes: i.acrossPanes,
                          })),
                          (i = 1),
                          t && o)
                        )
                          for (
                            e && ((a = t.toString() === o.toString()), (i = 0)),
                              e = 0;
                            e < t.length;
                            e += 2
                          ) {
                            const s = t[e],
                              h = t[e + 1],
                              l = o[e],
                              c = o[e + 1];
                            ("M" !== s[0] && "L" !== s[0]) ||
                              ("M" !== h[0] && "L" !== h[0]) ||
                              ("M" !== l[0] && "L" !== l[0]) ||
                              ("M" !== c[0] && "L" !== c[0]) ||
                              (n && l[1] === s[1]
                                ? ((l[1] += i), (c[1] += i))
                                : n ||
                                  l[2] !== s[2] ||
                                  ((l[2] += i), (c[2] += i)),
                              r.push(
                                ["M", s[1], s[2]],
                                ["L", h[1], h[2]],
                                ["L", c[1], c[2]],
                                ["L", l[1], l[2]],
                                ["Z"]
                              )),
                              (r.isFlat = a);
                          }
                        return r;
                      }
                      function l(t) {
                        this.removePlotBandOrLine(t);
                      }
                      function c(t) {
                        const i = this.plotLinesAndBands,
                          s = this.options,
                          o = this.userOptions;
                        if (i) {
                          let r = i.length;
                          for (; r--; ) i[r].id === t && i[r].destroy();
                          [
                            s.plotLines || [],
                            o.plotLines || [],
                            s.plotBands || [],
                            o.plotBands || [],
                          ].forEach(function (i) {
                            for (r = i.length; r--; )
                              (i[r] || {}).id === t && e(i, i[r]);
                          });
                        }
                      }
                      function d(t) {
                        this.removePlotBandOrLine(t);
                      }
                      const p = [];
                      let u;
                      o.compose = function (e, s) {
                        return (
                          u || (u = e),
                          t.pushUnique(p, s) &&
                            i(s.prototype, {
                              addPlotBand: r,
                              addPlotLine: a,
                              addPlotBandOrLine: n,
                              getPlotBandPath: h,
                              removePlotBand: l,
                              removePlotLine: d,
                              removePlotBandOrLine: c,
                            }),
                          s
                        );
                      };
                    })(o || (o = {})),
                    o
                  );
                }
              ),
              e(
                i,
                "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
                [
                  i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e) {
                  const {
                    arrayMax: i,
                    arrayMin: s,
                    defined: o,
                    destroyObjectProperties: r,
                    erase: n,
                    fireEvent: a,
                    merge: h,
                    objectEach: l,
                    pick: c,
                  } = e;
                  class d {
                    static compose(e) {
                      return t.compose(d, e);
                    }
                    constructor(t, e) {
                      (this.axis = t),
                        e && ((this.options = e), (this.id = e.id));
                    }
                    render() {
                      a(this, "render");
                      const t = this,
                        e = t.axis,
                        i = e.horiz;
                      var s = e.logarithmic;
                      const r = t.options,
                        n = r.color,
                        d = c(r.zIndex, 0),
                        p = r.events,
                        u = {},
                        g = e.chart.renderer;
                      let f = r.label,
                        m = t.label,
                        x = r.to,
                        y = r.from,
                        b = r.value,
                        v = t.svgElem;
                      var S = [];
                      const k = o(y) && o(x);
                      S = o(b);
                      const M = !v,
                        C = {
                          class:
                            "highcharts-plot-" +
                            (k ? "band " : "line ") +
                            (r.className || ""),
                        };
                      let w = k ? "bands" : "lines";
                      if (
                        (s &&
                          ((y = s.log2lin(y)),
                          (x = s.log2lin(x)),
                          (b = s.log2lin(b))),
                        e.chart.styledMode ||
                          (S
                            ? ((C.stroke = n || "#999999"),
                              (C["stroke-width"] = c(r.width, 1)),
                              r.dashStyle && (C.dashstyle = r.dashStyle))
                            : k &&
                              ((C.fill = n || "#e6e9ff"),
                              r.borderWidth &&
                                ((C.stroke = r.borderColor),
                                (C["stroke-width"] = r.borderWidth)))),
                        (u.zIndex = d),
                        (w += "-" + d),
                        (s = e.plotLinesAndBandsGroups[w]) ||
                          (e.plotLinesAndBandsGroups[w] = s =
                            g
                              .g("plot-" + w)
                              .attr(u)
                              .add()),
                        M && (t.svgElem = v = g.path().attr(C).add(s)),
                        S)
                      )
                        S = e.getPlotLinePath({
                          value: b,
                          lineWidth: v.strokeWidth(),
                          acrossPanes: r.acrossPanes,
                        });
                      else {
                        if (!k) return;
                        S = e.getPlotBandPath(y, x, r);
                      }
                      return (
                        !t.eventsAdded &&
                          p &&
                          (l(p, function (e, i) {
                            v.on(i, function (e) {
                              p[i].apply(t, [e]);
                            });
                          }),
                          (t.eventsAdded = !0)),
                        (M || !v.d) && S && S.length
                          ? v.attr({ d: S })
                          : v &&
                            (S
                              ? (v.show(), v.animate({ d: S }))
                              : v.d &&
                                (v.hide(), m && (t.label = m = m.destroy()))),
                        f &&
                        (o(f.text) || o(f.formatter)) &&
                        S &&
                        S.length &&
                        0 < e.width &&
                        0 < e.height &&
                        !S.isFlat
                          ? ((f = h(
                              {
                                align: i && k && "center",
                                x: i ? !k && 4 : 10,
                                verticalAlign: !i && k && "middle",
                                y: i ? (k ? 16 : 10) : k ? 6 : -4,
                                rotation: i && !k && 90,
                              },
                              f
                            )),
                            this.renderLabel(f, S, k, d))
                          : m && m.hide(),
                        t
                      );
                    }
                    renderLabel(t, e, o, r) {
                      const n = this.axis;
                      var a = n.chart.renderer;
                      let l = this.label;
                      l ||
                        ((this.label = l =
                          a
                            .text(this.getLabelText(t), 0, 0, t.useHTML)
                            .attr({
                              align: t.textAlign || t.align,
                              rotation: t.rotation,
                              class:
                                "highcharts-plot-" +
                                (o ? "band" : "line") +
                                "-label " +
                                (t.className || ""),
                              zIndex: r,
                            })
                            .add()),
                        n.chart.styledMode ||
                          l.css(
                            h(
                              { fontSize: "0.8em", textOverflow: "ellipsis" },
                              t.style
                            )
                          )),
                        (r = e.xBounds || [
                          e[0][1],
                          e[1][1],
                          o ? e[2][1] : e[0][1],
                        ]),
                        (e = e.yBounds || [
                          e[0][2],
                          e[1][2],
                          o ? e[2][2] : e[0][2],
                        ]),
                        (o = s(r)),
                        (a = s(e)),
                        l.align(t, !1, {
                          x: o,
                          y: a,
                          width: i(r) - o,
                          height: i(e) - a,
                        }),
                        (l.alignValue && "left" !== l.alignValue) ||
                          ((t = t.clip ? n.width : n.chart.chartWidth),
                          l.css({
                            width:
                              (90 === l.rotation
                                ? n.height - (l.alignAttr.y - n.top)
                                : t - (l.alignAttr.x - n.left)) + "px",
                          })),
                        l.show(!0);
                    }
                    getLabelText(t) {
                      return o(t.formatter) ? t.formatter.call(this) : t.text;
                    }
                    destroy() {
                      n(this.axis.plotLinesAndBands, this),
                        delete this.axis,
                        r(this);
                    }
                  }
                  return d;
                }
              ),
              e(
                i,
                "Core/Tooltip.js",
                [
                  i["Core/Templating.js"],
                  i["Core/Globals.js"],
                  i["Core/Renderer/RendererUtilities.js"],
                  i["Core/Renderer/RendererRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o) {
                  const { format: r } = t,
                    { doc: n, isSafari: a } = e,
                    { distribute: h } = i,
                    {
                      addEvent: l,
                      clamp: c,
                      css: d,
                      discardElement: p,
                      extend: u,
                      fireEvent: g,
                      isArray: f,
                      isNumber: m,
                      isString: x,
                      merge: y,
                      pick: b,
                      splat: v,
                      syncTimeout: S,
                    } = o;
                  class k {
                    constructor(t, e) {
                      (this.allowShared = !0),
                        (this.container = void 0),
                        (this.crosshairs = []),
                        (this.distance = 0),
                        (this.isHidden = !0),
                        (this.isSticky = !1),
                        (this.now = {}),
                        (this.options = {}),
                        (this.outside = !1),
                        (this.chart = t),
                        this.init(t, e);
                    }
                    bodyFormatter(t) {
                      return t.map(function (t) {
                        const e = t.series.tooltipOptions;
                        return (
                          e[(t.point.formatPrefix || "point") + "Formatter"] ||
                          t.point.tooltipFormatter
                        ).call(
                          t.point,
                          e[(t.point.formatPrefix || "point") + "Format"] || ""
                        );
                      });
                    }
                    cleanSplit(t) {
                      this.chart.series.forEach(function (e) {
                        const i = e && e.tt;
                        i &&
                          (!i.isActive || t
                            ? (e.tt = i.destroy())
                            : (i.isActive = !1));
                      });
                    }
                    defaultFormatter(t) {
                      const e = this.points || v(this);
                      let i;
                      return (
                        (i = [t.tooltipFooterHeaderFormatter(e[0])]),
                        (i = i.concat(t.bodyFormatter(e))),
                        i.push(t.tooltipFooterHeaderFormatter(e[0], !0)),
                        i
                      );
                    }
                    destroy() {
                      this.label && (this.label = this.label.destroy()),
                        this.split &&
                          (this.cleanSplit(!0),
                          this.tt && (this.tt = this.tt.destroy())),
                        this.renderer &&
                          ((this.renderer = this.renderer.destroy()),
                          p(this.container)),
                        o.clearTimeout(this.hideTimer),
                        o.clearTimeout(this.tooltipTimeout);
                    }
                    getAnchor(t, e) {
                      var i = this.chart;
                      const s = i.pointer,
                        o = i.inverted,
                        r = i.plotTop;
                      if (
                        ((i = i.plotLeft),
                        (t = v(t))[0].series &&
                          t[0].series.yAxis &&
                          !t[0].series.yAxis.options.reversedStacks &&
                          (t = t.slice().reverse()),
                        this.followPointer && e)
                      )
                        void 0 === e.chartX && (e = s.normalize(e)),
                          (t = [e.chartX - i, e.chartY - r]);
                      else if (t[0].tooltipPos) t = t[0].tooltipPos;
                      else {
                        let s = 0,
                          n = 0;
                        t.forEach(function (t) {
                          (t = t.pos(!0)) && ((s += t[0]), (n += t[1]));
                        }),
                          (s /= t.length),
                          (n /= t.length),
                          this.shared &&
                            1 < t.length &&
                            e &&
                            (o ? (s = e.chartX) : (n = e.chartY)),
                          (t = [s - i, n - r]);
                      }
                      return t.map(Math.round);
                    }
                    getClassName(t, e, i) {
                      const s = t.series,
                        o = s.options;
                      return [
                        this.options.className,
                        "highcharts-label",
                        i && "highcharts-tooltip-header",
                        e ? "highcharts-tooltip-box" : "highcharts-tooltip",
                        !i &&
                          "highcharts-color-" + b(t.colorIndex, s.colorIndex),
                        o && o.className,
                      ]
                        .filter(x)
                        .join(" ");
                    }
                    getLabel() {
                      const t = this,
                        i = this.chart.styledMode,
                        o = this.options,
                        r = this.split && this.allowShared,
                        n =
                          o.style.pointerEvents ||
                          (this.shouldStickOnContact() ? "auto" : "none");
                      let a,
                        h = this.chart.renderer;
                      if (this.label) {
                        var l = !this.label.hasClass("highcharts-label");
                        ((!r && l) || (r && !l)) && this.destroy();
                      }
                      if (!this.label) {
                        if (this.outside) {
                          l = this.chart.options.chart.style;
                          const t = s.getRendererType();
                          (this.container = a = e.doc.createElement("div")),
                            (a.className = "highcharts-tooltip-container"),
                            d(a, {
                              position: "absolute",
                              top: "1px",
                              pointerEvents: n,
                              zIndex: Math.max(
                                this.options.style.zIndex || 0,
                                ((l && l.zIndex) || 0) + 3
                              ),
                            }),
                            e.doc.body.appendChild(a),
                            (this.renderer = h =
                              new t(a, 0, 0, l, void 0, void 0, h.styledMode));
                        }
                        if (
                          (r
                            ? (this.label = h.g("tooltip"))
                            : ((this.label = h
                                .label(
                                  "",
                                  0,
                                  0,
                                  o.shape,
                                  void 0,
                                  void 0,
                                  o.useHTML,
                                  void 0,
                                  "tooltip"
                                )
                                .attr({
                                  padding: o.padding,
                                  r: o.borderRadius,
                                })),
                              i ||
                                this.label
                                  .attr({
                                    fill: o.backgroundColor,
                                    "stroke-width": o.borderWidth || 0,
                                  })
                                  .css(o.style)
                                  .css({ pointerEvents: n })),
                          t.outside)
                        ) {
                          const e = this.label,
                            { xSetter: i, ySetter: s } = e;
                          (e.xSetter = function (s) {
                            i.call(e, t.distance), (a.style.left = s + "px");
                          }),
                            (e.ySetter = function (i) {
                              s.call(e, t.distance), (a.style.top = i + "px");
                            });
                        }
                        this.label.attr({ zIndex: 8 }).shadow(o.shadow).add();
                      }
                      return this.label;
                    }
                    getPlayingField() {
                      const { body: t, documentElement: e } = n,
                        { chart: i, distance: s, outside: o } = this;
                      return {
                        width: o
                          ? Math.max(
                              t.scrollWidth,
                              e.scrollWidth,
                              t.offsetWidth,
                              e.offsetWidth,
                              e.clientWidth
                            ) -
                            2 * s
                          : i.chartWidth,
                        height: o
                          ? Math.max(
                              t.scrollHeight,
                              e.scrollHeight,
                              t.offsetHeight,
                              e.offsetHeight,
                              e.clientHeight
                            )
                          : i.chartHeight,
                      };
                    }
                    getPosition(t, e, i) {
                      const s = this.chart,
                        o = this.distance,
                        r = {},
                        n = (s.inverted && i.h) || 0,
                        a = this.outside;
                      var h = this.getPlayingField();
                      const l = h.width,
                        c = h.height,
                        d = s.pointer.getChartPosition();
                      h = (r) => {
                        const n = "x" === r;
                        return [r, n ? l : c, n ? t : e].concat(
                          a
                            ? [
                                n ? t * d.scaleX : e * d.scaleY,
                                n
                                  ? d.left -
                                    o +
                                    (i.plotX + s.plotLeft) * d.scaleX
                                  : d.top -
                                    o +
                                    (i.plotY + s.plotTop) * d.scaleY,
                                0,
                                n ? l : c,
                              ]
                            : [
                                n ? t : e,
                                n ? i.plotX + s.plotLeft : i.plotY + s.plotTop,
                                n ? s.plotLeft : s.plotTop,
                                n
                                  ? s.plotLeft + s.plotWidth
                                  : s.plotTop + s.plotHeight,
                              ]
                        );
                      };
                      let p,
                        u = h("y"),
                        g = h("x");
                      (h = !!i.negative),
                        !s.polar &&
                          s.hoverSeries &&
                          s.hoverSeries.yAxis &&
                          s.hoverSeries.yAxis.reversed &&
                          (h = !h);
                      const f =
                          !this.followPointer &&
                          b(i.ttBelow, !s.inverted === h),
                        m = function (t, e, i, s, h, l, c) {
                          const p = a
                              ? "y" === t
                                ? o * d.scaleY
                                : o * d.scaleX
                              : o,
                            u = (i - s) / 2,
                            g = s < h - o,
                            m = h + o + s < e,
                            x = h - p - i + u;
                          if (((h = h + p - u), f && m)) r[t] = h;
                          else if (!f && g) r[t] = x;
                          else if (g)
                            r[t] = Math.min(c - s, 0 > x - n ? x : x - n);
                          else {
                            if (!m) return !1;
                            r[t] = Math.max(l, h + n + i > e ? h : h + n);
                          }
                        },
                        x = function (t, e, i, s, n) {
                          let a;
                          return (
                            n < o || n > e - o
                              ? (a = !1)
                              : (r[t] =
                                  n < i / 2
                                    ? 1
                                    : n > e - s / 2
                                    ? e - s - 2
                                    : n - i / 2),
                            a
                          );
                        },
                        y = function (t) {
                          const e = u;
                          (u = g), (g = e), (p = t);
                        },
                        v = function () {
                          !1 !== m.apply(0, u)
                            ? !1 !== x.apply(0, g) || p || (y(!0), v())
                            : p
                            ? (r.x = r.y = 0)
                            : (y(!0), v());
                        };
                      return (s.inverted || 1 < this.len) && y(), v(), r;
                    }
                    hide(t) {
                      const e = this;
                      o.clearTimeout(this.hideTimer),
                        (t = b(t, this.options.hideDelay)),
                        this.isHidden ||
                          (this.hideTimer = S(function () {
                            e.getLabel().fadeOut(t ? void 0 : t),
                              (e.isHidden = !0);
                          }, t));
                    }
                    init(t, e) {
                      (this.chart = t),
                        (this.options = e),
                        (this.crosshairs = []),
                        (this.now = { x: 0, y: 0 }),
                        (this.isHidden = !0),
                        (this.split = e.split && !t.inverted && !t.polar),
                        (this.shared = e.shared || this.split),
                        (this.outside = b(
                          e.outside,
                          !(!t.scrollablePixelsX && !t.scrollablePixelsY)
                        ));
                    }
                    shouldStickOnContact(t) {
                      return !(
                        this.followPointer ||
                        !this.options.stickOnContact ||
                        (t &&
                          !this.chart.pointer.inClass(
                            t.target,
                            "highcharts-tooltip"
                          ))
                      );
                    }
                    move(t, e, i, s) {
                      const r = this,
                        n = r.now,
                        a =
                          !1 !== r.options.animation &&
                          !r.isHidden &&
                          (1 < Math.abs(t - n.x) || 1 < Math.abs(e - n.y)),
                        h = r.followPointer || 1 < r.len;
                      u(n, {
                        x: a ? (2 * n.x + t) / 3 : t,
                        y: a ? (n.y + e) / 2 : e,
                        anchorX: h ? void 0 : a ? (2 * n.anchorX + i) / 3 : i,
                        anchorY: h ? void 0 : a ? (n.anchorY + s) / 2 : s,
                      }),
                        r.getLabel().attr(n),
                        r.drawTracker(),
                        a &&
                          (o.clearTimeout(this.tooltipTimeout),
                          (this.tooltipTimeout = setTimeout(function () {
                            r && r.move(t, e, i, s);
                          }, 32)));
                    }
                    refresh(t, e) {
                      const i = this.chart,
                        s = this.options,
                        n = i.pointer,
                        a = v(t),
                        h = a[0],
                        l = [];
                      var c = s.format,
                        d = s.formatter || this.defaultFormatter;
                      const p = this.shared,
                        u = i.styledMode;
                      let m = {};
                      if (s.enabled && h.series) {
                        o.clearTimeout(this.hideTimer),
                          (this.allowShared = !(
                            !f(t) &&
                            t.series &&
                            t.series.noSharedTooltip
                          )),
                          (this.followPointer =
                            !this.split &&
                            h.series.tooltipOptions.followPointer);
                        var y = (t = this.getAnchor(t, e))[0],
                          S = t[1];
                        if (
                          (p && this.allowShared
                            ? (n.applyInactiveState(a),
                              a.forEach(function (t) {
                                t.setState("hover"), l.push(t.getLabelConfig());
                              }),
                              (m = h.getLabelConfig()),
                              (m.points = l))
                            : (m = h.getLabelConfig()),
                          (this.len = l.length),
                          (c = x(c) ? r(c, m, i) : d.call(m, this)),
                          (d = h.series),
                          (this.distance = b(d.tooltipOptions.distance, 16)),
                          !1 === c)
                        )
                          this.hide();
                        else {
                          if (this.split && this.allowShared)
                            this.renderSplit(c, a);
                          else {
                            let o = y,
                              r = S;
                            if (
                              (e &&
                                n.isDirectTouch &&
                                ((o = e.chartX - i.plotLeft),
                                (r = e.chartY - i.plotTop)),
                              !i.polar &&
                                !1 !== d.options.clip &&
                                !a.some(
                                  (t) =>
                                    n.isDirectTouch ||
                                    t.series.shouldShowTooltip(o, r)
                                ))
                            )
                              return void this.hide();
                            (e = this.getLabel()),
                              (s.style.width && !u) ||
                                e.css({
                                  width:
                                    (this.outside
                                      ? this.getPlayingField()
                                      : i.spacingBox
                                    ).width + "px",
                                }),
                              e.attr({ text: c && c.join ? c.join("") : c }),
                              e.addClass(this.getClassName(h), !0),
                              u ||
                                e.attr({
                                  stroke:
                                    s.borderColor ||
                                    h.color ||
                                    d.color ||
                                    "#666666",
                                }),
                              this.updatePosition({
                                plotX: y,
                                plotY: S,
                                negative: h.negative,
                                ttBelow: h.ttBelow,
                                h: t[2] || 0,
                              });
                          }
                          this.isHidden &&
                            this.label &&
                            this.label.attr({ opacity: 1 }).show(),
                            (this.isHidden = !1);
                        }
                        g(this, "refresh");
                      }
                    }
                    renderSplit(t, e) {
                      function i(t, e, i, o, r = !0) {
                        return (
                          i
                            ? ((e = L ? 0 : I),
                              (t = c(
                                t - o / 2,
                                T.left,
                                T.right - o - (s.outside ? O : 0)
                              )))
                            : ((e -= D),
                              (t = c(
                                (t = r ? t - o - M : t + M),
                                r ? t : T.left,
                                T.right
                              ))),
                          { x: t, y: e }
                        );
                      }
                      const s = this,
                        {
                          chart: o,
                          chart: {
                            chartWidth: r,
                            chartHeight: l,
                            plotHeight: d,
                            plotLeft: p,
                            plotTop: g,
                            pointer: f,
                            scrollablePixelsY: m = 0,
                            scrollablePixelsX: y,
                            scrollingContainer: {
                              scrollLeft: v,
                              scrollTop: S,
                            } = { scrollLeft: 0, scrollTop: 0 },
                            styledMode: k,
                          },
                          distance: M,
                          options: C,
                          options: { positioner: w },
                        } = s,
                        T =
                          s.outside && "number" != typeof y
                            ? n.documentElement.getBoundingClientRect()
                            : { left: v, right: v + r, top: S, bottom: S + l },
                        A = s.getLabel(),
                        P = this.renderer || o.renderer,
                        L = !(!o.xAxis[0] || !o.xAxis[0].opposite),
                        { left: O, top: E } = f.getChartPosition();
                      let D = g + S,
                        j = 0,
                        I = d - m;
                      x(t) && (t = [!1, t]),
                        (t = t
                          .slice(0, e.length + 1)
                          .reduce(function (t, o, r) {
                            if (!1 !== o && "" !== o) {
                              const f = (r = e[r - 1] || {
                                isHeader: !0,
                                plotX: e[0].plotX,
                                plotY: d,
                                series: {},
                              }).isHeader;
                              var n,
                                a = f ? s : r.series;
                              {
                                var h = r;
                                o = o.toString();
                                var l = a.tt;
                                const { isHeader: t, series: e } = h;
                                l ||
                                  ((l = {
                                    padding: C.padding,
                                    r: C.borderRadius,
                                  }),
                                  k ||
                                    ((l.fill = C.backgroundColor),
                                    (l["stroke-width"] =
                                      null !== (n = C.borderWidth) &&
                                      void 0 !== n
                                        ? n
                                        : 1)),
                                  (l = P.label(
                                    "",
                                    0,
                                    0,
                                    C[t ? "headerShape" : "shape"],
                                    void 0,
                                    void 0,
                                    C.useHTML
                                  )
                                    .addClass(s.getClassName(h, !0, t))
                                    .attr(l)
                                    .add(A))),
                                  (l.isActive = !0),
                                  l.attr({ text: o }),
                                  k ||
                                    l
                                      .css(C.style)
                                      .attr({
                                        stroke:
                                          C.borderColor ||
                                          h.color ||
                                          e.color ||
                                          "#333333",
                                      }),
                                  (n = l);
                              }
                              (n = a.tt = n),
                                (a = (h = n.getBBox()).width + n.strokeWidth()),
                                f && ((j = h.height), (I += j), L && (D -= j));
                              {
                                const {
                                  isHeader: t,
                                  plotX: e = 0,
                                  plotY: i = 0,
                                  series: s,
                                } = r;
                                if (t) {
                                  o = p + e;
                                  var u = g + d / 2;
                                } else {
                                  const { xAxis: t, yAxis: r } = s;
                                  (o = t.pos + c(e, -M, t.len + M)),
                                    s.shouldShowTooltip(0, r.pos - g + i, {
                                      ignoreX: !0,
                                    }) && (u = r.pos + i);
                                }
                                u = {
                                  anchorX: (o = c(o, T.left - M, T.right + M)),
                                  anchorY: u,
                                };
                              }
                              const { anchorX: m, anchorY: x } = u;
                              "number" == typeof x
                                ? ((u = h.height + 1),
                                  (h = w ? w.call(s, a, u, r) : i(m, x, f, a)),
                                  t.push({
                                    align: w ? 0 : void 0,
                                    anchorX: m,
                                    anchorY: x,
                                    boxWidth: a,
                                    point: r,
                                    rank: b(h.rank, f ? 1 : 0),
                                    size: u,
                                    target: h.y,
                                    tt: n,
                                    x: h.x,
                                  }))
                                : (n.isActive = !1);
                            }
                            return t;
                          }, [])),
                        !w &&
                          t.some((t) => {
                            var { outside: e } = s;
                            return (
                              ((e = (e ? O : 0) + t.anchorX) < T.left &&
                                e + t.boxWidth < T.right) ||
                              (e < O - T.left + t.boxWidth && T.right - e > e)
                            );
                          }) &&
                          (t = t.map((t) => {
                            const { x: e, y: s } = i(
                              t.anchorX,
                              t.anchorY,
                              t.point.isHeader,
                              t.boxWidth,
                              !1
                            );
                            return u(t, { target: s, x: e });
                          })),
                        s.cleanSplit(),
                        h(t, I);
                      var B = O,
                        R = O;
                      t.forEach(function (t) {
                        const { x: e, boxWidth: i, isHeader: o } = t;
                        o ||
                          (s.outside && O + e < B && (B = O + e),
                          !o && s.outside && B + i > R && (R = O + e));
                      }),
                        t.forEach(function (t) {
                          const {
                              x: e,
                              anchorX: i,
                              anchorY: o,
                              pos: r,
                              point: { isHeader: n },
                            } = t,
                            a = {
                              visibility: void 0 === r ? "hidden" : "inherit",
                              x: e,
                              y: (r || 0) + D,
                              anchorX: i,
                              anchorY: o,
                            };
                          if (s.outside && e < i) {
                            const t = O - B;
                            0 < t &&
                              (n || ((a.x = e + t), (a.anchorX = i + t)),
                              n && ((a.x = (R - B) / 2), (a.anchorX = i + t)));
                          }
                          t.tt.attr(a);
                        });
                      const { container: z, outside: N, renderer: W } = s;
                      if (N && z && W) {
                        const { width: t, height: e, x: i, y: s } = A.getBBox();
                        W.setSize(t + i, e + s, !1),
                          (z.style.left = B + "px"),
                          (z.style.top = E + "px");
                      }
                      a && A.attr({ opacity: 1 === A.opacity ? 0.999 : 1 });
                    }
                    drawTracker() {
                      if (this.shouldStickOnContact()) {
                        var t = this.chart,
                          e = this.label,
                          i = this.shared ? t.hoverPoints : t.hoverPoint;
                        if (e && i) {
                          var s = { x: 0, y: 0, width: 0, height: 0 };
                          i = this.getAnchor(i);
                          var o = e.getBBox();
                          (i[0] += t.plotLeft - e.translateX),
                            (i[1] += t.plotTop - e.translateY),
                            (s.x = Math.min(0, i[0])),
                            (s.y = Math.min(0, i[1])),
                            (s.width =
                              0 > i[0]
                                ? Math.max(Math.abs(i[0]), o.width - i[0])
                                : Math.max(Math.abs(i[0]), o.width)),
                            (s.height =
                              0 > i[1]
                                ? Math.max(
                                    Math.abs(i[1]),
                                    o.height - Math.abs(i[1])
                                  )
                                : Math.max(Math.abs(i[1]), o.height)),
                            this.tracker
                              ? this.tracker.attr(s)
                              : ((this.tracker = e.renderer
                                  .rect(s)
                                  .addClass("highcharts-tracker")
                                  .add(e)),
                                t.styledMode ||
                                  this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                        }
                      } else
                        this.tracker && (this.tracker = this.tracker.destroy());
                    }
                    styledModeFormat(t) {
                      return t
                        .replace(
                          'style="font-size: 0.8em"',
                          'class="highcharts-header"'
                        )
                        .replace(
                          /style="color:{(point|series)\.color}"/g,
                          'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
                        );
                    }
                    tooltipFooterHeaderFormatter(t, e) {
                      const i = t.series,
                        s = i.tooltipOptions;
                      var o = i.xAxis;
                      const n = o && o.dateTime;
                      o = { isFooter: e, labelConfig: t };
                      let a = s.xDateFormat,
                        h = s[e ? "footerFormat" : "headerFormat"];
                      return (
                        g(this, "headerFormatter", o, function (e) {
                          n &&
                            !a &&
                            m(t.key) &&
                            (a = n.getXDateFormat(
                              t.key,
                              s.dateTimeLabelFormats
                            )),
                            n &&
                              a &&
                              (
                                (t.point && t.point.tooltipDateKeys) || ["key"]
                              ).forEach(function (t) {
                                h = h.replace(
                                  "{point." + t + "}",
                                  "{point." + t + ":" + a + "}"
                                );
                              }),
                            i.chart.styledMode &&
                              (h = this.styledModeFormat(h)),
                            (e.text = r(
                              h,
                              { point: t, series: i },
                              this.chart
                            ));
                        }),
                        o.text
                      );
                    }
                    update(t) {
                      this.destroy(),
                        this.init(this.chart, y(!0, this.options, t));
                    }
                    updatePosition(t) {
                      const { chart: e, distance: i, options: s } = this;
                      var o = e.pointer;
                      const r = this.getLabel(),
                        {
                          left: n,
                          top: a,
                          scaleX: h,
                          scaleY: l,
                        } = o.getChartPosition();
                      o = (s.positioner || this.getPosition).call(
                        this,
                        r.width,
                        r.height,
                        t
                      );
                      let c,
                        p = (t.plotX || 0) + e.plotLeft;
                      (t = (t.plotY || 0) + e.plotTop),
                        this.outside &&
                          (s.positioner && ((o.x += n - i), (o.y += a - i)),
                          (c = (s.borderWidth || 0) + 2 * i),
                          this.renderer.setSize(r.width + c, r.height + c, !1),
                          (1 === h && 1 === l) ||
                            (d(this.container, {
                              transform: `scale(${h}, ${l})`,
                            }),
                            (p *= h),
                            (t *= l)),
                          (p += n - o.x),
                          (t += a - o.y)),
                        this.move(Math.round(o.x), Math.round(o.y || 0), p, t);
                    }
                  }
                  return (
                    (function (t) {
                      const e = [];
                      t.compose = function (i) {
                        o.pushUnique(e, i) &&
                          l(i, "afterInit", function () {
                            const e = this.chart;
                            e.options.tooltip &&
                              (e.tooltip = new t(e, e.options.tooltip));
                          });
                      };
                    })(k || (k = {})),
                    k
                  );
                }
              ),
              e(
                i,
                "Core/Series/Point.js",
                [
                  i["Core/Renderer/HTML/AST.js"],
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Defaults.js"],
                  i["Core/Templating.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o) {
                  const { animObject: r } = e,
                    { defaultOptions: n } = i,
                    { format: a } = s,
                    {
                      addEvent: h,
                      defined: l,
                      erase: c,
                      extend: d,
                      fireEvent: p,
                      getNestedProperty: u,
                      isArray: g,
                      isFunction: f,
                      isNumber: m,
                      isObject: x,
                      merge: y,
                      objectEach: b,
                      pick: v,
                      syncTimeout: S,
                      removeEvent: k,
                      uniqueKey: M,
                    } = o;
                  class C {
                    constructor() {
                      (this.category = void 0),
                        (this.destroyed = !1),
                        (this.formatPrefix = "point"),
                        (this.id = void 0),
                        (this.isNull = !1),
                        (this.percentage = this.options = this.name = void 0),
                        (this.selected = !1),
                        (this.total = this.shapeArgs = this.series = void 0),
                        (this.visible = !0),
                        (this.x = void 0);
                    }
                    animateBeforeDestroy() {
                      const t = this,
                        e = { x: t.startXPos, opacity: 0 },
                        i = t.getGraphicalProps();
                      i.singular.forEach(function (i) {
                        t[i] = t[i].animate(
                          "dataLabel" === i
                            ? {
                                x: t[i].startXPos,
                                y: t[i].startYPos,
                                opacity: 0,
                              }
                            : e
                        );
                      }),
                        i.plural.forEach(function (e) {
                          t[e].forEach(function (e) {
                            e.element &&
                              e.animate(
                                d(
                                  { x: t.startXPos },
                                  e.startYPos
                                    ? { x: e.startXPos, y: e.startYPos }
                                    : {}
                                )
                              );
                          });
                        });
                    }
                    applyOptions(t, e) {
                      const i = this.series,
                        s = i.options.pointValKey || i.pointValKey;
                      return (
                        (t = C.prototype.optionsToObject.call(this, t)),
                        d(this, t),
                        (this.options = this.options ? d(this.options, t) : t),
                        t.group && delete this.group,
                        t.dataLabels && delete this.dataLabels,
                        s &&
                          (this.y = C.prototype.getNestedProperty.call(
                            this,
                            s
                          )),
                        (this.formatPrefix = (this.isNull =
                          this.isValid && !this.isValid())
                          ? "null"
                          : "point"),
                        this.selected && (this.state = "select"),
                        "name" in this &&
                          void 0 === e &&
                          i.xAxis &&
                          i.xAxis.hasNames &&
                          (this.x = i.xAxis.nameToX(this)),
                        void 0 === this.x && i
                          ? (this.x = void 0 === e ? i.autoIncrement() : e)
                          : m(t.x) &&
                            i.options.relativeXValue &&
                            (this.x = i.autoIncrement(t.x)),
                        this
                      );
                    }
                    destroy() {
                      if (!this.destroyed) {
                        const e = this;
                        var t = e.series;
                        const i = t.chart;
                        t = t.options.dataSorting;
                        const s = i.hoverPoints,
                          o = r(e.series.chart.renderer.globalAnimation),
                          n = () => {
                            (e.graphic ||
                              e.graphics ||
                              e.dataLabel ||
                              e.dataLabels) &&
                              (k(e), e.destroyElements());
                            for (const t in e) delete e[t];
                          };
                        e.legendItem && i.legend.destroyItem(e),
                          s &&
                            (e.setState(),
                            c(s, e),
                            s.length || (i.hoverPoints = null)),
                          e === i.hoverPoint && e.onMouseOut(),
                          t && t.enabled
                            ? (this.animateBeforeDestroy(), S(n, o.duration))
                            : n(),
                          i.pointCount--;
                      }
                      this.destroyed = !0;
                    }
                    destroyElements(t) {
                      const e = this;
                      (t = e.getGraphicalProps(t)).singular.forEach(function (
                        t
                      ) {
                        e[t] = e[t].destroy();
                      }),
                        t.plural.forEach(function (t) {
                          e[t].forEach(function (t) {
                            t && t.element && t.destroy();
                          }),
                            delete e[t];
                        });
                    }
                    firePointEvent(t, e, i) {
                      const s = this,
                        o = this.series.options;
                      (o.point.events[t] ||
                        (s.options &&
                          s.options.events &&
                          s.options.events[t])) &&
                        s.importEvents(),
                        "click" === t &&
                          o.allowPointSelect &&
                          (i = function (t) {
                            s.select &&
                              s.select(
                                null,
                                t.ctrlKey || t.metaKey || t.shiftKey
                              );
                          }),
                        p(s, t, e, i);
                    }
                    getClassName() {
                      return (
                        "highcharts-point" +
                        (this.selected ? " highcharts-point-select" : "") +
                        (this.negative ? " highcharts-negative" : "") +
                        (this.isNull ? " highcharts-null-point" : "") +
                        (void 0 !== this.colorIndex
                          ? " highcharts-color-" + this.colorIndex
                          : "") +
                        (this.options.className
                          ? " " + this.options.className
                          : "") +
                        (this.zone && this.zone.className
                          ? " " +
                            this.zone.className.replace(
                              "highcharts-negative",
                              ""
                            )
                          : "")
                      );
                    }
                    getGraphicalProps(t) {
                      const e = this,
                        i = [],
                        s = { singular: [], plural: [] };
                      let o, r;
                      for (
                        (t = t || { graphic: 1, dataLabel: 1 }).graphic &&
                          i.push("graphic"),
                          t.dataLabel &&
                            i.push(
                              "dataLabel",
                              "dataLabelPath",
                              "dataLabelUpper",
                              "connector"
                            ),
                          r = i.length;
                        r--;

                      )
                        (o = i[r]), e[o] && s.singular.push(o);
                      return (
                        ["graphic", "dataLabel", "connector"].forEach(function (
                          i
                        ) {
                          const o = i + "s";
                          t[i] && e[o] && s.plural.push(o);
                        }),
                        s
                      );
                    }
                    getLabelConfig() {
                      return {
                        x: this.category,
                        y: this.y,
                        color: this.color,
                        colorIndex: this.colorIndex,
                        key: this.name || this.category,
                        series: this.series,
                        point: this,
                        percentage: this.percentage,
                        total: this.total || this.stackTotal,
                      };
                    }
                    getNestedProperty(t) {
                      if (t)
                        return 0 === t.indexOf("custom.")
                          ? u(t, this.options)
                          : this[t];
                    }
                    getZone() {
                      var t = this.series;
                      const e = t.zones;
                      t = t.zoneAxis || "y";
                      let i,
                        s = 0;
                      for (i = e[s]; this[t] >= i.value; ) i = e[++s];
                      return (
                        this.nonZonedColor || (this.nonZonedColor = this.color),
                        (this.color =
                          i && i.color && !this.options.color
                            ? i.color
                            : this.nonZonedColor),
                        i
                      );
                    }
                    hasNewShapeType() {
                      return (
                        (this.graphic &&
                          (this.graphic.symbolName ||
                            this.graphic.element.nodeName)) !== this.shapeType
                      );
                    }
                    init(t, e, i) {
                      return (
                        (this.series = t),
                        this.applyOptions(e, i),
                        (this.id = l(this.id) ? this.id : M()),
                        this.resolveColor(),
                        t.chart.pointCount++,
                        p(this, "afterInit"),
                        this
                      );
                    }
                    isValid() {
                      return null !== this.x && m(this.y);
                    }
                    optionsToObject(t) {
                      var e = this.series;
                      const i = e.options.keys,
                        s = i || e.pointArrayMap || ["y"],
                        o = s.length;
                      let r = {},
                        n = 0,
                        a = 0;
                      if (m(t) || null === t) r[s[0]] = t;
                      else if (g(t))
                        for (
                          !i &&
                          t.length > o &&
                          ("string" == (e = typeof t[0])
                            ? (r.name = t[0])
                            : "number" === e && (r.x = t[0]),
                          n++);
                          a < o;

                        )
                          (i && void 0 === t[n]) ||
                            (0 < s[a].indexOf(".")
                              ? C.prototype.setNestedProperty(r, t[n], s[a])
                              : (r[s[a]] = t[n])),
                            n++,
                            a++;
                      else
                        "object" == typeof t &&
                          ((r = t),
                          t.dataLabels && (e._hasPointLabels = !0),
                          t.marker && (e._hasPointMarkers = !0));
                      return r;
                    }
                    pos(t, e = this.plotY) {
                      if (!this.destroyed) {
                        const { plotX: i, series: s } = this,
                          { chart: o, xAxis: r, yAxis: n } = s;
                        let a = 0,
                          h = 0;
                        if (m(i) && m(e))
                          return (
                            t &&
                              ((a = r ? r.pos : o.plotLeft),
                              (h = n ? n.pos : o.plotTop)),
                            o.inverted && r && n
                              ? [n.len - e + h, r.len - i + a]
                              : [i + a, e + h]
                          );
                      }
                    }
                    resolveColor() {
                      const t = this.series;
                      var e = t.chart.styledMode;
                      let i;
                      var s = t.chart.options.chart.colorCount;
                      delete this.nonZonedColor,
                        t.options.colorByPoint
                          ? (e ||
                              ((i = (s =
                                t.options.colors || t.chart.options.colors)[
                                t.colorCounter
                              ]),
                              (s = s.length)),
                            (e = t.colorCounter),
                            t.colorCounter++,
                            t.colorCounter === s && (t.colorCounter = 0))
                          : (e || (i = t.color), (e = t.colorIndex)),
                        (this.colorIndex = v(this.options.colorIndex, e)),
                        (this.color = v(this.options.color, i));
                    }
                    setNestedProperty(t, e, i) {
                      return (
                        i.split(".").reduce(function (t, i, s, o) {
                          return (
                            (t[i] =
                              o.length - 1 === s ? e : x(t[i], !0) ? t[i] : {}),
                            t[i]
                          );
                        }, t),
                        t
                      );
                    }
                    shouldDraw() {
                      return !this.isNull;
                    }
                    tooltipFormatter(t) {
                      const e = this.series,
                        i = e.tooltipOptions,
                        s = v(i.valueDecimals, ""),
                        o = i.valuePrefix || "",
                        r = i.valueSuffix || "";
                      return (
                        e.chart.styledMode &&
                          (t = e.chart.tooltip.styledModeFormat(t)),
                        (e.pointArrayMap || ["y"]).forEach(function (e) {
                          (e = "{point." + e),
                            (o || r) &&
                              (t = t.replace(
                                RegExp(e + "}", "g"),
                                o + e + "}" + r
                              )),
                            (t = t.replace(
                              RegExp(e + "}", "g"),
                              e + ":,." + s + "f}"
                            ));
                        }),
                        a(t, { point: this, series: this.series }, e.chart)
                      );
                    }
                    update(t, e, i, s) {
                      function o() {
                        r.applyOptions(t);
                        var s = a && r.hasMockGraphic;
                        (s = null === r.y ? !s : s),
                          a &&
                            s &&
                            ((r.graphic = a.destroy()),
                            delete r.hasMockGraphic),
                          x(t, !0) &&
                            (a &&
                              a.element &&
                              t &&
                              t.marker &&
                              void 0 !== t.marker.symbol &&
                              (r.graphic = a.destroy()),
                            t &&
                              t.dataLabels &&
                              r.dataLabel &&
                              (r.dataLabel = r.dataLabel.destroy()),
                            r.connector &&
                              (r.connector = r.connector.destroy())),
                          (c = r.index),
                          n.updateParallelArrays(r, c),
                          (l.data[c] =
                            x(l.data[c], !0) || x(t, !0)
                              ? r.options
                              : v(t, l.data[c])),
                          (n.isDirty = n.isDirtyData = !0),
                          !n.fixedBox &&
                            n.hasCartesianSeries &&
                            (h.isDirtyBox = !0),
                          "point" === l.legendType && (h.isDirtyLegend = !0),
                          e && h.redraw(i);
                      }
                      const r = this,
                        n = r.series,
                        a = r.graphic,
                        h = n.chart,
                        l = n.options;
                      let c;
                      (e = v(e, !0)),
                        !1 === s
                          ? o()
                          : r.firePointEvent("update", { options: t }, o);
                    }
                    remove(t, e) {
                      this.series.removePoint(
                        this.series.data.indexOf(this),
                        t,
                        e
                      );
                    }
                    select(t, e) {
                      const i = this,
                        s = i.series,
                        o = s.chart;
                      (this.selectedStaging = t = v(t, !i.selected)),
                        i.firePointEvent(
                          t ? "select" : "unselect",
                          { accumulate: e },
                          function () {
                            (i.selected = i.options.selected = t),
                              (s.options.data[s.data.indexOf(i)] = i.options),
                              i.setState(t && "select"),
                              e ||
                                o.getSelectedPoints().forEach(function (t) {
                                  const e = t.series;
                                  t.selected &&
                                    t !== i &&
                                    ((t.selected = t.options.selected = !1),
                                    (e.options.data[e.data.indexOf(t)] =
                                      t.options),
                                    t.setState(
                                      o.hoverPoints &&
                                        e.options.inactiveOtherPoints
                                        ? "inactive"
                                        : ""
                                    ),
                                    t.firePointEvent("unselect"));
                                });
                          }
                        ),
                        delete this.selectedStaging;
                    }
                    onMouseOver(t) {
                      const e = this.series.chart,
                        i = e.pointer;
                      (t = t
                        ? i.normalize(t)
                        : i.getChartCoordinatesFromPoint(this, e.inverted)),
                        i.runPointActions(t, this);
                    }
                    onMouseOut() {
                      const t = this.series.chart;
                      this.firePointEvent("mouseOut"),
                        this.series.options.inactiveOtherPoints ||
                          (t.hoverPoints || []).forEach(function (t) {
                            t.setState();
                          }),
                        (t.hoverPoints = t.hoverPoint = null);
                    }
                    importEvents() {
                      if (!this.hasImportedEvents) {
                        const t = this,
                          e = y(t.series.options.point, t.options).events;
                        (t.events = e),
                          b(e, function (e, i) {
                            f(e) && h(t, i, e);
                          }),
                          (this.hasImportedEvents = !0);
                      }
                    }
                    setState(e, i) {
                      const s = this.series;
                      var o = this.state,
                        r = s.options.states[e || "normal"] || {},
                        a = n.plotOptions[s.type].marker && s.options.marker;
                      const h = a && !1 === a.enabled,
                        l = (a && a.states && a.states[e || "normal"]) || {},
                        c = !1 === l.enabled,
                        u = this.marker || {},
                        g = s.chart,
                        f = a && s.markerAttribs;
                      let x = s.halo;
                      var y;
                      let b;
                      var S = s.stateMarkerGraphic;
                      if (
                        !(
                          ((e = e || "") === this.state && !i) ||
                          (this.selected && "select" !== e) ||
                          !1 === r.enabled ||
                          (e && (c || (h && !1 === l.enabled))) ||
                          (e &&
                            u.states &&
                            u.states[e] &&
                            !1 === u.states[e].enabled)
                        )
                      ) {
                        if (
                          ((this.state = e),
                          f && (y = s.markerAttribs(this, e)),
                          this.graphic && !this.hasMockGraphic)
                        ) {
                          if (
                            (o &&
                              this.graphic.removeClass("highcharts-point-" + o),
                            e && this.graphic.addClass("highcharts-point-" + e),
                            !g.styledMode)
                          ) {
                            (o = s.pointAttribs(this, e)),
                              (b = v(g.options.chart.animation, r.animation));
                            const t = o.opacity;
                            s.options.inactiveOtherPoints &&
                              m(t) &&
                              ((this.dataLabels || []).forEach(function (e) {
                                e &&
                                  !e.hasClass("highcharts-data-label-hidden") &&
                                  e.animate({ opacity: t }, b);
                              }),
                              this.connector &&
                                this.connector.animate({ opacity: t }, b)),
                              this.graphic.animate(o, b);
                          }
                          y &&
                            this.graphic.animate(
                              y,
                              v(
                                g.options.chart.animation,
                                l.animation,
                                a.animation
                              )
                            ),
                            S && S.hide();
                        } else
                          e &&
                            l &&
                            ((a = u.symbol || s.symbol),
                            S && S.currentSymbol !== a && (S = S.destroy()),
                            y &&
                              (S
                                ? S[i ? "animate" : "attr"]({ x: y.x, y: y.y })
                                : a &&
                                  ((s.stateMarkerGraphic = S =
                                    g.renderer
                                      .symbol(a, y.x, y.y, y.width, y.height)
                                      .add(s.markerGroup)),
                                  (S.currentSymbol = a))),
                            !g.styledMode &&
                              S &&
                              "inactive" !== this.state &&
                              S.attr(s.pointAttribs(this, e))),
                            S &&
                              (S[e && this.isInside ? "show" : "hide"](),
                              (S.element.point = this),
                              S.addClass(this.getClassName(), !0));
                        (r = r.halo),
                          (y =
                            ((S = this.graphic || S) && S.visibility) ||
                            "inherit"),
                          r && r.size && S && "hidden" !== y && !this.isCluster
                            ? (x ||
                                (s.halo = x =
                                  g.renderer.path().add(S.parentGroup)),
                              x
                                .show()
                                [i ? "animate" : "attr"]({
                                  d: this.haloPath(r.size),
                                }),
                              x.attr({
                                class:
                                  "highcharts-halo highcharts-color-" +
                                  v(this.colorIndex, s.colorIndex) +
                                  (this.className ? " " + this.className : ""),
                                visibility: y,
                                zIndex: -1,
                              }),
                              (x.point = this),
                              g.styledMode ||
                                x.attr(
                                  d(
                                    {
                                      fill: this.color || s.color,
                                      "fill-opacity": r.opacity,
                                    },
                                    t.filterUserAttributes(r.attributes || {})
                                  )
                                ))
                            : x &&
                              x.point &&
                              x.point.haloPath &&
                              x.animate(
                                { d: x.point.haloPath(0) },
                                null,
                                x.hide
                              ),
                          p(this, "afterSetState", { state: e });
                      }
                    }
                    haloPath(t) {
                      const e = this.pos();
                      return e
                        ? this.series.chart.renderer.symbols.circle(
                            Math.floor(e[0]) - t,
                            e[1] - t,
                            2 * t,
                            2 * t
                          )
                        : [];
                    }
                  }
                  return C;
                }
              ),
              e(
                i,
                "Core/Pointer.js",
                [
                  i["Core/Color/Color.js"],
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { parse: s } = t,
                    { charts: o, noop: r } = e,
                    {
                      addEvent: n,
                      attr: a,
                      css: h,
                      defined: l,
                      extend: c,
                      find: d,
                      fireEvent: p,
                      isNumber: u,
                      isObject: g,
                      objectEach: f,
                      offset: m,
                      pick: x,
                      splat: y,
                    } = i;
                  class b {
                    constructor(t, e) {
                      (this.lastValidTouch = {}),
                        (this.pinchDown = []),
                        (this.runChartClick = !1),
                        (this.eventsToUnbind = []),
                        (this.chart = t),
                        (this.hasDragged = !1),
                        (this.options = e),
                        this.init(t, e);
                    }
                    applyInactiveState(t) {
                      let e,
                        i = [];
                      (t || []).forEach(function (t) {
                        (e = t.series),
                          i.push(e),
                          e.linkedParent && i.push(e.linkedParent),
                          e.linkedSeries && (i = i.concat(e.linkedSeries)),
                          e.navigatorSeries && i.push(e.navigatorSeries);
                      }),
                        this.chart.series.forEach(function (t) {
                          -1 === i.indexOf(t)
                            ? t.setState("inactive", !0)
                            : t.options.inactiveOtherPoints &&
                              t.setAllPointsToState("inactive");
                        });
                    }
                    destroy() {
                      const t = this;
                      this.eventsToUnbind.forEach((t) => t()),
                        (this.eventsToUnbind = []),
                        e.chartCount ||
                          (b.unbindDocumentMouseUp &&
                            (b.unbindDocumentMouseUp =
                              b.unbindDocumentMouseUp()),
                          b.unbindDocumentTouchEnd &&
                            (b.unbindDocumentTouchEnd =
                              b.unbindDocumentTouchEnd())),
                        clearInterval(t.tooltipTimeout),
                        f(t, function (e, i) {
                          t[i] = void 0;
                        });
                    }
                    getSelectionMarkerAttrs(t, e) {
                      const i = {
                        args: { chartX: t, chartY: e },
                        attrs: {},
                        shapeType: "rect",
                      };
                      return (
                        p(this, "getSelectionMarkerAttrs", i, (i) => {
                          const {
                            chart: s,
                            mouseDownX: o = 0,
                            mouseDownY: r = 0,
                            zoomHor: n,
                            zoomVert: a,
                          } = this;
                          let h;
                          ((i = i.attrs).x = s.plotLeft),
                            (i.y = s.plotTop),
                            (i.width = n ? 1 : s.plotWidth),
                            (i.height = a ? 1 : s.plotHeight),
                            n &&
                              ((h = t - o),
                              (i.width = Math.abs(h)),
                              (i.x = (0 < h ? 0 : h) + o)),
                            a &&
                              ((h = e - r),
                              (i.height = Math.abs(h)),
                              (i.y = (0 < h ? 0 : h) + r));
                        }),
                        i
                      );
                    }
                    drag(t) {
                      const e = this.chart,
                        i = e.options.chart;
                      var o = e.plotLeft;
                      const r = e.plotTop,
                        n = e.plotWidth,
                        a = e.plotHeight,
                        h = this.mouseDownX || 0,
                        l = this.mouseDownY || 0,
                        c = g(i.panning)
                          ? i.panning && i.panning.enabled
                          : i.panning,
                        d = i.panKey && t[i.panKey + "Key"];
                      let p = t.chartX,
                        u = t.chartY,
                        f = this.selectionMarker;
                      if (
                        (!f || !f.touch) &&
                        (p < o ? (p = o) : p > o + n && (p = o + n),
                        u < r ? (u = r) : u > r + a && (u = r + a),
                        (this.hasDragged = Math.sqrt(
                          Math.pow(h - p, 2) + Math.pow(l - u, 2)
                        )),
                        10 < this.hasDragged)
                      ) {
                        o = e.isInsidePlot(h - o, l - r, {
                          visiblePlotOnly: !0,
                        });
                        const { shapeType: n, attrs: a } =
                          this.getSelectionMarkerAttrs(p, u);
                        (!e.hasCartesianSeries && !e.mapView) ||
                          (!this.zoomX && !this.zoomY) ||
                          !o ||
                          d ||
                          f ||
                          ((this.selectionMarker = f = e.renderer[n]()),
                          f
                            .attr({
                              class: "highcharts-selection-marker",
                              zIndex: 7,
                            })
                            .add(),
                          e.styledMode ||
                            f.attr({
                              fill:
                                i.selectionMarkerFill ||
                                s("#334eff").setOpacity(0.25).get(),
                            })),
                          f && f.attr(a),
                          o && !f && c && e.pan(t, i.panning);
                      }
                    }
                    dragStart(t) {
                      const e = this.chart;
                      (e.mouseIsDown = t.type),
                        (e.cancelClick = !1),
                        (e.mouseDownX = this.mouseDownX = t.chartX),
                        (e.mouseDownY = this.mouseDownY = t.chartY);
                    }
                    getSelectionBox(t) {
                      const e = { args: { marker: t }, result: {} };
                      return (
                        p(this, "getSelectionBox", e, (e) => {
                          e.result = {
                            x: t.attr ? +t.attr("x") : t.x,
                            y: t.attr ? +t.attr("y") : t.y,
                            width: t.attr ? t.attr("width") : t.width,
                            height: t.attr ? t.attr("height") : t.height,
                          };
                        }),
                        e.result
                      );
                    }
                    drop(t) {
                      const e = this,
                        i = this.chart,
                        s = this.hasPinched;
                      if (this.selectionMarker) {
                        const {
                            x: o,
                            y: r,
                            width: n,
                            height: a,
                          } = this.getSelectionBox(this.selectionMarker),
                          h = {
                            originalEvent: t,
                            xAxis: [],
                            yAxis: [],
                            x: o,
                            y: r,
                            width: n,
                            height: a,
                          };
                        let d = !!i.mapView;
                        (this.hasDragged || s) &&
                          (i.axes.forEach(function (i) {
                            if (
                              i.zoomEnabled &&
                              l(i.min) &&
                              (s ||
                                e[
                                  { xAxis: "zoomX", yAxis: "zoomY" }[i.coll]
                                ]) &&
                              u(o) &&
                              u(r) &&
                              u(n) &&
                              u(a)
                            ) {
                              var c = i.horiz;
                              const e =
                                  "touchend" === t.type ? i.minPixelPadding : 0,
                                s = i.toValue((c ? o : r) + e);
                              (c = i.toValue((c ? o + n : r + a) - e)),
                                h[i.coll].push({
                                  axis: i,
                                  min: Math.min(s, c),
                                  max: Math.max(s, c),
                                }),
                                (d = !0);
                            }
                          }),
                          d &&
                            p(i, "selection", h, function (t) {
                              i.zoom(c(t, s ? { animation: !1 } : null));
                            })),
                          u(i.index) &&
                            (this.selectionMarker =
                              this.selectionMarker.destroy()),
                          s && this.scaleGroups();
                      }
                      i &&
                        u(i.index) &&
                        (h(i.container, { cursor: i._cursor }),
                        (i.cancelClick = 10 < this.hasDragged),
                        (i.mouseIsDown =
                          this.hasDragged =
                          this.hasPinched =
                            !1),
                        (this.pinchDown = []));
                    }
                    findNearestKDPoint(t, e, i) {
                      let s;
                      return (
                        t.forEach(function (t) {
                          var o =
                            !(t.noSharedTooltip && e) &&
                            0 > t.options.findNearestPointBy.indexOf("y");
                          if (
                            ((t = t.searchPoint(i, o)),
                            (o = g(t, !0) && t.series) && !(o = !g(s, !0)))
                          ) {
                            {
                              o = s.distX - t.distX;
                              const i = s.dist - t.dist,
                                r =
                                  (t.series.group && t.series.group.zIndex) -
                                  (s.series.group && s.series.group.zIndex);
                              o =
                                0 !== o && e
                                  ? o
                                  : 0 !== i
                                  ? i
                                  : 0 !== r
                                  ? r
                                  : s.series.index > t.series.index
                                  ? -1
                                  : 1;
                            }
                            o = 0 < o;
                          }
                          o && (s = t);
                        }),
                        s
                      );
                    }
                    getChartCoordinatesFromPoint(t, e) {
                      var i = t.series;
                      const s = i.xAxis;
                      i = i.yAxis;
                      const o = t.shapeArgs;
                      if (s && i) {
                        let r = x(t.clientX, t.plotX),
                          n = t.plotY || 0;
                        return (
                          t.isNode &&
                            o &&
                            u(o.x) &&
                            u(o.y) &&
                            ((r = o.x), (n = o.y)),
                          e
                            ? {
                                chartX: i.len + i.pos - n,
                                chartY: s.len + s.pos - r,
                              }
                            : { chartX: r + s.pos, chartY: n + i.pos }
                        );
                      }
                      if (o && o.x && o.y) return { chartX: o.x, chartY: o.y };
                    }
                    getChartPosition() {
                      if (this.chartPosition) return this.chartPosition;
                      var { container: t } = this.chart;
                      const e = m(t);
                      this.chartPosition = {
                        left: e.left,
                        top: e.top,
                        scaleX: 1,
                        scaleY: 1,
                      };
                      const i = t.offsetWidth;
                      return (
                        (t = t.offsetHeight),
                        2 < i &&
                          2 < t &&
                          ((this.chartPosition.scaleX = e.width / i),
                          (this.chartPosition.scaleY = e.height / t)),
                        this.chartPosition
                      );
                    }
                    getCoordinates(t) {
                      const e = { xAxis: [], yAxis: [] };
                      return (
                        this.chart.axes.forEach(function (i) {
                          e[i.isXAxis ? "xAxis" : "yAxis"].push({
                            axis: i,
                            value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
                          });
                        }),
                        e
                      );
                    }
                    getHoverData(t, e, i, s, o, r) {
                      const n = [];
                      s = !(!s || !t);
                      const a = function (t) {
                        return (
                          t.visible &&
                          !(!o && t.directTouch) &&
                          x(t.options.enableMouseTracking, !0)
                        );
                      };
                      let h,
                        l = {
                          chartX: r ? r.chartX : void 0,
                          chartY: r ? r.chartY : void 0,
                          shared: o,
                        };
                      p(this, "beforeGetHoverData", l),
                        (h =
                          e && !e.stickyTracking
                            ? [e]
                            : i.filter(
                                (t) => t.stickyTracking && (l.filter || a)(t)
                              ));
                      const c = s || !r ? t : this.findNearestKDPoint(h, o, r);
                      return (
                        (e = c && c.series),
                        c &&
                          (o && !e.noSharedTooltip
                            ? ((h = i.filter(function (t) {
                                return l.filter
                                  ? l.filter(t)
                                  : a(t) && !t.noSharedTooltip;
                              })),
                              h.forEach(function (t) {
                                let e = d(t.points, function (t) {
                                  return t.x === c.x && !t.isNull;
                                });
                                g(e) &&
                                  (t.boosted &&
                                    t.boost &&
                                    (e = t.boost.getPoint(e)),
                                  n.push(e));
                              }))
                            : n.push(c)),
                        (l = { hoverPoint: c }),
                        p(this, "afterGetHoverData", l),
                        {
                          hoverPoint: l.hoverPoint,
                          hoverSeries: e,
                          hoverPoints: n,
                        }
                      );
                    }
                    getPointFromEvent(t) {
                      let e;
                      for (t = t.target; t && !e; )
                        (e = t.point), (t = t.parentNode);
                      return e;
                    }
                    onTrackerMouseOut(t) {
                      t = t.relatedTarget;
                      const e = this.chart.hoverSeries;
                      (this.isDirectTouch = !1),
                        !e ||
                          !t ||
                          e.stickyTracking ||
                          this.inClass(t, "highcharts-tooltip") ||
                          (this.inClass(t, "highcharts-series-" + e.index) &&
                            this.inClass(t, "highcharts-tracker")) ||
                          e.onMouseOut();
                    }
                    inClass(t, e) {
                      let i;
                      for (; t; ) {
                        if ((i = a(t, "class"))) {
                          if (-1 !== i.indexOf(e)) return !0;
                          if (-1 !== i.indexOf("highcharts-container"))
                            return !1;
                        }
                        t = t.parentElement;
                      }
                    }
                    init(t, e) {
                      (this.options = e),
                        (this.chart = t),
                        (this.runChartClick = !(
                          !e.chart.events || !e.chart.events.click
                        )),
                        (this.pinchDown = []),
                        (this.lastValidTouch = {}),
                        this.setDOMEvents(),
                        p(this, "afterInit");
                    }
                    normalize(t, e) {
                      var i = t.touches,
                        s = i
                          ? i.length
                            ? i.item(0)
                            : x(i.changedTouches, t.changedTouches)[0]
                          : t;
                      return (
                        e || (e = this.getChartPosition()),
                        (i = s.pageX - e.left),
                        (s = s.pageY - e.top),
                        (i /= e.scaleX),
                        (s /= e.scaleY),
                        c(t, { chartX: Math.round(i), chartY: Math.round(s) })
                      );
                    }
                    onContainerClick(t) {
                      const e = this.chart,
                        i = e.hoverPoint;
                      t = this.normalize(t);
                      const s = e.plotLeft,
                        o = e.plotTop;
                      e.cancelClick ||
                        (i && this.inClass(t.target, "highcharts-tracker")
                          ? (p(i.series, "click", c(t, { point: i })),
                            e.hoverPoint && i.firePointEvent("click", t))
                          : (c(t, this.getCoordinates(t)),
                            e.isInsidePlot(t.chartX - s, t.chartY - o, {
                              visiblePlotOnly: !0,
                            }) && p(e, "click", t)));
                    }
                    onContainerMouseDown(t) {
                      const i = 1 == (1 & (t.buttons || t.button));
                      (t = this.normalize(t)),
                        e.isFirefox &&
                          0 !== t.button &&
                          this.onContainerMouseMove(t),
                        (void 0 === t.button || i) &&
                          (this.zoomOption(t),
                          i && t.preventDefault && t.preventDefault(),
                          this.dragStart(t));
                    }
                    onContainerMouseLeave(t) {
                      const e = o[x(b.hoverChartIndex, -1)];
                      (t = this.normalize(t)),
                        e &&
                          t.relatedTarget &&
                          !this.inClass(
                            t.relatedTarget,
                            "highcharts-tooltip"
                          ) &&
                          (e.pointer.reset(),
                          (e.pointer.chartPosition = void 0));
                    }
                    onContainerMouseEnter(t) {
                      delete this.chartPosition;
                    }
                    onContainerMouseMove(t) {
                      const e = this.chart,
                        i = e.tooltip;
                      (t = this.normalize(t)),
                        this.setHoverChartIndex(),
                        ("mousedown" === e.mouseIsDown ||
                          this.touchSelect(t)) &&
                          this.drag(t),
                        e.openMenu ||
                          (!this.inClass(t.target, "highcharts-tracker") &&
                            !e.isInsidePlot(
                              t.chartX - e.plotLeft,
                              t.chartY - e.plotTop,
                              { visiblePlotOnly: !0 }
                            )) ||
                          (i && i.shouldStickOnContact(t)) ||
                          (this.inClass(t.target, "highcharts-no-tooltip")
                            ? this.reset(!1, 0)
                            : this.runPointActions(t));
                    }
                    onDocumentTouchEnd(t) {
                      const e = o[x(b.hoverChartIndex, -1)];
                      e && e.pointer.drop(t);
                    }
                    onContainerTouchMove(t) {
                      this.touchSelect(t)
                        ? this.onContainerMouseMove(t)
                        : this.touch(t);
                    }
                    onContainerTouchStart(t) {
                      this.touchSelect(t)
                        ? this.onContainerMouseDown(t)
                        : (this.zoomOption(t), this.touch(t, !0));
                    }
                    onDocumentMouseMove(t) {
                      const e = this.chart,
                        i = e.tooltip,
                        s = this.chartPosition;
                      (t = this.normalize(t, s)),
                        !s ||
                          e.isInsidePlot(
                            t.chartX - e.plotLeft,
                            t.chartY - e.plotTop,
                            { visiblePlotOnly: !0 }
                          ) ||
                          (i && i.shouldStickOnContact(t)) ||
                          this.inClass(t.target, "highcharts-tracker") ||
                          this.reset();
                    }
                    onDocumentMouseUp(t) {
                      const e = o[x(b.hoverChartIndex, -1)];
                      e && e.pointer.drop(t);
                    }
                    pinch(t) {
                      const e = this,
                        i = e.chart,
                        s = e.pinchDown,
                        o = t.touches || [],
                        n = o.length,
                        a = e.lastValidTouch,
                        h = e.hasZoom,
                        l = {},
                        d =
                          1 === n &&
                          ((e.inClass(t.target, "highcharts-tracker") &&
                            i.runTrackerClick) ||
                            e.runChartClick),
                        u = {};
                      var g = e.chart.tooltip;
                      g = 1 === n && x(g && g.options.followTouchMove, !0);
                      let f = e.selectionMarker;
                      1 < n ? (e.initiated = !0) : g && (e.initiated = !1),
                        h &&
                          e.initiated &&
                          !d &&
                          !1 !== t.cancelable &&
                          t.preventDefault(),
                        [].map.call(o, function (t) {
                          return e.normalize(t);
                        }),
                        "touchstart" === t.type
                          ? ([].forEach.call(o, function (t, e) {
                              s[e] = { chartX: t.chartX, chartY: t.chartY };
                            }),
                            (a.x = [s[0].chartX, s[1] && s[1].chartX]),
                            (a.y = [s[0].chartY, s[1] && s[1].chartY]),
                            i.axes.forEach(function (t) {
                              if (t.zoomEnabled) {
                                const e = i.bounds[t.horiz ? "h" : "v"],
                                  s = t.minPixelPadding,
                                  o = t.toPixels(
                                    Math.min(
                                      x(t.options.min, t.dataMin),
                                      t.dataMin
                                    )
                                  ),
                                  r = t.toPixels(
                                    Math.max(
                                      x(t.options.max, t.dataMax),
                                      t.dataMax
                                    )
                                  ),
                                  n = Math.max(o, r);
                                (e.min = Math.min(t.pos, Math.min(o, r) - s)),
                                  (e.max = Math.max(t.pos + t.len, n + s));
                              }
                            }),
                            (e.res = !0))
                          : g
                          ? this.runPointActions(e.normalize(t))
                          : s.length &&
                            (p(i, "touchpan", { originalEvent: t }, () => {
                              f ||
                                (e.selectionMarker = f =
                                  c({ destroy: r, touch: !0 }, i.plotBox)),
                                e.pinchTranslate(s, o, l, f, u, a),
                                (e.hasPinched = h),
                                e.scaleGroups(l, u);
                            }),
                            e.res && ((e.res = !1), this.reset(!1, 0)));
                    }
                    pinchTranslate(t, e, i, s, o, r) {
                      this.zoomHor &&
                        this.pinchTranslateDirection(!0, t, e, i, s, o, r),
                        this.zoomVert &&
                          this.pinchTranslateDirection(!1, t, e, i, s, o, r);
                    }
                    pinchTranslateDirection(t, e, i, s, o, r, n, a) {
                      const h = this.chart,
                        l = t ? "x" : "y",
                        c = t ? "X" : "Y",
                        d = "chart" + c,
                        p = t ? "width" : "height",
                        u = h["plot" + (t ? "Left" : "Top")],
                        g = h.inverted,
                        f = h.bounds[t ? "h" : "v"],
                        m = 1 === e.length,
                        x = e[0][d],
                        y = !m && e[1][d];
                      e = function () {
                        "number" == typeof C &&
                          20 < Math.abs(x - y) &&
                          (k = a || Math.abs(M - C) / Math.abs(x - y)),
                          (v = (u - M) / k + x),
                          (b = h["plot" + (t ? "Width" : "Height")] / k);
                      };
                      let b,
                        v,
                        S,
                        k = a || 1,
                        M = i[0][d],
                        C = !m && i[1][d];
                      e(),
                        (i = v) < f.min
                          ? ((i = f.min), (S = !0))
                          : i + b > f.max && ((i = f.max - b), (S = !0)),
                        S
                          ? ((M -= 0.8 * (M - n[l][0])),
                            "number" == typeof C && (C -= 0.8 * (C - n[l][1])),
                            e())
                          : (n[l] = [M, C]),
                        g || ((r[l] = v - u), (r[p] = b)),
                        (r = g ? 1 / k : k),
                        (o[p] = b),
                        (o[l] = i),
                        (s[g ? (t ? "scaleY" : "scaleX") : "scale" + c] = k),
                        (s["translate" + c] = r * u + (M - r * x));
                    }
                    reset(t, e) {
                      const i = this.chart,
                        s = i.hoverSeries,
                        o = i.hoverPoint,
                        r = i.hoverPoints,
                        n = i.tooltip,
                        a = n && n.shared ? r : o;
                      t &&
                        a &&
                        y(a).forEach(function (e) {
                          e.series.isCartesian &&
                            void 0 === e.plotX &&
                            (t = !1);
                        }),
                        t
                          ? n &&
                            a &&
                            y(a).length &&
                            (n.refresh(a),
                            n.shared && r
                              ? r.forEach(function (t) {
                                  t.setState(t.state, !0),
                                    t.series.isCartesian &&
                                      (t.series.xAxis.crosshair &&
                                        t.series.xAxis.drawCrosshair(null, t),
                                      t.series.yAxis.crosshair &&
                                        t.series.yAxis.drawCrosshair(null, t));
                                })
                              : o &&
                                (o.setState(o.state, !0),
                                i.axes.forEach(function (t) {
                                  t.crosshair &&
                                    o.series[t.coll] === t &&
                                    t.drawCrosshair(null, o);
                                })))
                          : (o && o.onMouseOut(),
                            r &&
                              r.forEach(function (t) {
                                t.setState();
                              }),
                            s && s.onMouseOut(),
                            n && n.hide(e),
                            this.unDocMouseMove &&
                              (this.unDocMouseMove = this.unDocMouseMove()),
                            i.axes.forEach(function (t) {
                              t.hideCrosshair();
                            }),
                            (this.hoverX =
                              i.hoverPoints =
                              i.hoverPoint =
                                null));
                    }
                    runPointActions(t, e, i) {
                      const s = this.chart,
                        r =
                          s.tooltip && s.tooltip.options.enabled
                            ? s.tooltip
                            : void 0,
                        a = !!r && r.shared;
                      let h = e || s.hoverPoint,
                        l = (h && h.series) || s.hoverSeries;
                      (e = this.getHoverData(
                        h,
                        l,
                        s.series,
                        (!t || "touchmove" !== t.type) &&
                          (!!e || (l && l.directTouch && this.isDirectTouch)),
                        a,
                        t
                      )),
                        (h = e.hoverPoint),
                        (l = e.hoverSeries);
                      const c = e.hoverPoints;
                      e =
                        l &&
                        l.tooltipOptions.followPointer &&
                        !l.tooltipOptions.split;
                      const p = a && l && !l.noSharedTooltip;
                      if (h && (i || h !== s.hoverPoint || (r && r.isHidden))) {
                        if (
                          ((s.hoverPoints || []).forEach(function (t) {
                            -1 === c.indexOf(t) && t.setState();
                          }),
                          s.hoverSeries !== l && l.onMouseOver(),
                          this.applyInactiveState(c),
                          (c || []).forEach(function (t) {
                            t.setState("hover");
                          }),
                          s.hoverPoint &&
                            s.hoverPoint.firePointEvent("mouseOut"),
                          !h.series)
                        )
                          return;
                        (s.hoverPoints = c),
                          (s.hoverPoint = h),
                          h.firePointEvent("mouseOver", void 0, () => {
                            r && h && r.refresh(p ? c : h, t);
                          });
                      } else
                        e &&
                          r &&
                          !r.isHidden &&
                          ((i = r.getAnchor([{}], t)),
                          s.isInsidePlot(i[0], i[1], { visiblePlotOnly: !0 }) &&
                            r.updatePosition({ plotX: i[0], plotY: i[1] }));
                      this.unDocMouseMove ||
                        ((this.unDocMouseMove = n(
                          s.container.ownerDocument,
                          "mousemove",
                          function (t) {
                            const e = o[b.hoverChartIndex];
                            e && e.pointer.onDocumentMouseMove(t);
                          }
                        )),
                        this.eventsToUnbind.push(this.unDocMouseMove)),
                        s.axes.forEach(function (e) {
                          const i = x((e.crosshair || {}).snap, !0);
                          let o;
                          i &&
                            (((o = s.hoverPoint) && o.series[e.coll] === e) ||
                              (o = d(
                                c,
                                (t) => t.series && t.series[e.coll] === e
                              ))),
                            o || !i ? e.drawCrosshair(t, o) : e.hideCrosshair();
                        });
                    }
                    scaleGroups(t, e) {
                      const i = this.chart;
                      i.series.forEach(function (s) {
                        const o = t || s.getPlotBox();
                        s.group &&
                          ((s.xAxis && s.xAxis.zoomEnabled) || i.mapView) &&
                          (s.group.attr(o),
                          s.markerGroup &&
                            (s.markerGroup.attr(o),
                            s.markerGroup.clip(e ? i.clipRect : null)),
                          s.dataLabelsGroup && s.dataLabelsGroup.attr(o));
                      }),
                        i.clipRect.attr(e || i.clipBox);
                    }
                    setDOMEvents() {
                      const t = this.chart.container,
                        i = t.ownerDocument;
                      (t.onmousedown = this.onContainerMouseDown.bind(this)),
                        (t.onmousemove = this.onContainerMouseMove.bind(this)),
                        (t.onclick = this.onContainerClick.bind(this)),
                        this.eventsToUnbind.push(
                          n(
                            t,
                            "mouseenter",
                            this.onContainerMouseEnter.bind(this)
                          )
                        ),
                        this.eventsToUnbind.push(
                          n(
                            t,
                            "mouseleave",
                            this.onContainerMouseLeave.bind(this)
                          )
                        ),
                        b.unbindDocumentMouseUp ||
                          (b.unbindDocumentMouseUp = n(
                            i,
                            "mouseup",
                            this.onDocumentMouseUp.bind(this)
                          ));
                      let s = this.chart.renderTo.parentElement;
                      for (; s && "BODY" !== s.tagName; )
                        this.eventsToUnbind.push(
                          n(s, "scroll", () => {
                            delete this.chartPosition;
                          })
                        ),
                          (s = s.parentElement);
                      e.hasTouch &&
                        (this.eventsToUnbind.push(
                          n(
                            t,
                            "touchstart",
                            this.onContainerTouchStart.bind(this),
                            { passive: !1 }
                          )
                        ),
                        this.eventsToUnbind.push(
                          n(
                            t,
                            "touchmove",
                            this.onContainerTouchMove.bind(this),
                            { passive: !1 }
                          )
                        ),
                        b.unbindDocumentTouchEnd ||
                          (b.unbindDocumentTouchEnd = n(
                            i,
                            "touchend",
                            this.onDocumentTouchEnd.bind(this),
                            { passive: !1 }
                          )));
                    }
                    setHoverChartIndex() {
                      const t = this.chart,
                        i = e.charts[x(b.hoverChartIndex, -1)];
                      i &&
                        i !== t &&
                        i.pointer.onContainerMouseLeave({
                          relatedTarget: t.container,
                        }),
                        (i && i.mouseIsDown) || (b.hoverChartIndex = t.index);
                    }
                    touch(t, e) {
                      const i = this.chart;
                      let s, o;
                      this.setHoverChartIndex(),
                        1 === t.touches.length
                          ? ((t = this.normalize(t)),
                            (o = i.isInsidePlot(
                              t.chartX - i.plotLeft,
                              t.chartY - i.plotTop,
                              { visiblePlotOnly: !0 }
                            )) && !i.openMenu
                              ? (e && this.runPointActions(t),
                                "touchmove" === t.type &&
                                  (s =
                                    !!(e = this.pinchDown)[0] &&
                                    4 <=
                                      Math.sqrt(
                                        Math.pow(e[0].chartX - t.chartX, 2) +
                                          Math.pow(e[0].chartY - t.chartY, 2)
                                      )),
                                x(s, !0) && this.pinch(t))
                              : e && this.reset())
                          : 2 === t.touches.length && this.pinch(t);
                    }
                    touchSelect(t) {
                      return !(
                        !this.chart.zooming.singleTouch ||
                        !t.touches ||
                        1 !== t.touches.length
                      );
                    }
                    zoomOption(t) {
                      const e = this.chart,
                        i = e.inverted;
                      var s = e.zooming.type || "";
                      /touch/.test(t.type) && (s = x(e.zooming.pinchType, s)),
                        (this.zoomX = t = /x/.test(s)),
                        (this.zoomY = s = /y/.test(s)),
                        (this.zoomHor = (t && !i) || (s && i)),
                        (this.zoomVert = (s && !i) || (t && i)),
                        (this.hasZoom = t || s);
                    }
                  }
                  return (
                    (function (t) {
                      const e = [],
                        s = [];
                      (t.compose = function (e) {
                        i.pushUnique(s, e) &&
                          n(e, "beforeRender", function () {
                            this.pointer = new t(this, this.options);
                          });
                      }),
                        (t.dissolve = function () {
                          for (let t = 0, i = e.length; t < i; ++t) e[t]();
                          e.length = 0;
                        });
                    })(b || (b = {})),
                    b
                  );
                }
              ),
              e(
                i,
                "Core/Legend/Legend.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Templating.js"],
                  i["Core/Globals.js"],
                  i["Core/Series/Point.js"],
                  i["Core/Renderer/RendererUtilities.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r) {
                  const { animObject: n, setAnimation: a } = t,
                    { format: h } = e,
                    { marginNames: l } = i,
                    { distribute: c } = o,
                    {
                      addEvent: d,
                      createElement: p,
                      css: u,
                      defined: g,
                      discardElement: f,
                      find: m,
                      fireEvent: x,
                      isNumber: y,
                      merge: b,
                      pick: v,
                      relativeLength: S,
                      stableSort: k,
                      syncTimeout: M,
                    } = r;
                  class C {
                    constructor(t, e) {
                      (this.allItems = []),
                        (this.contentGroup = this.box = void 0),
                        (this.display = !1),
                        (this.group = void 0),
                        (this.offsetWidth =
                          this.maxLegendWidth =
                          this.maxItemWidth =
                          this.legendWidth =
                          this.legendHeight =
                          this.lastLineHeight =
                          this.lastItemY =
                          this.itemY =
                          this.itemX =
                          this.itemMarginTop =
                          this.itemMarginBottom =
                          this.itemHeight =
                          this.initialItemY =
                            0),
                        (this.options = void 0),
                        (this.padding = 0),
                        (this.pages = []),
                        (this.proximate = !1),
                        (this.scrollGroup = void 0),
                        (this.widthOption =
                          this.totalItemWidth =
                          this.titleHeight =
                          this.symbolWidth =
                          this.symbolHeight =
                            0),
                        (this.chart = t),
                        this.init(t, e);
                    }
                    init(t, e) {
                      (this.chart = t),
                        this.setOptions(e),
                        e.enabled &&
                          (this.render(),
                          d(this.chart, "endResize", function () {
                            this.legend.positionCheckboxes();
                          }),
                          d(this.chart, "render", () => {
                            this.proximate &&
                              (this.proximatePositions(), this.positionItems());
                          }));
                    }
                    setOptions(t) {
                      const e = v(t.padding, 8);
                      (this.options = t),
                        this.chart.styledMode ||
                          ((this.itemStyle = t.itemStyle),
                          (this.itemHiddenStyle = b(
                            this.itemStyle,
                            t.itemHiddenStyle
                          ))),
                        (this.itemMarginTop = t.itemMarginTop),
                        (this.itemMarginBottom = t.itemMarginBottom),
                        (this.padding = e),
                        (this.initialItemY = e - 5),
                        (this.symbolWidth = v(t.symbolWidth, 16)),
                        (this.pages = []),
                        (this.proximate =
                          "proximate" === t.layout && !this.chart.inverted),
                        (this.baseline = void 0);
                    }
                    update(t, e) {
                      const i = this.chart;
                      this.setOptions(b(!0, this.options, t)),
                        this.destroy(),
                        (i.isDirtyLegend = i.isDirtyBox = !0),
                        v(e, !0) && i.redraw(),
                        x(this, "afterUpdate");
                    }
                    colorizeItem(t, e) {
                      const {
                        group: i,
                        label: s,
                        line: o,
                        symbol: r,
                      } = t.legendItem || {};
                      if (
                        (i &&
                          i[e ? "removeClass" : "addClass"](
                            "highcharts-legend-item-hidden"
                          ),
                        !this.chart.styledMode)
                      ) {
                        const { itemHiddenStyle: i } = this,
                          n = i.color,
                          a = (e && t.color) || n,
                          h = t.options && t.options.marker;
                        let l = { fill: a };
                        null == s || s.css(b(e ? this.itemStyle : i)),
                          null == o || o.attr({ stroke: a }),
                          r &&
                            (h &&
                              r.isMarker &&
                              ((l = t.pointAttribs()),
                              e || (l.stroke = l.fill = n)),
                            r.attr(l));
                      }
                      x(this, "afterColorizeItem", { item: t, visible: e });
                    }
                    positionItems() {
                      this.allItems.forEach(this.positionItem, this),
                        this.chart.isResizing || this.positionCheckboxes();
                    }
                    positionItem(t) {
                      const {
                        group: e,
                        x: i = 0,
                        y: s = 0,
                      } = t.legendItem || {};
                      var o = this.options,
                        r = o.symbolPadding;
                      const n = !o.rtl;
                      (o = t.checkbox),
                        e &&
                          e.element &&
                          ((r = {
                            translateX: n
                              ? i
                              : this.legendWidth - i - 2 * r - 4,
                            translateY: s,
                          }),
                          e[g(e.translateY) ? "animate" : "attr"](
                            r,
                            void 0,
                            () => {
                              x(this, "afterPositionItem", { item: t });
                            }
                          )),
                        o && ((o.x = i), (o.y = s));
                    }
                    destroyItem(t) {
                      const e = t.checkbox,
                        i = t.legendItem || {};
                      for (const t of ["group", "label", "line", "symbol"])
                        i[t] && (i[t] = i[t].destroy());
                      e && f(e), (t.legendItem = void 0);
                    }
                    destroy() {
                      for (const t of this.getAllItems()) this.destroyItem(t);
                      for (const t of "clipRect up down pager nav box title group".split(
                        " "
                      ))
                        this[t] && (this[t] = this[t].destroy());
                      this.display = null;
                    }
                    positionCheckboxes() {
                      const t = this.group && this.group.alignAttr,
                        e = this.clipHeight || this.legendHeight,
                        i = this.titleHeight;
                      let s;
                      t &&
                        ((s = t.translateY),
                        this.allItems.forEach(function (o) {
                          const r = o.checkbox;
                          let n;
                          r &&
                            ((n = s + i + r.y + (this.scrollOffset || 0) + 3),
                            u(r, {
                              left:
                                t.translateX +
                                o.checkboxOffset +
                                r.x -
                                20 +
                                "px",
                              top: n + "px",
                              display:
                                this.proximate || (n > s - 6 && n < s + e - 6)
                                  ? ""
                                  : "none",
                            }));
                        }, this));
                    }
                    renderTitle() {
                      var t = this.options;
                      const e = this.padding,
                        i = t.title;
                      let s = 0;
                      i.text &&
                        (this.title ||
                          ((this.title = this.chart.renderer
                            .label(
                              i.text,
                              e - 3,
                              e - 4,
                              void 0,
                              void 0,
                              void 0,
                              t.useHTML,
                              void 0,
                              "legend-title"
                            )
                            .attr({ zIndex: 1 })),
                          this.chart.styledMode || this.title.css(i.style),
                          this.title.add(this.group)),
                        i.width ||
                          this.title.css({ width: this.maxLegendWidth + "px" }),
                        (s = (t = this.title.getBBox()).height),
                        (this.offsetWidth = t.width),
                        this.contentGroup.attr({ translateY: s })),
                        (this.titleHeight = s);
                    }
                    setText(t) {
                      const e = this.options;
                      t.legendItem.label.attr({
                        text: e.labelFormat
                          ? h(e.labelFormat, t, this.chart)
                          : e.labelFormatter.call(t),
                      });
                    }
                    renderItem(t) {
                      const e = (t.legendItem = t.legendItem || {});
                      var i = this.chart,
                        s = i.renderer;
                      const o = this.options,
                        r = this.symbolWidth,
                        n = o.symbolPadding || 0,
                        a = this.itemStyle,
                        h = this.itemHiddenStyle,
                        l =
                          "horizontal" === o.layout ? v(o.itemDistance, 20) : 0,
                        c = !o.rtl,
                        d = !t.series,
                        p = !d && t.series.drawLegendSymbol ? t.series : t;
                      var u = p.options;
                      const g =
                          this.createCheckboxForItem && u && u.showCheckbox,
                        f = o.useHTML,
                        m = t.options.className;
                      let x = e.label;
                      (u = r + n + l + (g ? 20 : 0)),
                        x ||
                          ((e.group = s
                            .g("legend-item")
                            .addClass(
                              "highcharts-" +
                                p.type +
                                "-series highcharts-color-" +
                                t.colorIndex +
                                (m ? " " + m : "") +
                                (d ? " highcharts-series-" + t.index : "")
                            )
                            .attr({ zIndex: 1 })
                            .add(this.scrollGroup)),
                          (e.label = x =
                            s.text("", c ? r + n : -n, this.baseline || 0, f)),
                          i.styledMode || x.css(b(t.visible ? a : h)),
                          x
                            .attr({ align: c ? "left" : "right", zIndex: 2 })
                            .add(e.group),
                          this.baseline ||
                            ((this.fontMetrics = s.fontMetrics(x)),
                            (this.baseline =
                              this.fontMetrics.f + 3 + this.itemMarginTop),
                            x.attr("y", this.baseline),
                            (this.symbolHeight = v(
                              o.symbolHeight,
                              this.fontMetrics.f
                            )),
                            o.squareSymbol &&
                              ((this.symbolWidth = v(
                                o.symbolWidth,
                                Math.max(this.symbolHeight, 16)
                              )),
                              (u = this.symbolWidth + n + l + (g ? 20 : 0)),
                              c && x.attr("x", this.symbolWidth + n))),
                          p.drawLegendSymbol(this, t),
                          this.setItemEvents && this.setItemEvents(t, x, f)),
                        g &&
                          !t.checkbox &&
                          this.createCheckboxForItem &&
                          this.createCheckboxForItem(t),
                        this.colorizeItem(t, t.visible),
                        (!i.styledMode && a.width) ||
                          x.css({
                            width:
                              (o.itemWidth ||
                                this.widthOption ||
                                i.spacingBox.width) -
                              u +
                              "px",
                          }),
                        this.setText(t),
                        (i = x.getBBox()),
                        (s = (this.fontMetrics && this.fontMetrics.h) || 0),
                        (t.itemWidth = t.checkboxOffset =
                          o.itemWidth || e.labelWidth || i.width + u),
                        (this.maxItemWidth = Math.max(
                          this.maxItemWidth,
                          t.itemWidth
                        )),
                        (this.totalItemWidth += t.itemWidth),
                        (this.itemHeight = t.itemHeight =
                          Math.round(
                            e.labelHeight || (i.height > 1.5 * s ? i.height : s)
                          ));
                    }
                    layoutItem(t) {
                      var e = this.options;
                      const i = this.padding,
                        s = "horizontal" === e.layout,
                        o = t.itemHeight,
                        r = this.itemMarginBottom,
                        n = this.itemMarginTop,
                        a = s ? v(e.itemDistance, 20) : 0,
                        h = this.maxLegendWidth;
                      e =
                        e.alignColumns && this.totalItemWidth > h
                          ? this.maxItemWidth
                          : t.itemWidth;
                      const l = t.legendItem || {};
                      s &&
                        this.itemX - i + e > h &&
                        ((this.itemX = i),
                        this.lastLineHeight &&
                          (this.itemY += n + this.lastLineHeight + r),
                        (this.lastLineHeight = 0)),
                        (this.lastItemY = n + this.itemY + r),
                        (this.lastLineHeight = Math.max(
                          o,
                          this.lastLineHeight
                        )),
                        (l.x = this.itemX),
                        (l.y = this.itemY),
                        s
                          ? (this.itemX += e)
                          : ((this.itemY += n + o + r),
                            (this.lastLineHeight = o)),
                        (this.offsetWidth =
                          this.widthOption ||
                          Math.max(
                            (s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i,
                            this.offsetWidth
                          ));
                    }
                    getAllItems() {
                      let t = [];
                      return (
                        this.chart.series.forEach(function (e) {
                          const i = e && e.options;
                          e &&
                            v(i.showInLegend, !g(i.linkedTo) && void 0, !0) &&
                            (t = t.concat(
                              (e.legendItem || {}).labels ||
                                ("point" === i.legendType ? e.data : e)
                            ));
                        }),
                        x(this, "afterGetAllItems", { allItems: t }),
                        t
                      );
                    }
                    getAlignment() {
                      const t = this.options;
                      return this.proximate
                        ? t.align.charAt(0) + "tv"
                        : t.floating
                        ? ""
                        : t.align.charAt(0) +
                          t.verticalAlign.charAt(0) +
                          t.layout.charAt(0);
                    }
                    adjustMargins(t, e) {
                      const i = this.chart,
                        s = this.options,
                        o = this.getAlignment();
                      o &&
                        [
                          /(lth|ct|rth)/,
                          /(rtv|rm|rbv)/,
                          /(rbh|cb|lbh)/,
                          /(lbv|lm|ltv)/,
                        ].forEach(function (r, n) {
                          r.test(o) &&
                            !g(t[n]) &&
                            (i[l[n]] = Math.max(
                              i[l[n]],
                              i.legend[
                                (n + 1) % 2 ? "legendHeight" : "legendWidth"
                              ] +
                                [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] +
                                v(s.margin, 12) +
                                e[n] +
                                (i.titleOffset[n] || 0)
                            ));
                        });
                    }
                    proximatePositions() {
                      const t = this.chart,
                        e = [],
                        i = "left" === this.options.align;
                      let s;
                      this.allItems.forEach(function (s) {
                        var o,
                          r = i;
                        let n;
                        s.yAxis &&
                          (s.xAxis.options.reversed && (r = !r),
                          s.points &&
                            (o = m(
                              r ? s.points : s.points.slice(0).reverse(),
                              function (t) {
                                return y(t.plotY);
                              }
                            )),
                          (r =
                            this.itemMarginTop +
                            s.legendItem.label.getBBox().height +
                            this.itemMarginBottom),
                          (n = s.yAxis.top - t.plotTop),
                          s.visible
                            ? ((o = o ? o.plotY : s.yAxis.height),
                              (o += n - 0.3 * r))
                            : (o = n + s.yAxis.height),
                          e.push({ target: o, size: r, item: s }));
                      }, this);
                      for (const i of c(e, t.plotHeight))
                        (s = i.item.legendItem || {}),
                          y(i.pos) && (s.y = t.plotTop - t.spacing[0] + i.pos);
                    }
                    render() {
                      const t = this.chart,
                        e = t.renderer,
                        i = this.options,
                        s = this.padding;
                      var o = this.getAllItems();
                      let r,
                        n = this.group,
                        a = this.box;
                      (this.itemX = s),
                        (this.itemY = this.initialItemY),
                        (this.lastItemY = this.offsetWidth = 0),
                        (this.widthOption = S(i.width, t.spacingBox.width - s));
                      var h = t.spacingBox.width - 2 * s - i.x;
                      -1 <
                        ["rm", "lm"].indexOf(
                          this.getAlignment().substring(0, 2)
                        ) && (h /= 2),
                        (this.maxLegendWidth = this.widthOption || h),
                        n ||
                          ((this.group = n =
                            e
                              .g("legend")
                              .addClass(i.className || "")
                              .attr({ zIndex: 7 })
                              .add()),
                          (this.contentGroup = e
                            .g()
                            .attr({ zIndex: 1 })
                            .add(n)),
                          (this.scrollGroup = e.g().add(this.contentGroup))),
                        this.renderTitle(),
                        k(
                          o,
                          (t, e) =>
                            ((t.options && t.options.legendIndex) || 0) -
                            ((e.options && e.options.legendIndex) || 0)
                        ),
                        i.reversed && o.reverse(),
                        (this.allItems = o),
                        (this.display = h = !!o.length),
                        (this.itemHeight =
                          this.totalItemWidth =
                          this.maxItemWidth =
                          this.lastLineHeight =
                            0),
                        o.forEach(this.renderItem, this),
                        o.forEach(this.layoutItem, this),
                        (o = (this.widthOption || this.offsetWidth) + s),
                        (r =
                          this.lastItemY +
                          this.lastLineHeight +
                          this.titleHeight),
                        (r = this.handleOverflow(r)),
                        (r += s),
                        a ||
                          (this.box = a =
                            e
                              .rect()
                              .addClass("highcharts-legend-box")
                              .attr({ r: i.borderRadius })
                              .add(n)),
                        t.styledMode ||
                          a
                            .attr({
                              stroke: i.borderColor,
                              "stroke-width": i.borderWidth || 0,
                              fill: i.backgroundColor || "none",
                            })
                            .shadow(i.shadow),
                        0 < o &&
                          0 < r &&
                          a[a.placed ? "animate" : "attr"](
                            a.crisp.call(
                              {},
                              { x: 0, y: 0, width: o, height: r },
                              a.strokeWidth()
                            )
                          ),
                        n[h ? "show" : "hide"](),
                        t.styledMode &&
                          "none" === n.getStyle("display") &&
                          (o = r = 0),
                        (this.legendWidth = o),
                        (this.legendHeight = r),
                        h && this.align(),
                        this.proximate || this.positionItems(),
                        x(this, "afterRender");
                    }
                    align(t = this.chart.spacingBox) {
                      const e = this.chart,
                        i = this.options;
                      let s = t.y;
                      /(lth|ct|rth)/.test(this.getAlignment()) &&
                      0 < e.titleOffset[0]
                        ? (s += e.titleOffset[0])
                        : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                          0 < e.titleOffset[2] &&
                          (s -= e.titleOffset[2]),
                        s !== t.y && (t = b(t, { y: s })),
                        e.hasRendered || (this.group.placed = !1),
                        this.group.align(
                          b(i, {
                            width: this.legendWidth,
                            height: this.legendHeight,
                            verticalAlign: this.proximate
                              ? "top"
                              : i.verticalAlign,
                          }),
                          !0,
                          t
                        );
                    }
                    handleOverflow(t) {
                      const e = this,
                        i = this.chart,
                        s = i.renderer,
                        o = this.options;
                      var r = o.y;
                      const n = "top" === o.verticalAlign,
                        a = this.padding,
                        h = o.maxHeight,
                        l = o.navigation,
                        c = v(l.animation, !0),
                        d = l.arrowSize || 12,
                        p = this.pages,
                        u = this.allItems,
                        g = function (t) {
                          "number" == typeof t
                            ? S.attr({ height: t })
                            : S &&
                              ((e.clipRect = S.destroy()),
                              e.contentGroup.clip()),
                            e.contentGroup.div &&
                              (e.contentGroup.div.style.clip = t
                                ? "rect(" + a + "px,9999px," + (a + t) + "px,0)"
                                : "auto");
                        },
                        f = function (t) {
                          return (
                            (e[t] = s
                              .circle(0, 0, 1.3 * d)
                              .translate(d / 2, d / 2)
                              .add(b)),
                            i.styledMode ||
                              e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                            e[t]
                          );
                        };
                      let m, x, y;
                      r = i.spacingBox.height + (n ? -r : r) - a;
                      let b = this.nav,
                        S = this.clipRect;
                      return (
                        "horizontal" !== o.layout ||
                          "middle" === o.verticalAlign ||
                          o.floating ||
                          (r /= 2),
                        h && (r = Math.min(r, h)),
                        (p.length = 0),
                        t && 0 < r && t > r && !1 !== l.enabled
                          ? ((this.clipHeight = m =
                              Math.max(r - 20 - this.titleHeight - a, 0)),
                            (this.currentPage = v(this.currentPage, 1)),
                            (this.fullHeight = t),
                            u.forEach((t, e) => {
                              (y = t.legendItem || {}), (t = y.y || 0);
                              const i = Math.round(y.label.getBBox().height);
                              let s = p.length;
                              (!s ||
                                (t - p[s - 1] > m && (x || t) !== p[s - 1])) &&
                                (p.push(x || t), s++),
                                (y.pageIx = s - 1),
                                x &&
                                  ((u[e - 1].legendItem || {}).pageIx = s - 1),
                                e === u.length - 1 &&
                                  t + i - p[s - 1] > m &&
                                  t > p[s - 1] &&
                                  (p.push(t), (y.pageIx = s)),
                                t !== x && (x = t);
                            }),
                            S ||
                              ((S = e.clipRect = s.clipRect(0, a - 2, 9999, 0)),
                              e.contentGroup.clip(S)),
                            g(m),
                            b ||
                              ((this.nav = b =
                                s.g().attr({ zIndex: 1 }).add(this.group)),
                              (this.up = s
                                .symbol("triangle", 0, 0, d, d)
                                .add(b)),
                              f("upTracker").on("click", function () {
                                e.scroll(-1, c);
                              }),
                              (this.pager = s
                                .text("", 15, 10)
                                .addClass("highcharts-legend-navigation")),
                              !i.styledMode &&
                                l.style &&
                                this.pager.css(l.style),
                              this.pager.add(b),
                              (this.down = s
                                .symbol("triangle-down", 0, 0, d, d)
                                .add(b)),
                              f("downTracker").on("click", function () {
                                e.scroll(1, c);
                              })),
                            e.scroll(0),
                            (t = r))
                          : b &&
                            (g(),
                            (this.nav = b.destroy()),
                            this.scrollGroup.attr({ translateY: 1 }),
                            (this.clipHeight = 0)),
                        t
                      );
                    }
                    scroll(t, e) {
                      const i = this.chart,
                        s = this.pages,
                        o = s.length,
                        r = this.clipHeight,
                        h = this.options.navigation,
                        l = this.pager,
                        c = this.padding;
                      let d = this.currentPage + t;
                      d > o && (d = o),
                        0 < d &&
                          (void 0 !== e && a(e, i),
                          this.nav.attr({
                            translateX: c,
                            translateY: r + this.padding + 7 + this.titleHeight,
                            visibility: "inherit",
                          }),
                          [this.up, this.upTracker].forEach(function (t) {
                            t.attr({
                              class:
                                1 === d
                                  ? "highcharts-legend-nav-inactive"
                                  : "highcharts-legend-nav-active",
                            });
                          }),
                          l.attr({ text: d + "/" + o }),
                          [this.down, this.downTracker].forEach(function (t) {
                            t.attr({
                              x: 18 + this.pager.getBBox().width,
                              class:
                                d === o
                                  ? "highcharts-legend-nav-inactive"
                                  : "highcharts-legend-nav-active",
                            });
                          }, this),
                          i.styledMode ||
                            (this.up.attr({
                              fill: 1 === d ? h.inactiveColor : h.activeColor,
                            }),
                            this.upTracker.css({
                              cursor: 1 === d ? "default" : "pointer",
                            }),
                            this.down.attr({
                              fill: d === o ? h.inactiveColor : h.activeColor,
                            }),
                            this.downTracker.css({
                              cursor: d === o ? "default" : "pointer",
                            })),
                          (this.scrollOffset = -s[d - 1] + this.initialItemY),
                          this.scrollGroup.animate({
                            translateY: this.scrollOffset,
                          }),
                          (this.currentPage = d),
                          this.positionCheckboxes(),
                          (t = n(v(e, i.renderer.globalAnimation, !0))),
                          M(() => {
                            x(this, "afterScroll", { currentPage: d });
                          }, t.duration));
                    }
                    setItemEvents(t, e, i) {
                      const o = this,
                        r = t.legendItem || {},
                        n = o.chart.renderer.boxWrapper,
                        a = t instanceof s,
                        h =
                          "highcharts-legend-" +
                          (a ? "point" : "series") +
                          "-active",
                        l = o.chart.styledMode;
                      i = i ? [e, r.symbol] : [r.group];
                      const c = (e) => {
                        o.allItems.forEach((i) => {
                          t !== i &&
                            [i].concat(i.linkedSeries || []).forEach((t) => {
                              t.setState(e, !a);
                            });
                        });
                      };
                      for (const s of i)
                        s &&
                          s
                            .on("mouseover", function () {
                              t.visible && c("inactive"),
                                t.setState("hover"),
                                t.visible && n.addClass(h),
                                l || e.css(o.options.itemHoverStyle);
                            })
                            .on("mouseout", function () {
                              o.chart.styledMode ||
                                e.css(
                                  b(t.visible ? o.itemStyle : o.itemHiddenStyle)
                                ),
                                c(""),
                                n.removeClass(h),
                                t.setState();
                            })
                            .on("click", function (e) {
                              const i = function () {
                                t.setVisible && t.setVisible(),
                                  c(t.visible ? "inactive" : "");
                              };
                              n.removeClass(h),
                                (e = { browserEvent: e }),
                                t.firePointEvent
                                  ? t.firePointEvent("legendItemClick", e, i)
                                  : x(t, "legendItemClick", e, i);
                            });
                    }
                    createCheckboxForItem(t) {
                      (t.checkbox = p(
                        "input",
                        {
                          type: "checkbox",
                          className: "highcharts-legend-checkbox",
                          checked: t.selected,
                          defaultChecked: t.selected,
                        },
                        this.options.itemCheckboxStyle,
                        this.chart.container
                      )),
                        d(t.checkbox, "click", function (e) {
                          x(
                            t.series || t,
                            "checkboxClick",
                            { checked: e.target.checked, item: t },
                            function () {
                              t.select();
                            }
                          );
                        });
                    }
                  }
                  return (
                    (function (t) {
                      const e = [];
                      t.compose = function (i) {
                        r.pushUnique(e, i) &&
                          d(i, "beforeMargins", function () {
                            this.legend = new t(this, this.options.legend);
                          });
                      };
                    })(C || (C = {})),
                    C
                  );
                }
              ),
              e(
                i,
                "Core/Legend/LegendSymbol.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const { extend: e, merge: i, pick: s } = t;
                  var o;
                  return (
                    (function (t) {
                      (t.lineMarker = function (t, o) {
                        o = this.legendItem = this.legendItem || {};
                        var r = this.options;
                        const n = t.symbolWidth,
                          a = t.symbolHeight,
                          h = a / 2,
                          l = this.chart.renderer,
                          c = o.group;
                        t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
                        let d = {},
                          p = r.marker,
                          u = 0;
                        this.chart.styledMode ||
                          ((d = {
                            "stroke-width": Math.min(r.lineWidth || 0, 24),
                          }),
                          r.dashStyle
                            ? (d.dashstyle = r.dashStyle)
                            : "square" !== r.linecap &&
                              (d["stroke-linecap"] = "round")),
                          (o.line = l
                            .path()
                            .addClass("highcharts-graph")
                            .attr(d)
                            .add(c)),
                          d["stroke-linecap"] &&
                            (u = Math.min(o.line.strokeWidth(), n) / 2),
                          n &&
                            o.line.attr({
                              d: [
                                ["M", u, t],
                                ["L", n - u, t],
                              ],
                            }),
                          p &&
                            !1 !== p.enabled &&
                            n &&
                            ((r = Math.min(s(p.radius, h), h)),
                            0 === this.symbol.indexOf("url") &&
                              ((p = i(p, { width: a, height: a })), (r = 0)),
                            (o.symbol = o =
                              l
                                .symbol(
                                  this.symbol,
                                  n / 2 - r,
                                  t - r,
                                  2 * r,
                                  2 * r,
                                  e({ context: "legend" }, p)
                                )
                                .addClass("highcharts-point")
                                .add(c)),
                            (o.isMarker = !0));
                      }),
                        (t.rectangle = function (t, e) {
                          e = e.legendItem || {};
                          const i = t.symbolHeight,
                            o = t.options.squareSymbol;
                          e.symbol = this.chart.renderer
                            .rect(
                              o ? (t.symbolWidth - i) / 2 : 0,
                              t.baseline - i + 1,
                              o ? i : t.symbolWidth,
                              i,
                              s(t.options.symbolRadius, i / 2)
                            )
                            .addClass("highcharts-point")
                            .attr({ zIndex: 3 })
                            .add(e.group);
                        });
                    })(o || (o = {})),
                    o
                  );
                }
              ),
              e(i, "Core/Series/SeriesDefaults.js", [], function () {
                return {
                  lineWidth: 1,
                  allowPointSelect: !1,
                  crisp: !0,
                  showCheckbox: !1,
                  animation: { duration: 1e3 },
                  enableMouseTracking: !0,
                  events: {},
                  marker: {
                    enabledThreshold: 2,
                    lineColor: "#ffffff",
                    lineWidth: 0,
                    radius: 4,
                    states: {
                      normal: { animation: !0 },
                      hover: {
                        animation: { duration: 150 },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1,
                      },
                      select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2,
                      },
                    },
                  },
                  point: { events: {} },
                  dataLabels: {
                    animation: {},
                    align: "center",
                    borderWidth: 0,
                    defer: !0,
                    formatter: function () {
                      const { numberFormatter: t } = this.series.chart;
                      return "number" != typeof this.y ? "" : t(this.y, -1);
                    },
                    padding: 5,
                    style: {
                      fontSize: "0.7em",
                      fontWeight: "bold",
                      color: "contrast",
                      textOutline: "1px contrast",
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                  },
                  cropThreshold: 300,
                  opacity: 1,
                  pointRange: 0,
                  softThreshold: !0,
                  states: {
                    normal: { animation: !0 },
                    hover: {
                      animation: { duration: 150 },
                      lineWidthPlus: 1,
                      marker: {},
                      halo: { size: 10, opacity: 0.25 },
                    },
                    select: { animation: { duration: 0 } },
                    inactive: { animation: { duration: 150 }, opacity: 0.2 },
                  },
                  stickyTracking: !0,
                  turboThreshold: 1e3,
                  findNearestPointBy: "x",
                };
              }),
              e(
                i,
                "Core/Series/SeriesRegistry.js",
                [
                  i["Core/Globals.js"],
                  i["Core/Defaults.js"],
                  i["Core/Series/Point.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s) {
                  const { defaultOptions: o } = e,
                    { extendClass: r, merge: n } = s;
                  var a;
                  return (
                    (function (e) {
                      function s(t, s) {
                        const r = o.plotOptions || {},
                          n = s.defaultOptions,
                          a = s.prototype;
                        (a.type = t),
                          a.pointClass || (a.pointClass = i),
                          n && (r[t] = n),
                          (e.seriesTypes[t] = s);
                      }
                      (e.seriesTypes = t.seriesTypes),
                        (e.registerSeriesType = s),
                        (e.seriesType = function (t, a, h, l, c) {
                          const d = o.plotOptions || {};
                          return (
                            (a = a || ""),
                            (d[t] = n(d[a], h)),
                            s(t, r(e.seriesTypes[a] || function () {}, l)),
                            (e.seriesTypes[t].prototype.type = t),
                            c &&
                              (e.seriesTypes[t].prototype.pointClass = r(i, c)),
                            e.seriesTypes[t]
                          );
                        });
                    })(a || (a = {})),
                    a
                  );
                }
              ),
              e(
                i,
                "Core/Series/Series.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Defaults.js"],
                  i["Core/Foundation.js"],
                  i["Core/Globals.js"],
                  i["Core/Legend/LegendSymbol.js"],
                  i["Core/Series/Point.js"],
                  i["Core/Series/SeriesDefaults.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r, n, a, h, l) {
                  const { animObject: c, setAnimation: d } = t,
                    { defaultOptions: p } = e,
                    { registerEventOptions: u } = i,
                    { hasTouch: g, svg: f, win: m } = s,
                    { seriesTypes: x } = a,
                    {
                      arrayMax: y,
                      arrayMin: b,
                      clamp: v,
                      correctFloat: S,
                      defined: k,
                      diffObjects: M,
                      erase: C,
                      error: w,
                      extend: T,
                      find: A,
                      fireEvent: P,
                      getClosestDistance: L,
                      getNestedProperty: O,
                      insertItem: E,
                      isArray: D,
                      isNumber: j,
                      isString: I,
                      merge: B,
                      objectEach: R,
                      pick: z,
                      removeEvent: N,
                      splat: W,
                      syncTimeout: H,
                    } = l;
                  class X {
                    constructor() {
                      this.zones =
                        this.yAxis =
                        this.xAxis =
                        this.userOptions =
                        this.tooltipOptions =
                        this.processedYData =
                        this.processedXData =
                        this.points =
                        this.options =
                        this.linkedSeries =
                        this.index =
                        this.eventsToUnbind =
                        this.eventOptions =
                        this.data =
                        this.chart =
                        this._i =
                          void 0;
                    }
                    init(t, e) {
                      P(this, "init", { options: e });
                      const i = this,
                        s = t.series;
                      (this.eventsToUnbind = []),
                        (i.chart = t),
                        (i.options = i.setOptions(e)),
                        (e = i.options),
                        (i.linkedSeries = []),
                        i.bindAxes(),
                        T(i, {
                          name: e.name,
                          state: "",
                          visible: !1 !== e.visible,
                          selected: !0 === e.selected,
                        }),
                        u(this, e);
                      const o = e.events;
                      let r;
                      ((o && o.click) ||
                        (e.point && e.point.events && e.point.events.click) ||
                        e.allowPointSelect) &&
                        (t.runTrackerClick = !0),
                        i.getColor(),
                        i.getSymbol(),
                        i.parallelArrays.forEach(function (t) {
                          i[t + "Data"] || (i[t + "Data"] = []);
                        }),
                        i.isCartesian && (t.hasCartesianSeries = !0),
                        s.length && (r = s[s.length - 1]),
                        (i._i = z(r && r._i, -1) + 1),
                        (i.opacity = i.options.opacity),
                        t.orderItems("series", E(this, s)),
                        e.dataSorting && e.dataSorting.enabled
                          ? i.setDataSortingOptions()
                          : i.points || i.data || i.setData(e.data, !1),
                        P(this, "afterInit");
                    }
                    is(t) {
                      return x[t] && this instanceof x[t];
                    }
                    bindAxes() {
                      const t = this,
                        e = t.options,
                        i = t.chart;
                      let s;
                      P(this, "bindAxes", null, function () {
                        (t.axisTypes || []).forEach(function (o) {
                          i[o].forEach(function (i) {
                            (s = i.options),
                              (z(e[o], 0) === i.index ||
                                (void 0 !== e[o] && e[o] === s.id)) &&
                                (E(t, i.series), (t[o] = i), (i.isDirty = !0));
                          }),
                            t[o] || t.optionalAxis === o || w(18, !0, i);
                        });
                      }),
                        P(this, "afterBindAxes");
                    }
                    updateParallelArrays(t, e, i) {
                      const s = t.series,
                        o = j(e)
                          ? function (i) {
                              const o =
                                "y" === i && s.toYData ? s.toYData(t) : t[i];
                              s[i + "Data"][e] = o;
                            }
                          : function (t) {
                              Array.prototype[e].apply(s[t + "Data"], i);
                            };
                      s.parallelArrays.forEach(o);
                    }
                    hasData() {
                      return (
                        (this.visible &&
                          void 0 !== this.dataMax &&
                          void 0 !== this.dataMin) ||
                        (this.visible && this.yData && 0 < this.yData.length)
                      );
                    }
                    autoIncrement(t) {
                      var e = this.options;
                      const i = e.pointIntervalUnit,
                        s = e.relativeXValue,
                        o = this.chart.time;
                      let r,
                        n = this.xIncrement;
                      return (
                        (n = z(n, e.pointStart, 0)),
                        (this.pointInterval = r =
                          z(this.pointInterval, e.pointInterval, 1)),
                        s && j(t) && (r *= t),
                        i &&
                          ((e = new o.Date(n)),
                          "day" === i
                            ? o.set("Date", e, o.get("Date", e) + r)
                            : "month" === i
                            ? o.set("Month", e, o.get("Month", e) + r)
                            : "year" === i &&
                              o.set("FullYear", e, o.get("FullYear", e) + r),
                          (r = e.getTime() - n)),
                        s && j(t) ? n + r : ((this.xIncrement = n + r), n)
                      );
                    }
                    setDataSortingOptions() {
                      const t = this.options;
                      T(this, {
                        requireSorting: !1,
                        sorted: !1,
                        enabledDataSorting: !0,
                        allowDG: !1,
                      }),
                        k(t.pointRange) || (t.pointRange = 1);
                    }
                    setOptions(t) {
                      var e, i;
                      const s = this.chart;
                      var o = s.options.plotOptions,
                        r = s.userOptions || {};
                      const n = B(t);
                      t = s.styledMode;
                      const a = { plotOptions: o, userOptions: n };
                      P(this, "setOptions", a);
                      const h = a.plotOptions[this.type],
                        l = (r = r.plotOptions || {}).series || {},
                        c = p.plotOptions[this.type] || {},
                        d = r[this.type] || {};
                      return (
                        (this.userOptions = a.userOptions),
                        (o = B(h, o.series, d, n)),
                        (this.tooltipOptions = B(
                          p.tooltip,
                          null === (e = p.plotOptions.series) || void 0 === e
                            ? void 0
                            : e.tooltip,
                          null == c ? void 0 : c.tooltip,
                          s.userOptions.tooltip,
                          null === (i = r.series) || void 0 === i
                            ? void 0
                            : i.tooltip,
                          d.tooltip,
                          n.tooltip
                        )),
                        (this.stickyTracking = z(
                          n.stickyTracking,
                          d.stickyTracking,
                          l.stickyTracking,
                          !(
                            !this.tooltipOptions.shared || this.noSharedTooltip
                          ) || o.stickyTracking
                        )),
                        null === h.marker && delete o.marker,
                        (this.zoneAxis = o.zoneAxis),
                        (i = this.zones = (o.zones || []).slice()),
                        (!o.negativeColor && !o.negativeFillColor) ||
                          o.zones ||
                          ((e = {
                            value:
                              o[this.zoneAxis + "Threshold"] ||
                              o.threshold ||
                              0,
                            className: "highcharts-negative",
                          }),
                          t ||
                            ((e.color = o.negativeColor),
                            (e.fillColor = o.negativeFillColor)),
                          i.push(e)),
                        i.length &&
                          k(i[i.length - 1].value) &&
                          i.push(
                            t
                              ? {}
                              : { color: this.color, fillColor: this.fillColor }
                          ),
                        P(this, "afterSetOptions", { options: o }),
                        o
                      );
                    }
                    getName() {
                      return z(this.options.name, "Series " + (this.index + 1));
                    }
                    getCyclic(t, e, i) {
                      const s = this.chart,
                        o = `${t}Index`,
                        r = `${t}Counter`,
                        n =
                          (null == i ? void 0 : i.length) ||
                          s.options.chart.colorCount;
                      if (!e) {
                        var a = z(
                          "color" === t ? this.options.colorIndex : void 0,
                          this[o]
                        );
                        k(a) ||
                          (s.series.length || (s[r] = 0),
                          (a = s[r] % n),
                          (s[r] += 1)),
                          i && (e = i[a]);
                      }
                      void 0 !== a && (this[o] = a), (this[t] = e);
                    }
                    getColor() {
                      this.chart.styledMode
                        ? this.getCyclic("color")
                        : this.options.colorByPoint
                        ? (this.color = "#cccccc")
                        : this.getCyclic(
                            "color",
                            this.options.color ||
                              p.plotOptions[this.type].color,
                            this.chart.options.colors
                          );
                    }
                    getPointsCollection() {
                      return (
                        (this.hasGroupedData ? this.points : this.data) || []
                      );
                    }
                    getSymbol() {
                      this.getCyclic(
                        "symbol",
                        this.options.marker.symbol,
                        this.chart.options.symbols
                      );
                    }
                    findPointIndex(t, e) {
                      const i = t.id,
                        s = t.x,
                        o = this.points;
                      var n,
                        a = this.options.dataSorting;
                      let h, l;
                      if (i) (a = this.chart.get(i)) instanceof r && (n = a);
                      else if (
                        (this.linkedParent ||
                          this.enabledDataSorting ||
                          this.options.relativeXValue) &&
                        ((n = (e) => !e.touched && e.index === t.index),
                        a && a.matchByName
                          ? (n = (e) => !e.touched && e.name === t.name)
                          : this.options.relativeXValue &&
                            (n = (e) => !e.touched && e.options.x === t.x),
                        !(n = A(o, n)))
                      )
                        return;
                      return (
                        n && ((l = n && n.index), void 0 !== l && (h = !0)),
                        void 0 === l && j(s) && (l = this.xData.indexOf(s, e)),
                        -1 !== l &&
                          void 0 !== l &&
                          this.cropped &&
                          (l = l >= this.cropStart ? l - this.cropStart : l),
                        !h && j(l) && o[l] && o[l].touched && (l = void 0),
                        l
                      );
                    }
                    updateData(t, e) {
                      const i = this.options,
                        s = i.dataSorting,
                        o = this.points,
                        r = [],
                        n = this.requireSorting,
                        a = t.length === o.length;
                      let h,
                        l,
                        c,
                        d = !0;
                      if (
                        ((this.xIncrement = null),
                        t.forEach(function (t, e) {
                          var l =
                            (k(t) &&
                              this.pointClass.prototype.optionsToObject.call(
                                { series: this },
                                t
                              )) ||
                            {};
                          const d = l.x;
                          l.id || j(d)
                            ? (-1 === (l = this.findPointIndex(l, c)) ||
                              void 0 === l
                                ? r.push(t)
                                : o[l] && t !== i.data[l]
                                ? (o[l].update(t, !1, null, !1),
                                  (o[l].touched = !0),
                                  n && (c = l + 1))
                                : o[l] && (o[l].touched = !0),
                              (!a ||
                                e !== l ||
                                (s && s.enabled) ||
                                this.hasDerivedData) &&
                                (h = !0))
                            : r.push(t);
                        }, this),
                        h)
                      )
                        for (t = o.length; t--; )
                          (l = o[t]) &&
                            !l.touched &&
                            l.remove &&
                            l.remove(!1, e);
                      else
                        !a || (s && s.enabled)
                          ? (d = !1)
                          : (t.forEach(function (t, e) {
                              t === o[e].y ||
                                o[e].destroyed ||
                                o[e].update(t, !1, null, !1);
                            }),
                            (r.length = 0));
                      return (
                        o.forEach(function (t) {
                          t && (t.touched = !1);
                        }),
                        !!d &&
                          (r.forEach(function (t) {
                            this.addPoint(t, !1, null, null, !1);
                          }, this),
                          null === this.xIncrement &&
                            this.xData &&
                            this.xData.length &&
                            ((this.xIncrement = y(this.xData)),
                            this.autoIncrement()),
                          !0)
                      );
                    }
                    setData(t, e = !0, i, s) {
                      var o;
                      const r = this,
                        n = r.points,
                        a = (n && n.length) || 0,
                        h = r.options,
                        l = r.chart,
                        c = h.dataSorting,
                        d = r.xAxis,
                        p = h.turboThreshold,
                        u = this.xData,
                        g = this.yData;
                      var f = r.pointArrayMap;
                      f = f && f.length;
                      const m = h.keys;
                      let x,
                        y = 0,
                        b = 1,
                        v = null;
                      if (!l.options.chart.allowMutatingData) {
                        h.data && delete r.options.data,
                          r.userOptions.data && delete r.userOptions.data;
                        var S = B(!0, t);
                      }
                      if (
                        ((S = (t = S || t || []).length),
                        c && c.enabled && (t = this.sortData(t)),
                        l.options.chart.allowMutatingData &&
                          !1 !== s &&
                          S &&
                          a &&
                          !r.cropped &&
                          !r.hasGroupedData &&
                          r.visible &&
                          !r.boosted &&
                          (x = this.updateData(t, i)),
                        !x)
                      ) {
                        if (
                          ((r.xIncrement = null),
                          (r.colorCounter = 0),
                          this.parallelArrays.forEach(function (t) {
                            r[t + "Data"].length = 0;
                          }),
                          p && S > p)
                        )
                          if (((v = r.getFirstValidPoint(t)), j(v)))
                            for (i = 0; i < S; i++)
                              (u[i] = this.autoIncrement()), (g[i] = t[i]);
                          else if (D(v))
                            if (f)
                              if (v.length === f)
                                for (i = 0; i < S; i++)
                                  (u[i] = this.autoIncrement()), (g[i] = t[i]);
                              else
                                for (i = 0; i < S; i++)
                                  (s = t[i]),
                                    (u[i] = s[0]),
                                    (g[i] = s.slice(1, f + 1));
                            else if (
                              (m &&
                                ((y = m.indexOf("x")),
                                (b = m.indexOf("y")),
                                (y = 0 <= y ? y : 0),
                                (b = 0 <= b ? b : 1)),
                              1 === v.length && (b = 0),
                              y === b)
                            )
                              for (i = 0; i < S; i++)
                                (u[i] = this.autoIncrement()), (g[i] = t[i][b]);
                            else
                              for (i = 0; i < S; i++)
                                (s = t[i]), (u[i] = s[y]), (g[i] = s[b]);
                          else w(12, !1, l);
                        else
                          for (i = 0; i < S; i++)
                            (s = { series: r }),
                              r.pointClass.prototype.applyOptions.apply(s, [
                                t[i],
                              ]),
                              r.updateParallelArrays(s, i);
                        for (
                          g && I(g[0]) && w(14, !0, l),
                            r.data = [],
                            r.options.data = r.userOptions.data = t,
                            i = a;
                          i--;

                        )
                          null === (o = n[i]) || void 0 === o || o.destroy();
                        d && (d.minRange = d.userMinRange),
                          (r.isDirty = l.isDirtyBox = !0),
                          (r.isDirtyData = !!n),
                          (i = !1);
                      }
                      "point" === h.legendType &&
                        (this.processData(), this.generatePoints()),
                        e && l.redraw(i);
                    }
                    sortData(t) {
                      const e = this,
                        i = e.options.dataSorting.sortKey || "y",
                        s = function (t, e) {
                          return (
                            (k(e) &&
                              t.pointClass.prototype.optionsToObject.call(
                                { series: t },
                                e
                              )) ||
                            {}
                          );
                        };
                      return (
                        t.forEach(function (i, o) {
                          (t[o] = s(e, i)), (t[o].index = o);
                        }, this),
                        t
                          .concat()
                          .sort(
                            (t, e) => (
                              (t = O(i, t)),
                              (e = O(i, e)) < t ? -1 : e > t ? 1 : 0
                            )
                          )
                          .forEach(function (t, e) {
                            t.x = e;
                          }, this),
                        e.linkedSeries &&
                          e.linkedSeries.forEach(function (e) {
                            const i = e.options,
                              o = i.data;
                            (i.dataSorting && i.dataSorting.enabled) ||
                              !o ||
                              (o.forEach(function (i, r) {
                                (o[r] = s(e, i)),
                                  t[r] && ((o[r].x = t[r].x), (o[r].index = r));
                              }),
                              e.setData(o, !1));
                          }),
                        t
                      );
                    }
                    getProcessedData(t) {
                      const e = this;
                      var i = e.xAxis,
                        s = e.options;
                      const o = s.cropThreshold,
                        r = t || e.getExtremesFromAll || s.getExtremesFromAll,
                        n = null == i ? void 0 : i.logarithmic,
                        a = e.isCartesian;
                      let h,
                        l = 0;
                      (t = e.xData), (s = e.yData);
                      let c = !1;
                      const d = t.length;
                      if (i) {
                        var p = i.getExtremes();
                        (h = p.min),
                          (p = p.max),
                          (c = !(!i.categories || i.names.length));
                      }
                      if (a && e.sorted && !r && (!o || d > o || e.forceCrop))
                        if (t[d - 1] < h || t[0] > p) (t = []), (s = []);
                        else if (e.yData && (t[0] < h || t[d - 1] > p)) {
                          var u = this.cropData(e.xData, e.yData, h, p);
                          (t = u.xData), (s = u.yData), (l = u.start), (u = !0);
                        }
                      return (
                        (i = L(
                          [n ? t.map(n.log2lin) : t],
                          () => e.requireSorting && !c && w(15, !1, e.chart)
                        )),
                        {
                          xData: t,
                          yData: s,
                          cropped: u,
                          cropStart: l,
                          closestPointRange: i,
                        }
                      );
                    }
                    processData(t) {
                      const e = this.xAxis;
                      if (
                        this.isCartesian &&
                        !this.isDirty &&
                        !e.isDirty &&
                        !this.yAxis.isDirty &&
                        !t
                      )
                        return !1;
                      (t = this.getProcessedData()),
                        (this.cropped = t.cropped),
                        (this.cropStart = t.cropStart),
                        (this.processedXData = t.xData),
                        (this.processedYData = t.yData),
                        (this.closestPointRange = this.basePointRange =
                          t.closestPointRange),
                        P(this, "afterProcessData");
                    }
                    cropData(t, e, i, s, o) {
                      const r = t.length;
                      let n,
                        a = 0,
                        h = r;
                      for (o = z(o, this.cropShoulder), n = 0; n < r; n++)
                        if (t[n] >= i) {
                          a = Math.max(0, n - o);
                          break;
                        }
                      for (i = n; i < r; i++)
                        if (t[i] > s) {
                          h = i + o;
                          break;
                        }
                      return {
                        xData: t.slice(a, h),
                        yData: e.slice(a, h),
                        start: a,
                        end: h,
                      };
                    }
                    generatePoints() {
                      var t = this.options;
                      const e = this.processedData || t.data,
                        i = this.processedXData,
                        s = this.processedYData,
                        o = this.pointClass,
                        r = i.length,
                        n = this.cropStart || 0,
                        a = this.hasGroupedData,
                        h = t.keys,
                        l = [];
                      let c;
                      t = t.dataGrouping && t.dataGrouping.groupAll ? n : 0;
                      let d,
                        p,
                        u = this.data;
                      if (!u && !a) {
                        var g = [];
                        (g.length = e.length), (u = this.data = g);
                      }
                      for (
                        h && a && (this.options.keys = !1), p = 0;
                        p < r;
                        p++
                      )
                        (g = n + p),
                          a
                            ? ((d = new o().init(this, [i[p]].concat(W(s[p])))),
                              (d.dataGroup = this.groupMap[t + p]),
                              d.dataGroup.options &&
                                ((d.options = d.dataGroup.options),
                                T(d, d.dataGroup.options),
                                delete d.dataLabels))
                            : (d = u[g]) ||
                              void 0 === e[g] ||
                              (u[g] = d = new o().init(this, e[g], i[p])),
                          d && ((d.index = a ? t + p : g), (l[p] = d));
                      if (
                        ((this.options.keys = h),
                        u && (r !== (c = u.length) || a))
                      )
                        for (p = 0; p < c; p++)
                          p !== n || a || (p += r),
                            u[p] &&
                              (u[p].destroyElements(), (u[p].plotX = void 0));
                      (this.data = u),
                        (this.points = l),
                        P(this, "afterGeneratePoints");
                    }
                    getXExtremes(t) {
                      return { min: b(t), max: y(t) };
                    }
                    getExtremes(t, e) {
                      const i = this.xAxis;
                      var s = this.yAxis;
                      const o = this.processedXData || this.xData,
                        r = [],
                        n = this.requireSorting ? this.cropShoulder : 0;
                      s = !!s && s.positiveValuesOnly;
                      let a,
                        h = 0,
                        l = 0,
                        c = 0;
                      const d = (t =
                        t || this.stackedYData || this.processedYData || [])
                        .length;
                      if (i) {
                        var p = i.getExtremes();
                        (h = p.min), (l = p.max);
                      }
                      for (a = 0; a < d; a++) {
                        var u = o[a];
                        p = t[a];
                        var g = (j(p) || D(p)) && (p.length || 0 < p || !s);
                        if (
                          ((u =
                            e ||
                            this.getExtremesFromAll ||
                            this.options.getExtremesFromAll ||
                            this.cropped ||
                            !i ||
                            ((o[a + n] || u) >= h && (o[a - n] || u) <= l)),
                          g && u)
                        )
                          if ((g = p.length))
                            for (; g--; ) j(p[g]) && (r[c++] = p[g]);
                          else r[c++] = p;
                      }
                      return (
                        (t = { activeYData: r, dataMin: b(r), dataMax: y(r) }),
                        P(this, "afterGetExtremes", { dataExtremes: t }),
                        t
                      );
                    }
                    applyExtremes() {
                      const t = this.getExtremes();
                      return (
                        (this.dataMin = t.dataMin),
                        (this.dataMax = t.dataMax),
                        t
                      );
                    }
                    getFirstValidPoint(t) {
                      const e = t.length;
                      let i = 0,
                        s = null;
                      for (; null === s && i < e; ) (s = t[i]), i++;
                      return s;
                    }
                    translate() {
                      var t;
                      this.processedXData || this.processData(),
                        this.generatePoints();
                      var e = this.options;
                      const i = e.stacking,
                        s = this.xAxis,
                        o = s.categories,
                        r = this.enabledDataSorting,
                        n = this.yAxis,
                        a = this.points,
                        h = a.length,
                        l = this.pointPlacementToXValue(),
                        c = !!l,
                        d = e.threshold;
                      e = e.startFromThreshold ? d : 0;
                      let p,
                        u,
                        g,
                        f,
                        m = Number.MAX_VALUE;
                      for (p = 0; p < h; p++) {
                        const h = a[p],
                          x = h.x;
                        let y,
                          b,
                          M = h.y,
                          C = h.low;
                        const w =
                          i &&
                          (null === (t = n.stacking) || void 0 === t
                            ? void 0
                            : t.stacks[
                                (this.negStacks && M < (e ? 0 : d) ? "-" : "") +
                                  this.stackKey
                              ]);
                        let T;
                        (u = s.translate(x, !1, !1, !1, !0, l)),
                          (h.plotX = j(u) ? S(v(u, -1e5, 1e5)) : void 0),
                          i &&
                            this.visible &&
                            w &&
                            w[x] &&
                            ((f = this.getStackIndicator(f, x, this.index)),
                            !h.isNull &&
                              f.key &&
                              ((y = w[x]), (b = y.points[f.key])),
                            y &&
                              D(b) &&
                              ((C = b[0]),
                              (M = b[1]),
                              C === e &&
                                f.key === w[x].base &&
                                (C = z(j(d) ? d : n.min)),
                              n.positiveValuesOnly &&
                                k(C) &&
                                0 >= C &&
                                (C = void 0),
                              (h.total = h.stackTotal = z(y.total)),
                              (h.percentage =
                                k(h.y) && y.total
                                  ? (h.y / y.total) * 100
                                  : void 0),
                              (h.stackY = M),
                              this.irregularWidths ||
                                y.setOffset(
                                  this.pointXOffset || 0,
                                  this.barW || 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  this.xAxis
                                ))),
                          (h.yBottom = k(C)
                            ? v(n.translate(C, !1, !0, !1, !0), -1e5, 1e5)
                            : void 0),
                          this.dataModify &&
                            (M = this.dataModify.modifyValue(M, p)),
                          j(M) &&
                            void 0 !== h.plotX &&
                            ((T = n.translate(M, !1, !0, !1, !0)),
                            (T = j(T) ? v(T, -1e5, 1e5) : void 0)),
                          (h.plotY = T),
                          (h.isInside = this.isPointInside(h)),
                          (h.clientX = c
                            ? S(s.translate(x, !1, !1, !1, !0, l))
                            : u),
                          (h.negative = (h.y || 0) < (d || 0)),
                          (h.category = z(o && o[h.x], h.x)),
                          h.isNull ||
                            !1 === h.visible ||
                            (void 0 !== g && (m = Math.min(m, Math.abs(u - g))),
                            (g = u)),
                          (h.zone = this.zones.length ? h.getZone() : void 0),
                          !h.graphic && this.group && r && (h.isNew = !0);
                      }
                      (this.closestPointRangePx = m), P(this, "afterTranslate");
                    }
                    getValidPoints(t, e, i) {
                      const s = this.chart;
                      return (t || this.points || []).filter(function (t) {
                        const { plotX: o, plotY: r } = t;
                        return (
                          !(
                            !(i || (!t.isNull && j(r))) ||
                            (e &&
                              !s.isInsidePlot(o, r, { inverted: s.inverted }))
                          ) && !1 !== t.visible
                        );
                      });
                    }
                    getClipBox() {
                      const { chart: t, xAxis: e, yAxis: i } = this,
                        s = B(t.clipBox);
                      return (
                        e && e.len !== t.plotSizeX && (s.width = e.len),
                        i && i.len !== t.plotSizeY && (s.height = i.len),
                        s
                      );
                    }
                    getSharedClipKey() {
                      return (this.sharedClipKey =
                        (this.options.xAxis || 0) +
                        "," +
                        (this.options.yAxis || 0));
                    }
                    setClip() {
                      const { chart: t, group: e, markerGroup: i } = this,
                        s = t.sharedClips,
                        o = t.renderer,
                        r = this.getClipBox(),
                        n = this.getSharedClipKey();
                      let a = s[n];
                      a ? a.animate(r) : (s[n] = a = o.clipRect(r)),
                        e && e.clip(!1 === this.options.clip ? void 0 : a),
                        i && i.clip();
                    }
                    animate(t) {
                      const { chart: e, group: i, markerGroup: s } = this,
                        o = e.inverted;
                      var r = c(this.options.animation),
                        n = [
                          this.getSharedClipKey(),
                          r.duration,
                          r.easing,
                          r.defer,
                        ].join();
                      let a = e.sharedClips[n],
                        h = e.sharedClips[n + "m"];
                      if (t && i)
                        (r = this.getClipBox()),
                          a
                            ? a.attr("height", r.height)
                            : ((r.width = 0),
                              o && (r.x = e.plotHeight),
                              (a = e.renderer.clipRect(r)),
                              (e.sharedClips[n] = a),
                              (h = e.renderer.clipRect({
                                x: -99,
                                y: -99,
                                width: o ? e.plotWidth + 199 : 99,
                                height: o ? 99 : e.plotHeight + 199,
                              })),
                              (e.sharedClips[n + "m"] = h)),
                          i.clip(a),
                          s && s.clip(h);
                      else if (a && !a.hasClass("highcharts-animating")) {
                        n = this.getClipBox();
                        const t = r.step;
                        s &&
                          s.element.childNodes.length &&
                          (r.step = function (e, i) {
                            t && t.apply(i, arguments),
                              "width" === i.prop &&
                                h &&
                                h.element &&
                                h.attr(o ? "height" : "width", e + 99);
                          }),
                          a.addClass("highcharts-animating").animate(n, r);
                      }
                    }
                    afterAnimate() {
                      this.setClip(),
                        R(this.chart.sharedClips, (t, e, i) => {
                          t &&
                            !this.chart.container.querySelector(
                              `[clip-path="url(#${t.id})"]`
                            ) &&
                            (t.destroy(), delete i[e]);
                        }),
                        (this.finishedAnimating = !0),
                        P(this, "afterAnimate");
                    }
                    drawPoints(t = this.points) {
                      const e = this.chart,
                        i = e.styledMode,
                        { colorAxis: s, options: o } = this,
                        r = o.marker,
                        n = this[this.specialGroup || "markerGroup"],
                        a = this.xAxis,
                        h = z(
                          r.enabled,
                          !(a && !a.isRadial) || null,
                          this.closestPointRangePx >=
                            r.enabledThreshold * r.radius
                        );
                      let l, c, d, p, u, g;
                      if (!1 !== r.enabled || this._hasPointMarkers)
                        for (l = 0; l < t.length; l++) {
                          (c = t[l]),
                            (p = (d = c.graphic) ? "animate" : "attr");
                          var f = c.marker || {};
                          if (
                            ((u = !!c.marker),
                            ((h && void 0 === f.enabled) || f.enabled) &&
                              !c.isNull &&
                              !1 !== c.visible)
                          ) {
                            const t = z(f.symbol, this.symbol, "rect");
                            (g = this.markerAttribs(c, c.selected && "select")),
                              this.enabledDataSorting &&
                                (c.startXPos = a.reversed
                                  ? -(g.width || 0)
                                  : a.width);
                            const o = !1 !== c.isInside;
                            !d &&
                              o &&
                              (0 < (g.width || 0) || c.hasImage) &&
                              ((c.graphic = d =
                                e.renderer
                                  .symbol(
                                    t,
                                    g.x,
                                    g.y,
                                    g.width,
                                    g.height,
                                    u ? f : r
                                  )
                                  .add(n)),
                              this.enabledDataSorting &&
                                e.hasRendered &&
                                (d.attr({ x: c.startXPos }), (p = "animate"))),
                              d &&
                                "animate" === p &&
                                d[o ? "show" : "hide"](o).animate(g),
                              d &&
                                ((f = this.pointAttribs(
                                  c,
                                  i || !c.selected ? void 0 : "select"
                                )),
                                i ? s && d.css({ fill: f.fill }) : d[p](f)),
                              d && d.addClass(c.getClassName(), !0);
                          } else d && (c.graphic = d.destroy());
                        }
                    }
                    markerAttribs(t, e) {
                      const i = this.options;
                      var s = i.marker;
                      const o = t.marker || {},
                        r = o.symbol || s.symbol,
                        n = {};
                      let a = z(o.radius, s && s.radius);
                      return (
                        e &&
                          ((s = s.states[e]),
                          (e = o.states && o.states[e]),
                          (a = z(
                            e && e.radius,
                            s && s.radius,
                            a && a + ((s && s.radiusPlus) || 0)
                          ))),
                        (t.hasImage = r && 0 === r.indexOf("url")),
                        t.hasImage && (a = 0),
                        (t = t.pos()),
                        j(a) &&
                          t &&
                          ((n.x = t[0] - a),
                          (n.y = t[1] - a),
                          i.crisp && (n.x = Math.floor(n.x))),
                        a && (n.width = n.height = 2 * a),
                        n
                      );
                    }
                    pointAttribs(t, e) {
                      var i = this.options.marker,
                        s = t && t.options;
                      const o = (s && s.marker) || {};
                      var r = s && s.color,
                        n = t && t.color;
                      const a = t && t.zone && t.zone.color;
                      let h = this.color;
                      return (
                        (t = z(o.lineWidth, i.lineWidth)),
                        (s = 1),
                        (h = r || a || n || h),
                        (r = o.fillColor || i.fillColor || h),
                        (n = o.lineColor || i.lineColor || h),
                        (e = e || "normal"),
                        (i = i.states[e] || {}),
                        (e = (o.states && o.states[e]) || {}),
                        (t = z(
                          e.lineWidth,
                          i.lineWidth,
                          t + z(e.lineWidthPlus, i.lineWidthPlus, 0)
                        )),
                        (r = e.fillColor || i.fillColor || r),
                        {
                          stroke: (n = e.lineColor || i.lineColor || n),
                          "stroke-width": t,
                          fill: r,
                          opacity: (s = z(e.opacity, i.opacity, s)),
                        }
                      );
                    }
                    destroy(t) {
                      const e = this,
                        i = e.chart,
                        s = /AppleWebKit\/533/.test(m.navigator.userAgent),
                        o = e.data || [];
                      let r, n, a, c;
                      for (
                        P(e, "destroy", { keepEventsForUpdate: t }),
                          this.removeEvents(t),
                          (e.axisTypes || []).forEach(function (t) {
                            (c = e[t]) &&
                              c.series &&
                              (C(c.series, e),
                              (c.isDirty = c.forceRedraw = !0));
                          }),
                          e.legendItem && e.chart.legend.destroyItem(e),
                          n = o.length;
                        n--;

                      )
                        (a = o[n]) && a.destroy && a.destroy();
                      e.clips && e.clips.forEach((t) => t.destroy()),
                        l.clearTimeout(e.animationTimeout),
                        R(e, function (t, e) {
                          t instanceof h &&
                            !t.survive &&
                            ((r = s && "group" === e ? "hide" : "destroy"),
                            t[r]());
                        }),
                        i.hoverSeries === e && (i.hoverSeries = void 0),
                        C(i.series, e),
                        i.orderItems("series"),
                        R(e, function (i, s) {
                          (t && "hcEvents" === s) || delete e[s];
                        });
                    }
                    applyZones() {
                      const t = this,
                        e = this.chart,
                        i = e.renderer,
                        s = this.zones,
                        o = this.clips || [],
                        r = this.graph,
                        n = this.area,
                        a = Math.max(e.plotWidth, e.plotHeight),
                        h = this[(this.zoneAxis || "y") + "Axis"],
                        l = e.inverted;
                      let c,
                        d,
                        p,
                        u,
                        g,
                        f,
                        m,
                        x,
                        y,
                        b,
                        S,
                        k = !1;
                      s.length && (r || n) && h && void 0 !== h.min
                        ? ((g = h.reversed),
                          (f = h.horiz),
                          r && !this.showLine && r.hide(),
                          n && n.hide(),
                          (u = h.getExtremes()),
                          s.forEach(function (s, M) {
                            (c = g
                              ? f
                                ? e.plotWidth
                                : 0
                              : f
                              ? 0
                              : h.toPixels(u.min) || 0),
                              (c = v(z(d, c), 0, a)),
                              (d = v(
                                Math.round(
                                  h.toPixels(z(s.value, u.max), !0) || 0
                                ),
                                0,
                                a
                              )),
                              k && (c = d = h.toPixels(u.max)),
                              (m = Math.abs(c - d)),
                              (x = Math.min(c, d)),
                              (y = Math.max(c, d)),
                              h.isXAxis
                                ? ((p = {
                                    x: l ? y : x,
                                    y: 0,
                                    width: m,
                                    height: a,
                                  }),
                                  f || (p.x = e.plotHeight - p.x))
                                : ((p = {
                                    x: 0,
                                    y: l ? y : x,
                                    width: a,
                                    height: m,
                                  }),
                                  f && (p.y = e.plotWidth - p.y)),
                              o[M] ? o[M].animate(p) : (o[M] = i.clipRect(p)),
                              (b = t["zone-area-" + M]),
                              (S = t["zone-graph-" + M]),
                              r && S && S.clip(o[M]),
                              n && b && b.clip(o[M]),
                              (k = s.value > u.max),
                              t.resetZones && 0 === d && (d = void 0);
                          }),
                          (this.clips = o))
                        : t.visible && (r && r.show(), n && n.show());
                    }
                    plotGroup(t, e, i, s, o) {
                      let r = this[t];
                      const n = !r;
                      return (
                        (i = { visibility: i, zIndex: s || 0.1 }),
                        void 0 === this.opacity ||
                          this.chart.styledMode ||
                          "inactive" === this.state ||
                          (i.opacity = this.opacity),
                        n && (this[t] = r = this.chart.renderer.g().add(o)),
                        r.addClass(
                          "highcharts-" +
                            e +
                            " highcharts-series-" +
                            this.index +
                            " highcharts-" +
                            this.type +
                            "-series " +
                            (k(this.colorIndex)
                              ? "highcharts-color-" + this.colorIndex + " "
                              : "") +
                            (this.options.className || "") +
                            (r.hasClass("highcharts-tracker")
                              ? " highcharts-tracker"
                              : ""),
                          !0
                        ),
                        r.attr(i)[n ? "attr" : "animate"](this.getPlotBox(e)),
                        r
                      );
                    }
                    getPlotBox(t) {
                      let e = this.xAxis,
                        i = this.yAxis;
                      const s = this.chart;
                      return (
                        (t =
                          s.inverted &&
                          !s.polar &&
                          e &&
                          !1 !== this.invertible &&
                          "series" === t),
                        s.inverted && ((e = i), (i = this.xAxis)),
                        {
                          translateX: e ? e.left : s.plotLeft,
                          translateY: i ? i.top : s.plotTop,
                          rotation: t ? 90 : 0,
                          rotationOriginX: t ? (e.len - i.len) / 2 : 0,
                          rotationOriginY: t ? (e.len + i.len) / 2 : 0,
                          scaleX: t ? -1 : 1,
                          scaleY: 1,
                        }
                      );
                    }
                    removeEvents(t) {
                      t || N(this),
                        this.eventsToUnbind.length &&
                          (this.eventsToUnbind.forEach(function (t) {
                            t();
                          }),
                          (this.eventsToUnbind.length = 0));
                    }
                    render() {
                      const t = this;
                      var e = t.chart;
                      const i = t.options,
                        s = c(i.animation),
                        o = t.visible ? "inherit" : "hidden",
                        r = i.zIndex,
                        n = t.hasRendered;
                      e = e.seriesGroup;
                      let a = t.finishedAnimating ? 0 : s.duration;
                      P(this, "render"),
                        t.plotGroup("group", "series", o, r, e),
                        (t.markerGroup = t.plotGroup(
                          "markerGroup",
                          "markers",
                          o,
                          r,
                          e
                        )),
                        !1 !== i.clip && t.setClip(),
                        t.animate && a && t.animate(!0),
                        t.drawGraph && (t.drawGraph(), t.applyZones()),
                        t.visible && t.drawPoints(),
                        t.drawDataLabels && t.drawDataLabels(),
                        t.redrawPoints && t.redrawPoints(),
                        t.drawTracker &&
                          i.enableMouseTracking &&
                          t.drawTracker(),
                        t.animate && a && t.animate(),
                        n ||
                          (a && s.defer && (a += s.defer),
                          (t.animationTimeout = H(function () {
                            t.afterAnimate();
                          }, a || 0))),
                        (t.isDirty = !1),
                        (t.hasRendered = !0),
                        P(t, "afterRender");
                    }
                    redraw() {
                      const t = this.isDirty || this.isDirtyData;
                      this.translate(), this.render(), t && delete this.kdTree;
                    }
                    searchPoint(t, e) {
                      const i = this.xAxis,
                        s = this.yAxis,
                        o = this.chart.inverted;
                      return this.searchKDTree(
                        {
                          clientX: o
                            ? i.len - t.chartY + i.pos
                            : t.chartX - i.pos,
                          plotY: o
                            ? s.len - t.chartX + s.pos
                            : t.chartY - s.pos,
                        },
                        e,
                        t
                      );
                    }
                    buildKDTree(t) {
                      function e(t, s, o) {
                        var r = t && t.length;
                        let n;
                        if (r)
                          return (
                            (n = i.kdAxisArray[s % o]),
                            t.sort(function (t, e) {
                              return t[n] - e[n];
                            }),
                            {
                              point: t[(r = Math.floor(r / 2))],
                              left: e(t.slice(0, r), s + 1, o),
                              right: e(t.slice(r + 1), s + 1, o),
                            }
                          );
                      }
                      this.buildingKdTree = !0;
                      const i = this,
                        s =
                          -1 < i.options.findNearestPointBy.indexOf("y")
                            ? 2
                            : 1;
                      delete i.kdTree,
                        H(
                          function () {
                            (i.kdTree = e(
                              i.getValidPoints(null, !i.directTouch),
                              s,
                              s
                            )),
                              (i.buildingKdTree = !1);
                          },
                          i.options.kdNow || (t && "touchstart" === t.type)
                            ? 0
                            : 1
                        );
                    }
                    searchKDTree(t, e, i) {
                      const s = this,
                        o = this.kdAxisArray[0],
                        r = this.kdAxisArray[1],
                        n = e ? "distX" : "dist";
                      if (
                        ((e =
                          -1 < s.options.findNearestPointBy.indexOf("y")
                            ? 2
                            : 1),
                        this.kdTree ||
                          this.buildingKdTree ||
                          this.buildKDTree(i),
                        this.kdTree)
                      )
                        return (function t(e, i, a, h) {
                          const l = i.point;
                          var c = s.kdAxisArray[a % h];
                          let d = l;
                          var p =
                              k(e[o]) && k(l[o])
                                ? Math.pow(e[o] - l[o], 2)
                                : null,
                            u =
                              k(e[r]) && k(l[r])
                                ? Math.pow(e[r] - l[r], 2)
                                : null;
                          return (
                            (u = (p || 0) + (u || 0)),
                            (l.dist = k(u) ? Math.sqrt(u) : Number.MAX_VALUE),
                            (l.distX = k(p) ? Math.sqrt(p) : Number.MAX_VALUE),
                            (p = 0 > (c = e[c] - l[c]) ? "right" : "left"),
                            i[(u = 0 > c ? "left" : "right")] &&
                              (d =
                                (u = t(e, i[u], a + 1, h))[n] < d[n] ? u : l),
                            i[p] &&
                              Math.sqrt(c * c) < d[n] &&
                              (d =
                                (e = t(e, i[p], a + 1, h))[n] < d[n] ? e : d),
                            d
                          );
                        })(t, this.kdTree, e, e);
                    }
                    pointPlacementToXValue() {
                      const {
                        options: { pointPlacement: t, pointRange: e },
                        xAxis: i,
                      } = this;
                      let s = t;
                      return (
                        "between" === s && (s = i.reversed ? -0.5 : 0.5),
                        j(s) ? s * (e || i.pointRange) : 0
                      );
                    }
                    isPointInside(t) {
                      const { chart: e, xAxis: i, yAxis: s } = this;
                      return (
                        void 0 !== t.plotY &&
                        void 0 !== t.plotX &&
                        0 <= t.plotY &&
                        t.plotY <= (s ? s.len : e.plotHeight) &&
                        0 <= t.plotX &&
                        t.plotX <= (i ? i.len : e.plotWidth)
                      );
                    }
                    drawTracker() {
                      const t = this,
                        e = t.options,
                        i = e.trackByArea,
                        s = [].concat(i ? t.areaPath : t.graphPath),
                        o = t.chart,
                        r = o.pointer,
                        n = o.renderer,
                        a = o.options.tooltip.snap,
                        h = t.tracker,
                        l = function (i) {
                          e.enableMouseTracking &&
                            o.hoverSeries !== t &&
                            t.onMouseOver();
                        },
                        c = "rgba(192,192,192," + (f ? 1e-4 : 0.002) + ")";
                      h
                        ? h.attr({ d: s })
                        : t.graph &&
                          ((t.tracker = n
                            .path(s)
                            .attr({
                              visibility: t.visible ? "inherit" : "hidden",
                              zIndex: 2,
                            })
                            .addClass(
                              i
                                ? "highcharts-tracker-area"
                                : "highcharts-tracker-line"
                            )
                            .add(t.group)),
                          o.styledMode ||
                            t.tracker.attr({
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              stroke: c,
                              fill: i ? c : "none",
                              "stroke-width":
                                t.graph.strokeWidth() + (i ? 0 : 2 * a),
                            }),
                          [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(
                            function (t) {
                              t &&
                                (t
                                  .addClass("highcharts-tracker")
                                  .on("mouseover", l)
                                  .on("mouseout", function (t) {
                                    r.onTrackerMouseOut(t);
                                  }),
                                e.cursor &&
                                  !o.styledMode &&
                                  t.css({ cursor: e.cursor }),
                                g) &&
                                t.on("touchstart", l);
                            }
                          )),
                        P(this, "afterDrawTracker");
                    }
                    addPoint(t, e, i, s, o) {
                      const r = this.options,
                        n = this.data,
                        a = this.chart;
                      var h = this.xAxis;
                      h = h && h.hasNames && h.names;
                      const l = r.data,
                        c = this.xData;
                      let d, p;
                      e = z(e, !0);
                      const u = { series: this };
                      this.pointClass.prototype.applyOptions.apply(u, [t]);
                      const g = u.x;
                      if (((p = c.length), this.requireSorting && g < c[p - 1]))
                        for (d = !0; p && c[p - 1] > g; ) p--;
                      this.updateParallelArrays(u, "splice", [p, 0, 0]),
                        this.updateParallelArrays(u, p),
                        h && u.name && (h[g] = u.name),
                        l.splice(p, 0, t),
                        (d || this.processedData) &&
                          (this.data.splice(p, 0, null), this.processData()),
                        "point" === r.legendType && this.generatePoints(),
                        i &&
                          (n[0] && n[0].remove
                            ? n[0].remove(!1)
                            : (n.shift(),
                              this.updateParallelArrays(u, "shift"),
                              l.shift())),
                        !1 !== o && P(this, "addPoint", { point: u }),
                        (this.isDirtyData = this.isDirty = !0),
                        e && a.redraw(s);
                    }
                    removePoint(t, e, i) {
                      const s = this,
                        o = s.data,
                        r = o[t],
                        n = s.points,
                        a = s.chart,
                        h = function () {
                          n && n.length === o.length && n.splice(t, 1),
                            o.splice(t, 1),
                            s.options.data.splice(t, 1),
                            s.updateParallelArrays(
                              r || { series: s },
                              "splice",
                              [t, 1]
                            ),
                            r && r.destroy(),
                            (s.isDirty = !0),
                            (s.isDirtyData = !0),
                            e && a.redraw();
                        };
                      d(i, a),
                        (e = z(e, !0)),
                        r ? r.firePointEvent("remove", null, h) : h();
                    }
                    remove(t, e, i, s) {
                      function o() {
                        r.destroy(s),
                          (n.isDirtyLegend = n.isDirtyBox = !0),
                          n.linkSeries(s),
                          z(t, !0) && n.redraw(e);
                      }
                      const r = this,
                        n = r.chart;
                      !1 !== i ? P(r, "remove", null, o) : o();
                    }
                    update(t, e) {
                      (t = M(t, this.userOptions)),
                        P(this, "update", { options: t });
                      const i = this,
                        s = i.chart;
                      var o = i.userOptions;
                      const r = i.initialType || i.type;
                      var n = s.options.plotOptions;
                      const a = x[r].prototype;
                      var h = i.finishedAnimating && { animation: !1 };
                      const l = {};
                      let c,
                        d = [
                          "colorIndex",
                          "eventOptions",
                          "navigatorSeries",
                          "symbolIndex",
                          "baseSeries",
                        ],
                        p = t.type || o.type || s.options.chart.type;
                      const u = !(
                        this.hasDerivedData ||
                        (p && p !== this.type) ||
                        void 0 !== t.pointStart ||
                        void 0 !== t.pointInterval ||
                        void 0 !== t.relativeXValue ||
                        t.joinBy ||
                        t.mapData ||
                        i.hasOptionChanged("dataGrouping") ||
                        i.hasOptionChanged("pointStart") ||
                        i.hasOptionChanged("pointInterval") ||
                        i.hasOptionChanged("pointIntervalUnit") ||
                        i.hasOptionChanged("keys")
                      );
                      if (
                        ((p = p || r),
                        u &&
                          (d.push(
                            "data",
                            "isDirtyData",
                            "points",
                            "processedData",
                            "processedXData",
                            "processedYData",
                            "xIncrement",
                            "cropped",
                            "_hasPointMarkers",
                            "_hasPointLabels",
                            "clips",
                            "nodes",
                            "layout",
                            "level",
                            "mapMap",
                            "mapData",
                            "minY",
                            "maxY",
                            "minX",
                            "maxX"
                          ),
                          !1 !== t.visible && d.push("area", "graph"),
                          i.parallelArrays.forEach(function (t) {
                            d.push(t + "Data");
                          }),
                          t.data &&
                            (t.dataSorting &&
                              T(i.options.dataSorting, t.dataSorting),
                            this.setData(t.data, !1))),
                        (t = B(
                          o,
                          h,
                          {
                            index: void 0 === o.index ? i.index : o.index,
                            pointStart: z(
                              n && n.series && n.series.pointStart,
                              o.pointStart,
                              i.xData[0]
                            ),
                          },
                          !u && { data: i.options.data },
                          t
                        )),
                        u && t.data && (t.data = i.options.data),
                        (d = [
                          "group",
                          "markerGroup",
                          "dataLabelsGroup",
                          "transformGroup",
                        ].concat(d)),
                        d.forEach(function (t) {
                          (d[t] = i[t]), delete i[t];
                        }),
                        (n = !1),
                        x[p])
                      ) {
                        if (((n = p !== i.type), i.remove(!1, !1, !1, !0), n))
                          if (Object.setPrototypeOf)
                            Object.setPrototypeOf(i, x[p].prototype);
                          else {
                            for (c in ((h =
                              Object.hasOwnProperty.call(i, "hcEvents") &&
                              i.hcEvents),
                            a))
                              i[c] = void 0;
                            T(i, x[p].prototype),
                              h ? (i.hcEvents = h) : delete i.hcEvents;
                          }
                      } else w(17, !0, s, { missingModuleFor: p });
                      if (
                        (d.forEach(function (t) {
                          i[t] = d[t];
                        }),
                        i.init(s, t),
                        u && this.points)
                      ) {
                        if (!1 === (t = i.options).visible)
                          (l.graphic = 1), (l.dataLabel = 1);
                        else if (!i._hasPointLabels) {
                          const { marker: e, dataLabels: i } = t;
                          (o = o.marker || {}),
                            !e ||
                              (!1 !== e.enabled &&
                                o.symbol === e.symbol &&
                                o.height === e.height &&
                                o.width === e.width) ||
                              (l.graphic = 1),
                            i && !1 === i.enabled && (l.dataLabel = 1);
                        }
                        for (const e of this.points)
                          e &&
                            e.series &&
                            (e.resolveColor(),
                            Object.keys(l).length && e.destroyElements(l),
                            !1 === t.showInLegend &&
                              e.legendItem &&
                              s.legend.destroyItem(e));
                      }
                      (i.initialType = r),
                        s.linkSeries(),
                        n && i.linkedSeries.length && (i.isDirtyData = !0),
                        P(this, "afterUpdate"),
                        z(e, !0) && s.redraw(!!u && void 0);
                    }
                    setName(t) {
                      (this.name =
                        this.options.name =
                        this.userOptions.name =
                          t),
                        (this.chart.isDirtyLegend = !0);
                    }
                    hasOptionChanged(t) {
                      const e = this.options[t],
                        i = this.chart.options.plotOptions,
                        s = this.userOptions[t];
                      return s
                        ? e !== s
                        : e !==
                            z(
                              i && i[this.type] && i[this.type][t],
                              i && i.series && i.series[t],
                              e
                            );
                    }
                    onMouseOver() {
                      const t = this.chart,
                        e = t.hoverSeries;
                      t.pointer.setHoverChartIndex(),
                        e && e !== this && e.onMouseOut(),
                        this.options.events.mouseOver && P(this, "mouseOver"),
                        this.setState("hover"),
                        (t.hoverSeries = this);
                    }
                    onMouseOut() {
                      const t = this.options,
                        e = this.chart,
                        i = e.tooltip,
                        s = e.hoverPoint;
                      (e.hoverSeries = null),
                        s && s.onMouseOut(),
                        this && t.events.mouseOut && P(this, "mouseOut"),
                        !i ||
                          this.stickyTracking ||
                          (i.shared && !this.noSharedTooltip) ||
                          i.hide(),
                        e.series.forEach(function (t) {
                          t.setState("", !0);
                        });
                    }
                    setState(t, e) {
                      const i = this;
                      var s = i.options;
                      const o = i.graph,
                        r = s.inactiveOtherPoints,
                        n = s.states,
                        a = z(
                          n[t || "normal"] && n[t || "normal"].animation,
                          i.chart.options.chart.animation
                        );
                      let h = s.lineWidth,
                        l = 0,
                        c = s.opacity;
                      if (
                        ((t = t || ""),
                        i.state !== t &&
                          ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(
                            function (e) {
                              e &&
                                (i.state &&
                                  e.removeClass("highcharts-series-" + i.state),
                                t && e.addClass("highcharts-series-" + t));
                            }
                          ),
                          (i.state = t),
                          !i.chart.styledMode))
                      ) {
                        if (n[t] && !1 === n[t].enabled) return;
                        if (
                          (t &&
                            ((h =
                              n[t].lineWidth || h + (n[t].lineWidthPlus || 0)),
                            (c = z(n[t].opacity, c))),
                          o && !o.dashstyle && j(h))
                        )
                          for (
                            s = { "stroke-width": h }, o.animate(s, a);
                            i["zone-graph-" + l];

                          )
                            i["zone-graph-" + l].animate(s, a), (l += 1);
                        r ||
                          [
                            i.group,
                            i.markerGroup,
                            i.dataLabelsGroup,
                            i.labelBySeries,
                          ].forEach(function (t) {
                            t && t.animate({ opacity: c }, a);
                          });
                      }
                      e && r && i.points && i.setAllPointsToState(t || void 0);
                    }
                    setAllPointsToState(t) {
                      this.points.forEach(function (e) {
                        e.setState && e.setState(t);
                      });
                    }
                    setVisible(t, e) {
                      const i = this,
                        s = i.chart,
                        o = s.options.chart.ignoreHiddenSeries,
                        r = i.visible,
                        n = (i.visible =
                          t =
                          i.options.visible =
                          i.userOptions.visible =
                            void 0 === t ? !r : t)
                          ? "show"
                          : "hide";
                      [
                        "group",
                        "dataLabelsGroup",
                        "markerGroup",
                        "tracker",
                        "tt",
                      ].forEach(function (t) {
                        i[t] && i[t][n]();
                      }),
                        (s.hoverSeries !== i &&
                          (s.hoverPoint && s.hoverPoint.series) !== i) ||
                          i.onMouseOut(),
                        i.legendItem && s.legend.colorizeItem(i, t),
                        (i.isDirty = !0),
                        i.options.stacking &&
                          s.series.forEach(function (t) {
                            t.options.stacking && t.visible && (t.isDirty = !0);
                          }),
                        i.linkedSeries.forEach(function (e) {
                          e.setVisible(t, !1);
                        }),
                        o && (s.isDirtyBox = !0),
                        P(i, n),
                        !1 !== e && s.redraw();
                    }
                    show() {
                      this.setVisible(!0);
                    }
                    hide() {
                      this.setVisible(!1);
                    }
                    select(t) {
                      (this.selected =
                        t =
                        this.options.selected =
                          void 0 === t ? !this.selected : t),
                        this.checkbox && (this.checkbox.checked = t),
                        P(this, t ? "select" : "unselect");
                    }
                    shouldShowTooltip(t, e, i = {}) {
                      return (
                        (i.series = this),
                        (i.visiblePlotOnly = !0),
                        this.chart.isInsidePlot(t, e, i)
                      );
                    }
                    drawLegendSymbol(t, e) {
                      var i;
                      null ===
                        (i = o[this.options.legendSymbol || "rectangle"]) ||
                        void 0 === i ||
                        i.call(this, t, e);
                    }
                  }
                  return (
                    (X.defaultOptions = n),
                    (X.types = a.seriesTypes),
                    (X.registerType = a.registerSeriesType),
                    T(X.prototype, {
                      axisTypes: ["xAxis", "yAxis"],
                      coll: "series",
                      colorCounter: 0,
                      cropShoulder: 1,
                      directTouch: !1,
                      isCartesian: !0,
                      kdAxisArray: ["clientX", "plotY"],
                      parallelArrays: ["x", "y"],
                      pointClass: r,
                      requireSorting: !0,
                      sorted: !0,
                    }),
                    (a.series = X),
                    X
                  );
                }
              ),
              e(
                i,
                "Core/Chart/Chart.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Axis/Axis.js"],
                  i["Core/Defaults.js"],
                  i["Core/Templating.js"],
                  i["Core/Foundation.js"],
                  i["Core/Globals.js"],
                  i["Core/Renderer/RendererRegistry.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Renderer/SVG/SVGRenderer.js"],
                  i["Core/Time.js"],
                  i["Core/Utilities.js"],
                  i["Core/Renderer/HTML/AST.js"],
                ],
                function (t, e, i, s, o, r, n, a, h, l, c, d, p) {
                  const { animate: u, animObject: g, setAnimation: f } = t,
                    { defaultOptions: m, defaultTime: x } = i,
                    { numberFormat: y } = s,
                    { registerEventOptions: b } = o,
                    { charts: v, doc: S, marginNames: k, svg: M, win: C } = r,
                    { seriesTypes: w } = h,
                    {
                      addEvent: T,
                      attr: A,
                      createElement: P,
                      css: L,
                      defined: O,
                      diffObjects: E,
                      discardElement: D,
                      erase: j,
                      error: I,
                      extend: B,
                      find: R,
                      fireEvent: z,
                      getStyle: N,
                      isArray: W,
                      isNumber: H,
                      isObject: X,
                      isString: G,
                      merge: F,
                      objectEach: Y,
                      pick: U,
                      pInt: V,
                      relativeLength: _,
                      removeEvent: q,
                      splat: K,
                      syncTimeout: Z,
                      uniqueKey: $,
                    } = d;
                  class J {
                    static chart(t, e, i) {
                      return new J(t, e, i);
                    }
                    constructor(t, e, i) {
                      (this.series =
                        this.renderTo =
                        this.renderer =
                        this.pointer =
                        this.pointCount =
                        this.plotWidth =
                        this.plotTop =
                        this.plotLeft =
                        this.plotHeight =
                        this.plotBox =
                        this.options =
                        this.numberFormatter =
                        this.margin =
                        this.labelCollectors =
                        this.isResizing =
                        this.index =
                        this.eventOptions =
                        this.container =
                        this.colorCounter =
                        this.clipBox =
                        this.chartWidth =
                        this.chartHeight =
                        this.bounds =
                        this.axisOffset =
                        this.axes =
                          void 0),
                        (this.sharedClips = {}),
                        (this.zooming =
                          this.yAxis =
                          this.xAxis =
                          this.userOptions =
                          this.titleOffset =
                          this.time =
                          this.symbolCounter =
                          this.spacingBox =
                          this.spacing =
                            void 0),
                        this.getArgs(t, e, i);
                    }
                    getArgs(t, e, i) {
                      G(t) || t.nodeName
                        ? ((this.renderTo = t), this.init(e, i))
                        : this.init(t, e);
                    }
                    setZoomOptions() {
                      const t = this.options.chart,
                        e = t.zooming;
                      this.zooming = Object.assign(Object.assign({}, e), {
                        type: U(t.zoomType, e.type),
                        key: U(t.zoomKey, e.key),
                        pinchType: U(t.pinchType, e.pinchType),
                        singleTouch: U(t.zoomBySingleTouch, e.singleTouch, !1),
                        resetButton: F(e.resetButton, t.resetZoomButton),
                      });
                    }
                    init(t, e) {
                      z(this, "init", { args: arguments }, function () {
                        const i = F(m, t),
                          s = i.chart;
                        (this.userOptions = B({}, t)),
                          (this.margin = []),
                          (this.spacing = []),
                          (this.bounds = { h: {}, v: {} }),
                          (this.labelCollectors = []),
                          (this.callback = e),
                          (this.isResizing = 0),
                          (this.options = i),
                          (this.axes = []),
                          (this.series = []),
                          (this.time =
                            t.time && Object.keys(t.time).length
                              ? new c(t.time)
                              : r.time),
                          (this.numberFormatter = s.numberFormatter || y),
                          (this.styledMode = s.styledMode),
                          (this.hasCartesianSeries = s.showAxes),
                          (this.index = v.length),
                          v.push(this),
                          r.chartCount++,
                          b(this, s),
                          (this.xAxis = []),
                          (this.yAxis = []),
                          (this.pointCount =
                            this.colorCounter =
                            this.symbolCounter =
                              0),
                          this.setZoomOptions(),
                          z(this, "afterInit"),
                          this.firstRender();
                      });
                    }
                    initSeries(t) {
                      var e = this.options.chart;
                      e = t.type || e.type;
                      const i = w[e];
                      return (
                        i || I(17, !0, this, { missingModuleFor: e }),
                        "function" == typeof (e = new i()).init &&
                          e.init(this, t),
                        e
                      );
                    }
                    setSeriesData() {
                      this.getSeriesOrderByLinks().forEach(function (t) {
                        t.points ||
                          t.data ||
                          !t.enabledDataSorting ||
                          t.setData(t.options.data, !1);
                      });
                    }
                    getSeriesOrderByLinks() {
                      return this.series.concat().sort(function (t, e) {
                        return t.linkedSeries.length || e.linkedSeries.length
                          ? e.linkedSeries.length - t.linkedSeries.length
                          : 0;
                      });
                    }
                    orderItems(t, e = 0) {
                      const i = this[t],
                        s = (this.options[t] = K(this.options[t]).slice());
                      if (
                        ((t = this.userOptions[t] =
                          this.userOptions[t]
                            ? K(this.userOptions[t]).slice()
                            : []),
                        this.hasRendered && (s.splice(e), t.splice(e)),
                        i)
                      )
                        for (let o = e, r = i.length; o < r; ++o)
                          (e = i[o]) &&
                            ((e.index = o),
                            e instanceof a && (e.name = e.getName()),
                            e.options.isInternal ||
                              ((s[o] = e.options), (t[o] = e.userOptions)));
                    }
                    isInsidePlot(t, e, i = {}) {
                      const {
                        inverted: s,
                        plotBox: o,
                        plotLeft: r,
                        plotTop: n,
                        scrollablePlotBox: a,
                      } = this;
                      var h = 0;
                      let l = 0;
                      i.visiblePlotOnly &&
                        this.scrollingContainer &&
                        ({ scrollLeft: h, scrollTop: l } =
                          this.scrollingContainer);
                      const c = i.series,
                        d = (i.visiblePlotOnly && a) || o;
                      var p = i.inverted ? e : t;
                      if (
                        ((t = {
                          x: p,
                          y: (e = i.inverted ? t : e),
                          isInsidePlot: !0,
                          options: i,
                        }),
                        !i.ignoreX)
                      ) {
                        const e = (c &&
                          (s && !this.polar ? c.yAxis : c.xAxis)) || {
                          pos: r,
                          len: 1 / 0,
                        };
                        (p = i.paneCoordinates ? e.pos + p : r + p),
                          (p >= Math.max(h + r, e.pos) &&
                            p <= Math.min(h + r + d.width, e.pos + e.len)) ||
                            (t.isInsidePlot = !1);
                      }
                      return (
                        !i.ignoreY &&
                          t.isInsidePlot &&
                          ((h = (!s && i.axis && !i.axis.isXAxis && i.axis) ||
                            (c && (s ? c.xAxis : c.yAxis)) || {
                              pos: n,
                              len: 1 / 0,
                            }),
                          ((i = i.paneCoordinates ? h.pos + e : n + e) >=
                            Math.max(l + n, h.pos) &&
                            i <= Math.min(l + n + d.height, h.pos + h.len)) ||
                            (t.isInsidePlot = !1)),
                        z(this, "afterIsInsidePlot", t),
                        t.isInsidePlot
                      );
                    }
                    redraw(t) {
                      z(this, "beforeRedraw");
                      const e = this.hasCartesianSeries
                          ? this.axes
                          : this.colorAxis || [],
                        i = this.series,
                        s = this.pointer,
                        o = this.legend,
                        r = this.userOptions.legend,
                        n = this.renderer,
                        a = n.isHidden(),
                        h = [];
                      let l,
                        c,
                        d,
                        p = this.isDirtyBox,
                        u = this.isDirtyLegend;
                      for (
                        n.rootFontSize = n.boxWrapper.getStyle("font-size"),
                          this.setResponsive && this.setResponsive(!1),
                          f(!!this.hasRendered && t, this),
                          a && this.temporaryDisplay(),
                          this.layOutTitles(!1),
                          t = i.length;
                        t--;

                      )
                        if (
                          ((d = i[t]),
                          (d.options.stacking || d.options.centerInCategory) &&
                            ((c = !0), d.isDirty))
                        ) {
                          l = !0;
                          break;
                        }
                      if (l)
                        for (t = i.length; t--; )
                          (d = i[t]), d.options.stacking && (d.isDirty = !0);
                      i.forEach(function (t) {
                        t.isDirty &&
                          ("point" === t.options.legendType
                            ? ("function" == typeof t.updateTotals &&
                                t.updateTotals(),
                              (u = !0))
                            : r &&
                              (r.labelFormatter || r.labelFormat) &&
                              (u = !0)),
                          t.isDirtyData && z(t, "updatedData");
                      }),
                        u &&
                          o &&
                          o.options.enabled &&
                          (o.render(), (this.isDirtyLegend = !1)),
                        c && this.getStacks(),
                        e.forEach(function (t) {
                          t.updateNames(), t.setScale();
                        }),
                        this.getMargins(),
                        e.forEach(function (t) {
                          t.isDirty && (p = !0);
                        }),
                        e.forEach(function (t) {
                          const e = t.min + "," + t.max;
                          t.extKey !== e &&
                            ((t.extKey = e),
                            h.push(function () {
                              z(
                                t,
                                "afterSetExtremes",
                                B(t.eventArgs, t.getExtremes())
                              ),
                                delete t.eventArgs;
                            })),
                            (p || c) && t.redraw();
                        }),
                        p && this.drawChartBox(),
                        z(this, "predraw"),
                        i.forEach(function (t) {
                          (p || t.isDirty) && t.visible && t.redraw(),
                            (t.isDirtyData = !1);
                        }),
                        s && s.reset(!0),
                        n.draw(),
                        z(this, "redraw"),
                        z(this, "render"),
                        a && this.temporaryDisplay(!0),
                        h.forEach(function (t) {
                          t.call();
                        });
                    }
                    get(t) {
                      function e(e) {
                        return e.id === t || (e.options && e.options.id === t);
                      }
                      const i = this.series;
                      let s = R(this.axes, e) || R(this.series, e);
                      for (let t = 0; !s && t < i.length; t++)
                        s = R(i[t].points || [], e);
                      return s;
                    }
                    getAxes() {
                      const t = this.options;
                      z(this, "getAxes");
                      for (const i of ["xAxis", "yAxis"]) {
                        const s = (t[i] = K(t[i] || {}));
                        for (const t of s) new e(this, t, i);
                      }
                      z(this, "afterGetAxes");
                    }
                    getSelectedPoints() {
                      return this.series.reduce(
                        (t, e) => (
                          e.getPointsCollection().forEach((e) => {
                            U(e.selectedStaging, e.selected) && t.push(e);
                          }),
                          t
                        ),
                        []
                      );
                    }
                    getSelectedSeries() {
                      return this.series.filter(function (t) {
                        return t.selected;
                      });
                    }
                    setTitle(t, e, i) {
                      this.applyDescription("title", t),
                        this.applyDescription("subtitle", e),
                        this.applyDescription("caption", void 0),
                        this.layOutTitles(i);
                    }
                    applyDescription(t, e) {
                      const i = this,
                        s = (this.options[t] = F(this.options[t], e));
                      let o = this[t];
                      o && e && (this[t] = o = o.destroy()),
                        s &&
                          !o &&
                          ((o = this.renderer
                            .text(s.text, 0, 0, s.useHTML)
                            .attr({
                              align: s.align,
                              class: "highcharts-" + t,
                              zIndex: s.zIndex || 4,
                            })
                            .add()),
                          (o.update = function (e, s) {
                            i.applyDescription(t, e), i.layOutTitles(s);
                          }),
                          this.styledMode ||
                            o.css(
                              B(
                                "title" === t
                                  ? {
                                      fontSize: this.options.isStock
                                        ? "1em"
                                        : "1.2em",
                                    }
                                  : {},
                                s.style
                              )
                            ),
                          (this[t] = o));
                    }
                    layOutTitles(t = !0) {
                      const e = [0, 0, 0],
                        i = this.renderer,
                        s = this.spacingBox;
                      ["title", "subtitle", "caption"].forEach(function (t) {
                        const o = this[t],
                          r = this.options[t],
                          n = r.verticalAlign || "top";
                        if (
                          ((t =
                            "title" === t
                              ? "top" === n
                                ? -3
                                : 0
                              : "top" === n
                              ? e[0] + 2
                              : 0),
                          o)
                        ) {
                          o.css({
                            width:
                              (r.width || s.width + (r.widthAdjust || 0)) +
                              "px",
                          });
                          const a = i.fontMetrics(o).b,
                            h = Math.round(o.getBBox(r.useHTML).height);
                          o.align(
                            B({ y: "bottom" === n ? a : t + a, height: h }, r),
                            !1,
                            "spacingBox"
                          ),
                            r.floating ||
                              ("top" === n
                                ? (e[0] = Math.ceil(e[0] + h))
                                : "bottom" === n &&
                                  (e[2] = Math.ceil(e[2] + h)));
                        }
                      }, this),
                        e[0] &&
                          "top" ===
                            (this.options.title.verticalAlign || "top") &&
                          (e[0] += this.options.title.margin),
                        e[2] &&
                          "bottom" === this.options.caption.verticalAlign &&
                          (e[2] += this.options.caption.margin);
                      const o =
                        !this.titleOffset ||
                        this.titleOffset.join(",") !== e.join(",");
                      (this.titleOffset = e),
                        z(this, "afterLayOutTitles"),
                        !this.isDirtyBox &&
                          o &&
                          ((this.isDirtyBox = this.isDirtyLegend = o),
                          this.hasRendered &&
                            t &&
                            this.isDirtyBox &&
                            this.redraw());
                    }
                    getContainerBox() {
                      return {
                        width: N(this.renderTo, "width", !0) || 0,
                        height: N(this.renderTo, "height", !0) || 0,
                      };
                    }
                    getChartSize() {
                      var t = this.options.chart;
                      const e = t.width;
                      t = t.height;
                      const i = this.getContainerBox();
                      (this.chartWidth = Math.max(0, e || i.width || 600)),
                        (this.chartHeight = Math.max(
                          0,
                          _(t, this.chartWidth) ||
                            (1 < i.height ? i.height : 400)
                        )),
                        (this.containerBox = i);
                    }
                    temporaryDisplay(t) {
                      let e = this.renderTo;
                      if (t)
                        for (; e && e.style; )
                          e.hcOrigStyle &&
                            (L(e, e.hcOrigStyle), delete e.hcOrigStyle),
                            e.hcOrigDetached &&
                              (S.body.removeChild(e), (e.hcOrigDetached = !1)),
                            (e = e.parentNode);
                      else
                        for (
                          ;
                          e &&
                          e.style &&
                          (S.body.contains(e) ||
                            e.parentNode ||
                            ((e.hcOrigDetached = !0), S.body.appendChild(e)),
                          ("none" === N(e, "display", !1) ||
                            e.hcOricDetached) &&
                            ((e.hcOrigStyle = {
                              display: e.style.display,
                              height: e.style.height,
                              overflow: e.style.overflow,
                            }),
                            (t = { display: "block", overflow: "hidden" }),
                            e !== this.renderTo && (t.height = 0),
                            L(e, t),
                            e.offsetWidth ||
                              e.style.setProperty(
                                "display",
                                "block",
                                "important"
                              )),
                          (e = e.parentNode),
                          e !== S.body);

                        );
                    }
                    setClassName(t) {
                      this.container.className =
                        "highcharts-container " + (t || "");
                    }
                    getContainer() {
                      const t = this.options,
                        e = t.chart;
                      var i = $();
                      let s,
                        o = this.renderTo;
                      o || (this.renderTo = o = e.renderTo),
                        G(o) && (this.renderTo = o = S.getElementById(o)),
                        o || I(13, !0, this);
                      var r = V(A(o, "data-highcharts-chart"));
                      H(r) && v[r] && v[r].hasRendered && v[r].destroy(),
                        A(o, "data-highcharts-chart", this.index),
                        (o.innerHTML = p.emptyHTML),
                        e.skipClone || o.offsetWidth || this.temporaryDisplay(),
                        this.getChartSize(),
                        (r = this.chartWidth);
                      const a = this.chartHeight;
                      if (
                        (L(o, { overflow: "hidden" }),
                        this.styledMode ||
                          (s = B(
                            {
                              position: "relative",
                              overflow: "hidden",
                              width: r + "px",
                              height: a + "px",
                              textAlign: "left",
                              lineHeight: "normal",
                              zIndex: 0,
                              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                              userSelect: "none",
                              "touch-action": "manipulation",
                              outline: "none",
                            },
                            e.style || {}
                          )),
                        (this.container = i = P("div", { id: i }, s, o)),
                        (this._cursor = i.style.cursor),
                        (this.renderer = new (
                          e.renderer || !M ? n.getRendererType(e.renderer) : l
                        )(
                          i,
                          r,
                          a,
                          void 0,
                          e.forExport,
                          t.exporting && t.exporting.allowHTML,
                          this.styledMode
                        )),
                        (this.containerBox = this.getContainerBox()),
                        f(void 0, this),
                        this.setClassName(e.className),
                        this.styledMode)
                      )
                        for (const e in t.defs)
                          this.renderer.definition(t.defs[e]);
                      else this.renderer.setStyle(e.style);
                      (this.renderer.chartIndex = this.index),
                        z(this, "afterGetContainer");
                    }
                    getMargins(t) {
                      const { spacing: e, margin: i, titleOffset: s } = this;
                      this.resetMargins(),
                        s[0] &&
                          !O(i[0]) &&
                          (this.plotTop = Math.max(this.plotTop, s[0] + e[0])),
                        s[2] &&
                          !O(i[2]) &&
                          (this.marginBottom = Math.max(
                            this.marginBottom,
                            s[2] + e[2]
                          )),
                        this.legend &&
                          this.legend.display &&
                          this.legend.adjustMargins(i, e),
                        z(this, "getMargins"),
                        t || this.getAxisMargins();
                    }
                    getAxisMargins() {
                      const t = this,
                        e = (t.axisOffset = [0, 0, 0, 0]),
                        i = t.colorAxis,
                        s = t.margin,
                        o = function (t) {
                          t.forEach(function (t) {
                            t.visible && t.getOffset();
                          });
                        };
                      t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i),
                        k.forEach(function (i, o) {
                          O(s[o]) || (t[i] += e[o]);
                        }),
                        t.setChartSize();
                    }
                    getOptions() {
                      return E(this.userOptions, m);
                    }
                    reflow(t) {
                      const e = this;
                      var i = e.options.chart;
                      i = O(i.width) && O(i.height);
                      const s = e.containerBox,
                        o = e.getContainerBox();
                      delete e.pointer.chartPosition,
                        !i &&
                          !e.isPrinting &&
                          s &&
                          o.width &&
                          ((o.width === s.width && o.height === s.height) ||
                            (d.clearTimeout(e.reflowTimeout),
                            (e.reflowTimeout = Z(
                              function () {
                                e.container && e.setSize(void 0, void 0, !1);
                              },
                              t ? 100 : 0
                            ))),
                          (e.containerBox = o));
                    }
                    setReflow() {
                      const t = this;
                      var e = (e) => {
                        var i;
                        null !== (i = t.options) &&
                          void 0 !== i &&
                          i.chart.reflow &&
                          t.hasLoaded &&
                          t.reflow(e);
                      };
                      "function" == typeof ResizeObserver
                        ? new ResizeObserver(e).observe(t.renderTo)
                        : ((e = T(C, "resize", e)), T(this, "destroy", e));
                    }
                    setSize(t, e, i) {
                      const s = this,
                        o = s.renderer;
                      (s.isResizing += 1),
                        f(i, s),
                        (i = o.globalAnimation),
                        (s.oldChartHeight = s.chartHeight),
                        (s.oldChartWidth = s.chartWidth),
                        void 0 !== t && (s.options.chart.width = t),
                        void 0 !== e && (s.options.chart.height = e),
                        s.getChartSize(),
                        s.styledMode ||
                          (i ? u : L)(
                            s.container,
                            {
                              width: s.chartWidth + "px",
                              height: s.chartHeight + "px",
                            },
                            i
                          ),
                        s.setChartSize(!0),
                        o.setSize(s.chartWidth, s.chartHeight, i),
                        s.axes.forEach(function (t) {
                          (t.isDirty = !0), t.setScale();
                        }),
                        (s.isDirtyLegend = !0),
                        (s.isDirtyBox = !0),
                        s.layOutTitles(),
                        s.getMargins(),
                        s.redraw(i),
                        (s.oldChartHeight = null),
                        z(s, "resize"),
                        Z(function () {
                          s &&
                            z(s, "endResize", null, function () {
                              --s.isResizing;
                            });
                        }, g(i).duration);
                    }
                    setChartSize(t) {
                      var e = this.inverted;
                      const i = this.renderer;
                      var s = this.chartWidth,
                        o = this.chartHeight;
                      const r = this.options.chart,
                        n = this.spacing,
                        a = this.clipOffset;
                      let h, l, c, d;
                      (this.plotLeft = h = Math.round(this.plotLeft)),
                        (this.plotTop = l = Math.round(this.plotTop)),
                        (this.plotWidth = c =
                          Math.max(0, Math.round(s - h - this.marginRight))),
                        (this.plotHeight = d =
                          Math.max(0, Math.round(o - l - this.marginBottom))),
                        (this.plotSizeX = e ? d : c),
                        (this.plotSizeY = e ? c : d),
                        (this.plotBorderWidth = r.plotBorderWidth || 0),
                        (this.spacingBox = i.spacingBox =
                          {
                            x: n[3],
                            y: n[0],
                            width: s - n[3] - n[1],
                            height: o - n[0] - n[2],
                          }),
                        (this.plotBox = i.plotBox =
                          { x: h, y: l, width: c, height: d }),
                        (e = 2 * Math.floor(this.plotBorderWidth / 2)),
                        (s = Math.ceil(Math.max(e, a[3]) / 2)),
                        (o = Math.ceil(Math.max(e, a[0]) / 2)),
                        (this.clipBox = {
                          x: s,
                          y: o,
                          width: Math.floor(
                            this.plotSizeX - Math.max(e, a[1]) / 2 - s
                          ),
                          height: Math.max(
                            0,
                            Math.floor(
                              this.plotSizeY - Math.max(e, a[2]) / 2 - o
                            )
                          ),
                        }),
                        t ||
                          (this.axes.forEach(function (t) {
                            t.setAxisSize(), t.setAxisTranslation();
                          }),
                          i.alignElements()),
                        z(this, "afterSetChartSize", { skipAxes: t });
                    }
                    resetMargins() {
                      z(this, "resetMargins");
                      const t = this,
                        e = t.options.chart;
                      ["margin", "spacing"].forEach(function (i) {
                        const s = e[i],
                          o = X(s) ? s : [s, s, s, s];
                        ["Top", "Right", "Bottom", "Left"].forEach(function (
                          s,
                          r
                        ) {
                          t[i][r] = U(e[i + s], o[r]);
                        });
                      }),
                        k.forEach(function (e, i) {
                          t[e] = U(t.margin[i], t.spacing[i]);
                        }),
                        (t.axisOffset = [0, 0, 0, 0]),
                        (t.clipOffset = [0, 0, 0, 0]);
                    }
                    drawChartBox() {
                      const t = this.options.chart,
                        e = this.renderer,
                        i = this.chartWidth,
                        s = this.chartHeight,
                        o = this.styledMode,
                        r = this.plotBGImage;
                      var n = t.backgroundColor;
                      const a = t.plotBackgroundColor,
                        h = t.plotBackgroundImage,
                        l = this.plotLeft,
                        c = this.plotTop,
                        d = this.plotWidth,
                        p = this.plotHeight,
                        u = this.plotBox,
                        g = this.clipRect,
                        f = this.clipBox;
                      let m,
                        x,
                        y = this.chartBackground,
                        b = this.plotBackground,
                        v = this.plotBorder,
                        S = "animate";
                      y ||
                        ((this.chartBackground = y =
                          e.rect().addClass("highcharts-background").add()),
                        (S = "attr")),
                        o
                          ? (m = x = y.strokeWidth())
                          : ((m = t.borderWidth || 0),
                            (x = m + (t.shadow ? 8 : 0)),
                            (n = { fill: n || "none" }),
                            (m || y["stroke-width"]) &&
                              ((n.stroke = t.borderColor),
                              (n["stroke-width"] = m)),
                            y.attr(n).shadow(t.shadow)),
                        y[S]({
                          x: x / 2,
                          y: x / 2,
                          width: i - x - (m % 2),
                          height: s - x - (m % 2),
                          r: t.borderRadius,
                        }),
                        (S = "animate"),
                        b ||
                          ((S = "attr"),
                          (this.plotBackground = b =
                            e
                              .rect()
                              .addClass("highcharts-plot-background")
                              .add())),
                        b[S](u),
                        o ||
                          (b.attr({ fill: a || "none" }).shadow(t.plotShadow),
                          h &&
                            (r
                              ? (h !== r.attr("href") && r.attr("href", h),
                                r.animate(u))
                              : (this.plotBGImage = e
                                  .image(h, l, c, d, p)
                                  .add()))),
                        g
                          ? g.animate({ width: f.width, height: f.height })
                          : (this.clipRect = e.clipRect(f)),
                        (S = "animate"),
                        v ||
                          ((S = "attr"),
                          (this.plotBorder = v =
                            e
                              .rect()
                              .addClass("highcharts-plot-border")
                              .attr({ zIndex: 1 })
                              .add())),
                        o ||
                          v.attr({
                            stroke: t.plotBorderColor,
                            "stroke-width": t.plotBorderWidth || 0,
                            fill: "none",
                          }),
                        v[S](
                          v.crisp(
                            { x: l, y: c, width: d, height: p },
                            -v.strokeWidth()
                          )
                        ),
                        (this.isDirtyBox = !1),
                        z(this, "afterDrawChartBox");
                    }
                    propFromSeries() {
                      const t = this,
                        e = t.options.chart,
                        i = t.options.series;
                      let s, o, r;
                      ["inverted", "angular", "polar"].forEach(function (n) {
                        for (
                          o = w[e.type],
                            r = e[n] || (o && o.prototype[n]),
                            s = i && i.length;
                          !r && s--;

                        )
                          (o = w[i[s].type]) && o.prototype[n] && (r = !0);
                        t[n] = r;
                      });
                    }
                    linkSeries(t) {
                      const e = this,
                        i = e.series;
                      i.forEach(function (t) {
                        t.linkedSeries.length = 0;
                      }),
                        i.forEach(function (t) {
                          let i = t.options.linkedTo;
                          G(i) &&
                            (i =
                              ":previous" === i
                                ? e.series[t.index - 1]
                                : e.get(i)) &&
                            i.linkedParent !== t &&
                            (i.linkedSeries.push(t),
                            (t.linkedParent = i),
                            i.enabledDataSorting && t.setDataSortingOptions(),
                            (t.visible = U(
                              t.options.visible,
                              i.options.visible,
                              t.visible
                            )));
                        }),
                        z(this, "afterLinkSeries", { isUpdating: t });
                    }
                    renderSeries() {
                      this.series.forEach(function (t) {
                        t.translate(), t.render();
                      });
                    }
                    render() {
                      const t = this.axes,
                        e = this.colorAxis,
                        i = this.renderer,
                        s = function (t) {
                          t.forEach(function (t) {
                            t.visible && t.render();
                          });
                        };
                      let o = 0;
                      this.setTitle(),
                        z(this, "beforeMargins"),
                        this.getStacks && this.getStacks(),
                        this.getMargins(!0),
                        this.setChartSize();
                      const r = this.plotWidth;
                      t.some(function (t) {
                        if (
                          t.horiz &&
                          t.visible &&
                          t.options.labels.enabled &&
                          t.series.length
                        )
                          return (o = 21), !0;
                      });
                      const n = (this.plotHeight = Math.max(
                        this.plotHeight - o,
                        0
                      ));
                      t.forEach(function (t) {
                        t.setScale();
                      }),
                        this.getAxisMargins();
                      const a = 1.1 < r / this.plotWidth,
                        h = 1.05 < n / this.plotHeight;
                      (a || h) &&
                        (t.forEach(function (t) {
                          ((t.horiz && a) || (!t.horiz && h)) &&
                            t.setTickInterval(!0);
                        }),
                        this.getMargins()),
                        this.drawChartBox(),
                        this.hasCartesianSeries ? s(t) : e && e.length && s(e),
                        this.seriesGroup ||
                          (this.seriesGroup = i
                            .g("series-group")
                            .attr({ zIndex: 3 })
                            .shadow(this.options.chart.seriesGroupShadow)
                            .add()),
                        this.renderSeries(),
                        this.addCredits(),
                        this.setResponsive && this.setResponsive(),
                        (this.hasRendered = !0);
                    }
                    addCredits(t) {
                      const e = this,
                        i = F(!0, this.options.credits, t);
                      i.enabled &&
                        !this.credits &&
                        ((this.credits = this.renderer
                          .text(i.text + (this.mapCredits || ""), 0, 0)
                          .addClass("highcharts-credits")
                          .on("click", function () {
                            i.href && (C.location.href = i.href);
                          })
                          .attr({ align: i.position.align, zIndex: 8 })),
                        e.styledMode || this.credits.css(i.style),
                        this.credits.add().align(i.position),
                        (this.credits.update = function (t) {
                          (e.credits = e.credits.destroy()), e.addCredits(t);
                        }));
                    }
                    destroy() {
                      const t = this,
                        e = t.axes,
                        i = t.series,
                        s = t.container,
                        o = s && s.parentNode;
                      let n;
                      for (
                        z(t, "destroy"),
                          t.renderer.forExport
                            ? j(v, t)
                            : (v[t.index] = void 0),
                          r.chartCount--,
                          t.renderTo.removeAttribute("data-highcharts-chart"),
                          q(t),
                          n = e.length;
                        n--;

                      )
                        e[n] = e[n].destroy();
                      for (
                        this.scroller &&
                          this.scroller.destroy &&
                          this.scroller.destroy(),
                          n = i.length;
                        n--;

                      )
                        i[n] = i[n].destroy();
                      "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                        .split(" ")
                        .forEach(function (e) {
                          const i = t[e];
                          i && i.destroy && (t[e] = i.destroy());
                        }),
                        s && ((s.innerHTML = p.emptyHTML), q(s), o && D(s)),
                        Y(t, function (e, i) {
                          delete t[i];
                        });
                    }
                    firstRender() {
                      const t = this,
                        e = t.options;
                      t.getContainer(),
                        t.resetMargins(),
                        t.setChartSize(),
                        t.propFromSeries(),
                        t.getAxes();
                      const i = W(e.series) ? e.series : [];
                      (e.series = []),
                        i.forEach(function (e) {
                          t.initSeries(e);
                        }),
                        t.linkSeries(),
                        t.setSeriesData(),
                        z(t, "beforeRender"),
                        t.render(),
                        t.pointer.getChartPosition(),
                        t.renderer.imgCount || t.hasLoaded || t.onload(),
                        t.temporaryDisplay(!0);
                    }
                    onload() {
                      this.callbacks
                        .concat([this.callback])
                        .forEach(function (t) {
                          t && void 0 !== this.index && t.apply(this, [this]);
                        }, this),
                        z(this, "load"),
                        z(this, "render"),
                        O(this.index) && this.setReflow(),
                        this.warnIfA11yModuleNotLoaded(),
                        (this.hasLoaded = !0);
                    }
                    warnIfA11yModuleNotLoaded() {
                      const { options: t, title: e } = this;
                      t &&
                        !this.accessibility &&
                        (this.renderer.boxWrapper.attr({
                          role: "img",
                          "aria-label": (
                            (e && e.element.textContent) ||
                            ""
                          ).replace(/</g, "&lt;"),
                        }),
                        (t.accessibility && !1 === t.accessibility.enabled) ||
                          I(
                            'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                            !1,
                            this
                          ));
                    }
                    addSeries(t, e, i) {
                      const s = this;
                      let o;
                      return (
                        t &&
                          ((e = U(e, !0)),
                          z(s, "addSeries", { options: t }, function () {
                            (o = s.initSeries(t)),
                              (s.isDirtyLegend = !0),
                              s.linkSeries(),
                              o.enabledDataSorting && o.setData(t.data, !1),
                              z(s, "afterAddSeries", { series: o }),
                              e && s.redraw(i);
                          })),
                        o
                      );
                    }
                    addAxis(t, e, i, s) {
                      return this.createAxis(e ? "xAxis" : "yAxis", {
                        axis: t,
                        redraw: i,
                        animation: s,
                      });
                    }
                    addColorAxis(t, e, i) {
                      return this.createAxis("colorAxis", {
                        axis: t,
                        redraw: e,
                        animation: i,
                      });
                    }
                    createAxis(t, i) {
                      return (
                        (t = new e(this, i.axis, t)),
                        U(i.redraw, !0) && this.redraw(i.animation),
                        t
                      );
                    }
                    showLoading(t) {
                      const e = this,
                        i = e.options,
                        s = i.loading,
                        o = function () {
                          r &&
                            L(r, {
                              left: e.plotLeft + "px",
                              top: e.plotTop + "px",
                              width: e.plotWidth + "px",
                              height: e.plotHeight + "px",
                            });
                        };
                      let r = e.loadingDiv,
                        n = e.loadingSpan;
                      r ||
                        (e.loadingDiv = r =
                          P(
                            "div",
                            {
                              className:
                                "highcharts-loading highcharts-loading-hidden",
                            },
                            null,
                            e.container
                          )),
                        n ||
                          ((e.loadingSpan = n =
                            P(
                              "span",
                              { className: "highcharts-loading-inner" },
                              null,
                              r
                            )),
                          T(e, "redraw", o)),
                        (r.className = "highcharts-loading"),
                        p.setElementHTML(n, U(t, i.lang.loading, "")),
                        e.styledMode ||
                          (L(r, B(s.style, { zIndex: 10 })),
                          L(n, s.labelStyle),
                          e.loadingShown ||
                            (L(r, { opacity: 0, display: "" }),
                            u(
                              r,
                              { opacity: s.style.opacity || 0.5 },
                              { duration: s.showDuration || 0 }
                            ))),
                        (e.loadingShown = !0),
                        o();
                    }
                    hideLoading() {
                      const t = this.options,
                        e = this.loadingDiv;
                      e &&
                        ((e.className =
                          "highcharts-loading highcharts-loading-hidden"),
                        this.styledMode ||
                          u(
                            e,
                            { opacity: 0 },
                            {
                              duration: t.loading.hideDuration || 100,
                              complete: function () {
                                L(e, { display: "none" });
                              },
                            }
                          )),
                        (this.loadingShown = !1);
                    }
                    update(t, e, i, s) {
                      const o = this,
                        r = {
                          credits: "addCredits",
                          title: "setTitle",
                          subtitle: "setSubtitle",
                          caption: "setCaption",
                        },
                        n = t.isResponsiveOptions,
                        a = [];
                      let h, l;
                      z(o, "update", { options: t }),
                        n || o.setResponsive(!1, !0),
                        (t = E(t, o.options)),
                        (o.userOptions = F(o.userOptions, t));
                      var d = t.chart;
                      if (d) {
                        if (
                          (F(!0, o.options.chart, d),
                          this.setZoomOptions(),
                          "className" in d && o.setClassName(d.className),
                          "inverted" in d || "polar" in d || "type" in d)
                        ) {
                          o.propFromSeries();
                          var p = !0;
                        }
                        "alignTicks" in d && (p = !0),
                          "events" in d && b(this, d),
                          Y(d, function (t, e) {
                            -1 !==
                              o.propsRequireUpdateSeries.indexOf(
                                "chart." + e
                              ) && (h = !0),
                              -1 !== o.propsRequireDirtyBox.indexOf(e) &&
                                (o.isDirtyBox = !0),
                              -1 !== o.propsRequireReflow.indexOf(e) &&
                                (n ? (o.isDirtyBox = !0) : (l = !0));
                          }),
                          !o.styledMode &&
                            d.style &&
                            o.renderer.setStyle(o.options.chart.style || {});
                      }
                      !o.styledMode &&
                        t.colors &&
                        (this.options.colors = t.colors),
                        t.time &&
                          (this.time === x && (this.time = new c(t.time)),
                          F(!0, o.options.time, t.time)),
                        Y(t, function (e, i) {
                          o[i] && "function" == typeof o[i].update
                            ? o[i].update(e, !1)
                            : "function" == typeof o[r[i]]
                            ? o[r[i]](e)
                            : "colors" !== i &&
                              -1 === o.collectionsWithUpdate.indexOf(i) &&
                              F(!0, o.options[i], t[i]),
                            "chart" !== i &&
                              -1 !== o.propsRequireUpdateSeries.indexOf(i) &&
                              (h = !0);
                        }),
                        this.collectionsWithUpdate.forEach(function (e) {
                          t[e] &&
                            (K(t[e]).forEach(function (t, s) {
                              const r = O(t.id);
                              let n;
                              r && (n = o.get(t.id)),
                                !n &&
                                  o[e] &&
                                  (n = o[e][U(t.index, s)]) &&
                                  ((r && O(n.options.id)) ||
                                    n.options.isInternal) &&
                                  (n = void 0),
                                n &&
                                  n.coll === e &&
                                  (n.update(t, !1), i && (n.touched = !0)),
                                !n &&
                                  i &&
                                  o.collectionsWithInit[e] &&
                                  (o.collectionsWithInit[e][0].apply(
                                    o,
                                    [t]
                                      .concat(o.collectionsWithInit[e][1] || [])
                                      .concat([!1])
                                  ).touched = !0);
                            }),
                            i &&
                              o[e].forEach(function (t) {
                                t.touched || t.options.isInternal
                                  ? delete t.touched
                                  : a.push(t);
                              }));
                        }),
                        a.forEach(function (t) {
                          t.chart && t.remove && t.remove(!1);
                        }),
                        p &&
                          o.axes.forEach(function (t) {
                            t.update({}, !1);
                          }),
                        h &&
                          o.getSeriesOrderByLinks().forEach(function (t) {
                            t.chart && t.update({}, !1);
                          }, this),
                        (p = d && d.width),
                        (d =
                          d &&
                          (G(d.height)
                            ? _(d.height, p || o.chartWidth)
                            : d.height)),
                        l ||
                        (H(p) && p !== o.chartWidth) ||
                        (H(d) && d !== o.chartHeight)
                          ? o.setSize(p, d, s)
                          : U(e, !0) && o.redraw(s),
                        z(o, "afterUpdate", {
                          options: t,
                          redraw: e,
                          animation: s,
                        });
                    }
                    setSubtitle(t, e) {
                      this.applyDescription("subtitle", t),
                        this.layOutTitles(e);
                    }
                    setCaption(t, e) {
                      this.applyDescription("caption", t), this.layOutTitles(e);
                    }
                    showResetZoom() {
                      function t() {
                        e.zoomOut();
                      }
                      const e = this,
                        i = m.lang,
                        s = e.zooming.resetButton,
                        o = s.theme,
                        r =
                          "chart" === s.relativeTo ||
                          "spacingBox" === s.relativeTo
                            ? null
                            : "scrollablePlotBox";
                      z(this, "beforeShowResetZoom", null, function () {
                        e.resetZoomButton = e.renderer
                          .button(i.resetZoom, null, null, t, o)
                          .attr({
                            align: s.position.align,
                            title: i.resetZoomTitle,
                          })
                          .addClass("highcharts-reset-zoom")
                          .add()
                          .align(s.position, !1, r);
                      }),
                        z(this, "afterShowResetZoom");
                    }
                    zoomOut() {
                      z(this, "selection", { resetSelection: !0 }, this.zoom);
                    }
                    zoom(t) {
                      const e = this,
                        i = e.pointer;
                      let s,
                        o = !1;
                      !t || t.resetSelection
                        ? (e.axes.forEach(function (t) {
                            s = t.zoom();
                          }),
                          (i.initiated = !1))
                        : t.xAxis.concat(t.yAxis).forEach(function (t) {
                            const r = t.axis;
                            ((i[r.isXAxis ? "zoomX" : "zoomY"] &&
                              O(i.mouseDownX) &&
                              O(i.mouseDownY) &&
                              e.isInsidePlot(
                                i.mouseDownX - e.plotLeft,
                                i.mouseDownY - e.plotTop,
                                { axis: r }
                              )) ||
                              !O(e.inverted ? i.mouseDownX : i.mouseDownY)) &&
                              ((s = r.zoom(t.min, t.max)),
                              r.displayBtn && (o = !0));
                          });
                      const r = e.resetZoomButton;
                      o && !r
                        ? e.showResetZoom()
                        : !o && X(r) && (e.resetZoomButton = r.destroy()),
                        s &&
                          e.redraw(
                            U(
                              e.options.chart.animation,
                              t && t.animation,
                              100 > e.pointCount
                            )
                          );
                    }
                    pan(t, e) {
                      const i = this,
                        s = i.hoverPoints;
                      e = "object" == typeof e ? e : { enabled: e, type: "x" };
                      const o = i.options.chart;
                      o && o.panning && (o.panning = e);
                      const r = e.type;
                      let n;
                      z(this, "pan", { originalEvent: t }, function () {
                        s &&
                          s.forEach(function (t) {
                            t.setState();
                          });
                        let e = i.xAxis;
                        "xy" === r
                          ? (e = e.concat(i.yAxis))
                          : "y" === r && (e = i.yAxis);
                        const o = {};
                        e.forEach(function (e) {
                          if (
                            e.options.panningEnabled &&
                            !e.options.isInternal
                          ) {
                            var s = e.horiz,
                              a = t[s ? "chartX" : "chartY"],
                              h = i[(s = s ? "mouseDownX" : "mouseDownY")],
                              l = e.minPointOffset || 0,
                              c =
                                (e.reversed && !i.inverted) ||
                                (!e.reversed && i.inverted)
                                  ? -1
                                  : 1,
                              d = e.getExtremes(),
                              p = e.toValue(h - a, !0) + l * c,
                              u =
                                e.toValue(h + e.len - a, !0) -
                                (l * c ||
                                  (e.isXAxis && e.pointRangePadding) ||
                                  0),
                              g = u < p;
                            (c = e.hasVerticalPanning()),
                              (h = g ? u : p),
                              (p = g ? p : u);
                            var f = e.panningState;
                            !c ||
                              e.isXAxis ||
                              (f && !f.isDirty) ||
                              e.series.forEach(function (t) {
                                var e = t.getProcessedData(!0);
                                (e = t.getExtremes(e.yData, !0)),
                                  f ||
                                    (f = {
                                      startMin: Number.MAX_VALUE,
                                      startMax: -Number.MAX_VALUE,
                                    }),
                                  H(e.dataMin) &&
                                    H(e.dataMax) &&
                                    ((f.startMin = Math.min(
                                      U(t.options.threshold, 1 / 0),
                                      e.dataMin,
                                      f.startMin
                                    )),
                                    (f.startMax = Math.max(
                                      U(t.options.threshold, -1 / 0),
                                      e.dataMax,
                                      f.startMax
                                    )));
                              }),
                              (c = Math.min(
                                U(f && f.startMin, d.dataMin),
                                l
                                  ? d.min
                                  : e.toValue(
                                      e.toPixels(d.min) - e.minPixelPadding
                                    )
                              )),
                              (u = Math.max(
                                U(f && f.startMax, d.dataMax),
                                l
                                  ? d.max
                                  : e.toValue(
                                      e.toPixels(d.max) + e.minPixelPadding
                                    )
                              )),
                              (e.panningState = f),
                              e.isOrdinal ||
                                (0 < (l = c - h) && ((p += l), (h = c)),
                                0 < (l = p - u) && ((p = u), (h -= l)),
                                e.series.length &&
                                  h !== d.min &&
                                  p !== d.max &&
                                  h >= c &&
                                  p <= u &&
                                  (e.setExtremes(h, p, !1, !1, {
                                    trigger: "pan",
                                  }),
                                  !i.resetZoomButton &&
                                    h !== c &&
                                    p !== u &&
                                    r.match("y") &&
                                    (i.showResetZoom(), (e.displayBtn = !1)),
                                  (n = !0)),
                                (o[s] = a));
                          }
                        }),
                          Y(o, (t, e) => {
                            i[e] = t;
                          }),
                          n && i.redraw(!1),
                          L(i.container, { cursor: "move" });
                      });
                    }
                  }
                  return (
                    B(J.prototype, {
                      callbacks: [],
                      collectionsWithInit: {
                        xAxis: [J.prototype.addAxis, [!0]],
                        yAxis: [J.prototype.addAxis, [!1]],
                        series: [J.prototype.addSeries],
                      },
                      collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                      propsRequireDirtyBox:
                        "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                          " "
                        ),
                      propsRequireReflow:
                        "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                          " "
                        ),
                      propsRequireUpdateSeries:
                        "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                          " "
                        ),
                    }),
                    J
                  );
                }
              ),
              e(
                i,
                "Extensions/ScrollablePlotArea.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Axis/Axis.js"],
                  i["Core/Chart/Chart.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Renderer/RendererRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r) {
                  const { stop: n } = t,
                    {
                      addEvent: a,
                      createElement: h,
                      defined: l,
                      merge: c,
                      pick: d,
                    } = r;
                  a(i, "afterSetChartSize", function (t) {
                    var i = this.options.chart.scrollablePlotArea,
                      s = i && i.minWidth;
                    let o;
                    (i = i && i.minHeight),
                      this.renderer.forExport ||
                        (s
                          ? (this.scrollablePixelsX = s =
                              Math.max(0, s - this.chartWidth)) &&
                            ((this.scrollablePlotBox =
                              this.renderer.scrollablePlotBox =
                                c(this.plotBox)),
                            (this.plotBox.width = this.plotWidth += s),
                            this.inverted
                              ? (this.clipBox.height += s)
                              : (this.clipBox.width += s),
                            (o = { 1: { name: "right", value: s } }))
                          : i &&
                            ((this.scrollablePixelsY = s =
                              Math.max(0, i - this.chartHeight)),
                            l(s) &&
                              ((this.scrollablePlotBox =
                                this.renderer.scrollablePlotBox =
                                  c(this.plotBox)),
                              (this.plotBox.height = this.plotHeight += s),
                              this.inverted
                                ? (this.clipBox.width += s)
                                : (this.clipBox.height += s),
                              (o = { 2: { name: "bottom", value: s } }))),
                        o &&
                          !t.skipAxes &&
                          this.axes.forEach(function (t) {
                            o[t.side]
                              ? (t.getPlotLinePath = function () {
                                  let i,
                                    s = o[t.side].name,
                                    r = this[s];
                                  return (
                                    (this[s] = r - o[t.side].value),
                                    (i = e.prototype.getPlotLinePath.apply(
                                      this,
                                      arguments
                                    )),
                                    (this[s] = r),
                                    i
                                  );
                                })
                              : (t.setAxisSize(), t.setAxisTranslation());
                          }));
                  }),
                    a(i, "render", function () {
                      this.scrollablePixelsX || this.scrollablePixelsY
                        ? (this.setUpScrolling && this.setUpScrolling(),
                          this.applyFixed())
                        : this.fixedDiv && this.applyFixed();
                    }),
                    (i.prototype.setUpScrolling = function () {
                      const t = {
                        WebkitOverflowScrolling: "touch",
                        overflowX: "hidden",
                        overflowY: "hidden",
                      };
                      let e;
                      this.scrollablePixelsX && (t.overflowX = "auto"),
                        this.scrollablePixelsY && (t.overflowY = "auto"),
                        (this.scrollingParent = h(
                          "div",
                          { className: "highcharts-scrolling-parent" },
                          { position: "relative" },
                          this.renderTo
                        )),
                        (this.scrollingContainer = h(
                          "div",
                          { className: "highcharts-scrolling" },
                          t,
                          this.scrollingParent
                        )),
                        a(this.scrollingContainer, "scroll", () => {
                          this.pointer &&
                            (delete this.pointer.chartPosition,
                            this.hoverPoint && (e = this.hoverPoint),
                            this.pointer.runPointActions(void 0, e, !0));
                        }),
                        (this.innerContainer = h(
                          "div",
                          { className: "highcharts-inner-container" },
                          null,
                          this.scrollingContainer
                        )),
                        this.innerContainer.appendChild(this.container),
                        (this.setUpScrolling = null);
                    }),
                    (i.prototype.moveFixedElements = function () {
                      let t,
                        e = this.container,
                        i = this.fixedRenderer,
                        s =
                          ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                            " "
                          );
                      this.scrollablePixelsX && !this.inverted
                        ? (t = ".highcharts-yaxis")
                        : (this.scrollablePixelsX && this.inverted) ||
                          (this.scrollablePixelsY && !this.inverted)
                        ? (t = ".highcharts-xaxis")
                        : this.scrollablePixelsY &&
                          this.inverted &&
                          (t = ".highcharts-yaxis"),
                        t &&
                          s.push(
                            `${t}:not(.highcharts-radial-axis)`,
                            `${t}-labels:not(.highcharts-radial-axis-labels)`
                          ),
                        s.forEach(function (t) {
                          [].forEach.call(e.querySelectorAll(t), function (t) {
                            (t.namespaceURI === i.SVG_NS
                              ? i.box
                              : i.box.parentNode
                            ).appendChild(t),
                              (t.style.pointerEvents = "auto");
                          });
                        });
                    }),
                    (i.prototype.applyFixed = function () {
                      var t = !this.fixedDiv,
                        e = this.options.chart,
                        i = e.scrollablePlotArea,
                        s = o.getRendererType();
                      t
                        ? ((this.fixedDiv = h(
                            "div",
                            { className: "highcharts-fixed" },
                            {
                              position: "absolute",
                              overflow: "hidden",
                              pointerEvents: "none",
                              zIndex: ((e.style && e.style.zIndex) || 0) + 2,
                              top: 0,
                            },
                            null,
                            !0
                          )),
                          this.scrollingContainer &&
                            this.scrollingContainer.parentNode.insertBefore(
                              this.fixedDiv,
                              this.scrollingContainer
                            ),
                          (this.renderTo.style.overflow = "visible"),
                          (this.fixedRenderer = e =
                            new s(
                              this.fixedDiv,
                              this.chartWidth,
                              this.chartHeight,
                              this.options.chart.style
                            )),
                          (this.scrollableMask = e
                            .path()
                            .attr({
                              fill:
                                this.options.chart.backgroundColor || "#fff",
                              "fill-opacity": d(i.opacity, 0.85),
                              zIndex: -1,
                            })
                            .addClass("highcharts-scrollable-mask")
                            .add()),
                          a(this, "afterShowResetZoom", this.moveFixedElements),
                          a(
                            this,
                            "afterApplyDrilldown",
                            this.moveFixedElements
                          ),
                          a(this, "afterLayOutTitles", this.moveFixedElements))
                        : this.fixedRenderer.setSize(
                            this.chartWidth,
                            this.chartHeight
                          ),
                        (this.scrollableDirty || t) &&
                          ((this.scrollableDirty = !1),
                          this.moveFixedElements()),
                        (e = this.chartWidth + (this.scrollablePixelsX || 0)),
                        (s = this.chartHeight + (this.scrollablePixelsY || 0)),
                        n(this.container),
                        (this.container.style.width = e + "px"),
                        (this.container.style.height = s + "px"),
                        this.renderer.boxWrapper.attr({
                          width: e,
                          height: s,
                          viewBox: [0, 0, e, s].join(" "),
                        }),
                        this.chartBackground.attr({ width: e, height: s }),
                        (this.scrollingContainer.style.height =
                          this.chartHeight + "px"),
                        t &&
                          (i.scrollPositionX &&
                            (this.scrollingContainer.scrollLeft =
                              this.scrollablePixelsX * i.scrollPositionX),
                          i.scrollPositionY &&
                            (this.scrollingContainer.scrollTop =
                              this.scrollablePixelsY * i.scrollPositionY)),
                        (s = this.axisOffset),
                        (t = this.plotTop - s[0] - 1),
                        (i = this.plotLeft - s[3] - 1),
                        (e = this.plotTop + this.plotHeight + s[2] + 1),
                        (s = this.plotLeft + this.plotWidth + s[1] + 1);
                      let r =
                          this.plotLeft +
                          this.plotWidth -
                          (this.scrollablePixelsX || 0),
                        l =
                          this.plotTop +
                          this.plotHeight -
                          (this.scrollablePixelsY || 0);
                      (t = this.scrollablePixelsX
                        ? [
                            ["M", 0, t],
                            ["L", this.plotLeft - 1, t],
                            ["L", this.plotLeft - 1, e],
                            ["L", 0, e],
                            ["Z"],
                            ["M", r, t],
                            ["L", this.chartWidth, t],
                            ["L", this.chartWidth, e],
                            ["L", r, e],
                            ["Z"],
                          ]
                        : this.scrollablePixelsY
                        ? [
                            ["M", i, 0],
                            ["L", i, this.plotTop - 1],
                            ["L", s, this.plotTop - 1],
                            ["L", s, 0],
                            ["Z"],
                            ["M", i, l],
                            ["L", i, this.chartHeight],
                            ["L", s, this.chartHeight],
                            ["L", s, l],
                            ["Z"],
                          ]
                        : [["M", 0, 0]]),
                        "adjustHeight" !== this.redrawTrigger &&
                          this.scrollableMask.attr({ d: t });
                    }),
                    a(e, "afterInit", function () {
                      this.chart.scrollableDirty = !0;
                    }),
                    a(s, "show", function () {
                      this.chart.scrollableDirty = !0;
                    });
                }
              ),
              e(
                i,
                "Core/Axis/Stacking/StackItem.js",
                [
                  i["Core/Templating.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { format: s } = t,
                    { series: o } = e,
                    {
                      destroyObjectProperties: r,
                      fireEvent: n,
                      isNumber: a,
                      pick: h,
                    } = i;
                  return class {
                    constructor(t, e, i, s, o) {
                      const r = t.chart.inverted,
                        n = t.reversed;
                      (this.axis = t),
                        (t = this.isNegative = !!i != !!n),
                        (this.options = e = e || {}),
                        (this.x = s),
                        (this.cumulative = this.total = null),
                        (this.points = {}),
                        (this.hasValidPoints = !1),
                        (this.stack = o),
                        (this.rightCliff = this.leftCliff = 0),
                        (this.alignOptions = {
                          align:
                            e.align || (r ? (t ? "left" : "right") : "center"),
                          verticalAlign:
                            e.verticalAlign ||
                            (r ? "middle" : t ? "bottom" : "top"),
                          y: e.y,
                          x: e.x,
                        }),
                        (this.textAlign =
                          e.textAlign ||
                          (r ? (t ? "right" : "left") : "center"));
                    }
                    destroy() {
                      r(this, this.axis);
                    }
                    render(t) {
                      const e = this.axis.chart,
                        i = this.options;
                      var o = i.format;
                      (o = o ? s(o, this, e) : i.formatter.call(this)),
                        this.label
                          ? this.label.attr({ text: o, visibility: "hidden" })
                          : ((this.label = e.renderer.label(
                              o,
                              null,
                              void 0,
                              i.shape,
                              void 0,
                              void 0,
                              i.useHTML,
                              !1,
                              "stack-labels"
                            )),
                            (o = {
                              r: i.borderRadius || 0,
                              text: o,
                              padding: h(i.padding, 5),
                              visibility: "hidden",
                            }),
                            e.styledMode ||
                              ((o.fill = i.backgroundColor),
                              (o.stroke = i.borderColor),
                              (o["stroke-width"] = i.borderWidth),
                              this.label.css(i.style || {})),
                            this.label.attr(o),
                            this.label.added || this.label.add(t)),
                        (this.label.labelrank = e.plotSizeY),
                        n(this, "afterRender");
                    }
                    setOffset(t, e, i, s, r, l) {
                      const {
                          alignOptions: c,
                          axis: d,
                          label: p,
                          options: u,
                          textAlign: g,
                        } = this,
                        f = d.chart;
                      i = this.getStackBox({
                        xOffset: t,
                        width: e,
                        boxBottom: i,
                        boxTop: s,
                        defaultX: r,
                        xAxis: l,
                      });
                      var { verticalAlign: m } = c;
                      if (p && i) {
                        (s = p.getBBox()),
                          (r = p.padding),
                          (l = "justify" === h(u.overflow, "justify")),
                          (c.x = u.x || 0),
                          (c.y = u.y || 0);
                        const { x: t, y: e } = this.adjustStackPosition({
                          labelBox: s,
                          verticalAlign: m,
                          textAlign: g,
                        });
                        (i.x -= t),
                          (i.y -= e),
                          p.align(c, !1, i),
                          (m = f.isInsidePlot(
                            p.alignAttr.x + c.x + t,
                            p.alignAttr.y + c.y + e
                          )) || (l = !1),
                          l &&
                            o.prototype.justifyDataLabel.call(
                              d,
                              p,
                              c,
                              p.alignAttr,
                              s,
                              i
                            ),
                          p.attr({
                            x: p.alignAttr.x,
                            y: p.alignAttr.y,
                            rotation: u.rotation,
                            rotationOriginX: s.width / 2,
                            rotationOriginY: s.height / 2,
                          }),
                          h(!l && u.crop, !0) &&
                            (m =
                              a(p.x) &&
                              a(p.y) &&
                              f.isInsidePlot(p.x - r + p.width, p.y) &&
                              f.isInsidePlot(p.x + r, p.y)),
                          p[m ? "show" : "hide"]();
                      }
                      n(this, "afterSetOffset", { xOffset: t, width: e });
                    }
                    adjustStackPosition({
                      labelBox: t,
                      verticalAlign: e,
                      textAlign: i,
                    }) {
                      const s = {
                        bottom: 0,
                        middle: 1,
                        top: 2,
                        right: 1,
                        center: 0,
                        left: -1,
                      };
                      return {
                        x: t.width / 2 + (t.width / 2) * s[i],
                        y: (t.height / 2) * s[e],
                      };
                    }
                    getStackBox(t) {
                      var e = this.axis;
                      const i = e.chart,
                        {
                          boxTop: s,
                          defaultX: o,
                          xOffset: r,
                          width: n,
                          boxBottom: l,
                        } = t;
                      var c = e.stacking.usePercentage
                        ? 100
                        : h(s, this.total, 0);
                      (c = e.toPixels(c)), (t = t.xAxis || i.xAxis[0]);
                      const d = h(o, t.translate(this.x)) + r;
                      (e = e.toPixels(
                        l ||
                          (a(e.min) &&
                            e.logarithmic &&
                            e.logarithmic.lin2log(e.min)) ||
                          0
                      )),
                        (e = Math.abs(c - e));
                      const p = this.isNegative;
                      return i.inverted
                        ? {
                            x: (p ? c : c - e) - i.plotLeft,
                            y: t.height - d - n,
                            width: e,
                            height: n,
                          }
                        : {
                            x: d + t.transB - i.plotLeft,
                            y: (p ? c - e : c) - i.plotTop,
                            width: n,
                            height: e,
                          };
                    }
                  };
                }
              ),
              e(
                i,
                "Core/Axis/Stacking/StackingAxis.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Axis/Axis.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Axis/Stacking/StackItem.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o) {
                  function r() {
                    const t = this,
                      e = t.inverted;
                    t.yAxis.forEach((t) => {
                      t.stacking &&
                        t.stacking.stacks &&
                        t.hasVisibleSeries &&
                        (t.stacking.oldStacks = t.stacking.stacks);
                    }),
                      t.series.forEach((i) => {
                        const s = (i.xAxis && i.xAxis.options) || {};
                        !i.options.stacking ||
                          (!0 !== i.visible &&
                            !1 !== t.options.chart.ignoreHiddenSeries) ||
                          (i.stackKey = [
                            i.type,
                            M(i.options.stack, ""),
                            e ? s.top : s.left,
                            e ? s.height : s.width,
                          ].join());
                      });
                  }
                  function n() {
                    const t = this.stacking;
                    if (t) {
                      var e = t.stacks;
                      k(e, function (t, i) {
                        y(t), (e[i] = null);
                      }),
                        t && t.stackTotalGroup && t.stackTotalGroup.destroy();
                    }
                  }
                  function a() {
                    "yAxis" !== this.coll ||
                      this.stacking ||
                      (this.stacking = new C(this));
                  }
                  function h(t, e, i, s) {
                    return (
                      !x(t) || t.x !== e || (s && t.stackKey !== s)
                        ? (t = { x: e, index: 0, key: s, stackKey: s })
                        : t.index++,
                      (t.key = [i, e, t.index].join()),
                      t
                    );
                  }
                  function l() {
                    const t = this,
                      e = t.stackKey,
                      i = t.yAxis.stacking.stacks,
                      s = t.processedXData,
                      o = t[t.options.stacking + "Stacker"];
                    let r;
                    o &&
                      [e, "-" + e].forEach((e) => {
                        let n,
                          a = s.length;
                        for (; a--; ) {
                          var h = s[a];
                          (r = t.getStackIndicator(r, h, t.index, e)),
                            (n = (h = i[e] && i[e][h]) && h.points[r.key]) &&
                              o.call(t, n, h, a);
                        }
                      });
                  }
                  function c(t, e, i) {
                    (e = e.total ? 100 / e.total : 0),
                      (t[0] = m(t[0] * e)),
                      (t[1] = m(t[1] * e)),
                      (this.stackedYData[i] = t[1]);
                  }
                  function d() {
                    const t = this.yAxis.stacking;
                    this.options.centerInCategory &&
                    (this.is("column") || this.is("columnrange")) &&
                    !this.options.stacking &&
                    1 < this.chart.series.length
                      ? g.setStackedPoints.call(this, "group")
                      : t &&
                        k(t.stacks, (e, i) => {
                          "group" === i.slice(-5) &&
                            (k(e, (t) => t.destroy()), delete t.stacks[i]);
                        });
                  }
                  function p(t) {
                    var e = this.chart;
                    const i = t || this.options.stacking;
                    if (
                      i &&
                      (!0 === this.visible ||
                        !1 === e.options.chart.ignoreHiddenSeries)
                    ) {
                      var o = this.processedXData,
                        r = this.processedYData,
                        n = [],
                        a = r.length,
                        h = this.options,
                        l = h.threshold,
                        c = M(h.startFromThreshold && l, 0);
                      h = h.stack;
                      var d,
                        p,
                        u = "-" + (t = t ? `${this.type},${i}` : this.stackKey),
                        g = this.negStacks,
                        f = (e = "group" === i ? e.yAxis[0] : this.yAxis)
                          .stacking.stacks,
                        y = e.stacking.oldStacks;
                      for (e.stacking.stacksTouched += 1, p = 0; p < a; p++) {
                        var b = o[p],
                          S = r[p],
                          k = this.getStackIndicator(k, b, this.index),
                          C = k.key,
                          w = (d = g && S < (c ? 0 : l)) ? u : t;
                        f[w] || (f[w] = {}),
                          f[w][b] ||
                            (y[w] && y[w][b]
                              ? ((f[w][b] = y[w][b]), (f[w][b].total = null))
                              : (f[w][b] = new s(
                                  e,
                                  e.options.stackLabels,
                                  !!d,
                                  b,
                                  h
                                ))),
                          (w = f[w][b]),
                          null !== S
                            ? ((w.points[C] = w.points[this.index] =
                                [M(w.cumulative, c)]),
                              x(w.cumulative) || (w.base = C),
                              (w.touched = e.stacking.stacksTouched),
                              0 < k.index &&
                                !1 === this.singleStacks &&
                                (w.points[C][0] =
                                  w.points[this.index + "," + b + ",0"][0]))
                            : (w.points[C] = w.points[this.index] = null),
                          "percent" === i
                            ? ((d = d ? t : u),
                              g && f[d] && f[d][b]
                                ? ((d = f[d][b]),
                                  (w.total = d.total =
                                    Math.max(d.total, w.total) + Math.abs(S) ||
                                    0))
                                : (w.total = m(w.total + (Math.abs(S) || 0))))
                            : "group" === i
                            ? (v(S) && (S = S[0]),
                              null !== S && (w.total = (w.total || 0) + 1))
                            : (w.total = m(w.total + (S || 0))),
                          (w.cumulative =
                            "group" === i
                              ? (w.total || 1) - 1
                              : m(M(w.cumulative, c) + (S || 0))),
                          null !== S &&
                            (w.points[C].push(w.cumulative),
                            (n[p] = w.cumulative),
                            (w.hasValidPoints = !0));
                      }
                      "percent" === i && (e.stacking.usePercentage = !0),
                        "group" !== i && (this.stackedYData = n),
                        (e.stacking.oldStacks = {});
                    }
                  }
                  const { getDeferredAnimation: u } = t,
                    {
                      series: { prototype: g },
                    } = i,
                    {
                      addEvent: f,
                      correctFloat: m,
                      defined: x,
                      destroyObjectProperties: y,
                      fireEvent: b,
                      isArray: v,
                      isNumber: S,
                      objectEach: k,
                      pick: M,
                    } = o;
                  class C {
                    constructor(t) {
                      (this.oldStacks = {}),
                        (this.stacks = {}),
                        (this.stacksTouched = 0),
                        (this.axis = t);
                    }
                    buildStacks() {
                      const t = this.axis,
                        e = t.series,
                        i = t.options.reversedStacks,
                        s = e.length;
                      let o, r;
                      for (this.usePercentage = !1, r = s; r--; )
                        (o = e[i ? r : s - r - 1]),
                          o.setStackedPoints(),
                          o.setGroupedPoints();
                      for (r = 0; r < s; r++) e[r].modifyStacks();
                      b(t, "afterBuildStacks");
                    }
                    cleanStacks() {
                      let t;
                      this.oldStacks && (t = this.stacks = this.oldStacks),
                        k(t, function (t) {
                          k(t, function (t) {
                            t.cumulative = t.total;
                          });
                        });
                    }
                    resetStacks() {
                      k(this.stacks, (t) => {
                        k(t, (e, i) => {
                          S(e.touched) && e.touched < this.stacksTouched
                            ? (e.destroy(), delete t[i])
                            : ((e.total = null), (e.cumulative = null));
                        });
                      });
                    }
                    renderStackTotals() {
                      var t = this.axis;
                      const e = t.chart,
                        i = e.renderer,
                        s = this.stacks;
                      t = u(
                        e,
                        (t.options.stackLabels &&
                          t.options.stackLabels.animation) ||
                          !1
                      );
                      const o = (this.stackTotalGroup =
                        this.stackTotalGroup ||
                        i
                          .g("stack-labels")
                          .attr({ zIndex: 6, opacity: 0 })
                          .add());
                      o.translate(e.plotLeft, e.plotTop),
                        k(s, function (t) {
                          k(t, function (t) {
                            t.render(o);
                          });
                        }),
                        o.animate({ opacity: 1 }, t);
                    }
                  }
                  var w;
                  return (
                    (function (t) {
                      const e = [];
                      t.compose = function (t, i, s) {
                        o.pushUnique(e, t) &&
                          (f(t, "init", a), f(t, "destroy", n)),
                          o.pushUnique(e, i) && (i.prototype.getStacks = r),
                          o.pushUnique(e, s) &&
                            (((t = s.prototype).getStackIndicator = h),
                            (t.modifyStacks = l),
                            (t.percentStacker = c),
                            (t.setGroupedPoints = d),
                            (t.setStackedPoints = p));
                      };
                    })(w || (w = {})),
                    w
                  );
                }
              ),
              e(
                i,
                "Series/Line/LineSeries.js",
                [
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { defined: s, merge: o } = i;
                  class r extends t {
                    constructor() {
                      super(...arguments),
                        (this.points = this.options = this.data = void 0);
                    }
                    drawGraph() {
                      const t = this,
                        e = this.options,
                        i = (this.gappedPath || this.getGraphPath).call(this),
                        s = this.chart.styledMode;
                      let o = [["graph", "highcharts-graph"]];
                      s ||
                        o[0].push(
                          e.lineColor || this.color || "#cccccc",
                          e.dashStyle
                        ),
                        (o = t.getZonesGraphs(o)),
                        o.forEach(function (o, r) {
                          var n = o[0];
                          let a = t[n];
                          const h = a ? "animate" : "attr";
                          a
                            ? ((a.endX = t.preventGraphAnimation
                                ? null
                                : i.xMap),
                              a.animate({ d: i }))
                            : i.length &&
                              (t[n] = a =
                                t.chart.renderer
                                  .path(i)
                                  .addClass(o[1])
                                  .attr({ zIndex: 1 })
                                  .add(t.group)),
                            a &&
                              !s &&
                              ((n = {
                                stroke: o[2],
                                "stroke-width": e.lineWidth || 0,
                                fill: (t.fillGraph && t.color) || "none",
                              }),
                              o[3]
                                ? (n.dashstyle = o[3])
                                : "square" !== e.linecap &&
                                  (n["stroke-linecap"] = n["stroke-linejoin"] =
                                    "round"),
                              a[h](n).shadow(2 > r && e.shadow)),
                            a && ((a.startX = i.xMap), (a.isArea = i.isArea));
                        });
                    }
                    getGraphPath(t, e, i) {
                      const o = this,
                        r = o.options,
                        n = [],
                        a = [];
                      let h,
                        l = r.step;
                      const c = (t = t || o.points).reversed;
                      return (
                        c && t.reverse(),
                        (l = { right: 1, center: 2 }[l] || (l && 3)) &&
                          c &&
                          (l = 4 - l),
                        (t = this.getValidPoints(
                          t,
                          !1,
                          !(r.connectNulls && !e && !i)
                        )).forEach(function (c, d) {
                          const p = c.plotX,
                            u = c.plotY,
                            g = t[d - 1],
                            f = c.isNull || "number" != typeof u;
                          (c.leftCliff || (g && g.rightCliff)) &&
                            !i &&
                            (h = !0),
                            f && !s(e) && 0 < d
                              ? (h = !r.connectNulls)
                              : f && !e
                              ? (h = !0)
                              : (0 === d || h
                                  ? (d = [["M", c.plotX, c.plotY]])
                                  : o.getPointSpline
                                  ? (d = [o.getPointSpline(t, c, d)])
                                  : l
                                  ? (d =
                                      1 === l
                                        ? [["L", g.plotX, u]]
                                        : 2 === l
                                        ? [
                                            ["L", (g.plotX + p) / 2, g.plotY],
                                            ["L", (g.plotX + p) / 2, u],
                                          ]
                                        : [["L", p, g.plotY]]).push(["L", p, u])
                                  : (d = [["L", p, u]]),
                                a.push(c.x),
                                l && (a.push(c.x), 2 === l && a.push(c.x)),
                                n.push.apply(n, d),
                                (h = !1));
                        }),
                        (n.xMap = a),
                        (o.graphPath = n)
                      );
                    }
                    getZonesGraphs(t) {
                      return (
                        this.zones.forEach(function (e, i) {
                          (i = [
                            "zone-graph-" + i,
                            "highcharts-graph highcharts-zone-graph-" +
                              i +
                              " " +
                              (e.className || ""),
                          ]),
                            this.chart.styledMode ||
                              i.push(
                                e.color || this.color,
                                e.dashStyle || this.options.dashStyle
                              ),
                            t.push(i);
                        }, this),
                        t
                      );
                    }
                  }
                  return (
                    (r.defaultOptions = o(t.defaultOptions, {
                      legendSymbol: "lineMarker",
                    })),
                    e.registerSeriesType("line", r),
                    r
                  );
                }
              ),
              e(
                i,
                "Series/Area/AreaSeries.js",
                [
                  i["Core/Color/Color.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const {
                      seriesTypes: { line: s },
                    } = e,
                    { extend: o, merge: r, objectEach: n, pick: a } = i;
                  class h extends s {
                    constructor() {
                      super(...arguments),
                        (this.points = this.options = this.data = void 0);
                    }
                    drawGraph() {
                      (this.areaPath = []), super.drawGraph.apply(this);
                      const t = this,
                        e = this.areaPath,
                        i = this.options,
                        s = [
                          ["area", "highcharts-area", this.color, i.fillColor],
                        ];
                      this.zones.forEach(function (e, o) {
                        s.push([
                          "zone-area-" + o,
                          "highcharts-area highcharts-zone-area-" +
                            o +
                            " " +
                            e.className,
                          e.color || t.color,
                          e.fillColor || i.fillColor,
                        ]);
                      }),
                        s.forEach(function (s) {
                          const o = s[0],
                            r = {};
                          let n = t[o];
                          const h = n ? "animate" : "attr";
                          n
                            ? ((n.endX = t.preventGraphAnimation
                                ? null
                                : e.xMap),
                              n.animate({ d: e }))
                            : ((r.zIndex = 0),
                              (n = t[o] =
                                t.chart.renderer
                                  .path(e)
                                  .addClass(s[1])
                                  .add(t.group)),
                              (n.isArea = !0)),
                            t.chart.styledMode ||
                              (s[3]
                                ? (r.fill = s[3])
                                : ((r.fill = s[2]),
                                  (r["fill-opacity"] = a(
                                    i.fillOpacity,
                                    0.75
                                  )))),
                            n[h](r),
                            (n.startX = e.xMap),
                            (n.shiftUnit = i.step ? 2 : 1);
                        });
                    }
                    getGraphPath(t) {
                      var e = s.prototype.getGraphPath,
                        i = this.options;
                      const o = i.stacking,
                        r = this.yAxis,
                        n = [],
                        h = [],
                        l = this.index,
                        c = r.stacking.stacks[this.stackKey],
                        d = i.threshold,
                        p = Math.round(r.getThreshold(i.threshold));
                      i = a(i.connectNulls, "percent" === o);
                      var u = function (e, i, s) {
                        var a = t[e];
                        e = o && c[a.x].points[l];
                        const u = a[s + "Null"] || 0;
                        let f, m;
                        (s = a[s + "Cliff"] || 0),
                          (a = !0),
                          s || u
                            ? ((f = (u ? e[0] : e[1]) + s),
                              (m = e[0] + s),
                              (a = !!u))
                            : !o && t[i] && t[i].isNull && (f = m = d),
                          void 0 !== f &&
                            (h.push({
                              plotX: g,
                              plotY: null === f ? p : r.getThreshold(f),
                              isNull: a,
                              isCliff: !0,
                            }),
                            n.push({
                              plotX: g,
                              plotY: null === m ? p : r.getThreshold(m),
                              doCurve: !1,
                            }));
                      };
                      let g;
                      (t = t || this.points), o && (t = this.getStackPoints(t));
                      for (let e = 0, s = t.length; e < s; ++e) {
                        o ||
                          (t[e].leftCliff =
                            t[e].rightCliff =
                            t[e].leftNull =
                            t[e].rightNull =
                              void 0);
                        var f = t[e].isNull;
                        g = a(t[e].rectPlotX, t[e].plotX);
                        var m = o ? a(t[e].yBottom, p) : p;
                        (f && !i) ||
                          (i || u(e, e - 1, "left"),
                          (f && !o && i) ||
                            (h.push(t[e]),
                            n.push({ x: e, plotX: g, plotY: m })),
                          i || u(e, e + 1, "right"));
                      }
                      return (
                        (u = e.call(this, h, !0, !0)),
                        (n.reversed = !0),
                        (m = (f = e.call(this, n, !0, !0))[0]) &&
                          "M" === m[0] &&
                          (f[0] = ["L", m[1], m[2]]),
                        (f = u.concat(f)).length && f.push(["Z"]),
                        (e = e.call(this, h, !1, i)),
                        (f.xMap = u.xMap),
                        (this.areaPath = f),
                        e
                      );
                    }
                    getStackPoints(t) {
                      const e = this,
                        i = [],
                        s = [],
                        o = this.xAxis,
                        r = this.yAxis,
                        h = r.stacking.stacks[this.stackKey],
                        l = {},
                        c = r.series,
                        d = c.length,
                        p = r.options.reversedStacks ? 1 : -1,
                        u = c.indexOf(e);
                      if (((t = t || this.points), this.options.stacking)) {
                        for (let e = 0; e < t.length; e++)
                          (t[e].leftNull = t[e].rightNull = void 0),
                            (l[t[e].x] = t[e]);
                        n(h, function (t, e) {
                          null !== t.total && s.push(e);
                        }),
                          s.sort(function (t, e) {
                            return t - e;
                          });
                        const g = c.map((t) => t.visible);
                        s.forEach(function (t, n) {
                          let f,
                            m,
                            x = 0;
                          if (l[t] && !l[t].isNull)
                            i.push(l[t]),
                              [-1, 1].forEach(function (i) {
                                const o = 1 === i ? "rightNull" : "leftNull",
                                  r = h[s[n + i]];
                                let a = 0;
                                if (r) {
                                  let i = u;
                                  for (; 0 <= i && i < d; ) {
                                    const s = c[i].index;
                                    (f = r.points[s]),
                                      f ||
                                        (s === e.index
                                          ? (l[t][o] = !0)
                                          : g[i] &&
                                            (m = h[t].points[s]) &&
                                            (a -= m[1] - m[0])),
                                      (i += p);
                                  }
                                }
                                l[t][1 === i ? "rightCliff" : "leftCliff"] = a;
                              });
                          else {
                            let e = u;
                            for (; 0 <= e && e < d; ) {
                              if ((f = h[t].points[c[e].index])) {
                                x = f[1];
                                break;
                              }
                              e += p;
                            }
                            (x = a(x, 0)),
                              (x = r.translate(x, 0, 1, 0, 1)),
                              i.push({
                                isNull: !0,
                                plotX: o.translate(t, 0, 0, 0, 1),
                                x: t,
                                plotY: x,
                                yBottom: x,
                              });
                          }
                        });
                      }
                      return i;
                    }
                  }
                  return (
                    (h.defaultOptions = r(s.defaultOptions, {
                      threshold: 0,
                      legendSymbol: "rectangle",
                    })),
                    o(h.prototype, { singleStacks: !1 }),
                    e.registerSeriesType("area", h),
                    h
                  );
                }
              ),
              e(
                i,
                "Series/Spline/SplineSeries.js",
                [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  const { line: i } = t.seriesTypes,
                    { merge: s, pick: o } = e;
                  class r extends i {
                    constructor() {
                      super(...arguments),
                        (this.points = this.options = this.data = void 0);
                    }
                    getPointSpline(t, e, i) {
                      const s = e.plotX || 0,
                        r = e.plotY || 0,
                        n = t[i - 1];
                      let a, h, l;
                      if (
                        ((i = t[i + 1]),
                        n &&
                          !n.isNull &&
                          !1 !== n.doCurve &&
                          !e.isCliff &&
                          i &&
                          !i.isNull &&
                          !1 !== i.doCurve &&
                          !e.isCliff)
                      ) {
                        t = n.plotY || 0;
                        var c = i.plotX || 0;
                        i = i.plotY || 0;
                        let o = 0;
                        (a = (1.5 * s + (n.plotX || 0)) / 2.5),
                          (h = (1.5 * r + t) / 2.5),
                          (l = (1.5 * r + i) / 2.5),
                          (c = (1.5 * s + c) / 2.5) !== a &&
                            (o = ((l - h) * (c - s)) / (c - a) + r - l),
                          (h += o),
                          (l += o),
                          h > t && h > r
                            ? ((h = Math.max(t, r)), (l = 2 * r - h))
                            : h < t &&
                              h < r &&
                              ((h = Math.min(t, r)), (l = 2 * r - h)),
                          l > i && l > r
                            ? ((l = Math.max(i, r)), (h = 2 * r - l))
                            : l < i &&
                              l < r &&
                              ((l = Math.min(i, r)), (h = 2 * r - l)),
                          (e.rightContX = c),
                          (e.rightContY = l);
                      }
                      return (
                        (e = [
                          "C",
                          o(n.rightContX, n.plotX, 0),
                          o(n.rightContY, n.plotY, 0),
                          o(a, s, 0),
                          o(h, r, 0),
                          s,
                          r,
                        ]),
                        (n.rightContX = n.rightContY = void 0),
                        e
                      );
                    }
                  }
                  return (
                    (r.defaultOptions = s(i.defaultOptions)),
                    t.registerSeriesType("spline", r),
                    r
                  );
                }
              ),
              e(
                i,
                "Series/AreaSpline/AreaSplineSeries.js",
                [
                  i["Series/Spline/SplineSeries.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const {
                      area: s,
                      area: { prototype: o },
                    } = e.seriesTypes,
                    { extend: r, merge: n } = i;
                  class a extends t {
                    constructor() {
                      super(...arguments),
                        (this.options = this.points = this.data = void 0);
                    }
                  }
                  return (
                    (a.defaultOptions = n(t.defaultOptions, s.defaultOptions)),
                    r(a.prototype, {
                      getGraphPath: o.getGraphPath,
                      getStackPoints: o.getStackPoints,
                      drawGraph: o.drawGraph,
                    }),
                    e.registerSeriesType("areaspline", a),
                    a
                  );
                }
              ),
              e(i, "Series/Column/ColumnSeriesDefaults.js", [], function () {
                return {
                  borderRadius: 3,
                  centerInCategory: !1,
                  groupPadding: 0.2,
                  marker: null,
                  pointPadding: 0.1,
                  minPointLength: 0,
                  cropThreshold: 50,
                  pointRange: null,
                  states: {
                    hover: { halo: !1, brightness: 0.1 },
                    select: { color: "#cccccc", borderColor: "#000000" },
                  },
                  dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    y: void 0,
                  },
                  startFromThreshold: !0,
                  stickyTracking: !1,
                  tooltip: { distance: 6 },
                  threshold: 0,
                  borderColor: "#ffffff",
                };
              }),
              e(
                i,
                "Series/Column/ColumnSeries.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Color/Color.js"],
                  i["Series/Column/ColumnSeriesDefaults.js"],
                  i["Core/Globals.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r, n) {
                  const { animObject: a } = t,
                    { parse: h } = e,
                    { hasTouch: l, noop: c } = s,
                    {
                      clamp: d,
                      defined: p,
                      extend: u,
                      fireEvent: g,
                      isArray: f,
                      isNumber: m,
                      merge: x,
                      pick: y,
                      objectEach: b,
                    } = n;
                  class v extends o {
                    constructor() {
                      super(...arguments),
                        (this.points =
                          this.options =
                          this.group =
                          this.data =
                          this.borderWidth =
                            void 0);
                    }
                    animate(t) {
                      const e = this,
                        i = this.yAxis,
                        s = i.pos,
                        o = e.options,
                        r = this.chart.inverted,
                        n = {},
                        h = r ? "translateX" : "translateY";
                      let l;
                      t
                        ? ((n.scaleY = 0.001),
                          (t = d(i.toPixels(o.threshold), s, s + i.len)),
                          r ? (n.translateX = t - i.len) : (n.translateY = t),
                          e.clipBox && e.setClip(),
                          e.group.attr(n))
                        : ((l = Number(e.group.attr(h))),
                          e.group.animate(
                            { scaleY: 1 },
                            u(a(e.options.animation), {
                              step: function (t, i) {
                                e.group &&
                                  ((n[h] = l + i.pos * (s - l)),
                                  e.group.attr(n));
                              },
                            })
                          ));
                    }
                    init(t, e) {
                      super.init.apply(this, arguments);
                      const i = this;
                      (t = i.chart).hasRendered &&
                        t.series.forEach(function (t) {
                          t.type === i.type && (t.isDirty = !0);
                        });
                    }
                    getColumnMetrics() {
                      const t = this;
                      var e = t.options;
                      const i = t.xAxis,
                        s = t.yAxis;
                      var o = i.options.reversedStacks;
                      o = (i.reversed && !o) || (!i.reversed && o);
                      const r = {};
                      let n,
                        a = 0;
                      !1 === e.grouping
                        ? (a = 1)
                        : t.chart.series.forEach(function (e) {
                            const i = e.yAxis,
                              o = e.options;
                            let h;
                            e.type !== t.type ||
                              (!e.visible &&
                                t.chart.options.chart.ignoreHiddenSeries) ||
                              s.len !== i.len ||
                              s.pos !== i.pos ||
                              (o.stacking && "group" !== o.stacking
                                ? ((n = e.stackKey),
                                  void 0 === r[n] && (r[n] = a++),
                                  (h = r[n]))
                                : !1 !== o.grouping && (h = a++),
                              (e.columnIndex = h));
                          });
                      const h = Math.min(
                          Math.abs(i.transA) *
                            ((i.ordinal && i.ordinal.slope) ||
                              e.pointRange ||
                              i.closestPointRange ||
                              i.tickInterval ||
                              1),
                          i.len
                        ),
                        l = h * e.groupPadding,
                        c = (h - 2 * l) / (a || 1);
                      return (
                        (e = Math.min(
                          e.maxPointWidth || i.len,
                          y(e.pointWidth, c * (1 - 2 * e.pointPadding))
                        )),
                        (t.columnMetrics = {
                          width: e,
                          offset:
                            (c - e) / 2 +
                            (l +
                              ((t.columnIndex || 0) + (o ? 1 : 0)) * c -
                              h / 2) *
                              (o ? -1 : 1),
                          paddedWidth: c,
                          columnCount: a,
                        }),
                        t.columnMetrics
                      );
                    }
                    crispCol(t, e, i, s) {
                      var o = this.borderWidth,
                        r = -(o % 2 ? 0.5 : 0);
                      return (
                        (o = o % 2 ? 0.5 : 1),
                        this.options.crisp &&
                          ((i = Math.round(t + i) + r),
                          (i -= t = Math.round(t) + r)),
                        (s = Math.round(e + s) + o),
                        (r = 0.5 >= Math.abs(e) && 0.5 < s),
                        (s -= e = Math.round(e) + o),
                        r && s && (--e, (s += 1)),
                        { x: t, y: e, width: i, height: s }
                      );
                    }
                    adjustForMissingColumns(t, e, i, s) {
                      const o = this.options.stacking;
                      if (!i.isNull && 1 < s.columnCount) {
                        const r = this.yAxis.options.reversedStacks;
                        let n = 0,
                          a = r ? 0 : -s.columnCount;
                        b(
                          this.yAxis.stacking && this.yAxis.stacking.stacks,
                          (t) => {
                            if ("number" == typeof i.x) {
                              const e = t[i.x.toString()];
                              e &&
                                ((t = e.points[this.index]),
                                o
                                  ? (t && (n = a),
                                    e.hasValidPoints && (r ? a++ : a--))
                                  : f(t) &&
                                    ((t = Object.keys(e.points)
                                      .filter(
                                        (t) =>
                                          !t.match(",") &&
                                          e.points[t] &&
                                          1 < e.points[t].length
                                      )
                                      .map(parseFloat)
                                      .sort((t, e) => e - t)),
                                    (n = t.indexOf(this.index)),
                                    (a = t.length)));
                            }
                          }
                        ),
                          (t =
                            (i.plotX || 0) +
                            ((a - 1) * s.paddedWidth + e) / 2 -
                            e -
                            n * s.paddedWidth);
                      }
                      return t;
                    }
                    translate() {
                      const t = this,
                        e = t.chart,
                        i = t.options;
                      var s = (t.dense =
                        2 > t.closestPointRange * t.xAxis.transA);
                      s = t.borderWidth = y(i.borderWidth, s ? 0 : 1);
                      const r = t.xAxis,
                        n = t.yAxis,
                        a = i.threshold,
                        h = y(i.minPointLength, 5),
                        l = t.getColumnMetrics(),
                        c = l.width,
                        u = (t.pointXOffset = l.offset),
                        f = t.dataMin,
                        x = t.dataMax;
                      let b = (t.barW = Math.max(c, 1 + 2 * s)),
                        v = (t.translatedThreshold = n.getThreshold(a));
                      e.inverted && (v -= 0.5),
                        i.pointPadding && (b = Math.ceil(b)),
                        o.prototype.translate.apply(t),
                        t.points.forEach(function (s) {
                          const o = y(s.yBottom, v);
                          var g = 999 + Math.abs(o),
                            S = s.plotX || 0;
                          g = d(s.plotY, -g, n.len + g);
                          let k = Math.min(g, o),
                            M = Math.max(g, o) - k,
                            C = c,
                            w = S + u,
                            T = b;
                          h &&
                            Math.abs(M) < h &&
                            ((M = h),
                            (S =
                              (!n.reversed && !s.negative) ||
                              (n.reversed && s.negative)),
                            m(a) &&
                              m(x) &&
                              s.y === a &&
                              x <= a &&
                              (n.min || 0) < a &&
                              (f !== x || (n.max || 0) <= a) &&
                              ((S = !S), (s.negative = !s.negative)),
                            (k =
                              Math.abs(k - v) > h ? o - h : v - (S ? h : 0))),
                            p(s.options.pointWidth) &&
                              ((C = T = Math.ceil(s.options.pointWidth)),
                              (w -= Math.round((C - c) / 2))),
                            i.centerInCategory &&
                              (w = t.adjustForMissingColumns(w, C, s, l)),
                            (s.barX = w),
                            (s.pointWidth = C),
                            (s.tooltipPos = e.inverted
                              ? [
                                  d(
                                    n.len + n.pos - e.plotLeft - g,
                                    n.pos - e.plotLeft,
                                    n.len + n.pos - e.plotLeft
                                  ),
                                  r.len + r.pos - e.plotTop - w - T / 2,
                                  M,
                                ]
                              : [
                                  r.left - e.plotLeft + w + T / 2,
                                  d(
                                    g + n.pos - e.plotTop,
                                    n.pos - e.plotTop,
                                    n.len + n.pos - e.plotTop
                                  ),
                                  M,
                                ]),
                            (s.shapeType =
                              t.pointClass.prototype.shapeType ||
                              "roundedRect"),
                            (s.shapeArgs = t.crispCol(
                              w,
                              s.isNull ? v : k,
                              T,
                              s.isNull ? 0 : M
                            ));
                        }),
                        g(this, "afterColumnTranslate");
                    }
                    drawGraph() {
                      this.group[this.dense ? "addClass" : "removeClass"](
                        "highcharts-dense-data"
                      );
                    }
                    pointAttribs(t, e) {
                      const i = this.options;
                      var s = this.pointAttrToOptions || {},
                        o = s.stroke || "borderColor";
                      const r = s["stroke-width"] || "borderWidth";
                      let n,
                        a = (t && t.color) || this.color,
                        l = (t && t[o]) || i[o] || a;
                      s = (t && t.options.dashStyle) || i.dashStyle;
                      let c = (t && t[r]) || i[r] || this[r] || 0,
                        d = y(t && t.opacity, i.opacity, 1);
                      return (
                        t &&
                          this.zones.length &&
                          ((n = t.getZone()),
                          (a =
                            t.options.color ||
                            (n && (n.color || t.nonZonedColor)) ||
                            this.color),
                          n &&
                            ((l = n.borderColor || l),
                            (s = n.dashStyle || s),
                            (c = n.borderWidth || c))),
                        e &&
                          t &&
                          ((e = (t = x(
                            i.states[e],
                            (t.options.states && t.options.states[e]) || {}
                          )).brightness),
                          (a =
                            t.color ||
                            (void 0 !== e &&
                              h(a).brighten(t.brightness).get()) ||
                            a),
                          (l = t[o] || l),
                          (c = t[r] || c),
                          (s = t.dashStyle || s),
                          (d = y(t.opacity, d))),
                        (o = {
                          fill: a,
                          stroke: l,
                          "stroke-width": c,
                          opacity: d,
                        }),
                        s && (o.dashstyle = s),
                        o
                      );
                    }
                    drawPoints(t = this.points) {
                      const e = this,
                        i = this.chart,
                        s = e.options,
                        o = i.renderer,
                        r = s.animationLimit || 250;
                      let n;
                      t.forEach(function (t) {
                        let a = t.graphic,
                          h = !!a,
                          l = a && i.pointCount < r ? "animate" : "attr";
                        m(t.plotY) && null !== t.y
                          ? ((n = t.shapeArgs),
                            a && t.hasNewShapeType() && (a = a.destroy()),
                            e.enabledDataSorting &&
                              (t.startXPos = e.xAxis.reversed
                                ? -((n && n.width) || 0)
                                : e.xAxis.width),
                            a ||
                              ((t.graphic = a =
                                o[t.shapeType](n).add(t.group || e.group)) &&
                                e.enabledDataSorting &&
                                i.hasRendered &&
                                i.pointCount < r &&
                                (a.attr({ x: t.startXPos }),
                                (h = !0),
                                (l = "animate"))),
                            a && h && a[l](x(n)),
                            i.styledMode ||
                              a[l](
                                e.pointAttribs(t, t.selected && "select")
                              ).shadow(!1 !== t.allowShadow && s.shadow),
                            a &&
                              (a.addClass(t.getClassName(), !0),
                              a.attr({
                                visibility: t.visible ? "inherit" : "hidden",
                              })))
                          : a && (t.graphic = a.destroy());
                      });
                    }
                    drawTracker(t = this.points) {
                      const e = this,
                        i = e.chart,
                        s = i.pointer,
                        o = function (t) {
                          const i = s.getPointFromEvent(t);
                          void 0 !== i &&
                            e.options.enableMouseTracking &&
                            ((s.isDirectTouch = !0), i.onMouseOver(t));
                        };
                      let r;
                      t.forEach(function (t) {
                        (r = f(t.dataLabels)
                          ? t.dataLabels
                          : t.dataLabel
                          ? [t.dataLabel]
                          : []),
                          t.graphic && (t.graphic.element.point = t),
                          r.forEach(function (e) {
                            e.div ? (e.div.point = t) : (e.element.point = t);
                          });
                      }),
                        e._hasTracking ||
                          (e.trackerGroups.forEach(function (t) {
                            e[t] &&
                              (e[t]
                                .addClass("highcharts-tracker")
                                .on("mouseover", o)
                                .on("mouseout", function (t) {
                                  s.onTrackerMouseOut(t);
                                }),
                              l && e[t].on("touchstart", o),
                              !i.styledMode &&
                                e.options.cursor &&
                                e[t].css({ cursor: e.options.cursor }));
                          }),
                          (e._hasTracking = !0)),
                        g(this, "afterDrawTracker");
                    }
                    remove() {
                      const t = this,
                        e = t.chart;
                      e.hasRendered &&
                        e.series.forEach(function (e) {
                          e.type === t.type && (e.isDirty = !0);
                        }),
                        o.prototype.remove.apply(t, arguments);
                    }
                  }
                  return (
                    (v.defaultOptions = x(o.defaultOptions, i)),
                    u(v.prototype, {
                      cropShoulder: 0,
                      directTouch: !0,
                      getSymbol: c,
                      negStacks: !0,
                      trackerGroups: ["group", "dataLabelsGroup"],
                    }),
                    r.registerSeriesType("column", v),
                    v
                  );
                }
              ),
              e(
                i,
                "Core/Series/DataLabel.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Templating.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { getDeferredAnimation: s } = t,
                    { format: o } = e,
                    {
                      defined: r,
                      extend: n,
                      fireEvent: a,
                      isArray: h,
                      isString: l,
                      merge: c,
                      objectEach: d,
                      pick: p,
                      splat: u,
                    } = i;
                  var g;
                  return (
                    (function (t) {
                      function e(t, e, i, s, o) {
                        const a = this.chart;
                        var h = this.isCartesian && a.inverted;
                        const l = this.enabledDataSorting;
                        var c = t.plotX,
                          d = t.plotY;
                        const u = i.rotation;
                        var g = i.align;
                        d =
                          r(c) &&
                          r(d) &&
                          a.isInsidePlot(c, Math.round(d), {
                            inverted: h,
                            paneCoordinates: !0,
                            series: this,
                          });
                        let f =
                          "justify" === p(i.overflow, l ? "none" : "justify");
                        if (
                          ((h =
                            this.visible &&
                            !1 !== t.visible &&
                            r(c) &&
                            (t.series.forceDL ||
                              (l && !f) ||
                              d ||
                              (p(i.inside, !!this.options.stacking) &&
                                s &&
                                a.isInsidePlot(
                                  c,
                                  h ? s.x + 1 : s.y + s.height - 1,
                                  {
                                    inverted: h,
                                    paneCoordinates: !0,
                                    series: this,
                                  }
                                )))),
                          (c = t.pos()),
                          h && c)
                        ) {
                          u && e.attr({ align: g }), (g = e.getBBox(!0));
                          var m = [0, 0],
                            x = a.renderer.fontMetrics(e).b;
                          if (
                            ((s = n(
                              {
                                x: c[0],
                                y: Math.round(c[1]),
                                width: 0,
                                height: 0,
                              },
                              s
                            )),
                            n(i, { width: g.width, height: g.height }),
                            u
                              ? ((f = !1),
                                (m = a.renderer.rotCorr(x, u)),
                                (x = {
                                  x: s.x + (i.x || 0) + s.width / 2 + m.x,
                                  y:
                                    s.y +
                                    (i.y || 0) +
                                    { top: 0, middle: 0.5, bottom: 1 }[
                                      i.verticalAlign
                                    ] *
                                      s.height,
                                }),
                                (m = [
                                  g.x - Number(e.attr("x")),
                                  g.y - Number(e.attr("y")),
                                ]),
                                l &&
                                  this.xAxis &&
                                  !f &&
                                  this.setDataLabelStartPos(t, e, o, d, x),
                                e[o ? "attr" : "animate"](x))
                              : (l &&
                                  this.xAxis &&
                                  !f &&
                                  this.setDataLabelStartPos(t, e, o, d, s),
                                e.align(i, void 0, s),
                                (x = e.alignAttr)),
                            f && 0 <= s.height)
                          )
                            this.justifyDataLabel(e, i, x, g, s, o);
                          else if (p(i.crop, !0)) {
                            let { x: t, y: e } = x;
                            (t += m[0]),
                              (e += m[1]),
                              (h =
                                a.isInsidePlot(t, e, {
                                  paneCoordinates: !0,
                                  series: this,
                                }) &&
                                a.isInsidePlot(t + g.width, e + g.height, {
                                  paneCoordinates: !0,
                                  series: this,
                                }));
                          }
                          i.shape &&
                            !u &&
                            e[o ? "attr" : "animate"]({
                              anchorX: c[0],
                              anchorY: c[1],
                            });
                        }
                        o && l && (e.placed = !1),
                          h || (l && !f)
                            ? e.show()
                            : (e.hide(), (e.placed = !1));
                      }
                      function g() {
                        return this.plotGroup(
                          "dataLabelsGroup",
                          "data-labels",
                          this.hasRendered ? "inherit" : "hidden",
                          this.options.dataLabels.zIndex || 6
                        );
                      }
                      function f(t) {
                        const e = this.hasRendered || 0,
                          i = this.initDataLabelsGroup().attr({ opacity: +e });
                        return (
                          !e &&
                            i &&
                            (this.visible && i.show(),
                            this.options.animation
                              ? i.animate({ opacity: 1 }, t)
                              : i.attr({ opacity: 1 })),
                          i
                        );
                      }
                      function m(t = this.points) {
                        var e, i;
                        const n = this,
                          c = n.chart,
                          g = n.options,
                          f = c.renderer,
                          { backgroundColor: m, plotBackgroundColor: x } =
                            c.options.chart,
                          b = c.options.plotOptions,
                          v = f.getContrast(
                            (l(x) && x) || (l(m) && m) || "#000000"
                          );
                        let S,
                          k,
                          M = g.dataLabels;
                        var C = u(M)[0];
                        const w = C.animation;
                        (C = C.defer ? s(c, w, n) : { defer: 0, duration: 0 }),
                          (M = y(
                            y(
                              null === (e = null == b ? void 0 : b.series) ||
                                void 0 === e
                                ? void 0
                                : e.dataLabels,
                              null === (i = null == b ? void 0 : b[n.type]) ||
                                void 0 === i
                                ? void 0
                                : i.dataLabels
                            ),
                            M
                          )),
                          a(this, "drawDataLabels"),
                          (h(M) || M.enabled || n._hasPointLabels) &&
                            ((k = this.initDataLabels(C)),
                            t.forEach((t) => {
                              var e;
                              const i = t.dataLabels || [];
                              for (
                                S = u(
                                  y(
                                    M,
                                    t.dlOptions ||
                                      (null === (e = t.options) || void 0 === e
                                        ? void 0
                                        : e.dataLabels)
                                  )
                                ),
                                  S.forEach((e, s) => {
                                    var a,
                                      h =
                                        e.enabled &&
                                        (!t.isNull || t.dataLabelOnNull) &&
                                        (function (t, e) {
                                          var i = e.filter;
                                          return (
                                            !i ||
                                            ((e = i.operator),
                                            (t = t[i.property]),
                                            (i = i.value),
                                            (">" === e && t > i) ||
                                              ("<" === e && t < i) ||
                                              (">=" === e && t >= i) ||
                                              ("<=" === e && t <= i) ||
                                              ("==" === e && t == i) ||
                                              ("===" === e && t === i))
                                          );
                                        })(t, e);
                                    const u = t.connectors
                                        ? t.connectors[s]
                                        : t.connector,
                                      m = e.style || {};
                                    let x = {},
                                      y = i[s],
                                      b = !y;
                                    const S = p(e.distance, t.labelDistance);
                                    if (h) {
                                      var M = p(
                                          e[t.formatPrefix + "Format"],
                                          e.format
                                        ),
                                        C = t.getLabelConfig();
                                      if (
                                        ((C = r(M)
                                          ? o(M, C, c)
                                          : (
                                              e[t.formatPrefix + "Formatter"] ||
                                              e.formatter
                                            ).call(C, e)),
                                        (M = e.rotation),
                                        c.styledMode ||
                                          ((m.color = p(
                                            e.color,
                                            m.color,
                                            l(n.color) ? n.color : void 0,
                                            "#000000"
                                          )),
                                          "contrast" === m.color
                                            ? ((t.contrastColor = f.getContrast(
                                                t.color || n.color
                                              )),
                                              (m.color =
                                                (!r(S) && e.inside) ||
                                                0 > (S || 0) ||
                                                g.stacking
                                                  ? t.contrastColor
                                                  : v))
                                            : delete t.contrastColor,
                                          g.cursor && (m.cursor = g.cursor)),
                                        (x = {
                                          r: e.borderRadius || 0,
                                          rotation: M,
                                          padding: e.padding,
                                          zIndex: 1,
                                        }),
                                        !c.styledMode)
                                      ) {
                                        const {
                                          backgroundColor: i,
                                          borderColor: s,
                                        } = e;
                                        (x.fill = "auto" === i ? t.color : i),
                                          (x.stroke =
                                            "auto" === s ? t.color : s),
                                          (x["stroke-width"] = e.borderWidth);
                                      }
                                      d(x, (t, e) => {
                                        void 0 === t && delete x[e];
                                      });
                                    }
                                    !y ||
                                      (h &&
                                        r(C) &&
                                        !!y.div == !!e.useHTML &&
                                        ((y.rotation && e.rotation) ||
                                          y.rotation === e.rotation)) ||
                                      ((y = void 0),
                                      (b = !0),
                                      u &&
                                        t.connector &&
                                        ((t.connector = t.connector.destroy()),
                                        t.connectors &&
                                          (1 === t.connectors.length
                                            ? delete t.connectors
                                            : delete t.connectors[s]))),
                                      h &&
                                        r(C) &&
                                        (y
                                          ? (x.text = C)
                                          : (y = M
                                              ? f
                                                  .text(C, 0, 0, e.useHTML)
                                                  .addClass(
                                                    "highcharts-data-label"
                                                  )
                                              : f.label(
                                                  C,
                                                  0,
                                                  0,
                                                  e.shape,
                                                  void 0,
                                                  void 0,
                                                  e.useHTML,
                                                  void 0,
                                                  "data-label"
                                                )) &&
                                            y.addClass(
                                              " highcharts-data-label-color-" +
                                                t.colorIndex +
                                                " " +
                                                (e.className || "") +
                                                (e.useHTML
                                                  ? " highcharts-tracker"
                                                  : "")
                                            ),
                                        y &&
                                          ((y.options = e),
                                          y.attr(x),
                                          c.styledMode ||
                                            y.css(m).shadow(e.shadow),
                                          (h =
                                            e[t.formatPrefix + "TextPath"] ||
                                            e.textPath) &&
                                            !e.useHTML &&
                                            (y.setTextPath(
                                              (null ===
                                                (a = t.getDataLabelPath) ||
                                              void 0 === a
                                                ? void 0
                                                : a.call(t, y)) || t.graphic,
                                              h
                                            ),
                                            t.dataLabelPath &&
                                              !h.enabled &&
                                              (t.dataLabelPath =
                                                t.dataLabelPath.destroy())),
                                          y.added || y.add(k),
                                          n.alignDataLabel(t, y, e, void 0, b),
                                          (y.isActive = !0),
                                          i[s] && i[s] !== y && i[s].destroy(),
                                          (i[s] = y)));
                                  }),
                                  e = i.length;
                                e--;

                              )
                                i[e].isActive
                                  ? (i[e].isActive = !1)
                                  : (i[e].destroy(), i.splice(e, 1));
                              (t.dataLabel = i[0]), (t.dataLabels = i);
                            })),
                          a(this, "afterDrawDataLabels");
                      }
                      function x(t, e, i, s, o, r) {
                        const n = this.chart,
                          a = e.align,
                          h = e.verticalAlign,
                          l = t.box ? 0 : t.padding || 0;
                        let c,
                          d,
                          { x: p = 0, y: u = 0 } = e;
                        return (
                          (c = (i.x || 0) + l),
                          0 > c &&
                            ("right" === a && 0 <= p
                              ? ((e.align = "left"), (e.inside = !0))
                              : (p -= c),
                            (d = !0)),
                          (c = (i.x || 0) + s.width - l),
                          c > n.plotWidth &&
                            ("left" === a && 0 >= p
                              ? ((e.align = "right"), (e.inside = !0))
                              : (p += n.plotWidth - c),
                            (d = !0)),
                          (c = i.y + l),
                          0 > c &&
                            ("bottom" === h && 0 <= u
                              ? ((e.verticalAlign = "top"), (e.inside = !0))
                              : (u -= c),
                            (d = !0)),
                          (c = (i.y || 0) + s.height - l),
                          c > n.plotHeight &&
                            ("top" === h && 0 >= u
                              ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                              : (u += n.plotHeight - c),
                            (d = !0)),
                          d &&
                            ((e.x = p),
                            (e.y = u),
                            (t.placed = !r),
                            t.align(e, void 0, o)),
                          d
                        );
                      }
                      function y(t, e) {
                        let i,
                          s = [];
                        if (h(t) && !h(e))
                          s = t.map(function (t) {
                            return c(t, e);
                          });
                        else if (h(e) && !h(t))
                          s = e.map(function (e) {
                            return c(t, e);
                          });
                        else if (h(t) || h(e)) {
                          if (h(t) && h(e))
                            for (i = Math.max(t.length, e.length); i--; )
                              s[i] = c(t[i], e[i]);
                        } else s = c(t, e);
                        return s;
                      }
                      function b(t, e, i, s, o) {
                        const r = this.chart,
                          n = r.inverted,
                          a = this.xAxis,
                          h = a.reversed,
                          l = n ? e.height / 2 : e.width / 2;
                        (t = (t = t.pointWidth) ? t / 2 : 0),
                          (e.startXPos = n
                            ? o.x
                            : h
                            ? -l - t
                            : a.width - l + t),
                          (e.startYPos = n
                            ? h
                              ? this.yAxis.height - l + t
                              : -l - t
                            : o.y),
                          s
                            ? "hidden" === e.visibility &&
                              (e.show(),
                              e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                            : e
                                .attr({ opacity: 1 })
                                .animate({ opacity: 0 }, void 0, e.hide),
                          r.hasRendered &&
                            (i && e.attr({ x: e.startXPos, y: e.startYPos }),
                            (e.placed = !0));
                      }
                      const v = [];
                      t.compose = function (t) {
                        i.pushUnique(v, t) &&
                          (((t = t.prototype).initDataLabelsGroup = g),
                          (t.initDataLabels = f),
                          (t.alignDataLabel = e),
                          (t.drawDataLabels = m),
                          (t.justifyDataLabel = x),
                          (t.setDataLabelStartPos = b));
                      };
                    })(g || (g = {})),
                    g
                  );
                }
              ),
              e(
                i,
                "Series/Column/ColumnDataLabel.js",
                [
                  i["Core/Series/DataLabel.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { series: s } = e,
                    { merge: o, pick: r } = i;
                  var n;
                  return (
                    (function (e) {
                      function n(t, e, i, n, a) {
                        let h = this.chart.inverted;
                        var l = t.series;
                        let c =
                          (l.xAxis ? l.xAxis.len : this.chart.plotSizeX) || 0;
                        l = (l.yAxis ? l.yAxis.len : this.chart.plotSizeY) || 0;
                        var d = t.dlBox || t.shapeArgs;
                        let p = r(
                            t.below,
                            t.plotY > r(this.translatedThreshold, l)
                          ),
                          u = r(i.inside, !!this.options.stacking);
                        d &&
                          (0 > (n = o(d)).y && ((n.height += n.y), (n.y = 0)),
                          0 < (d = n.y + n.height - l) &&
                            d < n.height &&
                            (n.height -= d),
                          h &&
                            (n = {
                              x: l - n.y - n.height,
                              y: c - n.x - n.width,
                              width: n.height,
                              height: n.width,
                            }),
                          u ||
                            (h
                              ? ((n.x += p ? 0 : n.width), (n.width = 0))
                              : ((n.y += p ? n.height : 0), (n.height = 0)))),
                          (i.align = r(
                            i.align,
                            !h || u ? "center" : p ? "right" : "left"
                          )),
                          (i.verticalAlign = r(
                            i.verticalAlign,
                            h || u ? "middle" : p ? "top" : "bottom"
                          )),
                          s.prototype.alignDataLabel.call(this, t, e, i, n, a),
                          i.inside &&
                            t.contrastColor &&
                            e.css({ color: t.contrastColor });
                      }
                      const a = [];
                      e.compose = function (e) {
                        t.compose(s),
                          i.pushUnique(a, e) &&
                            (e.prototype.alignDataLabel = n);
                      };
                    })(n || (n = {})),
                    n
                  );
                }
              ),
              e(
                i,
                "Series/Bar/BarSeries.js",
                [
                  i["Series/Column/ColumnSeries.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { extend: s, merge: o } = i;
                  class r extends t {
                    constructor() {
                      super(...arguments),
                        (this.points = this.options = this.data = void 0);
                    }
                  }
                  return (
                    (r.defaultOptions = o(t.defaultOptions, {})),
                    s(r.prototype, { inverted: !0 }),
                    e.registerSeriesType("bar", r),
                    r
                  );
                }
              ),
              e(i, "Series/Scatter/ScatterSeriesDefaults.js", [], function () {
                return {
                  lineWidth: 0,
                  findNearestPointBy: "xy",
                  jitter: { x: 0, y: 0 },
                  marker: { enabled: !0 },
                  tooltip: {
                    headerFormat:
                      '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                    pointFormat:
                      "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
                  },
                };
              }),
              e(
                i,
                "Series/Scatter/ScatterSeries.js",
                [
                  i["Series/Scatter/ScatterSeriesDefaults.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { column: s, line: o } = e.seriesTypes,
                    { addEvent: r, extend: n, merge: a } = i;
                  class h extends o {
                    constructor() {
                      super(...arguments),
                        (this.points = this.options = this.data = void 0);
                    }
                    applyJitter() {
                      const t = this,
                        e = this.options.jitter,
                        i = this.points.length;
                      e &&
                        this.points.forEach(function (s, o) {
                          ["x", "y"].forEach(function (r, n) {
                            let a,
                              h,
                              l = "plot" + r.toUpperCase();
                            if (e[r] && !s.isNull) {
                              var c = t[r + "Axis"];
                              (h = e[r] * c.transA),
                                c &&
                                  !c.isLog &&
                                  ((a = Math.max(0, s[l] - h)),
                                  (c = Math.min(c.len, s[l] + h)),
                                  (n = 1e4 * Math.sin(o + n * i)),
                                  (n -= Math.floor(n)),
                                  (s[l] = a + (c - a) * n),
                                  "x" === r && (s.clientX = s.plotX));
                            }
                          });
                        });
                    }
                    drawGraph() {
                      this.options.lineWidth
                        ? super.drawGraph()
                        : this.graph && (this.graph = this.graph.destroy());
                    }
                  }
                  return (
                    (h.defaultOptions = a(o.defaultOptions, t)),
                    n(h.prototype, {
                      drawTracker: s.prototype.drawTracker,
                      sorted: !1,
                      requireSorting: !1,
                      noSharedTooltip: !0,
                      trackerGroups: [
                        "group",
                        "markerGroup",
                        "dataLabelsGroup",
                      ],
                      takeOrdinalPosition: !1,
                    }),
                    r(h, "afterTranslate", function () {
                      this.applyJitter();
                    }),
                    e.registerSeriesType("scatter", h),
                    h
                  );
                }
              ),
              e(
                i,
                "Series/CenteredUtilities.js",
                [
                  i["Core/Globals.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { deg2rad: s } = t,
                    {
                      fireEvent: o,
                      isNumber: r,
                      pick: n,
                      relativeLength: a,
                    } = i;
                  var h;
                  return (
                    (function (t) {
                      (t.getCenter = function () {
                        var t = this.options,
                          i = this.chart;
                        const s = 2 * (t.slicedOffset || 0),
                          h = i.plotWidth - 2 * s,
                          l = i.plotHeight - 2 * s;
                        var c = t.center;
                        const d = Math.min(h, l),
                          p = t.thickness;
                        var u = t.size;
                        let g = t.innerSize || 0;
                        for (
                          "string" == typeof u && (u = parseFloat(u)),
                            "string" == typeof g && (g = parseFloat(g)),
                            t = [
                              n(c[0], "50%"),
                              n(c[1], "50%"),
                              n(u && 0 > u ? void 0 : t.size, "100%"),
                              n(g && 0 > g ? void 0 : t.innerSize || 0, "0%"),
                            ],
                            !i.angular || this instanceof e || (t[3] = 0),
                            c = 0;
                          4 > c;
                          ++c
                        )
                          (u = t[c]),
                            (i = 2 > c || (2 === c && /%$/.test(u))),
                            (t[c] = a(u, [h, l, d, t[2]][c]) + (i ? s : 0));
                        return (
                          t[3] > t[2] && (t[3] = t[2]),
                          r(p) &&
                            2 * p < t[2] &&
                            0 < p &&
                            (t[3] = t[2] - 2 * p),
                          o(this, "afterGetCenter", { positions: t }),
                          t
                        );
                      }),
                        (t.getStartAndEndRadians = function (t, e) {
                          return (
                            (t = r(t) ? t : 0),
                            (e = r(e) && e > t && 360 > e - t ? e : t + 360),
                            { start: s * (t + -90), end: s * (e + -90) }
                          );
                        });
                    })(h || (h = {})),
                    h
                  );
                }
              ),
              e(
                i,
                "Series/Pie/PiePoint.js",
                [
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Series/Point.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i) {
                  const { setAnimation: s } = t,
                    {
                      addEvent: o,
                      defined: r,
                      extend: n,
                      isNumber: a,
                      pick: h,
                      relativeLength: l,
                    } = i;
                  class c extends e {
                    constructor() {
                      super(...arguments),
                        (this.series =
                          this.options =
                          this.labelDistance =
                            void 0);
                    }
                    getConnectorPath() {
                      const t = this.labelPosition,
                        e = this.series.options.dataLabels,
                        i = this.connectorShapes;
                      let s = e.connectorShape;
                      return (
                        i[s] && (s = i[s]),
                        s.call(
                          this,
                          {
                            x: t.computed.x,
                            y: t.computed.y,
                            alignment: t.alignment,
                          },
                          t.connectorPosition,
                          e
                        )
                      );
                    }
                    getTranslate() {
                      return this.sliced
                        ? this.slicedTranslation
                        : { translateX: 0, translateY: 0 };
                    }
                    haloPath(t) {
                      const e = this.shapeArgs;
                      return this.sliced || !this.visible
                        ? []
                        : this.series.chart.renderer.symbols.arc(
                            e.x,
                            e.y,
                            e.r + t,
                            e.r + t,
                            {
                              innerR: e.r - 1,
                              start: e.start,
                              end: e.end,
                              borderRadius: e.borderRadius,
                            }
                          );
                    }
                    init() {
                      super.init.apply(this, arguments),
                        (this.name = h(this.name, "Slice"));
                      const t = (t) => {
                        this.slice("select" === t.type);
                      };
                      return o(this, "select", t), o(this, "unselect", t), this;
                    }
                    isValid() {
                      return a(this.y) && 0 <= this.y;
                    }
                    setVisible(t, e) {
                      const i = this.series,
                        s = i.chart,
                        o = i.options.ignoreHiddenPoint;
                      (e = h(e, o)),
                        t !== this.visible &&
                          ((this.visible =
                            this.options.visible =
                            t =
                              void 0 === t ? !this.visible : t),
                          (i.options.data[i.data.indexOf(this)] = this.options),
                          ["graphic", "dataLabel", "connector"].forEach((e) => {
                            this[e] && this[e][t ? "show" : "hide"](t);
                          }),
                          this.legendItem && s.legend.colorizeItem(this, t),
                          t || "hover" !== this.state || this.setState(""),
                          o && (i.isDirty = !0),
                          e && s.redraw());
                    }
                    slice(t, e, i) {
                      const o = this.series;
                      s(i, o.chart),
                        h(e, !0),
                        (this.sliced = this.options.sliced =
                          r(t) ? t : !this.sliced),
                        (o.options.data[o.data.indexOf(this)] = this.options),
                        this.graphic &&
                          this.graphic.animate(this.getTranslate());
                    }
                  }
                  return (
                    n(c.prototype, {
                      connectorShapes: {
                        fixedOffset: function (t, e, i) {
                          const s = e.breakAt;
                          return (
                            (e = e.touchingSliceAt),
                            [
                              ["M", t.x, t.y],
                              i.softConnector
                                ? [
                                    "C",
                                    t.x + ("left" === t.alignment ? -5 : 5),
                                    t.y,
                                    2 * s.x - e.x,
                                    2 * s.y - e.y,
                                    s.x,
                                    s.y,
                                  ]
                                : ["L", s.x, s.y],
                              ["L", e.x, e.y],
                            ]
                          );
                        },
                        straight: function (t, e) {
                          return (
                            (e = e.touchingSliceAt),
                            [
                              ["M", t.x, t.y],
                              ["L", e.x, e.y],
                            ]
                          );
                        },
                        crookedLine: function (t, e, i) {
                          const { breakAt: s, touchingSliceAt: o } = e;
                          ({ series: e } = this);
                          const [r, n, a] = e.center,
                            h = a / 2,
                            c = e.chart.plotWidth,
                            d = e.chart.plotLeft;
                          e = "left" === t.alignment;
                          const { x: p, y: u } = t;
                          return (
                            i.crookDistance
                              ? ((t = l(i.crookDistance, 1)),
                                (t = e
                                  ? r + h + (c + d - r - h) * (1 - t)
                                  : d + (r - h) * t))
                              : (t =
                                  r +
                                  (n - u) *
                                    Math.tan((this.angle || 0) - Math.PI / 2)),
                            (i = [["M", p, u]]),
                            (e ? t <= p && t >= s.x : t >= p && t <= s.x) &&
                              i.push(["L", t, u]),
                            i.push(["L", s.x, s.y], ["L", o.x, o.y]),
                            i
                          );
                        },
                      },
                    }),
                    c
                  );
                }
              ),
              e(i, "Series/Pie/PieSeriesDefaults.js", [], function () {
                return {
                  borderRadius: 3,
                  center: [null, null],
                  clip: !1,
                  colorByPoint: !0,
                  dataLabels: {
                    allowOverlap: !0,
                    connectorPadding: 5,
                    connectorShape: "crookedLine",
                    crookDistance: void 0,
                    distance: 30,
                    enabled: !0,
                    formatter: function () {
                      return this.point.isNull ? void 0 : this.point.name;
                    },
                    softConnector: !0,
                    x: 0,
                  },
                  fillColor: void 0,
                  ignoreHiddenPoint: !0,
                  inactiveOtherPoints: !0,
                  legendType: "point",
                  marker: null,
                  size: null,
                  showInLegend: !1,
                  slicedOffset: 10,
                  stickyTracking: !1,
                  tooltip: { followPointer: !0 },
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  lineWidth: void 0,
                  states: { hover: { brightness: 0.1 } },
                };
              }),
              e(
                i,
                "Series/Pie/PieSeries.js",
                [
                  i["Series/CenteredUtilities.js"],
                  i["Series/Column/ColumnSeries.js"],
                  i["Core/Globals.js"],
                  i["Series/Pie/PiePoint.js"],
                  i["Series/Pie/PieSeriesDefaults.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Renderer/SVG/Symbols.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r, n, a, h) {
                  const { getStartAndEndRadians: l } = t;
                  ({ noop: i } = i);
                  const {
                    clamp: c,
                    extend: d,
                    fireEvent: p,
                    merge: u,
                    pick: g,
                    relativeLength: f,
                  } = h;
                  class m extends r {
                    constructor() {
                      super(...arguments),
                        (this.points =
                          this.options =
                          this.maxLabelDistance =
                          this.data =
                          this.center =
                            void 0);
                    }
                    animate(t) {
                      const e = this,
                        i = e.points,
                        s = e.startAngleRad;
                      t ||
                        i.forEach(function (t) {
                          const i = t.graphic,
                            o = t.shapeArgs;
                          i &&
                            o &&
                            (i.attr({
                              r: g(t.startR, e.center && e.center[3] / 2),
                              start: s,
                              end: s,
                            }),
                            i.animate(
                              { r: o.r, start: o.start, end: o.end },
                              e.options.animation
                            ));
                        });
                    }
                    drawEmpty() {
                      const t = this.startAngleRad,
                        e = this.endAngleRad,
                        i = this.options;
                      let s, o;
                      0 === this.total && this.center
                        ? ((s = this.center[0]),
                          (o = this.center[1]),
                          this.graph ||
                            (this.graph = this.chart.renderer
                              .arc(s, o, this.center[1] / 2, 0, t, e)
                              .addClass("highcharts-empty-series")
                              .add(this.group)),
                          this.graph.attr({
                            d: a.arc(s, o, this.center[2] / 2, 0, {
                              start: t,
                              end: e,
                              innerR: this.center[3] / 2,
                            }),
                          }),
                          this.chart.styledMode ||
                            this.graph.attr({
                              "stroke-width": i.borderWidth,
                              fill: i.fillColor || "none",
                              stroke: i.color || "#cccccc",
                            }))
                        : this.graph && (this.graph = this.graph.destroy());
                    }
                    drawPoints() {
                      const t = this.chart.renderer;
                      this.points.forEach(function (e) {
                        e.graphic &&
                          e.hasNewShapeType() &&
                          (e.graphic = e.graphic.destroy()),
                          e.graphic ||
                            ((e.graphic = t[e.shapeType](e.shapeArgs).add(
                              e.series.group
                            )),
                            (e.delayedRendering = !0));
                      });
                    }
                    generatePoints() {
                      super.generatePoints(), this.updateTotals();
                    }
                    getX(t, e, i) {
                      const s = this.center,
                        o = this.radii ? this.radii[i.index] || 0 : s[2] / 2;
                      return (
                        (t = Math.asin(
                          c((t - s[1]) / (o + i.labelDistance), -1, 1)
                        )),
                        s[0] +
                          (e ? -1 : 1) * Math.cos(t) * (o + i.labelDistance) +
                          (0 < i.labelDistance
                            ? (e ? -1 : 1) * this.options.dataLabels.padding
                            : 0)
                      );
                    }
                    hasData() {
                      return !!this.processedXData.length;
                    }
                    redrawPoints() {
                      const t = this,
                        e = t.chart;
                      let i, s, o, r;
                      this.drawEmpty(),
                        t.group &&
                          !e.styledMode &&
                          t.group.shadow(t.options.shadow),
                        t.points.forEach(function (n) {
                          const a = {};
                          (s = n.graphic),
                            !n.isNull && s
                              ? ((r = n.shapeArgs),
                                (i = n.getTranslate()),
                                e.styledMode ||
                                  (o = t.pointAttribs(
                                    n,
                                    n.selected && "select"
                                  )),
                                n.delayedRendering
                                  ? (s
                                      .setRadialReference(t.center)
                                      .attr(r)
                                      .attr(i),
                                    e.styledMode ||
                                      s
                                        .attr(o)
                                        .attr({ "stroke-linejoin": "round" }),
                                    (n.delayedRendering = !1))
                                  : (s.setRadialReference(t.center),
                                    e.styledMode || u(!0, a, o),
                                    u(!0, a, r, i),
                                    s.animate(a)),
                                s.attr({
                                  visibility: n.visible ? "inherit" : "hidden",
                                }),
                                s.addClass(n.getClassName(), !0))
                              : s && (n.graphic = s.destroy());
                        });
                    }
                    sortByAngle(t, e) {
                      t.sort(function (t, i) {
                        return void 0 !== t.angle && (i.angle - t.angle) * e;
                      });
                    }
                    translate(t) {
                      p(this, "translate"), this.generatePoints();
                      var e = this.options;
                      const i = e.slicedOffset,
                        s = i + (e.borderWidth || 0);
                      var o = l(e.startAngle, e.endAngle);
                      const r = (this.startAngleRad = o.start);
                      o = (this.endAngleRad = o.end) - r;
                      const n = this.points,
                        a = e.dataLabels.distance;
                      e = e.ignoreHiddenPoint;
                      const h = n.length;
                      let c,
                        d,
                        u,
                        m = 0;
                      for (
                        t || (this.center = t = this.getCenter()), d = 0;
                        d < h;
                        d++
                      ) {
                        u = n[d];
                        var x = r + m * o;
                        !u.isValid() ||
                          (e && !u.visible) ||
                          (m += u.percentage / 100);
                        var y = r + m * o,
                          b = {
                            x: t[0],
                            y: t[1],
                            r: t[2] / 2,
                            innerR: t[3] / 2,
                            start: Math.round(1e3 * x) / 1e3,
                            end: Math.round(1e3 * y) / 1e3,
                          };
                        (u.shapeType = "arc"),
                          (u.shapeArgs = b),
                          (u.labelDistance = g(
                            u.options.dataLabels &&
                              u.options.dataLabels.distance,
                            a
                          )),
                          (u.labelDistance = f(u.labelDistance, b.r)),
                          (this.maxLabelDistance = Math.max(
                            this.maxLabelDistance || 0,
                            u.labelDistance
                          )),
                          (y = (y + x) / 2) > 1.5 * Math.PI
                            ? (y -= 2 * Math.PI)
                            : y < -Math.PI / 2 && (y += 2 * Math.PI),
                          (u.slicedTranslation = {
                            translateX: Math.round(Math.cos(y) * i),
                            translateY: Math.round(Math.sin(y) * i),
                          }),
                          (b = (Math.cos(y) * t[2]) / 2),
                          (c = (Math.sin(y) * t[2]) / 2),
                          (u.tooltipPos = [t[0] + 0.7 * b, t[1] + 0.7 * c]),
                          (u.half =
                            y < -Math.PI / 2 || y > Math.PI / 2 ? 1 : 0),
                          (u.angle = y),
                          (x = Math.min(s, u.labelDistance / 5)),
                          (u.labelPosition = {
                            natural: {
                              x: t[0] + b + Math.cos(y) * u.labelDistance,
                              y: t[1] + c + Math.sin(y) * u.labelDistance,
                            },
                            computed: {},
                            alignment:
                              0 > u.labelDistance
                                ? "center"
                                : u.half
                                ? "right"
                                : "left",
                            connectorPosition: {
                              breakAt: {
                                x: t[0] + b + Math.cos(y) * x,
                                y: t[1] + c + Math.sin(y) * x,
                              },
                              touchingSliceAt: { x: t[0] + b, y: t[1] + c },
                            },
                          });
                      }
                      p(this, "afterTranslate");
                    }
                    updateTotals() {
                      const t = this.points,
                        e = t.length,
                        i = this.options.ignoreHiddenPoint;
                      let s,
                        o,
                        r = 0;
                      for (s = 0; s < e; s++)
                        (o = t[s]),
                          !o.isValid() || (i && !o.visible) || (r += o.y);
                      for (this.total = r, s = 0; s < e; s++)
                        (o = t[s]),
                          (o.percentage =
                            0 < r && (o.visible || !i) ? (o.y / r) * 100 : 0),
                          (o.total = r);
                    }
                  }
                  return (
                    (m.defaultOptions = u(r.defaultOptions, o)),
                    d(m.prototype, {
                      axisTypes: [],
                      directTouch: !0,
                      drawGraph: void 0,
                      drawTracker: e.prototype.drawTracker,
                      getCenter: t.getCenter,
                      getSymbol: i,
                      isCartesian: !1,
                      noSharedTooltip: !0,
                      pointAttribs: e.prototype.pointAttribs,
                      pointClass: s,
                      requireSorting: !1,
                      searchPoint: i,
                      trackerGroups: ["group", "dataLabelsGroup"],
                    }),
                    n.registerSeriesType("pie", m),
                    m
                  );
                }
              ),
              e(
                i,
                "Series/Pie/PieDataLabel.js",
                [
                  i["Core/Series/DataLabel.js"],
                  i["Core/Globals.js"],
                  i["Core/Renderer/RendererUtilities.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o) {
                  const { noop: r } = e,
                    { distribute: n } = i,
                    { series: a } = s,
                    {
                      arrayMax: h,
                      clamp: l,
                      defined: c,
                      merge: d,
                      pick: p,
                      relativeLength: u,
                    } = o;
                  var g;
                  return (
                    (function (e) {
                      function i() {
                        const t = this,
                          e = t.data,
                          i = t.chart,
                          s = t.options.dataLabels || {},
                          o = s.connectorPadding,
                          r = i.plotWidth,
                          l = i.plotHeight,
                          u = i.plotLeft,
                          g = Math.round(i.chartWidth / 3),
                          f = t.center,
                          m = f[2] / 2,
                          x = f[1],
                          y = [[], []],
                          b = [0, 0, 0, 0],
                          v = t.dataLabelPositioners;
                        let S, k, M, C, w, T, A, P, L, O, E, D;
                        t.visible &&
                          (s.enabled || t._hasPointLabels) &&
                          (e.forEach(function (t) {
                            t.dataLabel &&
                              t.visible &&
                              t.dataLabel.shortened &&
                              (t.dataLabel
                                .attr({ width: "auto" })
                                .css({ width: "auto", textOverflow: "clip" }),
                              (t.dataLabel.shortened = !1));
                          }),
                          a.prototype.drawDataLabels.apply(t),
                          e.forEach(function (t) {
                            t.dataLabel &&
                              (t.visible
                                ? (y[t.half].push(t),
                                  (t.dataLabel._pos = null),
                                  !c(s.style.width) &&
                                    !c(
                                      t.options.dataLabels &&
                                        t.options.dataLabels.style &&
                                        t.options.dataLabels.style.width
                                    ) &&
                                    t.dataLabel.getBBox().width > g &&
                                    (t.dataLabel.css({
                                      width: Math.round(0.7 * g) + "px",
                                    }),
                                    (t.dataLabel.shortened = !0)))
                                : ((t.dataLabel = t.dataLabel.destroy()),
                                  t.dataLabels &&
                                    1 === t.dataLabels.length &&
                                    delete t.dataLabels));
                          }),
                          y.forEach((e, a) => {
                            const h = e.length,
                              d = [];
                            let g,
                              y = 0;
                            if (h) {
                              if (
                                (t.sortByAngle(e, a - 0.5),
                                0 < t.maxLabelDistance)
                              ) {
                                var k = Math.max(0, x - m - t.maxLabelDistance);
                                (g = Math.min(
                                  x + m + t.maxLabelDistance,
                                  i.plotHeight
                                )),
                                  e.forEach(function (t) {
                                    0 < t.labelDistance &&
                                      t.dataLabel &&
                                      ((t.top = Math.max(
                                        0,
                                        x - m - t.labelDistance
                                      )),
                                      (t.bottom = Math.min(
                                        x + m + t.labelDistance,
                                        i.plotHeight
                                      )),
                                      (y = t.dataLabel.getBBox().height || 21),
                                      (t.distributeBox = {
                                        target:
                                          t.labelPosition.natural.y -
                                          t.top +
                                          y / 2,
                                        size: y,
                                        rank: t.y,
                                      }),
                                      d.push(t.distributeBox));
                                  }),
                                  n(d, (k = g + y - k), k / 5);
                              }
                              for (E = 0; E < h; E++) {
                                if (
                                  ((S = e[E]),
                                  (T = S.labelPosition),
                                  (C = S.dataLabel),
                                  (O = !1 === S.visible ? "hidden" : "inherit"),
                                  (L = k = T.natural.y),
                                  d &&
                                    c(S.distributeBox) &&
                                    (void 0 === S.distributeBox.pos
                                      ? (O = "hidden")
                                      : ((A = S.distributeBox.size),
                                        (L = v.radialDistributionY(S)))),
                                  delete S.positionIndex,
                                  s.justify)
                                )
                                  P = v.justify(S, m, f);
                                else
                                  switch (s.alignTo) {
                                    case "connectors":
                                      P = v.alignToConnectors(e, a, r, u);
                                      break;
                                    case "plotEdges":
                                      P = v.alignToPlotEdges(C, a, r, u);
                                      break;
                                    default:
                                      P = v.radialDistributionX(t, S, L, k);
                                  }
                                (C._attr = {
                                  visibility: O,
                                  align: T.alignment,
                                }),
                                  (D = S.options.dataLabels || {}),
                                  (C._pos = {
                                    x:
                                      P +
                                      p(D.x, s.x) +
                                      ({ left: o, right: -o }[T.alignment] ||
                                        0),
                                    y: L + p(D.y, s.y) - C.getBBox().height / 2,
                                  }),
                                  T && ((T.computed.x = P), (T.computed.y = L)),
                                  p(s.crop, !0) &&
                                    ((w = C.getBBox().width),
                                    (k = null),
                                    P - w < o && 1 === a
                                      ? ((k = Math.round(w - P + o)),
                                        (b[3] = Math.max(k, b[3])))
                                      : P + w > r - o &&
                                        0 === a &&
                                        ((k = Math.round(P + w - r + o)),
                                        (b[1] = Math.max(k, b[1]))),
                                    0 > L - A / 2
                                      ? (b[0] = Math.max(
                                          Math.round(A / 2 - L),
                                          b[0]
                                        ))
                                      : L + A / 2 > l &&
                                        (b[2] = Math.max(
                                          Math.round(L + A / 2 - l),
                                          b[2]
                                        )),
                                    (C.sideOverflow = k));
                              }
                            }
                          }),
                          0 === h(b) || this.verifyDataLabelOverflow(b)) &&
                          (this.placeDataLabels(),
                          this.points.forEach(function (e) {
                            if (
                              ((D = d(s, e.options.dataLabels)),
                              (k = p(D.connectorWidth, 1)))
                            ) {
                              let s;
                              (M = e.connector),
                                (C = e.dataLabel) &&
                                C._pos &&
                                e.visible &&
                                0 < e.labelDistance
                                  ? ((O = C._attr.visibility),
                                    (s = !M) &&
                                      ((e.connector = M =
                                        i.renderer
                                          .path()
                                          .addClass(
                                            "highcharts-data-label-connector  highcharts-color-" +
                                              e.colorIndex +
                                              (e.className
                                                ? " " + e.className
                                                : "")
                                          )
                                          .add(t.dataLabelsGroup)),
                                      i.styledMode ||
                                        M.attr({
                                          "stroke-width": k,
                                          stroke:
                                            D.connectorColor ||
                                            e.color ||
                                            "#666666",
                                        })),
                                    M[s ? "attr" : "animate"]({
                                      d: e.getConnectorPath(),
                                    }),
                                    M.attr("visibility", O))
                                  : M && (e.connector = M.destroy());
                            }
                          }));
                      }
                      function s() {
                        this.points.forEach(function (t) {
                          let e,
                            i = t.dataLabel;
                          i &&
                            t.visible &&
                            ((e = i._pos)
                              ? (i.sideOverflow &&
                                  ((i._attr.width = Math.max(
                                    i.getBBox().width - i.sideOverflow,
                                    0
                                  )),
                                  i.css({
                                    width: i._attr.width + "px",
                                    textOverflow:
                                      (this.options.dataLabels.style || {})
                                        .textOverflow || "ellipsis",
                                  }),
                                  (i.shortened = !0)),
                                i.attr(i._attr),
                                i[i.moved ? "animate" : "attr"](e),
                                (i.moved = !0))
                              : i && i.attr({ y: -9999 })),
                            delete t.distributeBox;
                        }, this);
                      }
                      function g(t) {
                        let e,
                          i = this.center,
                          s = this.options,
                          o = s.center,
                          r = s.minSize || 80,
                          n = null !== s.size;
                        return (
                          n ||
                            (null !== o[0]
                              ? (e = Math.max(i[2] - Math.max(t[1], t[3]), r))
                              : ((e = Math.max(i[2] - t[1] - t[3], r)),
                                (i[0] += (t[3] - t[1]) / 2)),
                            null !== o[1]
                              ? (e = l(e, r, i[2] - Math.max(t[0], t[2])))
                              : ((e = l(e, r, i[2] - t[0] - t[2])),
                                (i[1] += (t[0] - t[2]) / 2)),
                            e < i[2]
                              ? ((i[2] = e),
                                (i[3] = Math.min(
                                  s.thickness
                                    ? Math.max(0, e - 2 * s.thickness)
                                    : Math.max(0, u(s.innerSize || 0, e)),
                                  e
                                )),
                                this.translate(i),
                                this.drawDataLabels && this.drawDataLabels())
                              : (n = !0)),
                          n
                        );
                      }
                      const f = [],
                        m = {
                          radialDistributionY: function (t) {
                            return t.top + t.distributeBox.pos;
                          },
                          radialDistributionX: function (t, e, i, s) {
                            return t.getX(
                              i < e.top + 2 || i > e.bottom - 2 ? s : i,
                              e.half,
                              e
                            );
                          },
                          justify: function (t, e, i) {
                            return (
                              i[0] + (t.half ? -1 : 1) * (e + t.labelDistance)
                            );
                          },
                          alignToPlotEdges: function (t, e, i, s) {
                            return (
                              (t = t.getBBox().width), e ? t + s : i - t - s
                            );
                          },
                          alignToConnectors: function (t, e, i, s) {
                            let o,
                              r = 0;
                            return (
                              t.forEach(function (t) {
                                (o = t.dataLabel.getBBox().width),
                                  o > r && (r = o);
                              }),
                              e ? r + s : i - r - s
                            );
                          },
                        };
                      e.compose = function (e) {
                        t.compose(a),
                          o.pushUnique(f, e) &&
                            (((e = e.prototype).dataLabelPositioners = m),
                            (e.alignDataLabel = r),
                            (e.drawDataLabels = i),
                            (e.placeDataLabels = s),
                            (e.verifyDataLabelOverflow = g));
                      };
                    })(g || (g = {})),
                    g
                  );
                }
              ),
              e(
                i,
                "Extensions/OverlappingDataLabels.js",
                [i["Core/Chart/Chart.js"], i["Core/Utilities.js"]],
                function (t, e) {
                  function i(t, e) {
                    let i,
                      s = !1;
                    return (
                      t &&
                        ((i = t.newOpacity),
                        t.oldOpacity !== i &&
                          (t.alignAttr && t.placed
                            ? (t[i ? "removeClass" : "addClass"](
                                "highcharts-data-label-hidden"
                              ),
                              (s = !0),
                              (t.alignAttr.opacity = i),
                              t[t.isOld ? "animate" : "attr"](
                                t.alignAttr,
                                null,
                                function () {
                                  e.styledMode ||
                                    t.css({
                                      pointerEvents: i ? "auto" : "none",
                                    });
                                }
                              ),
                              o(e, "afterHideOverlappingLabel"))
                            : t.attr({ opacity: i })),
                        (t.isOld = !0)),
                      s
                    );
                  }
                  const {
                    addEvent: s,
                    fireEvent: o,
                    isArray: r,
                    isNumber: n,
                    objectEach: a,
                    pick: h,
                  } = e;
                  s(t, "render", function () {
                    let t = this,
                      e = [];
                    (this.labelCollectors || []).forEach(function (t) {
                      e = e.concat(t());
                    }),
                      (this.yAxis || []).forEach(function (t) {
                        t.stacking &&
                          t.options.stackLabels &&
                          !t.options.stackLabels.allowOverlap &&
                          a(t.stacking.stacks, function (t) {
                            a(t, function (t) {
                              t.label && e.push(t.label);
                            });
                          });
                      }),
                      (this.series || []).forEach(function (s) {
                        var o = s.options.dataLabels;
                        s.visible &&
                          (!1 !== o.enabled || s._hasPointLabels) &&
                          ((o = (s) =>
                            s.forEach((s) => {
                              s.visible &&
                                (r(s.dataLabels)
                                  ? s.dataLabels
                                  : s.dataLabel
                                  ? [s.dataLabel]
                                  : []
                                ).forEach(function (o) {
                                  const r = o.options;
                                  (o.labelrank = h(
                                    r.labelrank,
                                    s.labelrank,
                                    s.shapeArgs && s.shapeArgs.height
                                  )),
                                    r.allowOverlap
                                      ? ((o.oldOpacity = o.opacity),
                                        (o.newOpacity = 1),
                                        i(o, t))
                                      : e.push(o);
                                });
                            }))(s.nodes || []),
                          o(s.points));
                      }),
                      this.hideOverlappingLabels(e);
                  }),
                    (t.prototype.hideOverlappingLabels = function (t) {
                      let e = this,
                        s = t.length,
                        r = e.renderer;
                      var a;
                      let h,
                        l,
                        c,
                        d,
                        p = !1;
                      var u = function (t) {
                        let e, i;
                        var s;
                        let o,
                          a,
                          h = t.box ? 0 : t.padding || 0,
                          l = (s = 0);
                        if (t && (!t.alignAttr || t.placed))
                          return (
                            (e = t.alignAttr || {
                              x: t.attr("x"),
                              y: t.attr("y"),
                            }),
                            (i = t.parentGroup),
                            t.width ||
                              ((s = t.getBBox()),
                              (t.width = s.width),
                              (t.height = s.height),
                              (s = r.fontMetrics(t.element).h)),
                            (o = t.width - 2 * h),
                            (a = { left: "0", center: "0.5", right: "1" }[
                              t.alignValue
                            ])
                              ? (l = +a * o)
                              : n(t.x) &&
                                Math.round(t.x) !== t.translateX &&
                                (l = t.x - t.translateX),
                            {
                              x: e.x + (i.translateX || 0) + h - (l || 0),
                              y: e.y + (i.translateY || 0) + h - s,
                              width: t.width - 2 * h,
                              height: t.height - 2 * h,
                            }
                          );
                      };
                      for (h = 0; h < s; h++)
                        (a = t[h]) &&
                          ((a.oldOpacity = a.opacity),
                          (a.newOpacity = 1),
                          (a.absoluteBox = u(a)));
                      for (
                        t.sort(function (t, e) {
                          return (e.labelrank || 0) - (t.labelrank || 0);
                        }),
                          h = 0;
                        h < s;
                        h++
                      )
                        for (
                          c = (u = t[h]) && u.absoluteBox, a = h + 1;
                          a < s;
                          ++a
                        )
                          (d = (l = t[a]) && l.absoluteBox),
                            !c ||
                              !d ||
                              u === l ||
                              0 === u.newOpacity ||
                              0 === l.newOpacity ||
                              "hidden" === u.visibility ||
                              "hidden" === l.visibility ||
                              d.x >= c.x + c.width ||
                              d.x + d.width <= c.x ||
                              d.y >= c.y + c.height ||
                              d.y + d.height <= c.y ||
                              ((u.labelrank < l.labelrank
                                ? u
                                : l
                              ).newOpacity = 0);
                      t.forEach(function (t) {
                        i(t, e) && (p = !0);
                      }),
                        p && o(e, "afterHideAllOverlappingLabels");
                    });
                }
              ),
              e(
                i,
                "Extensions/BorderRadius.js",
                [
                  i["Core/Defaults.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Renderer/SVG/SVGRenderer.js"],
                  i["Core/Utilities.js"],
                ],
                function (t, e, i, s, o, r) {
                  const { defaultOptions: n } = t;
                  ({ seriesTypes: t } = i);
                  const {
                      addEvent: a,
                      extend: h,
                      isObject: l,
                      merge: c,
                      relativeLength: d,
                    } = r,
                    p = { radius: 0, scope: "stack", where: void 0 },
                    u = (t, e) => (
                      l(t) || (t = { radius: t || 0 }), c(p, e, t)
                    );
                  if (-1 === s.symbolCustomAttribs.indexOf("borderRadius")) {
                    s.symbolCustomAttribs.push(
                      "borderRadius",
                      "brBoxHeight",
                      "brBoxY"
                    );
                    const i = o.prototype.symbols.arc;
                    o.prototype.symbols.arc = function (t, e, s, o, r = {}) {
                      t = i(t, e, s, o, r);
                      const {
                        innerR: n = 0,
                        r: a = s,
                        start: h = 0,
                        end: l = 0,
                      } = r;
                      if (r.open || !r.borderRadius) return t;
                      for (
                        s = l - h,
                          e = Math.sin(s / 2),
                          r = Math.max(
                            Math.min(
                              d(r.borderRadius || 0, a - n),
                              (a - n) / 2,
                              (a * e) / (1 + e)
                            ),
                            0
                          ),
                          s = Math.min(r, (s / Math.PI) * 2 * n),
                          e = t.length - 1;
                        e--;

                      ) {
                        let i, n, a;
                        var c = e,
                          p = 1 < e ? s : r,
                          u = (o = t)[c],
                          g = o[c + 1];
                        if (
                          ("Z" === g[0] && (g = o[0]),
                          ("M" !== u[0] && "L" !== u[0]) || "A" !== g[0]
                            ? "A" !== u[0] ||
                              ("M" !== g[0] && "L" !== g[0]) ||
                              ((a = g), (n = u))
                            : ((a = u), (n = g), (i = !0)),
                          a && n && n.params)
                        ) {
                          u = n[1];
                          var f = n[5];
                          g = n.params;
                          const { start: t, end: e, cx: s, cy: r } = g;
                          var m = f ? u - p : u + p;
                          const h = m ? Math.asin(p / m) : 0;
                          (f = f ? h : -h),
                            (m *= Math.cos(h)),
                            i
                              ? ((g.start = t + f),
                                (a[1] = s + m * Math.cos(t)),
                                (a[2] = r + m * Math.sin(t)),
                                o.splice(c + 1, 0, [
                                  "A",
                                  p,
                                  p,
                                  0,
                                  0,
                                  1,
                                  s + u * Math.cos(g.start),
                                  r + u * Math.sin(g.start),
                                ]))
                              : ((g.end = e - f),
                                (n[6] = s + u * Math.cos(g.end)),
                                (n[7] = r + u * Math.sin(g.end)),
                                o.splice(c + 1, 0, [
                                  "A",
                                  p,
                                  p,
                                  0,
                                  0,
                                  1,
                                  s + m * Math.cos(e),
                                  r + m * Math.sin(e),
                                ])),
                            (n[4] =
                              Math.abs(g.end - g.start) < Math.PI ? 0 : 1);
                        }
                      }
                      return t;
                    };
                    const r = o.prototype.symbols.roundedRect;
                    (o.prototype.symbols.roundedRect = function (
                      t,
                      e,
                      i,
                      s,
                      o = {}
                    ) {
                      const n = r(t, e, i, s, o),
                        { r: a = 0, brBoxHeight: h = s, brBoxY: l = e } = o;
                      var c = e - l,
                        d = l + h - (e + s);
                      o = -0.1 < c - a ? 0 : a;
                      const p = -0.1 < d - a ? 0 : a;
                      var u = Math.max(o && c, 0);
                      const g = Math.max(p && d, 0);
                      (d = [t + o, e]), (c = [t + i - o, e]);
                      const f = [t + i, e + o],
                        m = [t + i, e + s - p],
                        x = [t + i - p, e + s],
                        y = [t + p, e + s],
                        b = [t, e + s - p],
                        v = [t, e + o];
                      if (u) {
                        const t = Math.sqrt(
                          Math.pow(o, 2) - Math.pow(o - u, 2)
                        );
                        (d[0] -= t), (c[0] += t), (f[1] = v[1] = e + o - u);
                      }
                      return (
                        s < o - u &&
                          ((u = Math.sqrt(
                            Math.pow(o, 2) - Math.pow(o - u - s, 2)
                          )),
                          (f[0] = m[0] = t + i - o + u),
                          (x[0] = Math.min(f[0], x[0])),
                          (y[0] = Math.max(m[0], y[0])),
                          (b[0] = v[0] = t + o - u),
                          (f[1] = v[1] = e + s)),
                        g &&
                          ((u = Math.sqrt(Math.pow(p, 2) - Math.pow(p - g, 2))),
                          (x[0] += u),
                          (y[0] -= u),
                          (m[1] = b[1] = e + s - p + g)),
                        s < p - g &&
                          ((s = Math.sqrt(
                            Math.pow(p, 2) - Math.pow(p - g - s, 2)
                          )),
                          (f[0] = m[0] = t + i - p + s),
                          (c[0] = Math.min(f[0], c[0])),
                          (d[0] = Math.max(m[0], d[0])),
                          (b[0] = v[0] = t + p - s),
                          (m[1] = b[1] = e)),
                        (n.length = 0),
                        n.push(
                          ["M", ...d],
                          ["L", ...c],
                          ["A", o, o, 0, 0, 1, ...f],
                          ["L", ...m],
                          ["A", p, p, 0, 0, 1, ...x],
                          ["L", ...y],
                          ["A", p, p, 0, 0, 1, ...b],
                          ["L", ...v],
                          ["A", o, o, 0, 0, 1, ...d],
                          ["Z"]
                        ),
                        n
                      );
                    }),
                      a(t.pie, "afterTranslate", function () {
                        const t = u(this.options.borderRadius);
                        for (const e of this.points) {
                          const i = e.shapeArgs;
                          i &&
                            (i.borderRadius = d(
                              t.radius,
                              (i.r || 0) - (i.innerR || 0)
                            ));
                        }
                      }),
                      a(
                        e,
                        "afterColumnTranslate",
                        function () {
                          var t, e;
                          if (
                            this.options.borderRadius &&
                            (!this.chart.is3d || !this.chart.is3d())
                          ) {
                            const { options: r, yAxis: a } = this,
                              c = "percent" === r.stacking;
                            var i =
                              null ===
                                (e =
                                  null === (t = n.plotOptions) || void 0 === t
                                    ? void 0
                                    : t[this.type]) || void 0 === e
                                ? void 0
                                : e.borderRadius;
                            (t = u(r.borderRadius, l(i) ? i : {})),
                              (e = a.options.reversed);
                            for (const n of this.points)
                              if (
                                (({ shapeArgs: i } = n),
                                "roundedRect" === n.shapeType && i)
                              ) {
                                const {
                                  width: l = 0,
                                  height: p = 0,
                                  y: u = 0,
                                } = i;
                                var s = u,
                                  o = p;
                                "stack" === t.scope &&
                                  n.stackTotal &&
                                  ((s = a.translate(
                                    c ? 100 : n.stackTotal,
                                    !1,
                                    !0,
                                    !1,
                                    !0
                                  )),
                                  (o = a.translate(
                                    r.threshold || 0,
                                    !1,
                                    !0,
                                    !1,
                                    !0
                                  )),
                                  (s = (o = this.crispCol(
                                    0,
                                    Math.min(s, o),
                                    0,
                                    Math.abs(s - o)
                                  )).y),
                                  (o = o.height));
                                const g =
                                  -1 == (n.negative ? -1 : 1) * (e ? -1 : 1);
                                let f = t.where;
                                !f &&
                                  this.is("waterfall") &&
                                  Math.abs(
                                    (n.yBottom || 0) -
                                      (this.translatedThreshold || 0)
                                  ) > this.borderWidth &&
                                  (f = "all"),
                                  f || (f = "end");
                                const m =
                                  Math.min(
                                    d(t.radius, l),
                                    l / 2,
                                    "all" === f ? p / 2 : 1 / 0
                                  ) || 0;
                                "end" === f && (g && (s -= m), (o += m)),
                                  h(i, { brBoxHeight: o, brBoxY: s, r: m });
                              }
                          }
                        },
                        { order: 9 }
                      );
                  }
                  return { optionsToObject: u };
                }
              ),
              e(
                i,
                "Core/Responsive.js",
                [i["Core/Utilities.js"]],
                function (t) {
                  const {
                    diffObjects: e,
                    extend: i,
                    find: s,
                    merge: o,
                    pick: r,
                    uniqueKey: n,
                  } = t;
                  var a;
                  return (
                    (function (a) {
                      function h(t, e) {
                        const i = t.condition;
                        (
                          i.callback ||
                          function () {
                            return (
                              this.chartWidth <=
                                r(i.maxWidth, Number.MAX_VALUE) &&
                              this.chartHeight <=
                                r(i.maxHeight, Number.MAX_VALUE) &&
                              this.chartWidth >= r(i.minWidth, 0) &&
                              this.chartHeight >= r(i.minHeight, 0)
                            );
                          }
                        ).call(this) && e.push(t._id);
                      }
                      function l(t, i) {
                        const r = this.options.responsive;
                        var a = this.currentResponsive;
                        let h = [];
                        !i &&
                          r &&
                          r.rules &&
                          r.rules.forEach((t) => {
                            void 0 === t._id && (t._id = n()),
                              this.matchResponsiveRule(t, h);
                          }, this),
                          (i = o(
                            ...h
                              .map((t) =>
                                s((r || {}).rules || [], (e) => e._id === t)
                              )
                              .map((t) => t && t.chartOptions)
                          )),
                          (i.isResponsiveOptions = !0),
                          (h = h.toString() || void 0),
                          h !== (a && a.ruleIds) &&
                            (a && this.update(a.undoOptions, t, !0),
                            h
                              ? (((a = e(
                                  i,
                                  this.options,
                                  !0,
                                  this.collectionsWithUpdate
                                )).isResponsiveOptions = !0),
                                (this.currentResponsive = {
                                  ruleIds: h,
                                  mergedOptions: i,
                                  undoOptions: a,
                                }),
                                this.update(i, t, !0))
                              : (this.currentResponsive = void 0));
                      }
                      const c = [];
                      a.compose = function (e) {
                        return (
                          t.pushUnique(c, e) &&
                            i(e.prototype, {
                              matchResponsiveRule: h,
                              setResponsive: l,
                            }),
                          e
                        );
                      };
                    })(a || (a = {})),
                    a
                  );
                }
              ),
              e(
                i,
                "masters/highcharts.src.js",
                [
                  i["Core/Globals.js"],
                  i["Core/Utilities.js"],
                  i["Core/Defaults.js"],
                  i["Core/Animation/Fx.js"],
                  i["Core/Animation/AnimationUtilities.js"],
                  i["Core/Renderer/HTML/AST.js"],
                  i["Core/Templating.js"],
                  i["Core/Renderer/RendererUtilities.js"],
                  i["Core/Renderer/SVG/SVGElement.js"],
                  i["Core/Renderer/SVG/SVGRenderer.js"],
                  i["Core/Renderer/HTML/HTMLElement.js"],
                  i["Core/Renderer/HTML/HTMLRenderer.js"],
                  i["Core/Axis/Axis.js"],
                  i["Core/Axis/DateTimeAxis.js"],
                  i["Core/Axis/LogarithmicAxis.js"],
                  i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
                  i["Core/Axis/Tick.js"],
                  i["Core/Tooltip.js"],
                  i["Core/Series/Point.js"],
                  i["Core/Pointer.js"],
                  i["Core/Legend/Legend.js"],
                  i["Core/Chart/Chart.js"],
                  i["Core/Axis/Stacking/StackingAxis.js"],
                  i["Core/Axis/Stacking/StackItem.js"],
                  i["Core/Series/Series.js"],
                  i["Core/Series/SeriesRegistry.js"],
                  i["Series/Column/ColumnSeries.js"],
                  i["Series/Column/ColumnDataLabel.js"],
                  i["Series/Pie/PieSeries.js"],
                  i["Series/Pie/PieDataLabel.js"],
                  i["Core/Series/DataLabel.js"],
                  i["Core/Responsive.js"],
                  i["Core/Color/Color.js"],
                  i["Core/Time.js"],
                ],
                function (
                  t,
                  e,
                  i,
                  s,
                  o,
                  r,
                  n,
                  a,
                  h,
                  l,
                  c,
                  d,
                  p,
                  u,
                  g,
                  f,
                  m,
                  x,
                  y,
                  b,
                  v,
                  S,
                  k,
                  M,
                  C,
                  w,
                  T,
                  A,
                  P,
                  L,
                  O,
                  E,
                  D,
                  j
                ) {
                  return (
                    (t.animate = o.animate),
                    (t.animObject = o.animObject),
                    (t.getDeferredAnimation = o.getDeferredAnimation),
                    (t.setAnimation = o.setAnimation),
                    (t.stop = o.stop),
                    (t.timers = s.timers),
                    (t.AST = r),
                    (t.Axis = p),
                    (t.Chart = S),
                    (t.chart = S.chart),
                    (t.Fx = s),
                    (t.Legend = v),
                    (t.PlotLineOrBand = f),
                    (t.Point = y),
                    (t.Pointer = b),
                    (t.Series = C),
                    (t.StackItem = M),
                    (t.SVGElement = h),
                    (t.SVGRenderer = l),
                    (t.Templating = n),
                    (t.Tick = m),
                    (t.Time = j),
                    (t.Tooltip = x),
                    (t.Color = D),
                    (t.color = D.parse),
                    d.compose(l),
                    c.compose(h),
                    b.compose(S),
                    v.compose(S),
                    (t.defaultOptions = i.defaultOptions),
                    (t.getOptions = i.getOptions),
                    (t.time = i.defaultTime),
                    (t.setOptions = i.setOptions),
                    (t.dateFormat = n.dateFormat),
                    (t.format = n.format),
                    (t.numberFormat = n.numberFormat),
                    (t.addEvent = e.addEvent),
                    (t.arrayMax = e.arrayMax),
                    (t.arrayMin = e.arrayMin),
                    (t.attr = e.attr),
                    (t.clearTimeout = e.clearTimeout),
                    (t.correctFloat = e.correctFloat),
                    (t.createElement = e.createElement),
                    (t.css = e.css),
                    (t.defined = e.defined),
                    (t.destroyObjectProperties = e.destroyObjectProperties),
                    (t.discardElement = e.discardElement),
                    (t.distribute = a.distribute),
                    (t.erase = e.erase),
                    (t.error = e.error),
                    (t.extend = e.extend),
                    (t.extendClass = e.extendClass),
                    (t.find = e.find),
                    (t.fireEvent = e.fireEvent),
                    (t.getMagnitude = e.getMagnitude),
                    (t.getStyle = e.getStyle),
                    (t.inArray = e.inArray),
                    (t.isArray = e.isArray),
                    (t.isClass = e.isClass),
                    (t.isDOMElement = e.isDOMElement),
                    (t.isFunction = e.isFunction),
                    (t.isNumber = e.isNumber),
                    (t.isObject = e.isObject),
                    (t.isString = e.isString),
                    (t.keys = e.keys),
                    (t.merge = e.merge),
                    (t.normalizeTickInterval = e.normalizeTickInterval),
                    (t.objectEach = e.objectEach),
                    (t.offset = e.offset),
                    (t.pad = e.pad),
                    (t.pick = e.pick),
                    (t.pInt = e.pInt),
                    (t.relativeLength = e.relativeLength),
                    (t.removeEvent = e.removeEvent),
                    (t.seriesType = w.seriesType),
                    (t.splat = e.splat),
                    (t.stableSort = e.stableSort),
                    (t.syncTimeout = e.syncTimeout),
                    (t.timeUnits = e.timeUnits),
                    (t.uniqueKey = e.uniqueKey),
                    (t.useSerialIds = e.useSerialIds),
                    (t.wrap = e.wrap),
                    A.compose(T),
                    O.compose(C),
                    u.compose(p),
                    g.compose(p),
                    L.compose(P),
                    f.compose(p),
                    E.compose(S),
                    k.compose(p, S, C),
                    x.compose(b),
                    t
                  );
                }
              ),
              (i["masters/highcharts.src.js"]._modules = i),
              i["masters/highcharts.src.js"]
            );
          }),
          t.exports
            ? ((r.default = r), (t.exports = o.document ? r(o) : r))
            : void 0 ===
                (s = function () {
                  return r(o);
                }.call(e, i, e, t)) || (t.exports = s);
      },
      65705: function (t, e, i) {
        var s, o, r;
        (r = function (t) {
          function e(t, e, i, s) {
            t.hasOwnProperty(e) ||
              ((t[e] = s.apply(null, i)),
              "function" == typeof CustomEvent &&
                window.dispatchEvent(
                  new CustomEvent("HighchartsModuleLoaded", {
                    detail: { path: e, module: t[e] },
                  })
                ));
          }
          e(
            (t = t ? t._modules : {}),
            "Series/VariablePie/VariablePieSeries.js",
            [t["Core/Series/SeriesRegistry.js"], t["Core/Utilities.js"]],
            function (t, e) {
              const {
                  seriesTypes: { pie: i },
                } = t,
                {
                  arrayMax: s,
                  arrayMin: o,
                  clamp: r,
                  extend: n,
                  fireEvent: a,
                  merge: h,
                  pick: l,
                } = e;
              class c extends i {
                constructor() {
                  super(...arguments),
                    (this.radii =
                      this.points =
                      this.options =
                      this.data =
                        void 0);
                }
                calculateExtremes() {
                  var t = this.chart;
                  let e = this.options;
                  var i = this.zData;
                  let n =
                      Math.min(t.plotWidth, t.plotHeight) -
                      2 * (e.slicedOffset || 0),
                    a = {};
                  (t = this.center || this.getCenter()),
                    ["minPointSize", "maxPointSize"].forEach(function (t) {
                      let i = e[t],
                        s = /%$/.test(i);
                      (i = parseInt(i, 10)), (a[t] = s ? (n * i) / 100 : 2 * i);
                    }),
                    (this.minPxSize = t[3] + a.minPointSize),
                    (this.maxPxSize = r(
                      t[2],
                      t[3] + a.minPointSize,
                      a.maxPointSize
                    )),
                    i.length &&
                      ((t = l(e.zMin, o(i.filter(this.zValEval)))),
                      (i = l(e.zMax, s(i.filter(this.zValEval)))),
                      this.getRadii(t, i, this.minPxSize, this.maxPxSize));
                }
                getRadii(t, e, i, s) {
                  let o = 0,
                    r = this.zData,
                    n = r.length,
                    a = [],
                    h = "radius" !== this.options.sizeBy,
                    l = e - t;
                  for (; o < n; o++) {
                    var c = this.zValEval(r[o]) ? r[o] : t;
                    c <= t
                      ? (c = i / 2)
                      : c >= e
                      ? (c = s / 2)
                      : ((c = 0 < l ? (c - t) / l : 0.5),
                        h && (c = Math.sqrt(c)),
                        (c = Math.ceil(i + c * (s - i)) / 2)),
                      a.push(c);
                  }
                  this.radii = a;
                }
                redraw() {
                  (this.center = null), super.redraw.apply(this, arguments);
                }
                translate(t) {
                  this.generatePoints();
                  let e = 0;
                  var i = this.options;
                  let s = i.slicedOffset,
                    o = s + (i.borderWidth || 0);
                  var r = i.startAngle || 0;
                  let n = (Math.PI / 180) * (r - 90);
                  var h = (Math.PI / 180) * (l(i.endAngle, r + 360) - 90);
                  r = h - n;
                  let c,
                    d = this.points,
                    p = i.dataLabels.distance;
                  i = i.ignoreHiddenPoint;
                  let u,
                    g = d.length;
                  for (
                    this.startAngleRad = n,
                      this.endAngleRad = h,
                      this.calculateExtremes(),
                      t || (this.center = t = this.getCenter()),
                      h = 0;
                    h < g;
                    h++
                  ) {
                    u = d[h];
                    var f = this.radii[h];
                    (u.labelDistance = l(
                      u.options.dataLabels && u.options.dataLabels.distance,
                      p
                    )),
                      (this.maxLabelDistance = Math.max(
                        this.maxLabelDistance || 0,
                        u.labelDistance
                      ));
                    var m = n + e * r;
                    (i && !u.visible) || (e += u.percentage / 100);
                    var x = n + e * r;
                    (u.shapeType = "arc"),
                      (u.shapeArgs = {
                        x: t[0],
                        y: t[1],
                        r: f,
                        innerR: t[3] / 2,
                        start: Math.round(1e3 * m) / 1e3,
                        end: Math.round(1e3 * x) / 1e3,
                      }),
                      (m = (x + m) / 2) > 1.5 * Math.PI
                        ? (m -= 2 * Math.PI)
                        : m < -Math.PI / 2 && (m += 2 * Math.PI),
                      (u.slicedTranslation = {
                        translateX: Math.round(Math.cos(m) * s),
                        translateY: Math.round(Math.sin(m) * s),
                      });
                    var y = (Math.cos(m) * t[2]) / 2;
                    (c = (Math.sin(m) * t[2]) / 2),
                      (x = Math.cos(m) * f),
                      (f *= Math.sin(m)),
                      (u.tooltipPos = [t[0] + 0.7 * y, t[1] + 0.7 * c]),
                      (u.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0),
                      (u.angle = m),
                      (y = Math.min(o, u.labelDistance / 5)),
                      (u.labelPosition = {
                        natural: {
                          x: t[0] + x + Math.cos(m) * u.labelDistance,
                          y: t[1] + f + Math.sin(m) * u.labelDistance,
                        },
                        computed: {},
                        alignment: u.half ? "right" : "left",
                        connectorPosition: {
                          breakAt: {
                            x: t[0] + x + Math.cos(m) * y,
                            y: t[1] + f + Math.sin(m) * y,
                          },
                          touchingSliceAt: { x: t[0] + x, y: t[1] + f },
                        },
                      });
                  }
                  a(this, "afterTranslate");
                }
                zValEval(t) {
                  return ("number" == typeof t && !isNaN(t)) || null;
                }
              }
              return (
                (c.defaultOptions = h(i.defaultOptions, {
                  minPointSize: "10%",
                  maxPointSize: "100%",
                  zMin: void 0,
                  zMax: void 0,
                  sizeBy: "area",
                  tooltip: {
                    pointFormat:
                      '<span style="color:{point.color}">●</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>',
                  },
                })),
                n(c.prototype, {
                  pointArrayMap: ["y", "z"],
                  parallelArrays: ["x", "y", "z"],
                }),
                t.registerSeriesType("variablepie", c),
                c
              );
            }
          ),
            e(t, "masters/modules/variable-pie.src.js", [], function () {});
        }),
          t.exports
            ? ((r.default = r), (t.exports = r))
            : ((s = [i(78840)]),
              void 0 ===
                (o = function (t) {
                  return r(t), (r.Highcharts = t), r;
                }.apply(e, s)) || (t.exports = o));
      },
    },
    o = {};
  function r(t) {
    var e = o[t];
    if (void 0 !== e) return e.exports;
    var i = (o[t] = { exports: {} });
    return s[t].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return r.d(e, { a: e }), e;
  }),
    (r.d = function (t, e) {
      for (var i in e)
        r.o(e, i) &&
          !r.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (t = r(78840)),
    (e = r.n(t)),
    (i = r(65705)),
    r.n(i)()(e()),
    e().chart("token-allocation", {
      chart: {
        backgroundColor: null,
        plotBorderColor: null,
        type: "variablepie",
      },
      title: { text: null },
      credits: { enabled: !1 },
      legend: { enabled: !1 },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">●</span> <b> {point.name}</b><br/><b>Percent: {point.y}%</b><br/><b>{point.dis}</b>',
      },
      plotOptions: {
        variablepie: { dataLabels: { alignTo: "plotEdges" }, startAngle: 20 },
      },
      series: [
        {
          minPointSize: 3,
          innerSize: "50%",
          name: "allocation",
          borderRadius: 12,
          borderColor: "#000821",
          borderWidth: 4,
          data: [
            { name: "Seed Invest", y: 3, dis: "630,000,000" },
            { name: "Advisors & Legal", y: 5, dis: "1,050,000,000" },
            { name: "Private Sale", y: 7, dis: "1,470,000,000" },
            { name: "Reserve", y: 10, dis: "2,100,000,000" },
            { name: "NFT", y: 10, dis: "2,100,000,000" },
            { name: "Marketing", y: 15, dis: "3,150,000,000" },
            { name: "Founders team", y: 15, dis: "3,150,000,000" },
            { name: "Ecosystem", y: 35, dis: "7,350,000,000" },
          ],
          colors: [
            "#281EFF",
            "#4E1EE8",
            "#731ED1",
            "#8C1EC1",
            "#A51EB2",
            "#BE1EA2",
            "#D71E92",
            "#F01E82",
          ],
        },
      ],
      responsive: {
        rules: [
          {
            condition: { maxWidth: 400 },
            chartOptions: {
              chart: { height: 400 },
              series: { borderRadius: 6 },
              plotOptions: { variablepie: { dataLabels: { enabled: !1 } } },
            },
          },
        ],
      },
    }),
    e().chart("publicsale-allocation", {
      chart: {
        backgroundColor: null,
        plotBorderColor: null,
        type: "variablepie",
      },
      title: { text: null },
      credits: { enabled: !1 },
      legend: { enabled: !0 },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">●</span> <b> {point.name}</b><br/><b>Percent: {point.y}%</b><br/><b>{point.dis}</b>',
      },
      plotOptions: {
        variablepie: { dataLabels: { alignTo: "plotEdges" }, startAngle: 20 },
      },
      series: [
        {
          minPointSize: 3,
          innerSize: "50%",
          name: "allocation",
          borderRadius: 12,
          borderColor: "#000821",
          borderWidth: 4,
          data: [
            { name: "Private Sale", y: 10, dis: "2,100,000,000" },
            { name: "Reserve", y: 10, dis: "2,100,000,000" },
            { name: "Public Sale", y: 45, dis: "9,450,000,000" },
            { name: "Ecosystem", y: 35, dis: "7,350,000,000" },
          ],
          colors: ["#281EFF", "#731ED1", "#A51EB2", "#F01E82"],
        },
      ],
      responsive: {
        rules: [
          {
            condition: { maxWidth: 400 },
            chartOptions: {
              chart: { height: 400 },
              series: { borderRadius: 6 },
              plotOptions: { variablepie: { dataLabels: { enabled: !1 } } },
            },
          },
        ],
      },
    }),
    (async () => {
      const t = await fetch("/dist/data.json"),
        i = await t.json();
      (e().Axis.prototype.lang = {
        numericSymbols: ["K", "M", "B", "T", "P", "E"],
        numericSymbolMagnitude: 1e9,
      }),
        e().chart("historical-allocation", {
          chart: { backgroundColor: null, plotBorderColor: null, type: "area" },
          title: { text: "" },
          legend: {
            enabled: !0,
            itemStyle: { color: "#fff" },
            itemHoverStyle: { color: "#ec4899" },
          },
          credits: { enabled: !1 },
          tooltip: {
            crosshairs: { color: "#ffffff60", dashStyle: "solid" },
            style: { color: "#eee" },
            backgroundColor: "#000",
            shared: !0,
            useHTML: !0,
            headerFormat:
              '<span style="text-align: right; margin-bottom: -12px; display: block;">{point.key}</span></b></span><br><span style="display: block; font-size: 15px;"><b><span style="display: inline-block; min-width: 130px;">Circulating:</span> {point.total:,.0f} W</b></span><br/><table style="width: 100%">',
            pointFormat:
              '<tr><td><span style="color:{point.color}">●</span> <b>{series.name}:</b></td><td style="float: right">{point.y}</td></tr>',
            footerFormat: "</table>",
          },
          plotOptions: {
            series: {
              pointStart: Date.UTC(2023, 9, 1),
              pointIntervalUnit: "month",
              marker: { symbol: "circle", radius: 1 },
              step: "center",
            },
            area: { stacking: "normal", marker: { enabled: !1 } },
          },
          yAxis: {
            gridLineColor: "#ffffff30",
            gridLineDashStyle: "longdash",
            labels: {
              formatter: function () {
                return e().numberFormat(this.value / 1e9, 0) + "B";
              },
              style: { color: "#fff" },
            },
            title: { text: null },
          },
          xAxis: { labels: { style: { color: "#fff" } }, type: "datetime" },
          series: [
            { name: "Ecosystem", data: i.ecosystem },
            { name: "Founders Team", data: i.foundersTeam },
            { name: "Marketing", data: i.marketing },
            { name: "NFT", data: i.nft },
            { name: "Reserve", data: i.reserve },
            { name: "Private Sale", data: i.privateSale },
            { name: "Legal & Advisor", data: i.advisor },
            { name: "Seed Invest", data: i.seedInvest },
          ],
          colors: [
            "#F01E82",
            "#D71E92",
            "#BE1EA2",
            "#A51EB2",
            "#8C1EC1",
            "#731ED1",
            "#4E1EE8",
            "#281EFF",
          ],
        });
    })(),
    (async () => {
      const t = await fetch("/dist/publicsale.json"),
        i = await t.json();
      (e().Axis.prototype.lang = {
        numericSymbols: ["K", "M", "B", "T", "P", "E"],
        numericSymbolMagnitude: 1e9,
      }),
        e().chart("historical-publicsale", {
          chart: { backgroundColor: null, plotBorderColor: null, type: "area" },
          title: { text: "" },
          legend: {
            enabled: !0,
            itemStyle: { color: "#fff" },
            itemHoverStyle: { color: "#ec4899" },
          },
          credits: { enabled: !1 },
          tooltip: {
            crosshairs: { color: "#ffffff60", dashStyle: "solid" },
            style: { color: "#eee" },
            backgroundColor: "#000",
            shared: !0,
            useHTML: !0,
            headerFormat:
              '<span style="text-align: right; margin-bottom: -12px; display: block;">{point.key}</span></b></span><br><span style="display: block; font-size: 15px;"><b><span style="display: inline-block; min-width: 130px;">Circulating:</span> {point.total:,.0f} W</b></span><br/><table style="width: 100%">',
            pointFormat:
              '<tr><td><span style="color:{point.color}">●</span> <b>{series.name}:</b></td><td style="float: right">{point.y}</td></tr>',
            footerFormat: "</table>",
          },
          plotOptions: {
            series: {
              pointStart: Date.UTC(2023, 9, 1),
              pointIntervalUnit: "month",
              marker: { symbol: "circle", radius: 1 },
              step: "center",
            },
            area: { stacking: "normal", marker: { enabled: !1 } },
          },
          yAxis: {
            gridLineColor: "#ffffff30",
            gridLineDashStyle: "longdash",
            labels: {
              formatter: function () {
                return e().numberFormat(this.value / 1e9, 0) + "B";
              },
              style: { color: "#fff" },
            },
            title: { text: null },
          },
          xAxis: { labels: { style: { color: "#fff" } }, type: "datetime" },
          series: [
            { name: "Public Sale", data: i.publicSale },
            { name: "Ecosystem", data: i.ecosystem },
            { name: "Private Sale", data: i.privateSale },
            { name: "Reserve", data: i.reserve },
          ],
          colors: ["#F01E82", "#BE1EA2", "#8C1EC1", "#4E1EE8"],
        });
    })();
})();
