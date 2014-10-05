var gulp = require('gulp');
var static_site = require('gulp-static-site');
var webserver = require('gulp-webserver');

var paths = {
    sources: ['contents/**','templates/**'],
    stylesheets: ['assets/css/**'],
    scripts: ['assets/js/**']
};

gulp.task('site', function () {
    return gulp.src('contents/**/*.md')
        .pipe(static_site())
        .pipe(gulp.dest('build/'));
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        .pipe(gulp.dest('build/css'));
});

gulp.task('js', function () {
    return gulp.src('assets/js/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['site','css', 'js'], function () {
    // gulp.watch(paths.sources, ['site']);
    // gulp.watch(paths.stylesheets, ['css']);
});

gulp.task('webserver', function() {
	gulp.src('build')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: 'build/'
		}));
});
