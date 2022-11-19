import gulp from "gulp";
import path from "../config/path.js";
import app from "../config/app.js";

const font = () => {
    return gulp.src(path.font.src)
        .pipe(gulp.dest(path.font.dest));
}

export default font;