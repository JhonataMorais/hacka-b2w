const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify');
const del = require('del');
const browserify = require('gulp-browserify')
const babelify = require('babelify')

const paths = {
    styles: {
        src: "./src/assets/scss/*.scss",
        dest: "./dist/assets/css",
        srcWatch: "./src/assets/scss/**/*.scss"
    },
    scripts: {
        src: "./src/assets/js/*.js",
        dest: "./dist/assets/js",
        srcWatch: "./src/assets/js/**/*.js"
    }
};

function clean(){

    return del(['dist'])
}

function styles(){

    return gulp.src(paths.styles.src)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(paths.styles.dest))
}

function scripts(){
    
    return gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(browserify({
        transform: ['babelify'],
      }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
}

function watch(){
    gulp.watch(paths.styles.srcWatch, styles);
    gulp.watch(paths.scripts.srcWatch, scripts);
}


const build = gulp.series(clean, gulp.parallel(styles, scripts));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;

exports.default = build;