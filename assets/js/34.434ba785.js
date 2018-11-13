(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{253:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("HTTP/1 application can be made slow by loading a lot of small assets as each request comes with an overhead. HTTP/2 helps in this regard and changes the situation somewhat drastically. Till then you are stuck with different approaches. Webpack allows a few of these.")]),s("p",[t._v("Webpack can inline assets by using "),s("a",{attrs:{href:"https://www.npmjs.com/package/url-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("url-loader"),s("OutboundLink")],1),t._v(". It emits your images as base64 strings within your JavaScript bundles. The process decreases the number of requests needed while growing the bundle size. It's enough to use "),s("em",[t._v("url-loader")]),t._v(" during development. You want to consider other alternatives for the production build, though.")]),s("p",[t._v("Webpack gives control over the inlining process and can defer loading to "),s("a",{attrs:{href:"https://www.npmjs.com/package/file-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("file-loader"),s("OutboundLink")],1),t._v(". "),s("em",[t._v("file-loader")]),t._v(" outputs image files and returns paths to them instead of inlining. This technique works with other assets types, such as fonts, as you see in the later chapters.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[t._v("The ideas above can be wrapped in a small helper that can be incorporated into the book project. To get started, install the dependencies:")]),t._m(14),s("p",[t._v("Set up a function as below:")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),s("p",[t._v("Webpack allows a "),s("a",{attrs:{href:"https://github.com/webpack/webpack/issues/595",target:"_blank",rel:"noopener noreferrer"}},[t._v("couple ways"),s("OutboundLink")],1),t._v(" to load SVGs. However, the easiest way is through "),s("em",[t._v("file-loader")]),t._v(" as follows:")]),t._m(25),s("p",[t._v("Assuming you have set up your styling correctly, you can refer to your SVG files as below. The example SVG path below is relative to the CSS file:")]),t._m(26),s("p",[t._v("Consider also the following loaders:")]),s("ul",[s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/raw-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("raw-loader"),s("OutboundLink")],1),t._v(" gives access to the raw SVG content.")]),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/svg-inline-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("svg-inline-loader"),s("OutboundLink")],1),t._v(" goes a step further and eliminates unnecessary markup from your SVGs.")]),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/svg-sprite-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("svg-sprite-loader"),s("OutboundLink")],1),t._v(" can merge separate SVG files into a single sprite, making it potentially more efficient to load as you avoid request overhead. It supports raster images ("),s("em",[t._v(".jpg")]),t._v(", "),s("em",[t._v(".png")]),t._v(") as well.")]),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/svg-url-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("svg-url-loader"),s("OutboundLink")],1),t._v(" loads SVGs as UTF-8 encoded data urls. The result is smaller and faster to parse than base64.")]),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/react-svg-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-svg-loader"),s("OutboundLink")],1),t._v(" emits SVGs as React components meaning you could end up with code like "),s("code",[t._v("<Image width={50} height={50}/>")]),t._v(" to render a SVG in your code after importing it.")])]),t._m(27),t._m(28),s("p",[t._v("In case you want to compress your images, use "),s("a",{attrs:{href:"https://www.npmjs.com/package/image-webpack-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("image-webpack-loader"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://www.npmjs.com/package/svgo-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("svgo-loader"),s("OutboundLink")],1),t._v(" (SVG specific), or "),s("a",{attrs:{href:"https://www.npmjs.com/package/imagemin-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("imagemin-webpack-plugin"),s("OutboundLink")],1),t._v(". This type of loader should be applied first to the data, so remember to place it as the last within "),s("code",[t._v("use")]),t._v(" listing.")]),s("p",[t._v("Compression is particularly valuable for production builds as it decreases the amount of bandwidth required to download your image assets and speed up your site or application as a result.")]),t._m(29),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/resize-image-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("resize-image-loader"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.npmjs.com/package/responsive-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("responsive-loader"),s("OutboundLink")],1),t._v(" allow you to generate "),s("code",[t._v("srcset")]),t._v(" compatible collections of images for modern browsers. "),s("code",[t._v("srcset")]),t._v(" gives more control to the browsers over what images to load and when resulting in higher performance.")]),t._m(30),t._m(31),t._m(32),t._m(33),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/webpack-spritesmith",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-spritesmith"),s("OutboundLink")],1),t._v(" converts provided images into a sprite sheet and Sass/Less/Stylus mixins. You have to set up a "),s("code",[t._v("SpritesmithPlugin")]),t._v(", point it to target images, and set the name of the generated mixin. After that, your styling can pick it up:")]),t._m(34),t._m(35),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/image-trace-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("image-trace-loader"),s("OutboundLink")],1),t._v(" loads images and exposes the results as "),s("code",[t._v("image/svg+xml")]),t._v(" URL encoded data. It can be used in conjunction with "),s("em",[t._v("file-loader")]),t._v(" and "),s("em",[t._v("url-loader")]),t._v(" for showing a placeholder while the actual image is being loaded.")]),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/lqip-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("lqip-loader"),s("OutboundLink")],1),t._v(" implements a similar idea. Instead of tracing, it provides a blurred image instead of a traced one.")]),t._m(36),s("p",[t._v("Sometimes getting the only reference to an image isn't enough. "),s("a",{attrs:{href:"https://www.npmjs.com/package/image-size-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("image-size-loader"),s("OutboundLink")],1),t._v(" emits image dimensions, type, and size in addition to the reference to the image itself.")]),t._m(37),t._m(38),t._m(39),s("p",[t._v("If you are using React, then you use "),s("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-transform-react-jsx-img-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-transform-react-jsx-img-import"),s("OutboundLink")],1),t._v(" to generate the "),s("code",[t._v("require")]),t._v(" automatically. In that case, you would end up with code:")]),t._m(40),t._m(41),t._m(42),t._m(43),s("p",[t._v("If you are using images and "),s("em",[t._v("css-loader")]),t._v(" with the "),s("code",[t._v("sourceMap")]),t._v(" option enabled, it's important that you set "),s("code",[t._v("output.publicPath")]),t._v(" to an absolute value pointing to your development server. Otherwise, images aren't going to work. See "),s("a",{attrs:{href:"https://github.com/webpack/style-loader/issues/55",target:"_blank",rel:"noopener noreferrer"}},[t._v("the relevant webpack issue"),s("OutboundLink")],1),t._v(" for further explanation.")]),t._m(44),s("p",[t._v("Webpack allows you to inline images within your bundles when needed. Figuring out proper inlining limits for your images requires experimentation. You have to balance between bundle sizes and the number of requests.")]),s("p",[t._v("To recap:")]),t._m(45),s("p",[t._v("You'll learn to load fonts using webpack in the next chapter.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"loading-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading Images")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"setting-up-url-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-url-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up "),a("em",[this._v("url-loader")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[this._v("url-loader")]),this._v(" is a good starting point and it's the perfect option for development purposes, as you don't have to care about the size of the resulting bundle. It comes with a "),a("em",[this._v("limit")]),this._v(" option that can be used to defer image generation to "),a("em",[this._v("file-loader")]),this._v(" after an absolute limit is reached. This way you can inline small files to your JavaScript bundles while generating separate files for the bigger ones.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you use the limit option, you need to install both "),a("em",[this._v("url-loader")]),this._v(" and "),a("em",[this._v("file-loader")]),this._v(" to your project. Assuming you have configured your styles correctly, webpack resolves any "),a("code",[this._v("url()")]),this._v(" statements your styling contains. You can point to the image assets through your JavaScript code as well.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In case the "),a("code",[this._v("limit")]),this._v(" option is used, "),a("em",[this._v("url-loader")]),this._v(" passes possible additional options to "),a("em",[this._v("file-loader")]),this._v(" making it possible to configure its behavior further.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To load "),a("em",[this._v(".jpg")]),this._v(" and "),a("em",[this._v(".png")]),this._v(" files while inlining files below 25kB, you would have to set up a loader:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token regex"}},[t._v("/\\.(jpg|png)$/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"url-loader"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("25000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("If you prefer to use another loader than "),a("em",[this._v("file-loader")]),this._v(" as the "),a("em",[this._v("limit")]),this._v(" is reached, set "),a("code",[this._v('fallback: "some-loader"')]),this._v(". Then webpack will resolve to that instead of the default.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"setting-up-file-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-file-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up "),a("em",[this._v("file-loader")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you want to skip inlining altogether, you can use "),a("em",[this._v("file-loader")]),this._v(" directly. The following setup customizes the resulting filename. By default, "),a("em",[this._v("file-loader")]),this._v(" returns the MD5 hash of the file's contents with the original extension:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token regex"}},[t._v("/\\.(jpg|png)$/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"file-loader"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"[path][name].[hash].[ext]"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("If you want to output your images below a particular directory, set it up with "),a("code",[this._v('name: "./images/[hash].[ext]"')]),this._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("W> Be careful not to apply both loaders on images at the same time! Use the "),a("code",[this._v("include")]),this._v(" field for further control if "),a("em",[this._v("url-loader")]),a("code",[this._v("limit")]),this._v(" isn't enough.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"integrating-images-to-the-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrating-images-to-the-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrating Images to the Project")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),a("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" file-loader url-loader --save-dev\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("webpack.parts.js")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("exports"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("loadImages")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" include"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclude"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token regex"}},[t._v("/\\.(png|jpg)$/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"url-loader"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("To attach it to the configuration, adjust as follows. The configuration defaults to "),s("em",[t._v("url-loader")]),t._v(" during development and uses both "),s("em",[t._v("url-loader")]),t._v(" and "),s("em",[t._v("file-loader")]),t._v(" in production to maintain smaller bundle sizes. "),s("em",[t._v("url-loader")]),t._v(" uses "),s("em",[t._v("file-loader")]),t._v(" implicitly when "),s("code",[t._v("limit")]),t._v(" is set, and both have to be installed for the setup to work.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("webpack.config.js")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("merge")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\nleanpub"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  parts"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("loadImages")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"[name].[ext]"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" developmentConfig "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("merge")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\nleanpub"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  parts"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("loadImages")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To test that the setup works, download an image or generate it ("),a("code",[this._v("convert -size 100x100 gradient:blue logo.png")]),this._v(") and refer to it from the project:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("src/main.css")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("background")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cornsilk"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nleanpub-start-insert\n  "),s("span",{attrs:{class:"token property"}},[t._v("background-image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token url"}},[t._v('url("./logo.png")')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("background-repeat")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-repeat"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("background-position")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nleanpub-end-insert\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The behavior changes depending on the "),a("code",[this._v("limit")]),this._v(" you set. Below the limit, it should inline the image while above it should emit a separate asset and a path to it. The CSS lookup works because of "),a("em",[this._v("css-loader")]),this._v(". You can also try importing the image from JavaScript code and see what happens.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"loading-svgs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-svgs","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading SVGs")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token regex"}},[t._v("/\\.svg$/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"file-loader"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".icon")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{attrs:{class:"token property"}},[t._v("background-image")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token url"}},[t._v('url("../assets/icon.svg")')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("You can still use "),a("em",[this._v("url-loader")]),this._v(" and the tips above with SVGs too.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"optimizing-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing Images")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"utilizing-srcset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utilizing-srcset","aria-hidden":"true"}},[this._v("#")]),this._v(" Utilizing "),a("code",[this._v("srcset")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"loading-images-dynamically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-images-dynamically","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading Images Dynamically")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Webpack allows you to load images dynamically based on a condition. The techniques covered in the "),a("em",[this._v("Code Splitting")]),this._v(" and "),a("em",[this._v("Dynamic Loading")]),this._v(" chapters are enough for this purpose. Doing this can save bandwidth and load images only when you need them or preload them while you have time.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"loading-sprites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-sprites","aria-hidden":"true"}},[this._v("#")]),this._v(" Loading Sprites")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Spriting")]),this._v(" technique allows you to combine multiple smaller images into a single image. It has been used for games to describe animations and it's valuable for web development as well as you avoid request overhead.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"~sprite.sass"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token selector"}},[t._v(".close-button ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("sprite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$close")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token selector"}},[t._v(".open-button ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("sprite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$open")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"using-placeholders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-placeholders","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Placeholders")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-image-dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-image-dimensions","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Image Dimensions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"referencing-to-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referencing-to-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Referencing to Images")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Webpack can pick up images from style sheets through "),a("code",[this._v("@import")]),this._v(" and "),a("code",[this._v("url()")]),this._v(" assuming "),a("em",[this._v("css-loader")]),this._v(" has been configured. You can also refer to your images within the code. In this case, you have to import the files explicitly:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" src "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"./avatar.png"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Use the image in your code somehow now")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("Profile")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("src"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("Profile")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"avatar.png"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("It's also possible to set up dynamic imports as discussed in the "),a("em",[this._v("Code Splitting")]),this._v(" chapter. Here's a small example:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`./avatars/")]),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("avatar"),s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token string"}},[t._v("`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("`"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"images-and-css-loader-source-map-gotcha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#images-and-css-loader-source-map-gotcha","aria-hidden":"true"}},[this._v("#")]),this._v(" Images and "),a("em",[this._v("css-loader")]),this._v(" Source Map Gotcha")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("em",[t._v("url-loader")]),t._v(" inlines the assets within JavaScript. It comes with a "),s("code",[t._v("limit")]),t._v(" option that allows you to defer assets above it to "),s("em",[t._v("file-loader")]),t._v(".")]),s("li",[s("em",[t._v("file-loader")]),t._v(" emits image assets and returns paths to them to the code. It allows hashing the asset names.")]),s("li",[t._v("You can find image optimization related loaders and plugins that allow you to tune their size further.")]),s("li",[t._v("It's possible to generate "),s("strong",[t._v("sprite sheets")]),t._v(" out of smaller images to combine them into a single request.")]),s("li",[t._v("Webpack allows you to load images dynamically based on a given condition.")]),s("li",[t._v("If you are using source maps, you should remember to set "),s("code",[t._v("output.publicPath")]),t._v(" to an absolute value for the images to show up.")])])}],!1,null,null,null);n.options.__file="02_images.md";a.default=n.exports}}]);