const { src, dest, watch } = require("gulp");
const minifyJS = require("gulp-uglify");
const minifyCss = require("gulp-clean-css");

// pokrećemo u terminalu sa gulp bundleJS
const bundleJS = () => {
  return src("./dist/main.js").pipe(minifyJS()).pipe(dest("./dist/min/"));
};

// pokrećemo u terminalu sa gulp bundleCss
const bundleCss = () => {
  return src("./dist/main.css").pipe(minifyCss()).pipe(dest("./dist/min/"));
};

// pokrećemo u terminalu sa gulp devWatch
const devWatch = () => {
  watch(".dist/main.js", bundleJS);
  watch("dist/main.css", bundleCss);
};

exports.bundleJS = bundleJS;
exports.bundleCss = bundleCss;
exports.devWatch = devWatch;
