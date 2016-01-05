var posthtml = require('posthtml');
var parser   = posthtml();
var lorems   = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.', 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.', 'Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.', 'Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.'];
var length   = lorems.length;

module.exports = function () {
	return function Lorem(tree) {
		var index = -1;

		walk(tree);

		function walk(nodeList, isInlineContainer) {
			nodeList.forEach(function (node, nodeIndex) {
				var size = 1;
				var isLorem;
				var isLoremElement;
				var separator;

				// detect inline containers
				if (node.tag && /^(abbr|acronym|b|bdo|big|button|cite|dfn|em|h1|h2|h3|h4|h5|h6|i|input|kbd|p|q|samp|select|small|span|strong|sub|sup|textarea|time|var)$/i.test(node.tag)) {
					isInlineContainer = true;
				}

				// detect lorem element or attribute
				if (/^lorem$/i.test(node.tag)) {
					isLorem = true;
					size    = node.attrs && node.attrs.size || size;

					var previousElement = nodeList[nodeIndex - 1];

					if (typeof previousElement === 'string') {
						separator = previousElement;
					}

					isLoremElement = true;
				} else if (node.attrs && 'lorem' in node.attrs) {
					isLorem = true;
					size    = node.attrs.lorem || size;

					delete node.attrs.lorem;
				}

				// conditionally add lorem or parse child content
				if (isLorem) {
					node.content = [];

					while (size--) {
						++index;

						if (index === length) index = 0;

						node.content.push(isInlineContainer ? lorems[index] : {
							tag:     'p',
							content: [
								lorems[index]
							]
						});

						if (size && separator) {
							node.content.push(separator);
						}
					}

					if (isLoremElement) {
						nodeList.splice(nodeIndex, 1, node.content);
					}
				} else if (node.content) {
					walk(node.content, isInlineContainer);
				}

				// reset lorem and inline container detection
				isLorem           = false;
				isInlineContainer = false;
			});
		}
	};
};

module.exports.process = function (contents, options) {
	return parser.use(module.exports(options)).process(contents, options);
};
