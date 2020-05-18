const gulp = require('gulp'),
    browserSync = require('browser-sync')

const paths = {
    output: './build',
    src: {
        html: './src/html'
    }
}

function html(){
    return gulp.src(`${paths.src.html}/*.html`)
        .pipe(gulp.dest(paths.output));
}

function serve(){
    browserSync({ 
        injectChanges: true,
        notify: false,
        server: paths.output,
        tunnel: false
    });
    watch();
}

function watch(){
    const watchers = [
        {
            glob: `${paths.src.html}/*.html`,
            tasks: [html]
        }
    ];
    watchers.forEach(watcher => {
        gulp.watch(watcher.glob)
            .on('change', gulp.series(html, browserSync.reload))
    });
}

/// Gulp
gulp.task('html', html);

gulp.task('serve', gulp.series('html', serve, (done) => {
    done();
}));