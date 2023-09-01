const { src, dest } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

module.exports = function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
    .pipe(concat("style.min.css"))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
};
