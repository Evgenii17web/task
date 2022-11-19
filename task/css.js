import gulp from "gulp";
import path from "../config/path.js";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import gulpGroupCssMediaQueries from "gulp-group-css-media-queries";

const css = () => {
    return gulp.src(path.css.src, { sourcemaps: true})
        .pipe(concat("main.css"))
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(size({title: 'До сжатия css'}))
        .pipe(gulp.dest(path.css.dest, { sourcemaps: true}))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(csso())
        .pipe(size({title: 'После сжатия css'}))
        .pipe(gulp.dest(path.css.dest, { sourcemaps: true}));
}

export default css;