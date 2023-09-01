const { src, dest } = require("gulp");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

module.exports = function fonts() {
  return src("app/fonts/src/*.*")
    .pipe(
      fonter({
        formats: ["woff, ttf"],
      })
    )
    .pipe(src("app/fonts/src/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"));
};
