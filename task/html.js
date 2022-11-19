import gulp from "gulp";
import size from "gulp-size";
import htmlMin from "gulp-htmlmin";
import path from "../config/path.js";
import app from "../config/app.js";

const html = () => {
    return gulp.src(path.html.src)
        .pipe(size({title: 'До сжатия html'}))
        .pipe(htmlMin(app.htmlMin))
        .pipe(size({title: 'После сжатия html'}))
        .pipe(gulp.dest(path.html.dest));
}

export default html;