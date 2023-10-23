# portfolio-one# portfolio-one-2

## Quick start guide to use this repository

This project contains a node/gulp package with SCSS, a system of HTML templates and a web server. You need to install [Node.js](https://nodejs.org/) and [Gulp](https://gulpjs.com) to work with this repository, then follow the steps below.

>#### If you don't have the gulp command, you must install it in all the computer so as to use it in all folders, by using `npm install --global gulp-cli`

1. Clone the repository from GitHub in your computer.

2. Use the command `$ npm install` in order to activate the **Gulp tasks** that are included in the project. (**npm install** to install the necessary packages to convert SASS to CSS, minify, etc). Also you start the repo with `$ gulp`

3. After these steps, your cloned repository is ready to use! And please don’t forget to make a “pull request” of your branch with modifications. Thanks ;)

> ### While we are working with our code: From our term we use command `gulp` to activate its task by default, that in the case of `gulpfile.js` that we have in this project it would be pending of our folders of Sass, html and JavaScript and it will compile them, minify them and/or refresh the browser each time we make a change.

## Gulp tasks included:

### Start of a web server for development
```
$ gulp
```
Initiates a web server with BrowserSync and a few watchers will be alert of SCSS/JS/HTML files, in the folder **public/**, to refresh the browser when necessary.

### Version ready to upload to production
```
$ gulp docs
```
Inside the docs/ folder generates CSS and JS minified and without sourcecamps ready to upload to the repository and activate GitHub Pages in `master/docs`.

### Structure of the gulp tasks package
Gulpfile.js uses a JSON with configuration os the paths files to generate/watch.
The structure of the folders looks like this:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

### HTML
Is included the package [**gulp-html-partial**](https://www.npmjs.com/package/gulp-html-partial) that allows us to have a html templates system.

### CSS
Is included the package [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) groups all media queries at the end of the CSS document.

### Images and icons
We have in **_src/** a folder for the project’s images and another for the icons as the favicon  or the icons for mobile devices. The last ones are generated in the root of the folders **public/** and **docs/**.

### JS
The JSON with configuration specifies the JS files we use and the order they must process theirselves.


## Summary

1. Make changes in your code.

2. Use command ```gulp``` to see your web in progress.

3. Use command ```gulp docs``` to send the new changes to 'public' folder.

4. Gulp is just running as a never ending process. The way to abort a process is by pressing Ctrl + C in order to close gulp in the term.

(Press Ctrl+Shift+V to see markdown preview).


personalwebsite → Settings → Code and automation → Pages → Build and deployment → BRANCH ```gh-pages``` FOLDER ```/docs```

