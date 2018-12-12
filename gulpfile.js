const gulp = require('gulp'),
    pump = require('pump'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'); 
const isDebug = false; 


function compileCss(cb,minify){
    var tasks = [
        gulp.src(['./sass/*.scss']),
        sass({
            compress: minify?true:false
        }),
        autoprefixer(),
        gulp.dest('./dist/css')
    ];
    

    pump(tasks, (err) => {
        if (err) {
            cb(err);
            return;
        }
        cb();
    });
}

function minifyCss(cb){
    compileCss(cb,true);
}


gulp.task('sass:watch', (cb) => {
    gulp.watch(['./sass/*.scss'],{},gulp.parallel(minifyCss,compileCss));
});
