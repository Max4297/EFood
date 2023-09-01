const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const browserSync = require("browser-sync").create();

module.exports = function images() {
  return src(["app/images/src/*.*", "!app/images/src/*.svg"])
    .pipe(webp())
    .pipe(src(["app/images/src/*.*", "!app/images/src/*.svg"]))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("app/images"))
    .pipe(browserSync.stream());
};
