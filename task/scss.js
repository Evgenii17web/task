import gulp from "gulp";
import path from "../config/path.js";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import gulpGroupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpCss from 'gulp-webp-css';
import app from "../config/app.js";
const sass = gulpSass(dartSass);


const scss = () => {
    return gulp.src(path.scss.src, { sourcemaps: app.isDev})
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(size({title: 'До сжатия css'}))
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev}))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(csso())
        .pipe(size({title: 'После сжатия css'}))
        .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev}));
}

export default scss;