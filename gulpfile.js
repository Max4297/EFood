const { parallel, series } = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.html = tasks.html;
exports.styles = tasks.styles;
exports.scripts = tasks.scripts;
exports.fonts = tasks.fonts;
exports.images = tasks.images;
exports.sprite = tasks.sprite;
exports.watch = tasks.watch;
exports.cleanDist = tasks.cleanDist;
exports.build = tasks.build;

exports.building = series(exports.cleanDist, exports.build);
exports.default = parallel(
  exports.styles,
  exports.images,
  exports.sprite,
  exports.scripts,
  exports.html,
  exports.watch
);
