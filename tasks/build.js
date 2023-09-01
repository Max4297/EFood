const { src, dest } = require("gulp");

module.exports = function build() {
  return src(
    [
      "app/**/*.html",
      "app/css/style.min.css",
      "app/images/*.*",
      "!app/images/*.svg",
      "!app/images/**/*.html",
      "app/images/sprite.svg",
      "app/fonts/*.*",
      "app/js/main.min.js",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
};
