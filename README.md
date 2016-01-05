# Lorem

<a href="https://github.com/posthtml/posthtml"><img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Lorem] lets you easily add [lorem ipsum] placeholder text to any document.

```html
<!-- BEFORE -->
<p lorem="2"></p>

<section>
	<lorem size="3"></lorem>
</section>

<!-- AFTER -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<section>
	<p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
	<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
	<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
</section>
```

[Lorem] is context-sensitive, meaning it knows when to wrap placeholder text in `<p>` elements and when not to. The `lorem` attribute and the `size` attribute on `<lorem>` determine the number of paragraphs that will be added to that area.

## Usage

Add [Lorem] to your build tool:

```bash
npm install posthtml-lorem --save-dev
```

#### Node

```js
require('posthtml-lorem').process(YOUR_HTML);
```

#### PostHTML

Add [PostHTML] to your build tool:

```bash
npm install posthtml --save-dev
```

Load [Lorem] as a PostHTML plugin:

```js
posthtml([
	require('posthtml-lorem')()
]).process(YOUR_HTML);
```

#### Gulp

Add [Gulp PostHTML] to your build tool:

```bash
npm install gulp-posthtml --save-dev
```

Enable [Lorem] within your Gulpfile:

```js
var posthtml = require('gulp-posthtml');

gulp.task('html', function () {
	return gulp.src('./src/*.html').pipe(
		posthtml([
			require('posthtml-lorem')()
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostHTML] to your build tool:

```bash
npm install grunt-posthtml --save-dev
```

Enable [Lorem] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-posthtml');

grunt.initConfig({
	posthtml: {
		options: {
			use: [
				require('posthtml-lorem')()
			]
		},
		dist: {
			src: '*.html'
		}
	}
});
```

[ci]:      https://travis-ci.org/jonathantneal/posthtml-lorem
[ci-img]:  https://img.shields.io/travis/jonathantneal/posthtml-lorem.svg
[npm]:     https://www.npmjs.com/package/posthtml-lorem
[npm-img]: https://img.shields.io/npm/v/posthtml-lorem.svg

[Gulp PostHTML]:  https://github.com/posthtml/gulp-posthtml
[Grunt PostHTML]: https://github.com/TCotton/grunt-posthtml
[PostHTML]:       https://github.com/posthtml/posthtml

[lorem ipsum]: https://en.wikipedia.org/wiki/Lorem_ipsum

[Lorem]: https://github.com/jonathantneal/posthtml-lorem
