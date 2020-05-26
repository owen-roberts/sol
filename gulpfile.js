const gulp = require('gulp'),
    browserSync = require('browser-sync')

const paths = {
    output: './build',
    src: {
        html: './src/html',
        css: './src/css',
        js: './src/js'
    }
}

function html(){
    return gulp.src(`${paths.src.html}/*.html`)
        .pipe(gulp.dest(paths.output));
}

function css(){
    return gulp.src(`${paths.src.css}/*.css`)
    .pipe(gulp.dest(paths.output));
}

function js(){
    return gulp.src(`${paths.src.js}/*.js`)
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
        },
        {
            glob: `${paths.src.css}/*.css`,
            tasks: [css]
        },
        {
            glob: `${paths.src.js}/*.js`,
            tasks: [js]
        }
    ];
    watchers.forEach(watcher => {
        gulp.watch(watcher.glob)
            .on('change', gulp.series(html, css, js, browserSync.reload))
    });
}

/// Gulp
gulp.task('html', html);
gulp.task('css', css);
gulp.task('js', js);

gulp.task('serve', gulp.series('html', 'css', 'js', serve, (done) => {
    done();
}));