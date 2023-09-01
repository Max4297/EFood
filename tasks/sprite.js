const { src, dest } = require("gulp");
const svgSprite = require("gulp-svg-sprite");

module.exports = function sprite() {
  return src("app/images/src/*.svg")
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
          },
        },
        prefix: "icon-%f",
      })
    )
    .pipe(dest("app/images"));
};
