const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

const paths = {
  scripts: {
    src: './',
    dest: './build/',
  },
};

async function includeHTML() {
  return gulp
    .src(['src/pages/**'])
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
}

// Reload Server
async function reload() {
  server.reload();
}

async function buildAndReload() {
  await includeHTML();
  await combineCss();
  await copyFonts();
  await copyFavicons();
  await copyImages();
  reload();
}

async function combineCss() {
  return gulp
    .src(['src/css/**'])
    .pipe(cleanCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.scripts.dest));
}

async function copyFonts() {
  return gulp
    .src(['src/fonts/**'])
    .pipe(gulp.dest(`${paths.scripts.dest}/fonts`));
}

async function copyFavicons() {
  return gulp
    .src(['src/favicon/**'])
    .pipe(gulp.dest(`${paths.scripts.dest}/favicon`));
}

async function copyImages() {
  return gulp
    .src(['src/img/**'])
    .pipe(imagemin())
    .pipe(gulp.dest(`${paths.scripts.dest}/img`));
}

async function copyPortfolio() {
  return gulp
    .src(['portfolio/**/*'])
    .pipe(gulp.dest(`${paths.scripts.dest}/portfolio`));
}

exports.copyImages = copyImages;
exports.combineCss = combineCss;
exports.copyFonts = copyFonts;
exports.includeHTML = includeHTML;

async function build() {
  await includeHTML();
  await combineCss();
  await copyFonts();
  await copyFavicons();
  await copyImages();
  await copyPortfolio();
}

exports.build = build;

exports.default = async function () {
  // Init serve files from the build folder
  server.init({
    server: {
      baseDir: paths.scripts.dest,
    },
  });
  // Build and reload at the first time
  buildAndReload();
  // Watch task
  watch(
    ['src/pages/**/*.html', 'src/css/*.css', '_layouts/*.html'],
    series(buildAndReload)
  );
};
