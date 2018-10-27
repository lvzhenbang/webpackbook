(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(t,s,a){t.exports=a.p+"assets/img/webpack-process.538c4af0.png"},206:function(t,s,a){"use strict";a.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webpack是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack是什么")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack是一个 "),s("strong",[this._v("模块化打包工具")]),this._v("。Webpack可以像单任务运行工具一样的打包功能。可是，由于Webpack社区提供的插件使打包工具和任务运行工具间的区别变得模糊起来。有时这些插件执行webpack之外的任务，例如：清除打包生成目录或发布打包生成目录文件到服务器。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("如果你想要更为详细的理解构造工具和它们的历史，可以在 "),s("em",[this._v("构造工具的比较")]),this._v(" 这个附录中查找。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack为模块化的文件而存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack为模块化的文件而存在","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack为模块化的文件而存在")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("用Webpack打包一个项目，至少需要 "),a("strong",[t._v("input")]),t._v(" 和 "),a("strong",[t._v("output")]),t._v(" 两部分。打包从用户定义的 "),a("strong",[t._v("entries")]),t._v(" 开始（项目所有模块文件入口）。可以是 "),a("strong",[t._v("模块")]),t._v(" 它们本来的名字，也可以是用 "),a("strong",[t._v("imports")]),t._v(" 导入模块后，模块的别名。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当你用webpack打包一个项目时，它遍历所有的引入模块后，形成一个项目的 "),s("strong",[this._v("依赖关系图")]),this._v(" ，然后根据配置经行 "),s("strong",[this._v("输出")]),this._v("。此外, 根据定义的 "),s("strong",[this._v("分离节点")]),this._v(" 来生成分离模块。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Webpack支持 ES2015，CommonJS 和 AMD 的模块引入语法。"),a("strong",[t._v("loader")]),t._v(" 中的 "),a("em",[t._v("css-loader")]),t._v(" 能很好的处理css，支持 "),a("code",[t._v("@import")]),t._v(" 和 "),a("code",[t._v("url()")]),t._v(" 的语法引入css模块。你也可以用插件来完成指定的功能，如：压缩，国际化, HMR等等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("依赖关系图用来描述各个模块节点间的关系。这里关系图的定义是通过文件间的引用 ("),s("code",[this._v("require")]),this._v(", "),s("code",[this._v("import")]),this._v(")来定义的。Webpack静态的遍历项目中的模块文件来生成关系图，而不执行这些模块文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack的执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack的执行过程","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack的执行过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(145),alt:"Webpack的执行过程"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack从 "),s("strong",[this._v("entries")]),this._v(" 开始工作。通常这些入口通常是JavaScript模块，webpack在这些模块里执行遍历过程。在这个过程中, webpack计算入口匹配的 "),s("strong",[this._v("loader")]),this._v(" ，然后这个 "),s("strong",[this._v("loader")]),this._v(" 的配置告诉webpack如何进行转换。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"解析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 解析过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("入口它自身就是一个模块。当webpack遇到一个模块时，webpack用入口的 "),s("code",[this._v("resolve")]),this._v(" 配置来匹配文件系统。除了 "),s("em",[this._v("node_modules")]),this._v(" 目录外，你可以为webpack指定任意的遍历目录。 webpack派出了匹配文件扩展名的方式, 你可以为目录定义别名。"),s("em",[this._v("NPM依赖")]),this._v(" 这章将有详细的介绍。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"webpack可以解析任何类型的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack可以解析任何类型的文件","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack可以解析任何类型的文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack让你可以处理遇到的各种静态资源，如：你可以用 "),s("strong",[this._v("内联的形式")]),this._v(" 将静态资源放到JavaScript包（最终生成的文件）中来减少请求。Webpack还允许使用CSS模块这样的技术将样式与组件相结合，并避免出现标准的CSS样式问题。正是这种灵活性使得webpack更有价值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"评估过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评估过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 评估过程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假设所有的loader被找到，webpack依次通过每个loader运行模块时，从底部到顶部，从右到左（"),s("code",[this._v("styleLoader(cssLoader('./main.css'))")]),this._v("）评估匹配的loader。最终，你得到Webpack注入到 "),s("strong",[this._v("bundle")]),this._v(" 的结果。"),s("em",[this._v("loader 定义")]),this._v(" 这章节将详细介绍这一块儿。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果所有loader评估过程中没有出现运行时错误，Webpack将把所有的文件打包到一个文件中（包）。"),s("strong",[this._v("Plugins")]),this._v(" 允许你在打包过程的不同阶段拦截 "),s("strong",[this._v("runtime events")]),this._v(" 。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("虽然loader可以做很多工作，但它们不能提供足够的动力来完成高级任务。插件可以拦截webpack应用的 "),s("strong",[this._v("runtime events")]),this._v("。一个很好的例子是当 "),s("code",[this._v("MiniCssExtractPlugin")]),this._v(" 与loader一起使用时，分离css到独立的文件中。如果没有这个步骤，CSS将被内嵌在生成的JavaScript中，因为webpack默认将所有代码视为JavaScript。在 "),s("em",[this._v("分离CSS")]),this._v(" 这章中将介绍‘提取’思想。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 输出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个模块被评估过之后，webpack将执行 "),s("strong",[this._v("output")]),this._v("。输出包含一个启动脚本（bundle.js）和一个 manifest（它用来描述在浏览器中，启动脚本应该如何运行。manifest可以独立出来形成一个文件，本书将稍后进行讲解。构建目标不同输出也将不同(web不是唯一的选择。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这不是打包过程的全部内容。例如，你可以定义特定的 "),s("strong",[this._v("分割点")]),this._v(" ，webpack可以根据应用的逻辑生成不同的打包文件。这个思想将在 "),s("em",[this._v("代码分离")]),this._v(" 这章中讲解。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack是配置驱动型的工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack是配置驱动型的工具","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack是配置驱动型的工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 打包开始位置")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./entry.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 输出位置")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 输出到根目录")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 捕获入口的名字，并使用它")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 定义如何处理所有遇到的的引入模块")]),t._v("\n  module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 执行额外的处理")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 根据 Resolution algorithm 定义模块别名")]),t._v("\n  resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"带hash的静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带hash的静态资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 带hash的静态资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用webpack，你可以为每一个包名注入一个hash(如, "),s("em",[this._v("app.d587bbd6.js")]),this._v(") ，去校验客户端的报是否有效。在理想的情况下，"),s("code",[this._v("包分离")]),this._v(" （一个大的压缩文件分成几个小的压缩文件） 允许客户端之家在一小部分数据。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"热交换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热交换","aria-hidden":"true"}},[this._v("#")]),this._v(" 热交换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码分离","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码分离")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack并不能解决所有的问题，但是他确实解决了打包的问题。这减少了一个开发过程中的的担忧。使用 "),s("em",[this._v("package.json")]),this._v(" 和 webpack 本身就可以让你的变成之路走的更远。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Webpack是一个 "),a("strong",[t._v("module bundler")]),t._v("，但你也可以用它来运行任务。")]),a("li",[t._v("Webpack依赖于 "),a("strong",[t._v("依赖图")]),t._v(" 工作。Webpack遍历所有的源文件生成依赖图，然后它根据这个依赖图结合配置来生成最终的文件。")]),a("li",[t._v("Webpack依赖 "),a("strong",[t._v("loaders")]),t._v(" 和 "),a("strong",[t._v("plugins")]),t._v("。Loaders操作的是模块；plugins依赖webpack提供的钩子，并能很好的访问它的执行过程。")]),a("li",[t._v("Webpack的 "),a("strong",[t._v("configuration")]),t._v(" 描述了如何转换图形这样的静态资源，以及它应该如何输出。部分配置信息引入原类型的静态资源，如："),a("strong",[t._v("code splitting")]),t._v(" 这样的功能被引入。")]),a("li",[a("strong",[t._v("Hot Module Replacement")]),t._v(" (HMR) 使webpack流行开来。这个功能可以在浏览器中更新代码，而不需要刷新整个页面，极大地增强了开发体验 。")]),a("li",[t._v("Webpack可以生成文件的同时生成一个 "),a("strong",[t._v("hashes")]),t._v(" ，当文件的内容发生改变时，这个对应的hashes也将发生变化。")])])}],n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("React和 "),a("strong",[t._v("热交换")]),t._v(" (HMR) 使webpack流行起来。webpack也可以被用在其他开发环境中, 如： "),a("a",{attrs:{href:"https://github.com/rails/webpacker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby on Rails"),a("OutboundLink")],1),t._v("。与名字无关，webpack不仅仅只用在Web中，它可以有不同的打包对象, 具体的将在 "),a("em",[t._v("构造对象")]),t._v(" 章节来讲。")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("如果webpack解析遇到失败，将报一个运行时错误。如果webpack解析模块正确，webpack将根据loader的配置来匹配模块。每个loader只对特定模块的内容进行转换。")]),a("p",[t._v("loader匹配解析后的模块的配置方式有多种，包括模块（文件）和的类型和在文件系统中的位置。webpack甚至允许你根据模块从项目中的引入位置来对其转换模块。")]),a("p",[t._v("webpack的loader执行相同的解析过程。Webpack允许你在决定使用哪个loader时应用类似的逻辑。由于这个原因，loader有自己的配置。如果webpack未能执行loader查找，它将引发一个运行时错误。")]),a("blockquote",[a("p",[t._v("为了实现解析目的, webapck依赖 "),a("a",{attrs:{href:"https://www.npmjs.com/package/enhanced-resolve",target:"_blank",rel:"noopener noreferrer"}},[t._v("增强的 "),a("code",[t._v("resolve")]),a("OutboundLink")],1),t._v("。")])]),t._m(13),a("p",[t._v("Webpack将解析它在构建依赖关系图时遇到的每个模块。如果入口包含依赖项，则递归地对每个依赖执行该流程，直到遍历完成为止。Webpack可以对任何文件类型执行解析，不像Babel或Sass编译器这样的专用工具。")]),t._m(14),a("p",[t._v("虽然webpack主要用于打包JavaScript，但是它也可以捕获像图篇、字体这样的静态资源，然后将它们最终的打包文件中分离出来形成单独的文件。入口是打包这个过程的起点，输出的内容取决于你的配置。")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("At its core, webpack relies on configuration. 这个例子被 "),a("a",{attrs:{href:"https://webpack.js.org/get-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack官方指南"),a("OutboundLink")],1),t._v("采纳，包含如下几个配置项:")]),t._m(23),t._m(24),a("p",[t._v("有时Webpack的配置模型会让人感觉有点不透明，因为配置文件看起来像是一个整体，除非你知道webpack背后的原理，否则很难理解它在做什么。本书存在的主要目的之一，是提供调整配置的方法。")]),t._m(25),t._m(26),t._m(27),a("p",[t._v("你可能已经熟悉一些工具，如"),a("a",{attrs:{href:"http://livereload.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LiveReload"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"http://www.browsersync.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BrowserSync"),a("OutboundLink")],1),t._v("。这些工具在你修改代码时会自动刷新浏览器。 "),a("em",[t._v("热交换")]),t._v(" (HMR) 则更进一步。在React中，它允许应用程序在不强制刷新的情况下保持其状态。虽然这听起来并无特别之处，但实际上却大不相同。")]),a("p",[t._v("HMR也可以在Browserify中通过 "),a("a",{attrs:{href:"https://github.com/milankinen/livereactload",target:"_blank",rel:"noopener noreferrer"}},[t._v("livereactload"),a("OutboundLink")],1),t._v(" 来实现，因此他不是webpack所独有的。")]),t._m(28),a("p",[t._v("除了HMR之外，webpack还有其他很多功能。Webpack允许你用不同的方式来分割代码。甚至当你的程序执行时，可以实现动态加载，这种懒加载因为可以根据需要动态加载，所以广泛的应用在应用程序中。")]),a("p",[t._v("即使是小型应用程序也可以从代码分割这种技术中收益，因为它允许用户更快的获得可用的东西。抛开性能这个性不讲，了解基本的技术也是不错的。")]),t._m(29),a("p",[t._v("虽然Webpack的学习曲线比较陡峭，但是从长远角度来看，它是一个值得学习的工具，会节省不少开发的时间和精力。要了解它与其他工具的不同，可以查看"),a("a",{attrs:{href:"https://webpack.js.org/comparison/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方的对比"),a("OutboundLink")],1),t._v("。")]),t._m(30),a("p",[t._v("综上所述:")]),t._m(31),a("p",[t._v("在书的下一部分，你将学习如何使用webpack构建开发配置，同时了解更多关于它的基本概念。")]),a("blockquote",[a("p",[t._v("如果你还不明白为什么需要打包工具——webpack, 可阅读"),a("a",{attrs:{href:"http://tinselcity.net/whys/packers",target:"_blank",rel:"noopener noreferrer"}},[t._v("我为什么用webpack"),a("OutboundLink")],1),t._v("。")])])])},e,!1,null,null,null);r.options.__file="04_what_is_webpack.md";s.default=r.exports}}]);