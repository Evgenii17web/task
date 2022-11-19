import gulp from "gulp";
import path from "../config/path.js";
import webp from "gulp-webp";

const img = () => {
    return gulp.src(path.img.src)
        .pipe(gulp.dest(path.img.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.img.dest));
}

export default img;