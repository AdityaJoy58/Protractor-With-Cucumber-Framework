/**
 * Created by ab185330 on 5/23/2016.
 */
'use strict';

import gulpConfig       from './gulpConfig';
import gulp             from 'gulp';
import sass             from 'gulp-sass';
import babelify         from 'babelify';
import browserify       from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer      from 'vinyl-buffer';
import rename           from 'gulp-rename';
import rimraf           from 'gulp-rimraf';
import babelregister    from 'babel-register';
import gulpLoadPlugins  from 'gulp-load-plugins';
import jscs             from 'gulp-jscs';
import runSequence      from 'run-sequence';
import karma            from 'karma';
import webserver        from 'gulp-webserver';
import envify           from 'envify/custom';
import argv             from 'yargs';
import replace          from 'gulp-replace-task';
import concat           from 'gulp-concat';
import uglify           from 'gulp-uglify';
import gulpif           from 'gulp-if';
import sonar            from 'gulp-sonar';
import util             from 'gulp-util';

import protractorReport from  'gulp-protractor-cucumber-html-report';
import { protractor, webdriver, webdriver_update } from 'gulp-protractor';

var plugins = gulpLoadPlugins();
var args = argv.argv;
var cucumberTags = args.tags ? args.tags : '@homepage';

//-------------------------------------
// E2E Tasks
//-------------------------------------
gulp.task('webdriver-update', webdriver_update);
gulp.task('webdriver', webdriver);

gulp.task('e2e', ['webdriver-update', 'webdriver'], function() {
    var appUrl = 'https://www.instagram.com'

    gulp.src('').pipe(protractor({
        configFile: gulpConfig.test.protractor,
        args: ['--baseUrl', appUrl,
            '--cucumberOpts.tags',cucumberTags
        ]
    })).on('error', (err) => {
        gulp.start('e2e-report',function() {
        throw err});
    }).on('end',  () => {
        gulp.start('e2e-report');
    });

});

gulp.task('e2e-report',function(){
    return gulp.src(gulpConfig.test.cucumber.testResultsJsonSource)
        .pipe(protractorReport({
            dest: gulpConfig.reports,
            filename: gulpConfig.test.cucumber.reportFileName
        }));
});

gulp.task('clean', function() {
    return gulp.src(gulpConfig.build + '*.js' , { read: false }) // much faster
        .pipe(rimraf());
});
