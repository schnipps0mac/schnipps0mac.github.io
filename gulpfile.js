const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("babel", () =>
  gulp
    .src("src/main/javascript/**")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulp.dest("dist"))
);

gulp.task("copyParallax", () =>
  gulp.src("node_modules/parallax-js/dist/parallax.min*").pipe(gulp.dest("lib"))
);
gulp.task("copyRequireJS", () =>
  gulp.src("node_modules/requirejs/require.js").pipe(gulp.dest("lib"))
);

gulp.task("default", gulp.series(["copyParallax", "copyRequireJS"]));
