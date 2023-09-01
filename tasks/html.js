const { src, dest } = require("gulp");
const include = require("gulp-include");
const browserSync = require("browser-sync").create();

module.exports = function pages() {
  return src("app/pages/*.html")
    .pipe(
      include({
        includePaths: "app/components/",
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
};
