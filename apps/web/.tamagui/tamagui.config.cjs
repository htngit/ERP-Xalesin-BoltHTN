var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../packages/ui/node_modules/lucide-react/dist/cjs/lucide-react.js
var require_lucide_react = __commonJS({
  "../../packages/ui/node_modules/lucide-react/dist/cjs/lucide-react.js"(exports2) {
    "use strict";
    var react = require("react");
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    var toKebabCase = /* @__PURE__ */ __name((string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), "toKebabCase");
    var createLucideIcon = /* @__PURE__ */ __name((iconName, iconNode) => {
      const Component2 = react.forwardRef(
        ({ color: color2 = "currentColor", size: size3 = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref) => react.createElement(
          "svg",
          {
            ref,
            ...defaultAttributes,
            width: size3,
            height: size3,
            stroke: color2,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size3) : strokeWidth,
            className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
            ...rest
          },
          [
            ...iconNode.map(([tag, attrs]) => react.createElement(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        )
      );
      Component2.displayName = `${iconName}`;
      return Component2;
    }, "createLucideIcon");
    var Accessibility = createLucideIcon("Accessibility", [
      ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
      ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
      ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
      ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
      ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
    ]);
    var ActivitySquare = createLucideIcon("ActivitySquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]
    ]);
    var Activity = createLucideIcon("Activity", [
      ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
    ]);
    var AirVent = createLucideIcon("AirVent", [
      [
        "path",
        {
          d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
          key: "larmp2"
        }
      ],
      ["path", { d: "M6 8h12", key: "6g4wlu" }],
      ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12", key: "1bo8pg" }],
      ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }]
    ]);
    var Airplay = createLucideIcon("Airplay", [
      [
        "path",
        {
          d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
          key: "ns4c3b"
        }
      ],
      ["polygon", { points: "12 15 17 21 7 21 12 15", key: "1sy95i" }]
    ]);
    var AlarmClockCheck = createLucideIcon("AlarmClockCheck", [
      ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
      ["path", { d: "M5 3 2 6", key: "18tl5t" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
      ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
      ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
    ]);
    var AlarmClockOff = createLucideIcon("AlarmClockOff", [
      ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
      ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M4 4 2 6", key: "1ycko6" }]
    ]);
    var AlarmClock = createLucideIcon("AlarmClock", [
      ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
      ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
      ["path", { d: "M5 3 2 6", key: "18tl5t" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
      ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
    ]);
    var AlarmMinus = createLucideIcon("AlarmMinus", [
      ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
      ["path", { d: "M5 3 2 6", key: "18tl5t" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
      ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
      ["path", { d: "M9 13h6", key: "1uhe8q" }]
    ]);
    var AlarmPlus = createLucideIcon("AlarmPlus", [
      ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
      ["path", { d: "M5 3 2 6", key: "18tl5t" }],
      ["path", { d: "m22 6-3-3", key: "1opdir" }],
      ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
      ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "M9 13h6", key: "1uhe8q" }]
    ]);
    var Album = createLucideIcon("Album", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
    ]);
    var AlertCircle2 = createLucideIcon("AlertCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
    ]);
    var AlertOctagon = createLucideIcon("AlertOctagon", [
      [
        "polygon",
        {
          points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          key: "h1p8hx"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
    ]);
    var AlertTriangle = createLucideIcon("AlertTriangle", [
      [
        "path",
        {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
          key: "c3ski4"
        }
      ],
      ["path", { d: "M12 9v4", key: "juzpu7" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ]);
    var AlignCenterHorizontal = createLucideIcon("AlignCenterHorizontal", [
      ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
      ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
      ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
      ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]
    ]);
    var AlignCenterVertical = createLucideIcon("AlignCenterVertical", [
      ["path", { d: "M12 2v20", key: "t6zp3m" }],
      ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
      ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
      ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
      ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]
    ]);
    var AlignCenter = createLucideIcon("AlignCenter", [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
      ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
      ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
    ]);
    var AlignEndHorizontal = createLucideIcon("AlignEndHorizontal", [
      ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }],
      ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }],
      ["path", { d: "M22 22H2", key: "19qnx5" }]
    ]);
    var AlignEndVertical = createLucideIcon("AlignEndVertical", [
      ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
      ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
      ["path", { d: "M22 22V2", key: "12ipfv" }]
    ]);
    var AlignHorizontalDistributeCenter = createLucideIcon("AlignHorizontalDistributeCenter", [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
      ["path", { d: "M17 22v-5", key: "4b6g73" }],
      ["path", { d: "M17 7V2", key: "hnrr36" }],
      ["path", { d: "M7 22v-3", key: "1r4jpn" }],
      ["path", { d: "M7 5V2", key: "liy1u9" }]
    ]);
    var AlignHorizontalDistributeEnd = createLucideIcon("AlignHorizontalDistributeEnd", [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
      ["path", { d: "M10 2v20", key: "uyc634" }],
      ["path", { d: "M20 2v20", key: "1tx262" }]
    ]);
    var AlignHorizontalDistributeStart = createLucideIcon("AlignHorizontalDistributeStart", [
      ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
      ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
      ["path", { d: "M4 2v20", key: "gtpd5x" }],
      ["path", { d: "M14 2v20", key: "tg6bpw" }]
    ]);
    var AlignHorizontalJustifyCenter = createLucideIcon("AlignHorizontalJustifyCenter", [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
      ["path", { d: "M12 2v20", key: "t6zp3m" }]
    ]);
    var AlignHorizontalJustifyEnd = createLucideIcon("AlignHorizontalJustifyEnd", [
      ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
      ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }],
      ["path", { d: "M22 2v20", key: "40qfg1" }]
    ]);
    var AlignHorizontalJustifyStart = createLucideIcon("AlignHorizontalJustifyStart", [
      ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }],
      ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
      ["path", { d: "M2 2v20", key: "1ivd8o" }]
    ]);
    var AlignHorizontalSpaceAround = createLucideIcon("AlignHorizontalSpaceAround", [
      ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
      ["path", { d: "M4 22V2", key: "tsjzd3" }],
      ["path", { d: "M20 22V2", key: "1bnhr8" }]
    ]);
    var AlignHorizontalSpaceBetween = createLucideIcon("AlignHorizontalSpaceBetween", [
      ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
      ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
      ["path", { d: "M3 2v20", key: "1d2pfg" }],
      ["path", { d: "M21 2v20", key: "p059bm" }]
    ]);
    var AlignJustify = createLucideIcon("AlignJustify", [
      ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
      ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
      ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
    ]);
    var AlignLeft = createLucideIcon("AlignLeft", [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
      ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
      ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
    ]);
    var AlignRight = createLucideIcon("AlignRight", [
      ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
      ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
    ]);
    var AlignStartHorizontal = createLucideIcon("AlignStartHorizontal", [
      ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }],
      ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }],
      ["path", { d: "M22 2H2", key: "fhrpnj" }]
    ]);
    var AlignStartVertical = createLucideIcon("AlignStartVertical", [
      ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
      ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
      ["path", { d: "M2 2v20", key: "1ivd8o" }]
    ]);
    var AlignVerticalDistributeCenter = createLucideIcon("AlignVerticalDistributeCenter", [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
      ["path", { d: "M22 7h-5", key: "o2endc" }],
      ["path", { d: "M7 7H1", key: "105l6j" }],
      ["path", { d: "M22 17h-3", key: "1lwga1" }],
      ["path", { d: "M5 17H2", key: "1gx9xc" }]
    ]);
    var AlignVerticalDistributeEnd = createLucideIcon("AlignVerticalDistributeEnd", [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
      ["path", { d: "M2 20h20", key: "owomy5" }],
      ["path", { d: "M2 10h20", key: "1ir3d8" }]
    ]);
    var AlignVerticalDistributeStart = createLucideIcon("AlignVerticalDistributeStart", [
      ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
      ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
      ["path", { d: "M2 14h20", key: "myj16y" }],
      ["path", { d: "M2 4h20", key: "mda7wb" }]
    ]);
    var AlignVerticalJustifyCenter = createLucideIcon("AlignVerticalJustifyCenter", [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]);
    var AlignVerticalJustifyEnd = createLucideIcon("AlignVerticalJustifyEnd", [
      ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
      ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
      ["path", { d: "M2 22h20", key: "272qi7" }]
    ]);
    var AlignVerticalJustifyStart = createLucideIcon("AlignVerticalJustifyStart", [
      ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
      ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
      ["path", { d: "M2 2h20", key: "1ennik" }]
    ]);
    var AlignVerticalSpaceAround = createLucideIcon("AlignVerticalSpaceAround", [
      ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }],
      ["path", { d: "M22 20H2", key: "1p1f7z" }],
      ["path", { d: "M22 4H2", key: "1b7qnq" }]
    ]);
    var AlignVerticalSpaceBetween = createLucideIcon("AlignVerticalSpaceBetween", [
      ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
      ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
      ["path", { d: "M2 21h20", key: "1nyx9w" }],
      ["path", { d: "M2 3h20", key: "91anmk" }]
    ]);
    var Ampersand = createLucideIcon("Ampersand", [
      [
        "path",
        {
          d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
          key: "1o9ehi"
        }
      ],
      ["path", { d: "M16 12h3", key: "4uvgyw" }]
    ]);
    var Ampersands = createLucideIcon("Ampersands", [
      [
        "path",
        {
          d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
          key: "12lh1k"
        }
      ],
      [
        "path",
        {
          d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
          key: "173c68"
        }
      ]
    ]);
    var Anchor = createLucideIcon("Anchor", [
      ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "8", key: "abakz7" }],
      ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "1hv3nh" }]
    ]);
    var Angry = createLucideIcon("Angry", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
      ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
      ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
      ["path", { d: "M9 10h0", key: "1vxvly" }],
      ["path", { d: "M15 10h0", key: "1j6oav" }]
    ]);
    var Annoyed = createLucideIcon("Annoyed", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 15h8", key: "45n4r" }],
      ["path", { d: "M8 9h2", key: "1g203m" }],
      ["path", { d: "M14 9h2", key: "116p9w" }]
    ]);
    var Antenna = createLucideIcon("Antenna", [
      ["path", { d: "M2 12 7 2", key: "117k30" }],
      ["path", { d: "m7 12 5-10", key: "1tvx22" }],
      ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
      ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
      ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
      ["path", { d: "M12 16v6", key: "c8a4gj" }]
    ]);
    var Aperture = createLucideIcon("Aperture", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "14.31", x2: "20.05", y1: "8", y2: "17.94", key: "jdes2e" }],
      ["line", { x1: "9.69", x2: "21.17", y1: "8", y2: "8", key: "1gubuk" }],
      ["line", { x1: "7.38", x2: "13.12", y1: "12", y2: "2.06", key: "1m4d1n" }],
      ["line", { x1: "9.69", x2: "3.95", y1: "16", y2: "6.06", key: "1wye2p" }],
      ["line", { x1: "14.31", x2: "2.83", y1: "16", y2: "16", key: "1l9f4x" }],
      ["line", { x1: "16.62", x2: "10.88", y1: "12", y2: "21.94", key: "1jjvfs" }]
    ]);
    var AppWindow = createLucideIcon("AppWindow", [
      ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
      ["path", { d: "M10 4v4", key: "pp8u80" }],
      ["path", { d: "M2 8h20", key: "d11cs7" }],
      ["path", { d: "M6 4v4", key: "1svtjw" }]
    ]);
    var Apple = createLucideIcon("Apple", [
      [
        "path",
        {
          d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
          key: "3s7exb"
        }
      ],
      ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }]
    ]);
    var ArchiveRestore = createLucideIcon("ArchiveRestore", [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
      ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
      ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
      ["path", { d: "M12 12v9", key: "192myk" }]
    ]);
    var ArchiveX = createLucideIcon("ArchiveX", [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
      ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
      ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]
    ]);
    var Archive = createLucideIcon("Archive", [
      ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
      ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
      ["path", { d: "M10 12h4", key: "a56b0p" }]
    ]);
    var AreaChart = createLucideIcon("AreaChart", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["path", { d: "M7 12v5h12V8l-5 5-4-4Z", key: "zxz28u" }]
    ]);
    var Armchair = createLucideIcon("Armchair", [
      ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
      [
        "path",
        {
          d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
          key: "1e01m0"
        }
      ],
      ["path", { d: "M5 18v2", key: "ppbyun" }],
      ["path", { d: "M19 18v2", key: "gy7782" }]
    ]);
    var ArrowBigDownDash = createLucideIcon("ArrowBigDownDash", [
      ["path", { d: "M15 5H9", key: "1tp3ed" }],
      ["path", { d: "M15 9v3h4l-7 7-7-7h4V9h6z", key: "oscb9h" }]
    ]);
    var ArrowBigDown = createLucideIcon("ArrowBigDown", [
      ["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z", key: "1thax2" }]
    ]);
    var ArrowBigLeftDash = createLucideIcon("ArrowBigLeftDash", [
      ["path", { d: "M19 15V9", key: "1hci5f" }],
      ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z", key: "16tjna" }]
    ]);
    var ArrowBigLeft = createLucideIcon("ArrowBigLeft", [
      ["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z", key: "lbrdak" }]
    ]);
    var ArrowBigRightDash = createLucideIcon("ArrowBigRightDash", [
      ["path", { d: "M5 9v6", key: "158jrl" }],
      ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z", key: "1sg2xn" }]
    ]);
    var ArrowBigRight = createLucideIcon("ArrowBigRight", [
      ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
    ]);
    var ArrowBigUpDash = createLucideIcon("ArrowBigUpDash", [
      ["path", { d: "M9 19h6", key: "456am0" }],
      ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z", key: "1r2uve" }]
    ]);
    var ArrowBigUp = createLucideIcon("ArrowBigUp", [
      ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }]
    ]);
    var ArrowDown01 = createLucideIcon("ArrowDown01", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
      ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
      ["path", { d: "M15 20h4", key: "1j968p" }]
    ]);
    var ArrowDown10 = createLucideIcon("ArrowDown10", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
      ["path", { d: "M15 10h4", key: "id2lce" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
    ]);
    var ArrowDownAZ = createLucideIcon("ArrowDownAZ", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "M20 8h-5", key: "1vsyxs" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
      ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
    ]);
    var ArrowDownCircle = createLucideIcon("ArrowDownCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 8v8", key: "napkw2" }],
      ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
    ]);
    var ArrowDownFromLine = createLucideIcon("ArrowDownFromLine", [
      ["path", { d: "M19 3H5", key: "1236rx" }],
      ["path", { d: "M12 21V7", key: "gj6g52" }],
      ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]
    ]);
    var ArrowDownLeftFromCircle = createLucideIcon("ArrowDownLeftFromCircle", [
      ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
      ["path", { d: "m2 22 10-10", key: "28ilpk" }],
      ["path", { d: "M8 22H2v-6", key: "sulq54" }]
    ]);
    var ArrowDownLeftSquare = createLucideIcon("ArrowDownLeftSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m16 8-8 8", key: "166keh" }],
      ["path", { d: "M16 16H8V8", key: "1w2ppm" }]
    ]);
    var ArrowDownLeft = createLucideIcon("ArrowDownLeft", [
      ["path", { d: "M17 7 7 17", key: "15tmo1" }],
      ["path", { d: "M17 17H7V7", key: "1org7z" }]
    ]);
    var ArrowDownNarrowWide = createLucideIcon("ArrowDownNarrowWide", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "M11 4h4", key: "6d7r33" }],
      ["path", { d: "M11 8h7", key: "djye34" }],
      ["path", { d: "M11 12h10", key: "1438ji" }]
    ]);
    var ArrowDownRightFromCircle = createLucideIcon("ArrowDownRightFromCircle", [
      ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
      ["path", { d: "M22 22 12 12", key: "131aw7" }],
      ["path", { d: "M22 16v6h-6", key: "1gvm70" }]
    ]);
    var ArrowDownRightSquare = createLucideIcon("ArrowDownRightSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m8 8 8 8", key: "1imecy" }],
      ["path", { d: "M16 8v8H8", key: "1lbpgo" }]
    ]);
    var ArrowDownRight = createLucideIcon("ArrowDownRight", [
      ["path", { d: "m7 7 10 10", key: "1fmybs" }],
      ["path", { d: "M17 7v10H7", key: "6fjiku" }]
    ]);
    var ArrowDownSquare = createLucideIcon("ArrowDownSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M12 8v8", key: "napkw2" }],
      ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
    ]);
    var ArrowDownToDot = createLucideIcon("ArrowDownToDot", [
      ["path", { d: "M12 2v14", key: "jyx4ut" }],
      ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
      ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
    ]);
    var ArrowDownToLine = createLucideIcon("ArrowDownToLine", [
      ["path", { d: "M12 17V3", key: "1cwfxf" }],
      ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
      ["path", { d: "M19 21H5", key: "150jfl" }]
    ]);
    var ArrowDownUp = createLucideIcon("ArrowDownUp", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
      ["path", { d: "M17 4v16", key: "7dpous" }]
    ]);
    var ArrowDownWideNarrow = createLucideIcon("ArrowDownWideNarrow", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "M11 4h10", key: "1w87gc" }],
      ["path", { d: "M11 8h7", key: "djye34" }],
      ["path", { d: "M11 12h4", key: "q8tih4" }]
    ]);
    var ArrowDownZA = createLucideIcon("ArrowDownZA", [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
      ["path", { d: "M20 18h-5", key: "18j1r2" }]
    ]);
    var ArrowDown = createLucideIcon("ArrowDown", [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
    ]);
    var ArrowLeftCircle = createLucideIcon("ArrowLeftCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M16 12H8", key: "1fr5h0" }],
      ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }]
    ]);
    var ArrowLeftFromLine = createLucideIcon("ArrowLeftFromLine", [
      ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
      ["path", { d: "M3 12h14", key: "13k4hi" }],
      ["path", { d: "M21 19V5", key: "b4bplr" }]
    ]);
    var ArrowLeftRight = createLucideIcon("ArrowLeftRight", [
      ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
      ["path", { d: "M4 7h16", key: "6tx8e3" }],
      ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
      ["path", { d: "M20 17H4", key: "h6l3hr" }]
    ]);
    var ArrowLeftSquare = createLucideIcon("ArrowLeftSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
      ["path", { d: "M16 12H8", key: "1fr5h0" }]
    ]);
    var ArrowLeftToLine = createLucideIcon("ArrowLeftToLine", [
      ["path", { d: "M3 19V5", key: "rwsyhb" }],
      ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
      ["path", { d: "M7 12h14", key: "uoisry" }]
    ]);
    var ArrowLeft = createLucideIcon("ArrowLeft", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }]
    ]);
    var ArrowRightCircle = createLucideIcon("ArrowRightCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
    ]);
    var ArrowRightFromLine = createLucideIcon("ArrowRightFromLine", [
      ["path", { d: "M3 5v14", key: "1nt18q" }],
      ["path", { d: "M21 12H7", key: "13ipq5" }],
      ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
    ]);
    var ArrowRightLeft = createLucideIcon("ArrowRightLeft", [
      ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
      ["path", { d: "M20 7H4", key: "zbl0bi" }],
      ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
      ["path", { d: "M4 17h16", key: "g4d7ey" }]
    ]);
    var ArrowRightSquare = createLucideIcon("ArrowRightSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
    ]);
    var ArrowRightToLine = createLucideIcon("ArrowRightToLine", [
      ["path", { d: "M17 12H3", key: "8awo09" }],
      ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
      ["path", { d: "M21 5v14", key: "nzette" }]
    ]);
    var ArrowRight = createLucideIcon("ArrowRight", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
    ]);
    var ArrowUp01 = createLucideIcon("ArrowUp01", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
      ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
      ["path", { d: "M15 20h4", key: "1j968p" }]
    ]);
    var ArrowUp10 = createLucideIcon("ArrowUp10", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
      ["path", { d: "M15 10h4", key: "id2lce" }],
      ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
    ]);
    var ArrowUpAZ = createLucideIcon("ArrowUpAZ", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M20 8h-5", key: "1vsyxs" }],
      ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
      ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
    ]);
    var ArrowUpCircle = createLucideIcon("ArrowUpCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
      ["path", { d: "M12 16V8", key: "1sbj14" }]
    ]);
    var ArrowUpDown = createLucideIcon("ArrowUpDown", [
      ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
      ["path", { d: "M17 20V4", key: "1ejh1v" }],
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }]
    ]);
    var ArrowUpFromDot = createLucideIcon("ArrowUpFromDot", [
      ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
      ["path", { d: "M12 16V2", key: "ywoabb" }],
      ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
    ]);
    var ArrowUpFromLine = createLucideIcon("ArrowUpFromLine", [
      ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
      ["path", { d: "M12 3v14", key: "7cf3v8" }],
      ["path", { d: "M5 21h14", key: "11awu3" }]
    ]);
    var ArrowUpLeftFromCircle = createLucideIcon("ArrowUpLeftFromCircle", [
      ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
      ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
      ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
    ]);
    var ArrowUpLeftSquare = createLucideIcon("ArrowUpLeftSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 16V8h8", key: "19xb1h" }],
      ["path", { d: "M16 16 8 8", key: "1qdy8n" }]
    ]);
    var ArrowUpLeft = createLucideIcon("ArrowUpLeft", [
      ["path", { d: "M7 17V7h10", key: "11bw93" }],
      ["path", { d: "M17 17 7 7", key: "2786uv" }]
    ]);
    var ArrowUpNarrowWide = createLucideIcon("ArrowUpNarrowWide", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M11 12h4", key: "q8tih4" }],
      ["path", { d: "M11 16h7", key: "uosisv" }],
      ["path", { d: "M11 20h10", key: "jvxblo" }]
    ]);
    var ArrowUpRightFromCircle = createLucideIcon("ArrowUpRightFromCircle", [
      ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
      ["path", { d: "M22 2 12 12", key: "yg2myt" }],
      ["path", { d: "M16 2h6v6", key: "zan5cs" }]
    ]);
    var ArrowUpRightSquare = createLucideIcon("ArrowUpRightSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 8h8v8", key: "b65dnt" }],
      ["path", { d: "m8 16 8-8", key: "13b9ih" }]
    ]);
    var ArrowUpRight = createLucideIcon("ArrowUpRight", [
      ["path", { d: "M7 7h10v10", key: "1tivn9" }],
      ["path", { d: "M7 17 17 7", key: "1vkiza" }]
    ]);
    var ArrowUpSquare = createLucideIcon("ArrowUpSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
      ["path", { d: "M12 16V8", key: "1sbj14" }]
    ]);
    var ArrowUpToLine = createLucideIcon("ArrowUpToLine", [
      ["path", { d: "M5 3h14", key: "7usisc" }],
      ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
      ["path", { d: "M12 7v14", key: "1akyts" }]
    ]);
    var ArrowUpWideNarrow = createLucideIcon("ArrowUpWideNarrow", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M11 12h10", key: "1438ji" }],
      ["path", { d: "M11 16h7", key: "uosisv" }],
      ["path", { d: "M11 20h4", key: "1krc32" }]
    ]);
    var ArrowUpZA = createLucideIcon("ArrowUpZA", [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
      ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
      ["path", { d: "M20 18h-5", key: "18j1r2" }]
    ]);
    var ArrowUp = createLucideIcon("ArrowUp", [
      ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
      ["path", { d: "M12 19V5", key: "x0mq9r" }]
    ]);
    var ArrowsUpFromLine = createLucideIcon("ArrowsUpFromLine", [
      ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
      ["path", { d: "M7 17V3", key: "19qxw1" }],
      ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
      ["path", { d: "M17 17V3", key: "o0fmgi" }],
      ["path", { d: "M4 21h16", key: "1h09gz" }]
    ]);
    var Asterisk = createLucideIcon("Asterisk", [
      ["path", { d: "M12 6v12", key: "1vza4d" }],
      ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
      ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
    ]);
    var AtSign = createLucideIcon("AtSign", [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
    ]);
    var Atom = createLucideIcon("Atom", [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      [
        "path",
        {
          d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
          key: "1l2ple"
        }
      ],
      [
        "path",
        {
          d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
          key: "1wam0m"
        }
      ]
    ]);
    var AudioLines = createLucideIcon("AudioLines", [
      ["path", { d: "M2 10v3", key: "1fnikh" }],
      ["path", { d: "M6 6v11", key: "11sgs0" }],
      ["path", { d: "M10 3v18", key: "yhl04a" }],
      ["path", { d: "M14 8v7", key: "3a1oy3" }],
      ["path", { d: "M18 5v13", key: "123xd1" }],
      ["path", { d: "M22 10v3", key: "154ddg" }]
    ]);
    var AudioWaveform = createLucideIcon("AudioWaveform", [
      [
        "path",
        {
          d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
          key: "57tc96"
        }
      ]
    ]);
    var Award = createLucideIcon("Award", [
      ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
      ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
    ]);
    var Axe = createLucideIcon("Axe", [
      ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" }],
      ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }]
    ]);
    var Axis3d = createLucideIcon("Axis3d", [
      ["path", { d: "M4 4v16h16", key: "1s015l" }],
      ["path", { d: "m4 20 7-7", key: "17qe9y" }]
    ]);
    var Baby = createLucideIcon("Baby", [
      ["path", { d: "M9 12h.01", key: "157uk2" }],
      ["path", { d: "M15 12h.01", key: "1k8ypt" }],
      ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
      [
        "path",
        {
          d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
          key: "5yv0yz"
        }
      ]
    ]);
    var Backpack = createLucideIcon("Backpack", [
      [
        "path",
        { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", key: "wvr1b5" }
      ],
      ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }],
      ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5", key: "xk3gvk" }],
      ["path", { d: "M8 10h8", key: "c7uz4u" }],
      ["path", { d: "M8 18h8", key: "1no2b1" }]
    ]);
    var BadgeAlert = createLucideIcon("BadgeAlert", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
    ]);
    var BadgeCent = createLucideIcon("BadgeCent", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M12 7v10", key: "jspqdw" }],
      ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]
    ]);
    var BadgeCheck = createLucideIcon("BadgeCheck", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]);
    var BadgeDollarSign = createLucideIcon("BadgeDollarSign", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }]
    ]);
    var BadgeEuro = createLucideIcon("BadgeEuro", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M7 12h5", key: "gblrwe" }],
      ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
    ]);
    var BadgeHelp = createLucideIcon("BadgeHelp", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
      ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]
    ]);
    var BadgeIndianRupee = createLucideIcon("BadgeIndianRupee", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M8 8h8", key: "1bis0t" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
    ]);
    var BadgeInfo = createLucideIcon("BadgeInfo", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
      ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
    ]);
    var BadgeJapaneseYen = createLucideIcon("BadgeJapaneseYen", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
      ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
      ["path", { d: "M9 12h6", key: "1c52cq" }],
      ["path", { d: "M9 16h6", key: "8wimt3" }]
    ]);
    var BadgeMinus = createLucideIcon("BadgeMinus", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]);
    var BadgePercent = createLucideIcon("BadgePercent", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "M9 9h.01", key: "1q5me6" }],
      ["path", { d: "M15 15h.01", key: "lqbp3k" }]
    ]);
    var BadgePlus = createLucideIcon("BadgePlus", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]);
    var BadgePoundSterling = createLucideIcon("BadgePoundSterling", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M8 12h4", key: "qz6y1c" }],
      ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
      ["path", { d: "M8 16h7", key: "sbedsn" }]
    ]);
    var BadgeRussianRuble = createLucideIcon("BadgeRussianRuble", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M9 16h5", key: "1syiyw" }],
      ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]
    ]);
    var BadgeSwissFranc = createLucideIcon("BadgeSwissFranc", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
      ["path", { d: "M11 12h3", key: "2eqnfz" }],
      ["path", { d: "M9 16h4", key: "1skf3a" }]
    ]);
    var BadgeX = createLucideIcon("BadgeX", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
    ]);
    var Badge = createLucideIcon("Badge", [
      [
        "path",
        {
          d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
          key: "3c2336"
        }
      ]
    ]);
    var BaggageClaim = createLucideIcon("BaggageClaim", [
      ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
      ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
      ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
      ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
      ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
    ]);
    var Ban = createLucideIcon("Ban", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
    ]);
    var Banana = createLucideIcon("Banana", [
      ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }],
      [
        "path",
        {
          d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
          key: "1y1nbv"
        }
      ]
    ]);
    var Banknote = createLucideIcon("Banknote", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
    ]);
    var BarChart2 = createLucideIcon("BarChart2", [
      ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
      ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
      ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
    ]);
    var BarChart3 = createLucideIcon("BarChart3", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["path", { d: "M18 17V9", key: "2bz60n" }],
      ["path", { d: "M13 17V5", key: "1frdt8" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }]
    ]);
    var BarChart4 = createLucideIcon("BarChart4", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["path", { d: "M13 17V9", key: "1fwyjl" }],
      ["path", { d: "M18 17V5", key: "sfb6ij" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }]
    ]);
    var BarChartBig = createLucideIcon("BarChartBig", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1", key: "14u6mf" }],
      ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1", key: "b3pek6" }]
    ]);
    var BarChartHorizontalBig = createLucideIcon("BarChartHorizontalBig", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["rect", { width: "12", height: "4", x: "7", y: "5", rx: "1", key: "936jl1" }],
      ["rect", { width: "7", height: "4", x: "7", y: "13", rx: "1", key: "jqfkpy" }]
    ]);
    var BarChartHorizontal = createLucideIcon("BarChartHorizontal", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["path", { d: "M7 16h8", key: "srdodz" }],
      ["path", { d: "M7 11h12", key: "127s9w" }],
      ["path", { d: "M7 6h3", key: "w9rmul" }]
    ]);
    var BarChart = createLucideIcon("BarChart", [
      ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
      ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
      ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
    ]);
    var Barcode = createLucideIcon("Barcode", [
      ["path", { d: "M3 5v14", key: "1nt18q" }],
      ["path", { d: "M8 5v14", key: "1ybrkv" }],
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "M17 5v14", key: "ycjyhj" }],
      ["path", { d: "M21 5v14", key: "nzette" }]
    ]);
    var Baseline = createLucideIcon("Baseline", [
      ["path", { d: "M4 20h16", key: "14thso" }],
      ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }]
    ]);
    var Bath = createLucideIcon("Bath", [
      [
        "path",
        {
          d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
          key: "1r8yf5"
        }
      ],
      ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
      ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
      ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }]
    ]);
    var BatteryCharging = createLucideIcon("BatteryCharging", [
      ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
      ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
      ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
    ]);
    var BatteryFull = createLucideIcon("BatteryFull", [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
      ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }]
    ]);
    var BatteryLow = createLucideIcon("BatteryLow", [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }]
    ]);
    var BatteryMedium = createLucideIcon("BatteryMedium", [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
      ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }]
    ]);
    var BatteryWarning = createLucideIcon("BatteryWarning", [
      ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2", key: "1if82c" }],
      ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2", key: "2pdlyl" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
      ["line", { x1: "10", x2: "10", y1: "7", y2: "13", key: "1uzyus" }],
      ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01", key: "1y8k4g" }]
    ]);
    var Battery = createLucideIcon("Battery", [
      ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
      ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
    ]);
    var Beaker = createLucideIcon("Beaker", [
      ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
      ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
      ["path", { d: "M6 14h12", key: "4cwo0f" }]
    ]);
    var BeanOff = createLucideIcon("BeanOff", [
      [
        "path",
        {
          d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
          key: "bq3udt"
        }
      ],
      ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }],
      [
        "path",
        {
          d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
          key: "18zqgq"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Bean = createLucideIcon("Bean", [
      [
        "path",
        {
          d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
          key: "1tvzk7"
        }
      ],
      ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]
    ]);
    var BedDouble = createLucideIcon("BedDouble", [
      ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
      ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
      ["path", { d: "M12 4v6", key: "1dcgq2" }],
      ["path", { d: "M2 18h20", key: "ajqnye" }]
    ]);
    var BedSingle = createLucideIcon("BedSingle", [
      ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }],
      ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }],
      ["path", { d: "M3 18h18", key: "1h113x" }]
    ]);
    var Bed = createLucideIcon("Bed", [
      ["path", { d: "M2 4v16", key: "vw9hq8" }],
      ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
      ["path", { d: "M2 17h20", key: "18nfp3" }],
      ["path", { d: "M6 8v9", key: "1yriud" }]
    ]);
    var Beef = createLucideIcon("Beef", [
      ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }],
      [
        "path",
        {
          d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
          key: "o0f6za"
        }
      ],
      [
        "path",
        {
          d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
          key: "k7p6i0"
        }
      ]
    ]);
    var Beer = createLucideIcon("Beer", [
      ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
      ["path", { d: "M9 12v6", key: "1u1cab" }],
      ["path", { d: "M13 12v6", key: "1sugkk" }],
      [
        "path",
        {
          d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
          key: "1510fo"
        }
      ],
      ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]
    ]);
    var BellDot = createLucideIcon("BellDot", [
      [
        "path",
        {
          d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",
          key: "xcehk"
        }
      ],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]
    ]);
    var BellMinus = createLucideIcon("BellMinus", [
      [
        "path",
        { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2", key: "eck70s" }
      ],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ["path", { d: "M15 8h6", key: "8ybuxh" }]
    ]);
    var BellOff = createLucideIcon("BellOff", [
      ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
      ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]);
    var BellPlus = createLucideIcon("BellPlus", [
      [
        "path",
        {
          d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
          key: "guizqy"
        }
      ],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ["path", { d: "M15 8h6", key: "8ybuxh" }],
      ["path", { d: "M18 5v6", key: "g5ayrv" }]
    ]);
    var BellRing = createLucideIcon("BellRing", [
      ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
      ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
    ]);
    var Bell = createLucideIcon("Bell", [
      ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
      ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
    ]);
    var Bike = createLucideIcon("Bike", [
      ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
      ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
    ]);
    var Binary = createLucideIcon("Binary", [
      ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }],
      ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }],
      ["path", { d: "M6 20h4", key: "1i6q5t" }],
      ["path", { d: "M14 10h4", key: "ru81e7" }],
      ["path", { d: "M6 14h2v6", key: "16z9wg" }],
      ["path", { d: "M14 4h2v6", key: "1idq9u" }]
    ]);
    var Biohazard = createLucideIcon("Biohazard", [
      ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
      ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }],
      ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
      ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }],
      ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
      ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }],
      ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
      ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
      ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
      ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]
    ]);
    var Bird = createLucideIcon("Bird", [
      ["path", { d: "M16 7h.01", key: "1kdx03" }],
      ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
      ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
      ["path", { d: "M10 18v3", key: "1yea0a" }],
      ["path", { d: "M14 17.75V21", key: "1pymcb" }],
      ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
    ]);
    var Bitcoin = createLucideIcon("Bitcoin", [
      [
        "path",
        {
          d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
          key: "yr8idg"
        }
      ]
    ]);
    var Blinds = createLucideIcon("Blinds", [
      ["path", { d: "M3 3h18", key: "o7r712" }],
      ["path", { d: "M20 7H8", key: "gd2fo2" }],
      ["path", { d: "M20 11H8", key: "1ynp89" }],
      ["path", { d: "M10 19h10", key: "19hjk5" }],
      ["path", { d: "M8 15h12", key: "1yqzne" }],
      ["path", { d: "M4 3v14", key: "fggqzn" }],
      ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
    ]);
    var Blocks = createLucideIcon("Blocks", [
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
      [
        "path",
        {
          d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
          key: "1fpvtg"
        }
      ]
    ]);
    var BluetoothConnected = createLucideIcon("BluetoothConnected", [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
      ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]
    ]);
    var BluetoothOff = createLucideIcon("BluetoothOff", [
      ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]
    ]);
    var BluetoothSearching = createLucideIcon("BluetoothSearching", [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
      ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
      ["path", { d: "M18 12h.01", key: "yjnet6" }]
    ]);
    var Bluetooth = createLucideIcon("Bluetooth", [
      ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]
    ]);
    var Bold = createLucideIcon("Bold", [
      ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
      ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }]
    ]);
    var Bomb = createLucideIcon("Bomb", [
      ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
      [
        "path",
        {
          d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
          key: "jp4j1b"
        }
      ],
      ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]
    ]);
    var Bone = createLucideIcon("Bone", [
      [
        "path",
        {
          d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
          key: "w610uw"
        }
      ]
    ]);
    var BookA = createLucideIcon("BookA", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
      ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]
    ]);
    var BookAudio = createLucideIcon("BookAudio", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M8 8v3", key: "1qzp49" }],
      ["path", { d: "M12 6v7", key: "1f6ttz" }],
      ["path", { d: "M16 8v3", key: "gejaml" }]
    ]);
    var BookCheck = createLucideIcon("BookCheck", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
    ]);
    var BookCopy = createLucideIcon("BookCopy", [
      ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11", key: "spzkk5" }],
      ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1", key: "16gqf9" }],
      ["path", { d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12", key: "1owzki" }]
    ]);
    var BookDashed = createLucideIcon("BookDashed", [
      ["path", { d: "M20 22h-2", key: "1rpnb6" }],
      ["path", { d: "M20 15v2h-2", key: "fph276" }],
      ["path", { d: "M4 19.5V15", key: "6gr39e" }],
      ["path", { d: "M20 8v3", key: "deu0bs" }],
      ["path", { d: "M18 2h2v2", key: "180o53" }],
      ["path", { d: "M4 11V9", key: "v3xsx8" }],
      ["path", { d: "M12 2h2", key: "cvn524" }],
      ["path", { d: "M12 22h2", key: "kn7ki6" }],
      ["path", { d: "M12 17h2", key: "13u4lk" }],
      ["path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8", key: "fiseg2" }],
      ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8", key: "wywhs9" }]
    ]);
    var BookDown = createLucideIcon("BookDown", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]
    ]);
    var BookHeadphones = createLucideIcon("BookHeadphones", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }]
    ]);
    var BookHeart = createLucideIcon("BookHeart", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      [
        "path",
        {
          d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",
          key: "1dlbw1"
        }
      ]
    ]);
    var BookImage = createLucideIcon("BookImage", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }],
      ["path", { d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17", key: "160say" }]
    ]);
    var BookKey = createLucideIcon("BookKey", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14", key: "1gfsgw" }],
      ["path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20", key: "zb0ngp" }],
      ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }],
      ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
      ["path", { d: "m19 3 1 1", key: "ze14oc" }]
    ]);
    var BookLock = createLucideIcon("BookLock", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
      ["path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20", key: "dpch1j" }],
      ["rect", { width: "8", height: "5", x: "12", y: "6", rx: "1", key: "9nqwug" }],
      ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }]
    ]);
    var BookMarked = createLucideIcon("BookMarked", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }]
    ]);
    var BookMinus = createLucideIcon("BookMinus", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M9 10h6", key: "9gxzsh" }]
    ]);
    var BookOpenCheck = createLucideIcon("BookOpenCheck", [
      ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z", key: "1i8u0n" }],
      ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
      ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3", key: "jb5l51" }]
    ]);
    var BookOpenText = createLucideIcon("BookOpenText", [
      ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
      ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
      ["path", { d: "M6 8h2", key: "30oboj" }],
      ["path", { d: "M6 12h2", key: "32wvfc" }],
      ["path", { d: "M16 8h2", key: "msurwy" }],
      ["path", { d: "M16 12h2", key: "7q9ll5" }]
    ]);
    var BookOpen = createLucideIcon("BookOpen", [
      ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
      ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
    ]);
    var BookPlus = createLucideIcon("BookPlus", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M9 10h6", key: "9gxzsh" }],
      ["path", { d: "M12 7v6", key: "lw1j43" }]
    ]);
    var BookText = createLucideIcon("BookText", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M8 7h6", key: "1f0q6e" }],
      ["path", { d: "M8 11h8", key: "vwpz6n" }]
    ]);
    var BookType = createLucideIcon("BookType", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
      ["path", { d: "M12 6v7", key: "1f6ttz" }],
      ["path", { d: "M10 13h4", key: "ytezjc" }]
    ]);
    var BookUp2 = createLucideIcon("BookUp2", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
      ["path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "1nfm9i" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
      ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
    ]);
    var BookUp = createLucideIcon("BookUp", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
    ]);
    var BookUser = createLucideIcon("BookUser", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
      ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }]
    ]);
    var BookX = createLucideIcon("BookX", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
      ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
      ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
    ]);
    var Book = createLucideIcon("Book", [
      ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]
    ]);
    var BookmarkCheck = createLucideIcon("BookmarkCheck", [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
      ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
    ]);
    var BookmarkMinus = createLucideIcon("BookmarkMinus", [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
    ]);
    var BookmarkPlus = createLucideIcon("BookmarkPlus", [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
      ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
      ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
    ]);
    var BookmarkX = createLucideIcon("BookmarkX", [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
      ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
      ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
    ]);
    var Bookmark = createLucideIcon("Bookmark", [
      ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
    ]);
    var BoomBox = createLucideIcon("BoomBox", [
      ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }],
      ["path", { d: "M8 8v1", key: "xcqmfk" }],
      ["path", { d: "M12 8v1", key: "1rj8u4" }],
      ["path", { d: "M16 8v1", key: "1q12zr" }],
      ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }],
      ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
      ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]
    ]);
    var Bot = createLucideIcon("Bot", [
      ["path", { d: "M12 8V4H8", key: "hb8ula" }],
      ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
      ["path", { d: "M2 14h2", key: "vft8re" }],
      ["path", { d: "M20 14h2", key: "4cs60a" }],
      ["path", { d: "M15 13v2", key: "1xurst" }],
      ["path", { d: "M9 13v2", key: "rq6x2g" }]
    ]);
    var BoxSelect = createLucideIcon("BoxSelect", [
      ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
      ["path", { d: "M9 3h1", key: "1yesri" }],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M14 3h1", key: "1ec4yj" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }],
      ["path", { d: "M3 9v1", key: "1r0deq" }],
      ["path", { d: "M21 9v1", key: "mxsmne" }],
      ["path", { d: "M3 14v1", key: "vnatye" }],
      ["path", { d: "M21 14v1", key: "169vum" }]
    ]);
    var Box = createLucideIcon("Box", [
      [
        "path",
        {
          d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
          key: "hh9hay"
        }
      ],
      ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
      ["path", { d: "M12 22V12", key: "d0xqtd" }]
    ]);
    var Boxes = createLucideIcon("Boxes", [
      [
        "path",
        {
          d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
          key: "lc1i9w"
        }
      ],
      ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
      ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
      ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
      [
        "path",
        {
          d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
          key: "8zsnat"
        }
      ],
      ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
      ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
      ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
      [
        "path",
        {
          d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
          key: "1xygjf"
        }
      ],
      ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
      ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
      ["path", { d: "M12 13.5V8", key: "1io7kd" }]
    ]);
    var Braces = createLucideIcon("Braces", [
      [
        "path",
        { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
      ],
      [
        "path",
        {
          d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
          key: "e1hn23"
        }
      ]
    ]);
    var Brackets = createLucideIcon("Brackets", [
      ["path", { d: "M16 3h3v18h-3", key: "1yor1f" }],
      ["path", { d: "M8 21H5V3h3", key: "1qrfwo" }]
    ]);
    var BrainCircuit = createLucideIcon("BrainCircuit", [
      [
        "path",
        {
          d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",
          key: "ixwj2a"
        }
      ],
      ["path", { d: "M16 8V5c0-1.1.9-2 2-2", key: "13dx7u" }],
      ["path", { d: "M12 13h4", key: "1ku699" }],
      ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
      ["path", { d: "M12 8h8", key: "1lhi5i" }],
      ["path", { d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1s25gz" }],
      ["path", { d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "127460" }],
      ["path", { d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "fys062" }],
      ["path", { d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1vib61" }]
    ]);
    var BrainCog = createLucideIcon("BrainCog", [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      [
        "path",
        {
          d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5",
          key: "1f4le0"
        }
      ],
      ["path", { d: "m15.7 10.4-.9.4", key: "ayzo6p" }],
      ["path", { d: "m9.2 13.2-.9.4", key: "1uzb3g" }],
      ["path", { d: "m13.6 15.7-.4-.9", key: "11ifqf" }],
      ["path", { d: "m10.8 9.2-.4-.9", key: "1pmk2v" }],
      ["path", { d: "m15.7 13.5-.9-.4", key: "7ng02m" }],
      ["path", { d: "m9.2 10.9-.9-.4", key: "1x66zd" }],
      ["path", { d: "m10.5 15.7.4-.9", key: "3js94g" }],
      ["path", { d: "m13.1 9.2.4-.9", key: "18n7mc" }]
    ]);
    var Brain = createLucideIcon("Brain", [
      [
        "path",
        {
          d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
          key: "1mhkh5"
        }
      ],
      [
        "path",
        {
          d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
          key: "1d6s00"
        }
      ]
    ]);
    var Briefcase = createLucideIcon("Briefcase", [
      ["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2", key: "eto64e" }],
      ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
    ]);
    var BringToFront = createLucideIcon("BringToFront", [
      ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }],
      ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }],
      ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]
    ]);
    var Brush = createLucideIcon("Brush", [
      ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
      [
        "path",
        {
          d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
          key: "z0l1mu"
        }
      ]
    ]);
    var BugOff = createLucideIcon("BugOff", [
      ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
      ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
      ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3", key: "1ou0bd" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }],
      ["path", { d: "M12 20v-8", key: "i3yub9" }],
      ["path", { d: "M6 13H2", key: "82j7cp" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }]
    ]);
    var BugPlay = createLucideIcon("BugPlay", [
      ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
      ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
      ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
      ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5", key: "1tjixy" }],
      ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
      ["path", { d: "M6 13H2", key: "82j7cp" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
      ["path", { d: "m12 12 8 5-8 5Z", key: "1ydf81" }]
    ]);
    var Bug = createLucideIcon("Bug", [
      ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
      ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
      ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
      [
        "path",
        {
          d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
          key: "xs1cw7"
        }
      ],
      ["path", { d: "M12 20v-9", key: "1qisl0" }],
      ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
      ["path", { d: "M6 13H2", key: "82j7cp" }],
      ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
      ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
      ["path", { d: "M22 13h-4", key: "1jl80f" }],
      ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
    ]);
    var Building2 = createLucideIcon("Building2", [
      ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
      ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
      ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
      ["path", { d: "M10 6h4", key: "1itunk" }],
      ["path", { d: "M10 10h4", key: "tcdvrf" }],
      ["path", { d: "M10 14h4", key: "kelpxr" }],
      ["path", { d: "M10 18h4", key: "1ulq68" }]
    ]);
    var Building = createLucideIcon("Building", [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
      ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
      ["path", { d: "M8 6h.01", key: "1dz90k" }],
      ["path", { d: "M16 6h.01", key: "1x0f13" }],
      ["path", { d: "M12 6h.01", key: "1vi96p" }],
      ["path", { d: "M12 10h.01", key: "1nrarc" }],
      ["path", { d: "M12 14h.01", key: "1etili" }],
      ["path", { d: "M16 10h.01", key: "1m94wz" }],
      ["path", { d: "M16 14h.01", key: "1gbofw" }],
      ["path", { d: "M8 10h.01", key: "19clt8" }],
      ["path", { d: "M8 14h.01", key: "6423bh" }]
    ]);
    var BusFront = createLucideIcon("BusFront", [
      ["path", { d: "M4 6 2 7", key: "1mqr15" }],
      ["path", { d: "M10 6h4", key: "1itunk" }],
      ["path", { d: "m22 7-2-1", key: "1umjhc" }],
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
      ["path", { d: "M4 11h16", key: "mpoxn0" }],
      ["path", { d: "M8 15h.01", key: "a7atzg" }],
      ["path", { d: "M16 15h.01", key: "rnfrdf" }],
      ["path", { d: "M6 19v2", key: "1loha6" }],
      ["path", { d: "M18 21v-2", key: "sqyl04" }]
    ]);
    var Bus = createLucideIcon("Bus", [
      ["path", { d: "M8 6v6", key: "18i7km" }],
      ["path", { d: "M15 6v6", key: "1sg6z9" }],
      ["path", { d: "M2 12h19.6", key: "de5uta" }],
      [
        "path",
        {
          d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
          key: "1wwztk"
        }
      ],
      ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
      ["path", { d: "M9 18h5", key: "lrx6i" }],
      ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
    ]);
    var CableCar = createLucideIcon("CableCar", [
      ["path", { d: "M10 3h.01", key: "lbucoy" }],
      ["path", { d: "M14 2h.01", key: "1k8aa1" }],
      ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
      ["path", { d: "M12 12V6.5", key: "1vbrij" }],
      ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }],
      ["path", { d: "M9 12v5", key: "3anwtq" }],
      ["path", { d: "M15 12v5", key: "5xh3zn" }],
      ["path", { d: "M4 17h16", key: "g4d7ey" }]
    ]);
    var Cable = createLucideIcon("Cable", [
      ["path", { d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z", key: "1s6oa5" }],
      ["path", { d: "M3 5V3", key: "1k5hjh" }],
      ["path", { d: "M7 5V3", key: "1t1388" }],
      ["path", { d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9", key: "1ytv72" }],
      ["path", { d: "M17 21v-2", key: "ds4u3f" }],
      ["path", { d: "M21 21v-2", key: "eo0ou" }],
      ["path", { d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z", key: "sdz6o8" }]
    ]);
    var CakeSlice = createLucideIcon("CakeSlice", [
      ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }],
      [
        "path",
        { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6", key: "xle13f" }
      ],
      ["path", { d: "M16 13H3", key: "1wpj08" }],
      ["path", { d: "M16 17H3", key: "3lvfcd" }]
    ]);
    var Cake = createLucideIcon("Cake", [
      ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
      ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
      ["path", { d: "M2 21h20", key: "1nyx9w" }],
      ["path", { d: "M7 8v3", key: "1qtyvj" }],
      ["path", { d: "M12 8v3", key: "hwp4zt" }],
      ["path", { d: "M17 8v3", key: "1i6e5u" }],
      ["path", { d: "M7 4h0.01", key: "hsw7lv" }],
      ["path", { d: "M12 4h0.01", key: "1e3d8f" }],
      ["path", { d: "M17 4h0.01", key: "p7cxgy" }]
    ]);
    var Calculator = createLucideIcon("Calculator", [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
      ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
      ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
      ["path", { d: "M16 10h.01", key: "1m94wz" }],
      ["path", { d: "M12 10h.01", key: "1nrarc" }],
      ["path", { d: "M8 10h.01", key: "19clt8" }],
      ["path", { d: "M12 14h.01", key: "1etili" }],
      ["path", { d: "M8 14h.01", key: "6423bh" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ["path", { d: "M8 18h.01", key: "lrp35t" }]
    ]);
    var CalendarCheck2 = createLucideIcon("CalendarCheck2", [
      ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
    ]);
    var CalendarCheck = createLucideIcon("CalendarCheck", [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
    ]);
    var CalendarClock = createLucideIcon("CalendarClock", [
      ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M3 10h5", key: "r794hk" }],
      ["path", { d: "M17.5 17.5 16 16.25V14", key: "re2vv1" }],
      ["path", { d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z", key: "ame013" }]
    ]);
    var CalendarDays = createLucideIcon("CalendarDays", [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["path", { d: "M8 14h.01", key: "6423bh" }],
      ["path", { d: "M12 14h.01", key: "1etili" }],
      ["path", { d: "M16 14h.01", key: "1gbofw" }],
      ["path", { d: "M8 18h.01", key: "lrp35t" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ["path", { d: "M16 18h.01", key: "kzsmim" }]
    ]);
    var CalendarHeart = createLucideIcon("CalendarHeart", [
      ["path", { d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7", key: "1sfrvf" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M3 10h18", key: "8toen8" }],
      [
        "path",
        {
          d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
          key: "1t7hil"
        }
      ]
    ]);
    var CalendarMinus = createLucideIcon("CalendarMinus", [
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
    ]);
    var CalendarOff = createLucideIcon("CalendarOff", [
      [
        "path",
        { d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "1feomx" }
      ],
      ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      ["path", { d: "M3 10h7", key: "1wap6i" }],
      ["path", { d: "M21 10h-5.5", key: "quycpq" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var CalendarPlus = createLucideIcon("CalendarPlus", [
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["line", { x1: "19", x2: "19", y1: "16", y2: "22", key: "1ttwzi" }],
      ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
    ]);
    var CalendarRange = createLucideIcon("CalendarRange", [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["path", { d: "M17 14h-6", key: "bkmgh3" }],
      ["path", { d: "M13 18H7", key: "bb0bb7" }],
      ["path", { d: "M7 14h.01", key: "1qa3f1" }],
      ["path", { d: "M17 18h.01", key: "1bdyru" }]
    ]);
    var CalendarSearch = createLucideIcon("CalendarSearch", [
      ["path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5", key: "18ncp8" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M3 10h18", key: "8toen8" }],
      ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
      ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
    ]);
    var CalendarX2 = createLucideIcon("CalendarX2", [
      ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["line", { x1: "17", x2: "22", y1: "17", y2: "22", key: "xa9o8b" }],
      ["line", { x1: "17", x2: "22", y1: "22", y2: "17", key: "18nitg" }]
    ]);
    var CalendarX = createLucideIcon("CalendarX", [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
      ["line", { x1: "10", x2: "14", y1: "14", y2: "18", key: "1g3qc0" }],
      ["line", { x1: "14", x2: "10", y1: "14", y2: "18", key: "1az83m" }]
    ]);
    var Calendar = createLucideIcon("Calendar", [
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
      ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
    ]);
    var CameraOff = createLucideIcon("CameraOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16", key: "qmtpty" }],
      ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5", key: "1ufyfc" }],
      ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88", key: "11zox6" }]
    ]);
    var Camera = createLucideIcon("Camera", [
      [
        "path",
        {
          d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
          key: "1tc9qg"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
    ]);
    var CandlestickChart = createLucideIcon("CandlestickChart", [
      ["path", { d: "M9 5v4", key: "14uxtq" }],
      ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
      ["path", { d: "M9 15v2", key: "r5rk32" }],
      ["path", { d: "M17 3v2", key: "1l2re6" }],
      ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
      ["path", { d: "M17 13v3", key: "5l0wba" }],
      ["path", { d: "M3 3v18h18", key: "1s2lah" }]
    ]);
    var CandyCane = createLucideIcon("CandyCane", [
      [
        "path",
        {
          d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
          key: "isaq8g"
        }
      ],
      ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
      ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
      ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
      ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]
    ]);
    var CandyOff = createLucideIcon("CandyOff", [
      ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1", key: "1ff4ui" }],
      [
        "path",
        { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657", key: "1sbrv4" }
      ],
      ["path", { d: "M14 16.5V14", key: "1maf8j" }],
      ["path", { d: "M14 6.5v1.843", key: "1a6u6t" }],
      ["path", { d: "M10 10v7.5", key: "80pj65" }],
      [
        "path",
        {
          d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
          key: "11a9mt"
        }
      ],
      [
        "path",
        {
          d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
          key: "3mjmon"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Candy = createLucideIcon("Candy", [
      ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z", key: "ue6khb" }],
      ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
      ["path", { d: "M10 7.5v10", key: "1uew51" }],
      [
        "path",
        { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1", key: "b9cp6k" }
      ],
      [
        "path",
        { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1", key: "5lney8" }
      ]
    ]);
    var CarFront = createLucideIcon("CarFront", [
      [
        "path",
        { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
      ],
      ["path", { d: "M7 14h.01", key: "1qa3f1" }],
      ["path", { d: "M17 14h.01", key: "7oqj8z" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
      ["path", { d: "M5 18v2", key: "ppbyun" }],
      ["path", { d: "M19 18v2", key: "gy7782" }]
    ]);
    var CarTaxiFront = createLucideIcon("CarTaxiFront", [
      ["path", { d: "M10 2h4", key: "n1abiw" }],
      [
        "path",
        { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
      ],
      ["path", { d: "M7 14h.01", key: "1qa3f1" }],
      ["path", { d: "M17 14h.01", key: "7oqj8z" }],
      ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
      ["path", { d: "M5 18v2", key: "ppbyun" }],
      ["path", { d: "M19 18v2", key: "gy7782" }]
    ]);
    var Car = createLucideIcon("Car", [
      [
        "path",
        {
          d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
          key: "5owen"
        }
      ],
      ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
      ["path", { d: "M9 17h6", key: "r8uit2" }],
      ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
    ]);
    var Caravan = createLucideIcon("Caravan", [
      ["rect", { width: "4", height: "4", x: "2", y: "9", key: "1vcvhd" }],
      ["rect", { width: "4", height: "10", x: "10", y: "9", key: "1b7ev2" }],
      ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }],
      ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }],
      ["path", { d: "M10 19h12v-2", key: "1yu2qx" }]
    ]);
    var Carrot = createLucideIcon("Carrot", [
      [
        "path",
        {
          d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
          key: "rfqxbe"
        }
      ],
      ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }],
      ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]
    ]);
    var CaseLower = createLucideIcon("CaseLower", [
      ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
      ["path", { d: "M10 9v6", key: "17i7lo" }],
      ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
      ["path", { d: "M14 7v8", key: "dl84cr" }]
    ]);
    var CaseSensitive = createLucideIcon("CaseSensitive", [
      ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
      ["path", { d: "M4 13h6", key: "1r9ots" }],
      ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
      ["path", { d: "M21 9v6", key: "anns31" }]
    ]);
    var CaseUpper = createLucideIcon("CaseUpper", [
      ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
      ["path", { d: "M4 13h6", key: "1r9ots" }],
      ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4", key: "1sqfas" }]
    ]);
    var CassetteTape = createLucideIcon("CassetteTape", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
      ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
      ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]
    ]);
    var Cast = createLucideIcon("Cast", [
      ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
      ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
      ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
      ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
    ]);
    var Castle = createLucideIcon("Castle", [
      ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "109fe4" }],
      ["path", { d: "M18 11V4H6v7", key: "mon5oj" }],
      ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4", key: "jdggr9" }],
      ["path", { d: "M22 11V9", key: "3zbp94" }],
      ["path", { d: "M2 11V9", key: "1x5rnq" }],
      ["path", { d: "M6 4V2", key: "1rsq15" }],
      ["path", { d: "M18 4V2", key: "1jsdo1" }],
      ["path", { d: "M10 4V2", key: "75d9ly" }],
      ["path", { d: "M14 4V2", key: "8nj3z6" }]
    ]);
    var Cat = createLucideIcon("Cat", [
      [
        "path",
        {
          d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
          key: "x6xyqk"
        }
      ],
      ["path", { d: "M8 14v.5", key: "1nzgdb" }],
      ["path", { d: "M16 14v.5", key: "1lajdz" }],
      ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]
    ]);
    var CheckCheck = createLucideIcon("CheckCheck", [
      ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
      ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
    ]);
    var CheckCircle2 = createLucideIcon("CheckCircle2", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]);
    var CheckCircle3 = createLucideIcon("CheckCircle", [
      ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
    ]);
    var CheckSquare2 = createLucideIcon("CheckSquare2", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]);
    var CheckSquare = createLucideIcon("CheckSquare", [
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
    ]);
    var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
    var ChefHat = createLucideIcon("ChefHat", [
      [
        "path",
        {
          d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
          key: "z3ra2g"
        }
      ],
      ["line", { x1: "6", x2: "18", y1: "17", y2: "17", key: "12q60k" }]
    ]);
    var Cherry = createLucideIcon("Cherry", [
      ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }],
      ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }],
      ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }],
      ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]
    ]);
    var ChevronDownCircle = createLucideIcon("ChevronDownCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
    ]);
    var ChevronDownSquare = createLucideIcon("ChevronDownSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
    ]);
    var ChevronDown = createLucideIcon("ChevronDown", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
    ]);
    var ChevronFirst = createLucideIcon("ChevronFirst", [
      ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
      ["path", { d: "M7 6v12", key: "1p53r6" }]
    ]);
    var ChevronLast = createLucideIcon("ChevronLast", [
      ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
      ["path", { d: "M17 6v12", key: "1o0aio" }]
    ]);
    var ChevronLeftCircle = createLucideIcon("ChevronLeftCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
    ]);
    var ChevronLeftSquare = createLucideIcon("ChevronLeftSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
    ]);
    var ChevronLeft = createLucideIcon("ChevronLeft", [
      ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
    ]);
    var ChevronRightCircle = createLucideIcon("ChevronRightCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
    ]);
    var ChevronRightSquare = createLucideIcon("ChevronRightSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
    ]);
    var ChevronRight = createLucideIcon("ChevronRight", [
      ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
    ]);
    var ChevronUpCircle = createLucideIcon("ChevronUpCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
    ]);
    var ChevronUpSquare = createLucideIcon("ChevronUpSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
    ]);
    var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
    var ChevronsDownUp = createLucideIcon("ChevronsDownUp", [
      ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
      ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
    ]);
    var ChevronsDown = createLucideIcon("ChevronsDown", [
      ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
      ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
    ]);
    var ChevronsLeftRight = createLucideIcon("ChevronsLeftRight", [
      ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
      ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
    ]);
    var ChevronsLeft = createLucideIcon("ChevronsLeft", [
      ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
      ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
    ]);
    var ChevronsRightLeft = createLucideIcon("ChevronsRightLeft", [
      ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
      ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]
    ]);
    var ChevronsRight = createLucideIcon("ChevronsRight", [
      ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
      ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
    ]);
    var ChevronsUpDown = createLucideIcon("ChevronsUpDown", [
      ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
      ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
    ]);
    var ChevronsUp = createLucideIcon("ChevronsUp", [
      ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
      ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
    ]);
    var Chrome = createLucideIcon("Chrome", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
      ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
      ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }]
    ]);
    var Church = createLucideIcon("Church", [
      ["path", { d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2", key: "gy5gyo" }],
      ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
      ["path", { d: "M18 22V5l-6-3-6 3v17", key: "1hsnhq" }],
      ["path", { d: "M12 7v5", key: "ma6bk" }],
      ["path", { d: "M10 9h4", key: "u4k05v" }]
    ]);
    var CigaretteOff = createLucideIcon("CigaretteOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["path", { d: "M12 12H2v4h14", key: "91gsaq" }],
      ["path", { d: "M22 12v4", key: "142cbu" }],
      ["path", { d: "M18 12h-.5", key: "12ymji" }],
      ["path", { d: "M7 12v4", key: "jqww69" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
    ]);
    var Cigarette = createLucideIcon("Cigarette", [
      ["path", { d: "M18 12H2v4h16", key: "2rt1hm" }],
      ["path", { d: "M22 12v4", key: "142cbu" }],
      ["path", { d: "M7 12v4", key: "jqww69" }],
      ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
      ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
    ]);
    var CircleDashed = createLucideIcon("CircleDashed", [
      ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
      ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
      ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
      ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
      ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
      ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
      ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
      ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }]
    ]);
    var CircleDollarSign = createLucideIcon("CircleDollarSign", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }]
    ]);
    var CircleDotDashed = createLucideIcon("CircleDotDashed", [
      ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
      ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
      ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
      ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
      ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
      ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
      ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
      ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
    ]);
    var CircleDot = createLucideIcon("CircleDot", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
    ]);
    var CircleEllipsis = createLucideIcon("CircleEllipsis", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M17 12h.01", key: "1m0b6t" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M7 12h.01", key: "eqddd0" }]
    ]);
    var CircleEqual = createLucideIcon("CircleEqual", [
      ["path", { d: "M7 10h10", key: "1101jm" }],
      ["path", { d: "M7 14h10", key: "1mhdw3" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var CircleOff = createLucideIcon("CircleOff", [
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
      ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
    ]);
    var CircleSlash2 = createLucideIcon("CircleSlash2", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M22 2 2 22", key: "y4kqgn" }]
    ]);
    var CircleSlash = createLucideIcon("CircleSlash", [
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var CircleUserRound = createLucideIcon("CircleUserRound", [
      ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
      ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var CircleUser = createLucideIcon("CircleUser", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
    ]);
    var Circle = createLucideIcon("Circle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var CircuitBoard = createLucideIcon("CircuitBoard", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
      ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]
    ]);
    var Citrus = createLucideIcon("Citrus", [
      [
        "path",
        {
          d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
          key: "4ite01"
        }
      ],
      ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
      ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
      ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]
    ]);
    var Clapperboard = createLucideIcon("Clapperboard", [
      [
        "path",
        { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
      ],
      ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
      ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
      ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
    ]);
    var ClipboardCheck = createLucideIcon("ClipboardCheck", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ],
      ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
    ]);
    var ClipboardCopy = createLucideIcon("ClipboardCopy", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
      ["path", { d: "M21 14H11", key: "1bme5i" }],
      ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
    ]);
    var ClipboardEdit = createLucideIcon("ClipboardEdit", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        { d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z", key: "1rgxu8" }
      ],
      ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
      ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }]
    ]);
    var ClipboardList = createLucideIcon("ClipboardList", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ],
      ["path", { d: "M12 11h4", key: "1jrz19" }],
      ["path", { d: "M12 16h4", key: "n85exb" }],
      ["path", { d: "M8 11h.01", key: "1dfujw" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }]
    ]);
    var ClipboardPaste = createLucideIcon("ClipboardPaste", [
      [
        "path",
        { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }
      ],
      [
        "path",
        {
          d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
          key: "2ik1ml"
        }
      ],
      ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]
    ]);
    var ClipboardSignature = createLucideIcon("ClipboardSignature", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }],
      ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
      [
        "path",
        { d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z", key: "johvi5" }
      ],
      ["path", { d: "M8 18h1", key: "13wk12" }]
    ]);
    var ClipboardType = createLucideIcon("ClipboardType", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ],
      ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
      ["path", { d: "M11 17h2", key: "12w5me" }],
      ["path", { d: "M12 11v6", key: "1bwqyc" }]
    ]);
    var ClipboardX = createLucideIcon("ClipboardX", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ],
      ["path", { d: "m15 11-6 6", key: "1toa9n" }],
      ["path", { d: "m9 11 6 6", key: "wlibny" }]
    ]);
    var Clipboard = createLucideIcon("Clipboard", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ]
    ]);
    var Clock1 = createLucideIcon("Clock1", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }]
    ]);
    var Clock10 = createLucideIcon("Clock10", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 8 10", key: "atfzqc" }]
    ]);
    var Clock11 = createLucideIcon("Clock11", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 9.5 8", key: "l5bg6f" }]
    ]);
    var Clock12 = createLucideIcon("Clock12", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12", key: "1fub01" }]
    ]);
    var Clock2 = createLucideIcon("Clock2", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16 10", key: "1g230d" }]
    ]);
    var Clock3 = createLucideIcon("Clock3", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
    ]);
    var Clock4 = createLucideIcon("Clock4", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
    ]);
    var Clock5 = createLucideIcon("Clock5", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 14.5 16", key: "1pcbox" }]
    ]);
    var Clock6 = createLucideIcon("Clock6", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 12 16.5", key: "hb2qv6" }]
    ]);
    var Clock7 = createLucideIcon("Clock7", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 9.5 16", key: "ka3394" }]
    ]);
    var Clock8 = createLucideIcon("Clock8", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 8 14", key: "tmc9b4" }]
    ]);
    var Clock9 = createLucideIcon("Clock9", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 7.5 12", key: "1k60p0" }]
    ]);
    var Clock = createLucideIcon("Clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
    ]);
    var CloudCog = createLucideIcon("CloudCog", [
      ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
      ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "zaobp" }],
      ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
      ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
      ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
      ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
      ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
      ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
      ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
      ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }]
    ]);
    var CloudDrizzle = createLucideIcon("CloudDrizzle", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M8 19v1", key: "1dk2by" }],
      ["path", { d: "M8 14v1", key: "84yxot" }],
      ["path", { d: "M16 19v1", key: "v220m7" }],
      ["path", { d: "M16 14v1", key: "g12gj6" }],
      ["path", { d: "M12 21v1", key: "q8vafk" }],
      ["path", { d: "M12 16v1", key: "1mx6rx" }]
    ]);
    var CloudFog = createLucideIcon("CloudFog", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M16 17H7", key: "pygtm1" }],
      ["path", { d: "M17 21H9", key: "1u2q02" }]
    ]);
    var CloudHail = createLucideIcon("CloudHail", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M16 14v2", key: "a1is7l" }],
      ["path", { d: "M8 14v2", key: "1e9m6t" }],
      ["path", { d: "M16 20h.01", key: "xwek51" }],
      ["path", { d: "M8 20h.01", key: "1vjney" }],
      ["path", { d: "M12 16v2", key: "z66u1j" }],
      ["path", { d: "M12 22h.01", key: "1urd7a" }]
    ]);
    var CloudLightning = createLucideIcon("CloudLightning", [
      ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
      ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
    ]);
    var CloudMoonRain = createLucideIcon("CloudMoonRain", [
      [
        "path",
        {
          d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
          key: "u82z8m"
        }
      ],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
      ["path", { d: "M11 20v2", key: "174qtz" }],
      ["path", { d: "M7 19v2", key: "12npes" }]
    ]);
    var CloudMoon = createLucideIcon("CloudMoon", [
      ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" }],
      ["path", { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197", key: "16nha0" }]
    ]);
    var CloudOff = createLucideIcon("CloudOff", [
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
      [
        "path",
        { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
      ]
    ]);
    var CloudRainWind = createLucideIcon("CloudRainWind", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
      ["path", { d: "m9 13-3 7", key: "500co5" }],
      ["path", { d: "m17 13-3 7", key: "8t2fiy" }]
    ]);
    var CloudRain = createLucideIcon("CloudRain", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M16 14v6", key: "1j4efv" }],
      ["path", { d: "M8 14v6", key: "17c4r9" }],
      ["path", { d: "M12 16v6", key: "c8a4gj" }]
    ]);
    var CloudSnow = createLucideIcon("CloudSnow", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M8 15h.01", key: "a7atzg" }],
      ["path", { d: "M8 19h.01", key: "puxtts" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M12 21h.01", key: "h35vbk" }],
      ["path", { d: "M16 15h.01", key: "rnfrdf" }],
      ["path", { d: "M16 19h.01", key: "1vcnzz" }]
    ]);
    var CloudSunRain = createLucideIcon("CloudSunRain", [
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
      ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
      ["path", { d: "M11 20v2", key: "174qtz" }],
      ["path", { d: "M7 19v2", key: "12npes" }]
    ]);
    var CloudSun = createLucideIcon("CloudSun", [
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
      ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
    ]);
    var Cloud = createLucideIcon("Cloud", [
      ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
    ]);
    var Cloudy = createLucideIcon("Cloudy", [
      ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "gqqjvc" }],
      ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5", key: "1p2s76" }]
    ]);
    var Clover = createLucideIcon("Clover", [
      [
        "path",
        {
          d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",
          key: "1gxwox"
        }
      ],
      [
        "path",
        {
          d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",
          key: "il7z7z"
        }
      ],
      [
        "path",
        {
          d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",
          key: "15bpx2"
        }
      ],
      [
        "path",
        {
          d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",
          key: "v9mug8"
        }
      ],
      ["path", { d: "m7 17-5 5", key: "1py3mz" }]
    ]);
    var Club = createLucideIcon("Club", [
      [
        "path",
        {
          d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
          key: "27yuqz"
        }
      ],
      ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]
    ]);
    var Code2 = createLucideIcon("Code2", [
      ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
      ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
      ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
    ]);
    var Code = createLucideIcon("Code", [
      ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
      ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
    ]);
    var Codepen = createLucideIcon("Codepen", [
      ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
      ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
      ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]
    ]);
    var Codesandbox = createLucideIcon("Codesandbox", [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          key: "yt0hxn"
        }
      ],
      ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
      ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
      ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
      ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }],
      ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]
    ]);
    var Coffee = createLucideIcon("Coffee", [
      ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
      ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
      ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
      ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
      ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }]
    ]);
    var Cog = createLucideIcon("Cog", [
      ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
      ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 22v-2", key: "1osdcq" }],
      ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
      ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
      ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
      ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
      ["path", { d: "M14 12h8", key: "4f43i9" }],
      ["path", { d: "M2 12h2", key: "1t8f8n" }],
      ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
      ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
      ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
      ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
    ]);
    var Coins = createLucideIcon("Coins", [
      ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
      ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
      ["path", { d: "M7 6h1v4", key: "1obek4" }],
      ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
    ]);
    var Columns = createLucideIcon("Columns", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }]
    ]);
    var Combine = createLucideIcon("Combine", [
      ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2", key: "z1hh3n" }],
      ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "83orz6" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "k86dmt" }],
      ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1", key: "6vokjl" }],
      ["polyline", { points: "7 21 10 18 7 15", key: "1k02g0" }],
      ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
    ]);
    var Command = createLucideIcon("Command", [
      [
        "path",
        { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
      ]
    ]);
    var Compass = createLucideIcon("Compass", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }]
    ]);
    var Component = createLucideIcon("Component", [
      ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z", key: "1kciei" }],
      ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z", key: "1ome0g" }],
      ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z", key: "vbupec" }],
      ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z", key: "16csic" }]
    ]);
    var Computer = createLucideIcon("Computer", [
      ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
      ["path", { d: "M6 18h2", key: "rwmk9e" }],
      ["path", { d: "M12 18h6", key: "aqd8w3" }]
    ]);
    var ConciergeBell = createLucideIcon("ConciergeBell", [
      ["path", { d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z", key: "1co3i8" }],
      ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
      ["path", { d: "M12 4v4", key: "1bq03y" }],
      ["path", { d: "M10 4h4", key: "1xpv9s" }]
    ]);
    var Cone = createLucideIcon("Cone", [
      ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }],
      ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]
    ]);
    var Construction = createLucideIcon("Construction", [
      ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
      ["path", { d: "M17 14v7", key: "7m2elx" }],
      ["path", { d: "M7 14v7", key: "1cm7wv" }],
      ["path", { d: "M17 3v3", key: "1v4jwn" }],
      ["path", { d: "M7 3v3", key: "7o6guu" }],
      ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
      ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
      ["path", { d: "m8 6 8 8", key: "hl96qh" }]
    ]);
    var Contact2 = createLucideIcon("Contact2", [
      ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
      ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
    ]);
    var Contact = createLucideIcon("Contact", [
      ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
      ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
      ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
      ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
    ]);
    var Container = createLucideIcon("Container", [
      [
        "path",
        {
          d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
          key: "1t2lqe"
        }
      ],
      ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
      ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
      ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
      ["path", { d: "M18 17.5V9.4", key: "11uown" }]
    ]);
    var Contrast = createLucideIcon("Contrast", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
    ]);
    var Cookie = createLucideIcon("Cookie", [
      ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
      ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
      ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
      ["path", { d: "M12 12v.01", key: "u5ubse" }],
      ["path", { d: "M11 17v.01", key: "1hyl5a" }],
      ["path", { d: "M7 14v.01", key: "uct60s" }]
    ]);
    var CopyCheck = createLucideIcon("CopyCheck", [
      ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var CopyMinus = createLucideIcon("CopyMinus", [
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var CopyPlus = createLucideIcon("CopyPlus", [
      ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
      ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var CopySlash = createLucideIcon("CopySlash", [
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var CopyX = createLucideIcon("CopyX", [
      ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
      ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var Copy = createLucideIcon("Copy", [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    var Copyleft = createLucideIcon("Copyleft", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]
    ]);
    var Copyright = createLucideIcon("Copyright", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]
    ]);
    var CornerDownLeft = createLucideIcon("CornerDownLeft", [
      ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }]
    ]);
    var CornerDownRight = createLucideIcon("CornerDownRight", [
      ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
      ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
    ]);
    var CornerLeftDown = createLucideIcon("CornerLeftDown", [
      ["polyline", { points: "14 15 9 20 4 15", key: "nkc4i" }],
      ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]
    ]);
    var CornerLeftUp = createLucideIcon("CornerLeftUp", [
      ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
      ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
    ]);
    var CornerRightDown = createLucideIcon("CornerRightDown", [
      ["polyline", { points: "10 15 15 20 20 15", key: "axus6l" }],
      ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]
    ]);
    var CornerRightUp = createLucideIcon("CornerRightUp", [
      ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
      ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]
    ]);
    var CornerUpLeft = createLucideIcon("CornerUpLeft", [
      ["polyline", { points: "9 14 4 9 9 4", key: "881910" }],
      ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }]
    ]);
    var CornerUpRight = createLucideIcon("CornerUpRight", [
      ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
      ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
    ]);
    var Cpu = createLucideIcon("Cpu", [
      ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
      ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
      ["path", { d: "M15 2v2", key: "13l42r" }],
      ["path", { d: "M15 20v2", key: "15mkzm" }],
      ["path", { d: "M2 15h2", key: "1gxd5l" }],
      ["path", { d: "M2 9h2", key: "1bbxkp" }],
      ["path", { d: "M20 15h2", key: "19e6y8" }],
      ["path", { d: "M20 9h2", key: "19tzq7" }],
      ["path", { d: "M9 2v2", key: "165o2o" }],
      ["path", { d: "M9 20v2", key: "i2bqo8" }]
    ]);
    var CreativeCommons = createLucideIcon("CreativeCommons", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }
      ],
      [
        "path",
        { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }
      ]
    ]);
    var CreditCard = createLucideIcon("CreditCard", [
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
    ]);
    var Croissant = createLucideIcon("Croissant", [
      [
        "path",
        {
          d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
          key: "1ozxlb"
        }
      ],
      [
        "path",
        {
          d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
          key: "ffuyb5"
        }
      ],
      ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" }],
      [
        "path",
        {
          d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
          key: "1vubaw"
        }
      ],
      ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" }]
    ]);
    var Crop = createLucideIcon("Crop", [
      ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
      ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
    ]);
    var Cross = createLucideIcon("Cross", [
      [
        "path",
        {
          d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
          key: "1t5g7j"
        }
      ]
    ]);
    var Crosshair = createLucideIcon("Crosshair", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
      ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
      ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
    ]);
    var Crown = createLucideIcon("Crown", [
      ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
    ]);
    var Cuboid = createLucideIcon("Cuboid", [
      [
        "path",
        {
          d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
          key: "1u2ovd"
        }
      ],
      ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
      ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]
    ]);
    var CupSoda = createLucideIcon("CupSoda", [
      ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }],
      ["path", { d: "M5 8h14", key: "pcz4l3" }],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }],
      ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]
    ]);
    var Currency = createLucideIcon("Currency", [
      ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
      ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
      ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
      ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
      ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]
    ]);
    var Cylinder = createLucideIcon("Cylinder", [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]
    ]);
    var DatabaseBackup = createLucideIcon("DatabaseBackup", [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
      ["path", { d: "M21 9.3V5", key: "6k6cib" }],
      ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
      ["path", { d: "M12 12v4h4", key: "1bxaet" }],
      [
        "path",
        {
          d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
          key: "1f4ei9"
        }
      ]
    ]);
    var DatabaseZap = createLucideIcon("DatabaseZap", [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
      ["path", { d: "M21 5V8", key: "1marbg" }],
      ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
      ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]
    ]);
    var Database = createLucideIcon("Database", [
      ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
      ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
      ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
    ]);
    var Delete = createLucideIcon("Delete", [
      ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z", key: "1oy587" }],
      ["line", { x1: "18", x2: "12", y1: "9", y2: "15", key: "1olkx5" }],
      ["line", { x1: "12", x2: "18", y1: "9", y2: "15", key: "1n50pc" }]
    ]);
    var Dessert = createLucideIcon("Dessert", [
      ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
      [
        "path",
        {
          d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
          key: "lfo06j"
        }
      ],
      ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0", key: "12xarc" }]
    ]);
    var Diameter = createLucideIcon("Diameter", [
      ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
      ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
      ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
      ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
      ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]
    ]);
    var Diamond = createLucideIcon("Diamond", [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
          key: "1f1r0c"
        }
      ]
    ]);
    var Dice1 = createLucideIcon("Dice1", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }]
    ]);
    var Dice2 = createLucideIcon("Dice2", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M15 9h.01", key: "x1ddxp" }],
      ["path", { d: "M9 15h.01", key: "fzyn71" }]
    ]);
    var Dice3 = createLucideIcon("Dice3", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M16 8h.01", key: "cr5u4v" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }]
    ]);
    var Dice4 = createLucideIcon("Dice4", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M16 8h.01", key: "cr5u4v" }],
      ["path", { d: "M8 8h.01", key: "1e4136" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }],
      ["path", { d: "M16 16h.01", key: "1f9h7w" }]
    ]);
    var Dice5 = createLucideIcon("Dice5", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M16 8h.01", key: "cr5u4v" }],
      ["path", { d: "M8 8h.01", key: "1e4136" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }],
      ["path", { d: "M16 16h.01", key: "1f9h7w" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }]
    ]);
    var Dice6 = createLucideIcon("Dice6", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M16 8h.01", key: "cr5u4v" }],
      ["path", { d: "M16 12h.01", key: "1l6xoz" }],
      ["path", { d: "M16 16h.01", key: "1f9h7w" }],
      ["path", { d: "M8 8h.01", key: "1e4136" }],
      ["path", { d: "M8 12h.01", key: "czm47f" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }]
    ]);
    var Dices = createLucideIcon("Dices", [
      ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }],
      [
        "path",
        { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }
      ],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "M10 14h.01", key: "ssrbsk" }],
      ["path", { d: "M15 6h.01", key: "cblpky" }],
      ["path", { d: "M18 9h.01", key: "2061c0" }]
    ]);
    var Diff = createLucideIcon("Diff", [
      ["path", { d: "M12 3v14", key: "7cf3v8" }],
      ["path", { d: "M5 10h14", key: "elsbfy" }],
      ["path", { d: "M5 21h14", key: "11awu3" }]
    ]);
    var Disc2 = createLucideIcon("Disc2", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }]
    ]);
    var Disc3 = createLucideIcon("Disc3", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
    ]);
    var DiscAlbum = createLucideIcon("DiscAlbum", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }]
    ]);
    var Disc = createLucideIcon("Disc", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
    ]);
    var DivideCircle = createLucideIcon("DivideCircle", [
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var DivideSquare = createLucideIcon("DivideSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
      ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]
    ]);
    var Divide = createLucideIcon("Divide", [
      ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
      ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
      ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
    ]);
    var DnaOff = createLucideIcon("DnaOff", [
      ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5", key: "sxiaad" }],
      ["path", { d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5", key: "yn4bs1" }],
      ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
      ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
      ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
      ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
      ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
      ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
      ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
      ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Dna = createLucideIcon("Dna", [
      ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
      ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }],
      ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
      ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
      ["path", { d: "m14 8-1-1", key: "15nbz5" }],
      ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
      ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
      ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
      ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
      ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
      ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }]
    ]);
    var Dog = createLucideIcon("Dog", [
      [
        "path",
        {
          d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",
          key: "19br0u"
        }
      ],
      [
        "path",
        {
          d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
          key: "11n1an"
        }
      ],
      ["path", { d: "M8 14v.5", key: "1nzgdb" }],
      ["path", { d: "M16 14v.5", key: "1lajdz" }],
      ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }],
      [
        "path",
        {
          d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",
          key: "wsu29d"
        }
      ]
    ]);
    var DollarSign = createLucideIcon("DollarSign", [
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
      ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
    ]);
    var Donut = createLucideIcon("Donut", [
      [
        "path",
        {
          d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
          key: "19sr3x"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]);
    var DoorClosed = createLucideIcon("DoorClosed", [
      ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
      ["path", { d: "M2 20h20", key: "owomy5" }],
      ["path", { d: "M14 12v.01", key: "xfcn54" }]
    ]);
    var DoorOpen = createLucideIcon("DoorOpen", [
      ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
      ["path", { d: "M2 20h3", key: "1gaodv" }],
      ["path", { d: "M13 20h9", key: "s90cdi" }],
      ["path", { d: "M10 12v.01", key: "vx6srw" }],
      [
        "path",
        {
          d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
          key: "199qr4"
        }
      ]
    ]);
    var Dot = createLucideIcon("Dot", [
      ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
    ]);
    var DownloadCloud = createLucideIcon("DownloadCloud", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M12 12v9", key: "192myk" }],
      ["path", { d: "m8 17 4 4 4-4", key: "1ul180" }]
    ]);
    var Download = createLucideIcon("Download", [
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
      ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
      ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
    ]);
    var DraftingCompass = createLucideIcon("DraftingCompass", [
      ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
      ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
      ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
      ["path", { d: "M19 12c-3.87 4-10.13 4-14 0", key: "1tsu18" }],
      ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }]
    ]);
    var Drama = createLucideIcon("Drama", [
      ["path", { d: "M10 11h.01", key: "d2at3l" }],
      ["path", { d: "M14 6h.01", key: "k028ub" }],
      ["path", { d: "M18 6h.01", key: "1v4wsw" }],
      ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
      ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }],
      ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
      [
        "path",
        {
          d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
          key: "rqjl8i"
        }
      ],
      ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]
    ]);
    var Dribbble = createLucideIcon("Dribbble", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
      ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
      ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
    ]);
    var Droplet = createLucideIcon("Droplet", [
      [
        "path",
        {
          d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
          key: "c7niix"
        }
      ]
    ]);
    var Droplets = createLucideIcon("Droplets", [
      [
        "path",
        {
          d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
          key: "1ptgy4"
        }
      ],
      [
        "path",
        {
          d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
          key: "1sl1rz"
        }
      ]
    ]);
    var Drum = createLucideIcon("Drum", [
      ["path", { d: "m2 2 8 8", key: "1v6059" }],
      ["path", { d: "m22 2-8 8", key: "173r8a" }],
      ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
      ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
      ["path", { d: "M12 14v8", key: "1tn2tj" }],
      ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
      ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]
    ]);
    var Drumstick = createLucideIcon("Drumstick", [
      [
        "path",
        {
          d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
          key: "1o96s0"
        }
      ],
      [
        "path",
        {
          d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
          key: "14vv5h"
        }
      ]
    ]);
    var Dumbbell = createLucideIcon("Dumbbell", [
      ["path", { d: "m6.5 6.5 11 11", key: "f7oqzb" }],
      ["path", { d: "m21 21-1-1", key: "cpc6if" }],
      ["path", { d: "m3 3 1 1", key: "d3rpuf" }],
      ["path", { d: "m18 22 4-4", key: "1e32o6" }],
      ["path", { d: "m2 6 4-4", key: "189tqz" }],
      ["path", { d: "m3 10 7-7", key: "1bxui2" }],
      ["path", { d: "m14 21 7-7", key: "16x78n" }]
    ]);
    var EarOff = createLucideIcon("EarOff", [
      ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }],
      ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
      ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }],
      ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Ear = createLucideIcon("Ear", [
      ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
      ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
    ]);
    var EggFried = createLucideIcon("EggFried", [
      ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
      [
        "path",
        {
          d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
          key: "165ef9"
        }
      ]
    ]);
    var EggOff = createLucideIcon("EggOff", [
      [
        "path",
        {
          d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
          key: "6et380"
        }
      ],
      [
        "path",
        {
          d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
          key: "gcdc3f"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Egg = createLucideIcon("Egg", [
      [
        "path",
        {
          d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
          key: "1c39pg"
        }
      ]
    ]);
    var EqualNot = createLucideIcon("EqualNot", [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
    ]);
    var Equal = createLucideIcon("Equal", [
      ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
      ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
    ]);
    var Eraser = createLucideIcon("Eraser", [
      [
        "path",
        {
          d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
          key: "182aya"
        }
      ],
      ["path", { d: "M22 21H7", key: "t4ddhn" }],
      ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
    ]);
    var Euro = createLucideIcon("Euro", [
      ["path", { d: "M4 10h12", key: "1y6xl8" }],
      ["path", { d: "M4 14h9", key: "1loblj" }],
      [
        "path",
        {
          d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
          key: "1j6lzo"
        }
      ]
    ]);
    var Expand = createLucideIcon("Expand", [
      ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
      ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
      ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
      ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
    ]);
    var ExternalLink = createLucideIcon("ExternalLink", [
      ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
      ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
      ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
    ]);
    var EyeOff2 = createLucideIcon("EyeOff", [
      ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
      [
        "path",
        {
          d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
          key: "9wicm4"
        }
      ],
      [
        "path",
        { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Eye2 = createLucideIcon("Eye", [
      ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]);
    var Facebook = createLucideIcon("Facebook", [
      [
        "path",
        { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
      ]
    ]);
    var Factory = createLucideIcon("Factory", [
      [
        "path",
        {
          d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
          key: "159hny"
        }
      ],
      ["path", { d: "M17 18h1", key: "uldtlt" }],
      ["path", { d: "M12 18h1", key: "s9uhes" }],
      ["path", { d: "M7 18h1", key: "1neino" }]
    ]);
    var Fan = createLucideIcon("Fan", [
      [
        "path",
        {
          d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
          key: "484a7f"
        }
      ],
      ["path", { d: "M12 12v.01", key: "u5ubse" }]
    ]);
    var FastForward = createLucideIcon("FastForward", [
      ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
      ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
    ]);
    var Feather = createLucideIcon("Feather", [
      ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z", key: "u4sw5n" }],
      ["line", { x1: "16", x2: "2", y1: "8", y2: "22", key: "1c47m2" }],
      ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15", key: "2fj3pr" }]
    ]);
    var FerrisWheel = createLucideIcon("FerrisWheel", [
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "M12 2v4", key: "3427ic" }],
      ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
      ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
      ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
      ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
      ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
      ["path", { d: "M8 22h8", key: "rmew8v" }],
      ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]
    ]);
    var Figma = createLucideIcon("Figma", [
      ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
      ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
      ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
      ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
      ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
    ]);
    var FileArchive = createLucideIcon("FileArchive", [
      [
        "path",
        {
          d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",
          key: "1u864v"
        }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
      ["path", { d: "M10 7V6", key: "dljcrl" }],
      ["path", { d: "M10 12v-1", key: "v7bkov" }],
      ["path", { d: "M10 18v-2", key: "1cjy8d" }]
    ]);
    var FileAudio2 = createLucideIcon("FileAudio2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2", key: "fkyf72" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3", key: "1ggdre" }],
      ["circle", { cx: "9", cy: "17", r: "1", key: "bc1fq4" }],
      ["circle", { cx: "3", cy: "17", r: "1", key: "vo6nti" }]
    ]);
    var FileAudio = createLucideIcon("FileAudio", [
      [
        "path",
        {
          d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
          key: "1013sb"
        }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z", key: "gqt63y" }],
      ["path", { d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z", key: "cf7lqx" }],
      ["path", { d: "M2 19v-3a6 6 0 0 1 12 0v3", key: "1acxgf" }]
    ]);
    var FileAxis3d = createLucideIcon("FileAxis3d", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M8 10v8h8", key: "tlaukw" }],
      ["path", { d: "m8 18 4-4", key: "12zab0" }]
    ]);
    var FileBadge2 = createLucideIcon("FileBadge2", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["path", { d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "13rien" }],
      ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5", key: "14xlky" }]
    ]);
    var FileBadge = createLucideIcon("FileBadge", [
      ["path", { d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6", key: "qtddq0" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "u0c8gj" }],
      ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5", key: "5gm2nr" }]
    ]);
    var FileBarChart2 = createLucideIcon("FileBarChart2", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M12 18v-6", key: "17g6i2" }],
      ["path", { d: "M8 18v-1", key: "zg0ygc" }],
      ["path", { d: "M16 18v-3", key: "j5jt4h" }]
    ]);
    var FileBarChart = createLucideIcon("FileBarChart", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M12 18v-4", key: "q1q25u" }],
      ["path", { d: "M8 18v-2", key: "qcmpov" }],
      ["path", { d: "M16 18v-6", key: "15y0np" }]
    ]);
    var FileBox = createLucideIcon("FileBox", [
      ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "h7jej2" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      [
        "path",
        {
          d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",
          key: "f4a3oc"
        }
      ],
      ["path", { d: "m7 17-4.74-2.85", key: "etm6su" }],
      ["path", { d: "m7 17 4.74-2.85", key: "5xuooz" }],
      ["path", { d: "M7 17v5", key: "1yj1jh" }]
    ]);
    var FileCheck2 = createLucideIcon("FileCheck2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
    ]);
    var FileCheck = createLucideIcon("FileCheck", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
    ]);
    var FileClock = createLucideIcon("FileClock", [
      [
        "path",
        {
          d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
          key: "9lo3o3"
        }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
      ["path", { d: "M9.5 17.5 8 16.25V14", key: "1o80t2" }]
    ]);
    var FileCode2 = createLucideIcon("FileCode2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
      ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
    ]);
    var FileCode = createLucideIcon("FileCode", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
      ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
    ]);
    var FileCog = createLucideIcon("FileCog", [
      ["circle", { cx: "6", cy: "13", r: "3", key: "1z65bp" }],
      ["path", { d: "m9.7 14.4-.9-.3", key: "o1luaq" }],
      ["path", { d: "m3.2 11.9-.9-.3", key: "qm3zk5" }],
      ["path", { d: "m4.6 16.7.3-.9", key: "1o0ect" }],
      ["path", { d: "m7.6 16.7-.4-1", key: "1ym8d1" }],
      ["path", { d: "m4.8 10.3-.4-1", key: "18q26g" }],
      ["path", { d: "m2.3 14.6 1-.4", key: "121m88" }],
      ["path", { d: "m8.7 11.8 1-.4", key: "9meqp2" }],
      ["path", { d: "m7.4 9.3-.3.9", key: "136qqn" }],
      ["path", { d: "M14 2v6h6", key: "1kof46" }],
      [
        "path",
        { d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5", key: "xwe04" }
      ]
    ]);
    var FileDiff = createLucideIcon("FileDiff", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "M9 10h6", key: "9gxzsh" }],
      ["path", { d: "M9 17h6", key: "r8uit2" }]
    ]);
    var FileDigit = createLucideIcon("FileDigit", [
      ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2", key: "jm304g" }],
      ["path", { d: "M14 2v6h6", key: "1kof46" }],
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["path", { d: "M10 12h2v6", key: "12zw74" }],
      ["path", { d: "M10 18h4", key: "1ulq68" }]
    ]);
    var FileDown = createLucideIcon("FileDown", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M12 18v-6", key: "17g6i2" }],
      ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
    ]);
    var FileEdit = createLucideIcon("FileEdit", [
      ["path", { d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5", key: "1bg6eb" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      [
        "path",
        { d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z", key: "1rgxu8" }
      ]
    ]);
    var FileHeart = createLucideIcon("FileHeart", [
      ["path", { d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "dba9qu" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      [
        "path",
        {
          d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
          key: "1c1fso"
        }
      ]
    ]);
    var FileImage = createLucideIcon("FileImage", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["circle", { cx: "10", cy: "13", r: "2", key: "6v46hv" }],
      ["path", { d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22", key: "17vly1" }]
    ]);
    var FileInput = createLucideIcon("FileInput", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M2 15h10", key: "jfw4w8" }],
      ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
    ]);
    var FileJson2 = createLucideIcon("FileJson2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      [
        "path",
        { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "fq0c9t" }
      ],
      [
        "path",
        { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "4gibmv" }
      ]
    ]);
    var FileJson = createLucideIcon("FileJson", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      [
        "path",
        { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
      ],
      [
        "path",
        { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
      ]
    ]);
    var FileKey2 = createLucideIcon("FileKey2", [
      ["path", { d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nw5t3" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
      ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
      ["path", { d: "m9 11 1 1", key: "wa6s5q" }]
    ]);
    var FileKey = createLucideIcon("FileKey", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
      ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
      ["path", { d: "m15 11 1 1", key: "1bsyx3" }]
    ]);
    var FileLineChart = createLucideIcon("FileLineChart", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]
    ]);
    var FileLock2 = createLucideIcon("FileLock2", [
      ["path", { d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "gwd2r9" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1", key: "10y5wo" }],
      ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2", key: "1pdxzg" }]
    ]);
    var FileLock = createLucideIcon("FileLock", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1", key: "3yr8at" }],
      ["path", { d: "M15 12v-2a3 3 0 1 0-6 0v2", key: "1nqnhw" }]
    ]);
    var FileMinus2 = createLucideIcon("FileMinus2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M3 15h6", key: "4e2qda" }]
    ]);
    var FileMinus = createLucideIcon("FileMinus", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
    ]);
    var FileMusic = createLucideIcon("FileMusic", [
      ["circle", { cx: "14", cy: "16", r: "2", key: "1bzzi3" }],
      ["circle", { cx: "6", cy: "18", r: "2", key: "1fncim" }],
      ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5", key: "skc018" }],
      ["path", { d: "M8 18v-7.7L16 9v7", key: "1oie6o" }]
    ]);
    var FileOutput = createLucideIcon("FileOutput", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M2 15h10", key: "jfw4w8" }],
      ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
    ]);
    var FilePieChart = createLucideIcon("FilePieChart", [
      ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "zhyrez" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29", key: "f1t5jc" }],
      ["path", { d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z", key: "7q54ec" }]
    ]);
    var FilePlus2 = createLucideIcon("FilePlus2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M3 15h6", key: "4e2qda" }],
      ["path", { d: "M6 12v6", key: "1u72j0" }]
    ]);
    var FilePlus = createLucideIcon("FilePlus", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["line", { x1: "12", x2: "12", y1: "18", y2: "12", key: "1tsf04" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
    ]);
    var FileQuestion = createLucideIcon("FileQuestion", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      [
        "path",
        {
          d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
          key: "1umxtm"
        }
      ],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ]);
    var FileScan = createLucideIcon("FileScan", [
      ["path", { d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5", key: "uvikde" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }],
      ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }],
      ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
      ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }]
    ]);
    var FileSearch2 = createLucideIcon("FileSearch2", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
      ["path", { d: "M13.25 16.25 15 18", key: "9eh8bj" }]
    ]);
    var FileSearch = createLucideIcon("FileSearch", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "ychnub" }],
      ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }]
    ]);
    var FileSignature = createLucideIcon("FileSignature", [
      [
        "path",
        { d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5", key: "kd5d3" }
      ],
      ["path", { d: "M8 18h1", key: "13wk12" }],
      [
        "path",
        { d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z", key: "johvi5" }
      ]
    ]);
    var FileSpreadsheet = createLucideIcon("FileSpreadsheet", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M8 13h2", key: "yr2amv" }],
      ["path", { d: "M8 17h2", key: "2yhykz" }],
      ["path", { d: "M14 13h2", key: "un5t4a" }],
      ["path", { d: "M14 17h2", key: "10kma7" }]
    ]);
    var FileStack = createLucideIcon("FileStack", [
      ["path", { d: "M16 2v5h5", key: "kt2in0" }],
      [
        "path",
        {
          d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z",
          key: "1km23n"
        }
      ],
      ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }],
      ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]
    ]);
    var FileSymlink = createLucideIcon("FileSymlink", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7", key: "138uzh" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
      ["path", { d: "M4 18v-1a2 2 0 0 1 2-2h6", key: "5uz2rn" }]
    ]);
    var FileTerminal = createLucideIcon("FileTerminal", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
      ["path", { d: "M12 18h4", key: "1wd2n7" }]
    ]);
    var FileText = createLucideIcon("FileText", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
      ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
      ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
    ]);
    var FileType2 = createLucideIcon("FileType2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M2 13v-1h6v1", key: "1dh9dg" }],
      ["path", { d: "M4 18h2", key: "1xrofg" }],
      ["path", { d: "M5 12v6", key: "150t9c" }]
    ]);
    var FileType = createLucideIcon("FileType", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M9 13v-1h6v1", key: "1bb014" }],
      ["path", { d: "M11 18h2", key: "12mj7e" }],
      ["path", { d: "M12 12v6", key: "3ahymv" }]
    ]);
    var FileUp = createLucideIcon("FileUp", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M12 12v6", key: "3ahymv" }],
      ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
    ]);
    var FileVideo2 = createLucideIcon("FileVideo2", [
      ["path", { d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nti49" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5", key: "t7cp39" }],
      ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1", key: "1a6c1e" }]
    ]);
    var FileVideo = createLucideIcon("FileVideo", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
    ]);
    var FileVolume2 = createLucideIcon("FileVolume2", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5", key: "joawwx" }],
      ["path", { d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1f2wyw" }],
      ["path", { d: "M8 15h.01", key: "a7atzg" }]
    ]);
    var FileVolume = createLucideIcon("FileVolume", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["path", { d: "m7 10-3 2H2v4h2l3 2v-8Z", key: "tazg57" }],
      ["path", { d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1yej3m" }]
    ]);
    var FileWarning = createLucideIcon("FileWarning", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["path", { d: "M12 9v4", key: "juzpu7" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ]);
    var FileX2 = createLucideIcon("FileX2", [
      ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
      ["path", { d: "M14 2v6h6", key: "1kof46" }],
      ["path", { d: "m3 12.5 5 5", key: "1qls4r" }],
      ["path", { d: "m8 12.5-5 5", key: "b853mi" }]
    ]);
    var FileX = createLucideIcon("FileX", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
      ["line", { x1: "9.5", x2: "14.5", y1: "12.5", y2: "17.5", key: "izs6du" }],
      ["line", { x1: "14.5", x2: "9.5", y1: "12.5", y2: "17.5", key: "1lehlj" }]
    ]);
    var File = createLucideIcon("File", [
      [
        "path",
        { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
      ],
      ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }]
    ]);
    var Files = createLucideIcon("Files", [
      [
        "path",
        {
          d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
          key: "cennsq"
        }
      ],
      ["path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8", key: "ms809a" }],
      ["path", { d: "M15 2v5h5", key: "qq6kwv" }]
    ]);
    var Film = createLucideIcon("Film", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M7 3v18", key: "bbkbws" }],
      ["path", { d: "M3 7.5h4", key: "zfgn84" }],
      ["path", { d: "M3 12h18", key: "1i2n21" }],
      ["path", { d: "M3 16.5h4", key: "1230mu" }],
      ["path", { d: "M17 3v18", key: "in4fa5" }],
      ["path", { d: "M17 7.5h4", key: "myr1c1" }],
      ["path", { d: "M17 16.5h4", key: "go4c1d" }]
    ]);
    var FilterX = createLucideIcon("FilterX", [
      ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055", key: "1fi1da" }],
      ["path", { d: "m22 3-5 5", key: "12jva0" }],
      ["path", { d: "m17 3 5 5", key: "k36vhe" }]
    ]);
    var Filter = createLucideIcon("Filter", [
      ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
    ]);
    var Fingerprint = createLucideIcon("Fingerprint", [
      ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" }],
      ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" }],
      ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
      ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
      ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
      ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
      ["path", { d: "M2 16h.01", key: "1gqxmh" }],
      ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
      ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" }]
    ]);
    var FishOff = createLucideIcon("FishOff", [
      [
        "path",
        {
          d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
          key: "1j1hse"
        }
      ],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
          key: "1q46z8"
        }
      ],
      [
        "path",
        {
          d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
          key: "1407gh"
        }
      ]
    ]);
    var FishSymbol = createLucideIcon("FishSymbol", [
      ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]
    ]);
    var Fish = createLucideIcon("Fish", [
      [
        "path",
        {
          d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
          key: "15baut"
        }
      ],
      ["path", { d: "M18 12v.5", key: "18hhni" }],
      ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
      [
        "path",
        {
          d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
          key: "l9di03"
        }
      ],
      [
        "path",
        { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
      ],
      [
        "path",
        { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
      ]
    ]);
    var FlagOff = createLucideIcon("FlagOff", [
      ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11", key: "9rwyz9" }],
      ["path", { d: "M4 22V4", key: "1plyxx" }],
      ["path", { d: "M4 15s1-1 4-1 5 2 8 2", key: "1myooe" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var FlagTriangleLeft = createLucideIcon("FlagTriangleLeft", [
      ["path", { d: "M17 22V2L7 7l10 5", key: "1rmf0r" }]
    ]);
    var FlagTriangleRight = createLucideIcon("FlagTriangleRight", [
      ["path", { d: "M7 22V2l10 5-10 5", key: "17n18y" }]
    ]);
    var Flag = createLucideIcon("Flag", [
      ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
      ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
    ]);
    var FlameKindling = createLucideIcon("FlameKindling", [
      [
        "path",
        {
          d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
          key: "1ir223"
        }
      ],
      ["path", { d: "m5 22 14-4", key: "1brv4h" }],
      ["path", { d: "m5 18 14 4", key: "lgyyje" }]
    ]);
    var Flame = createLucideIcon("Flame", [
      [
        "path",
        {
          d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
          key: "96xj49"
        }
      ]
    ]);
    var FlashlightOff = createLucideIcon("FlashlightOff", [
      ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4", key: "1r120k" }],
      ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1", key: "dz1920" }],
      ["line", { x1: "11", x2: "18", y1: "6", y2: "6", key: "bi1vpe" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Flashlight = createLucideIcon("Flashlight", [
      [
        "path",
        {
          d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
          key: "1orkel"
        }
      ],
      ["line", { x1: "6", x2: "18", y1: "6", y2: "6", key: "1z11jq" }],
      ["line", { x1: "12", x2: "12", y1: "12", y2: "12", key: "1f4yc1" }]
    ]);
    var FlaskConicalOff = createLucideIcon("FlaskConicalOff", [
      [
        "path",
        {
          d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
          key: "59ek9y"
        }
      ],
      ["path", { d: "M10 2v2.343", key: "15t272" }],
      ["path", { d: "M14 2v6.343", key: "sxr80q" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }],
      ["path", { d: "M7 16h9", key: "t5njau" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var FlaskConical = createLucideIcon("FlaskConical", [
      [
        "path",
        {
          d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
          key: "pzvekw"
        }
      ],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }],
      ["path", { d: "M7 16h10", key: "wp8him" }]
    ]);
    var FlaskRound = createLucideIcon("FlaskRound", [
      ["path", { d: "M10 2v7.31", key: "5d1hyh" }],
      ["path", { d: "M14 9.3V1.99", key: "14k4l0" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }],
      ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0", key: "1r8fvy" }],
      ["path", { d: "M5.52 16h12.96", key: "46hh1i" }]
    ]);
    var FlipHorizontal2 = createLucideIcon("FlipHorizontal2", [
      ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
      ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "M12 14v2", key: "8jcxud" }],
      ["path", { d: "M12 8v2", key: "1woqiv" }],
      ["path", { d: "M12 2v2", key: "tus03m" }]
    ]);
    var FlipHorizontal = createLucideIcon("FlipHorizontal", [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }],
      ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "M12 14v2", key: "8jcxud" }],
      ["path", { d: "M12 8v2", key: "1woqiv" }],
      ["path", { d: "M12 2v2", key: "tus03m" }]
    ]);
    var FlipVertical2 = createLucideIcon("FlipVertical2", [
      ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
      ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
      ["path", { d: "M4 12H2", key: "rhcxmi" }],
      ["path", { d: "M10 12H8", key: "s88cx1" }],
      ["path", { d: "M16 12h-2", key: "10asgb" }],
      ["path", { d: "M22 12h-2", key: "14jgyd" }]
    ]);
    var FlipVertical = createLucideIcon("FlipVertical", [
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }],
      ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }],
      ["path", { d: "M4 12H2", key: "rhcxmi" }],
      ["path", { d: "M10 12H8", key: "s88cx1" }],
      ["path", { d: "M16 12h-2", key: "10asgb" }],
      ["path", { d: "M22 12h-2", key: "14jgyd" }]
    ]);
    var Flower2 = createLucideIcon("Flower2", [
      [
        "path",
        {
          d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
          key: "3pnvol"
        }
      ],
      ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
      ["path", { d: "M12 10v12", key: "6ubwww" }],
      ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
      ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
    ]);
    var Flower = createLucideIcon("Flower", [
      [
        "path",
        {
          d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
          key: "51z86h"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["path", { d: "m8 16 1.5-1.5", key: "ce6zph" }],
      ["path", { d: "M14.5 9.5 16 8", key: "1kzrzb" }],
      ["path", { d: "m8 8 1.5 1.5", key: "1yv88w" }],
      ["path", { d: "M14.5 14.5 16 16", key: "12xhjh" }]
    ]);
    var Focus = createLucideIcon("Focus", [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
    ]);
    var FoldHorizontal = createLucideIcon("FoldHorizontal", [
      ["path", { d: "M2 12h6", key: "1wqiqv" }],
      ["path", { d: "M22 12h-6", key: "1eg9hc" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 8v2", key: "1woqiv" }],
      ["path", { d: "M12 14v2", key: "8jcxud" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
      ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]
    ]);
    var FoldVertical = createLucideIcon("FoldVertical", [
      ["path", { d: "M12 22v-6", key: "6o8u61" }],
      ["path", { d: "M12 8V2", key: "1wkif3" }],
      ["path", { d: "M4 12H2", key: "rhcxmi" }],
      ["path", { d: "M10 12H8", key: "s88cx1" }],
      ["path", { d: "M16 12h-2", key: "10asgb" }],
      ["path", { d: "M22 12h-2", key: "14jgyd" }],
      ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
      ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]
    ]);
    var FolderArchive = createLucideIcon("FolderArchive", [
      ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
      [
        "path",
        {
          d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
          key: "1jj40k"
        }
      ],
      ["path", { d: "M15 11v-1", key: "cntcp" }],
      ["path", { d: "M15 17v-2", key: "1279jj" }]
    ]);
    var FolderCheck = createLucideIcon("FolderCheck", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
    ]);
    var FolderClock = createLucideIcon("FolderClock", [
      ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
      [
        "path",
        {
          d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
          key: "1urifu"
        }
      ],
      ["path", { d: "M16 14v2l1 1", key: "xth2jh" }]
    ]);
    var FolderClosed = createLucideIcon("FolderClosed", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "M2 10h20", key: "1ir3d8" }]
    ]);
    var FolderCog = createLucideIcon("FolderCog", [
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      [
        "path",
        {
          d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
          key: "1k8050"
        }
      ],
      ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
      ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
      ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
      ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
      ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
      ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
      ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
      ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }]
    ]);
    var FolderDot = createLucideIcon("FolderDot", [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
          key: "1fr9dc"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]
    ]);
    var FolderDown = createLucideIcon("FolderDown", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
    ]);
    var FolderEdit = createLucideIcon("FolderEdit", [
      ["path", { d: "M8.4 10.6a2.1 2.1 0 1 1 2.99 2.98L6 19l-4 1 1-3.9Z", key: "10ocjb" }],
      [
        "path",
        {
          d: "M2 11.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
          key: "1h3cz8"
        }
      ]
    ]);
    var FolderGit2 = createLucideIcon("FolderGit2", [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
          key: "1w6njk"
        }
      ],
      ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
      ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
      ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
    ]);
    var FolderGit = createLucideIcon("FolderGit", [
      ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "M14 13h3", key: "1dgedf" }],
      ["path", { d: "M7 13h3", key: "1pygq7" }]
    ]);
    var FolderHeart = createLucideIcon("FolderHeart", [
      [
        "path",
        {
          d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
          key: "6hud8k"
        }
      ],
      [
        "path",
        {
          d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",
          key: "vgq86i"
        }
      ]
    ]);
    var FolderInput = createLucideIcon("FolderInput", [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
          key: "fm4g5t"
        }
      ],
      ["path", { d: "M2 13h10", key: "pgb2dq" }],
      ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
    ]);
    var FolderKanban = createLucideIcon("FolderKanban", [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
          key: "1fr9dc"
        }
      ],
      ["path", { d: "M8 10v4", key: "tgpxqk" }],
      ["path", { d: "M12 10v2", key: "hh53o1" }],
      ["path", { d: "M16 10v6", key: "1d6xys" }]
    ]);
    var FolderKey = createLucideIcon("FolderKey", [
      ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
          key: "3hgo9p"
        }
      ],
      ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
      ["path", { d: "m21 15 1 1", key: "1ejcpy" }]
    ]);
    var FolderLock = createLucideIcon("FolderLock", [
      ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }],
      [
        "path",
        {
          d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
          key: "1w6v7t"
        }
      ],
      ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]
    ]);
    var FolderMinus = createLucideIcon("FolderMinus", [
      ["path", { d: "M9 13h6", key: "1uhe8q" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]);
    var FolderOpenDot = createLucideIcon("FolderOpenDot", [
      [
        "path",
        {
          d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
          key: "1nmvlm"
        }
      ],
      ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]
    ]);
    var FolderOpen = createLucideIcon("FolderOpen", [
      [
        "path",
        {
          d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
          key: "usdka0"
        }
      ]
    ]);
    var FolderOutput = createLucideIcon("FolderOutput", [
      [
        "path",
        {
          d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
          key: "jm8npq"
        }
      ],
      ["path", { d: "M2 13h10", key: "pgb2dq" }],
      ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
    ]);
    var FolderPlus = createLucideIcon("FolderPlus", [
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "M9 13h6", key: "1uhe8q" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]);
    var FolderRoot = createLucideIcon("FolderRoot", [
      [
        "path",
        {
          d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
          key: "1fr9dc"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
      ["path", { d: "M12 15v5", key: "11xva1" }]
    ]);
    var FolderSearch2 = createLucideIcon("FolderSearch2", [
      ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]
    ]);
    var FolderSearch = createLucideIcon("FolderSearch", [
      ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
      [
        "path",
        {
          d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
          key: "1bw5m7"
        }
      ],
      ["path", { d: "m21 21-1.5-1.5", key: "3sg1j" }]
    ]);
    var FolderSymlink = createLucideIcon("FolderSymlink", [
      [
        "path",
        {
          d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
          key: "1or2t8"
        }
      ],
      ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }],
      ["path", { d: "M2 16v-1a2 2 0 0 1 2-2h6", key: "pgw8ln" }]
    ]);
    var FolderSync = createLucideIcon("FolderSync", [
      [
        "path",
        {
          d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1",
          key: "1rkwto"
        }
      ],
      ["path", { d: "M12 10v4h4", key: "1czhmt" }],
      [
        "path",
        { d: "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5", key: "25wejs" }
      ],
      ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
      [
        "path",
        { d: "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5", key: "vlp1j8" }
      ]
    ]);
    var FolderTree = createLucideIcon("FolderTree", [
      [
        "path",
        {
          d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
          key: "hod4my"
        }
      ],
      [
        "path",
        {
          d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
          key: "w4yl2u"
        }
      ],
      ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
      ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
    ]);
    var FolderUp = createLucideIcon("FolderUp", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
    ]);
    var FolderX = createLucideIcon("FolderX", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ],
      ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
      ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]
    ]);
    var Folder = createLucideIcon("Folder", [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]);
    var Folders = createLucideIcon("Folders", [
      [
        "path",
        {
          d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
          key: "4u7rpt"
        }
      ],
      ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14", key: "1eicx1" }]
    ]);
    var Footprints = createLucideIcon("Footprints", [
      [
        "path",
        {
          d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
          key: "1dudjm"
        }
      ],
      [
        "path",
        {
          d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
          key: "l2t8xc"
        }
      ],
      ["path", { d: "M16 17h4", key: "1dejxt" }],
      ["path", { d: "M4 13h4", key: "1bwh8b" }]
    ]);
    var Forklift = createLucideIcon("Forklift", [
      ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
      ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
      ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
      ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]
    ]);
    var FormInput = createLucideIcon("FormInput", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M17 12h.01", key: "1m0b6t" }],
      ["path", { d: "M7 12h.01", key: "eqddd0" }]
    ]);
    var Forward = createLucideIcon("Forward", [
      ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
      ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
    ]);
    var Frame = createLucideIcon("Frame", [
      ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
      ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
      ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
      ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
    ]);
    var Framer = createLucideIcon("Framer", [
      ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]
    ]);
    var Frown = createLucideIcon("Frown", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
    ]);
    var Fuel = createLucideIcon("Fuel", [
      ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
      ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
      ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
      [
        "path",
        {
          d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
          key: "8ur5zv"
        }
      ]
    ]);
    var Fullscreen = createLucideIcon("Fullscreen", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
    ]);
    var FunctionSquare = createLucideIcon("FunctionSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
      ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
    ]);
    var GalleryHorizontalEnd = createLucideIcon("GalleryHorizontalEnd", [
      ["path", { d: "M2 7v10", key: "a2pl2d" }],
      ["path", { d: "M6 5v14", key: "1kq3d7" }],
      ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
    ]);
    var GalleryHorizontal = createLucideIcon("GalleryHorizontal", [
      ["path", { d: "M2 3v18", key: "pzttux" }],
      ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }],
      ["path", { d: "M22 3v18", key: "6jf3v" }]
    ]);
    var GalleryThumbnails = createLucideIcon("GalleryThumbnails", [
      ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }],
      ["path", { d: "M4 21h1", key: "16zlid" }],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }],
      ["path", { d: "M19 21h1", key: "edywat" }]
    ]);
    var GalleryVerticalEnd = createLucideIcon("GalleryVerticalEnd", [
      ["path", { d: "M7 2h10", key: "nczekb" }],
      ["path", { d: "M5 6h14", key: "u2x4p" }],
      ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]
    ]);
    var GalleryVertical = createLucideIcon("GalleryVertical", [
      ["path", { d: "M3 2h18", key: "15qxfx" }],
      ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }],
      ["path", { d: "M3 22h18", key: "8prr45" }]
    ]);
    var Gamepad2 = createLucideIcon("Gamepad2", [
      ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
      ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
      ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
      ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
      [
        "path",
        {
          d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
          key: "mfqc10"
        }
      ]
    ]);
    var Gamepad = createLucideIcon("Gamepad", [
      ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
      ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
      ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
      ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
    ]);
    var GanttChartSquare = createLucideIcon("GanttChartSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M9 8h7", key: "kbo1nt" }],
      ["path", { d: "M8 12h6", key: "ikassy" }],
      ["path", { d: "M11 16h5", key: "oq65wt" }]
    ]);
    var GanttChart = createLucideIcon("GanttChart", [
      ["path", { d: "M8 6h10", key: "9lnwnk" }],
      ["path", { d: "M6 12h9", key: "1g9pqf" }],
      ["path", { d: "M11 18h7", key: "c8dzvl" }]
    ]);
    var GaugeCircle = createLucideIcon("GaugeCircle", [
      ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]
    ]);
    var Gauge = createLucideIcon("Gauge", [
      ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
      ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
    ]);
    var Gavel = createLucideIcon("Gavel", [
      [
        "path",
        {
          d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10",
          key: "c9cbz0"
        }
      ],
      ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
      ["path", { d: "m8 8 6-6", key: "18bi4p" }],
      ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
      ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
    ]);
    var Gem = createLucideIcon("Gem", [
      ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
      ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
      ["path", { d: "M2 9h20", key: "16fsjt" }]
    ]);
    var Ghost = createLucideIcon("Ghost", [
      ["path", { d: "M9 10h.01", key: "qbtxuw" }],
      ["path", { d: "M15 10h.01", key: "1qmjsl" }],
      [
        "path",
        {
          d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
          key: "uwwb07"
        }
      ]
    ]);
    var Gift = createLucideIcon("Gift", [
      ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
      ["path", { d: "M12 8v13", key: "1c76mn" }],
      ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
      [
        "path",
        {
          d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
          key: "1ihvrl"
        }
      ]
    ]);
    var GitBranchPlus = createLucideIcon("GitBranchPlus", [
      ["path", { d: "M6 3v12", key: "qpgusn" }],
      ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
      ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
      ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
      ["path", { d: "M18 15v6", key: "9wciyi" }],
      ["path", { d: "M21 18h-6", key: "139f0c" }]
    ]);
    var GitBranch = createLucideIcon("GitBranch", [
      ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
      ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
      ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
      ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
    ]);
    var GitCommitHorizontal = createLucideIcon("GitCommitHorizontal", [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
      ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
    ]);
    var GitCommitVertical = createLucideIcon("GitCommitVertical", [
      ["path", { d: "M12 3v6", key: "1holv5" }],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["path", { d: "M12 15v6", key: "a9ows0" }]
    ]);
    var GitCompareArrows = createLucideIcon("GitCompareArrows", [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
      ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
      ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
    ]);
    var GitCompare = createLucideIcon("GitCompare", [
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
      ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
    ]);
    var GitFork = createLucideIcon("GitFork", [
      ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
      ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
      ["path", { d: "M12 12v3", key: "158kv8" }]
    ]);
    var GitGraph = createLucideIcon("GitGraph", [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M5 9v6", key: "158jrl" }],
      ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
      ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]
    ]);
    var GitMerge = createLucideIcon("GitMerge", [
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
    ]);
    var GitPullRequestArrow = createLucideIcon("GitPullRequestArrow", [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M5 9v12", key: "ih889a" }],
      ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
    ]);
    var GitPullRequestClosed = createLucideIcon("GitPullRequestClosed", [
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M6 9v12", key: "1sc30k" }],
      ["path", { d: "m21 3-6 6", key: "16nqsk" }],
      ["path", { d: "m21 9-6-6", key: "9j17rh" }],
      ["path", { d: "M18 11.5V15", key: "65xf6f" }],
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
    ]);
    var GitPullRequestCreateArrow = createLucideIcon("GitPullRequestCreateArrow", [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M5 9v12", key: "ih889a" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
      ["path", { d: "M19 15v6", key: "10aioa" }],
      ["path", { d: "M22 18h-6", key: "1d5gi5" }]
    ]);
    var GitPullRequestCreate = createLucideIcon("GitPullRequestCreate", [
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M6 9v12", key: "1sc30k" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
      ["path", { d: "M18 15v6", key: "9wciyi" }],
      ["path", { d: "M21 18h-6", key: "139f0c" }]
    ]);
    var GitPullRequestDraft = createLucideIcon("GitPullRequestDraft", [
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M18 6V5", key: "1oao2s" }],
      ["path", { d: "M18 11v-1", key: "11c8tz" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
    ]);
    var GitPullRequest = createLucideIcon("GitPullRequest", [
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
      ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
    ]);
    var Github = createLucideIcon("Github", [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
          key: "tonef"
        }
      ],
      ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
    ]);
    var Gitlab = createLucideIcon("Gitlab", [
      [
        "path",
        {
          d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
          key: "148pdi"
        }
      ]
    ]);
    var GlassWater = createLucideIcon("GlassWater", [
      [
        "path",
        { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z", key: "48rfw3" }
      ],
      ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
    ]);
    var Glasses = createLucideIcon("Glasses", [
      ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
      ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
      ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
      ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
      ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]
    ]);
    var Globe2 = createLucideIcon("Globe2", [
      ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
      [
        "path",
        {
          d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",
          key: "1fi5u6"
        }
      ],
      [
        "path",
        { d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "xsiumc" }
      ],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ]);
    var Globe = createLucideIcon("Globe", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]);
    var Goal = createLucideIcon("Goal", [
      ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
      ["path", { d: "M20.55 10.23A9 9 0 1 1 8 4.94", key: "5988i3" }],
      ["path", { d: "M8 10a5 5 0 1 0 8.9 2.02", key: "1hq7ot" }]
    ]);
    var Grab = createLucideIcon("Grab", [
      ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "n5nng" }],
      ["path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "185i9d" }],
      ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "11pz95" }],
      ["path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "16yk7l" }],
      [
        "path",
        { d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "nzvb1c" }
      ]
    ]);
    var GraduationCap = createLucideIcon("GraduationCap", [
      ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
      ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }]
    ]);
    var Grape = createLucideIcon("Grape", [
      ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
      ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
      ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
      ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
      ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
      ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
      ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
      ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
      ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]
    ]);
    var Grid2x2 = createLucideIcon("Grid2x2", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M3 12h18", key: "1i2n21" }],
      ["path", { d: "M12 3v18", key: "108xh3" }]
    ]);
    var Grid3x3 = createLucideIcon("Grid3x3", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M3 15h18", key: "5xshup" }],
      ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ["path", { d: "M15 3v18", key: "14nvp0" }]
    ]);
    var GripHorizontal = createLucideIcon("GripHorizontal", [
      ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
      ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
      ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
      ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
      ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
      ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
    ]);
    var GripVertical = createLucideIcon("GripVertical", [
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
      ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
    ]);
    var Grip = createLucideIcon("Grip", [
      ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
      ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
      ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
      ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
      ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
      ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
      ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
    ]);
    var Group = createLucideIcon("Group", [
      ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
      ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
      ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
      ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
      ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
      ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
    ]);
    var Guitar = createLucideIcon("Guitar", [
      ["path", { d: "m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z", key: "15ixgv" }],
      ["path", { d: "m17 7-5.1 5.1", key: "l9guh7" }],
      ["circle", { cx: "11.5", cy: "12.5", r: ".5", key: "1evg0a" }],
      [
        "path",
        {
          d: "M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",
          key: "x9fguj"
        }
      ],
      ["path", { d: "m6 16 2 2", key: "16qmzd" }]
    ]);
    var Hammer = createLucideIcon("Hammer", [
      [
        "path",
        { d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9", key: "1afvon" }
      ],
      ["path", { d: "M17.64 15 22 10.64", key: "zsji6s" }],
      [
        "path",
        {
          d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
          key: "lehyy1"
        }
      ]
    ]);
    var HandMetal = createLucideIcon("HandMetal", [
      ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "7eki13" }],
      ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
      ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
      [
        "path",
        {
          d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
          key: "t1skq1"
        }
      ]
    ]);
    var Hand = createLucideIcon("Hand", [
      ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
      ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
      ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
      [
        "path",
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
          key: "1s1gnw"
        }
      ]
    ]);
    var HardDriveDownload = createLucideIcon("HardDriveDownload", [
      ["path", { d: "M12 2v8", key: "1q4o3n" }],
      ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "M10 18h.01", key: "h775k" }]
    ]);
    var HardDriveUpload = createLucideIcon("HardDriveUpload", [
      ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
      ["path", { d: "M12 2v8", key: "1q4o3n" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "M10 18h.01", key: "h775k" }]
    ]);
    var HardDrive = createLucideIcon("HardDrive", [
      ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ],
      ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
      ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
    ]);
    var HardHat = createLucideIcon("HardHat", [
      [
        "path",
        {
          d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
          key: "1dej2m"
        }
      ],
      ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
      ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0", key: "1uc279" }],
      ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3", key: "1j9mnm" }]
    ]);
    var Hash = createLucideIcon("Hash", [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
    ]);
    var Haze = createLucideIcon("Haze", [
      ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
      ["path", { d: "M2 13h2", key: "13gyu8" }],
      ["path", { d: "M20 13h2", key: "16rner" }],
      ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
      ["path", { d: "M22 17H2", key: "1gtaj3" }],
      ["path", { d: "M22 21H2", key: "1gy6en" }],
      ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
      ["path", { d: "M12 5V2.5", key: "1vytko" }]
    ]);
    var HdmiPort = createLucideIcon("HdmiPort", [
      [
        "path",
        {
          d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
          key: "2128wb"
        }
      ],
      ["path", { d: "M7.5 12h9", key: "1t0ckc" }]
    ]);
    var Heading1 = createLucideIcon("Heading1", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
    ]);
    var Heading2 = createLucideIcon("Heading2", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
    ]);
    var Heading3 = createLucideIcon("Heading3", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
      ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
    ]);
    var Heading4 = createLucideIcon("Heading4", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 10v4h4", key: "13sv97" }],
      ["path", { d: "M21 10v8", key: "1kdml4" }]
    ]);
    var Heading5 = createLucideIcon("Heading5", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
      [
        "path",
        { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
      ]
    ]);
    var Heading6 = createLucideIcon("Heading6", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
      ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
    ]);
    var Heading = createLucideIcon("Heading", [
      ["path", { d: "M6 12h12", key: "8npq4p" }],
      ["path", { d: "M6 20V4", key: "1w1bmo" }],
      ["path", { d: "M18 20V4", key: "o2hl4u" }]
    ]);
    var Headphones = createLucideIcon("Headphones", [
      [
        "path",
        {
          d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
          key: "1xhozi"
        }
      ]
    ]);
    var HeartCrack = createLucideIcon("HeartCrack", [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
          key: "c3ymky"
        }
      ],
      ["path", { d: "m12 13-1-1 2-2-3-3 2-2", key: "xjdxli" }]
    ]);
    var HeartHandshake = createLucideIcon("HeartHandshake", [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
          key: "c3ymky"
        }
      ],
      [
        "path",
        {
          d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
          key: "12sd6o"
        }
      ],
      ["path", { d: "m18 15-2-2", key: "60u0ii" }],
      ["path", { d: "m15 18-2-2", key: "6p76be" }]
    ]);
    var HeartOff = createLucideIcon("HeartOff", [
      ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
      [
        "path",
        { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35", key: "3mpagl" }
      ],
      [
        "path",
        {
          d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
          key: "1gh3v3"
        }
      ]
    ]);
    var HeartPulse = createLucideIcon("HeartPulse", [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
          key: "c3ymky"
        }
      ],
      ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
    ]);
    var Heart = createLucideIcon("Heart", [
      [
        "path",
        {
          d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
          key: "c3ymky"
        }
      ]
    ]);
    var HelpCircle = createLucideIcon("HelpCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ]);
    var HelpingHand = createLucideIcon("HelpingHand", [
      [
        "path",
        {
          d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19",
          key: "nitrv7"
        }
      ],
      ["path", { d: "m2 14 6 6", key: "g6j1uo" }]
    ]);
    var Hexagon = createLucideIcon("Hexagon", [
      [
        "path",
        {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
          key: "yt0hxn"
        }
      ]
    ]);
    var Highlighter = createLucideIcon("Highlighter", [
      ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
      ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
    ]);
    var History = createLucideIcon("History", [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
    ]);
    var Home = createLucideIcon("Home", [
      ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
      ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
    ]);
    var HopOff = createLucideIcon("HopOff", [
      ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226", key: "10j95a" }],
      ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
      ["path", { d: "M17.5 17.5c-2.5 0-4 0-6-1", key: "11elt5" }],
      ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5", key: "13ezvz" }],
      ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
      ["path", { d: "M22 22c-2 0-3.5-.5-5.5-1.5", key: "1n8vbj" }],
      [
        "path",
        {
          d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",
          key: "1h85u8"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Hop = createLucideIcon("Hop", [
      ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1", key: "l0z2za" }],
      ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
      ["path", { d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1", key: "10xoad" }],
      ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5", key: "1a4gpx" }],
      ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
      ["path", { d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5", key: "1ok5d2" }],
      [
        "path",
        {
          d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",
          key: "8hlroy"
        }
      ],
      ["path", { d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1", key: "q3aj97" }]
    ]);
    var Hotel = createLucideIcon("Hotel", [
      [
        "path",
        {
          d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
          key: "p9z69c"
        }
      ],
      ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16", key: "1bvcvh" }],
      ["path", { d: "M8 7h.01", key: "1vti4s" }],
      ["path", { d: "M16 7h.01", key: "1kdx03" }],
      ["path", { d: "M12 7h.01", key: "1ivr5q" }],
      ["path", { d: "M12 11h.01", key: "z322tv" }],
      ["path", { d: "M16 11h.01", key: "xkw8gn" }],
      ["path", { d: "M8 11h.01", key: "1dfujw" }],
      ["path", { d: "M10 22v-6.5m4 0V22", key: "16gs4s" }]
    ]);
    var Hourglass = createLucideIcon("Hourglass", [
      ["path", { d: "M5 22h14", key: "ehvnwv" }],
      ["path", { d: "M5 2h14", key: "pdyrp9" }],
      [
        "path",
        {
          d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
          key: "1d314k"
        }
      ],
      [
        "path",
        { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
      ]
    ]);
    var IceCream2 = createLucideIcon("IceCream2", [
      [
        "path",
        {
          d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
          key: "g86ewz"
        }
      ],
      ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
      ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]
    ]);
    var IceCream = createLucideIcon("IceCream", [
      ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }],
      ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
      ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]
    ]);
    var ImageDown = createLucideIcon("ImageDown", [
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8", key: "sqts6f" }],
      ["path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "1h47z9" }],
      ["path", { d: "m14 19.5 3 3v-6", key: "1x9jmo" }],
      ["path", { d: "m17 22.5 3-3", key: "xzuz0n" }]
    ]);
    var ImageMinus = createLucideIcon("ImageMinus", [
      ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }],
      ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
    ]);
    var ImageOff = createLucideIcon("ImageOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
      ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
      ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
      [
        "path",
        {
          d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
          key: "mmje98"
        }
      ],
      ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
    ]);
    var ImagePlus = createLucideIcon("ImagePlus", [
      ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
      ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
      ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
    ]);
    var Image = createLucideIcon("Image", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
    ]);
    var Import = createLucideIcon("Import", [
      ["path", { d: "M12 3v12", key: "1x0j5s" }],
      ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
      [
        "path",
        {
          d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
          key: "1ywtjm"
        }
      ]
    ]);
    var Inbox = createLucideIcon("Inbox", [
      ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ]
    ]);
    var Indent = createLucideIcon("Indent", [
      ["polyline", { points: "3 8 7 12 3 16", key: "f3rxhf" }],
      ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
      ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
      ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
    ]);
    var IndianRupee = createLucideIcon("IndianRupee", [
      ["path", { d: "M6 3h12", key: "ggurg9" }],
      ["path", { d: "M6 8h12", key: "6g4wlu" }],
      ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
      ["path", { d: "M6 13h3", key: "wdp6ag" }],
      ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
    ]);
    var Infinity = createLucideIcon("Infinity", [
      [
        "path",
        {
          d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
          key: "1z0uae"
        }
      ]
    ]);
    var Info2 = createLucideIcon("Info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]);
    var Instagram = createLucideIcon("Instagram", [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
      ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
      ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
    ]);
    var Italic = createLucideIcon("Italic", [
      ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
      ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
      ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
    ]);
    var IterationCcw = createLucideIcon("IterationCcw", [
      ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8", key: "4znkd0" }],
      ["polyline", { points: "16 14 20 18 16 22", key: "11njsm" }]
    ]);
    var IterationCw = createLucideIcon("IterationCw", [
      ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4", key: "tuf4su" }],
      ["polyline", { points: "8 22 4 18 8 14", key: "evkj9s" }]
    ]);
    var JapaneseYen = createLucideIcon("JapaneseYen", [
      ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
      ["path", { d: "M6 15h12", key: "1hwgt5" }],
      ["path", { d: "M6 11h12", key: "wf4gp6" }]
    ]);
    var Joystick = createLucideIcon("Joystick", [
      [
        "path",
        {
          d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
          key: "jg2n2t"
        }
      ],
      ["path", { d: "M6 15v-2", key: "gd6mvg" }],
      ["path", { d: "M12 15V9", key: "8c7uyn" }],
      ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]
    ]);
    var KanbanSquareDashed = createLucideIcon("KanbanSquareDashed", [
      ["path", { d: "M8 7v7", key: "1x2jlm" }],
      ["path", { d: "M12 7v4", key: "xawao1" }],
      ["path", { d: "M16 7v9", key: "1hp2iy" }],
      ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
      ["path", { d: "M9 3h1", key: "1yesri" }],
      ["path", { d: "M14 3h1", key: "1ec4yj" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
      ["path", { d: "M21 9v1", key: "mxsmne" }],
      ["path", { d: "M21 14v1", key: "169vum" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
      ["path", { d: "M3 14v1", key: "vnatye" }],
      ["path", { d: "M3 9v1", key: "1r0deq" }]
    ]);
    var KanbanSquare = createLucideIcon("KanbanSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 7v7", key: "1x2jlm" }],
      ["path", { d: "M12 7v4", key: "xawao1" }],
      ["path", { d: "M16 7v9", key: "1hp2iy" }]
    ]);
    var Kanban = createLucideIcon("Kanban", [
      ["path", { d: "M6 5v11", key: "mdvv1e" }],
      ["path", { d: "M12 5v6", key: "14ar3b" }],
      ["path", { d: "M18 5v14", key: "7ji314" }]
    ]);
    var KeyRound = createLucideIcon("KeyRound", [
      ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
      ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }]
    ]);
    var KeySquare = createLucideIcon("KeySquare", [
      [
        "path",
        {
          d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",
          key: "9li5bk"
        }
      ],
      ["path", { d: "m14 7 3 3", key: "1r5n42" }],
      ["path", { d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4", key: "1ym3zm" }]
    ]);
    var Key = createLucideIcon("Key", [
      ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
      ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
      ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }]
    ]);
    var KeyboardMusic = createLucideIcon("KeyboardMusic", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
      ["path", { d: "M6 8h4", key: "utf9t1" }],
      ["path", { d: "M14 8h.01", key: "1primd" }],
      ["path", { d: "M18 8h.01", key: "emo2bl" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ["path", { d: "M6 12v4", key: "dy92yo" }],
      ["path", { d: "M10 12v4", key: "1fxnav" }],
      ["path", { d: "M14 12v4", key: "1hft58" }],
      ["path", { d: "M18 12v4", key: "tjjnbz" }]
    ]);
    var Keyboard = createLucideIcon("Keyboard", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2", key: "15u882" }],
      ["path", { d: "M6 8h.001", key: "1ej0i3" }],
      ["path", { d: "M10 8h.001", key: "1x2st2" }],
      ["path", { d: "M14 8h.001", key: "1vkmyp" }],
      ["path", { d: "M18 8h.001", key: "kfsenl" }],
      ["path", { d: "M8 12h.001", key: "1sjpby" }],
      ["path", { d: "M12 12h.001", key: "al75ts" }],
      ["path", { d: "M16 12h.001", key: "931bgk" }],
      ["path", { d: "M7 16h10", key: "wp8him" }]
    ]);
    var LampCeiling = createLucideIcon("LampCeiling", [
      ["path", { d: "M12 2v5", key: "nd4vlx" }],
      ["path", { d: "M6 7h12l4 9H2l4-9Z", key: "123d64" }],
      ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0", key: "1061mw" }]
    ]);
    var LampDesk = createLucideIcon("LampDesk", [
      ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z", key: "1b0msb" }],
      ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z", key: "1uemms" }],
      ["path", { d: "M9.5 6.5 4 12l3 6", key: "1bx08v" }],
      ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z", key: "wap775" }]
    ]);
    var LampFloor = createLucideIcon("LampFloor", [
      ["path", { d: "M9 2h6l3 7H6l3-7Z", key: "wcx6mj" }],
      ["path", { d: "M12 9v13", key: "3n1su1" }],
      ["path", { d: "M9 22h6", key: "1rlq3v" }]
    ]);
    var LampWallDown = createLucideIcon("LampWallDown", [
      ["path", { d: "M11 13h6l3 7H8l3-7Z", key: "9n3qlo" }],
      ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8", key: "1hu4hb" }],
      ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z", key: "s053bc" }]
    ]);
    var LampWallUp = createLucideIcon("LampWallUp", [
      ["path", { d: "M11 4h6l3 7H8l3-7Z", key: "11x1ee" }],
      ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8", key: "eutp5o" }],
      ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z", key: "1iuthr" }]
    ]);
    var Lamp = createLucideIcon("Lamp", [
      ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
      ["path", { d: "M12 12v6", key: "3ahymv" }],
      ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" }]
    ]);
    var LandPlot = createLucideIcon("LandPlot", [
      ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
      [
        "path",
        {
          d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
          key: "ek95tt"
        }
      ],
      ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
      ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]
    ]);
    var Landmark = createLucideIcon("Landmark", [
      ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
      ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
      ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
      ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
      ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
      ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
    ]);
    var Languages = createLucideIcon("Languages", [
      ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
      ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
      ["path", { d: "M2 5h12", key: "or177f" }],
      ["path", { d: "M7 2h1", key: "1t2jsx" }],
      ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
      ["path", { d: "M14 18h6", key: "1m8k6r" }]
    ]);
    var Laptop2 = createLucideIcon("Laptop2", [
      ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
      ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
    ]);
    var Laptop = createLucideIcon("Laptop", [
      [
        "path",
        {
          d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
          key: "tarvll"
        }
      ]
    ]);
    var LassoSelect = createLucideIcon("LassoSelect", [
      ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
      ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
      [
        "path",
        {
          d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
          key: "gt5e1w"
        }
      ],
      ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
      [
        "path",
        {
          d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
          key: "1bawls"
        }
      ]
    ]);
    var Lasso = createLucideIcon("Lasso", [
      ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
      [
        "path",
        {
          d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
          key: "146dds"
        }
      ],
      ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
    ]);
    var Laugh = createLucideIcon("Laugh", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
    ]);
    var Layers2 = createLucideIcon("Layers2", [
      [
        "path",
        {
          d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",
          key: "1cuww1"
        }
      ],
      [
        "path",
        {
          d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",
          key: "pdlvxu"
        }
      ]
    ]);
    var Layers3 = createLucideIcon("Layers3", [
      [
        "path",
        {
          d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
          key: "8b97xw"
        }
      ],
      [
        "path",
        {
          d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
          key: "1e5n1m"
        }
      ],
      [
        "path",
        {
          d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
          key: "1iwflc"
        }
      ]
    ]);
    var Layers = createLucideIcon("Layers", [
      [
        "path",
        {
          d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
          key: "8b97xw"
        }
      ],
      ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
      ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
    ]);
    var LayoutDashboard = createLucideIcon("LayoutDashboard", [
      ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
      ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
      ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
      ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
    ]);
    var LayoutGrid = createLucideIcon("LayoutGrid", [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
    ]);
    var LayoutList = createLucideIcon("LayoutList", [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
      ["path", { d: "M14 4h7", key: "3xa0d5" }],
      ["path", { d: "M14 9h7", key: "1icrd9" }],
      ["path", { d: "M14 15h7", key: "1mj8o2" }],
      ["path", { d: "M14 20h7", key: "11slyb" }]
    ]);
    var LayoutPanelLeft = createLucideIcon("LayoutPanelLeft", [
      ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
    ]);
    var LayoutPanelTop = createLucideIcon("LayoutPanelTop", [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
    ]);
    var LayoutTemplate = createLucideIcon("LayoutTemplate", [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
      ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
      ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
    ]);
    var Layout = createLucideIcon("Layout", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
      ["line", { x1: "9", x2: "9", y1: "21", y2: "9", key: "wpwpyp" }]
    ]);
    var Leaf = createLucideIcon("Leaf", [
      [
        "path",
        {
          d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
          key: "nnexq3"
        }
      ],
      ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
    ]);
    var LeafyGreen = createLucideIcon("LeafyGreen", [
      [
        "path",
        {
          d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
          key: "1134nt"
        }
      ],
      ["path", { d: "M2 22 17 7", key: "1q7jp2" }]
    ]);
    var LibraryBig = createLucideIcon("LibraryBig", [
      ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
      ["path", { d: "M7 3v18", key: "bbkbws" }],
      [
        "path",
        {
          d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
          key: "1qboyk"
        }
      ]
    ]);
    var LibrarySquare = createLucideIcon("LibrarySquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M7 7v10", key: "d5nglc" }],
      ["path", { d: "M11 7v10", key: "pptsnr" }],
      ["path", { d: "m15 7 2 10", key: "1m7qm5" }]
    ]);
    var Library = createLucideIcon("Library", [
      ["path", { d: "m16 6 4 14", key: "ji33uf" }],
      ["path", { d: "M12 6v14", key: "1n7gus" }],
      ["path", { d: "M8 8v12", key: "1gg7y9" }],
      ["path", { d: "M4 4v16", key: "6qkkli" }]
    ]);
    var LifeBuoy = createLucideIcon("LifeBuoy", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
      ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
      ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
      ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
    ]);
    var Ligature = createLucideIcon("Ligature", [
      ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" }],
      ["path", { d: "M6 12h4", key: "a4o3ry" }],
      ["path", { d: "M14 12h2v8", key: "c1fccl" }],
      ["path", { d: "M6 20h4", key: "1i6q5t" }],
      ["path", { d: "M14 20h4", key: "lzx1xo" }]
    ]);
    var LightbulbOff = createLucideIcon("LightbulbOff", [
      ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }],
      ["path", { d: "M9 18h6", key: "x1upvd" }],
      ["path", { d: "M10 22h4", key: "ceow96" }]
    ]);
    var Lightbulb = createLucideIcon("Lightbulb", [
      [
        "path",
        {
          d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
          key: "1gvzjb"
        }
      ],
      ["path", { d: "M9 18h6", key: "x1upvd" }],
      ["path", { d: "M10 22h4", key: "ceow96" }]
    ]);
    var LineChart = createLucideIcon("LineChart", [
      ["path", { d: "M3 3v18h18", key: "1s2lah" }],
      ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
    ]);
    var Link2Off = createLucideIcon("Link2Off", [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
      ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
      ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Link2 = createLucideIcon("Link2", [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]);
    var Link = createLucideIcon("Link", [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
    ]);
    var Linkedin = createLucideIcon("Linkedin", [
      [
        "path",
        {
          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
          key: "c2jq9f"
        }
      ],
      ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
      ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
    ]);
    var ListChecks = createLucideIcon("ListChecks", [
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
      ["path", { d: "M13 6h8", key: "15sg57" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 18h8", key: "oe0vm4" }]
    ]);
    var ListEnd = createLucideIcon("ListEnd", [
      ["path", { d: "M16 12H3", key: "1a2rj7" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M10 18H3", key: "13769t" }],
      ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
      ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }]
    ]);
    var ListFilter = createLucideIcon("ListFilter", [
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["path", { d: "M10 18h4", key: "1ulq68" }]
    ]);
    var ListMinus = createLucideIcon("ListMinus", [
      ["path", { d: "M11 12H3", key: "51ecnj" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M16 18H3", key: "12xzn7" }],
      ["path", { d: "M21 12h-6", key: "bt1uis" }]
    ]);
    var ListMusic = createLucideIcon("ListMusic", [
      ["path", { d: "M21 15V6", key: "h1cx4g" }],
      ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", key: "8saifv" }],
      ["path", { d: "M12 12H3", key: "18klou" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M12 18H3", key: "11ftsu" }]
    ]);
    var ListOrdered = createLucideIcon("ListOrdered", [
      ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
      ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
      ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
      ["path", { d: "M4 6h1v4", key: "cnovpq" }],
      ["path", { d: "M4 10h2", key: "16xx2s" }],
      ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
    ]);
    var ListPlus = createLucideIcon("ListPlus", [
      ["path", { d: "M11 12H3", key: "51ecnj" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M16 18H3", key: "12xzn7" }],
      ["path", { d: "M18 9v6", key: "1twb98" }],
      ["path", { d: "M21 12h-6", key: "bt1uis" }]
    ]);
    var ListRestart = createLucideIcon("ListRestart", [
      ["path", { d: "M21 6H3", key: "1jwq7v" }],
      ["path", { d: "M7 12H3", key: "13ou7f" }],
      ["path", { d: "M7 18H3", key: "1sijw9" }],
      [
        "path",
        {
          d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
          key: "qth677"
        }
      ],
      ["path", { d: "M11 10v4h4", key: "172dkj" }]
    ]);
    var ListStart = createLucideIcon("ListStart", [
      ["path", { d: "M16 12H3", key: "1a2rj7" }],
      ["path", { d: "M16 18H3", key: "12xzn7" }],
      ["path", { d: "M10 6H3", key: "lf8lx7" }],
      ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
      ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }]
    ]);
    var ListTodo = createLucideIcon("ListTodo", [
      ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      ["path", { d: "M13 6h8", key: "15sg57" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 18h8", key: "oe0vm4" }]
    ]);
    var ListTree = createLucideIcon("ListTree", [
      ["path", { d: "M21 12h-8", key: "1bmf0i" }],
      ["path", { d: "M21 6H8", key: "1pqkrb" }],
      ["path", { d: "M21 18h-8", key: "1tm79t" }],
      ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3", key: "1ywdgy" }],
      ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3", key: "2wc746" }]
    ]);
    var ListVideo = createLucideIcon("ListVideo", [
      ["path", { d: "M12 12H3", key: "18klou" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M12 18H3", key: "11ftsu" }],
      ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
    ]);
    var ListX = createLucideIcon("ListX", [
      ["path", { d: "M11 12H3", key: "51ecnj" }],
      ["path", { d: "M16 6H3", key: "1wxfjs" }],
      ["path", { d: "M16 18H3", key: "12xzn7" }],
      ["path", { d: "m19 10-4 4", key: "1tz659" }],
      ["path", { d: "m15 10 4 4", key: "1n7nei" }]
    ]);
    var List = createLucideIcon("List", [
      ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
      ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
      ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
      ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
      ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
      ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
    ]);
    var Loader22 = createLucideIcon("Loader2", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
    ]);
    var Loader = createLucideIcon("Loader", [
      ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
      ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
      ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" }],
      ["line", { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" }],
      ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
      ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
      ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" }],
      ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" }]
    ]);
    var LocateFixed = createLucideIcon("LocateFixed", [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
      ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]);
    var LocateOff = createLucideIcon("LocateOff", [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
      [
        "path",
        {
          d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
          key: "1oh7ia"
        }
      ],
      [
        "path",
        {
          d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
          key: "3qdecy"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Locate = createLucideIcon("Locate", [
      ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
      ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
      ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]
    ]);
    var LockKeyhole = createLucideIcon("LockKeyhole", [
      ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
      ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
    ]);
    var Lock = createLucideIcon("Lock", [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]);
    var LogIn = createLucideIcon("LogIn", [
      ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
      ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
      ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
    ]);
    var LogOut = createLucideIcon("LogOut", [
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
      ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
      ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
    ]);
    var Lollipop = createLucideIcon("Lollipop", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]
    ]);
    var Luggage = createLucideIcon("Luggage", [
      [
        "path",
        {
          d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
          key: "1h5fkc"
        }
      ],
      ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
      ["path", { d: "M10 20h4", key: "ni2waw" }],
      ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
      ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
    ]);
    var MSquare = createLucideIcon("MSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 16V8l4 4 4-4v8", key: "141u4e" }]
    ]);
    var Magnet = createLucideIcon("Magnet", [
      [
        "path",
        {
          d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
          key: "1i3lhw"
        }
      ],
      ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
      ["path", { d: "m12 15 4 4", key: "lnac28" }]
    ]);
    var MailCheck = createLucideIcon("MailCheck", [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
    ]);
    var MailMinus = createLucideIcon("MailMinus", [
      ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "M16 19h6", key: "xwg31i" }]
    ]);
    var MailOpen = createLucideIcon("MailOpen", [
      [
        "path",
        {
          d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
          key: "1jhwl8"
        }
      ],
      ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
    ]);
    var MailPlus = createLucideIcon("MailPlus", [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "M19 16v6", key: "tddt3s" }],
      ["path", { d: "M16 19h6", key: "xwg31i" }]
    ]);
    var MailQuestion = createLucideIcon("MailQuestion", [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      [
        "path",
        {
          d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
          key: "7z9rxb"
        }
      ],
      ["path", { d: "M20 22v.01", key: "12bgn6" }]
    ]);
    var MailSearch = createLucideIcon("MailSearch", [
      ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
    ]);
    var MailWarning = createLucideIcon("MailWarning", [
      ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "M20 14v4", key: "1hm744" }],
      ["path", { d: "M20 22v.01", key: "12bgn6" }]
    ]);
    var MailX = createLucideIcon("MailX", [
      ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
      ["path", { d: "m17 17 4 4", key: "1b3523" }],
      ["path", { d: "m21 17-4 4", key: "uinynz" }]
    ]);
    var Mail = createLucideIcon("Mail", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
    ]);
    var Mailbox = createLucideIcon("Mailbox", [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
          key: "1lbycx"
        }
      ],
      ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
      ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0", key: "n6nfvi" }],
      ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]
    ]);
    var Mails = createLucideIcon("Mails", [
      ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2", key: "1drq3f" }],
      ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" }],
      ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }]
    ]);
    var MapPinOff = createLucideIcon("MapPinOff", [
      [
        "path",
        { d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5", key: "12a8pk" }
      ],
      [
        "path",
        {
          d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
          key: "1r9f6y"
        }
      ],
      [
        "path",
        { d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13", key: "erynq7" }
      ],
      ["path", { d: "M14.9 9.25a3 3 0 0 0-2.15-2.16", key: "1hwwmx" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var MapPin = createLucideIcon("MapPin", [
      ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
    ]);
    var MapPinned = createLucideIcon("MapPinned", [
      ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
      ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
      [
        "path",
        {
          d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
          key: "112zkj"
        }
      ]
    ]);
    var Map2 = createLucideIcon("Map", [
      ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" }],
      ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
      ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }]
    ]);
    var Martini = createLucideIcon("Martini", [
      ["path", { d: "M8 22h8", key: "rmew8v" }],
      ["path", { d: "M12 11v11", key: "ur9y6a" }],
      ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]
    ]);
    var Maximize2 = createLucideIcon("Maximize2", [
      ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
      ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
      ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
    ]);
    var Maximize = createLucideIcon("Maximize", [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
    ]);
    var Medal = createLucideIcon("Medal", [
      [
        "path",
        {
          d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
          key: "143lza"
        }
      ],
      ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
      ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
      ["path", { d: "M8 7h8", key: "i86dvs" }],
      ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
      ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
    ]);
    var MegaphoneOff = createLucideIcon("MegaphoneOff", [
      ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14", key: "3429n" }],
      ["path", { d: "M21 15.34V6l-7.31 2.03", key: "4o1dh8" }],
      ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Megaphone = createLucideIcon("Megaphone", [
      ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
      ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
    ]);
    var Meh = createLucideIcon("Meh", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
    ]);
    var MemoryStick = createLucideIcon("MemoryStick", [
      ["path", { d: "M6 19v-3", key: "1nvgqn" }],
      ["path", { d: "M10 19v-3", key: "iu8nkm" }],
      ["path", { d: "M14 19v-3", key: "kcehxu" }],
      ["path", { d: "M18 19v-3", key: "1vh91z" }],
      ["path", { d: "M8 11V9", key: "63erz4" }],
      ["path", { d: "M16 11V9", key: "fru6f3" }],
      ["path", { d: "M12 11V9", key: "ha00sb" }],
      ["path", { d: "M2 15h20", key: "16ne18" }],
      [
        "path",
        {
          d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
          key: "lhddv3"
        }
      ]
    ]);
    var MenuSquare = createLucideIcon("MenuSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M7 8h10", key: "1jw688" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["path", { d: "M7 16h10", key: "wp8him" }]
    ]);
    var Menu = createLucideIcon("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
    ]);
    var Merge = createLucideIcon("Merge", [
      ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
      ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
      ["path", { d: "m20 22-5-5", key: "1m27yz" }]
    ]);
    var MessageCircle = createLucideIcon("MessageCircle", [
      ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }]
    ]);
    var MessageSquareDashed = createLucideIcon("MessageSquareDashed", [
      ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2", key: "9usibi" }],
      ["path", { d: "M11 3h3", key: "1c3ji7" }],
      ["path", { d: "M18 3h1c1.1 0 2 .9 2 2", key: "19esxn" }],
      ["path", { d: "M21 9v2", key: "p14lih" }],
      ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1", key: "1fo1j8" }],
      ["path", { d: "M14 17h-3", key: "1w4p2m" }],
      ["path", { d: "m7 17-4 4v-5", key: "ph9x1h" }],
      ["path", { d: "M3 12v-2", key: "856n1q" }]
    ]);
    var MessageSquarePlus = createLucideIcon("MessageSquarePlus", [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
      ["line", { x1: "9", x2: "15", y1: "10", y2: "10", key: "1lj1wd" }],
      ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }]
    ]);
    var MessageSquare = createLucideIcon("MessageSquare", [
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
    ]);
    var MessagesSquare = createLucideIcon("MessagesSquare", [
      ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z", key: "16vlm8" }],
      ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
    ]);
    var Mic2 = createLucideIcon("Mic2", [
      ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12", key: "zoua8r" }],
      ["circle", { cx: "17", cy: "7", r: "5", key: "1fomce" }]
    ]);
    var MicOff = createLucideIcon("MicOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
      ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
      ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
      ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
    ]);
    var Mic = createLucideIcon("Mic", [
      ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
    ]);
    var Microscope = createLucideIcon("Microscope", [
      ["path", { d: "M6 18h8", key: "1borvv" }],
      ["path", { d: "M3 22h18", key: "8prr45" }],
      ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
      ["path", { d: "M9 14h2", key: "197e7h" }],
      ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
      ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
    ]);
    var Microwave = createLucideIcon("Microwave", [
      ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }],
      ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
      ["path", { d: "M18 8v7", key: "o5zi4n" }],
      ["path", { d: "M6 19v2", key: "1loha6" }],
      ["path", { d: "M18 19v2", key: "1dawf0" }]
    ]);
    var Milestone = createLucideIcon("Milestone", [
      ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z", key: "1mp5s7" }],
      ["path", { d: "M12 13v8", key: "1l5pq0" }],
      ["path", { d: "M12 3v3", key: "1n5kay" }]
    ]);
    var MilkOff = createLucideIcon("MilkOff", [
      ["path", { d: "M8 2h8", key: "1ssgc1" }],
      [
        "path",
        {
          d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
          key: "y0ejgx"
        }
      ],
      ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Milk = createLucideIcon("Milk", [
      ["path", { d: "M8 2h8", key: "1ssgc1" }],
      [
        "path",
        {
          d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
          key: "qtp12x"
        }
      ],
      ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]
    ]);
    var Minimize2 = createLucideIcon("Minimize2", [
      ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
      ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
      ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
    ]);
    var Minimize = createLucideIcon("Minimize", [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
    ]);
    var MinusCircle = createLucideIcon("MinusCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }]
    ]);
    var MinusSquare = createLucideIcon("MinusSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }]
    ]);
    var Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
    var MonitorCheck = createLucideIcon("MonitorCheck", [
      ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorDot = createLucideIcon("MonitorDot", [
      ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
      ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9", key: "1fet9y" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorDown = createLucideIcon("MonitorDown", [
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorOff = createLucideIcon("MonitorOff", [
      ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" }],
      ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]);
    var MonitorPause = createLucideIcon("MonitorPause", [
      ["path", { d: "M10 13V7", key: "1u13u9" }],
      ["path", { d: "M14 13V7", key: "1vj9om" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorPlay = createLucideIcon("MonitorPlay", [
      ["path", { d: "m10 7 5 3-5 3Z", key: "29ljg6" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorSmartphone = createLucideIcon("MonitorSmartphone", [
      ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
      ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
      ["path", { d: "M7 19h5", key: "qswx4l" }],
      ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
    ]);
    var MonitorSpeaker = createLucideIcon("MonitorSpeaker", [
      ["path", { d: "M5.5 20H8", key: "1k40s5" }],
      ["path", { d: "M17 9h.01", key: "1j24nn" }],
      ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
      ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
      ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
    ]);
    var MonitorStop = createLucideIcon("MonitorStop", [
      ["rect", { x: "9", y: "7", width: "6", height: "6", key: "4xvc6r" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorUp = createLucideIcon("MonitorUp", [
      ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
      ["path", { d: "M12 13V7", key: "h0r20n" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var MonitorX = createLucideIcon("MonitorX", [
      ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
      ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }]
    ]);
    var Monitor = createLucideIcon("Monitor", [
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
    ]);
    var MoonStar = createLucideIcon("MoonStar", [
      ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ["path", { d: "M19 3v4", key: "vgv24u" }],
      ["path", { d: "M21 5h-4", key: "1wcg1f" }]
    ]);
    var Moon = createLucideIcon("Moon", [
      ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
    ]);
    var MoreHorizontal = createLucideIcon("MoreHorizontal", [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
      ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
    ]);
    var MoreVertical = createLucideIcon("MoreVertical", [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
      ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
    ]);
    var MountainSnow = createLucideIcon("MountainSnow", [
      ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
      [
        "path",
        { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }
      ]
    ]);
    var Mountain = createLucideIcon("Mountain", [
      ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]
    ]);
    var MousePointer2 = createLucideIcon("MousePointer2", [
      ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
    ]);
    var MousePointerClick = createLucideIcon("MousePointerClick", [
      ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z", key: "1b76lo" }],
      ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
      ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
      ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
      ["path", { d: "m6 12-1.9 2", key: "mnht97" }]
    ]);
    var MousePointerSquareDashed = createLucideIcon("MousePointerSquareDashed", [
      ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
      ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
      ["path", { d: "M9 3h1", key: "1yesri" }],
      ["path", { d: "M9 21h2", key: "1qve2z" }],
      ["path", { d: "M14 3h1", key: "1ec4yj" }],
      ["path", { d: "M3 9v1", key: "1r0deq" }],
      ["path", { d: "M21 9v2", key: "p14lih" }],
      ["path", { d: "M3 14v1", key: "vnatye" }]
    ]);
    var MousePointerSquare = createLucideIcon("MousePointerSquare", [
      ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
      ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }]
    ]);
    var MousePointer = createLucideIcon("MousePointer", [
      ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
      ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
    ]);
    var Mouse = createLucideIcon("Mouse", [
      ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
      ["path", { d: "M12 6v4", key: "16clxf" }]
    ]);
    var Move3d = createLucideIcon("Move3d", [
      ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
      ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
      ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
      ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
    ]);
    var MoveDiagonal2 = createLucideIcon("MoveDiagonal2", [
      ["polyline", { points: "5 11 5 5 11 5", key: "ncfzxk" }],
      ["polyline", { points: "19 13 19 19 13 19", key: "1mk7hk" }],
      ["line", { x1: "5", x2: "19", y1: "5", y2: "19", key: "mcyte3" }]
    ]);
    var MoveDiagonal = createLucideIcon("MoveDiagonal", [
      ["polyline", { points: "13 5 19 5 19 11", key: "11219e" }],
      ["polyline", { points: "11 19 5 19 5 13", key: "sfq3wq" }],
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
    ]);
    var MoveDownLeft = createLucideIcon("MoveDownLeft", [
      ["path", { d: "M11 19H5V13", key: "1akmht" }],
      ["path", { d: "M19 5L5 19", key: "72u4yj" }]
    ]);
    var MoveDownRight = createLucideIcon("MoveDownRight", [
      ["path", { d: "M19 13V19H13", key: "10vkzq" }],
      ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
    ]);
    var MoveDown = createLucideIcon("MoveDown", [
      ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
      ["path", { d: "M12 2V22", key: "r89rzk" }]
    ]);
    var MoveHorizontal = createLucideIcon("MoveHorizontal", [
      ["polyline", { points: "18 8 22 12 18 16", key: "1hqrds" }],
      ["polyline", { points: "6 8 2 12 6 16", key: "f0ernq" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }]
    ]);
    var MoveLeft = createLucideIcon("MoveLeft", [
      ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
      ["path", { d: "M2 12H22", key: "1m8cig" }]
    ]);
    var MoveRight = createLucideIcon("MoveRight", [
      ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
      ["path", { d: "M2 12H22", key: "1m8cig" }]
    ]);
    var MoveUpLeft = createLucideIcon("MoveUpLeft", [
      ["path", { d: "M5 11V5H11", key: "3q78g9" }],
      ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
    ]);
    var MoveUpRight = createLucideIcon("MoveUpRight", [
      ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
      ["path", { d: "M19 5L5 19", key: "72u4yj" }]
    ]);
    var MoveUp = createLucideIcon("MoveUp", [
      ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
      ["path", { d: "M12 2V22", key: "r89rzk" }]
    ]);
    var MoveVertical = createLucideIcon("MoveVertical", [
      ["polyline", { points: "8 18 12 22 16 18", key: "1uutw3" }],
      ["polyline", { points: "8 6 12 2 16 6", key: "d60sxy" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
    ]);
    var Move = createLucideIcon("Move", [
      ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
      ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
      ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
      ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
    ]);
    var Music2 = createLucideIcon("Music2", [
      ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
      ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
    ]);
    var Music3 = createLucideIcon("Music3", [
      ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
      ["path", { d: "M16 18V2", key: "40x2m5" }]
    ]);
    var Music4 = createLucideIcon("Music4", [
      ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
      ["path", { d: "m9 9 12-2", key: "1e64n2" }],
      ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
      ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
    ]);
    var Music = createLucideIcon("Music", [
      ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
      ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
      ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
    ]);
    var Navigation2Off = createLucideIcon("Navigation2Off", [
      ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
      ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Navigation2 = createLucideIcon("Navigation2", [
      ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
    ]);
    var NavigationOff = createLucideIcon("NavigationOff", [
      ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
      ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Navigation = createLucideIcon("Navigation", [
      ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
    ]);
    var Network = createLucideIcon("Network", [
      ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
      ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
      ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
      ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
      ["path", { d: "M12 12V8", key: "2874zd" }]
    ]);
    var Newspaper = createLucideIcon("Newspaper", [
      [
        "path",
        {
          d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
          key: "7pis2x"
        }
      ],
      ["path", { d: "M18 14h-8", key: "sponae" }],
      ["path", { d: "M15 18h-5", key: "95g1m2" }],
      ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }]
    ]);
    var Nfc = createLucideIcon("Nfc", [
      ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
      ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
      ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
      ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
    ]);
    var NutOff = createLucideIcon("NutOff", [
      ["path", { d: "M12 4V2", key: "1k5q1u" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
          key: "1xcvy9"
        }
      ],
      ["path", { d: "M19 10v3.343", key: "163tfc" }],
      [
        "path",
        {
          d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
          key: "17914v"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Nut = createLucideIcon("Nut", [
      ["path", { d: "M12 4V2", key: "1k5q1u" }],
      [
        "path",
        {
          d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
          key: "1tgyif"
        }
      ],
      [
        "path",
        {
          d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
          key: "tnsqj"
        }
      ]
    ]);
    var Octagon = createLucideIcon("Octagon", [
      [
        "polygon",
        {
          points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          key: "h1p8hx"
        }
      ]
    ]);
    var Option = createLucideIcon("Option", [
      ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
      ["path", { d: "M14 3h7", key: "16f0ms" }]
    ]);
    var Orbit = createLucideIcon("Orbit", [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
      ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
      ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
      ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }]
    ]);
    var Outdent = createLucideIcon("Outdent", [
      ["polyline", { points: "7 8 3 12 7 16", key: "2j60jr" }],
      ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
      ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
      ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
    ]);
    var Package2 = createLucideIcon("Package2", [
      ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
      ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9", key: "19h2x1" }],
      ["path", { d: "M12 3v6", key: "1holv5" }]
    ]);
    var PackageCheck = createLucideIcon("PackageCheck", [
      ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
    ]);
    var PackageMinus = createLucideIcon("PackageMinus", [
      ["path", { d: "M16 16h6", key: "100bgy" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
    ]);
    var PackageOpen = createLucideIcon("PackageOpen", [
      [
        "path",
        {
          d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",
          key: "1vy178"
        }
      ],
      [
        "path",
        {
          d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",
          key: "s3bv25"
        }
      ],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "13", key: "1o4xyi" }],
      [
        "path",
        {
          d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",
          key: "1na2nq"
        }
      ]
    ]);
    var PackagePlus = createLucideIcon("PackagePlus", [
      ["path", { d: "M16 16h6", key: "100bgy" }],
      ["path", { d: "M19 13v6", key: "85cyf1" }],
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
    ]);
    var PackageSearch = createLucideIcon("PackageSearch", [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
      ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
      ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
    ]);
    var PackageX = createLucideIcon("PackageX", [
      [
        "path",
        {
          d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
          key: "e7tb2h"
        }
      ],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
      ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]
    ]);
    var Package = createLucideIcon("Package", [
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      [
        "path",
        {
          d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
          key: "hh9hay"
        }
      ],
      ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
      ["path", { d: "M12 22V12", key: "d0xqtd" }]
    ]);
    var PaintBucket = createLucideIcon("PaintBucket", [
      [
        "path",
        { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
      ],
      ["path", { d: "m5 2 5 5", key: "1lls2c" }],
      ["path", { d: "M2 13h15", key: "1hkzvu" }],
      ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
    ]);
    var Paintbrush2 = createLucideIcon("Paintbrush2", [
      [
        "path",
        { d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z", key: "1c8kta" }
      ],
      ["path", { d: "M6 12V2h12v10", key: "1esbnf" }],
      ["path", { d: "M14 2v4", key: "qmzblu" }],
      ["path", { d: "M10 2v2", key: "7u0qdc" }]
    ]);
    var Paintbrush = createLucideIcon("Paintbrush", [
      [
        "path",
        {
          d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
          key: "m6k5sh"
        }
      ],
      ["path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7", key: "arzq70" }],
      ["path", { d: "M14.5 17.5 4.5 15", key: "s7fvrz" }]
    ]);
    var Palette = createLucideIcon("Palette", [
      ["circle", { cx: "13.5", cy: "6.5", r: ".5", key: "1xcu5" }],
      ["circle", { cx: "17.5", cy: "10.5", r: ".5", key: "736e4u" }],
      ["circle", { cx: "8.5", cy: "7.5", r: ".5", key: "clrty" }],
      ["circle", { cx: "6.5", cy: "12.5", r: ".5", key: "1s4xz9" }],
      [
        "path",
        {
          d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
          key: "12rzf8"
        }
      ]
    ]);
    var Palmtree = createLucideIcon("Palmtree", [
      ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }],
      [
        "path",
        { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }
      ],
      [
        "path",
        {
          d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
          key: "epoumf"
        }
      ],
      ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]
    ]);
    var PanelBottomClose = createLucideIcon("PanelBottomClose", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
      ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
    ]);
    var PanelBottomInactive = createLucideIcon("PanelBottomInactive", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M14 15h1", key: "171nev" }],
      ["path", { d: "M19 15h2", key: "1vnucp" }],
      ["path", { d: "M3 15h2", key: "8bym0q" }],
      ["path", { d: "M9 15h1", key: "1tg3ks" }]
    ]);
    var PanelBottomOpen = createLucideIcon("PanelBottomOpen", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
      ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
    ]);
    var PanelBottom = createLucideIcon("PanelBottom", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }]
    ]);
    var PanelLeftClose = createLucideIcon("PanelLeftClose", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
    ]);
    var PanelLeftInactive = createLucideIcon("PanelLeftInactive", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M9 14v1", key: "askpd8" }],
      ["path", { d: "M9 19v2", key: "16tejx" }],
      ["path", { d: "M9 3v2", key: "1noubl" }],
      ["path", { d: "M9 9v1", key: "19ebxg" }]
    ]);
    var PanelLeftOpen = createLucideIcon("PanelLeftOpen", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
    ]);
    var PanelLeft = createLucideIcon("PanelLeft", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "9", x2: "9", y1: "3", y2: "21", key: "13tij5" }]
    ]);
    var PanelRightClose = createLucideIcon("PanelRightClose", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "15", x2: "15", y1: "3", y2: "21", key: "1hpv9i" }],
      ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
    ]);
    var PanelRightInactive = createLucideIcon("PanelRightInactive", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M15 14v1", key: "ilsfch" }],
      ["path", { d: "M15 19v2", key: "1fst2f" }],
      ["path", { d: "M15 3v2", key: "z204g4" }],
      ["path", { d: "M15 9v1", key: "z2a8b1" }]
    ]);
    var PanelRightOpen = createLucideIcon("PanelRightOpen", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "15", x2: "15", y1: "3", y2: "21", key: "1hpv9i" }],
      ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
    ]);
    var PanelRight = createLucideIcon("PanelRight", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "15", x2: "15", y1: "3", y2: "21", key: "1hpv9i" }]
    ]);
    var PanelTopClose = createLucideIcon("PanelTopClose", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
      ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]
    ]);
    var PanelTopInactive = createLucideIcon("PanelTopInactive", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M14 9h1", key: "l0svgy" }],
      ["path", { d: "M19 9h2", key: "te2zfg" }],
      ["path", { d: "M3 9h2", key: "1h4ldw" }],
      ["path", { d: "M9 9h1", key: "15jzuz" }]
    ]);
    var PanelTopOpen = createLucideIcon("PanelTopOpen", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
      ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]
    ]);
    var PanelTop = createLucideIcon("PanelTop", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }]
    ]);
    var Paperclip = createLucideIcon("Paperclip", [
      [
        "path",
        {
          d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
          key: "1u3ebp"
        }
      ]
    ]);
    var Parentheses = createLucideIcon("Parentheses", [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]
    ]);
    var ParkingCircleOff = createLucideIcon("ParkingCircleOff", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m5 5 14 14", key: "11anup" }],
      ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
      ["path", { d: "M9 17v-2.34", key: "a9qo08" }]
    ]);
    var ParkingCircle = createLucideIcon("ParkingCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
    ]);
    var ParkingMeter = createLucideIcon("ParkingMeter", [
      ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }],
      ["path", { d: "M12 12v3", key: "158kv8" }],
      ["path", { d: "M11 15h2", key: "199qp6" }],
      [
        "path",
        {
          d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",
          key: "1l50wn"
        }
      ],
      ["path", { d: "M12 19v3", key: "npa21l" }]
    ]);
    var ParkingSquareOff = createLucideIcon("ParkingSquareOff", [
      ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }],
      ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
      ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]
    ]);
    var ParkingSquare = createLucideIcon("ParkingSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
    ]);
    var PartyPopper = createLucideIcon("PartyPopper", [
      ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
      ["path", { d: "M4 3h.01", key: "1vcuye" }],
      ["path", { d: "M22 8h.01", key: "1mrtc2" }],
      ["path", { d: "M15 2h.01", key: "1cjtqr" }],
      ["path", { d: "M22 20h.01", key: "1mrys2" }],
      [
        "path",
        {
          d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
          key: "bpx1uq"
        }
      ],
      [
        "path",
        { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17", key: "1pd0s7" }
      ],
      [
        "path",
        { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7", key: "zq5xbz" }
      ],
      [
        "path",
        {
          d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
          key: "4kbmks"
        }
      ]
    ]);
    var PauseCircle = createLucideIcon("PauseCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
      ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
    ]);
    var PauseOctagon = createLucideIcon("PauseOctagon", [
      ["path", { d: "M10 15V9", key: "1lckn7" }],
      ["path", { d: "M14 15V9", key: "1muqhk" }],
      [
        "path",
        { d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z", key: "1m7qra" }
      ]
    ]);
    var Pause = createLucideIcon("Pause", [
      ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
      ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
    ]);
    var PawPrint = createLucideIcon("PawPrint", [
      ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
      ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
      ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
      [
        "path",
        {
          d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
          key: "1ydw1z"
        }
      ]
    ]);
    var PcCase = createLucideIcon("PcCase", [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }],
      ["path", { d: "M15 14h.01", key: "1kp3bh" }],
      ["path", { d: "M9 6h6", key: "dgm16u" }],
      ["path", { d: "M9 10h6", key: "9gxzsh" }]
    ]);
    var PenLine = createLucideIcon("PenLine", [
      ["path", { d: "M12 20h9", key: "t2du7b" }],
      ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
    ]);
    var PenSquare = createLucideIcon("PenSquare", [
      ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
      ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
    ]);
    var PenTool = createLucideIcon("PenTool", [
      ["path", { d: "m12 19 7-7 3 3-7 7-3-3z", key: "rklqx2" }],
      ["path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z", key: "1et58u" }],
      ["path", { d: "m2 2 7.586 7.586", key: "etlp93" }],
      ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
    ]);
    var Pen = createLucideIcon("Pen", [
      ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
    ]);
    var PencilLine = createLucideIcon("PencilLine", [
      ["path", { d: "M12 20h9", key: "t2du7b" }],
      ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
      ["path", { d: "m15 5 3 3", key: "1w25hb" }]
    ]);
    var PencilRuler = createLucideIcon("PencilRuler", [
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
      [
        "path",
        { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }
      ],
      ["path", { d: "m8 6 2-2", key: "115y1s" }],
      ["path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z", key: "hes763" }],
      ["path", { d: "m18 16 2-2", key: "ee94s4" }],
      [
        "path",
        {
          d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
          key: "cfq27r"
        }
      ]
    ]);
    var Pencil = createLucideIcon("Pencil", [
      ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
    ]);
    var Pentagon = createLucideIcon("Pentagon", [
      [
        "path",
        {
          d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",
          key: "hsj90r"
        }
      ]
    ]);
    var PercentCircle = createLucideIcon("PercentCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "M9 9h.01", key: "1q5me6" }],
      ["path", { d: "M15 15h.01", key: "lqbp3k" }]
    ]);
    var PercentDiamond = createLucideIcon("PercentDiamond", [
      [
        "path",
        {
          d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
          key: "1tpxz2"
        }
      ],
      ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
      ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
      ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]
    ]);
    var PercentSquare = createLucideIcon("PercentSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "M9 9h.01", key: "1q5me6" }],
      ["path", { d: "M15 15h.01", key: "lqbp3k" }]
    ]);
    var Percent = createLucideIcon("Percent", [
      ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
      ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
    ]);
    var PersonStanding = createLucideIcon("PersonStanding", [
      ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
      ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
      ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
      ["path", { d: "M12 10v4", key: "1kjpxc" }]
    ]);
    var PhoneCall = createLucideIcon("PhoneCall", [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ],
      ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
      ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
    ]);
    var PhoneForwarded = createLucideIcon("PhoneForwarded", [
      ["polyline", { points: "18 2 22 6 18 10", key: "6vjanh" }],
      ["line", { x1: "14", x2: "22", y1: "6", y2: "6", key: "1jsywh" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]);
    var PhoneIncoming = createLucideIcon("PhoneIncoming", [
      ["polyline", { points: "16 2 16 8 22 8", key: "1ygljm" }],
      ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]);
    var PhoneMissed = createLucideIcon("PhoneMissed", [
      ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
      ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]);
    var PhoneOff = createLucideIcon("PhoneOff", [
      [
        "path",
        {
          d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
          key: "z86iuo"
        }
      ],
      ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]
    ]);
    var PhoneOutgoing = createLucideIcon("PhoneOutgoing", [
      ["polyline", { points: "22 8 22 2 16 2", key: "1g204g" }],
      ["line", { x1: "16", x2: "22", y1: "8", y2: "2", key: "1ggias" }],
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]);
    var Phone = createLucideIcon("Phone", [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]);
    var PiSquare = createLucideIcon("PiSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M7 7h10", key: "udp07y" }],
      ["path", { d: "M10 7v10", key: "i1d9ee" }],
      ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]
    ]);
    var Pi = createLucideIcon("Pi", [
      ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
      ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
      ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]
    ]);
    var Piano = createLucideIcon("Piano", [
      [
        "path",
        {
          d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
          key: "lag0yf"
        }
      ],
      ["path", { d: "M2 14h20", key: "myj16y" }],
      ["path", { d: "M6 14v4", key: "9ng0ue" }],
      ["path", { d: "M10 14v4", key: "1v8uk5" }],
      ["path", { d: "M14 14v4", key: "1tqops" }],
      ["path", { d: "M18 14v4", key: "18uqwm" }]
    ]);
    var PictureInPicture2 = createLucideIcon("PictureInPicture2", [
      ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }],
      ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]
    ]);
    var PictureInPicture = createLucideIcon("PictureInPicture", [
      [
        "path",
        {
          d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",
          key: "bcd8fb"
        }
      ],
      ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2", key: "136fx3" }]
    ]);
    var PieChart = createLucideIcon("PieChart", [
      ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
      ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }]
    ]);
    var PiggyBank = createLucideIcon("PiggyBank", [
      [
        "path",
        {
          d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
          key: "uf6l00"
        }
      ],
      ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
      ["path", { d: "M16 11h0", key: "k2aug8" }]
    ]);
    var PilcrowSquare = createLucideIcon("PilcrowSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
      ["path", { d: "M12 7v10", key: "jspqdw" }],
      ["path", { d: "M16 7v10", key: "lavkr4" }]
    ]);
    var Pilcrow = createLucideIcon("Pilcrow", [
      ["path", { d: "M13 4v16", key: "8vvj80" }],
      ["path", { d: "M17 4v16", key: "7dpous" }],
      ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
    ]);
    var Pill = createLucideIcon("Pill", [
      [
        "path",
        { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
      ],
      ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
    ]);
    var PinOff = createLucideIcon("PinOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
      ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12", key: "13x2n8" }],
      ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89", key: "reo3ki" }]
    ]);
    var Pin = createLucideIcon("Pin", [
      ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
      [
        "path",
        {
          d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
          key: "13yl11"
        }
      ]
    ]);
    var Pipette = createLucideIcon("Pipette", [
      ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
      ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
      [
        "path",
        {
          d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
          key: "196du1"
        }
      ]
    ]);
    var Pizza = createLucideIcon("Pizza", [
      ["path", { d: "M15 11h.01", key: "rns66s" }],
      ["path", { d: "M11 15h.01", key: "k85uqc" }],
      ["path", { d: "M16 16h.01", key: "1f9h7w" }],
      ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
      ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }]
    ]);
    var PlaneLanding = createLucideIcon("PlaneLanding", [
      ["path", { d: "M2 22h20", key: "272qi7" }],
      [
        "path",
        {
          d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
          key: "1ma21e"
        }
      ]
    ]);
    var PlaneTakeoff = createLucideIcon("PlaneTakeoff", [
      ["path", { d: "M2 22h20", key: "272qi7" }],
      [
        "path",
        {
          d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
          key: "fkigj9"
        }
      ]
    ]);
    var Plane = createLucideIcon("Plane", [
      [
        "path",
        {
          d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
          key: "1v9wt8"
        }
      ]
    ]);
    var PlayCircle = createLucideIcon("PlayCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
    ]);
    var PlaySquare = createLucideIcon("PlaySquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }]
    ]);
    var Play = createLucideIcon("Play", [
      ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
    ]);
    var Plug2 = createLucideIcon("Plug2", [
      ["path", { d: "M9 2v6", key: "17ngun" }],
      ["path", { d: "M15 2v6", key: "s7yy2p" }],
      ["path", { d: "M12 17v5", key: "bb1du9" }],
      ["path", { d: "M5 8h14", key: "pcz4l3" }],
      ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z", key: "nd4hoy" }]
    ]);
    var PlugZap2 = createLucideIcon("PlugZap2", [
      ["path", { d: "m13 2-2 2.5h3L12 7", key: "1me98u" }],
      ["path", { d: "M10 14v-3", key: "1mllf3" }],
      ["path", { d: "M14 14v-3", key: "1l3fkq" }],
      ["path", { d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z", key: "jd5pat" }],
      ["path", { d: "M12 22v-3", key: "kmzjlo" }]
    ]);
    var PlugZap = createLucideIcon("PlugZap", [
      [
        "path",
        { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
      ],
      ["path", { d: "m2 22 3-3", key: "19mgm9" }],
      ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
      ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
      ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
    ]);
    var Plug = createLucideIcon("Plug", [
      ["path", { d: "M12 22v-5", key: "1ega77" }],
      ["path", { d: "M9 8V2", key: "14iosj" }],
      ["path", { d: "M15 8V2", key: "18g5xt" }],
      ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
    ]);
    var PlusCircle = createLucideIcon("PlusCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "M12 8v8", key: "napkw2" }]
    ]);
    var PlusSquare = createLucideIcon("PlusSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "M12 8v8", key: "napkw2" }]
    ]);
    var Plus = createLucideIcon("Plus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }]
    ]);
    var PocketKnife = createLucideIcon("PocketKnife", [
      ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }],
      ["path", { d: "M18 6h.01", key: "1v4wsw" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }],
      ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]
    ]);
    var Pocket = createLucideIcon("Pocket", [
      [
        "path",
        {
          d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
          key: "1mz881"
        }
      ],
      ["polyline", { points: "8 10 12 14 16 10", key: "w4mbv5" }]
    ]);
    var Podcast = createLucideIcon("Podcast", [
      ["circle", { cx: "12", cy: "11", r: "1", key: "1gvufo" }],
      [
        "path",
        {
          d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
          key: "1n5fvv"
        }
      ],
      ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
      ["path", { d: "M17 18.5a9 9 0 1 0-10 0", key: "jqtxkf" }]
    ]);
    var Pointer = createLucideIcon("Pointer", [
      ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
      ["path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "1pp0yd" }],
      ["path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1", key: "u654g" }],
      ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10", key: "1e2dtv" }],
      [
        "path",
        {
          d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
          key: "g6ys72"
        }
      ]
    ]);
    var Popcorn = createLucideIcon("Popcorn", [
      [
        "path",
        {
          d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
          key: "10td1f"
        }
      ],
      ["path", { d: "M10 22 9 8", key: "yjptiv" }],
      ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
      [
        "path",
        {
          d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
          key: "1qo33t"
        }
      ]
    ]);
    var Popsicle = createLucideIcon("Popsicle", [
      [
        "path",
        {
          d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
          key: "1o68ps"
        }
      ],
      ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]
    ]);
    var PoundSterling = createLucideIcon("PoundSterling", [
      ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
      ["path", { d: "M10 7v14", key: "18tmcs" }],
      ["path", { d: "M6 21h12", key: "4dkmi1" }],
      ["path", { d: "M6 13h10", key: "ybwr4a" }]
    ]);
    var PowerCircle = createLucideIcon("PowerCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 12V6", key: "30zewn" }],
      ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5", key: "1r0tk2" }]
    ]);
    var PowerOff = createLucideIcon("PowerOff", [
      ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
      ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
      ["path", { d: "M12 2v4", key: "3427ic" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]);
    var PowerSquare = createLucideIcon("PowerSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M12 7v5", key: "ma6bk" }],
      ["path", { d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8", key: "15eubv" }]
    ]);
    var Power = createLucideIcon("Power", [
      ["path", { d: "M12 2v10", key: "mnfbl" }],
      ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
    ]);
    var Presentation = createLucideIcon("Presentation", [
      ["path", { d: "M2 3h20", key: "91anmk" }],
      ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
      ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
    ]);
    var Printer = createLucideIcon("Printer", [
      ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
      [
        "path",
        {
          d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
          key: "143wyd"
        }
      ],
      ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }]
    ]);
    var Projector = createLucideIcon("Projector", [
      ["path", { d: "M5 7 3 5", key: "1yys58" }],
      ["path", { d: "M9 6V3", key: "1ptz9u" }],
      ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
      ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
      [
        "path",
        {
          d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
          key: "2frwzc"
        }
      ],
      ["path", { d: "M16 16h2", key: "dnq2od" }]
    ]);
    var Puzzle = createLucideIcon("Puzzle", [
      [
        "path",
        {
          d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
          key: "i0oyt7"
        }
      ]
    ]);
    var Pyramid = createLucideIcon("Pyramid", [
      [
        "path",
        {
          d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
          key: "aenxs0"
        }
      ],
      ["path", { d: "M12 2v20", key: "t6zp3m" }]
    ]);
    var QrCode = createLucideIcon("QrCode", [
      ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
      ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
      ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
      ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
      ["path", { d: "M21 21v.01", key: "ents32" }],
      ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
      ["path", { d: "M3 12h.01", key: "nlz23k" }],
      ["path", { d: "M12 3h.01", key: "n36tog" }],
      ["path", { d: "M12 16v.01", key: "133mhm" }],
      ["path", { d: "M16 12h1", key: "1slzba" }],
      ["path", { d: "M21 12v.01", key: "1lwtk9" }],
      ["path", { d: "M12 21v-1", key: "1880an" }]
    ]);
    var Quote = createLucideIcon("Quote", [
      [
        "path",
        {
          d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
          key: "4rm80e"
        }
      ],
      [
        "path",
        {
          d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
          key: "10za9r"
        }
      ]
    ]);
    var Rabbit = createLucideIcon("Rabbit", [
      ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
      [
        "path",
        {
          d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3",
          key: "1i2yr3"
        }
      ],
      ["path", { d: "M7.61 12.53a3 3 0 1 0-1.6 4.3", key: "9ygxkv" }],
      ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
      ["path", { d: "M18 12h.01", key: "yjnet6" }]
    ]);
    var Radar = createLucideIcon("Radar", [
      ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
      ["path", { d: "M4 6h.01", key: "oypzma" }],
      ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
      ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
    ]);
    var Radiation = createLucideIcon("Radiation", [
      ["path", { d: "M12 12h0.01", key: "6ztbls" }],
      [
        "path",
        {
          d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
          key: "wy49g3"
        }
      ],
      [
        "path",
        {
          d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
          key: "vklnvr"
        }
      ],
      [
        "path",
        {
          d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
          key: "wkdf1o"
        }
      ]
    ]);
    var RadioReceiver = createLucideIcon("RadioReceiver", [
      ["path", { d: "M5 16v2", key: "g5qcv5" }],
      ["path", { d: "M19 16v2", key: "1gbaio" }],
      ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }],
      ["path", { d: "M18 12h0", key: "1ucjzd" }]
    ]);
    var RadioTower = createLucideIcon("RadioTower", [
      ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
      ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
      ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
      ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
      ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
      ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
      ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
    ]);
    var Radio = createLucideIcon("Radio", [
      ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
      ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
      ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
    ]);
    var Radius = createLucideIcon("Radius", [
      ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
      ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
      ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
    ]);
    var RailSymbol = createLucideIcon("RailSymbol", [
      ["path", { d: "M5 15h14", key: "m0yey3" }],
      ["path", { d: "M5 9h14", key: "7tsvo6" }],
      ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]
    ]);
    var Rainbow = createLucideIcon("Rainbow", [
      ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
      ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
      ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]
    ]);
    var Rat = createLucideIcon("Rat", [
      [
        "path",
        {
          d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",
          key: "16aj0u"
        }
      ],
      [
        "path",
        {
          d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",
          key: "1crdmb"
        }
      ],
      ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5", key: "1ol3lk" }],
      ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
      ["path", { d: "M16 9h.01", key: "1bdo4e" }]
    ]);
    var Ratio = createLucideIcon("Ratio", [
      ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }],
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
    ]);
    var Receipt = createLucideIcon("Receipt", [
      [
        "path",
        {
          d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
          key: "wqdwcb"
        }
      ],
      ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
      ["path", { d: "M12 17V7", key: "pyj7ub" }]
    ]);
    var RectangleHorizontal = createLucideIcon("RectangleHorizontal", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
    ]);
    var RectangleVertical = createLucideIcon("RectangleVertical", [
      ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
    ]);
    var Recycle = createLucideIcon("Recycle", [
      [
        "path",
        {
          d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
          key: "x6z5xu"
        }
      ],
      [
        "path",
        {
          d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
          key: "1x4zh5"
        }
      ],
      ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
      ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
      [
        "path",
        {
          d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
          key: "9tzpgr"
        }
      ],
      ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]
    ]);
    var Redo2 = createLucideIcon("Redo2", [
      ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
      ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
    ]);
    var RedoDot = createLucideIcon("RedoDot", [
      ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
      ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
    ]);
    var Redo = createLucideIcon("Redo", [
      ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
      ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
    ]);
    var RefreshCcwDot = createLucideIcon("RefreshCcwDot", [
      ["path", { d: "M3 2v6h6", key: "18ldww" }],
      ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8", key: "1pbrqz" }],
      ["path", { d: "M21 22v-6h-6", key: "usdfbe" }],
      ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7", key: "1hosoe" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
    ]);
    var RefreshCcw = createLucideIcon("RefreshCcw", [
      ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
      ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
      ["path", { d: "M16 16h5v5", key: "ccwih5" }]
    ]);
    var RefreshCwOff = createLucideIcon("RefreshCwOff", [
      ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }],
      ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
      ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }],
      ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
    ]);
    var RefreshCw2 = createLucideIcon("RefreshCw", [
      ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
      ["path", { d: "M8 16H3v5", key: "1cv678" }]
    ]);
    var Refrigerator = createLucideIcon("Refrigerator", [
      [
        "path",
        { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }
      ],
      ["path", { d: "M5 10h14", key: "elsbfy" }],
      ["path", { d: "M15 7v6", key: "1nx30x" }]
    ]);
    var Regex = createLucideIcon("Regex", [
      ["path", { d: "M17 3v10", key: "15fgeh" }],
      ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
      ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
      [
        "path",
        { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
      ]
    ]);
    var RemoveFormatting = createLucideIcon("RemoveFormatting", [
      ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
      ["path", { d: "M5 20h6", key: "1h6pxn" }],
      ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
      ["path", { d: "m15 15 5 5", key: "me55sn" }],
      ["path", { d: "m20 15-5 5", key: "11p7ol" }]
    ]);
    var Repeat1 = createLucideIcon("Repeat1", [
      ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
      ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
      ["path", { d: "M11 10h1v4", key: "70cz1p" }]
    ]);
    var Repeat2 = createLucideIcon("Repeat2", [
      ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
      ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
      ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
      ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
    ]);
    var Repeat = createLucideIcon("Repeat", [
      ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
      ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
      ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
      ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
    ]);
    var ReplaceAll = createLucideIcon("ReplaceAll", [
      ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
      ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
      ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
      ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
      ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
      ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }],
      ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "1w9p8c" }],
      ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "m45eaa" }]
    ]);
    var Replace = createLucideIcon("Replace", [
      ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
      ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
      ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
      ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
      ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
      ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
      ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }]
    ]);
    var ReplyAll = createLucideIcon("ReplyAll", [
      ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
      ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
      ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
    ]);
    var Reply = createLucideIcon("Reply", [
      ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
      ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
    ]);
    var Rewind = createLucideIcon("Rewind", [
      ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
      ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }]
    ]);
    var Ribbon = createLucideIcon("Ribbon", [
      [
        "path",
        {
          d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",
          key: "1njedg"
        }
      ],
      [
        "path",
        {
          d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",
          key: "10len7"
        }
      ],
      ["path", { d: "m9.35 14.53 2.64-3.31", key: "1wfi09" }],
      ["path", { d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5", key: "1ezyge" }],
      ["path", { d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0", key: "aw0zq5" }]
    ]);
    var Rocket = createLucideIcon("Rocket", [
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
          key: "m3kijz"
        }
      ],
      [
        "path",
        {
          d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
          key: "1fmvmk"
        }
      ],
      ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
    ]);
    var RockingChair = createLucideIcon("RockingChair", [
      ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
      ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }],
      ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }],
      ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]
    ]);
    var RollerCoaster = createLucideIcon("RollerCoaster", [
      ["path", { d: "M6 19V5", key: "1r845m" }],
      ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
      ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
      ["path", { d: "M18 5v4", key: "1tajlv" }],
      ["path", { d: "M18 19v-6", key: "ielfq3" }],
      ["path", { d: "M22 19V9", key: "158nzp" }],
      ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]
    ]);
    var Rotate3d = createLucideIcon("Rotate3d", [
      [
        "path",
        {
          d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
          key: "10n0gc"
        }
      ],
      ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
      [
        "path",
        {
          d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
          key: "1lxi77"
        }
      ]
    ]);
    var RotateCcw = createLucideIcon("RotateCcw", [
      ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
      ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
    ]);
    var RotateCw2 = createLucideIcon("RotateCw", [
      ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]);
    var RouteOff = createLucideIcon("RouteOff", [
      ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
      ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
      ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
      ["path", { d: "M15 5h-4.3", key: "6537je" }],
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
    ]);
    var Route = createLucideIcon("Route", [
      ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
      ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
    ]);
    var Router = createLucideIcon("Router", [
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
      ["path", { d: "M6.01 18H6", key: "19vcac" }],
      ["path", { d: "M10.01 18H10", key: "uamcmx" }],
      ["path", { d: "M15 10v4", key: "qjz1xs" }],
      ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
      ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
    ]);
    var Rows = createLucideIcon("Rows", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }]
    ]);
    var Rss = createLucideIcon("Rss", [
      ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
      ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
      ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
    ]);
    var Ruler = createLucideIcon("Ruler", [
      [
        "path",
        {
          d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
          key: "icamh8"
        }
      ],
      ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
      ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
      ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
      ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
    ]);
    var RussianRuble = createLucideIcon("RussianRuble", [
      ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
      ["path", { d: "M6 15h8", key: "1y8f6l" }]
    ]);
    var Sailboat = createLucideIcon("Sailboat", [
      ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z", key: "1404fh" }],
      ["path", { d: "M21 14 10 2 3 14h18Z", key: "1nzg7v" }],
      ["path", { d: "M10 2v16", key: "1labyt" }]
    ]);
    var Salad = createLucideIcon("Salad", [
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
      [
        "path",
        {
          d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
          key: "10xrj0"
        }
      ],
      ["path", { d: "m13 12 4-4", key: "1hckqy" }],
      ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
    ]);
    var Sandwich = createLucideIcon("Sandwich", [
      ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3", key: "34v9d7" }],
      [
        "path",
        {
          d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",
          key: "1k5vfb"
        }
      ],
      ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z", key: "1oe7l6" }],
      ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z", key: "1ts2ri" }]
    ]);
    var SatelliteDish = createLucideIcon("SatelliteDish", [
      ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
      ["path", { d: "m9 15 3-3", key: "88sc13" }],
      ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
      ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]
    ]);
    var Satellite = createLucideIcon("Satellite", [
      ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
      ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
      ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
      ["path", { d: "m16 8 3-3", key: "x428zp" }],
      ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }]
    ]);
    var SaveAll = createLucideIcon("SaveAll", [
      ["path", { d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z", key: "1unput" }],
      ["path", { d: "M10 2v4h6", key: "1p5sg6" }],
      ["path", { d: "M18 18v-7h-8v7", key: "1oniuk" }],
      ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }]
    ]);
    var Save = createLucideIcon("Save", [
      ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
      ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
      ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
    ]);
    var Scale3d = createLucideIcon("Scale3d", [
      ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
      ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
      ["path", { d: "M5 7v12h12", key: "vtaa4r" }],
      ["path", { d: "m5 19 6-6", key: "jh6hbb" }]
    ]);
    var Scale = createLucideIcon("Scale", [
      ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
      ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
    ]);
    var Scaling = createLucideIcon("Scaling", [
      ["path", { d: "M21 3 9 15", key: "15kdhq" }],
      ["path", { d: "M12 3H3v18h18v-9", key: "8suug0" }],
      ["path", { d: "M16 3h5v5", key: "1806ms" }],
      ["path", { d: "M14 15H9v-5", key: "pi4jk9" }]
    ]);
    var ScanBarcode = createLucideIcon("ScanBarcode", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["path", { d: "M8 7v10", key: "23sfjj" }],
      ["path", { d: "M12 7v10", key: "jspqdw" }],
      ["path", { d: "M17 7v10", key: "578dap" }]
    ]);
    var ScanEye = createLucideIcon("ScanEye", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5", key: "nhuolu" }]
    ]);
    var ScanFace = createLucideIcon("ScanFace", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
      ["path", { d: "M9 9h.01", key: "1q5me6" }],
      ["path", { d: "M15 9h.01", key: "x1ddxp" }]
    ]);
    var ScanLine = createLucideIcon("ScanLine", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }]
    ]);
    var ScanSearch = createLucideIcon("ScanSearch", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
    ]);
    var ScanText = createLucideIcon("ScanText", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["path", { d: "M7 8h8", key: "1jbsf9" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["path", { d: "M7 16h6", key: "1vyc9m" }]
    ]);
    var Scan = createLucideIcon("Scan", [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
    ]);
    var ScatterChart = createLucideIcon("ScatterChart", [
      ["circle", { cx: "7.5", cy: "7.5", r: ".5", key: "1x97lo" }],
      ["circle", { cx: "18.5", cy: "5.5", r: ".5", key: "56iowl" }],
      ["circle", { cx: "11.5", cy: "11.5", r: ".5", key: "m9xkw9" }],
      ["circle", { cx: "7.5", cy: "16.5", r: ".5", key: "14ln9z" }],
      ["circle", { cx: "17.5", cy: "14.5", r: ".5", key: "14qxqt" }],
      ["path", { d: "M3 3v18h18", key: "1s2lah" }]
    ]);
    var School2 = createLucideIcon("School2", [
      ["circle", { cx: "12", cy: "10", r: "1", key: "1gnqs8" }],
      ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "8z0lq4" }],
      ["path", { d: "M6 17v.01", key: "roodi6" }],
      ["path", { d: "M6 13v.01", key: "67c122" }],
      ["path", { d: "M18 17v.01", key: "12ktxm" }],
      ["path", { d: "M18 13v.01", key: "tn1rt1" }],
      ["path", { d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "jfgdp0" }]
    ]);
    var School = createLucideIcon("School", [
      ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
      ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" }],
      ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
      ["path", { d: "M18 5v17", key: "1sw6gf" }],
      ["path", { d: "M6 5v17", key: "1xfsm0" }],
      ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
    ]);
    var ScissorsLineDashed = createLucideIcon("ScissorsLineDashed", [
      ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
      ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
      ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
      ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
      ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
      ["path", { d: "M16 12h-2", key: "10asgb" }],
      ["path", { d: "M22 12h-2", key: "14jgyd" }]
    ]);
    var ScissorsSquareDashedBottom = createLucideIcon("ScissorsSquareDashedBottom", [
      [
        "path",
        { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2", key: "1vzg26" }
      ],
      ["path", { d: "M10 22H8", key: "euku7a" }],
      ["path", { d: "M16 22h-2", key: "18d249" }],
      ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
      ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
      ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
      ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
      ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
    ]);
    var ScissorsSquare = createLucideIcon("ScissorsSquare", [
      ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2", key: "1btzen" }],
      ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
      ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
      ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
      ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
      ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
    ]);
    var Scissors = createLucideIcon("Scissors", [
      ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
      ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
      ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
      ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
      ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
    ]);
    var ScreenShareOff = createLucideIcon("ScreenShareOff", [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "m22 3-5 5", key: "12jva0" }],
      ["path", { d: "m17 3 5 5", key: "k36vhe" }]
    ]);
    var ScreenShare = createLucideIcon("ScreenShare", [
      ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
      ["path", { d: "M8 21h8", key: "1ev6f3" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }],
      ["path", { d: "m17 8 5-5", key: "fqif7o" }],
      ["path", { d: "M17 3h5v5", key: "1o3tu8" }]
    ]);
    var ScrollText = createLucideIcon("ScrollText", [
      [
        "path",
        { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
      ],
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
      ["path", { d: "M15 8h-5", key: "1khuty" }],
      ["path", { d: "M15 12h-5", key: "r7krc0" }]
    ]);
    var Scroll = createLucideIcon("Scroll", [
      [
        "path",
        { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
      ],
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }]
    ]);
    var SearchCheck = createLucideIcon("SearchCheck", [
      ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    var SearchCode = createLucideIcon("SearchCode", [
      ["path", { d: "m9 9-2 2 2 2", key: "17gsfh" }],
      ["path", { d: "m13 13 2-2-2-2", key: "186z8k" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    var SearchSlash = createLucideIcon("SearchSlash", [
      ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    var SearchX = createLucideIcon("SearchX", [
      ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
      ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    var Search = createLucideIcon("Search", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    var SendHorizontal = createLucideIcon("SendHorizontal", [
      ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
      ["path", { d: "M6 12h16", key: "s4cdu5" }]
    ]);
    var SendToBack = createLucideIcon("SendToBack", [
      ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
      ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
      ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
      ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]
    ]);
    var Send = createLucideIcon("Send", [
      ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
      ["path", { d: "M22 2 11 13", key: "nzbqef" }]
    ]);
    var SeparatorHorizontal = createLucideIcon("SeparatorHorizontal", [
      ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
      ["polyline", { points: "8 8 12 4 16 8", key: "zo8t4w" }],
      ["polyline", { points: "16 16 12 20 8 16", key: "1oyrid" }]
    ]);
    var SeparatorVertical = createLucideIcon("SeparatorVertical", [
      ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }],
      ["polyline", { points: "8 8 4 12 8 16", key: "bnfmv4" }],
      ["polyline", { points: "16 16 20 12 16 8", key: "u90052" }]
    ]);
    var ServerCog = createLucideIcon("ServerCog", [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      [
        "path",
        {
          d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
          key: "tn8das"
        }
      ],
      [
        "path",
        {
          d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
          key: "1g2pve"
        }
      ],
      ["path", { d: "M6 6h.01", key: "1utrut" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
      ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
      ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
      ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
      ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
      ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
      ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
      ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }]
    ]);
    var ServerCrash = createLucideIcon("ServerCrash", [
      [
        "path",
        {
          d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
          key: "4b9dqc"
        }
      ],
      [
        "path",
        {
          d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
          key: "22nnkd"
        }
      ],
      ["path", { d: "M6 6h.01", key: "1utrut" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]
    ]);
    var ServerOff = createLucideIcon("ServerOff", [
      ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }],
      ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }],
      ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
      ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }],
      ["path", { d: "M6 18h.01", key: "uhywen" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]);
    var Server = createLucideIcon("Server", [
      ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
      ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
      ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
      ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
    ]);
    var Settings2 = createLucideIcon("Settings2", [
      ["path", { d: "M20 7h-9", key: "3s1dr2" }],
      ["path", { d: "M14 17H5", key: "gfn3mx" }],
      ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
      ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
    ]);
    var Settings = createLucideIcon("Settings", [
      [
        "path",
        {
          d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
          key: "1qme2f"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]);
    var Shapes = createLucideIcon("Shapes", [
      [
        "path",
        {
          d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
          key: "1bo67w"
        }
      ],
      ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
      ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
    ]);
    var Share2 = createLucideIcon("Share2", [
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
      ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
      ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
      ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
      ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
    ]);
    var Share = createLucideIcon("Share", [
      ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
      ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }]
    ]);
    var Sheet = createLucideIcon("Sheet", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
      ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
      ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
      ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]
    ]);
    var Shell = createLucideIcon("Shell", [
      [
        "path",
        {
          d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
          key: "1cn552"
        }
      ]
    ]);
    var ShieldAlert = createLucideIcon("ShieldAlert", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M12 8v4", key: "1got3b" }],
      ["path", { d: "M12 16h.01", key: "1drbdi" }]
    ]);
    var ShieldBan = createLucideIcon("ShieldBan", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "m4 5 14 12", key: "1ta6nf" }]
    ]);
    var ShieldCheck = createLucideIcon("ShieldCheck", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]);
    var ShieldEllipsis = createLucideIcon("ShieldEllipsis", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M8 11h.01", key: "1dfujw" }],
      ["path", { d: "M12 11h.01", key: "z322tv" }],
      ["path", { d: "M16 11h.01", key: "xkw8gn" }]
    ]);
    var ShieldHalf = createLucideIcon("ShieldHalf", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M12 22V2", key: "zs6s6o" }]
    ]);
    var ShieldMinus = createLucideIcon("ShieldMinus", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M8 11h8", key: "vwpz6n" }]
    ]);
    var ShieldOff = createLucideIcon("ShieldOff", [
      ["path", { d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2", key: "342pvf" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38", key: "p0ycf4" }]
    ]);
    var ShieldPlus = createLucideIcon("ShieldPlus", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M8 11h8", key: "vwpz6n" }],
      ["path", { d: "M12 15V7", key: "1ycneb" }]
    ]);
    var ShieldQuestion = createLucideIcon("ShieldQuestion", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ]);
    var ShieldX = createLucideIcon("ShieldX", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
      ["path", { d: "m14.5 9-5 5", key: "1m49dw" }],
      ["path", { d: "m9.5 9 5 5", key: "wyx7zg" }]
    ]);
    var Shield = createLucideIcon("Shield", [
      ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
    ]);
    var ShipWheel = createLucideIcon("ShipWheel", [
      ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
      ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
      ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
      ["path", { d: "M22 12h-7.5", key: "le1719" }],
      ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
      ["path", { d: "M12 14.5V22", key: "dgcmos" }],
      ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
      ["path", { d: "M9.5 12H2", key: "r7bup8" }],
      ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
      ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]
    ]);
    var Ship = createLucideIcon("Ship", [
      [
        "path",
        {
          d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
          key: "iegodh"
        }
      ],
      [
        "path",
        { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76", key: "fp8vka" }
      ],
      ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
      ["path", { d: "M12 10v4", key: "1kjpxc" }],
      ["path", { d: "M12 2v3", key: "qbqxhf" }]
    ]);
    var Shirt = createLucideIcon("Shirt", [
      [
        "path",
        {
          d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
          key: "1wgbhj"
        }
      ]
    ]);
    var ShoppingBag = createLucideIcon("ShoppingBag", [
      ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
    ]);
    var ShoppingBasket = createLucideIcon("ShoppingBasket", [
      ["path", { d: "m5 11 4-7", key: "116ra9" }],
      ["path", { d: "m19 11-4-7", key: "cnml18" }],
      ["path", { d: "M2 11h20", key: "3eubbj" }],
      ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4", key: "1x2lvw" }],
      ["path", { d: "m9 11 1 9", key: "1ojof7" }],
      ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
      ["path", { d: "m15 11-1 9", key: "5wnq3a" }]
    ]);
    var ShoppingCart = createLucideIcon("ShoppingCart", [
      ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
      ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
      [
        "path",
        {
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          key: "9zh506"
        }
      ]
    ]);
    var Shovel = createLucideIcon("Shovel", [
      ["path", { d: "M2 22v-5l5-5 5 5-5 5z", key: "1fh25c" }],
      ["path", { d: "M9.5 14.5 16 8", key: "1smz5x" }],
      [
        "path",
        { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2", key: "1q8uv5" }
      ]
    ]);
    var ShowerHead = createLucideIcon("ShowerHead", [
      ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
      ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
      ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
      ["path", { d: "M14 17v.01", key: "eokfpp" }],
      ["path", { d: "M10 16v.01", key: "14uyyl" }],
      ["path", { d: "M13 13v.01", key: "1v1k97" }],
      ["path", { d: "M16 10v.01", key: "5169yg" }],
      ["path", { d: "M11 20v.01", key: "cj92p8" }],
      ["path", { d: "M17 14v.01", key: "11cswd" }],
      ["path", { d: "M20 11v.01", key: "19e0od" }]
    ]);
    var Shrink = createLucideIcon("Shrink", [
      ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
      ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
      ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
      ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]
    ]);
    var Shrub = createLucideIcon("Shrub", [
      ["path", { d: "M12 22v-7l-2-2", key: "eqv9mc" }],
      [
        "path",
        { d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z", key: "12jcau" }
      ],
      ["path", { d: "m14 14-2 2", key: "847xa2" }]
    ]);
    var Shuffle = createLucideIcon("Shuffle", [
      ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
      ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
      ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
      ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
      ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }]
    ]);
    var SigmaSquare = createLucideIcon("SigmaSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]
    ]);
    var Sigma = createLucideIcon("Sigma", [
      ["path", { d: "M18 7V4H6l6 8-6 8h12v-3", key: "zis8ev" }]
    ]);
    var SignalHigh = createLucideIcon("SignalHigh", [
      ["path", { d: "M2 20h.01", key: "4haj6o" }],
      ["path", { d: "M7 20v-4", key: "j294jx" }],
      ["path", { d: "M12 20v-8", key: "i3yub9" }],
      ["path", { d: "M17 20V8", key: "1tkaf5" }]
    ]);
    var SignalLow = createLucideIcon("SignalLow", [
      ["path", { d: "M2 20h.01", key: "4haj6o" }],
      ["path", { d: "M7 20v-4", key: "j294jx" }]
    ]);
    var SignalMedium = createLucideIcon("SignalMedium", [
      ["path", { d: "M2 20h.01", key: "4haj6o" }],
      ["path", { d: "M7 20v-4", key: "j294jx" }],
      ["path", { d: "M12 20v-8", key: "i3yub9" }]
    ]);
    var SignalZero = createLucideIcon("SignalZero", [["path", { d: "M2 20h.01", key: "4haj6o" }]]);
    var Signal = createLucideIcon("Signal", [
      ["path", { d: "M2 20h.01", key: "4haj6o" }],
      ["path", { d: "M7 20v-4", key: "j294jx" }],
      ["path", { d: "M12 20v-8", key: "i3yub9" }],
      ["path", { d: "M17 20V8", key: "1tkaf5" }],
      ["path", { d: "M22 4v16", key: "sih9yq" }]
    ]);
    var SignpostBig = createLucideIcon("SignpostBig", [
      ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
      ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
      ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
      ["path", { d: "M8 22h8", key: "rmew8v" }]
    ]);
    var Signpost = createLucideIcon("Signpost", [
      ["path", { d: "M12 3v3", key: "1n5kay" }],
      ["path", { d: "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z", key: "27os56" }],
      ["path", { d: "M12 13v8", key: "1l5pq0" }]
    ]);
    var Siren = createLucideIcon("Siren", [
      ["path", { d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z", key: "rmc51c" }],
      ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z", key: "yyvmjy" }],
      ["path", { d: "M21 12h1", key: "jtio3y" }],
      ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
      ["path", { d: "M2 12h1", key: "1uaihz" }],
      ["path", { d: "M12 2v1", key: "11qlp1" }],
      ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
      ["path", { d: "M12 12v6", key: "3ahymv" }]
    ]);
    var SkipBack = createLucideIcon("SkipBack", [
      ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
      ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
    ]);
    var SkipForward = createLucideIcon("SkipForward", [
      ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
      ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
    ]);
    var Skull = createLucideIcon("Skull", [
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["path", { d: "M8 20v2h8v-2", key: "ded4og" }],
      ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
      ["path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20", key: "xq9p5u" }]
    ]);
    var Slack = createLucideIcon("Slack", [
      ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
      ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
      ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
      ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
      ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
      ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
      ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
      ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]
    ]);
    var Slash = createLucideIcon("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
    var Slice = createLucideIcon("Slice", [
      ["path", { d: "m8 14-6 6h9v-3", key: "zo3j9a" }],
      ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z", key: "1dzx0j" }]
    ]);
    var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
      ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
      ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
      ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
      ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
      ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
      ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
      ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
      ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
      ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
    ]);
    var Sliders = createLucideIcon("Sliders", [
      ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
      ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
      ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
      ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
      ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
      ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
      ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
      ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]
    ]);
    var SmartphoneCharging = createLucideIcon("SmartphoneCharging", [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
      ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]
    ]);
    var SmartphoneNfc = createLucideIcon("SmartphoneNfc", [
      ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }],
      ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
      ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }],
      ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]
    ]);
    var Smartphone = createLucideIcon("Smartphone", [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }]
    ]);
    var SmilePlus = createLucideIcon("SmilePlus", [
      ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
      ["path", { d: "M16 5h6", key: "1vod17" }],
      ["path", { d: "M19 2v6", key: "4bpg5p" }]
    ]);
    var Smile = createLucideIcon("Smile", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
    ]);
    var Snail = createLucideIcon("Snail", [
      ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }],
      ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
      ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }],
      ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
      ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]
    ]);
    var Snowflake = createLucideIcon("Snowflake", [
      ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
      ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
      ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
      ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
      ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
      ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }]
    ]);
    var Sofa = createLucideIcon("Sofa", [
      ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
      [
        "path",
        {
          d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
          key: "u5qfb7"
        }
      ],
      ["path", { d: "M4 18v2", key: "jwo5n2" }],
      ["path", { d: "M20 18v2", key: "1ar1qi" }],
      ["path", { d: "M12 4v9", key: "oqhhn3" }]
    ]);
    var Soup = createLucideIcon("Soup", [
      ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
      ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
      [
        "path",
        {
          d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
          key: "rpc6vp"
        }
      ],
      [
        "path",
        {
          d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
          key: "1lf63m"
        }
      ],
      [
        "path",
        { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }
      ]
    ]);
    var Space = createLucideIcon("Space", [
      ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
    ]);
    var Spade = createLucideIcon("Spade", [
      [
        "path",
        {
          d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
          key: "40bo9n"
        }
      ],
      ["path", { d: "M12 18v4", key: "jadmvz" }]
    ]);
    var Sparkle = createLucideIcon("Sparkle", [
      [
        "path",
        {
          d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
          key: "nraa5p"
        }
      ]
    ]);
    var Sparkles = createLucideIcon("Sparkles", [
      [
        "path",
        {
          d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
          key: "17u4zn"
        }
      ],
      ["path", { d: "M5 3v4", key: "bklmnn" }],
      ["path", { d: "M19 17v4", key: "iiml17" }],
      ["path", { d: "M3 5h4", key: "nem4j1" }],
      ["path", { d: "M17 19h4", key: "lbex7p" }]
    ]);
    var Speaker = createLucideIcon("Speaker", [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
      ["path", { d: "M12 6h.01", key: "1vi96p" }],
      ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
      ["path", { d: "M12 14h.01", key: "1etili" }]
    ]);
    var Speech = createLucideIcon("Speech", [
      [
        "path",
        {
          d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
          key: "11atix"
        }
      ],
      ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
      ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]
    ]);
    var SpellCheck2 = createLucideIcon("SpellCheck2", [
      ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      [
        "path",
        {
          d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
          key: "8mdmtu"
        }
      ]
    ]);
    var SpellCheck = createLucideIcon("SpellCheck", [
      ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
    ]);
    var Spline = createLucideIcon("Spline", [
      ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
      ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
      ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
    ]);
    var SplitSquareHorizontal = createLucideIcon("SplitSquareHorizontal", [
      ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
      ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
    ]);
    var SplitSquareVertical = createLucideIcon("SplitSquareVertical", [
      ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
      ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
    ]);
    var Split = createLucideIcon("Split", [
      ["path", { d: "M16 3h5v5", key: "1806ms" }],
      ["path", { d: "M8 3H3v5", key: "15dfkv" }],
      ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
      ["path", { d: "m15 9 6-6", key: "ko1vev" }]
    ]);
    var SprayCan = createLucideIcon("SprayCan", [
      ["path", { d: "M3 3h.01", key: "159qn6" }],
      ["path", { d: "M7 5h.01", key: "1hq22a" }],
      ["path", { d: "M11 7h.01", key: "1osv80" }],
      ["path", { d: "M3 7h.01", key: "1xzrh3" }],
      ["path", { d: "M7 9h.01", key: "19b3jx" }],
      ["path", { d: "M3 11h.01", key: "1eifu7" }],
      ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
      ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }],
      ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
      ["path", { d: "m13 19 8-2", key: "1y2vml" }]
    ]);
    var Sprout = createLucideIcon("Sprout", [
      ["path", { d: "M7 20h10", key: "e6iznv" }],
      ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
      [
        "path",
        {
          d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
          key: "9gtqwd"
        }
      ],
      [
        "path",
        {
          d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
          key: "bkxnd2"
        }
      ]
    ]);
    var SquareAsterisk = createLucideIcon("SquareAsterisk", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M12 8v8", key: "napkw2" }],
      ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
      ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
    ]);
    var SquareCode = createLucideIcon("SquareCode", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
      ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }]
    ]);
    var SquareDashedBottomCode = createLucideIcon("SquareDashedBottomCode", [
      ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
      ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }],
      [
        "path",
        { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
      ],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }]
    ]);
    var SquareDashedBottom = createLucideIcon("SquareDashedBottom", [
      [
        "path",
        { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
      ],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }]
    ]);
    var SquareDot = createLucideIcon("SquareDot", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
    ]);
    var SquareEqual = createLucideIcon("SquareEqual", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M7 10h10", key: "1101jm" }],
      ["path", { d: "M7 14h10", key: "1mhdw3" }]
    ]);
    var SquareSlash = createLucideIcon("SquareSlash", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
    ]);
    var SquareStack = createLucideIcon("SquareStack", [
      ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }],
      ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }],
      ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
    ]);
    var SquareUserRound = createLucideIcon("SquareUserRound", [
      ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
      ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
    ]);
    var SquareUser = createLucideIcon("SquareUser", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]
    ]);
    var Square = createLucideIcon("Square", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
    ]);
    var Squirrel = createLucideIcon("Squirrel", [
      [
        "path",
        {
          d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
          key: "980v8a"
        }
      ],
      ["path", { d: "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "19wibc" }],
      ["path", { d: "M15.2 22a3 3 0 0 0-2.2-5", key: "13bpac" }],
      ["path", { d: "M18 13h.01", key: "9veqaj" }]
    ]);
    var Stamp = createLucideIcon("Stamp", [
      ["path", { d: "M5 22h14", key: "ehvnwv" }],
      [
        "path",
        {
          d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",
          key: "1sy9ra"
        }
      ],
      [
        "path",
        { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13", key: "cnxgux" }
      ]
    ]);
    var StarHalf = createLucideIcon("StarHalf", [
      ["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2", key: "nare05" }]
    ]);
    var StarOff = createLucideIcon("StarOff", [
      ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }],
      ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Star = createLucideIcon("Star", [
      [
        "polygon",
        {
          points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
          key: "8f66p6"
        }
      ]
    ]);
    var StepBack = createLucideIcon("StepBack", [
      ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
      ["polygon", { points: "14,20 4,12 14,4", key: "ypakod" }]
    ]);
    var StepForward = createLucideIcon("StepForward", [
      ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
      ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
    ]);
    var Stethoscope = createLucideIcon("Stethoscope", [
      [
        "path",
        {
          d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
          key: "1jd90r"
        }
      ],
      ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
      ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
    ]);
    var Sticker = createLucideIcon("Sticker", [
      [
        "path",
        { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
      ],
      ["path", { d: "M15 3v6h6", key: "edgan2" }],
      ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }],
      ["path", { d: "M8 13h0", key: "jdup5h" }],
      ["path", { d: "M16 13h0", key: "l4i2ga" }]
    ]);
    var StickyNote = createLucideIcon("StickyNote", [
      [
        "path",
        { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
      ],
      ["path", { d: "M15 3v6h6", key: "edgan2" }]
    ]);
    var StopCircle = createLucideIcon("StopCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["rect", { width: "6", height: "6", x: "9", y: "9", key: "1wrtvo" }]
    ]);
    var Store = createLucideIcon("Store", [
      ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
      ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
      ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
      ["path", { d: "M2 7h20", key: "1fcdvo" }],
      [
        "path",
        {
          d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
          key: "jon5kx"
        }
      ]
    ]);
    var StretchHorizontal = createLucideIcon("StretchHorizontal", [
      ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
      ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
    ]);
    var StretchVertical = createLucideIcon("StretchVertical", [
      ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
      ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
    ]);
    var Strikethrough = createLucideIcon("Strikethrough", [
      ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
      ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
    ]);
    var Subscript = createLucideIcon("Subscript", [
      ["path", { d: "m4 5 8 8", key: "1eunvl" }],
      ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
      [
        "path",
        {
          d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
          key: "e8ta8j"
        }
      ]
    ]);
    var Subtitles = createLucideIcon("Subtitles", [
      ["path", { d: "M7 13h4", key: "1m1xj0" }],
      ["path", { d: "M15 13h2", key: "vgjay3" }],
      ["path", { d: "M7 9h2", key: "1q072n" }],
      ["path", { d: "M13 9h4", key: "o7fxw0" }],
      ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", key: "5somay" }]
    ]);
    var SunDim = createLucideIcon("SunDim", [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 4h.01", key: "1ujb9j" }],
      ["path", { d: "M20 12h.01", key: "1ykeid" }],
      ["path", { d: "M12 20h.01", key: "zekei9" }],
      ["path", { d: "M4 12h.01", key: "158zrr" }],
      ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
      ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
      ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
      ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
    ]);
    var SunMedium = createLucideIcon("SunMedium", [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 3v1", key: "1asbbs" }],
      ["path", { d: "M12 20v1", key: "1wcdkc" }],
      ["path", { d: "M3 12h1", key: "lp3yf2" }],
      ["path", { d: "M20 12h1", key: "1vloll" }],
      ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
      ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
      ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
      ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
    ]);
    var SunMoon = createLucideIcon("SunMoon", [
      ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
      ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
      ["path", { d: "M2 12h2", key: "1t8f8n" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
      ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
    ]);
    var SunSnow = createLucideIcon("SunSnow", [
      ["path", { d: "M10 9a3 3 0 1 0 0 6", key: "6zmtdl" }],
      ["path", { d: "M2 12h1", key: "1uaihz" }],
      ["path", { d: "M14 21V3", key: "1llu3z" }],
      ["path", { d: "M10 4V3", key: "pkzwkn" }],
      ["path", { d: "M10 21v-1", key: "1u8rkd" }],
      ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
      ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }],
      ["path", { d: "M14 12h8", key: "4f43i9" }],
      ["path", { d: "m17 4-3 3", key: "15jcng" }],
      ["path", { d: "m14 17 3 3", key: "6tlq38" }],
      ["path", { d: "m21 15-3-3 3-3", key: "1nlnje" }]
    ]);
    var Sun = createLucideIcon("Sun", [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
      ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
      ["path", { d: "M2 12h2", key: "1t8f8n" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
      ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
    ]);
    var Sunrise = createLucideIcon("Sunrise", [
      ["path", { d: "M12 2v8", key: "1q4o3n" }],
      ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
      ["path", { d: "M2 18h2", key: "j10viu" }],
      ["path", { d: "M20 18h2", key: "wocana" }],
      ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
      ["path", { d: "M22 22H2", key: "19qnx5" }],
      ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
    ]);
    var Sunset = createLucideIcon("Sunset", [
      ["path", { d: "M12 10V2", key: "16sf7g" }],
      ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
      ["path", { d: "M2 18h2", key: "j10viu" }],
      ["path", { d: "M20 18h2", key: "wocana" }],
      ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
      ["path", { d: "M22 22H2", key: "19qnx5" }],
      ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
      ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
    ]);
    var Superscript = createLucideIcon("Superscript", [
      ["path", { d: "m4 19 8-8", key: "hr47gm" }],
      ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
      [
        "path",
        {
          d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
          key: "1dfcux"
        }
      ]
    ]);
    var SwissFranc = createLucideIcon("SwissFranc", [
      ["path", { d: "M10 21V3h8", key: "br2l0g" }],
      ["path", { d: "M6 16h9", key: "2py0wn" }],
      ["path", { d: "M10 9.5h7", key: "13dmhz" }]
    ]);
    var SwitchCamera = createLucideIcon("SwitchCamera", [
      ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }],
      ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
      ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]
    ]);
    var Sword = createLucideIcon("Sword", [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }]
    ]);
    var Swords = createLucideIcon("Swords", [
      ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
      ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
      ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
      ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
      ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
      ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
      ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
      ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
    ]);
    var Syringe = createLucideIcon("Syringe", [
      ["path", { d: "m18 2 4 4", key: "22kx64" }],
      ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
      ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
      ["path", { d: "m9 11 4 4", key: "rovt3i" }],
      ["path", { d: "m5 19-3 3", key: "59f2uf" }],
      ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
    ]);
    var Table2 = createLucideIcon("Table2", [
      [
        "path",
        {
          d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
          key: "gugj83"
        }
      ]
    ]);
    var TableProperties = createLucideIcon("TableProperties", [
      ["path", { d: "M15 3v18", key: "14nvp0" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M21 9H3", key: "1338ky" }],
      ["path", { d: "M21 15H3", key: "9uk58r" }]
    ]);
    var Table = createLucideIcon("Table", [
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M3 15h18", key: "5xshup" }]
    ]);
    var TabletSmartphone = createLucideIcon("TabletSmartphone", [
      ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
      ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
      ["path", { d: "M8 18h.01", key: "lrp35t" }]
    ]);
    var Tablet = createLucideIcon("Tablet", [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
    ]);
    var Tablets = createLucideIcon("Tablets", [
      ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
      ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
      ["path", { d: "M12 17h10", key: "ls21zv" }],
      ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]
    ]);
    var Tag = createLucideIcon("Tag", [
      [
        "path",
        {
          d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
          key: "14b2ls"
        }
      ],
      ["path", { d: "M7 7h.01", key: "7u93v4" }]
    ]);
    var Tags = createLucideIcon("Tags", [
      [
        "path",
        {
          d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
          key: "gt587u"
        }
      ],
      ["path", { d: "M6 9.01V9", key: "1flxpt" }],
      ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }]
    ]);
    var Tally1 = createLucideIcon("Tally1", [["path", { d: "M4 4v16", key: "6qkkli" }]]);
    var Tally2 = createLucideIcon("Tally2", [
      ["path", { d: "M4 4v16", key: "6qkkli" }],
      ["path", { d: "M9 4v16", key: "81ygyz" }]
    ]);
    var Tally3 = createLucideIcon("Tally3", [
      ["path", { d: "M4 4v16", key: "6qkkli" }],
      ["path", { d: "M9 4v16", key: "81ygyz" }],
      ["path", { d: "M14 4v16", key: "12vmem" }]
    ]);
    var Tally4 = createLucideIcon("Tally4", [
      ["path", { d: "M4 4v16", key: "6qkkli" }],
      ["path", { d: "M9 4v16", key: "81ygyz" }],
      ["path", { d: "M14 4v16", key: "12vmem" }],
      ["path", { d: "M19 4v16", key: "8ij5ei" }]
    ]);
    var Tally5 = createLucideIcon("Tally5", [
      ["path", { d: "M4 4v16", key: "6qkkli" }],
      ["path", { d: "M9 4v16", key: "81ygyz" }],
      ["path", { d: "M14 4v16", key: "12vmem" }],
      ["path", { d: "M19 4v16", key: "8ij5ei" }],
      ["path", { d: "M22 6 2 18", key: "h9moai" }]
    ]);
    var Tangent = createLucideIcon("Tangent", [
      ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
      ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
      ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
      ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]
    ]);
    var Target = createLucideIcon("Target", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
      ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
    ]);
    var TentTree = createLucideIcon("TentTree", [
      ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
      ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
      ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
      ["path", { d: "M17 14V2", key: "8ymqnk" }],
      ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
      ["path", { d: "M8 14v8", key: "1ghmqk" }],
      ["path", { d: "m9 14 5 8", key: "13pgi6" }]
    ]);
    var Tent = createLucideIcon("Tent", [
      ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
      ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
      ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
      ["path", { d: "M2 21h20", key: "1nyx9w" }]
    ]);
    var TerminalSquare = createLucideIcon("TerminalSquare", [
      ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
      ["path", { d: "M11 13h4", key: "1p7l4v" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
    ]);
    var Terminal = createLucideIcon("Terminal", [
      ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
      ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
    ]);
    var TestTube2 = createLucideIcon("TestTube2", [
      [
        "path",
        { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3", key: "dg8b2p" }
      ],
      ["path", { d: "m16 2 6 6", key: "1gw87d" }],
      ["path", { d: "M12 16H4", key: "1cjfip" }]
    ]);
    var TestTube = createLucideIcon("TestTube", [
      ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2", key: "187lwq" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }],
      ["path", { d: "M14.5 16h-5", key: "1ox875" }]
    ]);
    var TestTubes = createLucideIcon("TestTubes", [
      ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2", key: "12z67u" }],
      ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2", key: "1q2nfy" }],
      ["path", { d: "M3 2h7", key: "7s29d5" }],
      ["path", { d: "M14 2h7", key: "7sicin" }],
      ["path", { d: "M9 16H4", key: "1bfye3" }],
      ["path", { d: "M20 16h-5", key: "ddnjpe" }]
    ]);
    var TextCursorInput = createLucideIcon("TextCursorInput", [
      ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1", key: "18xjzo" }],
      ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5", key: "fj48gi" }],
      ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
      ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
      ["path", { d: "M9 7v10", key: "1vc8ob" }]
    ]);
    var TextCursor = createLucideIcon("TextCursor", [
      ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }],
      ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
      ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]
    ]);
    var TextQuote = createLucideIcon("TextQuote", [
      ["path", { d: "M17 6H3", key: "16j9eg" }],
      ["path", { d: "M21 12H8", key: "scolzb" }],
      ["path", { d: "M21 18H8", key: "1wfozv" }],
      ["path", { d: "M3 12v6", key: "fv4c87" }]
    ]);
    var TextSelect = createLucideIcon("TextSelect", [
      ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
      ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
      ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
      ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
      ["path", { d: "M9 3h1", key: "1yesri" }],
      ["path", { d: "M9 21h1", key: "15o7lz" }],
      ["path", { d: "M14 3h1", key: "1ec4yj" }],
      ["path", { d: "M14 21h1", key: "v9vybs" }],
      ["path", { d: "M3 9v1", key: "1r0deq" }],
      ["path", { d: "M21 9v1", key: "mxsmne" }],
      ["path", { d: "M3 14v1", key: "vnatye" }],
      ["path", { d: "M21 14v1", key: "169vum" }],
      ["line", { x1: "7", x2: "15", y1: "8", y2: "8", key: "1758g8" }],
      ["line", { x1: "7", x2: "17", y1: "12", y2: "12", key: "197423" }],
      ["line", { x1: "7", x2: "13", y1: "16", y2: "16", key: "37cgm6" }]
    ]);
    var Text2 = createLucideIcon("Text", [
      ["path", { d: "M17 6.1H3", key: "wptmhv" }],
      ["path", { d: "M21 12.1H3", key: "1j38uz" }],
      ["path", { d: "M15.1 18H3", key: "1nb16a" }]
    ]);
    var Theater = createLucideIcon("Theater", [
      ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
      ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
      ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
      ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
      ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
      ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
      ["path", { d: "M8 15h8", key: "45n4r" }],
      ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }],
      ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]
    ]);
    var ThermometerSnowflake = createLucideIcon("ThermometerSnowflake", [
      ["path", { d: "M2 12h10", key: "19562f" }],
      ["path", { d: "M9 4v16", key: "81ygyz" }],
      ["path", { d: "m3 9 3 3-3 3", key: "1sas0l" }],
      ["path", { d: "M12 6 9 9 6 6", key: "pfrgxu" }],
      ["path", { d: "m6 18 3-3 1.5 1.5", key: "1e277p" }],
      ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }]
    ]);
    var ThermometerSun = createLucideIcon("ThermometerSun", [
      ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
      ["path", { d: "M12 3v2", key: "1w22ol" }],
      ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
      ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }],
      ["path", { d: "M4 13H2", key: "118le4" }],
      ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }]
    ]);
    var Thermometer = createLucideIcon("Thermometer", [
      ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
    ]);
    var ThumbsDown = createLucideIcon("ThumbsDown", [
      ["path", { d: "M17 14V2", key: "8ymqnk" }],
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
          key: "s6e0r"
        }
      ]
    ]);
    var ThumbsUp = createLucideIcon("ThumbsUp", [
      ["path", { d: "M7 10v12", key: "1qc93n" }],
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
          key: "y3tblf"
        }
      ]
    ]);
    var Ticket = createLucideIcon("Ticket", [
      [
        "path",
        {
          d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
          key: "qn84l0"
        }
      ],
      ["path", { d: "M13 5v2", key: "dyzc3o" }],
      ["path", { d: "M13 17v2", key: "1ont0d" }],
      ["path", { d: "M13 11v2", key: "1wjjxi" }]
    ]);
    var TimerOff = createLucideIcon("TimerOff", [
      ["path", { d: "M10 2h4", key: "n1abiw" }],
      ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
      ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M12 12v-2", key: "fwoke6" }]
    ]);
    var TimerReset = createLucideIcon("TimerReset", [
      ["path", { d: "M10 2h4", key: "n1abiw" }],
      ["path", { d: "M12 14v-4", key: "1evpnu" }],
      ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }],
      ["path", { d: "M9 17H4v5", key: "8t5av" }]
    ]);
    var Timer = createLucideIcon("Timer", [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
      ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
    ]);
    var ToggleLeft = createLucideIcon("ToggleLeft", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
      ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]
    ]);
    var ToggleRight = createLucideIcon("ToggleRight", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
      ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }]
    ]);
    var Tornado = createLucideIcon("Tornado", [
      ["path", { d: "M21 4H3", key: "1hwok0" }],
      ["path", { d: "M18 8H6", key: "41n648" }],
      ["path", { d: "M19 12H9", key: "1g4lpz" }],
      ["path", { d: "M16 16h-6", key: "1j5d54" }],
      ["path", { d: "M11 20H9", key: "39obr8" }]
    ]);
    var Torus = createLucideIcon("Torus", [
      ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
      ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]
    ]);
    var TouchpadOff = createLucideIcon("TouchpadOff", [
      ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16", key: "lnt0bk" }],
      ["path", { d: "M2 14h12", key: "d8icqz" }],
      ["path", { d: "M22 14h-2", key: "jrx26d" }],
      ["path", { d: "M12 20v-6", key: "1rm09r" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10", key: "11y8e4" }]
    ]);
    var Touchpad = createLucideIcon("Touchpad", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
      ["path", { d: "M2 14h20", key: "myj16y" }],
      ["path", { d: "M12 20v-6", key: "1rm09r" }]
    ]);
    var TowerControl = createLucideIcon("TowerControl", [
      [
        "path",
        { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }
      ],
      ["path", { d: "M8 13v9", key: "hmv0ci" }],
      ["path", { d: "M16 22v-9", key: "ylnf1u" }],
      ["path", { d: "m9 6 1 7", key: "dpdgam" }],
      ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
      ["path", { d: "M12 6V2", key: "1pj48d" }],
      ["path", { d: "M13 2h-2", key: "mj6ths" }]
    ]);
    var ToyBrick = createLucideIcon("ToyBrick", [
      ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
      ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
      ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
    ]);
    var Tractor = createLucideIcon("Tractor", [
      ["path", { d: "M3 4h9l1 7", key: "1ftpo8" }],
      ["path", { d: "M4 11V4", key: "9ft8pt" }],
      ["path", { d: "M8 10V4", key: "1y5f7n" }],
      ["path", { d: "M18 5c-.6 0-1 .4-1 1v5.6", key: "10zbvr" }],
      ["path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1", key: "2w242w" }],
      ["circle", { cx: "7", cy: "15", r: ".5", key: "fbsjqy" }],
      ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }],
      ["path", { d: "M16 18h-5", key: "bq60fd" }],
      ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }]
    ]);
    var TrafficCone = createLucideIcon("TrafficCone", [
      ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0", key: "flyxqv" }],
      ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3", key: "1nlxxg" }],
      [
        "path",
        {
          d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",
          key: "vz7x1l"
        }
      ],
      [
        "path",
        {
          d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",
          key: "1xfzlw"
        }
      ]
    ]);
    var TrainFrontTunnel = createLucideIcon("TrainFrontTunnel", [
      ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
      ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
      ["path", { d: "M10 15h.01", key: "44in9x" }],
      ["path", { d: "M14 15h.01", key: "5mohn5" }],
      ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }],
      ["path", { d: "m9 19-2 3", key: "iij7hm" }],
      ["path", { d: "m15 19 2 3", key: "npx8sa" }]
    ]);
    var TrainFront = createLucideIcon("TrainFront", [
      ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
      ["path", { d: "m9 15-1-1", key: "1yrq24" }],
      ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
      ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }],
      ["path", { d: "m8 19-2 3", key: "13i0xs" }],
      ["path", { d: "m16 19 2 3", key: "xo31yx" }]
    ]);
    var TrainTrack = createLucideIcon("TrainTrack", [
      ["path", { d: "M2 17 17 2", key: "18b09t" }],
      ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
      ["path", { d: "m5 11 8 8", key: "189pqp" }],
      ["path", { d: "m8 8 8 8", key: "1imecy" }],
      ["path", { d: "m11 5 8 8", key: "ummqn6" }],
      ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
      ["path", { d: "M7 22 22 7", key: "15mb1i" }]
    ]);
    var TramFront = createLucideIcon("TramFront", [
      ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
      ["path", { d: "M4 11h16", key: "mpoxn0" }],
      ["path", { d: "M12 3v8", key: "1h2ygw" }],
      ["path", { d: "m8 19-2 3", key: "13i0xs" }],
      ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
      ["path", { d: "M8 15h0", key: "q9eq1f" }],
      ["path", { d: "M16 15h0", key: "pzrbjg" }]
    ]);
    var Trash2 = createLucideIcon("Trash2", [
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
      ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
      ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
      ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
    ]);
    var Trash = createLucideIcon("Trash", [
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
      ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
    ]);
    var TreeDeciduous = createLucideIcon("TreeDeciduous", [
      [
        "path",
        {
          d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
          key: "oadzkq"
        }
      ],
      ["path", { d: "M12 19v3", key: "npa21l" }]
    ]);
    var TreePine = createLucideIcon("TreePine", [
      [
        "path",
        {
          d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
          key: "cpyugq"
        }
      ],
      ["path", { d: "M12 22v-3", key: "kmzjlo" }]
    ]);
    var Trees = createLucideIcon("Trees", [
      [
        "path",
        { d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "yh07w9" }
      ],
      ["path", { d: "M7 16v6", key: "1a82de" }],
      ["path", { d: "M13 19v3", key: "13sx9i" }],
      [
        "path",
        {
          d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
          key: "1sj9kv"
        }
      ]
    ]);
    var Trello = createLucideIcon("Trello", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
      ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]
    ]);
    var TrendingDown = createLucideIcon("TrendingDown", [
      ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
      ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
    ]);
    var TrendingUp = createLucideIcon("TrendingUp", [
      ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
      ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
    ]);
    var TriangleRight = createLucideIcon("TriangleRight", [
      [
        "path",
        {
          d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
          key: "183wce"
        }
      ]
    ]);
    var Triangle = createLucideIcon("Triangle", [
      [
        "path",
        { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
      ]
    ]);
    var Trophy = createLucideIcon("Trophy", [
      ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
      ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
      ["path", { d: "M4 22h16", key: "57wxv0" }],
      ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
      ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
      ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
    ]);
    var Truck = createLucideIcon("Truck", [
      ["path", { d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11", key: "hs4xqm" }],
      ["path", { d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2", key: "11fp61" }],
      ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
      ["path", { d: "M15 18H9", key: "1lyqi6" }],
      ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }]
    ]);
    var Turtle = createLucideIcon("Turtle", [
      [
        "path",
        {
          d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
          key: "1lbbv7"
        }
      ],
      ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
      ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
      ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]
    ]);
    var Tv2 = createLucideIcon("Tv2", [
      ["path", { d: "M7 21h10", key: "1b0cd5" }],
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
    ]);
    var Tv = createLucideIcon("Tv", [
      ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2", key: "10ag99" }],
      ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }]
    ]);
    var Twitch = createLucideIcon("Twitch", [
      ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]
    ]);
    var Twitter = createLucideIcon("Twitter", [
      [
        "path",
        {
          d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
          key: "pff0z6"
        }
      ]
    ]);
    var Type = createLucideIcon("Type", [
      ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
      ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
    ]);
    var UmbrellaOff = createLucideIcon("UmbrellaOff", [
      ["path", { d: "M12 2v1", key: "11qlp1" }],
      ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575", key: "eki10q" }],
      ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455", key: "n2ayka" }],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]);
    var Umbrella = createLucideIcon("Umbrella", [
      ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z", key: "1teyop" }],
      ["path", { d: "M12 12v8a2 2 0 0 0 4 0", key: "ulpmoc" }],
      ["path", { d: "M12 2v1", key: "11qlp1" }]
    ]);
    var Underline = createLucideIcon("Underline", [
      ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
      ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
    ]);
    var Undo2 = createLucideIcon("Undo2", [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
    ]);
    var UndoDot = createLucideIcon("UndoDot", [
      ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
      ["path", { d: "M3 7v6h6", key: "1v2h90" }],
      ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
    ]);
    var Undo = createLucideIcon("Undo", [
      ["path", { d: "M3 7v6h6", key: "1v2h90" }],
      ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
    ]);
    var UnfoldHorizontal = createLucideIcon("UnfoldHorizontal", [
      ["path", { d: "M16 12h6", key: "15xry1" }],
      ["path", { d: "M8 12H2", key: "1jqql6" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 8v2", key: "1woqiv" }],
      ["path", { d: "M12 14v2", key: "8jcxud" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
      ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
    ]);
    var UnfoldVertical = createLucideIcon("UnfoldVertical", [
      ["path", { d: "M12 22v-6", key: "6o8u61" }],
      ["path", { d: "M12 8V2", key: "1wkif3" }],
      ["path", { d: "M4 12H2", key: "rhcxmi" }],
      ["path", { d: "M10 12H8", key: "s88cx1" }],
      ["path", { d: "M16 12h-2", key: "10asgb" }],
      ["path", { d: "M22 12h-2", key: "14jgyd" }],
      ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
      ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
    ]);
    var Ungroup = createLucideIcon("Ungroup", [
      ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
      ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]
    ]);
    var Unlink2 = createLucideIcon("Unlink2", [
      ["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]
    ]);
    var Unlink = createLucideIcon("Unlink", [
      [
        "path",
        {
          d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
          key: "yqzxt4"
        }
      ],
      [
        "path",
        {
          d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
          key: "4qinb0"
        }
      ],
      ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
      ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
      ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
      ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
    ]);
    var UnlockKeyhole = createLucideIcon("UnlockKeyhole", [
      ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
      ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
      ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
    ]);
    var Unlock = createLucideIcon("Unlock", [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
    ]);
    var Unplug = createLucideIcon("Unplug", [
      ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
      ["path", { d: "m2 22 3-3", key: "19mgm9" }],
      [
        "path",
        { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
      ],
      ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
      ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
      [
        "path",
        { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }
      ]
    ]);
    var UploadCloud = createLucideIcon("UploadCloud", [
      ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
      ["path", { d: "M12 12v9", key: "192myk" }],
      ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
    ]);
    var Upload = createLucideIcon("Upload", [
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
      ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
      ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
    ]);
    var Usb = createLucideIcon("Usb", [
      ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
      ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
      ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
      ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
      ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
      ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
      ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]
    ]);
    var UserCheck = createLucideIcon("UserCheck", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
    ]);
    var UserCog = createLucideIcon("UserCog", [
      ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
      ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
      ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
      ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
      ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
      ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
      ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
      ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
      ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
    ]);
    var UserMinus = createLucideIcon("UserMinus", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]);
    var UserPlus = createLucideIcon("UserPlus", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]);
    var UserRoundCheck = createLucideIcon("UserRoundCheck", [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
    ]);
    var UserRoundCog = createLucideIcon("UserRoundCog", [
      ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
      ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
      ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
      ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
      ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
      ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
      ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
      ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
      ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }]
    ]);
    var UserRoundMinus = createLucideIcon("UserRoundMinus", [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["path", { d: "M22 19h-6", key: "vcuq98" }]
    ]);
    var UserRoundPlus = createLucideIcon("UserRoundPlus", [
      ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["path", { d: "M19 16v6", key: "tddt3s" }],
      ["path", { d: "M22 19h-6", key: "vcuq98" }]
    ]);
    var UserRoundX = createLucideIcon("UserRoundX", [
      ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["path", { d: "m17 17 5 5", key: "p7ous7" }],
      ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
    ]);
    var UserRound = createLucideIcon("UserRound", [
      ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
    ]);
    var UserX = createLucideIcon("UserX", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
      ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
    ]);
    var User = createLucideIcon("User", [
      ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
    ]);
    var UsersRound = createLucideIcon("UsersRound", [
      ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
      ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
      ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
    ]);
    var Users = createLucideIcon("Users", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
    ]);
    var UtensilsCrossed = createLucideIcon("UtensilsCrossed", [
      ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
      [
        "path",
        { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
      ],
      ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
      ["path", { d: "m19 5-7 7", key: "194lzd" }]
    ]);
    var Utensils = createLucideIcon("Utensils", [
      ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
      ["path", { d: "M7 2v20", key: "1473qp" }],
      ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" }]
    ]);
    var UtilityPole = createLucideIcon("UtilityPole", [
      ["path", { d: "M12 2v20", key: "t6zp3m" }],
      ["path", { d: "M2 5h20", key: "1fs1ex" }],
      ["path", { d: "M3 3v2", key: "9imdir" }],
      ["path", { d: "M7 3v2", key: "n0os7" }],
      ["path", { d: "M17 3v2", key: "1l2re6" }],
      ["path", { d: "M21 3v2", key: "1duuac" }],
      ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]
    ]);
    var Variable = createLucideIcon("Variable", [
      ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
      ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
      ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
      ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
    ]);
    var Vegan = createLucideIcon("Vegan", [
      ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }],
      ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6", key: "n7eohy" }],
      ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3", key: "1dion0" }]
    ]);
    var VenetianMask = createLucideIcon("VenetianMask", [
      [
        "path",
        {
          d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
          key: "1g6z3j"
        }
      ],
      ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z", key: "c2lwnf" }],
      ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z", key: "njd9zo" }]
    ]);
    var VibrateOff = createLucideIcon("VibrateOff", [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
      ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }],
      ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Vibrate = createLucideIcon("Vibrate", [
      ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
      ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
      ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]
    ]);
    var VideoOff = createLucideIcon("VideoOff", [
      ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8", key: "ubwiq0" }],
      ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z", key: "1l10zd" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Video = createLucideIcon("Video", [
      ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
      ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]
    ]);
    var Videotape = createLucideIcon("Videotape", [
      ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
      ["path", { d: "M2 8h20", key: "d11cs7" }],
      ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]
    ]);
    var View = createLucideIcon("View", [
      [
        "path",
        { d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z", key: "vptub8" }
      ],
      ["path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", key: "10lhjs" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }],
      ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }]
    ]);
    var Voicemail = createLucideIcon("Voicemail", [
      ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
      ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
      ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]
    ]);
    var Volume1 = createLucideIcon("Volume1", [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
      ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
    ]);
    var Volume2 = createLucideIcon("Volume2", [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
      ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
      ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
    ]);
    var VolumeX = createLucideIcon("VolumeX", [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
      ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
      ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
    ]);
    var Volume = createLucideIcon("Volume", [
      ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }]
    ]);
    var Vote = createLucideIcon("Vote", [
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }],
      ["path", { d: "M22 19H2", key: "nuriw5" }]
    ]);
    var Wallet2 = createLucideIcon("Wallet2", [
      ["path", { d: "M17 14h.01", key: "7oqj8z" }],
      [
        "path",
        {
          d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
          key: "u1rqew"
        }
      ]
    ]);
    var WalletCards = createLucideIcon("WalletCards", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
      [
        "path",
        {
          d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
          key: "1dpki6"
        }
      ]
    ]);
    var Wallet = createLucideIcon("Wallet", [
      ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
      ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
      ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
    ]);
    var Wallpaper = createLucideIcon("Wallpaper", [
      ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
      [
        "path",
        {
          d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
          key: "69xh40"
        }
      ],
      ["path", { d: "M8 21h8", key: "1ev6f3" }],
      ["path", { d: "M12 17v4", key: "1riwvh" }]
    ]);
    var Wand2 = createLucideIcon("Wand2", [
      [
        "path",
        {
          d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
          key: "1bcowg"
        }
      ],
      ["path", { d: "m14 7 3 3", key: "1r5n42" }],
      ["path", { d: "M5 6v4", key: "ilb8ba" }],
      ["path", { d: "M19 14v4", key: "blhpug" }],
      ["path", { d: "M10 2v2", key: "7u0qdc" }],
      ["path", { d: "M7 8H3", key: "zfb6yr" }],
      ["path", { d: "M21 16h-4", key: "1cnmox" }],
      ["path", { d: "M11 3H9", key: "1obp7u" }]
    ]);
    var Wand = createLucideIcon("Wand", [
      ["path", { d: "M15 4V2", key: "z1p9b7" }],
      ["path", { d: "M15 16v-2", key: "px0unx" }],
      ["path", { d: "M8 9h2", key: "1g203m" }],
      ["path", { d: "M20 9h2", key: "19tzq7" }],
      ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
      ["path", { d: "M15 9h0", key: "kg5t1u" }],
      ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
      ["path", { d: "m3 21 9-9", key: "1jfql5" }],
      ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
    ]);
    var Warehouse = createLucideIcon("Warehouse", [
      [
        "path",
        {
          d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
          key: "gksnxg"
        }
      ],
      ["path", { d: "M6 18h12", key: "9pbo8z" }],
      ["path", { d: "M6 14h12", key: "4cwo0f" }],
      ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
    ]);
    var Watch = createLucideIcon("Watch", [
      ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
      ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
      [
        "path",
        { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
      ],
      ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }]
    ]);
    var Waves = createLucideIcon("Waves", [
      [
        "path",
        {
          d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
          key: "knzxuh"
        }
      ],
      [
        "path",
        {
          d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
          key: "2jd2cc"
        }
      ],
      [
        "path",
        {
          d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
          key: "rd2r6e"
        }
      ]
    ]);
    var Waypoints = createLucideIcon("Waypoints", [
      ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
      ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
      ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
      ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
      ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }]
    ]);
    var Webcam = createLucideIcon("Webcam", [
      ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ["path", { d: "M7 22h10", key: "10w4w3" }],
      ["path", { d: "M12 22v-4", key: "1utk9m" }]
    ]);
    var Webhook = createLucideIcon("Webhook", [
      [
        "path",
        {
          d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
          key: "q3hayz"
        }
      ],
      ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }],
      ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]
    ]);
    var Weight = createLucideIcon("Weight", [
      ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
      [
        "path",
        {
          d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
          key: "56o5sh"
        }
      ]
    ]);
    var WheatOff = createLucideIcon("WheatOff", [
      ["path", { d: "m2 22 10-10", key: "28ilpk" }],
      ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
      [
        "path",
        {
          d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
          key: "1rdhi6"
        }
      ],
      [
        "path",
        { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }
      ],
      [
        "path",
        { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }
      ],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
          key: "tc8ph9"
        }
      ],
      [
        "path",
        {
          d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
          key: "ak46r"
        }
      ],
      [
        "path",
        {
          d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
          key: "1tw520"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Wheat = createLucideIcon("Wheat", [
      ["path", { d: "M2 22 16 8", key: "60hf96" }],
      [
        "path",
        {
          d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
          key: "1rdhi6"
        }
      ],
      [
        "path",
        {
          d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
          key: "1sdzmb"
        }
      ],
      [
        "path",
        {
          d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
          key: "eoatbi"
        }
      ],
      ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
      [
        "path",
        {
          d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
          key: "tc8ph9"
        }
      ],
      [
        "path",
        {
          d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
          key: "2m8kc5"
        }
      ],
      [
        "path",
        {
          d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
          key: "vex3ng"
        }
      ]
    ]);
    var WholeWord = createLucideIcon("WholeWord", [
      ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
      ["path", { d: "M10 9v6", key: "17i7lo" }],
      ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
      ["path", { d: "M14 7v8", key: "dl84cr" }],
      ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
    ]);
    var WifiOff = createLucideIcon("WifiOff", [
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
      ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 4.17-2.65", key: "11utq1" }],
      ["path", { d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76", key: "hxefdu" }],
      ["path", { d: "M16.85 11.25a10 10 0 0 1 2.22 1.68", key: "q734kn" }],
      ["path", { d: "M5 13a10 10 0 0 1 5.24-2.76", key: "piq4yl" }],
      ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
    ]);
    var Wifi = createLucideIcon("Wifi", [
      ["path", { d: "M5 13a10 10 0 0 1 14 0", key: "6v8j51" }],
      ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
      ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
    ]);
    var Wind = createLucideIcon("Wind", [
      ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
      ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
      ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }]
    ]);
    var WineOff = createLucideIcon("WineOff", [
      ["path", { d: "M8 22h8", key: "rmew8v" }],
      ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
      ["path", { d: "M12 15v7", key: "t2xh3l" }],
      [
        "path",
        {
          d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
          key: "1ymjlu"
        }
      ],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Wine = createLucideIcon("Wine", [
      ["path", { d: "M8 22h8", key: "rmew8v" }],
      ["path", { d: "M7 10h10", key: "1101jm" }],
      ["path", { d: "M12 15v7", key: "t2xh3l" }],
      [
        "path",
        { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
      ]
    ]);
    var Workflow = createLucideIcon("Workflow", [
      ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
      ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
      ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
    ]);
    var WrapText = createLucideIcon("WrapText", [
      ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
      ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4", key: "1cl7v7" }],
      ["polyline", { points: "16 16 14 18 16 20", key: "1jznyi" }],
      ["line", { x1: "3", x2: "10", y1: "18", y2: "18", key: "1h33wv" }]
    ]);
    var Wrench = createLucideIcon("Wrench", [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
          key: "cbrjhi"
        }
      ]
    ]);
    var XCircle = createLucideIcon("XCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ]);
    var XOctagon = createLucideIcon("XOctagon", [
      [
        "polygon",
        {
          points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
          key: "h1p8hx"
        }
      ],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ]);
    var XSquare = createLucideIcon("XSquare", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ]);
    var X2 = createLucideIcon("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ]);
    var Youtube = createLucideIcon("Youtube", [
      [
        "path",
        {
          d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
          key: "1q2vi4"
        }
      ],
      ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
    ]);
    var ZapOff = createLucideIcon("ZapOff", [
      ["polyline", { points: "12.41 6.75 13 2 10.57 4.92", key: "122m05" }],
      ["polyline", { points: "18.57 12.91 21 10 15.66 10", key: "16r43o" }],
      ["polyline", { points: "8 8 3 14 12 14 11 22 16 16", key: "tmh4bc" }],
      ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
    ]);
    var Zap = createLucideIcon("Zap", [
      ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
    ]);
    var ZoomIn = createLucideIcon("ZoomIn", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]);
    var ZoomOut = createLucideIcon("ZoomOut", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]);
    var index = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accessibility,
      Activity,
      ActivitySquare,
      AirVent,
      Airplay,
      AlarmClock,
      AlarmClockCheck,
      AlarmClockOff,
      AlarmMinus,
      AlarmPlus,
      Album,
      AlertCircle: AlertCircle2,
      AlertOctagon,
      AlertTriangle,
      AlignCenter,
      AlignCenterHorizontal,
      AlignCenterVertical,
      AlignEndHorizontal,
      AlignEndVertical,
      AlignHorizontalDistributeCenter,
      AlignHorizontalDistributeEnd,
      AlignHorizontalDistributeStart,
      AlignHorizontalJustifyCenter,
      AlignHorizontalJustifyEnd,
      AlignHorizontalJustifyStart,
      AlignHorizontalSpaceAround,
      AlignHorizontalSpaceBetween,
      AlignJustify,
      AlignLeft,
      AlignRight,
      AlignStartHorizontal,
      AlignStartVertical,
      AlignVerticalDistributeCenter,
      AlignVerticalDistributeEnd,
      AlignVerticalDistributeStart,
      AlignVerticalJustifyCenter,
      AlignVerticalJustifyEnd,
      AlignVerticalJustifyStart,
      AlignVerticalSpaceAround,
      AlignVerticalSpaceBetween,
      Ampersand,
      Ampersands,
      Anchor,
      Angry,
      Annoyed,
      Antenna,
      Aperture,
      AppWindow,
      Apple,
      Archive,
      ArchiveRestore,
      ArchiveX,
      AreaChart,
      Armchair,
      ArrowBigDown,
      ArrowBigDownDash,
      ArrowBigLeft,
      ArrowBigLeftDash,
      ArrowBigRight,
      ArrowBigRightDash,
      ArrowBigUp,
      ArrowBigUpDash,
      ArrowDown,
      ArrowDown01,
      ArrowDown10,
      ArrowDownAZ,
      ArrowDownCircle,
      ArrowDownFromLine,
      ArrowDownLeft,
      ArrowDownLeftFromCircle,
      ArrowDownLeftSquare,
      ArrowDownNarrowWide,
      ArrowDownRight,
      ArrowDownRightFromCircle,
      ArrowDownRightSquare,
      ArrowDownSquare,
      ArrowDownToDot,
      ArrowDownToLine,
      ArrowDownUp,
      ArrowDownWideNarrow,
      ArrowDownZA,
      ArrowLeft,
      ArrowLeftCircle,
      ArrowLeftFromLine,
      ArrowLeftRight,
      ArrowLeftSquare,
      ArrowLeftToLine,
      ArrowRight,
      ArrowRightCircle,
      ArrowRightFromLine,
      ArrowRightLeft,
      ArrowRightSquare,
      ArrowRightToLine,
      ArrowUp,
      ArrowUp01,
      ArrowUp10,
      ArrowUpAZ,
      ArrowUpCircle,
      ArrowUpDown,
      ArrowUpFromDot,
      ArrowUpFromLine,
      ArrowUpLeft,
      ArrowUpLeftFromCircle,
      ArrowUpLeftSquare,
      ArrowUpNarrowWide,
      ArrowUpRight,
      ArrowUpRightFromCircle,
      ArrowUpRightSquare,
      ArrowUpSquare,
      ArrowUpToLine,
      ArrowUpWideNarrow,
      ArrowUpZA,
      ArrowsUpFromLine,
      Asterisk,
      AtSign,
      Atom,
      AudioLines,
      AudioWaveform,
      Award,
      Axe,
      Axis3d,
      Baby,
      Backpack,
      Badge,
      BadgeAlert,
      BadgeCent,
      BadgeCheck,
      BadgeDollarSign,
      BadgeEuro,
      BadgeHelp,
      BadgeIndianRupee,
      BadgeInfo,
      BadgeJapaneseYen,
      BadgeMinus,
      BadgePercent,
      BadgePlus,
      BadgePoundSterling,
      BadgeRussianRuble,
      BadgeSwissFranc,
      BadgeX,
      BaggageClaim,
      Ban,
      Banana,
      Banknote,
      BarChart,
      BarChart2,
      BarChart3,
      BarChart4,
      BarChartBig,
      BarChartHorizontal,
      BarChartHorizontalBig,
      Barcode,
      Baseline,
      Bath,
      Battery,
      BatteryCharging,
      BatteryFull,
      BatteryLow,
      BatteryMedium,
      BatteryWarning,
      Beaker,
      Bean,
      BeanOff,
      Bed,
      BedDouble,
      BedSingle,
      Beef,
      Beer,
      Bell,
      BellDot,
      BellMinus,
      BellOff,
      BellPlus,
      BellRing,
      Bike,
      Binary,
      Biohazard,
      Bird,
      Bitcoin,
      Blinds,
      Blocks,
      Bluetooth,
      BluetoothConnected,
      BluetoothOff,
      BluetoothSearching,
      Bold,
      Bomb,
      Bone,
      Book,
      BookA,
      BookAudio,
      BookCheck,
      BookCopy,
      BookDashed,
      BookDown,
      BookHeadphones,
      BookHeart,
      BookImage,
      BookKey,
      BookLock,
      BookMarked,
      BookMinus,
      BookOpen,
      BookOpenCheck,
      BookOpenText,
      BookPlus,
      BookText,
      BookType,
      BookUp,
      BookUp2,
      BookUser,
      BookX,
      Bookmark,
      BookmarkCheck,
      BookmarkMinus,
      BookmarkPlus,
      BookmarkX,
      BoomBox,
      Bot,
      Box,
      BoxSelect,
      Boxes,
      Braces,
      Brackets,
      Brain,
      BrainCircuit,
      BrainCog,
      Briefcase,
      BringToFront,
      Brush,
      Bug,
      BugOff,
      BugPlay,
      Building,
      Building2,
      Bus,
      BusFront,
      Cable,
      CableCar,
      Cake,
      CakeSlice,
      Calculator,
      Calendar,
      CalendarCheck,
      CalendarCheck2,
      CalendarClock,
      CalendarDays,
      CalendarHeart,
      CalendarMinus,
      CalendarOff,
      CalendarPlus,
      CalendarRange,
      CalendarSearch,
      CalendarX,
      CalendarX2,
      Camera,
      CameraOff,
      CandlestickChart,
      Candy,
      CandyCane,
      CandyOff,
      Car,
      CarFront,
      CarTaxiFront,
      Caravan,
      Carrot,
      CaseLower,
      CaseSensitive,
      CaseUpper,
      CassetteTape,
      Cast,
      Castle,
      Cat,
      Check,
      CheckCheck,
      CheckCircle: CheckCircle3,
      CheckCircle2,
      CheckSquare,
      CheckSquare2,
      ChefHat,
      Cherry,
      ChevronDown,
      ChevronDownCircle,
      ChevronDownSquare,
      ChevronFirst,
      ChevronLast,
      ChevronLeft,
      ChevronLeftCircle,
      ChevronLeftSquare,
      ChevronRight,
      ChevronRightCircle,
      ChevronRightSquare,
      ChevronUp,
      ChevronUpCircle,
      ChevronUpSquare,
      ChevronsDown,
      ChevronsDownUp,
      ChevronsLeft,
      ChevronsLeftRight,
      ChevronsRight,
      ChevronsRightLeft,
      ChevronsUp,
      ChevronsUpDown,
      Chrome,
      Church,
      Cigarette,
      CigaretteOff,
      Circle,
      CircleDashed,
      CircleDollarSign,
      CircleDot,
      CircleDotDashed,
      CircleEllipsis,
      CircleEqual,
      CircleOff,
      CircleSlash,
      CircleSlash2,
      CircleUser,
      CircleUserRound,
      CircuitBoard,
      Citrus,
      Clapperboard,
      Clipboard,
      ClipboardCheck,
      ClipboardCopy,
      ClipboardEdit,
      ClipboardList,
      ClipboardPaste,
      ClipboardSignature,
      ClipboardType,
      ClipboardX,
      Clock,
      Clock1,
      Clock10,
      Clock11,
      Clock12,
      Clock2,
      Clock3,
      Clock4,
      Clock5,
      Clock6,
      Clock7,
      Clock8,
      Clock9,
      Cloud,
      CloudCog,
      CloudDrizzle,
      CloudFog,
      CloudHail,
      CloudLightning,
      CloudMoon,
      CloudMoonRain,
      CloudOff,
      CloudRain,
      CloudRainWind,
      CloudSnow,
      CloudSun,
      CloudSunRain,
      Cloudy,
      Clover,
      Club,
      Code,
      Code2,
      Codepen,
      Codesandbox,
      Coffee,
      Cog,
      Coins,
      Columns,
      Combine,
      Command,
      Compass,
      Component,
      Computer,
      ConciergeBell,
      Cone,
      Construction,
      Contact,
      Contact2,
      Container,
      Contrast,
      Cookie,
      Copy,
      CopyCheck,
      CopyMinus,
      CopyPlus,
      CopySlash,
      CopyX,
      Copyleft,
      Copyright,
      CornerDownLeft,
      CornerDownRight,
      CornerLeftDown,
      CornerLeftUp,
      CornerRightDown,
      CornerRightUp,
      CornerUpLeft,
      CornerUpRight,
      Cpu,
      CreativeCommons,
      CreditCard,
      Croissant,
      Crop,
      Cross,
      Crosshair,
      Crown,
      Cuboid,
      CupSoda,
      Currency,
      Cylinder,
      Database,
      DatabaseBackup,
      DatabaseZap,
      Delete,
      Dessert,
      Diameter,
      Diamond,
      Dice1,
      Dice2,
      Dice3,
      Dice4,
      Dice5,
      Dice6,
      Dices,
      Diff,
      Disc,
      Disc2,
      Disc3,
      DiscAlbum,
      Divide,
      DivideCircle,
      DivideSquare,
      Dna,
      DnaOff,
      Dog,
      DollarSign,
      Donut,
      DoorClosed,
      DoorOpen,
      Dot,
      Download,
      DownloadCloud,
      DraftingCompass,
      Drama,
      Dribbble,
      Droplet,
      Droplets,
      Drum,
      Drumstick,
      Dumbbell,
      Ear,
      EarOff,
      Egg,
      EggFried,
      EggOff,
      Equal,
      EqualNot,
      Eraser,
      Euro,
      Expand,
      ExternalLink,
      Eye: Eye2,
      EyeOff: EyeOff2,
      Facebook,
      Factory,
      Fan,
      FastForward,
      Feather,
      FerrisWheel,
      Figma,
      File,
      FileArchive,
      FileAudio,
      FileAudio2,
      FileAxis3d,
      FileBadge,
      FileBadge2,
      FileBarChart,
      FileBarChart2,
      FileBox,
      FileCheck,
      FileCheck2,
      FileClock,
      FileCode,
      FileCode2,
      FileCog,
      FileDiff,
      FileDigit,
      FileDown,
      FileEdit,
      FileHeart,
      FileImage,
      FileInput,
      FileJson,
      FileJson2,
      FileKey,
      FileKey2,
      FileLineChart,
      FileLock,
      FileLock2,
      FileMinus,
      FileMinus2,
      FileMusic,
      FileOutput,
      FilePieChart,
      FilePlus,
      FilePlus2,
      FileQuestion,
      FileScan,
      FileSearch,
      FileSearch2,
      FileSignature,
      FileSpreadsheet,
      FileStack,
      FileSymlink,
      FileTerminal,
      FileText,
      FileType,
      FileType2,
      FileUp,
      FileVideo,
      FileVideo2,
      FileVolume,
      FileVolume2,
      FileWarning,
      FileX,
      FileX2,
      Files,
      Film,
      Filter,
      FilterX,
      Fingerprint,
      Fish,
      FishOff,
      FishSymbol,
      Flag,
      FlagOff,
      FlagTriangleLeft,
      FlagTriangleRight,
      Flame,
      FlameKindling,
      Flashlight,
      FlashlightOff,
      FlaskConical,
      FlaskConicalOff,
      FlaskRound,
      FlipHorizontal,
      FlipHorizontal2,
      FlipVertical,
      FlipVertical2,
      Flower,
      Flower2,
      Focus,
      FoldHorizontal,
      FoldVertical,
      Folder,
      FolderArchive,
      FolderCheck,
      FolderClock,
      FolderClosed,
      FolderCog,
      FolderDot,
      FolderDown,
      FolderEdit,
      FolderGit,
      FolderGit2,
      FolderHeart,
      FolderInput,
      FolderKanban,
      FolderKey,
      FolderLock,
      FolderMinus,
      FolderOpen,
      FolderOpenDot,
      FolderOutput,
      FolderPlus,
      FolderRoot,
      FolderSearch,
      FolderSearch2,
      FolderSymlink,
      FolderSync,
      FolderTree,
      FolderUp,
      FolderX,
      Folders,
      Footprints,
      Forklift,
      FormInput,
      Forward,
      Frame,
      Framer,
      Frown,
      Fuel,
      Fullscreen,
      FunctionSquare,
      GalleryHorizontal,
      GalleryHorizontalEnd,
      GalleryThumbnails,
      GalleryVertical,
      GalleryVerticalEnd,
      Gamepad,
      Gamepad2,
      GanttChart,
      GanttChartSquare,
      Gauge,
      GaugeCircle,
      Gavel,
      Gem,
      Ghost,
      Gift,
      GitBranch,
      GitBranchPlus,
      GitCommitHorizontal,
      GitCommitVertical,
      GitCompare,
      GitCompareArrows,
      GitFork,
      GitGraph,
      GitMerge,
      GitPullRequest,
      GitPullRequestArrow,
      GitPullRequestClosed,
      GitPullRequestCreate,
      GitPullRequestCreateArrow,
      GitPullRequestDraft,
      Github,
      Gitlab,
      GlassWater,
      Glasses,
      Globe,
      Globe2,
      Goal,
      Grab,
      GraduationCap,
      Grape,
      Grid2x2,
      Grid3x3,
      Grip,
      GripHorizontal,
      GripVertical,
      Group,
      Guitar,
      Hammer,
      Hand,
      HandMetal,
      HardDrive,
      HardDriveDownload,
      HardDriveUpload,
      HardHat,
      Hash,
      Haze,
      HdmiPort,
      Heading,
      Heading1,
      Heading2,
      Heading3,
      Heading4,
      Heading5,
      Heading6,
      Headphones,
      Heart,
      HeartCrack,
      HeartHandshake,
      HeartOff,
      HeartPulse,
      HelpCircle,
      HelpingHand,
      Hexagon,
      Highlighter,
      History,
      Home,
      Hop,
      HopOff,
      Hotel,
      Hourglass,
      IceCream,
      IceCream2,
      Image,
      ImageDown,
      ImageMinus,
      ImageOff,
      ImagePlus,
      Import,
      Inbox,
      Indent,
      IndianRupee,
      Infinity,
      Info: Info2,
      Instagram,
      Italic,
      IterationCcw,
      IterationCw,
      JapaneseYen,
      Joystick,
      Kanban,
      KanbanSquare,
      KanbanSquareDashed,
      Key,
      KeyRound,
      KeySquare,
      Keyboard,
      KeyboardMusic,
      Lamp,
      LampCeiling,
      LampDesk,
      LampFloor,
      LampWallDown,
      LampWallUp,
      LandPlot,
      Landmark,
      Languages,
      Laptop,
      Laptop2,
      Lasso,
      LassoSelect,
      Laugh,
      Layers,
      Layers2,
      Layers3,
      Layout,
      LayoutDashboard,
      LayoutGrid,
      LayoutList,
      LayoutPanelLeft,
      LayoutPanelTop,
      LayoutTemplate,
      Leaf,
      LeafyGreen,
      Library,
      LibraryBig,
      LibrarySquare,
      LifeBuoy,
      Ligature,
      Lightbulb,
      LightbulbOff,
      LineChart,
      Link,
      Link2,
      Link2Off,
      Linkedin,
      List,
      ListChecks,
      ListEnd,
      ListFilter,
      ListMinus,
      ListMusic,
      ListOrdered,
      ListPlus,
      ListRestart,
      ListStart,
      ListTodo,
      ListTree,
      ListVideo,
      ListX,
      Loader,
      Loader2: Loader22,
      Locate,
      LocateFixed,
      LocateOff,
      Lock,
      LockKeyhole,
      LogIn,
      LogOut,
      Lollipop,
      Luggage,
      MSquare,
      Magnet,
      Mail,
      MailCheck,
      MailMinus,
      MailOpen,
      MailPlus,
      MailQuestion,
      MailSearch,
      MailWarning,
      MailX,
      Mailbox,
      Mails,
      Map: Map2,
      MapPin,
      MapPinOff,
      MapPinned,
      Martini,
      Maximize,
      Maximize2,
      Medal,
      Megaphone,
      MegaphoneOff,
      Meh,
      MemoryStick,
      Menu,
      MenuSquare,
      Merge,
      MessageCircle,
      MessageSquare,
      MessageSquareDashed,
      MessageSquarePlus,
      MessagesSquare,
      Mic,
      Mic2,
      MicOff,
      Microscope,
      Microwave,
      Milestone,
      Milk,
      MilkOff,
      Minimize,
      Minimize2,
      Minus,
      MinusCircle,
      MinusSquare,
      Monitor,
      MonitorCheck,
      MonitorDot,
      MonitorDown,
      MonitorOff,
      MonitorPause,
      MonitorPlay,
      MonitorSmartphone,
      MonitorSpeaker,
      MonitorStop,
      MonitorUp,
      MonitorX,
      Moon,
      MoonStar,
      MoreHorizontal,
      MoreVertical,
      Mountain,
      MountainSnow,
      Mouse,
      MousePointer,
      MousePointer2,
      MousePointerClick,
      MousePointerSquare,
      MousePointerSquareDashed,
      Move,
      Move3d,
      MoveDiagonal,
      MoveDiagonal2,
      MoveDown,
      MoveDownLeft,
      MoveDownRight,
      MoveHorizontal,
      MoveLeft,
      MoveRight,
      MoveUp,
      MoveUpLeft,
      MoveUpRight,
      MoveVertical,
      Music,
      Music2,
      Music3,
      Music4,
      Navigation,
      Navigation2,
      Navigation2Off,
      NavigationOff,
      Network,
      Newspaper,
      Nfc,
      Nut,
      NutOff,
      Octagon,
      Option,
      Orbit,
      Outdent,
      Package,
      Package2,
      PackageCheck,
      PackageMinus,
      PackageOpen,
      PackagePlus,
      PackageSearch,
      PackageX,
      PaintBucket,
      Paintbrush,
      Paintbrush2,
      Palette,
      Palmtree,
      PanelBottom,
      PanelBottomClose,
      PanelBottomInactive,
      PanelBottomOpen,
      PanelLeft,
      PanelLeftClose,
      PanelLeftInactive,
      PanelLeftOpen,
      PanelRight,
      PanelRightClose,
      PanelRightInactive,
      PanelRightOpen,
      PanelTop,
      PanelTopClose,
      PanelTopInactive,
      PanelTopOpen,
      Paperclip,
      Parentheses,
      ParkingCircle,
      ParkingCircleOff,
      ParkingMeter,
      ParkingSquare,
      ParkingSquareOff,
      PartyPopper,
      Pause,
      PauseCircle,
      PauseOctagon,
      PawPrint,
      PcCase,
      Pen,
      PenLine,
      PenSquare,
      PenTool,
      Pencil,
      PencilLine,
      PencilRuler,
      Pentagon,
      Percent,
      PercentCircle,
      PercentDiamond,
      PercentSquare,
      PersonStanding,
      Phone,
      PhoneCall,
      PhoneForwarded,
      PhoneIncoming,
      PhoneMissed,
      PhoneOff,
      PhoneOutgoing,
      Pi,
      PiSquare,
      Piano,
      PictureInPicture,
      PictureInPicture2,
      PieChart,
      PiggyBank,
      Pilcrow,
      PilcrowSquare,
      Pill,
      Pin,
      PinOff,
      Pipette,
      Pizza,
      Plane,
      PlaneLanding,
      PlaneTakeoff,
      Play,
      PlayCircle,
      PlaySquare,
      Plug,
      Plug2,
      PlugZap,
      PlugZap2,
      Plus,
      PlusCircle,
      PlusSquare,
      Pocket,
      PocketKnife,
      Podcast,
      Pointer,
      Popcorn,
      Popsicle,
      PoundSterling,
      Power,
      PowerCircle,
      PowerOff,
      PowerSquare,
      Presentation,
      Printer,
      Projector,
      Puzzle,
      Pyramid,
      QrCode,
      Quote,
      Rabbit,
      Radar,
      Radiation,
      Radio,
      RadioReceiver,
      RadioTower,
      Radius,
      RailSymbol,
      Rainbow,
      Rat,
      Ratio,
      Receipt,
      RectangleHorizontal,
      RectangleVertical,
      Recycle,
      Redo,
      Redo2,
      RedoDot,
      RefreshCcw,
      RefreshCcwDot,
      RefreshCw: RefreshCw2,
      RefreshCwOff,
      Refrigerator,
      Regex,
      RemoveFormatting,
      Repeat,
      Repeat1,
      Repeat2,
      Replace,
      ReplaceAll,
      Reply,
      ReplyAll,
      Rewind,
      Ribbon,
      Rocket,
      RockingChair,
      RollerCoaster,
      Rotate3d,
      RotateCcw,
      RotateCw: RotateCw2,
      Route,
      RouteOff,
      Router,
      Rows,
      Rss,
      Ruler,
      RussianRuble,
      Sailboat,
      Salad,
      Sandwich,
      Satellite,
      SatelliteDish,
      Save,
      SaveAll,
      Scale,
      Scale3d,
      Scaling,
      Scan,
      ScanBarcode,
      ScanEye,
      ScanFace,
      ScanLine,
      ScanSearch,
      ScanText,
      ScatterChart,
      School,
      School2,
      Scissors,
      ScissorsLineDashed,
      ScissorsSquare,
      ScissorsSquareDashedBottom,
      ScreenShare,
      ScreenShareOff,
      Scroll,
      ScrollText,
      Search,
      SearchCheck,
      SearchCode,
      SearchSlash,
      SearchX,
      Send,
      SendHorizontal,
      SendToBack,
      SeparatorHorizontal,
      SeparatorVertical,
      Server,
      ServerCog,
      ServerCrash,
      ServerOff,
      Settings,
      Settings2,
      Shapes,
      Share,
      Share2,
      Sheet,
      Shell,
      Shield,
      ShieldAlert,
      ShieldBan,
      ShieldCheck,
      ShieldEllipsis,
      ShieldHalf,
      ShieldMinus,
      ShieldOff,
      ShieldPlus,
      ShieldQuestion,
      ShieldX,
      Ship,
      ShipWheel,
      Shirt,
      ShoppingBag,
      ShoppingBasket,
      ShoppingCart,
      Shovel,
      ShowerHead,
      Shrink,
      Shrub,
      Shuffle,
      Sigma,
      SigmaSquare,
      Signal,
      SignalHigh,
      SignalLow,
      SignalMedium,
      SignalZero,
      Signpost,
      SignpostBig,
      Siren,
      SkipBack,
      SkipForward,
      Skull,
      Slack,
      Slash,
      Slice,
      Sliders,
      SlidersHorizontal,
      Smartphone,
      SmartphoneCharging,
      SmartphoneNfc,
      Smile,
      SmilePlus,
      Snail,
      Snowflake,
      Sofa,
      Soup,
      Space,
      Spade,
      Sparkle,
      Sparkles,
      Speaker,
      Speech,
      SpellCheck,
      SpellCheck2,
      Spline,
      Split,
      SplitSquareHorizontal,
      SplitSquareVertical,
      SprayCan,
      Sprout,
      Square,
      SquareAsterisk,
      SquareCode,
      SquareDashedBottom,
      SquareDashedBottomCode,
      SquareDot,
      SquareEqual,
      SquareSlash,
      SquareStack,
      SquareUser,
      SquareUserRound,
      Squirrel,
      Stamp,
      Star,
      StarHalf,
      StarOff,
      StepBack,
      StepForward,
      Stethoscope,
      Sticker,
      StickyNote,
      StopCircle,
      Store,
      StretchHorizontal,
      StretchVertical,
      Strikethrough,
      Subscript,
      Subtitles,
      Sun,
      SunDim,
      SunMedium,
      SunMoon,
      SunSnow,
      Sunrise,
      Sunset,
      Superscript,
      SwissFranc,
      SwitchCamera,
      Sword,
      Swords,
      Syringe,
      Table,
      Table2,
      TableProperties,
      Tablet,
      TabletSmartphone,
      Tablets,
      Tag,
      Tags,
      Tally1,
      Tally2,
      Tally3,
      Tally4,
      Tally5,
      Tangent,
      Target,
      Tent,
      TentTree,
      Terminal,
      TerminalSquare,
      TestTube,
      TestTube2,
      TestTubes,
      Text: Text2,
      TextCursor,
      TextCursorInput,
      TextQuote,
      TextSelect,
      Theater,
      Thermometer,
      ThermometerSnowflake,
      ThermometerSun,
      ThumbsDown,
      ThumbsUp,
      Ticket,
      Timer,
      TimerOff,
      TimerReset,
      ToggleLeft,
      ToggleRight,
      Tornado,
      Torus,
      Touchpad,
      TouchpadOff,
      TowerControl,
      ToyBrick,
      Tractor,
      TrafficCone,
      TrainFront,
      TrainFrontTunnel,
      TrainTrack,
      TramFront,
      Trash,
      Trash2,
      TreeDeciduous,
      TreePine,
      Trees,
      Trello,
      TrendingDown,
      TrendingUp,
      Triangle,
      TriangleRight,
      Trophy,
      Truck,
      Turtle,
      Tv,
      Tv2,
      Twitch,
      Twitter,
      Type,
      Umbrella,
      UmbrellaOff,
      Underline,
      Undo,
      Undo2,
      UndoDot,
      UnfoldHorizontal,
      UnfoldVertical,
      Ungroup,
      Unlink,
      Unlink2,
      Unlock,
      UnlockKeyhole,
      Unplug,
      Upload,
      UploadCloud,
      Usb,
      User,
      UserCheck,
      UserCog,
      UserMinus,
      UserPlus,
      UserRound,
      UserRoundCheck,
      UserRoundCog,
      UserRoundMinus,
      UserRoundPlus,
      UserRoundX,
      UserX,
      Users,
      UsersRound,
      Utensils,
      UtensilsCrossed,
      UtilityPole,
      Variable,
      Vegan,
      VenetianMask,
      Vibrate,
      VibrateOff,
      Video,
      VideoOff,
      Videotape,
      View,
      Voicemail,
      Volume,
      Volume1,
      Volume2,
      VolumeX,
      Vote,
      Wallet,
      Wallet2,
      WalletCards,
      Wallpaper,
      Wand,
      Wand2,
      Warehouse,
      Watch,
      Waves,
      Waypoints,
      Webcam,
      Webhook,
      Weight,
      Wheat,
      WheatOff,
      WholeWord,
      Wifi,
      WifiOff,
      Wind,
      Wine,
      WineOff,
      Workflow,
      WrapText,
      Wrench,
      X: X2,
      XCircle,
      XOctagon,
      XSquare,
      Youtube,
      Zap,
      ZapOff,
      ZoomIn,
      ZoomOut
    });
    exports2.Accessibility = Accessibility;
    exports2.AccessibilityIcon = Accessibility;
    exports2.Activity = Activity;
    exports2.ActivityIcon = Activity;
    exports2.ActivitySquare = ActivitySquare;
    exports2.ActivitySquareIcon = ActivitySquare;
    exports2.AirVent = AirVent;
    exports2.AirVentIcon = AirVent;
    exports2.Airplay = Airplay;
    exports2.AirplayIcon = Airplay;
    exports2.AlarmCheck = AlarmClockCheck;
    exports2.AlarmCheckIcon = AlarmClockCheck;
    exports2.AlarmClock = AlarmClock;
    exports2.AlarmClockCheck = AlarmClockCheck;
    exports2.AlarmClockCheckIcon = AlarmClockCheck;
    exports2.AlarmClockIcon = AlarmClock;
    exports2.AlarmClockOff = AlarmClockOff;
    exports2.AlarmClockOffIcon = AlarmClockOff;
    exports2.AlarmMinus = AlarmMinus;
    exports2.AlarmMinusIcon = AlarmMinus;
    exports2.AlarmPlus = AlarmPlus;
    exports2.AlarmPlusIcon = AlarmPlus;
    exports2.Album = Album;
    exports2.AlbumIcon = Album;
    exports2.AlertCircle = AlertCircle2;
    exports2.AlertCircleIcon = AlertCircle2;
    exports2.AlertOctagon = AlertOctagon;
    exports2.AlertOctagonIcon = AlertOctagon;
    exports2.AlertTriangle = AlertTriangle;
    exports2.AlertTriangleIcon = AlertTriangle;
    exports2.AlignCenter = AlignCenter;
    exports2.AlignCenterHorizontal = AlignCenterHorizontal;
    exports2.AlignCenterHorizontalIcon = AlignCenterHorizontal;
    exports2.AlignCenterIcon = AlignCenter;
    exports2.AlignCenterVertical = AlignCenterVertical;
    exports2.AlignCenterVerticalIcon = AlignCenterVertical;
    exports2.AlignEndHorizontal = AlignEndHorizontal;
    exports2.AlignEndHorizontalIcon = AlignEndHorizontal;
    exports2.AlignEndVertical = AlignEndVertical;
    exports2.AlignEndVerticalIcon = AlignEndVertical;
    exports2.AlignHorizontalDistributeCenter = AlignHorizontalDistributeCenter;
    exports2.AlignHorizontalDistributeCenterIcon = AlignHorizontalDistributeCenter;
    exports2.AlignHorizontalDistributeEnd = AlignHorizontalDistributeEnd;
    exports2.AlignHorizontalDistributeEndIcon = AlignHorizontalDistributeEnd;
    exports2.AlignHorizontalDistributeStart = AlignHorizontalDistributeStart;
    exports2.AlignHorizontalDistributeStartIcon = AlignHorizontalDistributeStart;
    exports2.AlignHorizontalJustifyCenter = AlignHorizontalJustifyCenter;
    exports2.AlignHorizontalJustifyCenterIcon = AlignHorizontalJustifyCenter;
    exports2.AlignHorizontalJustifyEnd = AlignHorizontalJustifyEnd;
    exports2.AlignHorizontalJustifyEndIcon = AlignHorizontalJustifyEnd;
    exports2.AlignHorizontalJustifyStart = AlignHorizontalJustifyStart;
    exports2.AlignHorizontalJustifyStartIcon = AlignHorizontalJustifyStart;
    exports2.AlignHorizontalSpaceAround = AlignHorizontalSpaceAround;
    exports2.AlignHorizontalSpaceAroundIcon = AlignHorizontalSpaceAround;
    exports2.AlignHorizontalSpaceBetween = AlignHorizontalSpaceBetween;
    exports2.AlignHorizontalSpaceBetweenIcon = AlignHorizontalSpaceBetween;
    exports2.AlignJustify = AlignJustify;
    exports2.AlignJustifyIcon = AlignJustify;
    exports2.AlignLeft = AlignLeft;
    exports2.AlignLeftIcon = AlignLeft;
    exports2.AlignRight = AlignRight;
    exports2.AlignRightIcon = AlignRight;
    exports2.AlignStartHorizontal = AlignStartHorizontal;
    exports2.AlignStartHorizontalIcon = AlignStartHorizontal;
    exports2.AlignStartVertical = AlignStartVertical;
    exports2.AlignStartVerticalIcon = AlignStartVertical;
    exports2.AlignVerticalDistributeCenter = AlignVerticalDistributeCenter;
    exports2.AlignVerticalDistributeCenterIcon = AlignVerticalDistributeCenter;
    exports2.AlignVerticalDistributeEnd = AlignVerticalDistributeEnd;
    exports2.AlignVerticalDistributeEndIcon = AlignVerticalDistributeEnd;
    exports2.AlignVerticalDistributeStart = AlignVerticalDistributeStart;
    exports2.AlignVerticalDistributeStartIcon = AlignVerticalDistributeStart;
    exports2.AlignVerticalJustifyCenter = AlignVerticalJustifyCenter;
    exports2.AlignVerticalJustifyCenterIcon = AlignVerticalJustifyCenter;
    exports2.AlignVerticalJustifyEnd = AlignVerticalJustifyEnd;
    exports2.AlignVerticalJustifyEndIcon = AlignVerticalJustifyEnd;
    exports2.AlignVerticalJustifyStart = AlignVerticalJustifyStart;
    exports2.AlignVerticalJustifyStartIcon = AlignVerticalJustifyStart;
    exports2.AlignVerticalSpaceAround = AlignVerticalSpaceAround;
    exports2.AlignVerticalSpaceAroundIcon = AlignVerticalSpaceAround;
    exports2.AlignVerticalSpaceBetween = AlignVerticalSpaceBetween;
    exports2.AlignVerticalSpaceBetweenIcon = AlignVerticalSpaceBetween;
    exports2.Ampersand = Ampersand;
    exports2.AmpersandIcon = Ampersand;
    exports2.Ampersands = Ampersands;
    exports2.AmpersandsIcon = Ampersands;
    exports2.Anchor = Anchor;
    exports2.AnchorIcon = Anchor;
    exports2.Angry = Angry;
    exports2.AngryIcon = Angry;
    exports2.Annoyed = Annoyed;
    exports2.AnnoyedIcon = Annoyed;
    exports2.Antenna = Antenna;
    exports2.AntennaIcon = Antenna;
    exports2.Aperture = Aperture;
    exports2.ApertureIcon = Aperture;
    exports2.AppWindow = AppWindow;
    exports2.AppWindowIcon = AppWindow;
    exports2.Apple = Apple;
    exports2.AppleIcon = Apple;
    exports2.Archive = Archive;
    exports2.ArchiveIcon = Archive;
    exports2.ArchiveRestore = ArchiveRestore;
    exports2.ArchiveRestoreIcon = ArchiveRestore;
    exports2.ArchiveX = ArchiveX;
    exports2.ArchiveXIcon = ArchiveX;
    exports2.AreaChart = AreaChart;
    exports2.AreaChartIcon = AreaChart;
    exports2.Armchair = Armchair;
    exports2.ArmchairIcon = Armchair;
    exports2.ArrowBigDown = ArrowBigDown;
    exports2.ArrowBigDownDash = ArrowBigDownDash;
    exports2.ArrowBigDownDashIcon = ArrowBigDownDash;
    exports2.ArrowBigDownIcon = ArrowBigDown;
    exports2.ArrowBigLeft = ArrowBigLeft;
    exports2.ArrowBigLeftDash = ArrowBigLeftDash;
    exports2.ArrowBigLeftDashIcon = ArrowBigLeftDash;
    exports2.ArrowBigLeftIcon = ArrowBigLeft;
    exports2.ArrowBigRight = ArrowBigRight;
    exports2.ArrowBigRightDash = ArrowBigRightDash;
    exports2.ArrowBigRightDashIcon = ArrowBigRightDash;
    exports2.ArrowBigRightIcon = ArrowBigRight;
    exports2.ArrowBigUp = ArrowBigUp;
    exports2.ArrowBigUpDash = ArrowBigUpDash;
    exports2.ArrowBigUpDashIcon = ArrowBigUpDash;
    exports2.ArrowBigUpIcon = ArrowBigUp;
    exports2.ArrowDown = ArrowDown;
    exports2.ArrowDown01 = ArrowDown01;
    exports2.ArrowDown01Icon = ArrowDown01;
    exports2.ArrowDown10 = ArrowDown10;
    exports2.ArrowDown10Icon = ArrowDown10;
    exports2.ArrowDownAZ = ArrowDownAZ;
    exports2.ArrowDownAZIcon = ArrowDownAZ;
    exports2.ArrowDownAz = ArrowDownAZ;
    exports2.ArrowDownAzIcon = ArrowDownAZ;
    exports2.ArrowDownCircle = ArrowDownCircle;
    exports2.ArrowDownCircleIcon = ArrowDownCircle;
    exports2.ArrowDownFromLine = ArrowDownFromLine;
    exports2.ArrowDownFromLineIcon = ArrowDownFromLine;
    exports2.ArrowDownIcon = ArrowDown;
    exports2.ArrowDownLeft = ArrowDownLeft;
    exports2.ArrowDownLeftFromCircle = ArrowDownLeftFromCircle;
    exports2.ArrowDownLeftFromCircleIcon = ArrowDownLeftFromCircle;
    exports2.ArrowDownLeftIcon = ArrowDownLeft;
    exports2.ArrowDownLeftSquare = ArrowDownLeftSquare;
    exports2.ArrowDownLeftSquareIcon = ArrowDownLeftSquare;
    exports2.ArrowDownNarrowWide = ArrowDownNarrowWide;
    exports2.ArrowDownNarrowWideIcon = ArrowDownNarrowWide;
    exports2.ArrowDownRight = ArrowDownRight;
    exports2.ArrowDownRightFromCircle = ArrowDownRightFromCircle;
    exports2.ArrowDownRightFromCircleIcon = ArrowDownRightFromCircle;
    exports2.ArrowDownRightIcon = ArrowDownRight;
    exports2.ArrowDownRightSquare = ArrowDownRightSquare;
    exports2.ArrowDownRightSquareIcon = ArrowDownRightSquare;
    exports2.ArrowDownSquare = ArrowDownSquare;
    exports2.ArrowDownSquareIcon = ArrowDownSquare;
    exports2.ArrowDownToDot = ArrowDownToDot;
    exports2.ArrowDownToDotIcon = ArrowDownToDot;
    exports2.ArrowDownToLine = ArrowDownToLine;
    exports2.ArrowDownToLineIcon = ArrowDownToLine;
    exports2.ArrowDownUp = ArrowDownUp;
    exports2.ArrowDownUpIcon = ArrowDownUp;
    exports2.ArrowDownWideNarrow = ArrowDownWideNarrow;
    exports2.ArrowDownWideNarrowIcon = ArrowDownWideNarrow;
    exports2.ArrowDownZA = ArrowDownZA;
    exports2.ArrowDownZAIcon = ArrowDownZA;
    exports2.ArrowDownZa = ArrowDownZA;
    exports2.ArrowDownZaIcon = ArrowDownZA;
    exports2.ArrowLeft = ArrowLeft;
    exports2.ArrowLeftCircle = ArrowLeftCircle;
    exports2.ArrowLeftCircleIcon = ArrowLeftCircle;
    exports2.ArrowLeftFromLine = ArrowLeftFromLine;
    exports2.ArrowLeftFromLineIcon = ArrowLeftFromLine;
    exports2.ArrowLeftIcon = ArrowLeft;
    exports2.ArrowLeftRight = ArrowLeftRight;
    exports2.ArrowLeftRightIcon = ArrowLeftRight;
    exports2.ArrowLeftSquare = ArrowLeftSquare;
    exports2.ArrowLeftSquareIcon = ArrowLeftSquare;
    exports2.ArrowLeftToLine = ArrowLeftToLine;
    exports2.ArrowLeftToLineIcon = ArrowLeftToLine;
    exports2.ArrowRight = ArrowRight;
    exports2.ArrowRightCircle = ArrowRightCircle;
    exports2.ArrowRightCircleIcon = ArrowRightCircle;
    exports2.ArrowRightFromLine = ArrowRightFromLine;
    exports2.ArrowRightFromLineIcon = ArrowRightFromLine;
    exports2.ArrowRightIcon = ArrowRight;
    exports2.ArrowRightLeft = ArrowRightLeft;
    exports2.ArrowRightLeftIcon = ArrowRightLeft;
    exports2.ArrowRightSquare = ArrowRightSquare;
    exports2.ArrowRightSquareIcon = ArrowRightSquare;
    exports2.ArrowRightToLine = ArrowRightToLine;
    exports2.ArrowRightToLineIcon = ArrowRightToLine;
    exports2.ArrowUp = ArrowUp;
    exports2.ArrowUp01 = ArrowUp01;
    exports2.ArrowUp01Icon = ArrowUp01;
    exports2.ArrowUp10 = ArrowUp10;
    exports2.ArrowUp10Icon = ArrowUp10;
    exports2.ArrowUpAZ = ArrowUpAZ;
    exports2.ArrowUpAZIcon = ArrowUpAZ;
    exports2.ArrowUpAz = ArrowUpAZ;
    exports2.ArrowUpAzIcon = ArrowUpAZ;
    exports2.ArrowUpCircle = ArrowUpCircle;
    exports2.ArrowUpCircleIcon = ArrowUpCircle;
    exports2.ArrowUpDown = ArrowUpDown;
    exports2.ArrowUpDownIcon = ArrowUpDown;
    exports2.ArrowUpFromDot = ArrowUpFromDot;
    exports2.ArrowUpFromDotIcon = ArrowUpFromDot;
    exports2.ArrowUpFromLine = ArrowUpFromLine;
    exports2.ArrowUpFromLineIcon = ArrowUpFromLine;
    exports2.ArrowUpIcon = ArrowUp;
    exports2.ArrowUpLeft = ArrowUpLeft;
    exports2.ArrowUpLeftFromCircle = ArrowUpLeftFromCircle;
    exports2.ArrowUpLeftFromCircleIcon = ArrowUpLeftFromCircle;
    exports2.ArrowUpLeftIcon = ArrowUpLeft;
    exports2.ArrowUpLeftSquare = ArrowUpLeftSquare;
    exports2.ArrowUpLeftSquareIcon = ArrowUpLeftSquare;
    exports2.ArrowUpNarrowWide = ArrowUpNarrowWide;
    exports2.ArrowUpNarrowWideIcon = ArrowUpNarrowWide;
    exports2.ArrowUpRight = ArrowUpRight;
    exports2.ArrowUpRightFromCircle = ArrowUpRightFromCircle;
    exports2.ArrowUpRightFromCircleIcon = ArrowUpRightFromCircle;
    exports2.ArrowUpRightIcon = ArrowUpRight;
    exports2.ArrowUpRightSquare = ArrowUpRightSquare;
    exports2.ArrowUpRightSquareIcon = ArrowUpRightSquare;
    exports2.ArrowUpSquare = ArrowUpSquare;
    exports2.ArrowUpSquareIcon = ArrowUpSquare;
    exports2.ArrowUpToLine = ArrowUpToLine;
    exports2.ArrowUpToLineIcon = ArrowUpToLine;
    exports2.ArrowUpWideNarrow = ArrowUpWideNarrow;
    exports2.ArrowUpWideNarrowIcon = ArrowUpWideNarrow;
    exports2.ArrowUpZA = ArrowUpZA;
    exports2.ArrowUpZAIcon = ArrowUpZA;
    exports2.ArrowUpZa = ArrowUpZA;
    exports2.ArrowUpZaIcon = ArrowUpZA;
    exports2.ArrowsUpFromLine = ArrowsUpFromLine;
    exports2.ArrowsUpFromLineIcon = ArrowsUpFromLine;
    exports2.Asterisk = Asterisk;
    exports2.AsteriskIcon = Asterisk;
    exports2.AtSign = AtSign;
    exports2.AtSignIcon = AtSign;
    exports2.Atom = Atom;
    exports2.AtomIcon = Atom;
    exports2.AudioLines = AudioLines;
    exports2.AudioLinesIcon = AudioLines;
    exports2.AudioWaveform = AudioWaveform;
    exports2.AudioWaveformIcon = AudioWaveform;
    exports2.Award = Award;
    exports2.AwardIcon = Award;
    exports2.Axe = Axe;
    exports2.AxeIcon = Axe;
    exports2.Axis3D = Axis3d;
    exports2.Axis3DIcon = Axis3d;
    exports2.Axis3d = Axis3d;
    exports2.Axis3dIcon = Axis3d;
    exports2.Baby = Baby;
    exports2.BabyIcon = Baby;
    exports2.Backpack = Backpack;
    exports2.BackpackIcon = Backpack;
    exports2.Badge = Badge;
    exports2.BadgeAlert = BadgeAlert;
    exports2.BadgeAlertIcon = BadgeAlert;
    exports2.BadgeCent = BadgeCent;
    exports2.BadgeCentIcon = BadgeCent;
    exports2.BadgeCheck = BadgeCheck;
    exports2.BadgeCheckIcon = BadgeCheck;
    exports2.BadgeDollarSign = BadgeDollarSign;
    exports2.BadgeDollarSignIcon = BadgeDollarSign;
    exports2.BadgeEuro = BadgeEuro;
    exports2.BadgeEuroIcon = BadgeEuro;
    exports2.BadgeHelp = BadgeHelp;
    exports2.BadgeHelpIcon = BadgeHelp;
    exports2.BadgeIcon = Badge;
    exports2.BadgeIndianRupee = BadgeIndianRupee;
    exports2.BadgeIndianRupeeIcon = BadgeIndianRupee;
    exports2.BadgeInfo = BadgeInfo;
    exports2.BadgeInfoIcon = BadgeInfo;
    exports2.BadgeJapaneseYen = BadgeJapaneseYen;
    exports2.BadgeJapaneseYenIcon = BadgeJapaneseYen;
    exports2.BadgeMinus = BadgeMinus;
    exports2.BadgeMinusIcon = BadgeMinus;
    exports2.BadgePercent = BadgePercent;
    exports2.BadgePercentIcon = BadgePercent;
    exports2.BadgePlus = BadgePlus;
    exports2.BadgePlusIcon = BadgePlus;
    exports2.BadgePoundSterling = BadgePoundSterling;
    exports2.BadgePoundSterlingIcon = BadgePoundSterling;
    exports2.BadgeRussianRuble = BadgeRussianRuble;
    exports2.BadgeRussianRubleIcon = BadgeRussianRuble;
    exports2.BadgeSwissFranc = BadgeSwissFranc;
    exports2.BadgeSwissFrancIcon = BadgeSwissFranc;
    exports2.BadgeX = BadgeX;
    exports2.BadgeXIcon = BadgeX;
    exports2.BaggageClaim = BaggageClaim;
    exports2.BaggageClaimIcon = BaggageClaim;
    exports2.Ban = Ban;
    exports2.BanIcon = Ban;
    exports2.Banana = Banana;
    exports2.BananaIcon = Banana;
    exports2.Banknote = Banknote;
    exports2.BanknoteIcon = Banknote;
    exports2.BarChart = BarChart;
    exports2.BarChart2 = BarChart2;
    exports2.BarChart2Icon = BarChart2;
    exports2.BarChart3 = BarChart3;
    exports2.BarChart3Icon = BarChart3;
    exports2.BarChart4 = BarChart4;
    exports2.BarChart4Icon = BarChart4;
    exports2.BarChartBig = BarChartBig;
    exports2.BarChartBigIcon = BarChartBig;
    exports2.BarChartHorizontal = BarChartHorizontal;
    exports2.BarChartHorizontalBig = BarChartHorizontalBig;
    exports2.BarChartHorizontalBigIcon = BarChartHorizontalBig;
    exports2.BarChartHorizontalIcon = BarChartHorizontal;
    exports2.BarChartIcon = BarChart;
    exports2.Barcode = Barcode;
    exports2.BarcodeIcon = Barcode;
    exports2.Baseline = Baseline;
    exports2.BaselineIcon = Baseline;
    exports2.Bath = Bath;
    exports2.BathIcon = Bath;
    exports2.Battery = Battery;
    exports2.BatteryCharging = BatteryCharging;
    exports2.BatteryChargingIcon = BatteryCharging;
    exports2.BatteryFull = BatteryFull;
    exports2.BatteryFullIcon = BatteryFull;
    exports2.BatteryIcon = Battery;
    exports2.BatteryLow = BatteryLow;
    exports2.BatteryLowIcon = BatteryLow;
    exports2.BatteryMedium = BatteryMedium;
    exports2.BatteryMediumIcon = BatteryMedium;
    exports2.BatteryWarning = BatteryWarning;
    exports2.BatteryWarningIcon = BatteryWarning;
    exports2.Beaker = Beaker;
    exports2.BeakerIcon = Beaker;
    exports2.Bean = Bean;
    exports2.BeanIcon = Bean;
    exports2.BeanOff = BeanOff;
    exports2.BeanOffIcon = BeanOff;
    exports2.Bed = Bed;
    exports2.BedDouble = BedDouble;
    exports2.BedDoubleIcon = BedDouble;
    exports2.BedIcon = Bed;
    exports2.BedSingle = BedSingle;
    exports2.BedSingleIcon = BedSingle;
    exports2.Beef = Beef;
    exports2.BeefIcon = Beef;
    exports2.Beer = Beer;
    exports2.BeerIcon = Beer;
    exports2.Bell = Bell;
    exports2.BellDot = BellDot;
    exports2.BellDotIcon = BellDot;
    exports2.BellIcon = Bell;
    exports2.BellMinus = BellMinus;
    exports2.BellMinusIcon = BellMinus;
    exports2.BellOff = BellOff;
    exports2.BellOffIcon = BellOff;
    exports2.BellPlus = BellPlus;
    exports2.BellPlusIcon = BellPlus;
    exports2.BellRing = BellRing;
    exports2.BellRingIcon = BellRing;
    exports2.Bike = Bike;
    exports2.BikeIcon = Bike;
    exports2.Binary = Binary;
    exports2.BinaryIcon = Binary;
    exports2.Biohazard = Biohazard;
    exports2.BiohazardIcon = Biohazard;
    exports2.Bird = Bird;
    exports2.BirdIcon = Bird;
    exports2.Bitcoin = Bitcoin;
    exports2.BitcoinIcon = Bitcoin;
    exports2.Blinds = Blinds;
    exports2.BlindsIcon = Blinds;
    exports2.Blocks = Blocks;
    exports2.BlocksIcon = Blocks;
    exports2.Bluetooth = Bluetooth;
    exports2.BluetoothConnected = BluetoothConnected;
    exports2.BluetoothConnectedIcon = BluetoothConnected;
    exports2.BluetoothIcon = Bluetooth;
    exports2.BluetoothOff = BluetoothOff;
    exports2.BluetoothOffIcon = BluetoothOff;
    exports2.BluetoothSearching = BluetoothSearching;
    exports2.BluetoothSearchingIcon = BluetoothSearching;
    exports2.Bold = Bold;
    exports2.BoldIcon = Bold;
    exports2.Bomb = Bomb;
    exports2.BombIcon = Bomb;
    exports2.Bone = Bone;
    exports2.BoneIcon = Bone;
    exports2.Book = Book;
    exports2.BookA = BookA;
    exports2.BookAIcon = BookA;
    exports2.BookAudio = BookAudio;
    exports2.BookAudioIcon = BookAudio;
    exports2.BookCheck = BookCheck;
    exports2.BookCheckIcon = BookCheck;
    exports2.BookCopy = BookCopy;
    exports2.BookCopyIcon = BookCopy;
    exports2.BookDashed = BookDashed;
    exports2.BookDashedIcon = BookDashed;
    exports2.BookDown = BookDown;
    exports2.BookDownIcon = BookDown;
    exports2.BookHeadphones = BookHeadphones;
    exports2.BookHeadphonesIcon = BookHeadphones;
    exports2.BookHeart = BookHeart;
    exports2.BookHeartIcon = BookHeart;
    exports2.BookIcon = Book;
    exports2.BookImage = BookImage;
    exports2.BookImageIcon = BookImage;
    exports2.BookKey = BookKey;
    exports2.BookKeyIcon = BookKey;
    exports2.BookLock = BookLock;
    exports2.BookLockIcon = BookLock;
    exports2.BookMarked = BookMarked;
    exports2.BookMarkedIcon = BookMarked;
    exports2.BookMinus = BookMinus;
    exports2.BookMinusIcon = BookMinus;
    exports2.BookOpen = BookOpen;
    exports2.BookOpenCheck = BookOpenCheck;
    exports2.BookOpenCheckIcon = BookOpenCheck;
    exports2.BookOpenIcon = BookOpen;
    exports2.BookOpenText = BookOpenText;
    exports2.BookOpenTextIcon = BookOpenText;
    exports2.BookPlus = BookPlus;
    exports2.BookPlusIcon = BookPlus;
    exports2.BookTemplate = BookDashed;
    exports2.BookTemplateIcon = BookDashed;
    exports2.BookText = BookText;
    exports2.BookTextIcon = BookText;
    exports2.BookType = BookType;
    exports2.BookTypeIcon = BookType;
    exports2.BookUp = BookUp;
    exports2.BookUp2 = BookUp2;
    exports2.BookUp2Icon = BookUp2;
    exports2.BookUpIcon = BookUp;
    exports2.BookUser = BookUser;
    exports2.BookUserIcon = BookUser;
    exports2.BookX = BookX;
    exports2.BookXIcon = BookX;
    exports2.Bookmark = Bookmark;
    exports2.BookmarkCheck = BookmarkCheck;
    exports2.BookmarkCheckIcon = BookmarkCheck;
    exports2.BookmarkIcon = Bookmark;
    exports2.BookmarkMinus = BookmarkMinus;
    exports2.BookmarkMinusIcon = BookmarkMinus;
    exports2.BookmarkPlus = BookmarkPlus;
    exports2.BookmarkPlusIcon = BookmarkPlus;
    exports2.BookmarkX = BookmarkX;
    exports2.BookmarkXIcon = BookmarkX;
    exports2.BoomBox = BoomBox;
    exports2.BoomBoxIcon = BoomBox;
    exports2.Bot = Bot;
    exports2.BotIcon = Bot;
    exports2.Box = Box;
    exports2.BoxIcon = Box;
    exports2.BoxSelect = BoxSelect;
    exports2.BoxSelectIcon = BoxSelect;
    exports2.Boxes = Boxes;
    exports2.BoxesIcon = Boxes;
    exports2.Braces = Braces;
    exports2.BracesIcon = Braces;
    exports2.Brackets = Brackets;
    exports2.BracketsIcon = Brackets;
    exports2.Brain = Brain;
    exports2.BrainCircuit = BrainCircuit;
    exports2.BrainCircuitIcon = BrainCircuit;
    exports2.BrainCog = BrainCog;
    exports2.BrainCogIcon = BrainCog;
    exports2.BrainIcon = Brain;
    exports2.Briefcase = Briefcase;
    exports2.BriefcaseIcon = Briefcase;
    exports2.BringToFront = BringToFront;
    exports2.BringToFrontIcon = BringToFront;
    exports2.Brush = Brush;
    exports2.BrushIcon = Brush;
    exports2.Bug = Bug;
    exports2.BugIcon = Bug;
    exports2.BugOff = BugOff;
    exports2.BugOffIcon = BugOff;
    exports2.BugPlay = BugPlay;
    exports2.BugPlayIcon = BugPlay;
    exports2.Building = Building;
    exports2.Building2 = Building2;
    exports2.Building2Icon = Building2;
    exports2.BuildingIcon = Building;
    exports2.Bus = Bus;
    exports2.BusFront = BusFront;
    exports2.BusFrontIcon = BusFront;
    exports2.BusIcon = Bus;
    exports2.Cable = Cable;
    exports2.CableCar = CableCar;
    exports2.CableCarIcon = CableCar;
    exports2.CableIcon = Cable;
    exports2.Cake = Cake;
    exports2.CakeIcon = Cake;
    exports2.CakeSlice = CakeSlice;
    exports2.CakeSliceIcon = CakeSlice;
    exports2.Calculator = Calculator;
    exports2.CalculatorIcon = Calculator;
    exports2.Calendar = Calendar;
    exports2.CalendarCheck = CalendarCheck;
    exports2.CalendarCheck2 = CalendarCheck2;
    exports2.CalendarCheck2Icon = CalendarCheck2;
    exports2.CalendarCheckIcon = CalendarCheck;
    exports2.CalendarClock = CalendarClock;
    exports2.CalendarClockIcon = CalendarClock;
    exports2.CalendarDays = CalendarDays;
    exports2.CalendarDaysIcon = CalendarDays;
    exports2.CalendarHeart = CalendarHeart;
    exports2.CalendarHeartIcon = CalendarHeart;
    exports2.CalendarIcon = Calendar;
    exports2.CalendarMinus = CalendarMinus;
    exports2.CalendarMinusIcon = CalendarMinus;
    exports2.CalendarOff = CalendarOff;
    exports2.CalendarOffIcon = CalendarOff;
    exports2.CalendarPlus = CalendarPlus;
    exports2.CalendarPlusIcon = CalendarPlus;
    exports2.CalendarRange = CalendarRange;
    exports2.CalendarRangeIcon = CalendarRange;
    exports2.CalendarSearch = CalendarSearch;
    exports2.CalendarSearchIcon = CalendarSearch;
    exports2.CalendarX = CalendarX;
    exports2.CalendarX2 = CalendarX2;
    exports2.CalendarX2Icon = CalendarX2;
    exports2.CalendarXIcon = CalendarX;
    exports2.Camera = Camera;
    exports2.CameraIcon = Camera;
    exports2.CameraOff = CameraOff;
    exports2.CameraOffIcon = CameraOff;
    exports2.CandlestickChart = CandlestickChart;
    exports2.CandlestickChartIcon = CandlestickChart;
    exports2.Candy = Candy;
    exports2.CandyCane = CandyCane;
    exports2.CandyCaneIcon = CandyCane;
    exports2.CandyIcon = Candy;
    exports2.CandyOff = CandyOff;
    exports2.CandyOffIcon = CandyOff;
    exports2.Car = Car;
    exports2.CarFront = CarFront;
    exports2.CarFrontIcon = CarFront;
    exports2.CarIcon = Car;
    exports2.CarTaxiFront = CarTaxiFront;
    exports2.CarTaxiFrontIcon = CarTaxiFront;
    exports2.Caravan = Caravan;
    exports2.CaravanIcon = Caravan;
    exports2.Carrot = Carrot;
    exports2.CarrotIcon = Carrot;
    exports2.CaseLower = CaseLower;
    exports2.CaseLowerIcon = CaseLower;
    exports2.CaseSensitive = CaseSensitive;
    exports2.CaseSensitiveIcon = CaseSensitive;
    exports2.CaseUpper = CaseUpper;
    exports2.CaseUpperIcon = CaseUpper;
    exports2.CassetteTape = CassetteTape;
    exports2.CassetteTapeIcon = CassetteTape;
    exports2.Cast = Cast;
    exports2.CastIcon = Cast;
    exports2.Castle = Castle;
    exports2.CastleIcon = Castle;
    exports2.Cat = Cat;
    exports2.CatIcon = Cat;
    exports2.Check = Check;
    exports2.CheckCheck = CheckCheck;
    exports2.CheckCheckIcon = CheckCheck;
    exports2.CheckCircle = CheckCircle3;
    exports2.CheckCircle2 = CheckCircle2;
    exports2.CheckCircle2Icon = CheckCircle2;
    exports2.CheckCircleIcon = CheckCircle3;
    exports2.CheckIcon = Check;
    exports2.CheckSquare = CheckSquare;
    exports2.CheckSquare2 = CheckSquare2;
    exports2.CheckSquare2Icon = CheckSquare2;
    exports2.CheckSquareIcon = CheckSquare;
    exports2.ChefHat = ChefHat;
    exports2.ChefHatIcon = ChefHat;
    exports2.Cherry = Cherry;
    exports2.CherryIcon = Cherry;
    exports2.ChevronDown = ChevronDown;
    exports2.ChevronDownCircle = ChevronDownCircle;
    exports2.ChevronDownCircleIcon = ChevronDownCircle;
    exports2.ChevronDownIcon = ChevronDown;
    exports2.ChevronDownSquare = ChevronDownSquare;
    exports2.ChevronDownSquareIcon = ChevronDownSquare;
    exports2.ChevronFirst = ChevronFirst;
    exports2.ChevronFirstIcon = ChevronFirst;
    exports2.ChevronLast = ChevronLast;
    exports2.ChevronLastIcon = ChevronLast;
    exports2.ChevronLeft = ChevronLeft;
    exports2.ChevronLeftCircle = ChevronLeftCircle;
    exports2.ChevronLeftCircleIcon = ChevronLeftCircle;
    exports2.ChevronLeftIcon = ChevronLeft;
    exports2.ChevronLeftSquare = ChevronLeftSquare;
    exports2.ChevronLeftSquareIcon = ChevronLeftSquare;
    exports2.ChevronRight = ChevronRight;
    exports2.ChevronRightCircle = ChevronRightCircle;
    exports2.ChevronRightCircleIcon = ChevronRightCircle;
    exports2.ChevronRightIcon = ChevronRight;
    exports2.ChevronRightSquare = ChevronRightSquare;
    exports2.ChevronRightSquareIcon = ChevronRightSquare;
    exports2.ChevronUp = ChevronUp;
    exports2.ChevronUpCircle = ChevronUpCircle;
    exports2.ChevronUpCircleIcon = ChevronUpCircle;
    exports2.ChevronUpIcon = ChevronUp;
    exports2.ChevronUpSquare = ChevronUpSquare;
    exports2.ChevronUpSquareIcon = ChevronUpSquare;
    exports2.ChevronsDown = ChevronsDown;
    exports2.ChevronsDownIcon = ChevronsDown;
    exports2.ChevronsDownUp = ChevronsDownUp;
    exports2.ChevronsDownUpIcon = ChevronsDownUp;
    exports2.ChevronsLeft = ChevronsLeft;
    exports2.ChevronsLeftIcon = ChevronsLeft;
    exports2.ChevronsLeftRight = ChevronsLeftRight;
    exports2.ChevronsLeftRightIcon = ChevronsLeftRight;
    exports2.ChevronsRight = ChevronsRight;
    exports2.ChevronsRightIcon = ChevronsRight;
    exports2.ChevronsRightLeft = ChevronsRightLeft;
    exports2.ChevronsRightLeftIcon = ChevronsRightLeft;
    exports2.ChevronsUp = ChevronsUp;
    exports2.ChevronsUpDown = ChevronsUpDown;
    exports2.ChevronsUpDownIcon = ChevronsUpDown;
    exports2.ChevronsUpIcon = ChevronsUp;
    exports2.Chrome = Chrome;
    exports2.ChromeIcon = Chrome;
    exports2.Church = Church;
    exports2.ChurchIcon = Church;
    exports2.Cigarette = Cigarette;
    exports2.CigaretteIcon = Cigarette;
    exports2.CigaretteOff = CigaretteOff;
    exports2.CigaretteOffIcon = CigaretteOff;
    exports2.Circle = Circle;
    exports2.CircleDashed = CircleDashed;
    exports2.CircleDashedIcon = CircleDashed;
    exports2.CircleDollarSign = CircleDollarSign;
    exports2.CircleDollarSignIcon = CircleDollarSign;
    exports2.CircleDot = CircleDot;
    exports2.CircleDotDashed = CircleDotDashed;
    exports2.CircleDotDashedIcon = CircleDotDashed;
    exports2.CircleDotIcon = CircleDot;
    exports2.CircleEllipsis = CircleEllipsis;
    exports2.CircleEllipsisIcon = CircleEllipsis;
    exports2.CircleEqual = CircleEqual;
    exports2.CircleEqualIcon = CircleEqual;
    exports2.CircleIcon = Circle;
    exports2.CircleOff = CircleOff;
    exports2.CircleOffIcon = CircleOff;
    exports2.CircleSlash = CircleSlash;
    exports2.CircleSlash2 = CircleSlash2;
    exports2.CircleSlash2Icon = CircleSlash2;
    exports2.CircleSlashIcon = CircleSlash;
    exports2.CircleSlashed = CircleSlash2;
    exports2.CircleSlashedIcon = CircleSlash2;
    exports2.CircleUser = CircleUser;
    exports2.CircleUserIcon = CircleUser;
    exports2.CircleUserRound = CircleUserRound;
    exports2.CircleUserRoundIcon = CircleUserRound;
    exports2.CircuitBoard = CircuitBoard;
    exports2.CircuitBoardIcon = CircuitBoard;
    exports2.Citrus = Citrus;
    exports2.CitrusIcon = Citrus;
    exports2.Clapperboard = Clapperboard;
    exports2.ClapperboardIcon = Clapperboard;
    exports2.Clipboard = Clipboard;
    exports2.ClipboardCheck = ClipboardCheck;
    exports2.ClipboardCheckIcon = ClipboardCheck;
    exports2.ClipboardCopy = ClipboardCopy;
    exports2.ClipboardCopyIcon = ClipboardCopy;
    exports2.ClipboardEdit = ClipboardEdit;
    exports2.ClipboardEditIcon = ClipboardEdit;
    exports2.ClipboardIcon = Clipboard;
    exports2.ClipboardList = ClipboardList;
    exports2.ClipboardListIcon = ClipboardList;
    exports2.ClipboardPaste = ClipboardPaste;
    exports2.ClipboardPasteIcon = ClipboardPaste;
    exports2.ClipboardSignature = ClipboardSignature;
    exports2.ClipboardSignatureIcon = ClipboardSignature;
    exports2.ClipboardType = ClipboardType;
    exports2.ClipboardTypeIcon = ClipboardType;
    exports2.ClipboardX = ClipboardX;
    exports2.ClipboardXIcon = ClipboardX;
    exports2.Clock = Clock;
    exports2.Clock1 = Clock1;
    exports2.Clock10 = Clock10;
    exports2.Clock10Icon = Clock10;
    exports2.Clock11 = Clock11;
    exports2.Clock11Icon = Clock11;
    exports2.Clock12 = Clock12;
    exports2.Clock12Icon = Clock12;
    exports2.Clock1Icon = Clock1;
    exports2.Clock2 = Clock2;
    exports2.Clock2Icon = Clock2;
    exports2.Clock3 = Clock3;
    exports2.Clock3Icon = Clock3;
    exports2.Clock4 = Clock4;
    exports2.Clock4Icon = Clock4;
    exports2.Clock5 = Clock5;
    exports2.Clock5Icon = Clock5;
    exports2.Clock6 = Clock6;
    exports2.Clock6Icon = Clock6;
    exports2.Clock7 = Clock7;
    exports2.Clock7Icon = Clock7;
    exports2.Clock8 = Clock8;
    exports2.Clock8Icon = Clock8;
    exports2.Clock9 = Clock9;
    exports2.Clock9Icon = Clock9;
    exports2.ClockIcon = Clock;
    exports2.Cloud = Cloud;
    exports2.CloudCog = CloudCog;
    exports2.CloudCogIcon = CloudCog;
    exports2.CloudDrizzle = CloudDrizzle;
    exports2.CloudDrizzleIcon = CloudDrizzle;
    exports2.CloudFog = CloudFog;
    exports2.CloudFogIcon = CloudFog;
    exports2.CloudHail = CloudHail;
    exports2.CloudHailIcon = CloudHail;
    exports2.CloudIcon = Cloud;
    exports2.CloudLightning = CloudLightning;
    exports2.CloudLightningIcon = CloudLightning;
    exports2.CloudMoon = CloudMoon;
    exports2.CloudMoonIcon = CloudMoon;
    exports2.CloudMoonRain = CloudMoonRain;
    exports2.CloudMoonRainIcon = CloudMoonRain;
    exports2.CloudOff = CloudOff;
    exports2.CloudOffIcon = CloudOff;
    exports2.CloudRain = CloudRain;
    exports2.CloudRainIcon = CloudRain;
    exports2.CloudRainWind = CloudRainWind;
    exports2.CloudRainWindIcon = CloudRainWind;
    exports2.CloudSnow = CloudSnow;
    exports2.CloudSnowIcon = CloudSnow;
    exports2.CloudSun = CloudSun;
    exports2.CloudSunIcon = CloudSun;
    exports2.CloudSunRain = CloudSunRain;
    exports2.CloudSunRainIcon = CloudSunRain;
    exports2.Cloudy = Cloudy;
    exports2.CloudyIcon = Cloudy;
    exports2.Clover = Clover;
    exports2.CloverIcon = Clover;
    exports2.Club = Club;
    exports2.ClubIcon = Club;
    exports2.Code = Code;
    exports2.Code2 = Code2;
    exports2.Code2Icon = Code2;
    exports2.CodeIcon = Code;
    exports2.Codepen = Codepen;
    exports2.CodepenIcon = Codepen;
    exports2.Codesandbox = Codesandbox;
    exports2.CodesandboxIcon = Codesandbox;
    exports2.Coffee = Coffee;
    exports2.CoffeeIcon = Coffee;
    exports2.Cog = Cog;
    exports2.CogIcon = Cog;
    exports2.Coins = Coins;
    exports2.CoinsIcon = Coins;
    exports2.Columns = Columns;
    exports2.ColumnsIcon = Columns;
    exports2.Combine = Combine;
    exports2.CombineIcon = Combine;
    exports2.Command = Command;
    exports2.CommandIcon = Command;
    exports2.Compass = Compass;
    exports2.CompassIcon = Compass;
    exports2.Component = Component;
    exports2.ComponentIcon = Component;
    exports2.Computer = Computer;
    exports2.ComputerIcon = Computer;
    exports2.ConciergeBell = ConciergeBell;
    exports2.ConciergeBellIcon = ConciergeBell;
    exports2.Cone = Cone;
    exports2.ConeIcon = Cone;
    exports2.Construction = Construction;
    exports2.ConstructionIcon = Construction;
    exports2.Contact = Contact;
    exports2.Contact2 = Contact2;
    exports2.Contact2Icon = Contact2;
    exports2.ContactIcon = Contact;
    exports2.Container = Container;
    exports2.ContainerIcon = Container;
    exports2.Contrast = Contrast;
    exports2.ContrastIcon = Contrast;
    exports2.Cookie = Cookie;
    exports2.CookieIcon = Cookie;
    exports2.Copy = Copy;
    exports2.CopyCheck = CopyCheck;
    exports2.CopyCheckIcon = CopyCheck;
    exports2.CopyIcon = Copy;
    exports2.CopyMinus = CopyMinus;
    exports2.CopyMinusIcon = CopyMinus;
    exports2.CopyPlus = CopyPlus;
    exports2.CopyPlusIcon = CopyPlus;
    exports2.CopySlash = CopySlash;
    exports2.CopySlashIcon = CopySlash;
    exports2.CopyX = CopyX;
    exports2.CopyXIcon = CopyX;
    exports2.Copyleft = Copyleft;
    exports2.CopyleftIcon = Copyleft;
    exports2.Copyright = Copyright;
    exports2.CopyrightIcon = Copyright;
    exports2.CornerDownLeft = CornerDownLeft;
    exports2.CornerDownLeftIcon = CornerDownLeft;
    exports2.CornerDownRight = CornerDownRight;
    exports2.CornerDownRightIcon = CornerDownRight;
    exports2.CornerLeftDown = CornerLeftDown;
    exports2.CornerLeftDownIcon = CornerLeftDown;
    exports2.CornerLeftUp = CornerLeftUp;
    exports2.CornerLeftUpIcon = CornerLeftUp;
    exports2.CornerRightDown = CornerRightDown;
    exports2.CornerRightDownIcon = CornerRightDown;
    exports2.CornerRightUp = CornerRightUp;
    exports2.CornerRightUpIcon = CornerRightUp;
    exports2.CornerUpLeft = CornerUpLeft;
    exports2.CornerUpLeftIcon = CornerUpLeft;
    exports2.CornerUpRight = CornerUpRight;
    exports2.CornerUpRightIcon = CornerUpRight;
    exports2.Cpu = Cpu;
    exports2.CpuIcon = Cpu;
    exports2.CreativeCommons = CreativeCommons;
    exports2.CreativeCommonsIcon = CreativeCommons;
    exports2.CreditCard = CreditCard;
    exports2.CreditCardIcon = CreditCard;
    exports2.Croissant = Croissant;
    exports2.CroissantIcon = Croissant;
    exports2.Crop = Crop;
    exports2.CropIcon = Crop;
    exports2.Cross = Cross;
    exports2.CrossIcon = Cross;
    exports2.Crosshair = Crosshair;
    exports2.CrosshairIcon = Crosshair;
    exports2.Crown = Crown;
    exports2.CrownIcon = Crown;
    exports2.Cuboid = Cuboid;
    exports2.CuboidIcon = Cuboid;
    exports2.CupSoda = CupSoda;
    exports2.CupSodaIcon = CupSoda;
    exports2.CurlyBraces = Braces;
    exports2.CurlyBracesIcon = Braces;
    exports2.Currency = Currency;
    exports2.CurrencyIcon = Currency;
    exports2.Cylinder = Cylinder;
    exports2.CylinderIcon = Cylinder;
    exports2.Database = Database;
    exports2.DatabaseBackup = DatabaseBackup;
    exports2.DatabaseBackupIcon = DatabaseBackup;
    exports2.DatabaseIcon = Database;
    exports2.DatabaseZap = DatabaseZap;
    exports2.DatabaseZapIcon = DatabaseZap;
    exports2.Delete = Delete;
    exports2.DeleteIcon = Delete;
    exports2.Dessert = Dessert;
    exports2.DessertIcon = Dessert;
    exports2.Diameter = Diameter;
    exports2.DiameterIcon = Diameter;
    exports2.Diamond = Diamond;
    exports2.DiamondIcon = Diamond;
    exports2.Dice1 = Dice1;
    exports2.Dice1Icon = Dice1;
    exports2.Dice2 = Dice2;
    exports2.Dice2Icon = Dice2;
    exports2.Dice3 = Dice3;
    exports2.Dice3Icon = Dice3;
    exports2.Dice4 = Dice4;
    exports2.Dice4Icon = Dice4;
    exports2.Dice5 = Dice5;
    exports2.Dice5Icon = Dice5;
    exports2.Dice6 = Dice6;
    exports2.Dice6Icon = Dice6;
    exports2.Dices = Dices;
    exports2.DicesIcon = Dices;
    exports2.Diff = Diff;
    exports2.DiffIcon = Diff;
    exports2.Disc = Disc;
    exports2.Disc2 = Disc2;
    exports2.Disc2Icon = Disc2;
    exports2.Disc3 = Disc3;
    exports2.Disc3Icon = Disc3;
    exports2.DiscAlbum = DiscAlbum;
    exports2.DiscAlbumIcon = DiscAlbum;
    exports2.DiscIcon = Disc;
    exports2.Divide = Divide;
    exports2.DivideCircle = DivideCircle;
    exports2.DivideCircleIcon = DivideCircle;
    exports2.DivideIcon = Divide;
    exports2.DivideSquare = DivideSquare;
    exports2.DivideSquareIcon = DivideSquare;
    exports2.Dna = Dna;
    exports2.DnaIcon = Dna;
    exports2.DnaOff = DnaOff;
    exports2.DnaOffIcon = DnaOff;
    exports2.Dog = Dog;
    exports2.DogIcon = Dog;
    exports2.DollarSign = DollarSign;
    exports2.DollarSignIcon = DollarSign;
    exports2.Donut = Donut;
    exports2.DonutIcon = Donut;
    exports2.DoorClosed = DoorClosed;
    exports2.DoorClosedIcon = DoorClosed;
    exports2.DoorOpen = DoorOpen;
    exports2.DoorOpenIcon = DoorOpen;
    exports2.Dot = Dot;
    exports2.DotIcon = Dot;
    exports2.Download = Download;
    exports2.DownloadCloud = DownloadCloud;
    exports2.DownloadCloudIcon = DownloadCloud;
    exports2.DownloadIcon = Download;
    exports2.DraftingCompass = DraftingCompass;
    exports2.DraftingCompassIcon = DraftingCompass;
    exports2.Drama = Drama;
    exports2.DramaIcon = Drama;
    exports2.Dribbble = Dribbble;
    exports2.DribbbleIcon = Dribbble;
    exports2.Droplet = Droplet;
    exports2.DropletIcon = Droplet;
    exports2.Droplets = Droplets;
    exports2.DropletsIcon = Droplets;
    exports2.Drum = Drum;
    exports2.DrumIcon = Drum;
    exports2.Drumstick = Drumstick;
    exports2.DrumstickIcon = Drumstick;
    exports2.Dumbbell = Dumbbell;
    exports2.DumbbellIcon = Dumbbell;
    exports2.Ear = Ear;
    exports2.EarIcon = Ear;
    exports2.EarOff = EarOff;
    exports2.EarOffIcon = EarOff;
    exports2.Edit = PenSquare;
    exports2.Edit2 = Pen;
    exports2.Edit2Icon = Pen;
    exports2.Edit3 = PenLine;
    exports2.Edit3Icon = PenLine;
    exports2.EditIcon = PenSquare;
    exports2.Egg = Egg;
    exports2.EggFried = EggFried;
    exports2.EggFriedIcon = EggFried;
    exports2.EggIcon = Egg;
    exports2.EggOff = EggOff;
    exports2.EggOffIcon = EggOff;
    exports2.Equal = Equal;
    exports2.EqualIcon = Equal;
    exports2.EqualNot = EqualNot;
    exports2.EqualNotIcon = EqualNot;
    exports2.Eraser = Eraser;
    exports2.EraserIcon = Eraser;
    exports2.Euro = Euro;
    exports2.EuroIcon = Euro;
    exports2.Expand = Expand;
    exports2.ExpandIcon = Expand;
    exports2.ExternalLink = ExternalLink;
    exports2.ExternalLinkIcon = ExternalLink;
    exports2.Eye = Eye2;
    exports2.EyeIcon = Eye2;
    exports2.EyeOff = EyeOff2;
    exports2.EyeOffIcon = EyeOff2;
    exports2.Facebook = Facebook;
    exports2.FacebookIcon = Facebook;
    exports2.Factory = Factory;
    exports2.FactoryIcon = Factory;
    exports2.Fan = Fan;
    exports2.FanIcon = Fan;
    exports2.FastForward = FastForward;
    exports2.FastForwardIcon = FastForward;
    exports2.Feather = Feather;
    exports2.FeatherIcon = Feather;
    exports2.FerrisWheel = FerrisWheel;
    exports2.FerrisWheelIcon = FerrisWheel;
    exports2.Figma = Figma;
    exports2.FigmaIcon = Figma;
    exports2.File = File;
    exports2.FileArchive = FileArchive;
    exports2.FileArchiveIcon = FileArchive;
    exports2.FileAudio = FileAudio;
    exports2.FileAudio2 = FileAudio2;
    exports2.FileAudio2Icon = FileAudio2;
    exports2.FileAudioIcon = FileAudio;
    exports2.FileAxis3D = FileAxis3d;
    exports2.FileAxis3DIcon = FileAxis3d;
    exports2.FileAxis3d = FileAxis3d;
    exports2.FileAxis3dIcon = FileAxis3d;
    exports2.FileBadge = FileBadge;
    exports2.FileBadge2 = FileBadge2;
    exports2.FileBadge2Icon = FileBadge2;
    exports2.FileBadgeIcon = FileBadge;
    exports2.FileBarChart = FileBarChart;
    exports2.FileBarChart2 = FileBarChart2;
    exports2.FileBarChart2Icon = FileBarChart2;
    exports2.FileBarChartIcon = FileBarChart;
    exports2.FileBox = FileBox;
    exports2.FileBoxIcon = FileBox;
    exports2.FileCheck = FileCheck;
    exports2.FileCheck2 = FileCheck2;
    exports2.FileCheck2Icon = FileCheck2;
    exports2.FileCheckIcon = FileCheck;
    exports2.FileClock = FileClock;
    exports2.FileClockIcon = FileClock;
    exports2.FileCode = FileCode;
    exports2.FileCode2 = FileCode2;
    exports2.FileCode2Icon = FileCode2;
    exports2.FileCodeIcon = FileCode;
    exports2.FileCog = FileCog;
    exports2.FileCog2 = FileCog;
    exports2.FileCog2Icon = FileCog;
    exports2.FileCogIcon = FileCog;
    exports2.FileDiff = FileDiff;
    exports2.FileDiffIcon = FileDiff;
    exports2.FileDigit = FileDigit;
    exports2.FileDigitIcon = FileDigit;
    exports2.FileDown = FileDown;
    exports2.FileDownIcon = FileDown;
    exports2.FileEdit = FileEdit;
    exports2.FileEditIcon = FileEdit;
    exports2.FileHeart = FileHeart;
    exports2.FileHeartIcon = FileHeart;
    exports2.FileIcon = File;
    exports2.FileImage = FileImage;
    exports2.FileImageIcon = FileImage;
    exports2.FileInput = FileInput;
    exports2.FileInputIcon = FileInput;
    exports2.FileJson = FileJson;
    exports2.FileJson2 = FileJson2;
    exports2.FileJson2Icon = FileJson2;
    exports2.FileJsonIcon = FileJson;
    exports2.FileKey = FileKey;
    exports2.FileKey2 = FileKey2;
    exports2.FileKey2Icon = FileKey2;
    exports2.FileKeyIcon = FileKey;
    exports2.FileLineChart = FileLineChart;
    exports2.FileLineChartIcon = FileLineChart;
    exports2.FileLock = FileLock;
    exports2.FileLock2 = FileLock2;
    exports2.FileLock2Icon = FileLock2;
    exports2.FileLockIcon = FileLock;
    exports2.FileMinus = FileMinus;
    exports2.FileMinus2 = FileMinus2;
    exports2.FileMinus2Icon = FileMinus2;
    exports2.FileMinusIcon = FileMinus;
    exports2.FileMusic = FileMusic;
    exports2.FileMusicIcon = FileMusic;
    exports2.FileOutput = FileOutput;
    exports2.FileOutputIcon = FileOutput;
    exports2.FilePieChart = FilePieChart;
    exports2.FilePieChartIcon = FilePieChart;
    exports2.FilePlus = FilePlus;
    exports2.FilePlus2 = FilePlus2;
    exports2.FilePlus2Icon = FilePlus2;
    exports2.FilePlusIcon = FilePlus;
    exports2.FileQuestion = FileQuestion;
    exports2.FileQuestionIcon = FileQuestion;
    exports2.FileScan = FileScan;
    exports2.FileScanIcon = FileScan;
    exports2.FileSearch = FileSearch;
    exports2.FileSearch2 = FileSearch2;
    exports2.FileSearch2Icon = FileSearch2;
    exports2.FileSearchIcon = FileSearch;
    exports2.FileSignature = FileSignature;
    exports2.FileSignatureIcon = FileSignature;
    exports2.FileSpreadsheet = FileSpreadsheet;
    exports2.FileSpreadsheetIcon = FileSpreadsheet;
    exports2.FileStack = FileStack;
    exports2.FileStackIcon = FileStack;
    exports2.FileSymlink = FileSymlink;
    exports2.FileSymlinkIcon = FileSymlink;
    exports2.FileTerminal = FileTerminal;
    exports2.FileTerminalIcon = FileTerminal;
    exports2.FileText = FileText;
    exports2.FileTextIcon = FileText;
    exports2.FileType = FileType;
    exports2.FileType2 = FileType2;
    exports2.FileType2Icon = FileType2;
    exports2.FileTypeIcon = FileType;
    exports2.FileUp = FileUp;
    exports2.FileUpIcon = FileUp;
    exports2.FileVideo = FileVideo;
    exports2.FileVideo2 = FileVideo2;
    exports2.FileVideo2Icon = FileVideo2;
    exports2.FileVideoIcon = FileVideo;
    exports2.FileVolume = FileVolume;
    exports2.FileVolume2 = FileVolume2;
    exports2.FileVolume2Icon = FileVolume2;
    exports2.FileVolumeIcon = FileVolume;
    exports2.FileWarning = FileWarning;
    exports2.FileWarningIcon = FileWarning;
    exports2.FileX = FileX;
    exports2.FileX2 = FileX2;
    exports2.FileX2Icon = FileX2;
    exports2.FileXIcon = FileX;
    exports2.Files = Files;
    exports2.FilesIcon = Files;
    exports2.Film = Film;
    exports2.FilmIcon = Film;
    exports2.Filter = Filter;
    exports2.FilterIcon = Filter;
    exports2.FilterX = FilterX;
    exports2.FilterXIcon = FilterX;
    exports2.Fingerprint = Fingerprint;
    exports2.FingerprintIcon = Fingerprint;
    exports2.Fish = Fish;
    exports2.FishIcon = Fish;
    exports2.FishOff = FishOff;
    exports2.FishOffIcon = FishOff;
    exports2.FishSymbol = FishSymbol;
    exports2.FishSymbolIcon = FishSymbol;
    exports2.Flag = Flag;
    exports2.FlagIcon = Flag;
    exports2.FlagOff = FlagOff;
    exports2.FlagOffIcon = FlagOff;
    exports2.FlagTriangleLeft = FlagTriangleLeft;
    exports2.FlagTriangleLeftIcon = FlagTriangleLeft;
    exports2.FlagTriangleRight = FlagTriangleRight;
    exports2.FlagTriangleRightIcon = FlagTriangleRight;
    exports2.Flame = Flame;
    exports2.FlameIcon = Flame;
    exports2.FlameKindling = FlameKindling;
    exports2.FlameKindlingIcon = FlameKindling;
    exports2.Flashlight = Flashlight;
    exports2.FlashlightIcon = Flashlight;
    exports2.FlashlightOff = FlashlightOff;
    exports2.FlashlightOffIcon = FlashlightOff;
    exports2.FlaskConical = FlaskConical;
    exports2.FlaskConicalIcon = FlaskConical;
    exports2.FlaskConicalOff = FlaskConicalOff;
    exports2.FlaskConicalOffIcon = FlaskConicalOff;
    exports2.FlaskRound = FlaskRound;
    exports2.FlaskRoundIcon = FlaskRound;
    exports2.FlipHorizontal = FlipHorizontal;
    exports2.FlipHorizontal2 = FlipHorizontal2;
    exports2.FlipHorizontal2Icon = FlipHorizontal2;
    exports2.FlipHorizontalIcon = FlipHorizontal;
    exports2.FlipVertical = FlipVertical;
    exports2.FlipVertical2 = FlipVertical2;
    exports2.FlipVertical2Icon = FlipVertical2;
    exports2.FlipVerticalIcon = FlipVertical;
    exports2.Flower = Flower;
    exports2.Flower2 = Flower2;
    exports2.Flower2Icon = Flower2;
    exports2.FlowerIcon = Flower;
    exports2.Focus = Focus;
    exports2.FocusIcon = Focus;
    exports2.FoldHorizontal = FoldHorizontal;
    exports2.FoldHorizontalIcon = FoldHorizontal;
    exports2.FoldVertical = FoldVertical;
    exports2.FoldVerticalIcon = FoldVertical;
    exports2.Folder = Folder;
    exports2.FolderArchive = FolderArchive;
    exports2.FolderArchiveIcon = FolderArchive;
    exports2.FolderCheck = FolderCheck;
    exports2.FolderCheckIcon = FolderCheck;
    exports2.FolderClock = FolderClock;
    exports2.FolderClockIcon = FolderClock;
    exports2.FolderClosed = FolderClosed;
    exports2.FolderClosedIcon = FolderClosed;
    exports2.FolderCog = FolderCog;
    exports2.FolderCog2 = FolderCog;
    exports2.FolderCog2Icon = FolderCog;
    exports2.FolderCogIcon = FolderCog;
    exports2.FolderDot = FolderDot;
    exports2.FolderDotIcon = FolderDot;
    exports2.FolderDown = FolderDown;
    exports2.FolderDownIcon = FolderDown;
    exports2.FolderEdit = FolderEdit;
    exports2.FolderEditIcon = FolderEdit;
    exports2.FolderGit = FolderGit;
    exports2.FolderGit2 = FolderGit2;
    exports2.FolderGit2Icon = FolderGit2;
    exports2.FolderGitIcon = FolderGit;
    exports2.FolderHeart = FolderHeart;
    exports2.FolderHeartIcon = FolderHeart;
    exports2.FolderIcon = Folder;
    exports2.FolderInput = FolderInput;
    exports2.FolderInputIcon = FolderInput;
    exports2.FolderKanban = FolderKanban;
    exports2.FolderKanbanIcon = FolderKanban;
    exports2.FolderKey = FolderKey;
    exports2.FolderKeyIcon = FolderKey;
    exports2.FolderLock = FolderLock;
    exports2.FolderLockIcon = FolderLock;
    exports2.FolderMinus = FolderMinus;
    exports2.FolderMinusIcon = FolderMinus;
    exports2.FolderOpen = FolderOpen;
    exports2.FolderOpenDot = FolderOpenDot;
    exports2.FolderOpenDotIcon = FolderOpenDot;
    exports2.FolderOpenIcon = FolderOpen;
    exports2.FolderOutput = FolderOutput;
    exports2.FolderOutputIcon = FolderOutput;
    exports2.FolderPlus = FolderPlus;
    exports2.FolderPlusIcon = FolderPlus;
    exports2.FolderRoot = FolderRoot;
    exports2.FolderRootIcon = FolderRoot;
    exports2.FolderSearch = FolderSearch;
    exports2.FolderSearch2 = FolderSearch2;
    exports2.FolderSearch2Icon = FolderSearch2;
    exports2.FolderSearchIcon = FolderSearch;
    exports2.FolderSymlink = FolderSymlink;
    exports2.FolderSymlinkIcon = FolderSymlink;
    exports2.FolderSync = FolderSync;
    exports2.FolderSyncIcon = FolderSync;
    exports2.FolderTree = FolderTree;
    exports2.FolderTreeIcon = FolderTree;
    exports2.FolderUp = FolderUp;
    exports2.FolderUpIcon = FolderUp;
    exports2.FolderX = FolderX;
    exports2.FolderXIcon = FolderX;
    exports2.Folders = Folders;
    exports2.FoldersIcon = Folders;
    exports2.Footprints = Footprints;
    exports2.FootprintsIcon = Footprints;
    exports2.Forklift = Forklift;
    exports2.ForkliftIcon = Forklift;
    exports2.FormInput = FormInput;
    exports2.FormInputIcon = FormInput;
    exports2.Forward = Forward;
    exports2.ForwardIcon = Forward;
    exports2.Frame = Frame;
    exports2.FrameIcon = Frame;
    exports2.Framer = Framer;
    exports2.FramerIcon = Framer;
    exports2.Frown = Frown;
    exports2.FrownIcon = Frown;
    exports2.Fuel = Fuel;
    exports2.FuelIcon = Fuel;
    exports2.Fullscreen = Fullscreen;
    exports2.FullscreenIcon = Fullscreen;
    exports2.FunctionSquare = FunctionSquare;
    exports2.FunctionSquareIcon = FunctionSquare;
    exports2.GalleryHorizontal = GalleryHorizontal;
    exports2.GalleryHorizontalEnd = GalleryHorizontalEnd;
    exports2.GalleryHorizontalEndIcon = GalleryHorizontalEnd;
    exports2.GalleryHorizontalIcon = GalleryHorizontal;
    exports2.GalleryThumbnails = GalleryThumbnails;
    exports2.GalleryThumbnailsIcon = GalleryThumbnails;
    exports2.GalleryVertical = GalleryVertical;
    exports2.GalleryVerticalEnd = GalleryVerticalEnd;
    exports2.GalleryVerticalEndIcon = GalleryVerticalEnd;
    exports2.GalleryVerticalIcon = GalleryVertical;
    exports2.Gamepad = Gamepad;
    exports2.Gamepad2 = Gamepad2;
    exports2.Gamepad2Icon = Gamepad2;
    exports2.GamepadIcon = Gamepad;
    exports2.GanttChart = GanttChart;
    exports2.GanttChartIcon = GanttChart;
    exports2.GanttChartSquare = GanttChartSquare;
    exports2.GanttChartSquareIcon = GanttChartSquare;
    exports2.Gauge = Gauge;
    exports2.GaugeCircle = GaugeCircle;
    exports2.GaugeCircleIcon = GaugeCircle;
    exports2.GaugeIcon = Gauge;
    exports2.Gavel = Gavel;
    exports2.GavelIcon = Gavel;
    exports2.Gem = Gem;
    exports2.GemIcon = Gem;
    exports2.Ghost = Ghost;
    exports2.GhostIcon = Ghost;
    exports2.Gift = Gift;
    exports2.GiftIcon = Gift;
    exports2.GitBranch = GitBranch;
    exports2.GitBranchIcon = GitBranch;
    exports2.GitBranchPlus = GitBranchPlus;
    exports2.GitBranchPlusIcon = GitBranchPlus;
    exports2.GitCommit = GitCommitHorizontal;
    exports2.GitCommitHorizontal = GitCommitHorizontal;
    exports2.GitCommitHorizontalIcon = GitCommitHorizontal;
    exports2.GitCommitIcon = GitCommitHorizontal;
    exports2.GitCommitVertical = GitCommitVertical;
    exports2.GitCommitVerticalIcon = GitCommitVertical;
    exports2.GitCompare = GitCompare;
    exports2.GitCompareArrows = GitCompareArrows;
    exports2.GitCompareArrowsIcon = GitCompareArrows;
    exports2.GitCompareIcon = GitCompare;
    exports2.GitFork = GitFork;
    exports2.GitForkIcon = GitFork;
    exports2.GitGraph = GitGraph;
    exports2.GitGraphIcon = GitGraph;
    exports2.GitMerge = GitMerge;
    exports2.GitMergeIcon = GitMerge;
    exports2.GitPullRequest = GitPullRequest;
    exports2.GitPullRequestArrow = GitPullRequestArrow;
    exports2.GitPullRequestArrowIcon = GitPullRequestArrow;
    exports2.GitPullRequestClosed = GitPullRequestClosed;
    exports2.GitPullRequestClosedIcon = GitPullRequestClosed;
    exports2.GitPullRequestCreate = GitPullRequestCreate;
    exports2.GitPullRequestCreateArrow = GitPullRequestCreateArrow;
    exports2.GitPullRequestCreateArrowIcon = GitPullRequestCreateArrow;
    exports2.GitPullRequestCreateIcon = GitPullRequestCreate;
    exports2.GitPullRequestDraft = GitPullRequestDraft;
    exports2.GitPullRequestDraftIcon = GitPullRequestDraft;
    exports2.GitPullRequestIcon = GitPullRequest;
    exports2.Github = Github;
    exports2.GithubIcon = Github;
    exports2.Gitlab = Gitlab;
    exports2.GitlabIcon = Gitlab;
    exports2.GlassWater = GlassWater;
    exports2.GlassWaterIcon = GlassWater;
    exports2.Glasses = Glasses;
    exports2.GlassesIcon = Glasses;
    exports2.Globe = Globe;
    exports2.Globe2 = Globe2;
    exports2.Globe2Icon = Globe2;
    exports2.GlobeIcon = Globe;
    exports2.Goal = Goal;
    exports2.GoalIcon = Goal;
    exports2.Grab = Grab;
    exports2.GrabIcon = Grab;
    exports2.GraduationCap = GraduationCap;
    exports2.GraduationCapIcon = GraduationCap;
    exports2.Grape = Grape;
    exports2.GrapeIcon = Grape;
    exports2.Grid = Grid3x3;
    exports2.Grid2X2 = Grid2x2;
    exports2.Grid2X2Icon = Grid2x2;
    exports2.Grid2x2 = Grid2x2;
    exports2.Grid2x2Icon = Grid2x2;
    exports2.Grid3X3 = Grid3x3;
    exports2.Grid3X3Icon = Grid3x3;
    exports2.Grid3x3 = Grid3x3;
    exports2.Grid3x3Icon = Grid3x3;
    exports2.GridIcon = Grid3x3;
    exports2.Grip = Grip;
    exports2.GripHorizontal = GripHorizontal;
    exports2.GripHorizontalIcon = GripHorizontal;
    exports2.GripIcon = Grip;
    exports2.GripVertical = GripVertical;
    exports2.GripVerticalIcon = GripVertical;
    exports2.Group = Group;
    exports2.GroupIcon = Group;
    exports2.Guitar = Guitar;
    exports2.GuitarIcon = Guitar;
    exports2.Hammer = Hammer;
    exports2.HammerIcon = Hammer;
    exports2.Hand = Hand;
    exports2.HandIcon = Hand;
    exports2.HandMetal = HandMetal;
    exports2.HandMetalIcon = HandMetal;
    exports2.HardDrive = HardDrive;
    exports2.HardDriveDownload = HardDriveDownload;
    exports2.HardDriveDownloadIcon = HardDriveDownload;
    exports2.HardDriveIcon = HardDrive;
    exports2.HardDriveUpload = HardDriveUpload;
    exports2.HardDriveUploadIcon = HardDriveUpload;
    exports2.HardHat = HardHat;
    exports2.HardHatIcon = HardHat;
    exports2.Hash = Hash;
    exports2.HashIcon = Hash;
    exports2.Haze = Haze;
    exports2.HazeIcon = Haze;
    exports2.HdmiPort = HdmiPort;
    exports2.HdmiPortIcon = HdmiPort;
    exports2.Heading = Heading;
    exports2.Heading1 = Heading1;
    exports2.Heading1Icon = Heading1;
    exports2.Heading2 = Heading2;
    exports2.Heading2Icon = Heading2;
    exports2.Heading3 = Heading3;
    exports2.Heading3Icon = Heading3;
    exports2.Heading4 = Heading4;
    exports2.Heading4Icon = Heading4;
    exports2.Heading5 = Heading5;
    exports2.Heading5Icon = Heading5;
    exports2.Heading6 = Heading6;
    exports2.Heading6Icon = Heading6;
    exports2.HeadingIcon = Heading;
    exports2.Headphones = Headphones;
    exports2.HeadphonesIcon = Headphones;
    exports2.Heart = Heart;
    exports2.HeartCrack = HeartCrack;
    exports2.HeartCrackIcon = HeartCrack;
    exports2.HeartHandshake = HeartHandshake;
    exports2.HeartHandshakeIcon = HeartHandshake;
    exports2.HeartIcon = Heart;
    exports2.HeartOff = HeartOff;
    exports2.HeartOffIcon = HeartOff;
    exports2.HeartPulse = HeartPulse;
    exports2.HeartPulseIcon = HeartPulse;
    exports2.HelpCircle = HelpCircle;
    exports2.HelpCircleIcon = HelpCircle;
    exports2.HelpingHand = HelpingHand;
    exports2.HelpingHandIcon = HelpingHand;
    exports2.Hexagon = Hexagon;
    exports2.HexagonIcon = Hexagon;
    exports2.Highlighter = Highlighter;
    exports2.HighlighterIcon = Highlighter;
    exports2.History = History;
    exports2.HistoryIcon = History;
    exports2.Home = Home;
    exports2.HomeIcon = Home;
    exports2.Hop = Hop;
    exports2.HopIcon = Hop;
    exports2.HopOff = HopOff;
    exports2.HopOffIcon = HopOff;
    exports2.Hotel = Hotel;
    exports2.HotelIcon = Hotel;
    exports2.Hourglass = Hourglass;
    exports2.HourglassIcon = Hourglass;
    exports2.IceCream = IceCream;
    exports2.IceCream2 = IceCream2;
    exports2.IceCream2Icon = IceCream2;
    exports2.IceCreamIcon = IceCream;
    exports2.Image = Image;
    exports2.ImageDown = ImageDown;
    exports2.ImageDownIcon = ImageDown;
    exports2.ImageIcon = Image;
    exports2.ImageMinus = ImageMinus;
    exports2.ImageMinusIcon = ImageMinus;
    exports2.ImageOff = ImageOff;
    exports2.ImageOffIcon = ImageOff;
    exports2.ImagePlus = ImagePlus;
    exports2.ImagePlusIcon = ImagePlus;
    exports2.Import = Import;
    exports2.ImportIcon = Import;
    exports2.Inbox = Inbox;
    exports2.InboxIcon = Inbox;
    exports2.Indent = Indent;
    exports2.IndentIcon = Indent;
    exports2.IndianRupee = IndianRupee;
    exports2.IndianRupeeIcon = IndianRupee;
    exports2.Infinity = Infinity;
    exports2.InfinityIcon = Infinity;
    exports2.Info = Info2;
    exports2.InfoIcon = Info2;
    exports2.Inspect = MousePointerSquare;
    exports2.InspectIcon = MousePointerSquare;
    exports2.Instagram = Instagram;
    exports2.InstagramIcon = Instagram;
    exports2.Italic = Italic;
    exports2.ItalicIcon = Italic;
    exports2.IterationCcw = IterationCcw;
    exports2.IterationCcwIcon = IterationCcw;
    exports2.IterationCw = IterationCw;
    exports2.IterationCwIcon = IterationCw;
    exports2.JapaneseYen = JapaneseYen;
    exports2.JapaneseYenIcon = JapaneseYen;
    exports2.Joystick = Joystick;
    exports2.JoystickIcon = Joystick;
    exports2.Kanban = Kanban;
    exports2.KanbanIcon = Kanban;
    exports2.KanbanSquare = KanbanSquare;
    exports2.KanbanSquareDashed = KanbanSquareDashed;
    exports2.KanbanSquareDashedIcon = KanbanSquareDashed;
    exports2.KanbanSquareIcon = KanbanSquare;
    exports2.Key = Key;
    exports2.KeyIcon = Key;
    exports2.KeyRound = KeyRound;
    exports2.KeyRoundIcon = KeyRound;
    exports2.KeySquare = KeySquare;
    exports2.KeySquareIcon = KeySquare;
    exports2.Keyboard = Keyboard;
    exports2.KeyboardIcon = Keyboard;
    exports2.KeyboardMusic = KeyboardMusic;
    exports2.KeyboardMusicIcon = KeyboardMusic;
    exports2.Lamp = Lamp;
    exports2.LampCeiling = LampCeiling;
    exports2.LampCeilingIcon = LampCeiling;
    exports2.LampDesk = LampDesk;
    exports2.LampDeskIcon = LampDesk;
    exports2.LampFloor = LampFloor;
    exports2.LampFloorIcon = LampFloor;
    exports2.LampIcon = Lamp;
    exports2.LampWallDown = LampWallDown;
    exports2.LampWallDownIcon = LampWallDown;
    exports2.LampWallUp = LampWallUp;
    exports2.LampWallUpIcon = LampWallUp;
    exports2.LandPlot = LandPlot;
    exports2.LandPlotIcon = LandPlot;
    exports2.Landmark = Landmark;
    exports2.LandmarkIcon = Landmark;
    exports2.Languages = Languages;
    exports2.LanguagesIcon = Languages;
    exports2.Laptop = Laptop;
    exports2.Laptop2 = Laptop2;
    exports2.Laptop2Icon = Laptop2;
    exports2.LaptopIcon = Laptop;
    exports2.Lasso = Lasso;
    exports2.LassoIcon = Lasso;
    exports2.LassoSelect = LassoSelect;
    exports2.LassoSelectIcon = LassoSelect;
    exports2.Laugh = Laugh;
    exports2.LaughIcon = Laugh;
    exports2.Layers = Layers;
    exports2.Layers2 = Layers2;
    exports2.Layers2Icon = Layers2;
    exports2.Layers3 = Layers3;
    exports2.Layers3Icon = Layers3;
    exports2.LayersIcon = Layers;
    exports2.Layout = Layout;
    exports2.LayoutDashboard = LayoutDashboard;
    exports2.LayoutDashboardIcon = LayoutDashboard;
    exports2.LayoutGrid = LayoutGrid;
    exports2.LayoutGridIcon = LayoutGrid;
    exports2.LayoutIcon = Layout;
    exports2.LayoutList = LayoutList;
    exports2.LayoutListIcon = LayoutList;
    exports2.LayoutPanelLeft = LayoutPanelLeft;
    exports2.LayoutPanelLeftIcon = LayoutPanelLeft;
    exports2.LayoutPanelTop = LayoutPanelTop;
    exports2.LayoutPanelTopIcon = LayoutPanelTop;
    exports2.LayoutTemplate = LayoutTemplate;
    exports2.LayoutTemplateIcon = LayoutTemplate;
    exports2.Leaf = Leaf;
    exports2.LeafIcon = Leaf;
    exports2.LeafyGreen = LeafyGreen;
    exports2.LeafyGreenIcon = LeafyGreen;
    exports2.Library = Library;
    exports2.LibraryBig = LibraryBig;
    exports2.LibraryBigIcon = LibraryBig;
    exports2.LibraryIcon = Library;
    exports2.LibrarySquare = LibrarySquare;
    exports2.LibrarySquareIcon = LibrarySquare;
    exports2.LifeBuoy = LifeBuoy;
    exports2.LifeBuoyIcon = LifeBuoy;
    exports2.Ligature = Ligature;
    exports2.LigatureIcon = Ligature;
    exports2.Lightbulb = Lightbulb;
    exports2.LightbulbIcon = Lightbulb;
    exports2.LightbulbOff = LightbulbOff;
    exports2.LightbulbOffIcon = LightbulbOff;
    exports2.LineChart = LineChart;
    exports2.LineChartIcon = LineChart;
    exports2.Link = Link;
    exports2.Link2 = Link2;
    exports2.Link2Icon = Link2;
    exports2.Link2Off = Link2Off;
    exports2.Link2OffIcon = Link2Off;
    exports2.LinkIcon = Link;
    exports2.Linkedin = Linkedin;
    exports2.LinkedinIcon = Linkedin;
    exports2.List = List;
    exports2.ListChecks = ListChecks;
    exports2.ListChecksIcon = ListChecks;
    exports2.ListEnd = ListEnd;
    exports2.ListEndIcon = ListEnd;
    exports2.ListFilter = ListFilter;
    exports2.ListFilterIcon = ListFilter;
    exports2.ListIcon = List;
    exports2.ListMinus = ListMinus;
    exports2.ListMinusIcon = ListMinus;
    exports2.ListMusic = ListMusic;
    exports2.ListMusicIcon = ListMusic;
    exports2.ListOrdered = ListOrdered;
    exports2.ListOrderedIcon = ListOrdered;
    exports2.ListPlus = ListPlus;
    exports2.ListPlusIcon = ListPlus;
    exports2.ListRestart = ListRestart;
    exports2.ListRestartIcon = ListRestart;
    exports2.ListStart = ListStart;
    exports2.ListStartIcon = ListStart;
    exports2.ListTodo = ListTodo;
    exports2.ListTodoIcon = ListTodo;
    exports2.ListTree = ListTree;
    exports2.ListTreeIcon = ListTree;
    exports2.ListVideo = ListVideo;
    exports2.ListVideoIcon = ListVideo;
    exports2.ListX = ListX;
    exports2.ListXIcon = ListX;
    exports2.Loader = Loader;
    exports2.Loader2 = Loader22;
    exports2.Loader2Icon = Loader22;
    exports2.LoaderIcon = Loader;
    exports2.Locate = Locate;
    exports2.LocateFixed = LocateFixed;
    exports2.LocateFixedIcon = LocateFixed;
    exports2.LocateIcon = Locate;
    exports2.LocateOff = LocateOff;
    exports2.LocateOffIcon = LocateOff;
    exports2.Lock = Lock;
    exports2.LockIcon = Lock;
    exports2.LockKeyhole = LockKeyhole;
    exports2.LockKeyholeIcon = LockKeyhole;
    exports2.LogIn = LogIn;
    exports2.LogInIcon = LogIn;
    exports2.LogOut = LogOut;
    exports2.LogOutIcon = LogOut;
    exports2.Lollipop = Lollipop;
    exports2.LollipopIcon = Lollipop;
    exports2.LucideAccessibility = Accessibility;
    exports2.LucideActivity = Activity;
    exports2.LucideActivitySquare = ActivitySquare;
    exports2.LucideAirVent = AirVent;
    exports2.LucideAirplay = Airplay;
    exports2.LucideAlarmCheck = AlarmClockCheck;
    exports2.LucideAlarmClock = AlarmClock;
    exports2.LucideAlarmClockCheck = AlarmClockCheck;
    exports2.LucideAlarmClockOff = AlarmClockOff;
    exports2.LucideAlarmMinus = AlarmMinus;
    exports2.LucideAlarmPlus = AlarmPlus;
    exports2.LucideAlbum = Album;
    exports2.LucideAlertCircle = AlertCircle2;
    exports2.LucideAlertOctagon = AlertOctagon;
    exports2.LucideAlertTriangle = AlertTriangle;
    exports2.LucideAlignCenter = AlignCenter;
    exports2.LucideAlignCenterHorizontal = AlignCenterHorizontal;
    exports2.LucideAlignCenterVertical = AlignCenterVertical;
    exports2.LucideAlignEndHorizontal = AlignEndHorizontal;
    exports2.LucideAlignEndVertical = AlignEndVertical;
    exports2.LucideAlignHorizontalDistributeCenter = AlignHorizontalDistributeCenter;
    exports2.LucideAlignHorizontalDistributeEnd = AlignHorizontalDistributeEnd;
    exports2.LucideAlignHorizontalDistributeStart = AlignHorizontalDistributeStart;
    exports2.LucideAlignHorizontalJustifyCenter = AlignHorizontalJustifyCenter;
    exports2.LucideAlignHorizontalJustifyEnd = AlignHorizontalJustifyEnd;
    exports2.LucideAlignHorizontalJustifyStart = AlignHorizontalJustifyStart;
    exports2.LucideAlignHorizontalSpaceAround = AlignHorizontalSpaceAround;
    exports2.LucideAlignHorizontalSpaceBetween = AlignHorizontalSpaceBetween;
    exports2.LucideAlignJustify = AlignJustify;
    exports2.LucideAlignLeft = AlignLeft;
    exports2.LucideAlignRight = AlignRight;
    exports2.LucideAlignStartHorizontal = AlignStartHorizontal;
    exports2.LucideAlignStartVertical = AlignStartVertical;
    exports2.LucideAlignVerticalDistributeCenter = AlignVerticalDistributeCenter;
    exports2.LucideAlignVerticalDistributeEnd = AlignVerticalDistributeEnd;
    exports2.LucideAlignVerticalDistributeStart = AlignVerticalDistributeStart;
    exports2.LucideAlignVerticalJustifyCenter = AlignVerticalJustifyCenter;
    exports2.LucideAlignVerticalJustifyEnd = AlignVerticalJustifyEnd;
    exports2.LucideAlignVerticalJustifyStart = AlignVerticalJustifyStart;
    exports2.LucideAlignVerticalSpaceAround = AlignVerticalSpaceAround;
    exports2.LucideAlignVerticalSpaceBetween = AlignVerticalSpaceBetween;
    exports2.LucideAmpersand = Ampersand;
    exports2.LucideAmpersands = Ampersands;
    exports2.LucideAnchor = Anchor;
    exports2.LucideAngry = Angry;
    exports2.LucideAnnoyed = Annoyed;
    exports2.LucideAntenna = Antenna;
    exports2.LucideAperture = Aperture;
    exports2.LucideAppWindow = AppWindow;
    exports2.LucideApple = Apple;
    exports2.LucideArchive = Archive;
    exports2.LucideArchiveRestore = ArchiveRestore;
    exports2.LucideArchiveX = ArchiveX;
    exports2.LucideAreaChart = AreaChart;
    exports2.LucideArmchair = Armchair;
    exports2.LucideArrowBigDown = ArrowBigDown;
    exports2.LucideArrowBigDownDash = ArrowBigDownDash;
    exports2.LucideArrowBigLeft = ArrowBigLeft;
    exports2.LucideArrowBigLeftDash = ArrowBigLeftDash;
    exports2.LucideArrowBigRight = ArrowBigRight;
    exports2.LucideArrowBigRightDash = ArrowBigRightDash;
    exports2.LucideArrowBigUp = ArrowBigUp;
    exports2.LucideArrowBigUpDash = ArrowBigUpDash;
    exports2.LucideArrowDown = ArrowDown;
    exports2.LucideArrowDown01 = ArrowDown01;
    exports2.LucideArrowDown10 = ArrowDown10;
    exports2.LucideArrowDownAZ = ArrowDownAZ;
    exports2.LucideArrowDownAz = ArrowDownAZ;
    exports2.LucideArrowDownCircle = ArrowDownCircle;
    exports2.LucideArrowDownFromLine = ArrowDownFromLine;
    exports2.LucideArrowDownLeft = ArrowDownLeft;
    exports2.LucideArrowDownLeftFromCircle = ArrowDownLeftFromCircle;
    exports2.LucideArrowDownLeftSquare = ArrowDownLeftSquare;
    exports2.LucideArrowDownNarrowWide = ArrowDownNarrowWide;
    exports2.LucideArrowDownRight = ArrowDownRight;
    exports2.LucideArrowDownRightFromCircle = ArrowDownRightFromCircle;
    exports2.LucideArrowDownRightSquare = ArrowDownRightSquare;
    exports2.LucideArrowDownSquare = ArrowDownSquare;
    exports2.LucideArrowDownToDot = ArrowDownToDot;
    exports2.LucideArrowDownToLine = ArrowDownToLine;
    exports2.LucideArrowDownUp = ArrowDownUp;
    exports2.LucideArrowDownWideNarrow = ArrowDownWideNarrow;
    exports2.LucideArrowDownZA = ArrowDownZA;
    exports2.LucideArrowDownZa = ArrowDownZA;
    exports2.LucideArrowLeft = ArrowLeft;
    exports2.LucideArrowLeftCircle = ArrowLeftCircle;
    exports2.LucideArrowLeftFromLine = ArrowLeftFromLine;
    exports2.LucideArrowLeftRight = ArrowLeftRight;
    exports2.LucideArrowLeftSquare = ArrowLeftSquare;
    exports2.LucideArrowLeftToLine = ArrowLeftToLine;
    exports2.LucideArrowRight = ArrowRight;
    exports2.LucideArrowRightCircle = ArrowRightCircle;
    exports2.LucideArrowRightFromLine = ArrowRightFromLine;
    exports2.LucideArrowRightLeft = ArrowRightLeft;
    exports2.LucideArrowRightSquare = ArrowRightSquare;
    exports2.LucideArrowRightToLine = ArrowRightToLine;
    exports2.LucideArrowUp = ArrowUp;
    exports2.LucideArrowUp01 = ArrowUp01;
    exports2.LucideArrowUp10 = ArrowUp10;
    exports2.LucideArrowUpAZ = ArrowUpAZ;
    exports2.LucideArrowUpAz = ArrowUpAZ;
    exports2.LucideArrowUpCircle = ArrowUpCircle;
    exports2.LucideArrowUpDown = ArrowUpDown;
    exports2.LucideArrowUpFromDot = ArrowUpFromDot;
    exports2.LucideArrowUpFromLine = ArrowUpFromLine;
    exports2.LucideArrowUpLeft = ArrowUpLeft;
    exports2.LucideArrowUpLeftFromCircle = ArrowUpLeftFromCircle;
    exports2.LucideArrowUpLeftSquare = ArrowUpLeftSquare;
    exports2.LucideArrowUpNarrowWide = ArrowUpNarrowWide;
    exports2.LucideArrowUpRight = ArrowUpRight;
    exports2.LucideArrowUpRightFromCircle = ArrowUpRightFromCircle;
    exports2.LucideArrowUpRightSquare = ArrowUpRightSquare;
    exports2.LucideArrowUpSquare = ArrowUpSquare;
    exports2.LucideArrowUpToLine = ArrowUpToLine;
    exports2.LucideArrowUpWideNarrow = ArrowUpWideNarrow;
    exports2.LucideArrowUpZA = ArrowUpZA;
    exports2.LucideArrowUpZa = ArrowUpZA;
    exports2.LucideArrowsUpFromLine = ArrowsUpFromLine;
    exports2.LucideAsterisk = Asterisk;
    exports2.LucideAtSign = AtSign;
    exports2.LucideAtom = Atom;
    exports2.LucideAudioLines = AudioLines;
    exports2.LucideAudioWaveform = AudioWaveform;
    exports2.LucideAward = Award;
    exports2.LucideAxe = Axe;
    exports2.LucideAxis3D = Axis3d;
    exports2.LucideAxis3d = Axis3d;
    exports2.LucideBaby = Baby;
    exports2.LucideBackpack = Backpack;
    exports2.LucideBadge = Badge;
    exports2.LucideBadgeAlert = BadgeAlert;
    exports2.LucideBadgeCent = BadgeCent;
    exports2.LucideBadgeCheck = BadgeCheck;
    exports2.LucideBadgeDollarSign = BadgeDollarSign;
    exports2.LucideBadgeEuro = BadgeEuro;
    exports2.LucideBadgeHelp = BadgeHelp;
    exports2.LucideBadgeIndianRupee = BadgeIndianRupee;
    exports2.LucideBadgeInfo = BadgeInfo;
    exports2.LucideBadgeJapaneseYen = BadgeJapaneseYen;
    exports2.LucideBadgeMinus = BadgeMinus;
    exports2.LucideBadgePercent = BadgePercent;
    exports2.LucideBadgePlus = BadgePlus;
    exports2.LucideBadgePoundSterling = BadgePoundSterling;
    exports2.LucideBadgeRussianRuble = BadgeRussianRuble;
    exports2.LucideBadgeSwissFranc = BadgeSwissFranc;
    exports2.LucideBadgeX = BadgeX;
    exports2.LucideBaggageClaim = BaggageClaim;
    exports2.LucideBan = Ban;
    exports2.LucideBanana = Banana;
    exports2.LucideBanknote = Banknote;
    exports2.LucideBarChart = BarChart;
    exports2.LucideBarChart2 = BarChart2;
    exports2.LucideBarChart3 = BarChart3;
    exports2.LucideBarChart4 = BarChart4;
    exports2.LucideBarChartBig = BarChartBig;
    exports2.LucideBarChartHorizontal = BarChartHorizontal;
    exports2.LucideBarChartHorizontalBig = BarChartHorizontalBig;
    exports2.LucideBarcode = Barcode;
    exports2.LucideBaseline = Baseline;
    exports2.LucideBath = Bath;
    exports2.LucideBattery = Battery;
    exports2.LucideBatteryCharging = BatteryCharging;
    exports2.LucideBatteryFull = BatteryFull;
    exports2.LucideBatteryLow = BatteryLow;
    exports2.LucideBatteryMedium = BatteryMedium;
    exports2.LucideBatteryWarning = BatteryWarning;
    exports2.LucideBeaker = Beaker;
    exports2.LucideBean = Bean;
    exports2.LucideBeanOff = BeanOff;
    exports2.LucideBed = Bed;
    exports2.LucideBedDouble = BedDouble;
    exports2.LucideBedSingle = BedSingle;
    exports2.LucideBeef = Beef;
    exports2.LucideBeer = Beer;
    exports2.LucideBell = Bell;
    exports2.LucideBellDot = BellDot;
    exports2.LucideBellMinus = BellMinus;
    exports2.LucideBellOff = BellOff;
    exports2.LucideBellPlus = BellPlus;
    exports2.LucideBellRing = BellRing;
    exports2.LucideBike = Bike;
    exports2.LucideBinary = Binary;
    exports2.LucideBiohazard = Biohazard;
    exports2.LucideBird = Bird;
    exports2.LucideBitcoin = Bitcoin;
    exports2.LucideBlinds = Blinds;
    exports2.LucideBlocks = Blocks;
    exports2.LucideBluetooth = Bluetooth;
    exports2.LucideBluetoothConnected = BluetoothConnected;
    exports2.LucideBluetoothOff = BluetoothOff;
    exports2.LucideBluetoothSearching = BluetoothSearching;
    exports2.LucideBold = Bold;
    exports2.LucideBomb = Bomb;
    exports2.LucideBone = Bone;
    exports2.LucideBook = Book;
    exports2.LucideBookA = BookA;
    exports2.LucideBookAudio = BookAudio;
    exports2.LucideBookCheck = BookCheck;
    exports2.LucideBookCopy = BookCopy;
    exports2.LucideBookDashed = BookDashed;
    exports2.LucideBookDown = BookDown;
    exports2.LucideBookHeadphones = BookHeadphones;
    exports2.LucideBookHeart = BookHeart;
    exports2.LucideBookImage = BookImage;
    exports2.LucideBookKey = BookKey;
    exports2.LucideBookLock = BookLock;
    exports2.LucideBookMarked = BookMarked;
    exports2.LucideBookMinus = BookMinus;
    exports2.LucideBookOpen = BookOpen;
    exports2.LucideBookOpenCheck = BookOpenCheck;
    exports2.LucideBookOpenText = BookOpenText;
    exports2.LucideBookPlus = BookPlus;
    exports2.LucideBookTemplate = BookDashed;
    exports2.LucideBookText = BookText;
    exports2.LucideBookType = BookType;
    exports2.LucideBookUp = BookUp;
    exports2.LucideBookUp2 = BookUp2;
    exports2.LucideBookUser = BookUser;
    exports2.LucideBookX = BookX;
    exports2.LucideBookmark = Bookmark;
    exports2.LucideBookmarkCheck = BookmarkCheck;
    exports2.LucideBookmarkMinus = BookmarkMinus;
    exports2.LucideBookmarkPlus = BookmarkPlus;
    exports2.LucideBookmarkX = BookmarkX;
    exports2.LucideBoomBox = BoomBox;
    exports2.LucideBot = Bot;
    exports2.LucideBox = Box;
    exports2.LucideBoxSelect = BoxSelect;
    exports2.LucideBoxes = Boxes;
    exports2.LucideBraces = Braces;
    exports2.LucideBrackets = Brackets;
    exports2.LucideBrain = Brain;
    exports2.LucideBrainCircuit = BrainCircuit;
    exports2.LucideBrainCog = BrainCog;
    exports2.LucideBriefcase = Briefcase;
    exports2.LucideBringToFront = BringToFront;
    exports2.LucideBrush = Brush;
    exports2.LucideBug = Bug;
    exports2.LucideBugOff = BugOff;
    exports2.LucideBugPlay = BugPlay;
    exports2.LucideBuilding = Building;
    exports2.LucideBuilding2 = Building2;
    exports2.LucideBus = Bus;
    exports2.LucideBusFront = BusFront;
    exports2.LucideCable = Cable;
    exports2.LucideCableCar = CableCar;
    exports2.LucideCake = Cake;
    exports2.LucideCakeSlice = CakeSlice;
    exports2.LucideCalculator = Calculator;
    exports2.LucideCalendar = Calendar;
    exports2.LucideCalendarCheck = CalendarCheck;
    exports2.LucideCalendarCheck2 = CalendarCheck2;
    exports2.LucideCalendarClock = CalendarClock;
    exports2.LucideCalendarDays = CalendarDays;
    exports2.LucideCalendarHeart = CalendarHeart;
    exports2.LucideCalendarMinus = CalendarMinus;
    exports2.LucideCalendarOff = CalendarOff;
    exports2.LucideCalendarPlus = CalendarPlus;
    exports2.LucideCalendarRange = CalendarRange;
    exports2.LucideCalendarSearch = CalendarSearch;
    exports2.LucideCalendarX = CalendarX;
    exports2.LucideCalendarX2 = CalendarX2;
    exports2.LucideCamera = Camera;
    exports2.LucideCameraOff = CameraOff;
    exports2.LucideCandlestickChart = CandlestickChart;
    exports2.LucideCandy = Candy;
    exports2.LucideCandyCane = CandyCane;
    exports2.LucideCandyOff = CandyOff;
    exports2.LucideCar = Car;
    exports2.LucideCarFront = CarFront;
    exports2.LucideCarTaxiFront = CarTaxiFront;
    exports2.LucideCaravan = Caravan;
    exports2.LucideCarrot = Carrot;
    exports2.LucideCaseLower = CaseLower;
    exports2.LucideCaseSensitive = CaseSensitive;
    exports2.LucideCaseUpper = CaseUpper;
    exports2.LucideCassetteTape = CassetteTape;
    exports2.LucideCast = Cast;
    exports2.LucideCastle = Castle;
    exports2.LucideCat = Cat;
    exports2.LucideCheck = Check;
    exports2.LucideCheckCheck = CheckCheck;
    exports2.LucideCheckCircle = CheckCircle3;
    exports2.LucideCheckCircle2 = CheckCircle2;
    exports2.LucideCheckSquare = CheckSquare;
    exports2.LucideCheckSquare2 = CheckSquare2;
    exports2.LucideChefHat = ChefHat;
    exports2.LucideCherry = Cherry;
    exports2.LucideChevronDown = ChevronDown;
    exports2.LucideChevronDownCircle = ChevronDownCircle;
    exports2.LucideChevronDownSquare = ChevronDownSquare;
    exports2.LucideChevronFirst = ChevronFirst;
    exports2.LucideChevronLast = ChevronLast;
    exports2.LucideChevronLeft = ChevronLeft;
    exports2.LucideChevronLeftCircle = ChevronLeftCircle;
    exports2.LucideChevronLeftSquare = ChevronLeftSquare;
    exports2.LucideChevronRight = ChevronRight;
    exports2.LucideChevronRightCircle = ChevronRightCircle;
    exports2.LucideChevronRightSquare = ChevronRightSquare;
    exports2.LucideChevronUp = ChevronUp;
    exports2.LucideChevronUpCircle = ChevronUpCircle;
    exports2.LucideChevronUpSquare = ChevronUpSquare;
    exports2.LucideChevronsDown = ChevronsDown;
    exports2.LucideChevronsDownUp = ChevronsDownUp;
    exports2.LucideChevronsLeft = ChevronsLeft;
    exports2.LucideChevronsLeftRight = ChevronsLeftRight;
    exports2.LucideChevronsRight = ChevronsRight;
    exports2.LucideChevronsRightLeft = ChevronsRightLeft;
    exports2.LucideChevronsUp = ChevronsUp;
    exports2.LucideChevronsUpDown = ChevronsUpDown;
    exports2.LucideChrome = Chrome;
    exports2.LucideChurch = Church;
    exports2.LucideCigarette = Cigarette;
    exports2.LucideCigaretteOff = CigaretteOff;
    exports2.LucideCircle = Circle;
    exports2.LucideCircleDashed = CircleDashed;
    exports2.LucideCircleDollarSign = CircleDollarSign;
    exports2.LucideCircleDot = CircleDot;
    exports2.LucideCircleDotDashed = CircleDotDashed;
    exports2.LucideCircleEllipsis = CircleEllipsis;
    exports2.LucideCircleEqual = CircleEqual;
    exports2.LucideCircleOff = CircleOff;
    exports2.LucideCircleSlash = CircleSlash;
    exports2.LucideCircleSlash2 = CircleSlash2;
    exports2.LucideCircleSlashed = CircleSlash2;
    exports2.LucideCircleUser = CircleUser;
    exports2.LucideCircleUserRound = CircleUserRound;
    exports2.LucideCircuitBoard = CircuitBoard;
    exports2.LucideCitrus = Citrus;
    exports2.LucideClapperboard = Clapperboard;
    exports2.LucideClipboard = Clipboard;
    exports2.LucideClipboardCheck = ClipboardCheck;
    exports2.LucideClipboardCopy = ClipboardCopy;
    exports2.LucideClipboardEdit = ClipboardEdit;
    exports2.LucideClipboardList = ClipboardList;
    exports2.LucideClipboardPaste = ClipboardPaste;
    exports2.LucideClipboardSignature = ClipboardSignature;
    exports2.LucideClipboardType = ClipboardType;
    exports2.LucideClipboardX = ClipboardX;
    exports2.LucideClock = Clock;
    exports2.LucideClock1 = Clock1;
    exports2.LucideClock10 = Clock10;
    exports2.LucideClock11 = Clock11;
    exports2.LucideClock12 = Clock12;
    exports2.LucideClock2 = Clock2;
    exports2.LucideClock3 = Clock3;
    exports2.LucideClock4 = Clock4;
    exports2.LucideClock5 = Clock5;
    exports2.LucideClock6 = Clock6;
    exports2.LucideClock7 = Clock7;
    exports2.LucideClock8 = Clock8;
    exports2.LucideClock9 = Clock9;
    exports2.LucideCloud = Cloud;
    exports2.LucideCloudCog = CloudCog;
    exports2.LucideCloudDrizzle = CloudDrizzle;
    exports2.LucideCloudFog = CloudFog;
    exports2.LucideCloudHail = CloudHail;
    exports2.LucideCloudLightning = CloudLightning;
    exports2.LucideCloudMoon = CloudMoon;
    exports2.LucideCloudMoonRain = CloudMoonRain;
    exports2.LucideCloudOff = CloudOff;
    exports2.LucideCloudRain = CloudRain;
    exports2.LucideCloudRainWind = CloudRainWind;
    exports2.LucideCloudSnow = CloudSnow;
    exports2.LucideCloudSun = CloudSun;
    exports2.LucideCloudSunRain = CloudSunRain;
    exports2.LucideCloudy = Cloudy;
    exports2.LucideClover = Clover;
    exports2.LucideClub = Club;
    exports2.LucideCode = Code;
    exports2.LucideCode2 = Code2;
    exports2.LucideCodepen = Codepen;
    exports2.LucideCodesandbox = Codesandbox;
    exports2.LucideCoffee = Coffee;
    exports2.LucideCog = Cog;
    exports2.LucideCoins = Coins;
    exports2.LucideColumns = Columns;
    exports2.LucideCombine = Combine;
    exports2.LucideCommand = Command;
    exports2.LucideCompass = Compass;
    exports2.LucideComponent = Component;
    exports2.LucideComputer = Computer;
    exports2.LucideConciergeBell = ConciergeBell;
    exports2.LucideCone = Cone;
    exports2.LucideConstruction = Construction;
    exports2.LucideContact = Contact;
    exports2.LucideContact2 = Contact2;
    exports2.LucideContainer = Container;
    exports2.LucideContrast = Contrast;
    exports2.LucideCookie = Cookie;
    exports2.LucideCopy = Copy;
    exports2.LucideCopyCheck = CopyCheck;
    exports2.LucideCopyMinus = CopyMinus;
    exports2.LucideCopyPlus = CopyPlus;
    exports2.LucideCopySlash = CopySlash;
    exports2.LucideCopyX = CopyX;
    exports2.LucideCopyleft = Copyleft;
    exports2.LucideCopyright = Copyright;
    exports2.LucideCornerDownLeft = CornerDownLeft;
    exports2.LucideCornerDownRight = CornerDownRight;
    exports2.LucideCornerLeftDown = CornerLeftDown;
    exports2.LucideCornerLeftUp = CornerLeftUp;
    exports2.LucideCornerRightDown = CornerRightDown;
    exports2.LucideCornerRightUp = CornerRightUp;
    exports2.LucideCornerUpLeft = CornerUpLeft;
    exports2.LucideCornerUpRight = CornerUpRight;
    exports2.LucideCpu = Cpu;
    exports2.LucideCreativeCommons = CreativeCommons;
    exports2.LucideCreditCard = CreditCard;
    exports2.LucideCroissant = Croissant;
    exports2.LucideCrop = Crop;
    exports2.LucideCross = Cross;
    exports2.LucideCrosshair = Crosshair;
    exports2.LucideCrown = Crown;
    exports2.LucideCuboid = Cuboid;
    exports2.LucideCupSoda = CupSoda;
    exports2.LucideCurlyBraces = Braces;
    exports2.LucideCurrency = Currency;
    exports2.LucideCylinder = Cylinder;
    exports2.LucideDatabase = Database;
    exports2.LucideDatabaseBackup = DatabaseBackup;
    exports2.LucideDatabaseZap = DatabaseZap;
    exports2.LucideDelete = Delete;
    exports2.LucideDessert = Dessert;
    exports2.LucideDiameter = Diameter;
    exports2.LucideDiamond = Diamond;
    exports2.LucideDice1 = Dice1;
    exports2.LucideDice2 = Dice2;
    exports2.LucideDice3 = Dice3;
    exports2.LucideDice4 = Dice4;
    exports2.LucideDice5 = Dice5;
    exports2.LucideDice6 = Dice6;
    exports2.LucideDices = Dices;
    exports2.LucideDiff = Diff;
    exports2.LucideDisc = Disc;
    exports2.LucideDisc2 = Disc2;
    exports2.LucideDisc3 = Disc3;
    exports2.LucideDiscAlbum = DiscAlbum;
    exports2.LucideDivide = Divide;
    exports2.LucideDivideCircle = DivideCircle;
    exports2.LucideDivideSquare = DivideSquare;
    exports2.LucideDna = Dna;
    exports2.LucideDnaOff = DnaOff;
    exports2.LucideDog = Dog;
    exports2.LucideDollarSign = DollarSign;
    exports2.LucideDonut = Donut;
    exports2.LucideDoorClosed = DoorClosed;
    exports2.LucideDoorOpen = DoorOpen;
    exports2.LucideDot = Dot;
    exports2.LucideDownload = Download;
    exports2.LucideDownloadCloud = DownloadCloud;
    exports2.LucideDraftingCompass = DraftingCompass;
    exports2.LucideDrama = Drama;
    exports2.LucideDribbble = Dribbble;
    exports2.LucideDroplet = Droplet;
    exports2.LucideDroplets = Droplets;
    exports2.LucideDrum = Drum;
    exports2.LucideDrumstick = Drumstick;
    exports2.LucideDumbbell = Dumbbell;
    exports2.LucideEar = Ear;
    exports2.LucideEarOff = EarOff;
    exports2.LucideEdit = PenSquare;
    exports2.LucideEdit2 = Pen;
    exports2.LucideEdit3 = PenLine;
    exports2.LucideEgg = Egg;
    exports2.LucideEggFried = EggFried;
    exports2.LucideEggOff = EggOff;
    exports2.LucideEqual = Equal;
    exports2.LucideEqualNot = EqualNot;
    exports2.LucideEraser = Eraser;
    exports2.LucideEuro = Euro;
    exports2.LucideExpand = Expand;
    exports2.LucideExternalLink = ExternalLink;
    exports2.LucideEye = Eye2;
    exports2.LucideEyeOff = EyeOff2;
    exports2.LucideFacebook = Facebook;
    exports2.LucideFactory = Factory;
    exports2.LucideFan = Fan;
    exports2.LucideFastForward = FastForward;
    exports2.LucideFeather = Feather;
    exports2.LucideFerrisWheel = FerrisWheel;
    exports2.LucideFigma = Figma;
    exports2.LucideFile = File;
    exports2.LucideFileArchive = FileArchive;
    exports2.LucideFileAudio = FileAudio;
    exports2.LucideFileAudio2 = FileAudio2;
    exports2.LucideFileAxis3D = FileAxis3d;
    exports2.LucideFileAxis3d = FileAxis3d;
    exports2.LucideFileBadge = FileBadge;
    exports2.LucideFileBadge2 = FileBadge2;
    exports2.LucideFileBarChart = FileBarChart;
    exports2.LucideFileBarChart2 = FileBarChart2;
    exports2.LucideFileBox = FileBox;
    exports2.LucideFileCheck = FileCheck;
    exports2.LucideFileCheck2 = FileCheck2;
    exports2.LucideFileClock = FileClock;
    exports2.LucideFileCode = FileCode;
    exports2.LucideFileCode2 = FileCode2;
    exports2.LucideFileCog = FileCog;
    exports2.LucideFileCog2 = FileCog;
    exports2.LucideFileDiff = FileDiff;
    exports2.LucideFileDigit = FileDigit;
    exports2.LucideFileDown = FileDown;
    exports2.LucideFileEdit = FileEdit;
    exports2.LucideFileHeart = FileHeart;
    exports2.LucideFileImage = FileImage;
    exports2.LucideFileInput = FileInput;
    exports2.LucideFileJson = FileJson;
    exports2.LucideFileJson2 = FileJson2;
    exports2.LucideFileKey = FileKey;
    exports2.LucideFileKey2 = FileKey2;
    exports2.LucideFileLineChart = FileLineChart;
    exports2.LucideFileLock = FileLock;
    exports2.LucideFileLock2 = FileLock2;
    exports2.LucideFileMinus = FileMinus;
    exports2.LucideFileMinus2 = FileMinus2;
    exports2.LucideFileMusic = FileMusic;
    exports2.LucideFileOutput = FileOutput;
    exports2.LucideFilePieChart = FilePieChart;
    exports2.LucideFilePlus = FilePlus;
    exports2.LucideFilePlus2 = FilePlus2;
    exports2.LucideFileQuestion = FileQuestion;
    exports2.LucideFileScan = FileScan;
    exports2.LucideFileSearch = FileSearch;
    exports2.LucideFileSearch2 = FileSearch2;
    exports2.LucideFileSignature = FileSignature;
    exports2.LucideFileSpreadsheet = FileSpreadsheet;
    exports2.LucideFileStack = FileStack;
    exports2.LucideFileSymlink = FileSymlink;
    exports2.LucideFileTerminal = FileTerminal;
    exports2.LucideFileText = FileText;
    exports2.LucideFileType = FileType;
    exports2.LucideFileType2 = FileType2;
    exports2.LucideFileUp = FileUp;
    exports2.LucideFileVideo = FileVideo;
    exports2.LucideFileVideo2 = FileVideo2;
    exports2.LucideFileVolume = FileVolume;
    exports2.LucideFileVolume2 = FileVolume2;
    exports2.LucideFileWarning = FileWarning;
    exports2.LucideFileX = FileX;
    exports2.LucideFileX2 = FileX2;
    exports2.LucideFiles = Files;
    exports2.LucideFilm = Film;
    exports2.LucideFilter = Filter;
    exports2.LucideFilterX = FilterX;
    exports2.LucideFingerprint = Fingerprint;
    exports2.LucideFish = Fish;
    exports2.LucideFishOff = FishOff;
    exports2.LucideFishSymbol = FishSymbol;
    exports2.LucideFlag = Flag;
    exports2.LucideFlagOff = FlagOff;
    exports2.LucideFlagTriangleLeft = FlagTriangleLeft;
    exports2.LucideFlagTriangleRight = FlagTriangleRight;
    exports2.LucideFlame = Flame;
    exports2.LucideFlameKindling = FlameKindling;
    exports2.LucideFlashlight = Flashlight;
    exports2.LucideFlashlightOff = FlashlightOff;
    exports2.LucideFlaskConical = FlaskConical;
    exports2.LucideFlaskConicalOff = FlaskConicalOff;
    exports2.LucideFlaskRound = FlaskRound;
    exports2.LucideFlipHorizontal = FlipHorizontal;
    exports2.LucideFlipHorizontal2 = FlipHorizontal2;
    exports2.LucideFlipVertical = FlipVertical;
    exports2.LucideFlipVertical2 = FlipVertical2;
    exports2.LucideFlower = Flower;
    exports2.LucideFlower2 = Flower2;
    exports2.LucideFocus = Focus;
    exports2.LucideFoldHorizontal = FoldHorizontal;
    exports2.LucideFoldVertical = FoldVertical;
    exports2.LucideFolder = Folder;
    exports2.LucideFolderArchive = FolderArchive;
    exports2.LucideFolderCheck = FolderCheck;
    exports2.LucideFolderClock = FolderClock;
    exports2.LucideFolderClosed = FolderClosed;
    exports2.LucideFolderCog = FolderCog;
    exports2.LucideFolderCog2 = FolderCog;
    exports2.LucideFolderDot = FolderDot;
    exports2.LucideFolderDown = FolderDown;
    exports2.LucideFolderEdit = FolderEdit;
    exports2.LucideFolderGit = FolderGit;
    exports2.LucideFolderGit2 = FolderGit2;
    exports2.LucideFolderHeart = FolderHeart;
    exports2.LucideFolderInput = FolderInput;
    exports2.LucideFolderKanban = FolderKanban;
    exports2.LucideFolderKey = FolderKey;
    exports2.LucideFolderLock = FolderLock;
    exports2.LucideFolderMinus = FolderMinus;
    exports2.LucideFolderOpen = FolderOpen;
    exports2.LucideFolderOpenDot = FolderOpenDot;
    exports2.LucideFolderOutput = FolderOutput;
    exports2.LucideFolderPlus = FolderPlus;
    exports2.LucideFolderRoot = FolderRoot;
    exports2.LucideFolderSearch = FolderSearch;
    exports2.LucideFolderSearch2 = FolderSearch2;
    exports2.LucideFolderSymlink = FolderSymlink;
    exports2.LucideFolderSync = FolderSync;
    exports2.LucideFolderTree = FolderTree;
    exports2.LucideFolderUp = FolderUp;
    exports2.LucideFolderX = FolderX;
    exports2.LucideFolders = Folders;
    exports2.LucideFootprints = Footprints;
    exports2.LucideForklift = Forklift;
    exports2.LucideFormInput = FormInput;
    exports2.LucideForward = Forward;
    exports2.LucideFrame = Frame;
    exports2.LucideFramer = Framer;
    exports2.LucideFrown = Frown;
    exports2.LucideFuel = Fuel;
    exports2.LucideFullscreen = Fullscreen;
    exports2.LucideFunctionSquare = FunctionSquare;
    exports2.LucideGalleryHorizontal = GalleryHorizontal;
    exports2.LucideGalleryHorizontalEnd = GalleryHorizontalEnd;
    exports2.LucideGalleryThumbnails = GalleryThumbnails;
    exports2.LucideGalleryVertical = GalleryVertical;
    exports2.LucideGalleryVerticalEnd = GalleryVerticalEnd;
    exports2.LucideGamepad = Gamepad;
    exports2.LucideGamepad2 = Gamepad2;
    exports2.LucideGanttChart = GanttChart;
    exports2.LucideGanttChartSquare = GanttChartSquare;
    exports2.LucideGauge = Gauge;
    exports2.LucideGaugeCircle = GaugeCircle;
    exports2.LucideGavel = Gavel;
    exports2.LucideGem = Gem;
    exports2.LucideGhost = Ghost;
    exports2.LucideGift = Gift;
    exports2.LucideGitBranch = GitBranch;
    exports2.LucideGitBranchPlus = GitBranchPlus;
    exports2.LucideGitCommit = GitCommitHorizontal;
    exports2.LucideGitCommitHorizontal = GitCommitHorizontal;
    exports2.LucideGitCommitVertical = GitCommitVertical;
    exports2.LucideGitCompare = GitCompare;
    exports2.LucideGitCompareArrows = GitCompareArrows;
    exports2.LucideGitFork = GitFork;
    exports2.LucideGitGraph = GitGraph;
    exports2.LucideGitMerge = GitMerge;
    exports2.LucideGitPullRequest = GitPullRequest;
    exports2.LucideGitPullRequestArrow = GitPullRequestArrow;
    exports2.LucideGitPullRequestClosed = GitPullRequestClosed;
    exports2.LucideGitPullRequestCreate = GitPullRequestCreate;
    exports2.LucideGitPullRequestCreateArrow = GitPullRequestCreateArrow;
    exports2.LucideGitPullRequestDraft = GitPullRequestDraft;
    exports2.LucideGithub = Github;
    exports2.LucideGitlab = Gitlab;
    exports2.LucideGlassWater = GlassWater;
    exports2.LucideGlasses = Glasses;
    exports2.LucideGlobe = Globe;
    exports2.LucideGlobe2 = Globe2;
    exports2.LucideGoal = Goal;
    exports2.LucideGrab = Grab;
    exports2.LucideGraduationCap = GraduationCap;
    exports2.LucideGrape = Grape;
    exports2.LucideGrid = Grid3x3;
    exports2.LucideGrid2X2 = Grid2x2;
    exports2.LucideGrid2x2 = Grid2x2;
    exports2.LucideGrid3X3 = Grid3x3;
    exports2.LucideGrid3x3 = Grid3x3;
    exports2.LucideGrip = Grip;
    exports2.LucideGripHorizontal = GripHorizontal;
    exports2.LucideGripVertical = GripVertical;
    exports2.LucideGroup = Group;
    exports2.LucideGuitar = Guitar;
    exports2.LucideHammer = Hammer;
    exports2.LucideHand = Hand;
    exports2.LucideHandMetal = HandMetal;
    exports2.LucideHardDrive = HardDrive;
    exports2.LucideHardDriveDownload = HardDriveDownload;
    exports2.LucideHardDriveUpload = HardDriveUpload;
    exports2.LucideHardHat = HardHat;
    exports2.LucideHash = Hash;
    exports2.LucideHaze = Haze;
    exports2.LucideHdmiPort = HdmiPort;
    exports2.LucideHeading = Heading;
    exports2.LucideHeading1 = Heading1;
    exports2.LucideHeading2 = Heading2;
    exports2.LucideHeading3 = Heading3;
    exports2.LucideHeading4 = Heading4;
    exports2.LucideHeading5 = Heading5;
    exports2.LucideHeading6 = Heading6;
    exports2.LucideHeadphones = Headphones;
    exports2.LucideHeart = Heart;
    exports2.LucideHeartCrack = HeartCrack;
    exports2.LucideHeartHandshake = HeartHandshake;
    exports2.LucideHeartOff = HeartOff;
    exports2.LucideHeartPulse = HeartPulse;
    exports2.LucideHelpCircle = HelpCircle;
    exports2.LucideHelpingHand = HelpingHand;
    exports2.LucideHexagon = Hexagon;
    exports2.LucideHighlighter = Highlighter;
    exports2.LucideHistory = History;
    exports2.LucideHome = Home;
    exports2.LucideHop = Hop;
    exports2.LucideHopOff = HopOff;
    exports2.LucideHotel = Hotel;
    exports2.LucideHourglass = Hourglass;
    exports2.LucideIceCream = IceCream;
    exports2.LucideIceCream2 = IceCream2;
    exports2.LucideImage = Image;
    exports2.LucideImageDown = ImageDown;
    exports2.LucideImageMinus = ImageMinus;
    exports2.LucideImageOff = ImageOff;
    exports2.LucideImagePlus = ImagePlus;
    exports2.LucideImport = Import;
    exports2.LucideInbox = Inbox;
    exports2.LucideIndent = Indent;
    exports2.LucideIndianRupee = IndianRupee;
    exports2.LucideInfinity = Infinity;
    exports2.LucideInfo = Info2;
    exports2.LucideInspect = MousePointerSquare;
    exports2.LucideInstagram = Instagram;
    exports2.LucideItalic = Italic;
    exports2.LucideIterationCcw = IterationCcw;
    exports2.LucideIterationCw = IterationCw;
    exports2.LucideJapaneseYen = JapaneseYen;
    exports2.LucideJoystick = Joystick;
    exports2.LucideKanban = Kanban;
    exports2.LucideKanbanSquare = KanbanSquare;
    exports2.LucideKanbanSquareDashed = KanbanSquareDashed;
    exports2.LucideKey = Key;
    exports2.LucideKeyRound = KeyRound;
    exports2.LucideKeySquare = KeySquare;
    exports2.LucideKeyboard = Keyboard;
    exports2.LucideKeyboardMusic = KeyboardMusic;
    exports2.LucideLamp = Lamp;
    exports2.LucideLampCeiling = LampCeiling;
    exports2.LucideLampDesk = LampDesk;
    exports2.LucideLampFloor = LampFloor;
    exports2.LucideLampWallDown = LampWallDown;
    exports2.LucideLampWallUp = LampWallUp;
    exports2.LucideLandPlot = LandPlot;
    exports2.LucideLandmark = Landmark;
    exports2.LucideLanguages = Languages;
    exports2.LucideLaptop = Laptop;
    exports2.LucideLaptop2 = Laptop2;
    exports2.LucideLasso = Lasso;
    exports2.LucideLassoSelect = LassoSelect;
    exports2.LucideLaugh = Laugh;
    exports2.LucideLayers = Layers;
    exports2.LucideLayers2 = Layers2;
    exports2.LucideLayers3 = Layers3;
    exports2.LucideLayout = Layout;
    exports2.LucideLayoutDashboard = LayoutDashboard;
    exports2.LucideLayoutGrid = LayoutGrid;
    exports2.LucideLayoutList = LayoutList;
    exports2.LucideLayoutPanelLeft = LayoutPanelLeft;
    exports2.LucideLayoutPanelTop = LayoutPanelTop;
    exports2.LucideLayoutTemplate = LayoutTemplate;
    exports2.LucideLeaf = Leaf;
    exports2.LucideLeafyGreen = LeafyGreen;
    exports2.LucideLibrary = Library;
    exports2.LucideLibraryBig = LibraryBig;
    exports2.LucideLibrarySquare = LibrarySquare;
    exports2.LucideLifeBuoy = LifeBuoy;
    exports2.LucideLigature = Ligature;
    exports2.LucideLightbulb = Lightbulb;
    exports2.LucideLightbulbOff = LightbulbOff;
    exports2.LucideLineChart = LineChart;
    exports2.LucideLink = Link;
    exports2.LucideLink2 = Link2;
    exports2.LucideLink2Off = Link2Off;
    exports2.LucideLinkedin = Linkedin;
    exports2.LucideList = List;
    exports2.LucideListChecks = ListChecks;
    exports2.LucideListEnd = ListEnd;
    exports2.LucideListFilter = ListFilter;
    exports2.LucideListMinus = ListMinus;
    exports2.LucideListMusic = ListMusic;
    exports2.LucideListOrdered = ListOrdered;
    exports2.LucideListPlus = ListPlus;
    exports2.LucideListRestart = ListRestart;
    exports2.LucideListStart = ListStart;
    exports2.LucideListTodo = ListTodo;
    exports2.LucideListTree = ListTree;
    exports2.LucideListVideo = ListVideo;
    exports2.LucideListX = ListX;
    exports2.LucideLoader = Loader;
    exports2.LucideLoader2 = Loader22;
    exports2.LucideLocate = Locate;
    exports2.LucideLocateFixed = LocateFixed;
    exports2.LucideLocateOff = LocateOff;
    exports2.LucideLock = Lock;
    exports2.LucideLockKeyhole = LockKeyhole;
    exports2.LucideLogIn = LogIn;
    exports2.LucideLogOut = LogOut;
    exports2.LucideLollipop = Lollipop;
    exports2.LucideLuggage = Luggage;
    exports2.LucideMSquare = MSquare;
    exports2.LucideMagnet = Magnet;
    exports2.LucideMail = Mail;
    exports2.LucideMailCheck = MailCheck;
    exports2.LucideMailMinus = MailMinus;
    exports2.LucideMailOpen = MailOpen;
    exports2.LucideMailPlus = MailPlus;
    exports2.LucideMailQuestion = MailQuestion;
    exports2.LucideMailSearch = MailSearch;
    exports2.LucideMailWarning = MailWarning;
    exports2.LucideMailX = MailX;
    exports2.LucideMailbox = Mailbox;
    exports2.LucideMails = Mails;
    exports2.LucideMap = Map2;
    exports2.LucideMapPin = MapPin;
    exports2.LucideMapPinOff = MapPinOff;
    exports2.LucideMapPinned = MapPinned;
    exports2.LucideMartini = Martini;
    exports2.LucideMaximize = Maximize;
    exports2.LucideMaximize2 = Maximize2;
    exports2.LucideMedal = Medal;
    exports2.LucideMegaphone = Megaphone;
    exports2.LucideMegaphoneOff = MegaphoneOff;
    exports2.LucideMeh = Meh;
    exports2.LucideMemoryStick = MemoryStick;
    exports2.LucideMenu = Menu;
    exports2.LucideMenuSquare = MenuSquare;
    exports2.LucideMerge = Merge;
    exports2.LucideMessageCircle = MessageCircle;
    exports2.LucideMessageSquare = MessageSquare;
    exports2.LucideMessageSquareDashed = MessageSquareDashed;
    exports2.LucideMessageSquarePlus = MessageSquarePlus;
    exports2.LucideMessagesSquare = MessagesSquare;
    exports2.LucideMic = Mic;
    exports2.LucideMic2 = Mic2;
    exports2.LucideMicOff = MicOff;
    exports2.LucideMicroscope = Microscope;
    exports2.LucideMicrowave = Microwave;
    exports2.LucideMilestone = Milestone;
    exports2.LucideMilk = Milk;
    exports2.LucideMilkOff = MilkOff;
    exports2.LucideMinimize = Minimize;
    exports2.LucideMinimize2 = Minimize2;
    exports2.LucideMinus = Minus;
    exports2.LucideMinusCircle = MinusCircle;
    exports2.LucideMinusSquare = MinusSquare;
    exports2.LucideMonitor = Monitor;
    exports2.LucideMonitorCheck = MonitorCheck;
    exports2.LucideMonitorDot = MonitorDot;
    exports2.LucideMonitorDown = MonitorDown;
    exports2.LucideMonitorOff = MonitorOff;
    exports2.LucideMonitorPause = MonitorPause;
    exports2.LucideMonitorPlay = MonitorPlay;
    exports2.LucideMonitorSmartphone = MonitorSmartphone;
    exports2.LucideMonitorSpeaker = MonitorSpeaker;
    exports2.LucideMonitorStop = MonitorStop;
    exports2.LucideMonitorUp = MonitorUp;
    exports2.LucideMonitorX = MonitorX;
    exports2.LucideMoon = Moon;
    exports2.LucideMoonStar = MoonStar;
    exports2.LucideMoreHorizontal = MoreHorizontal;
    exports2.LucideMoreVertical = MoreVertical;
    exports2.LucideMountain = Mountain;
    exports2.LucideMountainSnow = MountainSnow;
    exports2.LucideMouse = Mouse;
    exports2.LucideMousePointer = MousePointer;
    exports2.LucideMousePointer2 = MousePointer2;
    exports2.LucideMousePointerClick = MousePointerClick;
    exports2.LucideMousePointerSquare = MousePointerSquare;
    exports2.LucideMousePointerSquareDashed = MousePointerSquareDashed;
    exports2.LucideMove = Move;
    exports2.LucideMove3D = Move3d;
    exports2.LucideMove3d = Move3d;
    exports2.LucideMoveDiagonal = MoveDiagonal;
    exports2.LucideMoveDiagonal2 = MoveDiagonal2;
    exports2.LucideMoveDown = MoveDown;
    exports2.LucideMoveDownLeft = MoveDownLeft;
    exports2.LucideMoveDownRight = MoveDownRight;
    exports2.LucideMoveHorizontal = MoveHorizontal;
    exports2.LucideMoveLeft = MoveLeft;
    exports2.LucideMoveRight = MoveRight;
    exports2.LucideMoveUp = MoveUp;
    exports2.LucideMoveUpLeft = MoveUpLeft;
    exports2.LucideMoveUpRight = MoveUpRight;
    exports2.LucideMoveVertical = MoveVertical;
    exports2.LucideMusic = Music;
    exports2.LucideMusic2 = Music2;
    exports2.LucideMusic3 = Music3;
    exports2.LucideMusic4 = Music4;
    exports2.LucideNavigation = Navigation;
    exports2.LucideNavigation2 = Navigation2;
    exports2.LucideNavigation2Off = Navigation2Off;
    exports2.LucideNavigationOff = NavigationOff;
    exports2.LucideNetwork = Network;
    exports2.LucideNewspaper = Newspaper;
    exports2.LucideNfc = Nfc;
    exports2.LucideNut = Nut;
    exports2.LucideNutOff = NutOff;
    exports2.LucideOctagon = Octagon;
    exports2.LucideOption = Option;
    exports2.LucideOrbit = Orbit;
    exports2.LucideOutdent = Outdent;
    exports2.LucidePackage = Package;
    exports2.LucidePackage2 = Package2;
    exports2.LucidePackageCheck = PackageCheck;
    exports2.LucidePackageMinus = PackageMinus;
    exports2.LucidePackageOpen = PackageOpen;
    exports2.LucidePackagePlus = PackagePlus;
    exports2.LucidePackageSearch = PackageSearch;
    exports2.LucidePackageX = PackageX;
    exports2.LucidePaintBucket = PaintBucket;
    exports2.LucidePaintbrush = Paintbrush;
    exports2.LucidePaintbrush2 = Paintbrush2;
    exports2.LucidePalette = Palette;
    exports2.LucidePalmtree = Palmtree;
    exports2.LucidePanelBottom = PanelBottom;
    exports2.LucidePanelBottomClose = PanelBottomClose;
    exports2.LucidePanelBottomInactive = PanelBottomInactive;
    exports2.LucidePanelBottomOpen = PanelBottomOpen;
    exports2.LucidePanelLeft = PanelLeft;
    exports2.LucidePanelLeftClose = PanelLeftClose;
    exports2.LucidePanelLeftInactive = PanelLeftInactive;
    exports2.LucidePanelLeftOpen = PanelLeftOpen;
    exports2.LucidePanelRight = PanelRight;
    exports2.LucidePanelRightClose = PanelRightClose;
    exports2.LucidePanelRightInactive = PanelRightInactive;
    exports2.LucidePanelRightOpen = PanelRightOpen;
    exports2.LucidePanelTop = PanelTop;
    exports2.LucidePanelTopClose = PanelTopClose;
    exports2.LucidePanelTopInactive = PanelTopInactive;
    exports2.LucidePanelTopOpen = PanelTopOpen;
    exports2.LucidePaperclip = Paperclip;
    exports2.LucideParentheses = Parentheses;
    exports2.LucideParkingCircle = ParkingCircle;
    exports2.LucideParkingCircleOff = ParkingCircleOff;
    exports2.LucideParkingMeter = ParkingMeter;
    exports2.LucideParkingSquare = ParkingSquare;
    exports2.LucideParkingSquareOff = ParkingSquareOff;
    exports2.LucidePartyPopper = PartyPopper;
    exports2.LucidePause = Pause;
    exports2.LucidePauseCircle = PauseCircle;
    exports2.LucidePauseOctagon = PauseOctagon;
    exports2.LucidePawPrint = PawPrint;
    exports2.LucidePcCase = PcCase;
    exports2.LucidePen = Pen;
    exports2.LucidePenBox = PenSquare;
    exports2.LucidePenLine = PenLine;
    exports2.LucidePenSquare = PenSquare;
    exports2.LucidePenTool = PenTool;
    exports2.LucidePencil = Pencil;
    exports2.LucidePencilLine = PencilLine;
    exports2.LucidePencilRuler = PencilRuler;
    exports2.LucidePentagon = Pentagon;
    exports2.LucidePercent = Percent;
    exports2.LucidePercentCircle = PercentCircle;
    exports2.LucidePercentDiamond = PercentDiamond;
    exports2.LucidePercentSquare = PercentSquare;
    exports2.LucidePersonStanding = PersonStanding;
    exports2.LucidePhone = Phone;
    exports2.LucidePhoneCall = PhoneCall;
    exports2.LucidePhoneForwarded = PhoneForwarded;
    exports2.LucidePhoneIncoming = PhoneIncoming;
    exports2.LucidePhoneMissed = PhoneMissed;
    exports2.LucidePhoneOff = PhoneOff;
    exports2.LucidePhoneOutgoing = PhoneOutgoing;
    exports2.LucidePi = Pi;
    exports2.LucidePiSquare = PiSquare;
    exports2.LucidePiano = Piano;
    exports2.LucidePictureInPicture = PictureInPicture;
    exports2.LucidePictureInPicture2 = PictureInPicture2;
    exports2.LucidePieChart = PieChart;
    exports2.LucidePiggyBank = PiggyBank;
    exports2.LucidePilcrow = Pilcrow;
    exports2.LucidePilcrowSquare = PilcrowSquare;
    exports2.LucidePill = Pill;
    exports2.LucidePin = Pin;
    exports2.LucidePinOff = PinOff;
    exports2.LucidePipette = Pipette;
    exports2.LucidePizza = Pizza;
    exports2.LucidePlane = Plane;
    exports2.LucidePlaneLanding = PlaneLanding;
    exports2.LucidePlaneTakeoff = PlaneTakeoff;
    exports2.LucidePlay = Play;
    exports2.LucidePlayCircle = PlayCircle;
    exports2.LucidePlaySquare = PlaySquare;
    exports2.LucidePlug = Plug;
    exports2.LucidePlug2 = Plug2;
    exports2.LucidePlugZap = PlugZap;
    exports2.LucidePlugZap2 = PlugZap2;
    exports2.LucidePlus = Plus;
    exports2.LucidePlusCircle = PlusCircle;
    exports2.LucidePlusSquare = PlusSquare;
    exports2.LucidePocket = Pocket;
    exports2.LucidePocketKnife = PocketKnife;
    exports2.LucidePodcast = Podcast;
    exports2.LucidePointer = Pointer;
    exports2.LucidePopcorn = Popcorn;
    exports2.LucidePopsicle = Popsicle;
    exports2.LucidePoundSterling = PoundSterling;
    exports2.LucidePower = Power;
    exports2.LucidePowerCircle = PowerCircle;
    exports2.LucidePowerOff = PowerOff;
    exports2.LucidePowerSquare = PowerSquare;
    exports2.LucidePresentation = Presentation;
    exports2.LucidePrinter = Printer;
    exports2.LucideProjector = Projector;
    exports2.LucidePuzzle = Puzzle;
    exports2.LucidePyramid = Pyramid;
    exports2.LucideQrCode = QrCode;
    exports2.LucideQuote = Quote;
    exports2.LucideRabbit = Rabbit;
    exports2.LucideRadar = Radar;
    exports2.LucideRadiation = Radiation;
    exports2.LucideRadio = Radio;
    exports2.LucideRadioReceiver = RadioReceiver;
    exports2.LucideRadioTower = RadioTower;
    exports2.LucideRadius = Radius;
    exports2.LucideRailSymbol = RailSymbol;
    exports2.LucideRainbow = Rainbow;
    exports2.LucideRat = Rat;
    exports2.LucideRatio = Ratio;
    exports2.LucideReceipt = Receipt;
    exports2.LucideRectangleHorizontal = RectangleHorizontal;
    exports2.LucideRectangleVertical = RectangleVertical;
    exports2.LucideRecycle = Recycle;
    exports2.LucideRedo = Redo;
    exports2.LucideRedo2 = Redo2;
    exports2.LucideRedoDot = RedoDot;
    exports2.LucideRefreshCcw = RefreshCcw;
    exports2.LucideRefreshCcwDot = RefreshCcwDot;
    exports2.LucideRefreshCw = RefreshCw2;
    exports2.LucideRefreshCwOff = RefreshCwOff;
    exports2.LucideRefrigerator = Refrigerator;
    exports2.LucideRegex = Regex;
    exports2.LucideRemoveFormatting = RemoveFormatting;
    exports2.LucideRepeat = Repeat;
    exports2.LucideRepeat1 = Repeat1;
    exports2.LucideRepeat2 = Repeat2;
    exports2.LucideReplace = Replace;
    exports2.LucideReplaceAll = ReplaceAll;
    exports2.LucideReply = Reply;
    exports2.LucideReplyAll = ReplyAll;
    exports2.LucideRewind = Rewind;
    exports2.LucideRibbon = Ribbon;
    exports2.LucideRocket = Rocket;
    exports2.LucideRockingChair = RockingChair;
    exports2.LucideRollerCoaster = RollerCoaster;
    exports2.LucideRotate3D = Rotate3d;
    exports2.LucideRotate3d = Rotate3d;
    exports2.LucideRotateCcw = RotateCcw;
    exports2.LucideRotateCw = RotateCw2;
    exports2.LucideRoute = Route;
    exports2.LucideRouteOff = RouteOff;
    exports2.LucideRouter = Router;
    exports2.LucideRows = Rows;
    exports2.LucideRss = Rss;
    exports2.LucideRuler = Ruler;
    exports2.LucideRussianRuble = RussianRuble;
    exports2.LucideSailboat = Sailboat;
    exports2.LucideSalad = Salad;
    exports2.LucideSandwich = Sandwich;
    exports2.LucideSatellite = Satellite;
    exports2.LucideSatelliteDish = SatelliteDish;
    exports2.LucideSave = Save;
    exports2.LucideSaveAll = SaveAll;
    exports2.LucideScale = Scale;
    exports2.LucideScale3D = Scale3d;
    exports2.LucideScale3d = Scale3d;
    exports2.LucideScaling = Scaling;
    exports2.LucideScan = Scan;
    exports2.LucideScanBarcode = ScanBarcode;
    exports2.LucideScanEye = ScanEye;
    exports2.LucideScanFace = ScanFace;
    exports2.LucideScanLine = ScanLine;
    exports2.LucideScanSearch = ScanSearch;
    exports2.LucideScanText = ScanText;
    exports2.LucideScatterChart = ScatterChart;
    exports2.LucideSchool = School;
    exports2.LucideSchool2 = School2;
    exports2.LucideScissors = Scissors;
    exports2.LucideScissorsLineDashed = ScissorsLineDashed;
    exports2.LucideScissorsSquare = ScissorsSquare;
    exports2.LucideScissorsSquareDashedBottom = ScissorsSquareDashedBottom;
    exports2.LucideScreenShare = ScreenShare;
    exports2.LucideScreenShareOff = ScreenShareOff;
    exports2.LucideScroll = Scroll;
    exports2.LucideScrollText = ScrollText;
    exports2.LucideSearch = Search;
    exports2.LucideSearchCheck = SearchCheck;
    exports2.LucideSearchCode = SearchCode;
    exports2.LucideSearchSlash = SearchSlash;
    exports2.LucideSearchX = SearchX;
    exports2.LucideSend = Send;
    exports2.LucideSendHorizonal = SendHorizontal;
    exports2.LucideSendHorizontal = SendHorizontal;
    exports2.LucideSendToBack = SendToBack;
    exports2.LucideSeparatorHorizontal = SeparatorHorizontal;
    exports2.LucideSeparatorVertical = SeparatorVertical;
    exports2.LucideServer = Server;
    exports2.LucideServerCog = ServerCog;
    exports2.LucideServerCrash = ServerCrash;
    exports2.LucideServerOff = ServerOff;
    exports2.LucideSettings = Settings;
    exports2.LucideSettings2 = Settings2;
    exports2.LucideShapes = Shapes;
    exports2.LucideShare = Share;
    exports2.LucideShare2 = Share2;
    exports2.LucideSheet = Sheet;
    exports2.LucideShell = Shell;
    exports2.LucideShield = Shield;
    exports2.LucideShieldAlert = ShieldAlert;
    exports2.LucideShieldBan = ShieldBan;
    exports2.LucideShieldCheck = ShieldCheck;
    exports2.LucideShieldClose = ShieldX;
    exports2.LucideShieldEllipsis = ShieldEllipsis;
    exports2.LucideShieldHalf = ShieldHalf;
    exports2.LucideShieldMinus = ShieldMinus;
    exports2.LucideShieldOff = ShieldOff;
    exports2.LucideShieldPlus = ShieldPlus;
    exports2.LucideShieldQuestion = ShieldQuestion;
    exports2.LucideShieldX = ShieldX;
    exports2.LucideShip = Ship;
    exports2.LucideShipWheel = ShipWheel;
    exports2.LucideShirt = Shirt;
    exports2.LucideShoppingBag = ShoppingBag;
    exports2.LucideShoppingBasket = ShoppingBasket;
    exports2.LucideShoppingCart = ShoppingCart;
    exports2.LucideShovel = Shovel;
    exports2.LucideShowerHead = ShowerHead;
    exports2.LucideShrink = Shrink;
    exports2.LucideShrub = Shrub;
    exports2.LucideShuffle = Shuffle;
    exports2.LucideSidebar = PanelLeft;
    exports2.LucideSidebarClose = PanelLeftClose;
    exports2.LucideSidebarOpen = PanelLeftOpen;
    exports2.LucideSigma = Sigma;
    exports2.LucideSigmaSquare = SigmaSquare;
    exports2.LucideSignal = Signal;
    exports2.LucideSignalHigh = SignalHigh;
    exports2.LucideSignalLow = SignalLow;
    exports2.LucideSignalMedium = SignalMedium;
    exports2.LucideSignalZero = SignalZero;
    exports2.LucideSignpost = Signpost;
    exports2.LucideSignpostBig = SignpostBig;
    exports2.LucideSiren = Siren;
    exports2.LucideSkipBack = SkipBack;
    exports2.LucideSkipForward = SkipForward;
    exports2.LucideSkull = Skull;
    exports2.LucideSlack = Slack;
    exports2.LucideSlash = Slash;
    exports2.LucideSlice = Slice;
    exports2.LucideSliders = Sliders;
    exports2.LucideSlidersHorizontal = SlidersHorizontal;
    exports2.LucideSmartphone = Smartphone;
    exports2.LucideSmartphoneCharging = SmartphoneCharging;
    exports2.LucideSmartphoneNfc = SmartphoneNfc;
    exports2.LucideSmile = Smile;
    exports2.LucideSmilePlus = SmilePlus;
    exports2.LucideSnail = Snail;
    exports2.LucideSnowflake = Snowflake;
    exports2.LucideSofa = Sofa;
    exports2.LucideSortAsc = ArrowUpNarrowWide;
    exports2.LucideSortDesc = ArrowDownWideNarrow;
    exports2.LucideSoup = Soup;
    exports2.LucideSpace = Space;
    exports2.LucideSpade = Spade;
    exports2.LucideSparkle = Sparkle;
    exports2.LucideSparkles = Sparkles;
    exports2.LucideSpeaker = Speaker;
    exports2.LucideSpeech = Speech;
    exports2.LucideSpellCheck = SpellCheck;
    exports2.LucideSpellCheck2 = SpellCheck2;
    exports2.LucideSpline = Spline;
    exports2.LucideSplit = Split;
    exports2.LucideSplitSquareHorizontal = SplitSquareHorizontal;
    exports2.LucideSplitSquareVertical = SplitSquareVertical;
    exports2.LucideSprayCan = SprayCan;
    exports2.LucideSprout = Sprout;
    exports2.LucideSquare = Square;
    exports2.LucideSquareAsterisk = SquareAsterisk;
    exports2.LucideSquareCode = SquareCode;
    exports2.LucideSquareDashedBottom = SquareDashedBottom;
    exports2.LucideSquareDashedBottomCode = SquareDashedBottomCode;
    exports2.LucideSquareDot = SquareDot;
    exports2.LucideSquareEqual = SquareEqual;
    exports2.LucideSquareGantt = GanttChartSquare;
    exports2.LucideSquareKanban = KanbanSquare;
    exports2.LucideSquareKanbanDashed = KanbanSquareDashed;
    exports2.LucideSquareSlash = SquareSlash;
    exports2.LucideSquareStack = SquareStack;
    exports2.LucideSquareUser = SquareUser;
    exports2.LucideSquareUserRound = SquareUserRound;
    exports2.LucideSquirrel = Squirrel;
    exports2.LucideStamp = Stamp;
    exports2.LucideStar = Star;
    exports2.LucideStarHalf = StarHalf;
    exports2.LucideStarOff = StarOff;
    exports2.LucideStars = Sparkles;
    exports2.LucideStepBack = StepBack;
    exports2.LucideStepForward = StepForward;
    exports2.LucideStethoscope = Stethoscope;
    exports2.LucideSticker = Sticker;
    exports2.LucideStickyNote = StickyNote;
    exports2.LucideStopCircle = StopCircle;
    exports2.LucideStore = Store;
    exports2.LucideStretchHorizontal = StretchHorizontal;
    exports2.LucideStretchVertical = StretchVertical;
    exports2.LucideStrikethrough = Strikethrough;
    exports2.LucideSubscript = Subscript;
    exports2.LucideSubtitles = Subtitles;
    exports2.LucideSun = Sun;
    exports2.LucideSunDim = SunDim;
    exports2.LucideSunMedium = SunMedium;
    exports2.LucideSunMoon = SunMoon;
    exports2.LucideSunSnow = SunSnow;
    exports2.LucideSunrise = Sunrise;
    exports2.LucideSunset = Sunset;
    exports2.LucideSuperscript = Superscript;
    exports2.LucideSwissFranc = SwissFranc;
    exports2.LucideSwitchCamera = SwitchCamera;
    exports2.LucideSword = Sword;
    exports2.LucideSwords = Swords;
    exports2.LucideSyringe = Syringe;
    exports2.LucideTable = Table;
    exports2.LucideTable2 = Table2;
    exports2.LucideTableProperties = TableProperties;
    exports2.LucideTablet = Tablet;
    exports2.LucideTabletSmartphone = TabletSmartphone;
    exports2.LucideTablets = Tablets;
    exports2.LucideTag = Tag;
    exports2.LucideTags = Tags;
    exports2.LucideTally1 = Tally1;
    exports2.LucideTally2 = Tally2;
    exports2.LucideTally3 = Tally3;
    exports2.LucideTally4 = Tally4;
    exports2.LucideTally5 = Tally5;
    exports2.LucideTangent = Tangent;
    exports2.LucideTarget = Target;
    exports2.LucideTent = Tent;
    exports2.LucideTentTree = TentTree;
    exports2.LucideTerminal = Terminal;
    exports2.LucideTerminalSquare = TerminalSquare;
    exports2.LucideTestTube = TestTube;
    exports2.LucideTestTube2 = TestTube2;
    exports2.LucideTestTubes = TestTubes;
    exports2.LucideText = Text2;
    exports2.LucideTextCursor = TextCursor;
    exports2.LucideTextCursorInput = TextCursorInput;
    exports2.LucideTextQuote = TextQuote;
    exports2.LucideTextSelect = TextSelect;
    exports2.LucideTextSelection = TextSelect;
    exports2.LucideTheater = Theater;
    exports2.LucideThermometer = Thermometer;
    exports2.LucideThermometerSnowflake = ThermometerSnowflake;
    exports2.LucideThermometerSun = ThermometerSun;
    exports2.LucideThumbsDown = ThumbsDown;
    exports2.LucideThumbsUp = ThumbsUp;
    exports2.LucideTicket = Ticket;
    exports2.LucideTimer = Timer;
    exports2.LucideTimerOff = TimerOff;
    exports2.LucideTimerReset = TimerReset;
    exports2.LucideToggleLeft = ToggleLeft;
    exports2.LucideToggleRight = ToggleRight;
    exports2.LucideTornado = Tornado;
    exports2.LucideTorus = Torus;
    exports2.LucideTouchpad = Touchpad;
    exports2.LucideTouchpadOff = TouchpadOff;
    exports2.LucideTowerControl = TowerControl;
    exports2.LucideToyBrick = ToyBrick;
    exports2.LucideTractor = Tractor;
    exports2.LucideTrafficCone = TrafficCone;
    exports2.LucideTrain = TramFront;
    exports2.LucideTrainFront = TrainFront;
    exports2.LucideTrainFrontTunnel = TrainFrontTunnel;
    exports2.LucideTrainTrack = TrainTrack;
    exports2.LucideTramFront = TramFront;
    exports2.LucideTrash = Trash;
    exports2.LucideTrash2 = Trash2;
    exports2.LucideTreeDeciduous = TreeDeciduous;
    exports2.LucideTreePine = TreePine;
    exports2.LucideTrees = Trees;
    exports2.LucideTrello = Trello;
    exports2.LucideTrendingDown = TrendingDown;
    exports2.LucideTrendingUp = TrendingUp;
    exports2.LucideTriangle = Triangle;
    exports2.LucideTriangleRight = TriangleRight;
    exports2.LucideTrophy = Trophy;
    exports2.LucideTruck = Truck;
    exports2.LucideTurtle = Turtle;
    exports2.LucideTv = Tv;
    exports2.LucideTv2 = Tv2;
    exports2.LucideTwitch = Twitch;
    exports2.LucideTwitter = Twitter;
    exports2.LucideType = Type;
    exports2.LucideUmbrella = Umbrella;
    exports2.LucideUmbrellaOff = UmbrellaOff;
    exports2.LucideUnderline = Underline;
    exports2.LucideUndo = Undo;
    exports2.LucideUndo2 = Undo2;
    exports2.LucideUndoDot = UndoDot;
    exports2.LucideUnfoldHorizontal = UnfoldHorizontal;
    exports2.LucideUnfoldVertical = UnfoldVertical;
    exports2.LucideUngroup = Ungroup;
    exports2.LucideUnlink = Unlink;
    exports2.LucideUnlink2 = Unlink2;
    exports2.LucideUnlock = Unlock;
    exports2.LucideUnlockKeyhole = UnlockKeyhole;
    exports2.LucideUnplug = Unplug;
    exports2.LucideUpload = Upload;
    exports2.LucideUploadCloud = UploadCloud;
    exports2.LucideUsb = Usb;
    exports2.LucideUser = User;
    exports2.LucideUser2 = UserRound;
    exports2.LucideUserCheck = UserCheck;
    exports2.LucideUserCheck2 = UserRoundCheck;
    exports2.LucideUserCircle = CircleUser;
    exports2.LucideUserCircle2 = CircleUserRound;
    exports2.LucideUserCog = UserCog;
    exports2.LucideUserCog2 = UserRoundCog;
    exports2.LucideUserMinus = UserMinus;
    exports2.LucideUserMinus2 = UserRoundMinus;
    exports2.LucideUserPlus = UserPlus;
    exports2.LucideUserPlus2 = UserRoundPlus;
    exports2.LucideUserRound = UserRound;
    exports2.LucideUserRoundCheck = UserRoundCheck;
    exports2.LucideUserRoundCog = UserRoundCog;
    exports2.LucideUserRoundMinus = UserRoundMinus;
    exports2.LucideUserRoundPlus = UserRoundPlus;
    exports2.LucideUserRoundX = UserRoundX;
    exports2.LucideUserSquare = SquareUser;
    exports2.LucideUserSquare2 = SquareUserRound;
    exports2.LucideUserX = UserX;
    exports2.LucideUserX2 = UserRoundX;
    exports2.LucideUsers = Users;
    exports2.LucideUsers2 = UsersRound;
    exports2.LucideUsersRound = UsersRound;
    exports2.LucideUtensils = Utensils;
    exports2.LucideUtensilsCrossed = UtensilsCrossed;
    exports2.LucideUtilityPole = UtilityPole;
    exports2.LucideVariable = Variable;
    exports2.LucideVegan = Vegan;
    exports2.LucideVenetianMask = VenetianMask;
    exports2.LucideVerified = BadgeCheck;
    exports2.LucideVibrate = Vibrate;
    exports2.LucideVibrateOff = VibrateOff;
    exports2.LucideVideo = Video;
    exports2.LucideVideoOff = VideoOff;
    exports2.LucideVideotape = Videotape;
    exports2.LucideView = View;
    exports2.LucideVoicemail = Voicemail;
    exports2.LucideVolume = Volume;
    exports2.LucideVolume1 = Volume1;
    exports2.LucideVolume2 = Volume2;
    exports2.LucideVolumeX = VolumeX;
    exports2.LucideVote = Vote;
    exports2.LucideWallet = Wallet;
    exports2.LucideWallet2 = Wallet2;
    exports2.LucideWalletCards = WalletCards;
    exports2.LucideWallpaper = Wallpaper;
    exports2.LucideWand = Wand;
    exports2.LucideWand2 = Wand2;
    exports2.LucideWarehouse = Warehouse;
    exports2.LucideWatch = Watch;
    exports2.LucideWaves = Waves;
    exports2.LucideWaypoints = Waypoints;
    exports2.LucideWebcam = Webcam;
    exports2.LucideWebhook = Webhook;
    exports2.LucideWeight = Weight;
    exports2.LucideWheat = Wheat;
    exports2.LucideWheatOff = WheatOff;
    exports2.LucideWholeWord = WholeWord;
    exports2.LucideWifi = Wifi;
    exports2.LucideWifiOff = WifiOff;
    exports2.LucideWind = Wind;
    exports2.LucideWine = Wine;
    exports2.LucideWineOff = WineOff;
    exports2.LucideWorkflow = Workflow;
    exports2.LucideWrapText = WrapText;
    exports2.LucideWrench = Wrench;
    exports2.LucideX = X2;
    exports2.LucideXCircle = XCircle;
    exports2.LucideXOctagon = XOctagon;
    exports2.LucideXSquare = XSquare;
    exports2.LucideYoutube = Youtube;
    exports2.LucideZap = Zap;
    exports2.LucideZapOff = ZapOff;
    exports2.LucideZoomIn = ZoomIn;
    exports2.LucideZoomOut = ZoomOut;
    exports2.Luggage = Luggage;
    exports2.LuggageIcon = Luggage;
    exports2.MSquare = MSquare;
    exports2.MSquareIcon = MSquare;
    exports2.Magnet = Magnet;
    exports2.MagnetIcon = Magnet;
    exports2.Mail = Mail;
    exports2.MailCheck = MailCheck;
    exports2.MailCheckIcon = MailCheck;
    exports2.MailIcon = Mail;
    exports2.MailMinus = MailMinus;
    exports2.MailMinusIcon = MailMinus;
    exports2.MailOpen = MailOpen;
    exports2.MailOpenIcon = MailOpen;
    exports2.MailPlus = MailPlus;
    exports2.MailPlusIcon = MailPlus;
    exports2.MailQuestion = MailQuestion;
    exports2.MailQuestionIcon = MailQuestion;
    exports2.MailSearch = MailSearch;
    exports2.MailSearchIcon = MailSearch;
    exports2.MailWarning = MailWarning;
    exports2.MailWarningIcon = MailWarning;
    exports2.MailX = MailX;
    exports2.MailXIcon = MailX;
    exports2.Mailbox = Mailbox;
    exports2.MailboxIcon = Mailbox;
    exports2.Mails = Mails;
    exports2.MailsIcon = Mails;
    exports2.Map = Map2;
    exports2.MapIcon = Map2;
    exports2.MapPin = MapPin;
    exports2.MapPinIcon = MapPin;
    exports2.MapPinOff = MapPinOff;
    exports2.MapPinOffIcon = MapPinOff;
    exports2.MapPinned = MapPinned;
    exports2.MapPinnedIcon = MapPinned;
    exports2.Martini = Martini;
    exports2.MartiniIcon = Martini;
    exports2.Maximize = Maximize;
    exports2.Maximize2 = Maximize2;
    exports2.Maximize2Icon = Maximize2;
    exports2.MaximizeIcon = Maximize;
    exports2.Medal = Medal;
    exports2.MedalIcon = Medal;
    exports2.Megaphone = Megaphone;
    exports2.MegaphoneIcon = Megaphone;
    exports2.MegaphoneOff = MegaphoneOff;
    exports2.MegaphoneOffIcon = MegaphoneOff;
    exports2.Meh = Meh;
    exports2.MehIcon = Meh;
    exports2.MemoryStick = MemoryStick;
    exports2.MemoryStickIcon = MemoryStick;
    exports2.Menu = Menu;
    exports2.MenuIcon = Menu;
    exports2.MenuSquare = MenuSquare;
    exports2.MenuSquareIcon = MenuSquare;
    exports2.Merge = Merge;
    exports2.MergeIcon = Merge;
    exports2.MessageCircle = MessageCircle;
    exports2.MessageCircleIcon = MessageCircle;
    exports2.MessageSquare = MessageSquare;
    exports2.MessageSquareDashed = MessageSquareDashed;
    exports2.MessageSquareDashedIcon = MessageSquareDashed;
    exports2.MessageSquareIcon = MessageSquare;
    exports2.MessageSquarePlus = MessageSquarePlus;
    exports2.MessageSquarePlusIcon = MessageSquarePlus;
    exports2.MessagesSquare = MessagesSquare;
    exports2.MessagesSquareIcon = MessagesSquare;
    exports2.Mic = Mic;
    exports2.Mic2 = Mic2;
    exports2.Mic2Icon = Mic2;
    exports2.MicIcon = Mic;
    exports2.MicOff = MicOff;
    exports2.MicOffIcon = MicOff;
    exports2.Microscope = Microscope;
    exports2.MicroscopeIcon = Microscope;
    exports2.Microwave = Microwave;
    exports2.MicrowaveIcon = Microwave;
    exports2.Milestone = Milestone;
    exports2.MilestoneIcon = Milestone;
    exports2.Milk = Milk;
    exports2.MilkIcon = Milk;
    exports2.MilkOff = MilkOff;
    exports2.MilkOffIcon = MilkOff;
    exports2.Minimize = Minimize;
    exports2.Minimize2 = Minimize2;
    exports2.Minimize2Icon = Minimize2;
    exports2.MinimizeIcon = Minimize;
    exports2.Minus = Minus;
    exports2.MinusCircle = MinusCircle;
    exports2.MinusCircleIcon = MinusCircle;
    exports2.MinusIcon = Minus;
    exports2.MinusSquare = MinusSquare;
    exports2.MinusSquareIcon = MinusSquare;
    exports2.Monitor = Monitor;
    exports2.MonitorCheck = MonitorCheck;
    exports2.MonitorCheckIcon = MonitorCheck;
    exports2.MonitorDot = MonitorDot;
    exports2.MonitorDotIcon = MonitorDot;
    exports2.MonitorDown = MonitorDown;
    exports2.MonitorDownIcon = MonitorDown;
    exports2.MonitorIcon = Monitor;
    exports2.MonitorOff = MonitorOff;
    exports2.MonitorOffIcon = MonitorOff;
    exports2.MonitorPause = MonitorPause;
    exports2.MonitorPauseIcon = MonitorPause;
    exports2.MonitorPlay = MonitorPlay;
    exports2.MonitorPlayIcon = MonitorPlay;
    exports2.MonitorSmartphone = MonitorSmartphone;
    exports2.MonitorSmartphoneIcon = MonitorSmartphone;
    exports2.MonitorSpeaker = MonitorSpeaker;
    exports2.MonitorSpeakerIcon = MonitorSpeaker;
    exports2.MonitorStop = MonitorStop;
    exports2.MonitorStopIcon = MonitorStop;
    exports2.MonitorUp = MonitorUp;
    exports2.MonitorUpIcon = MonitorUp;
    exports2.MonitorX = MonitorX;
    exports2.MonitorXIcon = MonitorX;
    exports2.Moon = Moon;
    exports2.MoonIcon = Moon;
    exports2.MoonStar = MoonStar;
    exports2.MoonStarIcon = MoonStar;
    exports2.MoreHorizontal = MoreHorizontal;
    exports2.MoreHorizontalIcon = MoreHorizontal;
    exports2.MoreVertical = MoreVertical;
    exports2.MoreVerticalIcon = MoreVertical;
    exports2.Mountain = Mountain;
    exports2.MountainIcon = Mountain;
    exports2.MountainSnow = MountainSnow;
    exports2.MountainSnowIcon = MountainSnow;
    exports2.Mouse = Mouse;
    exports2.MouseIcon = Mouse;
    exports2.MousePointer = MousePointer;
    exports2.MousePointer2 = MousePointer2;
    exports2.MousePointer2Icon = MousePointer2;
    exports2.MousePointerClick = MousePointerClick;
    exports2.MousePointerClickIcon = MousePointerClick;
    exports2.MousePointerIcon = MousePointer;
    exports2.MousePointerSquare = MousePointerSquare;
    exports2.MousePointerSquareDashed = MousePointerSquareDashed;
    exports2.MousePointerSquareDashedIcon = MousePointerSquareDashed;
    exports2.MousePointerSquareIcon = MousePointerSquare;
    exports2.Move = Move;
    exports2.Move3D = Move3d;
    exports2.Move3DIcon = Move3d;
    exports2.Move3d = Move3d;
    exports2.Move3dIcon = Move3d;
    exports2.MoveDiagonal = MoveDiagonal;
    exports2.MoveDiagonal2 = MoveDiagonal2;
    exports2.MoveDiagonal2Icon = MoveDiagonal2;
    exports2.MoveDiagonalIcon = MoveDiagonal;
    exports2.MoveDown = MoveDown;
    exports2.MoveDownIcon = MoveDown;
    exports2.MoveDownLeft = MoveDownLeft;
    exports2.MoveDownLeftIcon = MoveDownLeft;
    exports2.MoveDownRight = MoveDownRight;
    exports2.MoveDownRightIcon = MoveDownRight;
    exports2.MoveHorizontal = MoveHorizontal;
    exports2.MoveHorizontalIcon = MoveHorizontal;
    exports2.MoveIcon = Move;
    exports2.MoveLeft = MoveLeft;
    exports2.MoveLeftIcon = MoveLeft;
    exports2.MoveRight = MoveRight;
    exports2.MoveRightIcon = MoveRight;
    exports2.MoveUp = MoveUp;
    exports2.MoveUpIcon = MoveUp;
    exports2.MoveUpLeft = MoveUpLeft;
    exports2.MoveUpLeftIcon = MoveUpLeft;
    exports2.MoveUpRight = MoveUpRight;
    exports2.MoveUpRightIcon = MoveUpRight;
    exports2.MoveVertical = MoveVertical;
    exports2.MoveVerticalIcon = MoveVertical;
    exports2.Music = Music;
    exports2.Music2 = Music2;
    exports2.Music2Icon = Music2;
    exports2.Music3 = Music3;
    exports2.Music3Icon = Music3;
    exports2.Music4 = Music4;
    exports2.Music4Icon = Music4;
    exports2.MusicIcon = Music;
    exports2.Navigation = Navigation;
    exports2.Navigation2 = Navigation2;
    exports2.Navigation2Icon = Navigation2;
    exports2.Navigation2Off = Navigation2Off;
    exports2.Navigation2OffIcon = Navigation2Off;
    exports2.NavigationIcon = Navigation;
    exports2.NavigationOff = NavigationOff;
    exports2.NavigationOffIcon = NavigationOff;
    exports2.Network = Network;
    exports2.NetworkIcon = Network;
    exports2.Newspaper = Newspaper;
    exports2.NewspaperIcon = Newspaper;
    exports2.Nfc = Nfc;
    exports2.NfcIcon = Nfc;
    exports2.Nut = Nut;
    exports2.NutIcon = Nut;
    exports2.NutOff = NutOff;
    exports2.NutOffIcon = NutOff;
    exports2.Octagon = Octagon;
    exports2.OctagonIcon = Octagon;
    exports2.Option = Option;
    exports2.OptionIcon = Option;
    exports2.Orbit = Orbit;
    exports2.OrbitIcon = Orbit;
    exports2.Outdent = Outdent;
    exports2.OutdentIcon = Outdent;
    exports2.Package = Package;
    exports2.Package2 = Package2;
    exports2.Package2Icon = Package2;
    exports2.PackageCheck = PackageCheck;
    exports2.PackageCheckIcon = PackageCheck;
    exports2.PackageIcon = Package;
    exports2.PackageMinus = PackageMinus;
    exports2.PackageMinusIcon = PackageMinus;
    exports2.PackageOpen = PackageOpen;
    exports2.PackageOpenIcon = PackageOpen;
    exports2.PackagePlus = PackagePlus;
    exports2.PackagePlusIcon = PackagePlus;
    exports2.PackageSearch = PackageSearch;
    exports2.PackageSearchIcon = PackageSearch;
    exports2.PackageX = PackageX;
    exports2.PackageXIcon = PackageX;
    exports2.PaintBucket = PaintBucket;
    exports2.PaintBucketIcon = PaintBucket;
    exports2.Paintbrush = Paintbrush;
    exports2.Paintbrush2 = Paintbrush2;
    exports2.Paintbrush2Icon = Paintbrush2;
    exports2.PaintbrushIcon = Paintbrush;
    exports2.Palette = Palette;
    exports2.PaletteIcon = Palette;
    exports2.Palmtree = Palmtree;
    exports2.PalmtreeIcon = Palmtree;
    exports2.PanelBottom = PanelBottom;
    exports2.PanelBottomClose = PanelBottomClose;
    exports2.PanelBottomCloseIcon = PanelBottomClose;
    exports2.PanelBottomIcon = PanelBottom;
    exports2.PanelBottomInactive = PanelBottomInactive;
    exports2.PanelBottomInactiveIcon = PanelBottomInactive;
    exports2.PanelBottomOpen = PanelBottomOpen;
    exports2.PanelBottomOpenIcon = PanelBottomOpen;
    exports2.PanelLeft = PanelLeft;
    exports2.PanelLeftClose = PanelLeftClose;
    exports2.PanelLeftCloseIcon = PanelLeftClose;
    exports2.PanelLeftIcon = PanelLeft;
    exports2.PanelLeftInactive = PanelLeftInactive;
    exports2.PanelLeftInactiveIcon = PanelLeftInactive;
    exports2.PanelLeftOpen = PanelLeftOpen;
    exports2.PanelLeftOpenIcon = PanelLeftOpen;
    exports2.PanelRight = PanelRight;
    exports2.PanelRightClose = PanelRightClose;
    exports2.PanelRightCloseIcon = PanelRightClose;
    exports2.PanelRightIcon = PanelRight;
    exports2.PanelRightInactive = PanelRightInactive;
    exports2.PanelRightInactiveIcon = PanelRightInactive;
    exports2.PanelRightOpen = PanelRightOpen;
    exports2.PanelRightOpenIcon = PanelRightOpen;
    exports2.PanelTop = PanelTop;
    exports2.PanelTopClose = PanelTopClose;
    exports2.PanelTopCloseIcon = PanelTopClose;
    exports2.PanelTopIcon = PanelTop;
    exports2.PanelTopInactive = PanelTopInactive;
    exports2.PanelTopInactiveIcon = PanelTopInactive;
    exports2.PanelTopOpen = PanelTopOpen;
    exports2.PanelTopOpenIcon = PanelTopOpen;
    exports2.Paperclip = Paperclip;
    exports2.PaperclipIcon = Paperclip;
    exports2.Parentheses = Parentheses;
    exports2.ParenthesesIcon = Parentheses;
    exports2.ParkingCircle = ParkingCircle;
    exports2.ParkingCircleIcon = ParkingCircle;
    exports2.ParkingCircleOff = ParkingCircleOff;
    exports2.ParkingCircleOffIcon = ParkingCircleOff;
    exports2.ParkingMeter = ParkingMeter;
    exports2.ParkingMeterIcon = ParkingMeter;
    exports2.ParkingSquare = ParkingSquare;
    exports2.ParkingSquareIcon = ParkingSquare;
    exports2.ParkingSquareOff = ParkingSquareOff;
    exports2.ParkingSquareOffIcon = ParkingSquareOff;
    exports2.PartyPopper = PartyPopper;
    exports2.PartyPopperIcon = PartyPopper;
    exports2.Pause = Pause;
    exports2.PauseCircle = PauseCircle;
    exports2.PauseCircleIcon = PauseCircle;
    exports2.PauseIcon = Pause;
    exports2.PauseOctagon = PauseOctagon;
    exports2.PauseOctagonIcon = PauseOctagon;
    exports2.PawPrint = PawPrint;
    exports2.PawPrintIcon = PawPrint;
    exports2.PcCase = PcCase;
    exports2.PcCaseIcon = PcCase;
    exports2.Pen = Pen;
    exports2.PenBox = PenSquare;
    exports2.PenBoxIcon = PenSquare;
    exports2.PenIcon = Pen;
    exports2.PenLine = PenLine;
    exports2.PenLineIcon = PenLine;
    exports2.PenSquare = PenSquare;
    exports2.PenSquareIcon = PenSquare;
    exports2.PenTool = PenTool;
    exports2.PenToolIcon = PenTool;
    exports2.Pencil = Pencil;
    exports2.PencilIcon = Pencil;
    exports2.PencilLine = PencilLine;
    exports2.PencilLineIcon = PencilLine;
    exports2.PencilRuler = PencilRuler;
    exports2.PencilRulerIcon = PencilRuler;
    exports2.Pentagon = Pentagon;
    exports2.PentagonIcon = Pentagon;
    exports2.Percent = Percent;
    exports2.PercentCircle = PercentCircle;
    exports2.PercentCircleIcon = PercentCircle;
    exports2.PercentDiamond = PercentDiamond;
    exports2.PercentDiamondIcon = PercentDiamond;
    exports2.PercentIcon = Percent;
    exports2.PercentSquare = PercentSquare;
    exports2.PercentSquareIcon = PercentSquare;
    exports2.PersonStanding = PersonStanding;
    exports2.PersonStandingIcon = PersonStanding;
    exports2.Phone = Phone;
    exports2.PhoneCall = PhoneCall;
    exports2.PhoneCallIcon = PhoneCall;
    exports2.PhoneForwarded = PhoneForwarded;
    exports2.PhoneForwardedIcon = PhoneForwarded;
    exports2.PhoneIcon = Phone;
    exports2.PhoneIncoming = PhoneIncoming;
    exports2.PhoneIncomingIcon = PhoneIncoming;
    exports2.PhoneMissed = PhoneMissed;
    exports2.PhoneMissedIcon = PhoneMissed;
    exports2.PhoneOff = PhoneOff;
    exports2.PhoneOffIcon = PhoneOff;
    exports2.PhoneOutgoing = PhoneOutgoing;
    exports2.PhoneOutgoingIcon = PhoneOutgoing;
    exports2.Pi = Pi;
    exports2.PiIcon = Pi;
    exports2.PiSquare = PiSquare;
    exports2.PiSquareIcon = PiSquare;
    exports2.Piano = Piano;
    exports2.PianoIcon = Piano;
    exports2.PictureInPicture = PictureInPicture;
    exports2.PictureInPicture2 = PictureInPicture2;
    exports2.PictureInPicture2Icon = PictureInPicture2;
    exports2.PictureInPictureIcon = PictureInPicture;
    exports2.PieChart = PieChart;
    exports2.PieChartIcon = PieChart;
    exports2.PiggyBank = PiggyBank;
    exports2.PiggyBankIcon = PiggyBank;
    exports2.Pilcrow = Pilcrow;
    exports2.PilcrowIcon = Pilcrow;
    exports2.PilcrowSquare = PilcrowSquare;
    exports2.PilcrowSquareIcon = PilcrowSquare;
    exports2.Pill = Pill;
    exports2.PillIcon = Pill;
    exports2.Pin = Pin;
    exports2.PinIcon = Pin;
    exports2.PinOff = PinOff;
    exports2.PinOffIcon = PinOff;
    exports2.Pipette = Pipette;
    exports2.PipetteIcon = Pipette;
    exports2.Pizza = Pizza;
    exports2.PizzaIcon = Pizza;
    exports2.Plane = Plane;
    exports2.PlaneIcon = Plane;
    exports2.PlaneLanding = PlaneLanding;
    exports2.PlaneLandingIcon = PlaneLanding;
    exports2.PlaneTakeoff = PlaneTakeoff;
    exports2.PlaneTakeoffIcon = PlaneTakeoff;
    exports2.Play = Play;
    exports2.PlayCircle = PlayCircle;
    exports2.PlayCircleIcon = PlayCircle;
    exports2.PlayIcon = Play;
    exports2.PlaySquare = PlaySquare;
    exports2.PlaySquareIcon = PlaySquare;
    exports2.Plug = Plug;
    exports2.Plug2 = Plug2;
    exports2.Plug2Icon = Plug2;
    exports2.PlugIcon = Plug;
    exports2.PlugZap = PlugZap;
    exports2.PlugZap2 = PlugZap2;
    exports2.PlugZap2Icon = PlugZap2;
    exports2.PlugZapIcon = PlugZap;
    exports2.Plus = Plus;
    exports2.PlusCircle = PlusCircle;
    exports2.PlusCircleIcon = PlusCircle;
    exports2.PlusIcon = Plus;
    exports2.PlusSquare = PlusSquare;
    exports2.PlusSquareIcon = PlusSquare;
    exports2.Pocket = Pocket;
    exports2.PocketIcon = Pocket;
    exports2.PocketKnife = PocketKnife;
    exports2.PocketKnifeIcon = PocketKnife;
    exports2.Podcast = Podcast;
    exports2.PodcastIcon = Podcast;
    exports2.Pointer = Pointer;
    exports2.PointerIcon = Pointer;
    exports2.Popcorn = Popcorn;
    exports2.PopcornIcon = Popcorn;
    exports2.Popsicle = Popsicle;
    exports2.PopsicleIcon = Popsicle;
    exports2.PoundSterling = PoundSterling;
    exports2.PoundSterlingIcon = PoundSterling;
    exports2.Power = Power;
    exports2.PowerCircle = PowerCircle;
    exports2.PowerCircleIcon = PowerCircle;
    exports2.PowerIcon = Power;
    exports2.PowerOff = PowerOff;
    exports2.PowerOffIcon = PowerOff;
    exports2.PowerSquare = PowerSquare;
    exports2.PowerSquareIcon = PowerSquare;
    exports2.Presentation = Presentation;
    exports2.PresentationIcon = Presentation;
    exports2.Printer = Printer;
    exports2.PrinterIcon = Printer;
    exports2.Projector = Projector;
    exports2.ProjectorIcon = Projector;
    exports2.Puzzle = Puzzle;
    exports2.PuzzleIcon = Puzzle;
    exports2.Pyramid = Pyramid;
    exports2.PyramidIcon = Pyramid;
    exports2.QrCode = QrCode;
    exports2.QrCodeIcon = QrCode;
    exports2.Quote = Quote;
    exports2.QuoteIcon = Quote;
    exports2.Rabbit = Rabbit;
    exports2.RabbitIcon = Rabbit;
    exports2.Radar = Radar;
    exports2.RadarIcon = Radar;
    exports2.Radiation = Radiation;
    exports2.RadiationIcon = Radiation;
    exports2.Radio = Radio;
    exports2.RadioIcon = Radio;
    exports2.RadioReceiver = RadioReceiver;
    exports2.RadioReceiverIcon = RadioReceiver;
    exports2.RadioTower = RadioTower;
    exports2.RadioTowerIcon = RadioTower;
    exports2.Radius = Radius;
    exports2.RadiusIcon = Radius;
    exports2.RailSymbol = RailSymbol;
    exports2.RailSymbolIcon = RailSymbol;
    exports2.Rainbow = Rainbow;
    exports2.RainbowIcon = Rainbow;
    exports2.Rat = Rat;
    exports2.RatIcon = Rat;
    exports2.Ratio = Ratio;
    exports2.RatioIcon = Ratio;
    exports2.Receipt = Receipt;
    exports2.ReceiptIcon = Receipt;
    exports2.RectangleHorizontal = RectangleHorizontal;
    exports2.RectangleHorizontalIcon = RectangleHorizontal;
    exports2.RectangleVertical = RectangleVertical;
    exports2.RectangleVerticalIcon = RectangleVertical;
    exports2.Recycle = Recycle;
    exports2.RecycleIcon = Recycle;
    exports2.Redo = Redo;
    exports2.Redo2 = Redo2;
    exports2.Redo2Icon = Redo2;
    exports2.RedoDot = RedoDot;
    exports2.RedoDotIcon = RedoDot;
    exports2.RedoIcon = Redo;
    exports2.RefreshCcw = RefreshCcw;
    exports2.RefreshCcwDot = RefreshCcwDot;
    exports2.RefreshCcwDotIcon = RefreshCcwDot;
    exports2.RefreshCcwIcon = RefreshCcw;
    exports2.RefreshCw = RefreshCw2;
    exports2.RefreshCwIcon = RefreshCw2;
    exports2.RefreshCwOff = RefreshCwOff;
    exports2.RefreshCwOffIcon = RefreshCwOff;
    exports2.Refrigerator = Refrigerator;
    exports2.RefrigeratorIcon = Refrigerator;
    exports2.Regex = Regex;
    exports2.RegexIcon = Regex;
    exports2.RemoveFormatting = RemoveFormatting;
    exports2.RemoveFormattingIcon = RemoveFormatting;
    exports2.Repeat = Repeat;
    exports2.Repeat1 = Repeat1;
    exports2.Repeat1Icon = Repeat1;
    exports2.Repeat2 = Repeat2;
    exports2.Repeat2Icon = Repeat2;
    exports2.RepeatIcon = Repeat;
    exports2.Replace = Replace;
    exports2.ReplaceAll = ReplaceAll;
    exports2.ReplaceAllIcon = ReplaceAll;
    exports2.ReplaceIcon = Replace;
    exports2.Reply = Reply;
    exports2.ReplyAll = ReplyAll;
    exports2.ReplyAllIcon = ReplyAll;
    exports2.ReplyIcon = Reply;
    exports2.Rewind = Rewind;
    exports2.RewindIcon = Rewind;
    exports2.Ribbon = Ribbon;
    exports2.RibbonIcon = Ribbon;
    exports2.Rocket = Rocket;
    exports2.RocketIcon = Rocket;
    exports2.RockingChair = RockingChair;
    exports2.RockingChairIcon = RockingChair;
    exports2.RollerCoaster = RollerCoaster;
    exports2.RollerCoasterIcon = RollerCoaster;
    exports2.Rotate3D = Rotate3d;
    exports2.Rotate3DIcon = Rotate3d;
    exports2.Rotate3d = Rotate3d;
    exports2.Rotate3dIcon = Rotate3d;
    exports2.RotateCcw = RotateCcw;
    exports2.RotateCcwIcon = RotateCcw;
    exports2.RotateCw = RotateCw2;
    exports2.RotateCwIcon = RotateCw2;
    exports2.Route = Route;
    exports2.RouteIcon = Route;
    exports2.RouteOff = RouteOff;
    exports2.RouteOffIcon = RouteOff;
    exports2.Router = Router;
    exports2.RouterIcon = Router;
    exports2.Rows = Rows;
    exports2.RowsIcon = Rows;
    exports2.Rss = Rss;
    exports2.RssIcon = Rss;
    exports2.Ruler = Ruler;
    exports2.RulerIcon = Ruler;
    exports2.RussianRuble = RussianRuble;
    exports2.RussianRubleIcon = RussianRuble;
    exports2.Sailboat = Sailboat;
    exports2.SailboatIcon = Sailboat;
    exports2.Salad = Salad;
    exports2.SaladIcon = Salad;
    exports2.Sandwich = Sandwich;
    exports2.SandwichIcon = Sandwich;
    exports2.Satellite = Satellite;
    exports2.SatelliteDish = SatelliteDish;
    exports2.SatelliteDishIcon = SatelliteDish;
    exports2.SatelliteIcon = Satellite;
    exports2.Save = Save;
    exports2.SaveAll = SaveAll;
    exports2.SaveAllIcon = SaveAll;
    exports2.SaveIcon = Save;
    exports2.Scale = Scale;
    exports2.Scale3D = Scale3d;
    exports2.Scale3DIcon = Scale3d;
    exports2.Scale3d = Scale3d;
    exports2.Scale3dIcon = Scale3d;
    exports2.ScaleIcon = Scale;
    exports2.Scaling = Scaling;
    exports2.ScalingIcon = Scaling;
    exports2.Scan = Scan;
    exports2.ScanBarcode = ScanBarcode;
    exports2.ScanBarcodeIcon = ScanBarcode;
    exports2.ScanEye = ScanEye;
    exports2.ScanEyeIcon = ScanEye;
    exports2.ScanFace = ScanFace;
    exports2.ScanFaceIcon = ScanFace;
    exports2.ScanIcon = Scan;
    exports2.ScanLine = ScanLine;
    exports2.ScanLineIcon = ScanLine;
    exports2.ScanSearch = ScanSearch;
    exports2.ScanSearchIcon = ScanSearch;
    exports2.ScanText = ScanText;
    exports2.ScanTextIcon = ScanText;
    exports2.ScatterChart = ScatterChart;
    exports2.ScatterChartIcon = ScatterChart;
    exports2.School = School;
    exports2.School2 = School2;
    exports2.School2Icon = School2;
    exports2.SchoolIcon = School;
    exports2.Scissors = Scissors;
    exports2.ScissorsIcon = Scissors;
    exports2.ScissorsLineDashed = ScissorsLineDashed;
    exports2.ScissorsLineDashedIcon = ScissorsLineDashed;
    exports2.ScissorsSquare = ScissorsSquare;
    exports2.ScissorsSquareDashedBottom = ScissorsSquareDashedBottom;
    exports2.ScissorsSquareDashedBottomIcon = ScissorsSquareDashedBottom;
    exports2.ScissorsSquareIcon = ScissorsSquare;
    exports2.ScreenShare = ScreenShare;
    exports2.ScreenShareIcon = ScreenShare;
    exports2.ScreenShareOff = ScreenShareOff;
    exports2.ScreenShareOffIcon = ScreenShareOff;
    exports2.Scroll = Scroll;
    exports2.ScrollIcon = Scroll;
    exports2.ScrollText = ScrollText;
    exports2.ScrollTextIcon = ScrollText;
    exports2.Search = Search;
    exports2.SearchCheck = SearchCheck;
    exports2.SearchCheckIcon = SearchCheck;
    exports2.SearchCode = SearchCode;
    exports2.SearchCodeIcon = SearchCode;
    exports2.SearchIcon = Search;
    exports2.SearchSlash = SearchSlash;
    exports2.SearchSlashIcon = SearchSlash;
    exports2.SearchX = SearchX;
    exports2.SearchXIcon = SearchX;
    exports2.Send = Send;
    exports2.SendHorizonal = SendHorizontal;
    exports2.SendHorizonalIcon = SendHorizontal;
    exports2.SendHorizontal = SendHorizontal;
    exports2.SendHorizontalIcon = SendHorizontal;
    exports2.SendIcon = Send;
    exports2.SendToBack = SendToBack;
    exports2.SendToBackIcon = SendToBack;
    exports2.SeparatorHorizontal = SeparatorHorizontal;
    exports2.SeparatorHorizontalIcon = SeparatorHorizontal;
    exports2.SeparatorVertical = SeparatorVertical;
    exports2.SeparatorVerticalIcon = SeparatorVertical;
    exports2.Server = Server;
    exports2.ServerCog = ServerCog;
    exports2.ServerCogIcon = ServerCog;
    exports2.ServerCrash = ServerCrash;
    exports2.ServerCrashIcon = ServerCrash;
    exports2.ServerIcon = Server;
    exports2.ServerOff = ServerOff;
    exports2.ServerOffIcon = ServerOff;
    exports2.Settings = Settings;
    exports2.Settings2 = Settings2;
    exports2.Settings2Icon = Settings2;
    exports2.SettingsIcon = Settings;
    exports2.Shapes = Shapes;
    exports2.ShapesIcon = Shapes;
    exports2.Share = Share;
    exports2.Share2 = Share2;
    exports2.Share2Icon = Share2;
    exports2.ShareIcon = Share;
    exports2.Sheet = Sheet;
    exports2.SheetIcon = Sheet;
    exports2.Shell = Shell;
    exports2.ShellIcon = Shell;
    exports2.Shield = Shield;
    exports2.ShieldAlert = ShieldAlert;
    exports2.ShieldAlertIcon = ShieldAlert;
    exports2.ShieldBan = ShieldBan;
    exports2.ShieldBanIcon = ShieldBan;
    exports2.ShieldCheck = ShieldCheck;
    exports2.ShieldCheckIcon = ShieldCheck;
    exports2.ShieldClose = ShieldX;
    exports2.ShieldCloseIcon = ShieldX;
    exports2.ShieldEllipsis = ShieldEllipsis;
    exports2.ShieldEllipsisIcon = ShieldEllipsis;
    exports2.ShieldHalf = ShieldHalf;
    exports2.ShieldHalfIcon = ShieldHalf;
    exports2.ShieldIcon = Shield;
    exports2.ShieldMinus = ShieldMinus;
    exports2.ShieldMinusIcon = ShieldMinus;
    exports2.ShieldOff = ShieldOff;
    exports2.ShieldOffIcon = ShieldOff;
    exports2.ShieldPlus = ShieldPlus;
    exports2.ShieldPlusIcon = ShieldPlus;
    exports2.ShieldQuestion = ShieldQuestion;
    exports2.ShieldQuestionIcon = ShieldQuestion;
    exports2.ShieldX = ShieldX;
    exports2.ShieldXIcon = ShieldX;
    exports2.Ship = Ship;
    exports2.ShipIcon = Ship;
    exports2.ShipWheel = ShipWheel;
    exports2.ShipWheelIcon = ShipWheel;
    exports2.Shirt = Shirt;
    exports2.ShirtIcon = Shirt;
    exports2.ShoppingBag = ShoppingBag;
    exports2.ShoppingBagIcon = ShoppingBag;
    exports2.ShoppingBasket = ShoppingBasket;
    exports2.ShoppingBasketIcon = ShoppingBasket;
    exports2.ShoppingCart = ShoppingCart;
    exports2.ShoppingCartIcon = ShoppingCart;
    exports2.Shovel = Shovel;
    exports2.ShovelIcon = Shovel;
    exports2.ShowerHead = ShowerHead;
    exports2.ShowerHeadIcon = ShowerHead;
    exports2.Shrink = Shrink;
    exports2.ShrinkIcon = Shrink;
    exports2.Shrub = Shrub;
    exports2.ShrubIcon = Shrub;
    exports2.Shuffle = Shuffle;
    exports2.ShuffleIcon = Shuffle;
    exports2.Sidebar = PanelLeft;
    exports2.SidebarClose = PanelLeftClose;
    exports2.SidebarCloseIcon = PanelLeftClose;
    exports2.SidebarIcon = PanelLeft;
    exports2.SidebarOpen = PanelLeftOpen;
    exports2.SidebarOpenIcon = PanelLeftOpen;
    exports2.Sigma = Sigma;
    exports2.SigmaIcon = Sigma;
    exports2.SigmaSquare = SigmaSquare;
    exports2.SigmaSquareIcon = SigmaSquare;
    exports2.Signal = Signal;
    exports2.SignalHigh = SignalHigh;
    exports2.SignalHighIcon = SignalHigh;
    exports2.SignalIcon = Signal;
    exports2.SignalLow = SignalLow;
    exports2.SignalLowIcon = SignalLow;
    exports2.SignalMedium = SignalMedium;
    exports2.SignalMediumIcon = SignalMedium;
    exports2.SignalZero = SignalZero;
    exports2.SignalZeroIcon = SignalZero;
    exports2.Signpost = Signpost;
    exports2.SignpostBig = SignpostBig;
    exports2.SignpostBigIcon = SignpostBig;
    exports2.SignpostIcon = Signpost;
    exports2.Siren = Siren;
    exports2.SirenIcon = Siren;
    exports2.SkipBack = SkipBack;
    exports2.SkipBackIcon = SkipBack;
    exports2.SkipForward = SkipForward;
    exports2.SkipForwardIcon = SkipForward;
    exports2.Skull = Skull;
    exports2.SkullIcon = Skull;
    exports2.Slack = Slack;
    exports2.SlackIcon = Slack;
    exports2.Slash = Slash;
    exports2.SlashIcon = Slash;
    exports2.Slice = Slice;
    exports2.SliceIcon = Slice;
    exports2.Sliders = Sliders;
    exports2.SlidersHorizontal = SlidersHorizontal;
    exports2.SlidersHorizontalIcon = SlidersHorizontal;
    exports2.SlidersIcon = Sliders;
    exports2.Smartphone = Smartphone;
    exports2.SmartphoneCharging = SmartphoneCharging;
    exports2.SmartphoneChargingIcon = SmartphoneCharging;
    exports2.SmartphoneIcon = Smartphone;
    exports2.SmartphoneNfc = SmartphoneNfc;
    exports2.SmartphoneNfcIcon = SmartphoneNfc;
    exports2.Smile = Smile;
    exports2.SmileIcon = Smile;
    exports2.SmilePlus = SmilePlus;
    exports2.SmilePlusIcon = SmilePlus;
    exports2.Snail = Snail;
    exports2.SnailIcon = Snail;
    exports2.Snowflake = Snowflake;
    exports2.SnowflakeIcon = Snowflake;
    exports2.Sofa = Sofa;
    exports2.SofaIcon = Sofa;
    exports2.SortAsc = ArrowUpNarrowWide;
    exports2.SortAscIcon = ArrowUpNarrowWide;
    exports2.SortDesc = ArrowDownWideNarrow;
    exports2.SortDescIcon = ArrowDownWideNarrow;
    exports2.Soup = Soup;
    exports2.SoupIcon = Soup;
    exports2.Space = Space;
    exports2.SpaceIcon = Space;
    exports2.Spade = Spade;
    exports2.SpadeIcon = Spade;
    exports2.Sparkle = Sparkle;
    exports2.SparkleIcon = Sparkle;
    exports2.Sparkles = Sparkles;
    exports2.SparklesIcon = Sparkles;
    exports2.Speaker = Speaker;
    exports2.SpeakerIcon = Speaker;
    exports2.Speech = Speech;
    exports2.SpeechIcon = Speech;
    exports2.SpellCheck = SpellCheck;
    exports2.SpellCheck2 = SpellCheck2;
    exports2.SpellCheck2Icon = SpellCheck2;
    exports2.SpellCheckIcon = SpellCheck;
    exports2.Spline = Spline;
    exports2.SplineIcon = Spline;
    exports2.Split = Split;
    exports2.SplitIcon = Split;
    exports2.SplitSquareHorizontal = SplitSquareHorizontal;
    exports2.SplitSquareHorizontalIcon = SplitSquareHorizontal;
    exports2.SplitSquareVertical = SplitSquareVertical;
    exports2.SplitSquareVerticalIcon = SplitSquareVertical;
    exports2.SprayCan = SprayCan;
    exports2.SprayCanIcon = SprayCan;
    exports2.Sprout = Sprout;
    exports2.SproutIcon = Sprout;
    exports2.Square = Square;
    exports2.SquareAsterisk = SquareAsterisk;
    exports2.SquareAsteriskIcon = SquareAsterisk;
    exports2.SquareCode = SquareCode;
    exports2.SquareCodeIcon = SquareCode;
    exports2.SquareDashedBottom = SquareDashedBottom;
    exports2.SquareDashedBottomCode = SquareDashedBottomCode;
    exports2.SquareDashedBottomCodeIcon = SquareDashedBottomCode;
    exports2.SquareDashedBottomIcon = SquareDashedBottom;
    exports2.SquareDot = SquareDot;
    exports2.SquareDotIcon = SquareDot;
    exports2.SquareEqual = SquareEqual;
    exports2.SquareEqualIcon = SquareEqual;
    exports2.SquareGantt = GanttChartSquare;
    exports2.SquareGanttIcon = GanttChartSquare;
    exports2.SquareIcon = Square;
    exports2.SquareKanban = KanbanSquare;
    exports2.SquareKanbanDashed = KanbanSquareDashed;
    exports2.SquareKanbanDashedIcon = KanbanSquareDashed;
    exports2.SquareKanbanIcon = KanbanSquare;
    exports2.SquareSlash = SquareSlash;
    exports2.SquareSlashIcon = SquareSlash;
    exports2.SquareStack = SquareStack;
    exports2.SquareStackIcon = SquareStack;
    exports2.SquareUser = SquareUser;
    exports2.SquareUserIcon = SquareUser;
    exports2.SquareUserRound = SquareUserRound;
    exports2.SquareUserRoundIcon = SquareUserRound;
    exports2.Squirrel = Squirrel;
    exports2.SquirrelIcon = Squirrel;
    exports2.Stamp = Stamp;
    exports2.StampIcon = Stamp;
    exports2.Star = Star;
    exports2.StarHalf = StarHalf;
    exports2.StarHalfIcon = StarHalf;
    exports2.StarIcon = Star;
    exports2.StarOff = StarOff;
    exports2.StarOffIcon = StarOff;
    exports2.Stars = Sparkles;
    exports2.StarsIcon = Sparkles;
    exports2.StepBack = StepBack;
    exports2.StepBackIcon = StepBack;
    exports2.StepForward = StepForward;
    exports2.StepForwardIcon = StepForward;
    exports2.Stethoscope = Stethoscope;
    exports2.StethoscopeIcon = Stethoscope;
    exports2.Sticker = Sticker;
    exports2.StickerIcon = Sticker;
    exports2.StickyNote = StickyNote;
    exports2.StickyNoteIcon = StickyNote;
    exports2.StopCircle = StopCircle;
    exports2.StopCircleIcon = StopCircle;
    exports2.Store = Store;
    exports2.StoreIcon = Store;
    exports2.StretchHorizontal = StretchHorizontal;
    exports2.StretchHorizontalIcon = StretchHorizontal;
    exports2.StretchVertical = StretchVertical;
    exports2.StretchVerticalIcon = StretchVertical;
    exports2.Strikethrough = Strikethrough;
    exports2.StrikethroughIcon = Strikethrough;
    exports2.Subscript = Subscript;
    exports2.SubscriptIcon = Subscript;
    exports2.Subtitles = Subtitles;
    exports2.SubtitlesIcon = Subtitles;
    exports2.Sun = Sun;
    exports2.SunDim = SunDim;
    exports2.SunDimIcon = SunDim;
    exports2.SunIcon = Sun;
    exports2.SunMedium = SunMedium;
    exports2.SunMediumIcon = SunMedium;
    exports2.SunMoon = SunMoon;
    exports2.SunMoonIcon = SunMoon;
    exports2.SunSnow = SunSnow;
    exports2.SunSnowIcon = SunSnow;
    exports2.Sunrise = Sunrise;
    exports2.SunriseIcon = Sunrise;
    exports2.Sunset = Sunset;
    exports2.SunsetIcon = Sunset;
    exports2.Superscript = Superscript;
    exports2.SuperscriptIcon = Superscript;
    exports2.SwissFranc = SwissFranc;
    exports2.SwissFrancIcon = SwissFranc;
    exports2.SwitchCamera = SwitchCamera;
    exports2.SwitchCameraIcon = SwitchCamera;
    exports2.Sword = Sword;
    exports2.SwordIcon = Sword;
    exports2.Swords = Swords;
    exports2.SwordsIcon = Swords;
    exports2.Syringe = Syringe;
    exports2.SyringeIcon = Syringe;
    exports2.Table = Table;
    exports2.Table2 = Table2;
    exports2.Table2Icon = Table2;
    exports2.TableIcon = Table;
    exports2.TableProperties = TableProperties;
    exports2.TablePropertiesIcon = TableProperties;
    exports2.Tablet = Tablet;
    exports2.TabletIcon = Tablet;
    exports2.TabletSmartphone = TabletSmartphone;
    exports2.TabletSmartphoneIcon = TabletSmartphone;
    exports2.Tablets = Tablets;
    exports2.TabletsIcon = Tablets;
    exports2.Tag = Tag;
    exports2.TagIcon = Tag;
    exports2.Tags = Tags;
    exports2.TagsIcon = Tags;
    exports2.Tally1 = Tally1;
    exports2.Tally1Icon = Tally1;
    exports2.Tally2 = Tally2;
    exports2.Tally2Icon = Tally2;
    exports2.Tally3 = Tally3;
    exports2.Tally3Icon = Tally3;
    exports2.Tally4 = Tally4;
    exports2.Tally4Icon = Tally4;
    exports2.Tally5 = Tally5;
    exports2.Tally5Icon = Tally5;
    exports2.Tangent = Tangent;
    exports2.TangentIcon = Tangent;
    exports2.Target = Target;
    exports2.TargetIcon = Target;
    exports2.Tent = Tent;
    exports2.TentIcon = Tent;
    exports2.TentTree = TentTree;
    exports2.TentTreeIcon = TentTree;
    exports2.Terminal = Terminal;
    exports2.TerminalIcon = Terminal;
    exports2.TerminalSquare = TerminalSquare;
    exports2.TerminalSquareIcon = TerminalSquare;
    exports2.TestTube = TestTube;
    exports2.TestTube2 = TestTube2;
    exports2.TestTube2Icon = TestTube2;
    exports2.TestTubeIcon = TestTube;
    exports2.TestTubes = TestTubes;
    exports2.TestTubesIcon = TestTubes;
    exports2.Text = Text2;
    exports2.TextCursor = TextCursor;
    exports2.TextCursorIcon = TextCursor;
    exports2.TextCursorInput = TextCursorInput;
    exports2.TextCursorInputIcon = TextCursorInput;
    exports2.TextIcon = Text2;
    exports2.TextQuote = TextQuote;
    exports2.TextQuoteIcon = TextQuote;
    exports2.TextSelect = TextSelect;
    exports2.TextSelectIcon = TextSelect;
    exports2.TextSelection = TextSelect;
    exports2.TextSelectionIcon = TextSelect;
    exports2.Theater = Theater;
    exports2.TheaterIcon = Theater;
    exports2.Thermometer = Thermometer;
    exports2.ThermometerIcon = Thermometer;
    exports2.ThermometerSnowflake = ThermometerSnowflake;
    exports2.ThermometerSnowflakeIcon = ThermometerSnowflake;
    exports2.ThermometerSun = ThermometerSun;
    exports2.ThermometerSunIcon = ThermometerSun;
    exports2.ThumbsDown = ThumbsDown;
    exports2.ThumbsDownIcon = ThumbsDown;
    exports2.ThumbsUp = ThumbsUp;
    exports2.ThumbsUpIcon = ThumbsUp;
    exports2.Ticket = Ticket;
    exports2.TicketIcon = Ticket;
    exports2.Timer = Timer;
    exports2.TimerIcon = Timer;
    exports2.TimerOff = TimerOff;
    exports2.TimerOffIcon = TimerOff;
    exports2.TimerReset = TimerReset;
    exports2.TimerResetIcon = TimerReset;
    exports2.ToggleLeft = ToggleLeft;
    exports2.ToggleLeftIcon = ToggleLeft;
    exports2.ToggleRight = ToggleRight;
    exports2.ToggleRightIcon = ToggleRight;
    exports2.Tornado = Tornado;
    exports2.TornadoIcon = Tornado;
    exports2.Torus = Torus;
    exports2.TorusIcon = Torus;
    exports2.Touchpad = Touchpad;
    exports2.TouchpadIcon = Touchpad;
    exports2.TouchpadOff = TouchpadOff;
    exports2.TouchpadOffIcon = TouchpadOff;
    exports2.TowerControl = TowerControl;
    exports2.TowerControlIcon = TowerControl;
    exports2.ToyBrick = ToyBrick;
    exports2.ToyBrickIcon = ToyBrick;
    exports2.Tractor = Tractor;
    exports2.TractorIcon = Tractor;
    exports2.TrafficCone = TrafficCone;
    exports2.TrafficConeIcon = TrafficCone;
    exports2.Train = TramFront;
    exports2.TrainFront = TrainFront;
    exports2.TrainFrontIcon = TrainFront;
    exports2.TrainFrontTunnel = TrainFrontTunnel;
    exports2.TrainFrontTunnelIcon = TrainFrontTunnel;
    exports2.TrainIcon = TramFront;
    exports2.TrainTrack = TrainTrack;
    exports2.TrainTrackIcon = TrainTrack;
    exports2.TramFront = TramFront;
    exports2.TramFrontIcon = TramFront;
    exports2.Trash = Trash;
    exports2.Trash2 = Trash2;
    exports2.Trash2Icon = Trash2;
    exports2.TrashIcon = Trash;
    exports2.TreeDeciduous = TreeDeciduous;
    exports2.TreeDeciduousIcon = TreeDeciduous;
    exports2.TreePine = TreePine;
    exports2.TreePineIcon = TreePine;
    exports2.Trees = Trees;
    exports2.TreesIcon = Trees;
    exports2.Trello = Trello;
    exports2.TrelloIcon = Trello;
    exports2.TrendingDown = TrendingDown;
    exports2.TrendingDownIcon = TrendingDown;
    exports2.TrendingUp = TrendingUp;
    exports2.TrendingUpIcon = TrendingUp;
    exports2.Triangle = Triangle;
    exports2.TriangleIcon = Triangle;
    exports2.TriangleRight = TriangleRight;
    exports2.TriangleRightIcon = TriangleRight;
    exports2.Trophy = Trophy;
    exports2.TrophyIcon = Trophy;
    exports2.Truck = Truck;
    exports2.TruckIcon = Truck;
    exports2.Turtle = Turtle;
    exports2.TurtleIcon = Turtle;
    exports2.Tv = Tv;
    exports2.Tv2 = Tv2;
    exports2.Tv2Icon = Tv2;
    exports2.TvIcon = Tv;
    exports2.Twitch = Twitch;
    exports2.TwitchIcon = Twitch;
    exports2.Twitter = Twitter;
    exports2.TwitterIcon = Twitter;
    exports2.Type = Type;
    exports2.TypeIcon = Type;
    exports2.Umbrella = Umbrella;
    exports2.UmbrellaIcon = Umbrella;
    exports2.UmbrellaOff = UmbrellaOff;
    exports2.UmbrellaOffIcon = UmbrellaOff;
    exports2.Underline = Underline;
    exports2.UnderlineIcon = Underline;
    exports2.Undo = Undo;
    exports2.Undo2 = Undo2;
    exports2.Undo2Icon = Undo2;
    exports2.UndoDot = UndoDot;
    exports2.UndoDotIcon = UndoDot;
    exports2.UndoIcon = Undo;
    exports2.UnfoldHorizontal = UnfoldHorizontal;
    exports2.UnfoldHorizontalIcon = UnfoldHorizontal;
    exports2.UnfoldVertical = UnfoldVertical;
    exports2.UnfoldVerticalIcon = UnfoldVertical;
    exports2.Ungroup = Ungroup;
    exports2.UngroupIcon = Ungroup;
    exports2.Unlink = Unlink;
    exports2.Unlink2 = Unlink2;
    exports2.Unlink2Icon = Unlink2;
    exports2.UnlinkIcon = Unlink;
    exports2.Unlock = Unlock;
    exports2.UnlockIcon = Unlock;
    exports2.UnlockKeyhole = UnlockKeyhole;
    exports2.UnlockKeyholeIcon = UnlockKeyhole;
    exports2.Unplug = Unplug;
    exports2.UnplugIcon = Unplug;
    exports2.Upload = Upload;
    exports2.UploadCloud = UploadCloud;
    exports2.UploadCloudIcon = UploadCloud;
    exports2.UploadIcon = Upload;
    exports2.Usb = Usb;
    exports2.UsbIcon = Usb;
    exports2.User = User;
    exports2.User2 = UserRound;
    exports2.User2Icon = UserRound;
    exports2.UserCheck = UserCheck;
    exports2.UserCheck2 = UserRoundCheck;
    exports2.UserCheck2Icon = UserRoundCheck;
    exports2.UserCheckIcon = UserCheck;
    exports2.UserCircle = CircleUser;
    exports2.UserCircle2 = CircleUserRound;
    exports2.UserCircle2Icon = CircleUserRound;
    exports2.UserCircleIcon = CircleUser;
    exports2.UserCog = UserCog;
    exports2.UserCog2 = UserRoundCog;
    exports2.UserCog2Icon = UserRoundCog;
    exports2.UserCogIcon = UserCog;
    exports2.UserIcon = User;
    exports2.UserMinus = UserMinus;
    exports2.UserMinus2 = UserRoundMinus;
    exports2.UserMinus2Icon = UserRoundMinus;
    exports2.UserMinusIcon = UserMinus;
    exports2.UserPlus = UserPlus;
    exports2.UserPlus2 = UserRoundPlus;
    exports2.UserPlus2Icon = UserRoundPlus;
    exports2.UserPlusIcon = UserPlus;
    exports2.UserRound = UserRound;
    exports2.UserRoundCheck = UserRoundCheck;
    exports2.UserRoundCheckIcon = UserRoundCheck;
    exports2.UserRoundCog = UserRoundCog;
    exports2.UserRoundCogIcon = UserRoundCog;
    exports2.UserRoundIcon = UserRound;
    exports2.UserRoundMinus = UserRoundMinus;
    exports2.UserRoundMinusIcon = UserRoundMinus;
    exports2.UserRoundPlus = UserRoundPlus;
    exports2.UserRoundPlusIcon = UserRoundPlus;
    exports2.UserRoundX = UserRoundX;
    exports2.UserRoundXIcon = UserRoundX;
    exports2.UserSquare = SquareUser;
    exports2.UserSquare2 = SquareUserRound;
    exports2.UserSquare2Icon = SquareUserRound;
    exports2.UserSquareIcon = SquareUser;
    exports2.UserX = UserX;
    exports2.UserX2 = UserRoundX;
    exports2.UserX2Icon = UserRoundX;
    exports2.UserXIcon = UserX;
    exports2.Users = Users;
    exports2.Users2 = UsersRound;
    exports2.Users2Icon = UsersRound;
    exports2.UsersIcon = Users;
    exports2.UsersRound = UsersRound;
    exports2.UsersRoundIcon = UsersRound;
    exports2.Utensils = Utensils;
    exports2.UtensilsCrossed = UtensilsCrossed;
    exports2.UtensilsCrossedIcon = UtensilsCrossed;
    exports2.UtensilsIcon = Utensils;
    exports2.UtilityPole = UtilityPole;
    exports2.UtilityPoleIcon = UtilityPole;
    exports2.Variable = Variable;
    exports2.VariableIcon = Variable;
    exports2.Vegan = Vegan;
    exports2.VeganIcon = Vegan;
    exports2.VenetianMask = VenetianMask;
    exports2.VenetianMaskIcon = VenetianMask;
    exports2.Verified = BadgeCheck;
    exports2.VerifiedIcon = BadgeCheck;
    exports2.Vibrate = Vibrate;
    exports2.VibrateIcon = Vibrate;
    exports2.VibrateOff = VibrateOff;
    exports2.VibrateOffIcon = VibrateOff;
    exports2.Video = Video;
    exports2.VideoIcon = Video;
    exports2.VideoOff = VideoOff;
    exports2.VideoOffIcon = VideoOff;
    exports2.Videotape = Videotape;
    exports2.VideotapeIcon = Videotape;
    exports2.View = View;
    exports2.ViewIcon = View;
    exports2.Voicemail = Voicemail;
    exports2.VoicemailIcon = Voicemail;
    exports2.Volume = Volume;
    exports2.Volume1 = Volume1;
    exports2.Volume1Icon = Volume1;
    exports2.Volume2 = Volume2;
    exports2.Volume2Icon = Volume2;
    exports2.VolumeIcon = Volume;
    exports2.VolumeX = VolumeX;
    exports2.VolumeXIcon = VolumeX;
    exports2.Vote = Vote;
    exports2.VoteIcon = Vote;
    exports2.Wallet = Wallet;
    exports2.Wallet2 = Wallet2;
    exports2.Wallet2Icon = Wallet2;
    exports2.WalletCards = WalletCards;
    exports2.WalletCardsIcon = WalletCards;
    exports2.WalletIcon = Wallet;
    exports2.Wallpaper = Wallpaper;
    exports2.WallpaperIcon = Wallpaper;
    exports2.Wand = Wand;
    exports2.Wand2 = Wand2;
    exports2.Wand2Icon = Wand2;
    exports2.WandIcon = Wand;
    exports2.Warehouse = Warehouse;
    exports2.WarehouseIcon = Warehouse;
    exports2.Watch = Watch;
    exports2.WatchIcon = Watch;
    exports2.Waves = Waves;
    exports2.WavesIcon = Waves;
    exports2.Waypoints = Waypoints;
    exports2.WaypointsIcon = Waypoints;
    exports2.Webcam = Webcam;
    exports2.WebcamIcon = Webcam;
    exports2.Webhook = Webhook;
    exports2.WebhookIcon = Webhook;
    exports2.Weight = Weight;
    exports2.WeightIcon = Weight;
    exports2.Wheat = Wheat;
    exports2.WheatIcon = Wheat;
    exports2.WheatOff = WheatOff;
    exports2.WheatOffIcon = WheatOff;
    exports2.WholeWord = WholeWord;
    exports2.WholeWordIcon = WholeWord;
    exports2.Wifi = Wifi;
    exports2.WifiIcon = Wifi;
    exports2.WifiOff = WifiOff;
    exports2.WifiOffIcon = WifiOff;
    exports2.Wind = Wind;
    exports2.WindIcon = Wind;
    exports2.Wine = Wine;
    exports2.WineIcon = Wine;
    exports2.WineOff = WineOff;
    exports2.WineOffIcon = WineOff;
    exports2.Workflow = Workflow;
    exports2.WorkflowIcon = Workflow;
    exports2.WrapText = WrapText;
    exports2.WrapTextIcon = WrapText;
    exports2.Wrench = Wrench;
    exports2.WrenchIcon = Wrench;
    exports2.X = X2;
    exports2.XCircle = XCircle;
    exports2.XCircleIcon = XCircle;
    exports2.XIcon = X2;
    exports2.XOctagon = XOctagon;
    exports2.XOctagonIcon = XOctagon;
    exports2.XSquare = XSquare;
    exports2.XSquareIcon = XSquare;
    exports2.Youtube = Youtube;
    exports2.YoutubeIcon = Youtube;
    exports2.Zap = Zap;
    exports2.ZapIcon = Zap;
    exports2.ZapOff = ZapOff;
    exports2.ZapOffIcon = ZapOff;
    exports2.ZoomIn = ZoomIn;
    exports2.ZoomInIcon = ZoomIn;
    exports2.ZoomOut = ZoomOut;
    exports2.ZoomOutIcon = ZoomOut;
    exports2.createLucideIcon = createLucideIcon;
    exports2.icons = index;
  }
});

// ../../packages/ui/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  Button: () => Button,
  Card: () => Card,
  CardBody: () => CardBody,
  CardHeader: () => CardHeader,
  Input: () => Input,
  Modal: () => Modal,
  Spinner: () => Spinner,
  UIProvider: () => UIProvider,
  tamaguiConfig: () => tamaguiConfig
});
module.exports = __toCommonJS(dist_exports);
var import_core3 = require("@tamagui/core");
__reExport(dist_exports, require("@tamagui/core"), module.exports);

// ../../node_modules/@tamagui/shorthands/dist/esm/v2.mjs
var shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  bc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands.bls = "borderLeftStyle";
shorthands.brs = "borderRightStyle";
shorthands.bts = "borderTopStyle";
shorthands.bbs = "borderBottomStyle";
shorthands.bxs = "boxSizing";
shorthands.bxsh = "boxShadow";
shorthands.ox = "overflowX";
shorthands.oy = "overflowY";

// ../../node_modules/@tamagui/colors/dist/esm/dark/blue.mjs
var blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/gray.mjs
var gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/green.mjs
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/orange.mjs
var orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/pink.mjs
var pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/purple.mjs
var purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/red.mjs
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/dark/yellow.mjs
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/blue.mjs
var blue2 = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/gray.mjs
var gray2 = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/green.mjs
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/orange.mjs
var orange2 = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/pink.mjs
var pink2 = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/purple.mjs
var purple2 = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/red.mjs
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// ../../node_modules/@tamagui/colors/dist/esm/light/yellow.mjs
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// ../../node_modules/@tamagui/create-theme/dist/esm/isMinusZero.mjs
function isMinusZero(value) {
  return 1 / value === Number.NEGATIVE_INFINITY;
}
__name(isMinusZero, "isMinusZero");

// ../../node_modules/@tamagui/create-theme/dist/esm/themeInfo.mjs
var THEME_INFO = /* @__PURE__ */ new Map();
var getThemeInfo = /* @__PURE__ */ __name((theme, name) => THEME_INFO.get(name || JSON.stringify(theme)), "getThemeInfo");
var setThemeInfo = /* @__PURE__ */ __name((theme, info) => {
  const next = {
    ...info,
    cache: /* @__PURE__ */ new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next), THEME_INFO.set(JSON.stringify(info.definition), next);
}, "setThemeInfo");

// ../../node_modules/@tamagui/create-theme/dist/esm/createTheme.mjs
var identityCache = /* @__PURE__ */ new Map();
function createThemeWithPalettes(palettes, defaultPalette, definition, options, name, skipCache = false) {
  if (!palettes[defaultPalette]) throw new Error(`No pallete: ${defaultPalette}`);
  const newDef = {
    ...definition
  };
  for (const key in definition) {
    let val = definition[key];
    if (typeof val == "string" && val[0] === "$") {
      const [altPaletteName$, altPaletteIndex] = val.split("."), altPaletteName = altPaletteName$.slice(1), parentName = defaultPalette.split("_")[0], altPalette = palettes[altPaletteName] || palettes[`${parentName}_${altPaletteName}`];
      if (altPalette) {
        const next = getValue(altPalette, +altPaletteIndex);
        typeof next < "u" && (newDef[key] = next);
      }
    }
  }
  return createTheme(palettes[defaultPalette], newDef, options, name, skipCache);
}
__name(createThemeWithPalettes, "createThemeWithPalettes");
function createTheme(palette, definition, options, name, skipCache = false) {
  const cacheKey = skipCache ? "" : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && identityCache.has(cacheKey)) return identityCache.get(cacheKey);
  const theme = {
    ...Object.fromEntries(Object.entries(definition).map(([key, offset]) => [key, getValue(palette, offset)])),
    ...options?.nonInheritedValues
  };
  return setThemeInfo(theme, {
    palette,
    definition,
    options,
    name
  }), cacheKey && identityCache.set(cacheKey, theme), theme;
}
__name(createTheme, "createTheme");
var getValue = /* @__PURE__ */ __name((palette, value) => {
  if (!palette) throw new Error("No palette!");
  if (typeof value == "string") return value;
  const max = palette.length - 1, next = (value === 0 ? !isMinusZero(value) : value >= 0) ? value : max + value, index = Math.min(Math.max(0, next), max);
  return palette[index];
}, "getValue");

// ../../node_modules/@tamagui/create-theme/dist/esm/helpers.mjs
function objectEntries(obj) {
  return Object.entries(obj);
}
__name(objectEntries, "objectEntries");
function objectFromEntries(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries, "objectFromEntries");

// ../../node_modules/@tamagui/create-theme/dist/esm/masks.mjs
var createMask = /* @__PURE__ */ __name((createMask2) => typeof createMask2 == "function" ? {
  name: createMask2.name || "unnamed",
  mask: createMask2
} : createMask2, "createMask");
var skipMask = {
  name: "skip-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      skip
    } = opts;
    return Object.fromEntries(Object.entries(template).filter(([k]) => !skip || !(k in skip)).map(([k, v]) => [k, applyOverrides(k, v, opts)]));
  }, "mask")
};
function applyOverrides(key, value, opts) {
  let override, strategy = opts.overrideStrategy;
  const overrideSwap = opts.overrideSwap?.[key];
  if (typeof overrideSwap < "u") override = overrideSwap, strategy = "swap";
  else {
    const overrideShift = opts.overrideShift?.[key];
    if (typeof overrideShift < "u") override = overrideShift, strategy = "shift";
    else {
      const overrideDefault = opts.override?.[key];
      typeof overrideDefault < "u" && (override = overrideDefault, strategy = opts.overrideStrategy);
    }
  }
  return typeof override > "u" || typeof override == "string" ? value : strategy === "swap" ? override : value;
}
__name(applyOverrides, "applyOverrides");
var createIdentityMask = /* @__PURE__ */ __name(() => ({
  name: "identity-mask",
  mask: /* @__PURE__ */ __name((template, opts) => skipMask.mask(template, opts), "mask")
}), "createIdentityMask");
var createInverseMask = /* @__PURE__ */ __name(() => ({
  name: "inverse-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const inversed = objectFromEntries(objectEntries(template).map(([k, v]) => [k, -v]));
    return skipMask.mask(inversed, opts);
  }, "mask")
}), "createInverseMask");
var createShiftMask = /* @__PURE__ */ __name(({
  inverse
} = {}, defaultOptions) => ({
  name: "shift-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      override,
      overrideStrategy = "shift",
      max: maxIn,
      palette,
      min = 0,
      strength = 1
    } = {
      ...defaultOptions,
      ...opts
    }, values = Object.entries(template), max = maxIn ?? (palette ? Object.values(palette).length - 1 : Number.POSITIVE_INFINITY), out = {};
    for (const [key, value] of values) {
      if (typeof value == "string") continue;
      if (typeof override?.[key] == "number") {
        const overrideVal = override[key];
        out[key] = overrideStrategy === "shift" ? value + overrideVal : overrideVal;
        continue;
      }
      if (typeof override?.[key] == "string") {
        out[key] = override[key];
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0, direction = isPositive ? 1 : -1, invert = inverse ? -1 : 1, next = value + strength * direction * invert, clamped = isPositive ? Math.max(min, Math.min(max, next)) : Math.min(-min, Math.max(-max, next));
      out[key] = clamped;
    }
    return skipMask.mask(out, opts);
  }, "mask")
}), "createShiftMask");
var createWeakenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "soften-mask",
  mask: createShiftMask({}, defaultOptions).mask
}), "createWeakenMask");
var createSoftenMask = createWeakenMask;
var createStrengthenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "strengthen-mask",
  mask: createShiftMask({
    inverse: true
  }, defaultOptions).mask
}), "createStrengthenMask");

// ../../node_modules/@tamagui/create-theme/dist/esm/applyMask.mjs
function applyMask(theme, mask, options = {}, parentName, nextName) {
  const info = getThemeInfo(theme, parentName);
  if (!info) throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const next = applyMaskStateless(info, mask, options, parentName);
  return setThemeInfo(next.theme, {
    definition: next.definition,
    palette: info.palette,
    name: nextName
  }), next.theme;
}
__name(applyMask, "applyMask");
function applyMaskStateless(info, mask, options = {}, parentName) {
  const skip = {
    ...options.skip
  };
  if (info.options?.nonInheritedValues) for (const key in info.options.nonInheritedValues) skip[key] = 1;
  const maskOptions = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  }, template = mask.mask(info.definition, maskOptions), theme = createTheme(info.palette, template);
  return {
    ...info,
    cache: /* @__PURE__ */ new Map(),
    definition: template,
    theme
  };
}
__name(applyMaskStateless, "applyMaskStateless");

// ../../node_modules/@tamagui/create-theme/dist/esm/combineMasks.mjs
var combineMasks = /* @__PURE__ */ __name((...masks2) => ({
  name: "combine-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    let current = getThemeInfo(template, opts.parentName), theme;
    for (const mask2 of masks2) {
      if (!current) throw new Error(`Nothing returned from mask: ${current}, for template: ${template} and mask: ${mask2.toString()}, given opts ${JSON.stringify(opts, null, 2)}`);
      const next = applyMaskStateless(current, mask2, opts);
      current = next, theme = next.theme;
    }
    return theme;
  }, "mask")
}), "combineMasks");

// ../../node_modules/@tamagui/theme-builder/dist/esm/ThemeBuilder.mjs
var ThemeBuilder = class {
  static {
    __name(this, "ThemeBuilder");
  }
  constructor(state) {
    this.state = state;
  }
  addPalettes(palettes) {
    return this.state.palettes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.palettes,
      ...palettes
    }, this;
  }
  addTemplates(templates) {
    return this.state.templates = {
      // as {} prevents generic string key merge messing up types
      ...this.state.templates,
      ...templates
    }, this;
  }
  addMasks(masks2) {
    return this.state.masks = {
      // as {} prevents generic string key merge messing up types
      ...this.state.masks,
      ...objectFromEntries(objectEntries(masks2).map(([key, val]) => [key, createMask(val)]))
    }, this;
  }
  // for dev mode only really
  _addedThemes = [];
  addThemes(themes3) {
    return this._addedThemes.push({
      type: "themes",
      args: [themes3]
    }), this.state.themes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...themes3
    }, this;
  }
  // these wont be typed to save some complexity and because they don't need to be typed!
  addComponentThemes(childThemeDefinition, options) {
    return this.addChildThemes(childThemeDefinition, options), this;
  }
  addChildThemes(childThemeDefinition, options) {
    const currentThemes = this.state.themes;
    if (!currentThemes) throw new Error("No themes defined yet, use addThemes first to set your base themes");
    this._addedThemes.push({
      type: "childThemes",
      args: [childThemeDefinition, options]
    });
    const currentThemeNames = Object.keys(currentThemes), incomingThemeNames = Object.keys(childThemeDefinition), namesWithDefinitions = currentThemeNames.flatMap((prefix) => {
      const avoidNestingWithin = options?.avoidNestingWithin;
      return avoidNestingWithin && avoidNestingWithin.some((avoidName) => prefix.startsWith(avoidName) || prefix.endsWith(avoidName)) ? [] : incomingThemeNames.map((subName) => {
        const fullName = `${prefix}_${subName}`, definition = childThemeDefinition[subName];
        return "avoidNestingWithin" in definition && definition.avoidNestingWithin.some((name) => prefix.startsWith(name) || prefix.endsWith(name)) ? null : [fullName, definition];
      }).filter(Boolean);
    }), childThemes = Object.fromEntries(namesWithDefinitions), next = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...childThemes
    };
    return this.state.themes = next, this;
  }
  build() {
    if (!this.state.themes) return {};
    const out = {}, maskedThemes = [];
    for (const themeName in this.state.themes) {
      const nameParts = themeName.split("_"), parentName = nameParts.slice(0, nameParts.length - 1).join("_"), definitions = this.state.themes[themeName], themeDefinition = Array.isArray(definitions) ? (() => {
        const found = definitions.find(
          // endWith match stronger than startsWith
          (d) => d.parent ? parentName.endsWith(d.parent) || parentName.startsWith(d.parent) : true
        );
        return found || null;
      })() : definitions;
      if (themeDefinition) if ("theme" in themeDefinition) out[themeName] = themeDefinition.theme;
      else if ("mask" in themeDefinition) maskedThemes.push({
        parentName,
        themeName,
        mask: themeDefinition
      });
      else {
        let {
          palette: paletteName = "",
          template: templateName,
          ...options
        } = themeDefinition;
        const parentDefinition = this.state.themes[parentName];
        if (!this.state.palettes) throw new Error(`No palettes defined for theme with palette expected: ${themeName}`);
        let palette = this.state.palettes[paletteName || ""], attemptParentName = `${parentName}_${paletteName}`;
        for (; !palette && attemptParentName; ) attemptParentName in this.state.palettes ? (palette = this.state.palettes[attemptParentName], paletteName = attemptParentName) : attemptParentName = attemptParentName.split("_").slice(0, -1).join("_");
        if (!palette) {
          const msg = process.env.NODE_ENV !== "production" ? `: ${themeName}: ${paletteName}
          Definition: ${JSON.stringify(themeDefinition)}
          Parent: ${JSON.stringify(parentDefinition)}
          Potential: (${Object.keys(this.state.palettes).join(", ")})` : "";
          throw new Error(`No palette for theme${msg}`);
        }
        const template = this.state.templates?.[templateName] ?? // fall back to finding the scheme specific on if it exists
        this.state.templates?.[`${nameParts[0]}_${templateName}`];
        if (!template) throw new Error(`No template for theme ${themeName}: ${templateName} in templates:
- ${Object.keys(this.state.templates || {}).join(`
 - `)}`);
        out[themeName] = createThemeWithPalettes(this.state.palettes, paletteName, template, options, themeName, true);
      }
    }
    for (const {
      mask,
      themeName,
      parentName
    } of maskedThemes) {
      const parent = out[parentName];
      if (!parent) continue;
      const {
        mask: maskName,
        ...options
      } = mask;
      let maskFunction = this.state.masks?.[maskName];
      if (!maskFunction) throw new Error(`No mask ${maskName}`);
      const parentTheme = this.state.themes[parentName];
      if (parentTheme && "childOptions" in parentTheme) {
        const {
          mask: mask2,
          ...childOpts
        } = parentTheme.childOptions;
        mask2 && (maskFunction = this.state.masks?.[mask2]), Object.assign(options, childOpts);
      }
      out[themeName] = applyMask(parent, maskFunction, options, parentName, themeName);
    }
    return out;
  }
};
function createThemeBuilder() {
  return new ThemeBuilder({});
}
__name(createThemeBuilder, "createThemeBuilder");

// ../../node_modules/color2k/dist/index.exports.import.es.mjs
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
__name(guard, "guard");
var ColorError = class extends Error {
  static {
    __name(this, "ColorError");
  }
  constructor(color2) {
    super(`Failed to parse color: "${color2}"`);
  }
};
var ColorError$1 = ColorError;
function parseToRgba(color2) {
  if (typeof color2 !== "string") throw new ColorError$1(color2);
  if (color2.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let normalizedColor = color2.trim();
  normalizedColor = namedColorRegex.test(color2) ? nameToHex(color2) : color2;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s) throw new ColorError$1(color2);
    if (guard(0, 100, l) !== l) throw new ColorError$1(color2);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color2);
}
__name(parseToRgba, "parseToRgba");
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return (hash2 >>> 0) % 2341;
}
__name(hash, "hash");
var colorToInt = /* @__PURE__ */ __name((x) => parseInt(x.replace(/_/g, ""), 36), "colorToInt");
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color2) {
  const normalizedColorName = color2.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result) throw new ColorError$1(color2);
  return `#${result}`;
}
__name(nameToHex, "nameToHex");
var r = /* @__PURE__ */ __name((str, amount) => Array.from(Array(amount)).map(() => str).join(""), "r");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = /* @__PURE__ */ __name((color2) => {
  return Math.round(color2 * 255);
}, "roundColor");
var hslToRgb = /* @__PURE__ */ __name((hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red3 = 0;
  let green3 = 0;
  let blue3 = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red3 = chroma;
    green3 = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red3 = secondComponent;
    green3 = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green3 = chroma;
    blue3 = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green3 = secondComponent;
    blue3 = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red3 = secondComponent;
    blue3 = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red3 = chroma;
    blue3 = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red3 + lightnessModification;
  const finalGreen = green3 + lightnessModification;
  const finalBlue = blue3 + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
}, "hslToRgb");
function parseToHsla(color2) {
  const [red3, green3, blue3, alpha] = parseToRgba(color2).map((value, index) => (
    // 3rd index is alpha channel which is already normalized
    index === 3 ? value : value / 255
  ));
  const max = Math.max(red3, green3, blue3);
  const min = Math.min(red3, green3, blue3);
  const lightness = (max + min) / 2;
  if (max === min) return [0, 0, lightness, alpha];
  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  const hue = 60 * (red3 === max ? (green3 - blue3) / delta + (green3 < blue3 ? 6 : 0) : green3 === max ? (blue3 - red3) / delta + 2 : (red3 - green3) / delta + 4);
  return [hue, saturation, lightness, alpha];
}
__name(parseToHsla, "parseToHsla");
function hsla(hue, saturation, lightness, alpha) {
  return `hsla(${(hue % 360).toFixed()}, ${guard(0, 100, saturation * 100).toFixed()}%, ${guard(0, 100, lightness * 100).toFixed()}%, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
__name(hsla, "hsla");

// ../../node_modules/@tamagui/theme-builder/dist/esm/helpers.mjs
var objectKeys = /* @__PURE__ */ __name((obj) => Object.keys(obj), "objectKeys");
function objectFromEntries2(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries2, "objectFromEntries");

// ../../node_modules/@tamagui/theme-builder/dist/esm/defaultTemplates.mjs
var getTemplates = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates("light"), darkTemplates = getBaseTemplates("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface12 = {
    ...baseColors,
    background: base.background + 1,
    backgroundHover: base.backgroundHover + 1,
    backgroundPress: base.backgroundPress + 1,
    backgroundFocus: base.backgroundFocus + 1,
    borderColor: base.borderColor + 1,
    borderColorHover: base.borderColorHover + 1,
    borderColorFocus: base.borderColorFocus + 1,
    borderColorPress: base.borderColorPress + 1
  }, surface22 = {
    ...baseColors,
    background: base.background + 2,
    backgroundHover: base.backgroundHover + 2,
    backgroundPress: base.backgroundPress + 2,
    backgroundFocus: base.backgroundFocus + 2,
    borderColor: base.borderColor + 2,
    borderColorHover: base.borderColorHover + 2,
    borderColorFocus: base.borderColorFocus + 2,
    borderColorPress: base.borderColorPress + 2
  }, surface32 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1: surface12,
    surface2: surface22,
    surface3: surface32,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplates = getTemplates();

// ../../node_modules/@tamagui/theme-builder/dist/esm/getThemeSuitePalettes.mjs
var paletteSize = 12;
var generateColorPalette = /* @__PURE__ */ __name(({
  palette: buildPalette,
  scheme
}) => {
  if (!buildPalette) return [];
  const {
    anchors
  } = buildPalette;
  let palette = [];
  const add = /* @__PURE__ */ __name((h, s, l) => {
    palette.push(hsla(h, s, l, 1));
  }, "add"), numAnchors = Object.keys(anchors).length;
  for (const [anchorIndex, anchor] of anchors.entries()) {
    const [h, s, l] = [anchor.hue[scheme], anchor.sat[scheme], anchor.lum[scheme]];
    if (anchorIndex !== 0) {
      const lastAnchor = anchors[anchorIndex - 1], steps = anchor.index - lastAnchor.index, lastHue = lastAnchor.hue[scheme], lastSat = lastAnchor.sat[scheme], lastLum = lastAnchor.lum[scheme], stepHue = (lastHue - h) / steps, stepSat = (lastSat - s) / steps, stepLum = (lastLum - l) / steps;
      for (let step = lastAnchor.index + 1; step < anchor.index; step++) {
        const str = anchor.index - step;
        add(h + stepHue * str, s + stepSat * str, l + stepLum * str);
      }
    }
    if (add(h, s, l), anchorIndex === numAnchors - 1 && palette.length < paletteSize) for (let step = anchor.index + 1; step < paletteSize; step++) add(h, s, l);
  }
  const background = palette[0], foreground = palette[palette.length - 1], transparentValues = [background, foreground].map((color2) => {
    const [h, s, l] = parseToHsla(color2);
    return [hsla(h, s, l, 0), hsla(h, s, l, 0.2), hsla(h, s, l, 0.4), hsla(h, s, l, 0.6), hsla(h, s, l, 0.8)];
  }), reverseForeground = [...transparentValues[1]].reverse();
  return palette = [...transparentValues[0], ...palette, ...reverseForeground], palette;
}, "generateColorPalette");
function getThemeSuitePalettes(palette) {
  return {
    light: generateColorPalette({
      palette,
      scheme: "light"
    }),
    dark: generateColorPalette({
      palette,
      scheme: "dark"
    })
  };
}
__name(getThemeSuitePalettes, "getThemeSuitePalettes");

// ../../node_modules/@tamagui/theme-builder/dist/esm/createThemes.mjs
var defaultPalettes = createPalettes(getThemesPalettes({
  base: {
    palette: ["#fff", "#000"]
  },
  accent: {
    palette: ["#ff0000", "#ff9999"]
  }
}));
function getSchemePalette(colors) {
  return {
    light: colors,
    dark: [...colors].reverse()
  };
}
__name(getSchemePalette, "getSchemePalette");
function getAnchors(palette) {
  const numItems = palette.light.length;
  return palette.light.map((lcolor, index) => {
    const dcolor = palette.dark[index], [lhue, lsat, llum] = parseToHsla(lcolor), [dhue, dsat, dlum] = parseToHsla(dcolor);
    return {
      index: spreadIndex(11, numItems, index),
      hue: {
        light: lhue,
        dark: dhue
      },
      sat: {
        light: lsat,
        dark: dsat
      },
      lum: {
        light: llum,
        dark: dlum
      }
    };
  });
}
__name(getAnchors, "getAnchors");
function spreadIndex(maxIndex, numItems, index) {
  return Math.round(index / (numItems - 1) * maxIndex);
}
__name(spreadIndex, "spreadIndex");
function coerceSimplePaletteToSchemePalette(def) {
  return Array.isArray(def) ? getSchemePalette(def) : def;
}
__name(coerceSimplePaletteToSchemePalette, "coerceSimplePaletteToSchemePalette");
function getThemesPalettes(props) {
  const base = coerceSimplePaletteToSchemePalette(props.base.palette), accent = props.accent ? coerceSimplePaletteToSchemePalette(props.accent.palette) : null, baseAnchors = getAnchors(base);
  function getSubThemesPalettes(defs) {
    return Object.fromEntries(Object.entries(defs).map(([key, value]) => [key, {
      name: key,
      anchors: value.palette ? getAnchors(coerceSimplePaletteToSchemePalette(value.palette)) : baseAnchors
    }]));
  }
  __name(getSubThemesPalettes, "getSubThemesPalettes");
  return {
    base: {
      name: "base",
      anchors: baseAnchors
    },
    ...accent && {
      accent: {
        name: "accent",
        anchors: getAnchors(accent)
      }
    },
    ...props.childrenThemes && getSubThemesPalettes(props.childrenThemes),
    ...props.grandChildrenThemes && getSubThemesPalettes(props.grandChildrenThemes)
  };
}
__name(getThemesPalettes, "getThemesPalettes");
function createPalettes(palettes) {
  const accentPalettes = palettes.accent ? getThemeSuitePalettes(palettes.accent) : null, basePalettes = getThemeSuitePalettes(palettes.base);
  return Object.fromEntries(Object.entries(palettes).flatMap(([name, palette]) => {
    const palettes2 = getThemeSuitePalettes(palette), oppositePalettes = name.startsWith("accent") ? basePalettes : accentPalettes || basePalettes;
    if (!oppositePalettes) return [];
    const oppositeLight = oppositePalettes.light, oppositeDark = oppositePalettes.dark, bgOffset = 7;
    return [[name === "base" ? "light" : `light_${name}`, [oppositeLight[bgOffset], ...palettes2.light, oppositeLight[oppositeLight.length - bgOffset - 1]]], [name === "base" ? "dark" : `dark_${name}`, [oppositeDark[oppositeDark.length - bgOffset - 1], ...palettes2.dark, oppositeDark[bgOffset]]]];
  }));
}
__name(createPalettes, "createPalettes");

// ../../node_modules/@tamagui/theme-builder/dist/esm/defaultTemplatesStronger.mjs
var getTemplates2 = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates2("light"), darkTemplates = getBaseTemplates2("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates2 = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface12 = {
    ...baseColors,
    background: base.background + 2,
    backgroundHover: base.backgroundHover + 2,
    backgroundPress: base.backgroundPress + 2,
    backgroundFocus: base.backgroundFocus + 2,
    borderColor: base.borderColor + 2,
    borderColorHover: base.borderColorHover + 2,
    borderColorFocus: base.borderColorFocus + 2,
    borderColorPress: base.borderColorPress + 2
  }, surface22 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, surface32 = {
    ...baseColors,
    background: base.background + 4,
    backgroundHover: base.backgroundHover + 4,
    backgroundPress: base.backgroundPress + 4,
    backgroundFocus: base.backgroundFocus + 4,
    borderColor: base.borderColor + 4,
    borderColorHover: base.borderColorHover + 4,
    borderColorFocus: base.borderColorFocus + 4,
    borderColorPress: base.borderColorPress + 4
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1: surface12,
    surface2: surface22,
    surface3: surface32,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplatesStronger = getTemplates2();

// ../../node_modules/@tamagui/theme-builder/dist/esm/defaultTemplatesStrongest.mjs
var getTemplates3 = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates3("light"), darkTemplates = getBaseTemplates3("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates3 = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface12 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, surface22 = {
    ...baseColors,
    background: base.background + 4,
    backgroundHover: base.backgroundHover + 4,
    backgroundPress: base.backgroundPress + 4,
    backgroundFocus: base.backgroundFocus + 4,
    borderColor: base.borderColor + 4,
    borderColorHover: base.borderColorHover + 4,
    borderColorFocus: base.borderColorFocus + 4,
    borderColorPress: base.borderColorPress + 4
  }, surface32 = {
    ...baseColors,
    background: base.background + 5,
    backgroundHover: base.backgroundHover + 5,
    backgroundPress: base.backgroundPress + 5,
    backgroundFocus: base.backgroundFocus + 5,
    borderColor: base.borderColor + 5,
    borderColorHover: base.borderColorHover + 5,
    borderColorFocus: base.borderColorFocus + 5,
    borderColorPress: base.borderColorPress + 5
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1: surface12,
    surface2: surface22,
    surface3: surface32,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplatesStrongest = getTemplates3();

// ../../node_modules/@tamagui/theme-builder/dist/esm/masks.mjs
var masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({
    strength: 2
  }),
  soften3: createSoftenMask({
    strength: 3
  }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
  inverseSoften: combineMasks(createInverseMask(), createSoftenMask({
    strength: 2
  })),
  inverseSoften2: combineMasks(createInverseMask(), createSoftenMask({
    strength: 3
  })),
  inverseSoften3: combineMasks(createInverseMask(), createSoftenMask({
    strength: 4
  })),
  inverseStrengthen2: combineMasks(createInverseMask(), createStrengthenMask({
    strength: 2
  })),
  strengthenButSoftenBorder: createMask((template, options) => {
    const stronger = createStrengthenMask().mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...stronger,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  soften2Border1: createMask((template, options) => {
    const softer2 = createSoftenMask({
      strength: 2
    }).mask(template, options), softer1 = createSoftenMask({
      strength: 1
    }).mask(template, options);
    return {
      ...softer2,
      borderColor: softer1.borderColor,
      borderColorHover: softer1.borderColorHover,
      borderColorPress: softer1.borderColorPress,
      borderColorFocus: softer1.borderColorFocus
    };
  }),
  soften3FlatBorder: createMask((template, options) => {
    const borderMask = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...createSoftenMask({
        strength: 3
      }).mask(template, options),
      borderColor: borderMask.borderColor,
      borderColorHover: borderMask.borderColorHover,
      borderColorPress: borderMask.borderColorPress,
      borderColorFocus: borderMask.borderColorFocus
    };
  }),
  softenBorder: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  softenBorder2: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  })
};

// ../../node_modules/@tamagui/themes/dist/esm/v3-themes.mjs
var import_web = require("@tamagui/core");

// ../../node_modules/@tamagui/themes/dist/esm/utils.mjs
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]));
}
__name(postfixObjKeys, "postfixObjKeys");
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");
function objectKeys2(obj) {
  return Object.keys(obj);
}
__name(objectKeys2, "objectKeys");

// ../../node_modules/@tamagui/themes/dist/esm/v3-tokens.mjs
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [k, sizeToSpace(v)]);
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = {
  radius,
  zIndex,
  space,
  size
};

// ../../node_modules/@tamagui/themes/dist/esm/v3-themes.mjs
var colorTokens = {
  light: {
    blue: blue2,
    gray: gray2,
    green: green2,
    orange: orange2,
    pink: pink2,
    purple: purple2,
    red: red2,
    yellow: yellow2
  },
  dark: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow
  }
};
var lightShadowColor = "rgba(0,0,0,0.04)";
var lightShadowColorStrong = "rgba(0,0,0,0.085)";
var darkShadowColor = "rgba(0,0,0,0.2)";
var darkShadowColorStrong = "rgba(0,0,0,0.3)";
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  white0: "rgba(255,255,255,0)",
  white075: "rgba(255,255,255,0.75)",
  white05: "rgba(255,255,255,0.5)",
  white025: "rgba(255,255,255,0.25)",
  black0: "rgba(10,10,10,0)",
  black075: "rgba(10,10,10,0.75)",
  black05: "rgba(10,10,10,0.5)",
  black025: "rgba(10,10,10,0.25)",
  white1: "#fff",
  white2: "#f8f8f8",
  white3: "hsl(0, 0%, 96.3%)",
  white4: "hsl(0, 0%, 94.1%)",
  white5: "hsl(0, 0%, 92.0%)",
  white6: "hsl(0, 0%, 90.0%)",
  white7: "hsl(0, 0%, 88.5%)",
  white8: "hsl(0, 0%, 81.0%)",
  white9: "hsl(0, 0%, 56.1%)",
  white10: "hsl(0, 0%, 50.3%)",
  white11: "hsl(0, 0%, 42.5%)",
  white12: "hsl(0, 0%, 9.0%)",
  black1: "#050505",
  black2: "#151515",
  black3: "#191919",
  black4: "#232323",
  black5: "#282828",
  black6: "#323232",
  black7: "#424242",
  black8: "#494949",
  black9: "#545454",
  black10: "#626262",
  black11: "#a5a5a5",
  black12: "#fff",
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
var defaultPalettes2 = (() => {
  const transparent = /* @__PURE__ */ __name((hsl, opacity = 0) => hsl.replace("%)", `%, ${opacity})`).replace("hsl(", "hsla("), "transparent"), getColorPalette = /* @__PURE__ */ __name((colors, accentColors) => {
    const colorPalette = Object.values(colors), colorI = colorPalette.length - 4, accentPalette = Object.values(accentColors), accentBackground = accentPalette[0], accentColor = accentPalette[accentPalette.length - 1];
    return [accentBackground, transparent(colorPalette[0], 0), transparent(colorPalette[0], 0.25), transparent(colorPalette[0], 0.5), transparent(colorPalette[0], 0.75), ...colorPalette, transparent(colorPalette[colorI], 0.75), transparent(colorPalette[colorI], 0.5), transparent(colorPalette[colorI], 0.25), transparent(colorPalette[colorI], 0), accentColor];
  }, "getColorPalette"), brandColor = {
    light: color.blue4Light,
    dark: color.blue4Dark
  }, lightPalette = [brandColor.light, color.white0, color.white025, color.white05, color.white075, color.white1, color.white2, color.white3, color.white4, color.white5, color.white6, color.white7, color.white8, color.white9, color.white10, color.white11, color.white12, color.black075, color.black05, color.black025, color.black0, brandColor.dark], darkPalette = [brandColor.dark, color.black0, color.black025, color.black05, color.black075, color.black1, color.black2, color.black3, color.black4, color.black5, color.black6, color.black7, color.black8, color.black9, color.black10, color.black11, color.black12, color.white075, color.white05, color.white025, color.white0, brandColor.light], lightColorNames = objectKeys2(colorTokens.light), lightPalettes = objectFromEntries(lightColorNames.map((key, index) => [`light_${key}`, getColorPalette(colorTokens.light[key], colorTokens.light[lightColorNames[(index + 1) % lightColorNames.length]])])), darkColorNames = objectKeys2(colorTokens.dark), darkPalettes = objectFromEntries(darkColorNames.map((key, index) => [`dark_${key}`, getColorPalette(colorTokens.dark[key], colorTokens.light[darkColorNames[(index + 1) % darkColorNames.length]])])), colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };
  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes
  };
})();
var getTemplates4 = /* @__PURE__ */ __name(() => {
  const getBaseTemplates4 = /* @__PURE__ */ __name((scheme) => {
    const isLight = scheme === "light", bgIndex = 5, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, base = {
      accentBackground: 0,
      accentColor: -0,
      background0: 1,
      background025: 2,
      background05: 3,
      background075: 4,
      color1: bgIndex,
      color2: bgIndex + 1,
      color3: bgIndex + 2,
      color4: bgIndex + 3,
      color5: bgIndex + 4,
      color6: bgIndex + 5,
      color7: bgIndex + 6,
      color8: bgIndex + 7,
      color9: bgIndex + 8,
      color10: bgIndex + 9,
      color11: bgIndex + 10,
      color12: bgIndex + 11,
      color0: -1,
      color025: -2,
      color05: -3,
      color075: -4,
      // the background, color, etc keys here work like generics - they make it so you
      // can publish components for others to use without mandating a specific color scale
      // the @tamagui/button Button component looks for `$background`, so you set the
      // dark_red_Button theme to have a stronger background than the dark_red theme.
      background: bgIndex,
      backgroundHover: bgIndex + lighten,
      // always lighten on hover no matter the scheme
      backgroundPress: bgIndex + darken,
      // always darken on press no matter the theme
      backgroundFocus: bgIndex + darken,
      borderColor,
      borderColorHover: borderColor + lighten,
      borderColorPress: borderColor + darken,
      borderColorFocus: borderColor,
      color: -bgIndex,
      colorHover: -bgIndex - 1,
      colorPress: -bgIndex,
      colorFocus: -bgIndex - 1,
      colorTransparent: -1,
      placeholderColor: -bgIndex - 3,
      outlineColor: -2
    }, surface12 = {
      background: base.background + 1,
      backgroundHover: base.backgroundHover + 1,
      backgroundPress: base.backgroundPress + 1,
      backgroundFocus: base.backgroundFocus + 1,
      borderColor: base.borderColor + 1,
      borderColorHover: base.borderColorHover + 1,
      borderColorFocus: base.borderColorFocus + 1,
      borderColorPress: base.borderColorPress + 1
    }, surface22 = {
      background: base.background + 2,
      backgroundHover: base.backgroundHover + 2,
      backgroundPress: base.backgroundPress + 2,
      backgroundFocus: base.backgroundFocus + 2,
      borderColor: base.borderColor + 2,
      borderColorHover: base.borderColorHover + 2,
      borderColorFocus: base.borderColorFocus + 2,
      borderColorPress: base.borderColorPress + 2
    }, surface32 = {
      background: base.background + 3,
      backgroundHover: base.backgroundHover + 3,
      backgroundPress: base.backgroundPress + 3,
      backgroundFocus: base.backgroundFocus + 3,
      borderColor: base.borderColor + 3,
      borderColorHover: base.borderColorHover + 3,
      borderColorFocus: base.borderColorFocus + 3,
      borderColorPress: base.borderColorPress + 3
    }, surfaceActiveBg = {
      background: base.background + 5,
      backgroundHover: base.background + 5,
      backgroundPress: base.backgroundPress + 5,
      backgroundFocus: base.backgroundFocus + 5
    }, surfaceActive = {
      ...surfaceActiveBg,
      // match border to background when active
      borderColor: surfaceActiveBg.background,
      borderColorHover: surfaceActiveBg.backgroundHover,
      borderColorFocus: surfaceActiveBg.backgroundFocus,
      borderColorPress: surfaceActiveBg.backgroundPress
    }, inverseSurface12 = {
      color: surface12.background,
      colorHover: surface12.backgroundHover,
      colorPress: surface12.backgroundPress,
      colorFocus: surface12.backgroundFocus,
      background: base.color,
      backgroundHover: base.colorHover,
      backgroundPress: base.colorPress,
      backgroundFocus: base.colorFocus,
      borderColor: base.color - 2,
      borderColorHover: base.color - 3,
      borderColorFocus: base.color - 4,
      borderColorPress: base.color - 5
    }, inverseActive = {
      ...inverseSurface12,
      background: base.color - 2,
      backgroundHover: base.colorHover - 2,
      backgroundPress: base.colorPress - 2,
      backgroundFocus: base.colorFocus - 2,
      borderColor: base.color - 2 - 2,
      borderColorHover: base.color - 3 - 2,
      borderColorFocus: base.color - 4 - 2,
      borderColorPress: base.color - 5 - 2
    }, alt1 = {
      color: base.color - 1,
      colorHover: base.colorHover - 1,
      colorPress: base.colorPress - 1,
      colorFocus: base.colorFocus - 1
    }, alt2 = {
      color: base.color - 2,
      colorHover: base.colorHover - 2,
      colorPress: base.colorPress - 2,
      colorFocus: base.colorFocus - 2
    };
    return {
      base,
      alt1,
      alt2,
      surface1: surface12,
      surface2: surface22,
      surface3: surface32,
      inverseSurface1: inverseSurface12,
      inverseActive,
      surfaceActive
    };
  }, "getBaseTemplates"), lightTemplates = getBaseTemplates4("light"), darkTemplates = getBaseTemplates4("dark");
  return {
    ...objectFromEntries(objectKeys2(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries(objectKeys2(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var defaultTemplates2 = getTemplates4();
var shadows = {
  light: {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor
  },
  dark: {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor
  }
};
var nonInherited = {
  light: {
    ...lightColors,
    ...shadows.light
  },
  dark: {
    ...darkColors,
    ...shadows.dark
  }
};
var overlayThemeDefinitions = [{
  parent: "light",
  theme: {
    background: "rgba(0,0,0,0.5)"
  }
}, {
  parent: "dark",
  theme: {
    background: "rgba(0,0,0,0.8)"
  }
}];
var inverseSurface1 = [{
  parent: "active",
  template: "inverseActive"
}, {
  parent: "",
  template: "inverseSurface1"
}];
var surface1 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface1"
}];
var surface2 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface2"
}];
var surface3 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface3"
}];
var defaultComponentThemes2 = {
  ListItem: {
    template: "surface1"
  },
  SelectTrigger: surface1,
  Card: surface1,
  Button: surface3,
  Checkbox: surface2,
  Switch: surface2,
  SwitchThumb: inverseSurface1,
  TooltipContent: surface2,
  Progress: {
    template: "surface1"
  },
  RadioGroupItem: surface2,
  TooltipArrow: {
    template: "surface1"
  },
  SliderTrackActive: {
    template: "surface3"
  },
  SliderTrack: {
    template: "surface1"
  },
  SliderThumb: inverseSurface1,
  Tooltip: inverseSurface1,
  ProgressIndicator: inverseSurface1,
  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,
  Input: surface1,
  TextArea: surface1
};
var defaultSubThemes = {
  alt1: {
    template: "alt1"
  },
  alt2: {
    template: "alt2"
  },
  active: {
    template: "surface3"
  },
  surface1: {
    template: "surface1"
  },
  surface2: {
    template: "surface2"
  },
  surface3: {
    template: "surface3"
  },
  surface4: {
    template: "surfaceActive"
  }
};
var themeBuilder = createThemeBuilder().addPalettes(defaultPalettes2).addTemplates(defaultTemplates2).addThemes({
  light: {
    template: "base",
    palette: "light",
    nonInheritedValues: nonInherited.light
  },
  dark: {
    template: "base",
    palette: "dark",
    nonInheritedValues: nonInherited.dark
  }
}).addChildThemes({
  orange: {
    palette: "orange",
    template: "base"
  },
  yellow: {
    palette: "yellow",
    template: "base"
  },
  green: {
    palette: "green",
    template: "base"
  },
  blue: {
    palette: "blue",
    template: "base"
  },
  purple: {
    palette: "purple",
    template: "base"
  },
  pink: {
    palette: "pink",
    template: "base"
  },
  red: {
    palette: "red",
    template: "base"
  },
  gray: {
    palette: "gray",
    template: "base"
  }
}).addChildThemes(defaultSubThemes).addComponentThemes(defaultComponentThemes2, {
  avoidNestingWithin: ["alt1", "alt2", "surface1", "surface2", "surface3", "surface4"]
});
var themesIn = themeBuilder.build();
var themes = themesIn;
var tokens2 = (0, import_web.createTokens)({
  color,
  ...tokens
});

// ../../node_modules/@tamagui/constants/dist/esm/constants.mjs
var import_react = require("react");
var import_react2 = require("react");
var isWeb = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb && !isWindowDefined;
var isClient = isWeb && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? import_react.useEffect : import_react.useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PresenceContext = React.createContext(null);
var ResetPresence = /* @__PURE__ */ __name((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
  value: null,
  children: props.children
}), "ResetPresence");

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
var React2 = __toESM(require("react"), 1);
function usePresence() {
  const context = React2.useContext(PresenceContext);
  if (!context) return [true, null, context];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  return React2.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete?.(id), context] : [true, void 0, context];
}
__name(usePresence, "usePresence");

// ../../node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
var import_web2 = require("@tamagui/core");
var import_react3 = __toESM(require("react"), 1);
function createAnimations(animations) {
  const reactionListeners = /* @__PURE__ */ new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    supportsCSSVars: true,
    useAnimatedNumber(initial) {
      const [val, setVal] = import_react3.default.useState(initial), [onFinish, setOnFinish] = (0, import_react3.useState)();
      return useIsomorphicLayoutEffect(() => {
        onFinish && (onFinish?.(), setOnFinish(void 0));
      }, [onFinish]), {
        getInstance() {
          return setVal;
        },
        getValue() {
          return val;
        },
        setValue(next, config2, onFinish2) {
          setVal(next), setOnFinish(onFinish2);
        },
        stop() {
        }
      };
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      import_react3.default.useEffect(() => {
        const instance = value.getInstance();
        let queue = reactionListeners.get(instance);
        if (!queue) {
          const next = /* @__PURE__ */ new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), () => {
          queue?.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    useAnimations: /* @__PURE__ */ __name(({
      props,
      presence,
      style,
      componentState,
      stateRef
    }) => {
      const isEntering = !!componentState.unmounted, isExiting = presence?.[0] === false, sendExitComplete = presence?.[1], [animationKey, animationConfig] = Array.isArray(props.animation) ? props.animation : [props.animation], animation = animations[animationKey], keys = props.animateOnly ?? ["all"];
      return useIsomorphicLayoutEffect(() => {
        const host = stateRef.current.host;
        if (!sendExitComplete || !isExiting || !host) return;
        const node = host, onFinishAnimation = /* @__PURE__ */ __name(() => {
          sendExitComplete?.();
        }, "onFinishAnimation");
        return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onFinishAnimation), () => {
          node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onFinishAnimation);
        };
      }, [sendExitComplete, isExiting]), animation && (Array.isArray(style.transform) && (style.transform = (0, import_web2.transformsToString)(style.transform)), style.transition = keys.map((key) => {
        const override = animations[animationConfig?.[key]] ?? animation;
        return `${key} ${override}`;
      }).join(", ")), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("CSS animation", {
        props,
        animations,
        animation,
        animationKey,
        style,
        isEntering,
        isExiting
      }), animation ? {
        style,
        className: isEntering ? "t_unmounted" : ""
      } : null;
    }, "useAnimations")
  };
}
__name(createAnimations, "createAnimations");

// ../../node_modules/@tamagui/config/dist/esm/animationsCSS.mjs
var smoothBezier = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
var animationsCSS = createAnimations({
  "75ms": "ease-in 75ms",
  "100ms": "ease-in 100ms",
  "200ms": "ease-in 200ms",
  bouncy: "ease-in 200ms",
  superBouncy: "ease-in 500ms",
  lazy: "ease-in 1000ms",
  medium: "ease-in 300ms",
  slow: "ease-in 500ms",
  quick: `${smoothBezier} 400ms`,
  quicker: `${smoothBezier} 300ms`,
  quickest: `${smoothBezier} 200ms`,
  tooltip: "ease-in 400ms"
});

// ../../node_modules/@tamagui/font-inter/dist/esm/index.mjs
var import_core = require("@tamagui/core");
var createInterFont = /* @__PURE__ */ __name((font = {}, {
  sizeLineHeight = /* @__PURE__ */ __name((size3) => size3 + 10, "sizeLineHeight"),
  sizeSize = /* @__PURE__ */ __name((size3) => size3 * 1, "sizeSize")
} = {}) => {
  const size3 = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(([k, v]) => [k, sizeSize(+v)]));
  return (0, import_core.createFont)({
    family: import_core.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
    lineHeight: Object.fromEntries(Object.entries(size3).map(([k, v]) => [k, sizeLineHeight((0, import_core.getVariableValue)(v))])),
    weight: {
      4: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size: size3
  });
}, "createInterFont");
var defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134
};

// ../../node_modules/@tamagui/font-silkscreen/dist/esm/index.mjs
var import_core2 = require("@tamagui/core");
var createSilkscreenFont = /* @__PURE__ */ __name((font = {}) => (0, import_core2.createFont)({
  family: import_core2.isWeb ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen",
  size: size2,
  lineHeight: Object.fromEntries(Object.entries(font.size || size2).map(([k, v]) => [k, typeof v == "number" ? Math.round(v * 1.2 + 6) : v])),
  weight: {
    4: "300"
  },
  letterSpacing: {
    4: 1,
    5: 3,
    6: 3,
    9: -2,
    10: -3,
    12: -4
  },
  ...font
}), "createSilkscreenFont");
var size2 = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 16,
  7: 18,
  8: 21,
  9: 28,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};

// ../../node_modules/@tamagui/config/dist/esm/createGenericFont.mjs
var import_web3 = require("@tamagui/core");
var genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};
function createGenericFont(family, font = {}, {
  sizeLineHeight = /* @__PURE__ */ __name((val) => val * 1.35, "sizeLineHeight")
} = {}) {
  const size3 = font.size || genericFontSizes;
  return (0, import_web3.createFont)({
    family,
    size: size3,
    lineHeight: Object.fromEntries(Object.entries(size3).map(([k, v]) => [k, sizeLineHeight(+v)])),
    weight: {
      0: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font
  });
}
__name(createGenericFont, "createGenericFont");

// ../../node_modules/@tamagui/config/dist/esm/fonts.mjs
var silkscreenFont = createSilkscreenFont();
var headingFont = createInterFont({
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    12: -2,
    14: -3,
    15: -4
  },
  // for native
  face: {
    700: {
      normal: "InterBold"
    },
    800: {
      normal: "InterBold"
    },
    900: {
      normal: "InterBold"
    }
  }
}, {
  sizeLineHeight: /* @__PURE__ */ __name((size3) => Math.round(size3 * 1.1 + (size3 < 30 ? 10 : 5)), "sizeLineHeight")
});
var bodyFont = createInterFont({
  weight: {
    1: "400",
    7: "600"
  }
}, {
  sizeSize: /* @__PURE__ */ __name((size3) => Math.round(size3), "sizeSize"),
  sizeLineHeight: /* @__PURE__ */ __name((size3) => Math.round(size3 * 1.1 + (size3 >= 12 ? 8 : 4)), "sizeLineHeight")
});
var monoFont = createGenericFont('"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace', {
  weight: {
    1: "500"
  },
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 22,
    9: 30,
    10: 42,
    11: 52,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 124
  }
}, {
  sizeLineHeight: /* @__PURE__ */ __name((x) => x * 1.5, "sizeLineHeight")
});
var fonts = {
  heading: headingFont,
  body: bodyFont,
  mono: monoFont,
  silkscreen: silkscreenFont
};

// ../../node_modules/@tamagui/config/dist/esm/media.mjs
var media = {
  // for site
  xl: {
    maxWidth: 1650
  },
  lg: {
    maxWidth: 1280
  },
  md: {
    maxWidth: 1020
  },
  sm: {
    maxWidth: 800
  },
  xs: {
    maxWidth: 660
  },
  xxs: {
    maxWidth: 390
  },
  gtXs: {
    minWidth: 661
  },
  gtSm: {
    minWidth: 801
  },
  gtMd: {
    minWidth: 1021
  },
  gtLg: {
    minWidth: 1281
  },
  gtXl: {
    minWidth: 1651
  }
};
var mediaQueryDefaultActive = {
  xl: true,
  lg: true,
  md: true,
  sm: true,
  xs: true,
  // false
  xxs: false
};

// ../../node_modules/@tamagui/config/dist/esm/v3.mjs
globalThis.global ||= globalThis;
var selectionStyles = /* @__PURE__ */ __name((theme) => theme.color5 ? {
  backgroundColor: theme.color5,
  color: theme.color11
} : null, "selectionStyles");
var themes2 = process.env.TAMAGUI_OPTIMIZE_THEMES === "true" ? {} : themes;
var config = {
  animations: animationsCSS,
  themes: themes2,
  media,
  shorthands,
  tokens: tokens2,
  fonts,
  selectionStyles,
  settings: {
    mediaQueryDefaultActive,
    defaultFont: "body",
    fastSchemeChange: true,
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true
  }
};

// ../../packages/ui/dist/index.js
var import_react4 = __toESM(require("react"), 1);
var import_lucide_react = __toESM(require_lucide_react(), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var interFont = createInterFont({
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 22,
    9: 30,
    10: 42,
    11: 52,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 124
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    1: "300",
    2: "400",
    3: "500",
    4: "600",
    5: "700",
    6: "800",
    7: "900"
  },
  color: {
    1: "$colorFocus",
    2: "$color"
  },
  letterSpacing: {
    1: 0,
    2: -0.15,
    3: -0.5,
    4: -0.75,
    5: -1,
    6: -1.5,
    7: -2,
    8: -2.5,
    9: -3,
    10: -3.5,
    11: -4,
    12: -4.5,
    13: -5,
    14: -5.5,
    15: -6
  },
  // for native only, alternate family based on weight/style
  face: {
    300: { normal: "InterLight", italic: "InterLight-Italic" },
    400: { normal: "Inter", italic: "Inter-Italic" },
    500: { normal: "InterMedium", italic: "InterMedium-Italic" },
    600: { normal: "InterSemiBold", italic: "InterSemiBold-Italic" },
    700: { normal: "InterBold", italic: "InterBold-Italic" },
    800: { normal: "InterExtraBold", italic: "InterExtraBold-Italic" },
    900: { normal: "InterBlack", italic: "InterBlack-Italic" }
  }
});
var customTokens = {
  color: {
    // Brand colors
    primary: "#3B82F6",
    primaryHover: "#2563EB",
    primaryActive: "#1D4ED8",
    primaryLight: "#DBEAFE",
    primaryDark: "#1E40AF",
    // Secondary colors
    secondary: "#6B7280",
    secondaryHover: "#4B5563",
    secondaryActive: "#374151",
    secondaryLight: "#F3F4F6",
    secondaryDark: "#1F2937",
    // Success colors
    success: "#10B981",
    successHover: "#059669",
    successActive: "#047857",
    successLight: "#D1FAE5",
    successDark: "#065F46",
    // Warning colors
    warning: "#F59E0B",
    warningHover: "#D97706",
    warningActive: "#B45309",
    warningLight: "#FEF3C7",
    warningDark: "#92400E",
    // Error colors
    error: "#EF4444",
    errorHover: "#DC2626",
    errorActive: "#B91C1C",
    errorLight: "#FEE2E2",
    errorDark: "#991B1B",
    // Info colors
    info: "#3B82F6",
    infoHover: "#2563EB",
    infoActive: "#1D4ED8",
    infoLight: "#DBEAFE",
    infoDark: "#1E40AF",
    // Neutral colors
    neutral50: "#F9FAFB",
    neutral100: "#F3F4F6",
    neutral200: "#E5E7EB",
    neutral300: "#D1D5DB",
    neutral400: "#9CA3AF",
    neutral500: "#6B7280",
    neutral600: "#4B5563",
    neutral700: "#374151",
    neutral800: "#1F2937",
    neutral900: "#111827",
    // Background colors
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9FAFB",
    backgroundTertiary: "#F3F4F6",
    backgroundOverlay: "rgba(0, 0, 0, 0.5)",
    // Text colors
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textTertiary: "#9CA3AF",
    textInverse: "#FFFFFF",
    textDisabled: "#D1D5DB",
    // Border colors
    borderPrimary: "#E5E7EB",
    borderSecondary: "#D1D5DB",
    borderFocus: "#3B82F6",
    borderError: "#EF4444",
    borderSuccess: "#10B981"
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
    full: "100%",
    auto: "auto"
  },
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 10,
    6: 12,
    7: 14,
    8: 16,
    9: 18,
    10: 20,
    12: 24,
    full: 1e3
  },
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: "auto"
  }
};
var media2 = {
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  xxl: { maxWidth: 1600 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: "none" },
  pointerCoarse: { pointer: "coarse" }
};
var tamaguiConfig = (0, import_core3.createTamagui)({
  ...config,
  tokens: {
    ...config.tokens,
    ...customTokens
  },
  fonts: {
    ...config.fonts,
    body: interFont,
    heading: interFont
  },
  media: media2,
  themes: {
    ...config.themes,
    // Custom light theme
    light: {
      ...config.themes.light,
      background: customTokens.color.backgroundPrimary,
      backgroundHover: customTokens.color.backgroundSecondary,
      backgroundPress: customTokens.color.backgroundTertiary,
      backgroundFocus: customTokens.color.backgroundSecondary,
      color: customTokens.color.textPrimary,
      colorHover: customTokens.color.textSecondary,
      colorPress: customTokens.color.textPrimary,
      colorFocus: customTokens.color.textPrimary,
      borderColor: customTokens.color.borderPrimary,
      borderColorHover: customTokens.color.borderSecondary,
      borderColorFocus: customTokens.color.borderFocus,
      placeholderColor: customTokens.color.textTertiary
    },
    // Custom dark theme
    dark: {
      ...config.themes.dark,
      background: customTokens.color.neutral900,
      backgroundHover: customTokens.color.neutral800,
      backgroundPress: customTokens.color.neutral700,
      backgroundFocus: customTokens.color.neutral800,
      color: customTokens.color.neutral100,
      colorHover: customTokens.color.neutral200,
      colorPress: customTokens.color.neutral100,
      colorFocus: customTokens.color.neutral100,
      borderColor: customTokens.color.neutral700,
      borderColorHover: customTokens.color.neutral600,
      borderColorFocus: customTokens.color.primary,
      placeholderColor: customTokens.color.neutral500
    }
  }
});
var StyledSpinnerContainer = (0, import_core3.styled)(import_core3.YStack, {
  name: "SpinnerContainer",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    size: {
      xs: {
        width: 16,
        height: 16
      },
      sm: {
        width: 20,
        height: 20
      },
      md: {
        width: 24,
        height: 24
      },
      lg: {
        width: 32,
        height: 32
      },
      xl: {
        width: 40,
        height: 40
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var StyledSpinnerIcon = (0, import_core3.styled)(import_core3.YStack, {
  name: "SpinnerIcon",
  variants: {
    variant: {
      default: {
        animation: "spin",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      },
      dots: {
        // Will be handled by custom component
      },
      pulse: {
        animation: "pulse",
        animationDuration: "1.5s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out"
      },
      bounce: {
        animation: "bounce",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out"
      },
      rotate: {
        animation: "spin",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out"
      },
      refresh: {
        animation: "spin",
        animationDuration: "1.5s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      }
    },
    speed: {
      slow: {
        animationDuration: "2s"
      },
      normal: {
        animationDuration: "1s"
      },
      fast: {
        animationDuration: "0.5s"
      }
    },
    size: {
      xs: {
        width: 16,
        height: 16
      },
      sm: {
        width: 20,
        height: 20
      },
      md: {
        width: 24,
        height: 24
      },
      lg: {
        width: 32,
        height: 32
      },
      xl: {
        width: 40,
        height: 40
      }
    }
  },
  defaultVariants: {
    variant: "default",
    speed: "normal",
    size: "md"
  }
});
var StyledDotsContainer = (0, import_core3.styled)(import_core3.YStack, {
  name: "DotsContainer",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$1"
});
var StyledDot = (0, import_core3.styled)(import_core3.YStack, {
  name: "Dot",
  borderRadius: "50%",
  backgroundColor: "$brandPrimary",
  variants: {
    size: {
      xs: {
        width: 3,
        height: 3
      },
      sm: {
        width: 4,
        height: 4
      },
      md: {
        width: 5,
        height: 5
      },
      lg: {
        width: 6,
        height: 6
      },
      xl: {
        width: 8,
        height: 8
      }
    },
    animationDelay: {
      0: {
        animationDelay: "0s"
      },
      1: {
        animationDelay: "0.1s"
      },
      2: {
        animationDelay: "0.2s"
      }
    }
  },
  animation: "pulse",
  animationDuration: "1.4s",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  defaultVariants: {
    size: "md"
  }
});
var StyledLabel = (0, import_core3.styled)(import_core3.YStack, {
  name: "SpinnerLabel",
  marginTop: "$2",
  variants: {
    size: {
      xs: {
        fontSize: "$1"
      },
      sm: {
        fontSize: "$2"
      },
      md: {
        fontSize: "$3"
      },
      lg: {
        fontSize: "$4"
      },
      xl: {
        fontSize: "$5"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var getIconComponent = /* @__PURE__ */ __name((variant) => {
  switch (variant) {
    case "rotate":
      return import_lucide_react.RotateCw;
    case "refresh":
      return import_lucide_react.RefreshCw;
    default:
      return import_lucide_react.Loader2;
  }
}, "getIconComponent");
var getSizeValue = /* @__PURE__ */ __name((size3) => {
  switch (size3) {
    case "xs":
      return 16;
    case "sm":
      return 20;
    case "md":
      return 24;
    case "lg":
      return 32;
    case "xl":
      return 40;
    default:
      return 24;
  }
}, "getSizeValue");
var DotsSpinner = /* @__PURE__ */ __name(({ size: size3, color: color2 }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledDotsContainer, { children: [0, 1, 2].map((index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledDot,
    {
      size: size3,
      animationDelay: index,
      style: color2 ? { backgroundColor: color2 } : {}
    },
    index
  )) });
}, "DotsSpinner");
var Spinner = (0, import_react4.forwardRef)(({
  variant = "default",
  size: size3 = "md",
  color: color2,
  speed = "normal",
  label,
  thickness,
  children,
  ...props
}, ref) => {
  const IconComponent = getIconComponent(variant);
  const iconSize = getSizeValue(size3);
  const iconStyle = {
    ...color2 && { color: color2 },
    ...thickness && { strokeWidth: thickness }
  };
  const renderSpinner = /* @__PURE__ */ __name(() => {
    if (variant === "dots") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DotsSpinner, { size: size3, color: color2 });
    }
    if (variant === "pulse" || variant === "bounce") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        StyledSpinnerIcon,
        {
          variant,
          speed,
          size: size3,
          style: {
            backgroundColor: color2 || "$brandPrimary",
            borderRadius: "50%",
            width: iconSize,
            height: iconSize
          }
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      StyledSpinnerIcon,
      {
        variant,
        speed,
        size: size3,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          IconComponent,
          {
            size: iconSize,
            style: iconStyle
          }
        )
      }
    );
  }, "renderSpinner");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    StyledSpinnerContainer,
    {
      ref,
      size: size3,
      ...props,
      children: [
        renderSpinner(),
        label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StyledLabel, { size: size3, children: label }),
        children
      ]
    }
  );
});
Spinner.displayName = "Spinner";
var StyledButton = (0, import_core3.styled)(import_core3.Stack, {
  name: "Button",
  context: { inButtonGroup: false },
  // Base styles
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  borderRadius: "$4",
  fontWeight: "500",
  textAlign: "center",
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
  position: "relative",
  overflow: "hidden",
  // Focus styles
  focusStyle: {
    outline: "none",
    boxShadow: "0 0 0 2px $colors$backgroundPrimary, 0 0 0 4px $colors$borderFocus"
  },
  // Disabled styles
  disabledStyle: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$textInverse",
        borderWidth: 1,
        borderColor: "$primary",
        hoverStyle: {
          backgroundColor: "$primaryHover",
          borderColor: "$primaryHover"
        },
        pressStyle: {
          backgroundColor: "$primaryActive",
          borderColor: "$primaryActive"
        }
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$textInverse",
        borderWidth: 1,
        borderColor: "$secondary",
        hoverStyle: {
          backgroundColor: "$secondaryHover",
          borderColor: "$secondaryHover"
        },
        pressStyle: {
          backgroundColor: "$secondaryActive",
          borderColor: "$secondaryActive"
        }
      },
      outline: {
        backgroundColor: "transparent",
        color: "$textPrimary",
        borderWidth: 1,
        borderColor: "$borderPrimary",
        hoverStyle: {
          backgroundColor: "$backgroundSecondary",
          borderColor: "$borderSecondary"
        },
        pressStyle: {
          backgroundColor: "$backgroundTertiary"
        }
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$textPrimary",
        borderWidth: 0,
        hoverStyle: {
          backgroundColor: "$backgroundSecondary"
        },
        pressStyle: {
          backgroundColor: "$backgroundTertiary"
        }
      },
      link: {
        backgroundColor: "transparent",
        color: "$primary",
        borderWidth: 0,
        textDecorationLine: "underline",
        hoverStyle: {
          color: "$primaryHover"
        },
        pressStyle: {
          color: "$primaryActive"
        }
      },
      destructive: {
        backgroundColor: "$error",
        color: "$textInverse",
        borderWidth: 1,
        borderColor: "$error",
        hoverStyle: {
          backgroundColor: "$errorHover",
          borderColor: "$errorHover"
        },
        pressStyle: {
          backgroundColor: "$errorActive",
          borderColor: "$errorActive"
        }
      },
      success: {
        backgroundColor: "$success",
        color: "$textInverse",
        borderWidth: 1,
        borderColor: "$success",
        hoverStyle: {
          backgroundColor: "$successHover",
          borderColor: "$successHover"
        },
        pressStyle: {
          backgroundColor: "$successActive",
          borderColor: "$successActive"
        }
      },
      warning: {
        backgroundColor: "$warning",
        color: "$textInverse",
        borderWidth: 1,
        borderColor: "$warning",
        hoverStyle: {
          backgroundColor: "$warningHover",
          borderColor: "$warningHover"
        },
        pressStyle: {
          backgroundColor: "$warningActive",
          borderColor: "$warningActive"
        }
      }
    },
    size: {
      xs: {
        height: "$6",
        paddingHorizontal: "$2",
        fontSize: "$1",
        lineHeight: "$1"
      },
      sm: {
        height: "$8",
        paddingHorizontal: "$3",
        fontSize: "$2",
        lineHeight: "$2"
      },
      md: {
        height: "$10",
        paddingHorizontal: "$4",
        fontSize: "$3",
        lineHeight: "$3"
      },
      lg: {
        height: "$12",
        paddingHorizontal: "$6",
        fontSize: "$4",
        lineHeight: "$4"
      },
      xl: {
        height: "$14",
        paddingHorizontal: "$8",
        fontSize: "$5",
        lineHeight: "$5"
      }
    },
    fullWidth: {
      true: {
        width: "100%"
      }
    },
    loading: {
      true: {
        color: "transparent"
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
var LoadingSpinner = (0, import_core3.styled)("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  inset: 0
});
var ButtonContent = (0, import_core3.styled)("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2"
});
var IconWrapper = (0, import_core3.styled)("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  variants: {
    size: {
      xs: {
        width: "$3",
        height: "$3"
      },
      sm: {
        width: "$4",
        height: "$4"
      },
      md: {
        width: "$4",
        height: "$4"
      },
      lg: {
        width: "$5",
        height: "$5"
      },
      xl: {
        width: "$6",
        height: "$6"
      }
    }
  }
});
var Button = (0, import_react4.forwardRef)(({
  variant = "primary",
  size: size3 = "md",
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    StyledButton,
    {
      ref,
      variant,
      size: size3,
      fullWidth,
      loading,
      disabled: isDisabled,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingSpinner, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Loader2, { size: 16, className: "animate-spin" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ButtonContent, { children: [
          leftIcon && !loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconWrapper, { size: size3, children: leftIcon }),
          loading && loadingText ? loadingText : children,
          rightIcon && !loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconWrapper, { size: size3, children: rightIcon })
        ] })
      ]
    }
  );
});
Button.displayName = "Button";
var InputWrapper = (0, import_core3.styled)(import_core3.Stack, {
  name: "InputWrapper",
  width: "100%",
  gap: "$1"
});
var InputLabel = (0, import_core3.styled)(import_core3.Text, {
  name: "InputLabel",
  fontSize: "$3",
  fontWeight: "500",
  color: "$textPrimary",
  lineHeight: "$3",
  variants: {
    required: {
      true: {
        "&::after": {
          content: '" *"',
          color: "$error"
        }
      }
    },
    disabled: {
      true: {
        color: "$textDisabled"
      }
    }
  }
});
var InputContainer = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "row",
  name: "InputContainer",
  position: "relative",
  alignItems: "center",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  backgroundColor: "$backgroundPrimary",
  transition: "all 0.2s ease-in-out",
  focusWithinStyle: {
    borderColor: "$borderFocus",
    boxShadow: "0 0 0 1px $colors$borderFocus"
  },
  variants: {
    variant: {
      default: {
        borderWidth: 1
      },
      filled: {
        backgroundColor: "$backgroundSecondary",
        borderWidth: 0,
        borderBottomWidth: 2,
        borderRadius: "$2 $2 0 0"
      },
      flushed: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        paddingHorizontal: 0
      },
      unstyled: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        paddingHorizontal: 0
      }
    },
    size: {
      xs: {
        height: "$6",
        paddingHorizontal: "$2"
      },
      sm: {
        height: "$8",
        paddingHorizontal: "$3"
      },
      md: {
        height: "$10",
        paddingHorizontal: "$4"
      },
      lg: {
        height: "$12",
        paddingHorizontal: "$4"
      },
      xl: {
        height: "$14",
        paddingHorizontal: "$5"
      }
    },
    state: {
      default: {
        borderColor: "$borderPrimary"
      },
      error: {
        borderColor: "$borderError",
        focusWithinStyle: {
          borderColor: "$borderError",
          boxShadow: "0 0 0 1px $colors$borderError"
        }
      },
      success: {
        borderColor: "$borderSuccess",
        focusWithinStyle: {
          borderColor: "$borderSuccess",
          boxShadow: "0 0 0 1px $colors$borderSuccess"
        }
      },
      warning: {
        borderColor: "$warning",
        focusWithinStyle: {
          borderColor: "$warning",
          boxShadow: "0 0 0 1px $colors$warning"
        }
      }
    },
    disabled: {
      true: {
        backgroundColor: "$backgroundTertiary",
        borderColor: "$borderSecondary",
        opacity: 0.6,
        cursor: "not-allowed"
      }
    },
    readOnly: {
      true: {
        backgroundColor: "$backgroundSecondary",
        cursor: "default"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    state: "default"
  }
});
var StyledInput = (0, import_core3.styled)("input", {
  name: "StyledInput",
  flex: 1,
  borderWidth: 0,
  backgroundColor: "transparent",
  color: "$textPrimary",
  fontSize: "$3",
  lineHeight: "$3",
  focusStyle: {
    outline: "none"
  },
  placeholderTextColor: "$placeholderColor",
  variants: {
    size: {
      xs: {
        fontSize: "$1",
        lineHeight: "$1"
      },
      sm: {
        fontSize: "$2",
        lineHeight: "$2"
      },
      md: {
        fontSize: "$3",
        lineHeight: "$3"
      },
      lg: {
        fontSize: "$4",
        lineHeight: "$4"
      },
      xl: {
        fontSize: "$5",
        lineHeight: "$5"
      }
    },
    disabled: {
      true: {
        color: "$textDisabled",
        cursor: "not-allowed"
      }
    },
    readOnly: {
      true: {
        cursor: "default"
      }
    }
  }
});
var IconWrapper2 = (0, import_core3.styled)("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "$textSecondary",
  cursor: "pointer",
  variants: {
    size: {
      xs: {
        width: "$4",
        height: "$4"
      },
      sm: {
        width: "$4",
        height: "$4"
      },
      md: {
        width: "$5",
        height: "$5"
      },
      lg: {
        width: "$5",
        height: "$5"
      },
      xl: {
        width: "$6",
        height: "$6"
      }
    },
    position: {
      left: {
        marginRight: "$2"
      },
      right: {
        marginLeft: "$2"
      }
    },
    clickable: {
      true: {
        "&:hover": {
          color: "$textPrimary"
        }
      },
      false: {
        cursor: "default"
      }
    }
  }
});
var HelperText = (0, import_core3.styled)(import_core3.Text, {
  name: "HelperText",
  fontSize: "$2",
  lineHeight: "$2",
  marginTop: "$1",
  variants: {
    state: {
      default: {
        color: "$textSecondary"
      },
      error: {
        color: "$error"
      },
      success: {
        color: "$success"
      },
      warning: {
        color: "$warning"
      }
    }
  }
});
var getStateIcon = /* @__PURE__ */ __name((state, size3) => {
  const iconSize = size3 === "xs" || size3 === "sm" ? 14 : 16;
  switch (state) {
    case "error":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.AlertCircle, { size: iconSize, color: "currentColor" });
    case "success":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.CheckCircle, { size: iconSize, color: "currentColor" });
    case "warning":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Info, { size: iconSize, color: "currentColor" });
    default:
      return null;
  }
}, "getStateIcon");
var Input = (0, import_react4.forwardRef)(({
  variant = "default",
  size: size3 = "md",
  state = "default",
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  showPasswordToggle = false,
  type = "text",
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = (0, import_react4.useState)(false);
  const actualState = isInvalid || errorMessage ? "error" : state;
  const inputType = showPasswordToggle && type === "password" ? showPassword ? "text" : "password" : type;
  const displayHelperText = errorMessage || helperText;
  const handlePasswordToggle = /* @__PURE__ */ __name(() => {
    setShowPassword(!showPassword);
  }, "handlePasswordToggle");
  const getRightIcon = /* @__PURE__ */ __name(() => {
    if (showPasswordToggle && type === "password") {
      const iconSize = size3 === "xs" || size3 === "sm" ? 14 : 16;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconWrapper2,
        {
          size: size3,
          position: "right",
          clickable: true,
          onClick: handlePasswordToggle,
          children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.EyeOff, { size: iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Eye, { size: iconSize })
        }
      );
    }
    if (rightIcon) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconWrapper2, { size: size3, position: "right", clickable: false, children: rightIcon });
    }
    const stateIcon = getStateIcon(actualState, size3);
    if (stateIcon) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconWrapper2, { size: size3, position: "right", clickable: false, children: stateIcon });
    }
    return null;
  }, "getRightIcon");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(InputWrapper, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      InputLabel,
      {
        required: isRequired,
        disabled: isDisabled,
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      InputContainer,
      {
        variant,
        size: size3,
        state: actualState,
        disabled: isDisabled,
        readOnly: isReadOnly,
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconWrapper2, { size: size3, position: "left", clickable: false, children: leftIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            StyledInput,
            {
              ref,
              type: inputType,
              size: size3,
              disabled: isDisabled,
              readOnly: isReadOnly,
              ...props
            }
          ),
          getRightIcon()
        ]
      }
    ),
    displayHelperText && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HelperText, { state: actualState, children: displayHelperText })
  ] });
});
Input.displayName = "Input";
var StyledCard = (0, import_core3.styled)(import_core3.Stack, {
  name: "Card",
  backgroundColor: "$backgroundPrimary",
  borderRadius: "$4",
  overflow: "hidden",
  position: "relative",
  variants: {
    variant: {
      elevated: {
        shadowColor: "$shadowColor",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 0
      },
      outlined: {
        borderWidth: 1,
        borderColor: "$borderPrimary",
        shadowColor: "transparent"
      },
      filled: {
        backgroundColor: "$backgroundSecondary",
        borderWidth: 0,
        shadowColor: "transparent"
      },
      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        shadowColor: "transparent"
      }
    },
    size: {
      sm: {
        borderRadius: "$3"
      },
      md: {
        borderRadius: "$4"
      },
      lg: {
        borderRadius: "$5"
      }
    },
    hoverable: {
      true: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        hoverStyle: {
          transform: "translateY(-2px)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 6
        }
      }
    },
    clickable: {
      true: {
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          transform: "scale(0.98)"
        },
        focusStyle: {
          outline: "none",
          borderColor: "$borderFocus",
          shadowColor: "$borderFocus",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 4
        }
      }
    }
  },
  defaultVariants: {
    variant: "elevated",
    size: "md"
  }
});
var StyledCardHeader = (0, import_core3.styled)(import_core3.Stack, {
  name: "CardHeader",
  padding: "$4",
  variants: {
    divider: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: "$borderPrimary"
      }
    },
    size: {
      sm: {
        padding: "$3"
      },
      md: {
        padding: "$4"
      },
      lg: {
        padding: "$5"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var StyledCardBody = (0, import_core3.styled)(import_core3.Stack, {
  name: "CardBody",
  padding: "$4",
  flex: 1,
  variants: {
    size: {
      sm: {
        padding: "$3"
      },
      md: {
        padding: "$4"
      },
      lg: {
        padding: "$5"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var StyledCardFooter = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "row",
  name: "CardFooter",
  padding: "$4",
  alignItems: "center",
  variants: {
    divider: {
      true: {
        borderTopWidth: 1,
        borderTopColor: "$borderPrimary"
      }
    },
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      end: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      }
    },
    size: {
      sm: {
        padding: "$3"
      },
      md: {
        padding: "$4"
      },
      lg: {
        padding: "$5"
      }
    }
  },
  defaultVariants: {
    justify: "end",
    size: "md"
  }
});
var CardContext = import_react4.default.createContext({ size: "md" });
var Card = (0, import_react4.forwardRef)(({
  variant = "elevated",
  size: size3 = "md",
  hoverable = false,
  clickable = false,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CardContext.Provider, { value: { size: size3 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledCard,
    {
      ref,
      variant,
      size: size3,
      hoverable,
      clickable,
      ...props,
      children
    }
  ) });
});
var CardHeader = (0, import_react4.forwardRef)(({
  divider = false,
  children,
  ...props
}, ref) => {
  const { size: size3 } = import_react4.default.useContext(CardContext);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledCardHeader,
    {
      ref,
      divider,
      size: size3,
      ...props,
      children
    }
  );
});
var CardBody = (0, import_react4.forwardRef)(({
  children,
  ...props
}, ref) => {
  const { size: size3 } = import_react4.default.useContext(CardContext);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledCardBody,
    {
      ref,
      size: size3,
      ...props,
      children
    }
  );
});
var CardFooter = (0, import_react4.forwardRef)(({
  divider = false,
  justify = "end",
  children,
  ...props
}, ref) => {
  const { size: size3 } = import_react4.default.useContext(CardContext);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledCardFooter,
    {
      ref,
      divider,
      justify,
      size: size3,
      ...props,
      children
    }
  );
});
Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardBody.displayName = "CardBody";
CardFooter.displayName = "CardFooter";
var StyledModalOverlay = (0, import_core3.styled)(import_core3.Stack, {
  name: "ModalOverlay",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  justifyContent: "center",
  alignItems: "center",
  padding: "$4",
  zIndex: 1e3,
  // Animation variants
  variants: {
    entering: {
      true: {
        opacity: 0,
        animation: "quick",
        animateOnly: ["opacity"]
      }
    },
    exiting: {
      true: {
        opacity: 0,
        animation: "quick",
        animateOnly: ["opacity"]
      }
    }
  }
});
var StyledModalContent = (0, import_core3.styled)(import_core3.Stack, {
  name: "ModalContent",
  backgroundColor: "$backgroundPrimary",
  borderRadius: "$4",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.25,
  shadowRadius: 25,
  elevation: 10,
  maxHeight: "90vh",
  overflow: "hidden",
  variants: {
    size: {
      xs: {
        width: 320,
        maxWidth: "90vw"
      },
      sm: {
        width: 400,
        maxWidth: "90vw"
      },
      md: {
        width: 500,
        maxWidth: "90vw"
      },
      lg: {
        width: 700,
        maxWidth: "90vw"
      },
      xl: {
        width: 900,
        maxWidth: "90vw"
      },
      full: {
        width: "95vw",
        height: "95vh",
        maxWidth: "none",
        maxHeight: "none"
      }
    },
    entering: {
      true: {
        opacity: 0,
        scale: 0.95,
        y: -20,
        animation: "bouncy",
        animateOnly: ["opacity", "scale", "y"]
      }
    },
    exiting: {
      true: {
        opacity: 0,
        scale: 0.95,
        y: -20,
        animation: "quick",
        animateOnly: ["opacity", "scale", "y"]
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var StyledModalHeader = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "row",
  name: "ModalHeader",
  padding: "$5",
  borderBottomWidth: 1,
  borderBottomColor: "$borderPrimary",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: 60
});
var StyledModalBody = (0, import_core3.styled)(import_core3.Stack, {
  name: "ModalBody",
  padding: "$5",
  flex: 1,
  overflow: "auto"
});
var StyledModalFooter = (0, import_core3.styled)(import_core3.Stack, {
  flexDirection: "row",
  name: "ModalFooter",
  padding: "$5",
  borderTopWidth: 1,
  borderTopColor: "$borderPrimary",
  alignItems: "center",
  gap: "$3",
  variants: {
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      end: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      }
    }
  },
  defaultVariants: {
    justify: "end"
  }
});
var ModalContext = import_react4.default.createContext({ size: "md", onClose: /* @__PURE__ */ __name(() => {
}, "onClose") });
var Modal = /* @__PURE__ */ __name(({
  isOpen,
  onClose,
  size: size3 = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  preventScroll = true,
  children
}) => {
  (0, import_react4.useEffect)(() => {
    if (!closeOnEsc || !isOpen) return;
    const handleEscape = /* @__PURE__ */ __name((event) => {
      if (event.key === "Escape") {
        onClose();
      }
    }, "handleEscape");
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeOnEsc, isOpen, onClose]);
  (0, import_react4.useEffect)(() => {
    if (!preventScroll) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, preventScroll]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalContext.Provider, { value: { size: size3, onClose }, children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ModalOverlay,
    {
      onPress: closeOnOverlayClick ? onClose : void 0,
      children
    }
  ) });
}, "Modal");
var ModalOverlay = (0, import_react4.forwardRef)(({
  onPress,
  children,
  ...props
}, ref) => {
  const handlePress = /* @__PURE__ */ __name((event) => {
    if (event.target === event.currentTarget && onPress) {
      onPress();
    }
  }, "handlePress");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledModalOverlay,
    {
      ref,
      onPress: handlePress,
      ...props,
      children
    }
  );
});
var ModalContent = (0, import_react4.forwardRef)(({
  size: size3,
  children,
  ...props
}, ref) => {
  const { size: contextSize } = import_react4.default.useContext(ModalContext);
  const finalSize = size3 || contextSize;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledModalContent,
    {
      ref,
      size: finalSize,
      ...props,
      children
    }
  );
});
var ModalHeader = (0, import_react4.forwardRef)(({
  showCloseButton = true,
  onClose,
  children,
  ...props
}, ref) => {
  const { onClose: contextOnClose } = import_react4.default.useContext(ModalContext);
  const handleClose = onClose || contextOnClose;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    StyledModalHeader,
    {
      ref,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core3.Stack, { flex: 1, children }),
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalCloseButton, { onPress: handleClose })
      ]
    }
  );
});
var ModalBody = (0, import_react4.forwardRef)(({
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledModalBody,
    {
      ref,
      ...props,
      children
    }
  );
});
var ModalFooter = (0, import_react4.forwardRef)(({
  justify = "end",
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledModalFooter,
    {
      ref,
      justify,
      ...props,
      children
    }
  );
});
var ModalCloseButton = /* @__PURE__ */ __name(({
  onPress,
  size: size3 = "sm"
}) => {
  const { onClose } = import_react4.default.useContext(ModalContext);
  const handlePress = onPress || onClose;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Button,
    {
      variant: "ghost",
      size: size3,
      onPress: handlePress,
      icon: import_lucide_react.X,
      "aria-label": "Close modal"
    }
  );
}, "ModalCloseButton");
Modal.displayName = "Modal";
ModalOverlay.displayName = "ModalOverlay";
ModalContent.displayName = "ModalContent";
ModalHeader.displayName = "ModalHeader";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";
ModalCloseButton.displayName = "ModalCloseButton";
var UIProvider = /* @__PURE__ */ __name(({ children }) => children, "UIProvider");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Modal,
  Spinner,
  UIProvider,
  tamaguiConfig,
  ...require("@tamagui/core")
});
/*! Bundled license information:

lucide-react/dist/cjs/lucide-react.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
