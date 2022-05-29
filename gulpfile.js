const gulp = require("gulp");
const browserSync = require('browser-sync');

gulp.task("default", function() {
  browserSync.init({
    server: "app"
  });
  browserSync.watch("app/**/*.*").on('change', browserSync.reload);
});
