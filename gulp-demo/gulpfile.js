const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task("default", function (){
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("images", function (){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

