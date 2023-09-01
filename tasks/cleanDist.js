const { src } = require("gulp");
const clean = require("gulp-clean");

module.exports = function cleanDist() {
  return src("dist").pipe(clean());
};
