const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

module.exports = function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/slick-carousel/slick/slick.js",
    "app/js/main.js",
  ])
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
};
