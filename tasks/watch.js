const { watch, parallel, series } = require("gulp");
const browserSync = require("browser-sync").create();
module.exports = function watching() {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });

  watch(["app/pages/*.html", "app/components/*"], parallel("html")).on(
    "change",
    browserSync.reload
  );
  watch("app/scss/*.scss", parallel("styles")).on("change", browserSync.reload);
  watch("app/js/*.js", parallel("scripts"));
  watch("app/images/src/*", series("images", "sprite")).on(
    "change",
    browserSync.reload
  );
};
