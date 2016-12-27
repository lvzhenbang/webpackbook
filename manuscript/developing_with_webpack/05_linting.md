# Linting in Webpack

Nothing is easier than making mistakes when coding in JavaScript. Linting is one of those techniques that can help you to make less mistakes. You can spot issues before they become actual problems.

Better yet, modern editors and IDEs offer strong support for popular tools. This means you can spot possible issues as you are developing. Despite this, it is a good idea to set them up with Webpack. That allows you to cancel a production build that might not be up to your standards for example.

## Brief History of Linting in JavaScript

The linter that started it all for JavaScript is Douglas Crockford's [JSLint](http://www.jslint.com/). It is opinionated like the man himself. The next step in evolution was [JSHint](http://jshint.com/). It took the opinionated edge out of JSLint and allowed for more customization. [ESLint](http://eslint.org/) is the newest tool in vogue.

### ESLint is Customizable

ESLint goes to the next level as it allows you to implement custom rules, parsers, and reporters. ESLint works with Babel and JSX syntax making it ideal for React projects. It doesn't support JSX by default, though, so a Babel specific parser will need to be used.

ESLint rules have been documented well and you have full control over their severity. These features alone make it a powerful tool. Better yet, there is a large amount of rules and presets beyond the core as the community has built on top of it.

### eslint-config-airbnb

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) is a good example of a popular preset. Often it is enough to find a preset you like, tweak it a little bit to your liking with some local rules, or by deriving a preset of your own based on it, and then using that. This way you don't have to worry so much about all the available functionality.

### JSCS Joined the ESLint Project

It is quite telling that a competing project, JSCS, [decided to merge its efforts with ESLint](http://eslint.org/blog/2016/04/welcoming-jscs-to-eslint). JSCS reached end of life with its 3.0.0 release and the core team joined with ESLint.

### Linting is About More than Just Catching Issues

Besides linting for issues, it can be useful to manage the code style on some level. Nothing is more annoying than having to work with source code that has mixed tabs and spaces. Stylistically consistent code reads better and is easier to work with. Linting tools allow you to do this.

Establishing strong linting can be beneficial especially in a context where you need to collaborate with others. Even when working alone you will benefit from linting as it can catch obvious issues you might otherwise neglect. JavaScript as a language allows a lot of usage some of which, while valid, may not be the clearest to understand or may be incorrect even.

Linting does **not** replace proper testing, but it can complement testing approaches. It is one way to harden a codebase and make it a little harder to break. This is particularly important as the size of your project grows and it becomes more challenging to manage.

## Webpack and JSHint

Interestingly, no JSLint loader seems to exist for webpack yet. Fortunately, there's one for JSHint. You could set it up on a legacy project easily. To get started, install [jshint-loader](https://www.npmjs.com/package/jshint-loader) to your project first:

```bash
npm i jshint jshint-loader --save-dev
```

In addition, you will need a little bit of configuration:

```javascript
var common = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'jshint-loader',
        // Define an include so we check just the files we need
        include: PATHS.app,

        // Execute before other loaders
        enforce: 'pre'
      }
    ]
  },
};
```

JSHint will look into specific rules to apply from `.jshintrc`. You can also define custom settings within a `jshint` object at your Webpack configuration. Exact configuration options have been covered at [the JSHint documentation](http://jshint.com/docs/) in detail. `.jshintrc` could look like this:

**.jshintrc**

```json
{
  "browser": true,
  "camelcase": false,
  "esnext": true,
  "indent": 2,
  "latedef": false,
  "newcap": true,
  "quotmark": "double"
}
```

This tells JSHint we're operating within browser environment, don't care about linting for camelcase naming, want to use double quotes everywhere and so on.

## Setting Up ESLint

![ESLint](images/eslint.png)

[ESLint](http://eslint.org/) is a recent linting solution for JavaScript. It builds on top of ideas presented by JSLint and JSHint. More importantly it allows you to develop custom rules. As a result, a nice set of rules have been developed for React in the form of [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react).

T> Since *v1.4.0* ESLint supports a feature known as [autofixing](http://eslint.org/blog/2015/09/eslint-v1.4.0-released/). It allows you to perform certain rule fixes automatically. To activate it, pass the flag `--fix` to the tool. It is also possible to use this feature with Webpack, although you should be careful with it.

### Connecting ESlint with *package.json*

To get started, install ESLint as a development dependency:

```bash
npm i eslint --save-dev
```

This will add ESLint as our project development dependency. Next, we'll need to do some configuration so we can run ESLint easily through npm. I am using the `test` namespace to signify it's a testing related task. I am also enabling caching to improve performance on subsequent runs. Add the following:

**package.json**

```json
"scripts": {
  ...
  "test:lint": "eslint . --ext .js --ext .jsx --cache"
}
...
```

Given ESLint expects configuration to work, generate a sample:

```bash
node_modules/.bin/eslint --init
```

T> You can check the exact location through `npm bin`. This can be different depending on your operating system.

If you run `npm run test:lint` now, it will trigger ESLint against all JS and JSX files of our project. This configuration will likely lint a bit too much. Set up *.eslintignore* to the project root like this to skip *build/*:

**.eslintignore**

```bash
build/
```

Given most projects contain *.gitignore*, ESLint can be configured to use that instead of *.eslintignore* like this:

**package.json**

```json
"scripts": {
  ...
  "test:lint": "eslint . --ext .js --ext .jsx --ignore-path .gitignore --cache"
}
...
```

If you need to ignore some specific directory in addition to the *.gitignore* definitions, you can pass `--ignore-pattern dist` kind of declaration to ESLint.

T> ESLint supports custom formatters through `--format` parameter. [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter) is an example of a formatter that provides terminal friendly output. This way you can jump conveniently straight to the warnings and errors from there.

T> You can get more performance out of ESLint by running it through a daemon, such as [eslint_d](https://www.npmjs.com/package/eslint_d). Using it brings down the overhead and it can bring down linting times considerably.

### Configuring ESLint

In order to truly benefit from ESLint, you'll need to configure it. There are a lot of rules included, you can load even more through plugins, and you can even write your own. See the official [ESLint rules documentation](http://eslint.org/docs/rules/) for more details on rules.

Consider the sample configuration below. It extends the recommended set of rules with some of our own:

**.eslintrc**

```json
{
  // Extend existing configuration
  // from ESlint and eslint-plugin-react defaults.
  "extends": [
    "eslint:recommended", "plugin:react/recommended"
  ],
  // Enable ES6 support. If you want to use custom Babel
  // features, you will need to enable a custom parser
  // as described in a section below.
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  // Enable custom plugin known as eslint-plugin-react
  "plugins": [
    "react"
  ],
  "rules": {
    // Disable `no-console` rule
    "no-console": 0,
    // Give a warning if identifiers contain underscores
    "no-underscore-dangle": 1,
    // Default to single quotes and raise an error if something
    // else is used
    "quotes": [2, "single"]
  }
}
```

Beyond vanilla JSON, ESLint supports other formats, such as JavaScript or YAML. If you want to use a different format, name the file accordingly. I.e., *.eslintrc.js* would work for JavaScript. In that case you should export the configuration through `module.exports`. See the [documentation](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) for further details.

T> It is possible to generate a custom *.eslintrc* by using `eslint --init`. It will ask you a series of questions and then write the file for you.

T> ESLint supports ES6 features through configuration. You will have to specify the features to use through the [ecmaFeatures](http://eslint.org/docs/user-guide/configuring.html#specifying-language-options) property.

T> There are useful plugins, such as [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) , and [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), that you might want to consider integrating to your project.

### Connecting ESLint with Babel

In case you want to lint against custom language features that go beyond standard ES6, use [babel-eslint](https://www.npmjs.com/package/babel-eslint). Install the parser first:

```bash
npm i babel-eslint --save-dev
```

Change *.eslintrc* like this so that ESLint knows to use the custom parser over the default one:

```json
{
  ...
leanpub-start-insert
  "parser": "babel-eslint",
leanpub-end-insert
leanpub-start-delete
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
leanpub-end-delete
  ...
}
```

### Severity of ESLint Rules

The severity of an individual rule is defined by a number as follows:

* 0 - The rule has been disabled.
* 1 - The rule will emit a warning.
* 2 - The rule will emit an error.

Some rules, such as `quotes`, accept an array instead. This allows you to pass extra parameters to them. Refer to the rule's documentation for specifics.

T> Note that you can write ESLint configuration directly to *package.json*. Set up a `eslintConfig` field, and write your declarations below it. You can also write `.eslintrc.js` and export the configuration as JavaScript from there. ESLint can parse YAML too.

T> There's a [full listing of available ESLint rules](http://eslint.org/docs/rules/). This is handy if you are curious about what's available. The official documentation is worth studying too.

### Dealing with `ELIFECYCLE` Error

In case the linting process fails, `npm` will give you a nasty looking `ELIFECYCLE` error. A good way to achieve a tidier output is to invoke `npm run lint --silent` (or `-s`). That will hide the `ELIFECYCLE` bit. You can define an alias for this purpose. In Unix you would do `alias run='npm run --silent'` and then `run <script>`.

Alternatively, you could pipe output to `true` like this:

**package.json**

```json
"scripts": {
  ...
  "test:lint": "eslint . --ext .js --ext .jsx || true"
}
...
```

The problem with this approach is that if you invoke `test:lint` through some other command, it will pass even if there are failures. If you have another script that does something like `npm run test:lint && npm run build`, it will build regardless of the output of the first command!

### Connecting ESLint with Webpack

We can make Webpack emit ESLint messages for us by using [eslint-loader](https://www.npmjs.com/package/eslint-loader). As the first step execute

```bash
npm i eslint-loader --save-dev
```

W> Note that `eslint-loader` will use a globally installed version of ESLint unless you have one included with the project itself! Make sure you have ESLint as a development dependency to avoid strange behavior.

You can set it up as below to make sure the linter gets executed before the other code. This way we'll know early of if our code fails to lint during development. It is useful to include linting to the production target of your project as well.

**webpack.config.js**

```javascript
const common = {
  ...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: PATHS.app,

        use: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },
  ...
};
```

If you execute `npm start` now and break some linting rule while developing, you should see that in the terminal output. The same should happen when you build the project.

T> Especially on bigger projects it may be beneficial to run ESLint outside of webpack. That keeps code compilation fast while still giving the advantage of linting. Solutions like [lint-staged](https://www.npmjs.com/package/lint-staged) and [fastlint](https://www.npmjs.com/package/fastlint) can make this even faster.

T> Most IDEs and editors have good ESLint integration so you can spot issues as you develop. This applies to other linting tools as well.

T> To learn how to write an ESLint plugin, check out the *Writing ESLint Plugins* appendix for more information. The *Customizing ESLint* appendix digs deeper into customization options and further resources.

## Linting CSS

[stylelint](http://stylelint.io/) allows us to lint CSS. It can be used with webpack through [postcss-loader](https://www.npmjs.com/package/postcss-loader).

```bash
npm i stylelint postcss-loader --save-dev
```

Next, we'll need to integrate it with our configuration:

**webpack.config.js**

```javascript
...
const stylelint = require('stylelint');

...

const common = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: PATHS.app,

        use: 'postcss-loader',
        enforce: 'pre'
      },
      ...
    ],
    ...
  }
}
```

This is also going to require PostCSS specific configuration:

**postcss.config.js**

```javascript
module.exports = {
  plugins: {
    stylelint: {
      rules: {
        'color-hex-case': 'lower'
      },
      // Ignore node_modules CSS
      ignoreFiles: 'node_modules/**/*.css'
    }
  }
};
```

If you define a CSS rule, such as `background-color: #EFEFEF;`, you should see a warning at your terminal. See stylelint documentation for a full list of rules. npm lists [possible stylelint rulesets](https://www.npmjs.com/search?q=stylelint-config). You consume them as your project dependency like this:

```javascript
const configSuitcss = require('stylelint-config-suitcss');

...

stylelint(configSuitcss)
```

It is possible to define configuration through a *.stylelintrc* file. The idea is similar as for other linting tools. There's also a CLI available.

T> If you want to try out an alternative way to set up stylelint, consider using the [stylelint-webpack-plugin](https://www.npmjs.com/package/stylelint-webpack-plugin) instead.

## EditorConfig

[EditorConfig](http://editorconfig.org/) allows you to maintain a consistent coding style across different IDEs and editors. Some even come with built-in support. For others, you have to install a separate plugin. In addition to this you'll need to set up a file like this:

**.editorconfig**

```yaml
root = true

# General settings for whole project
[*]
indent_style = space
indent_size = 4

end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Format specific overrides
[*.md]
trim_trailing_whitespace = false

[app/**.js]
indent_style = space
indent_size = 2
```

## Conclusion

In this chapter, you learned how to lint your code using Webpack in various ways. It is one of those techniques that yields benefits over the long term. You can fix possible problems before they become actual issues.

In the next chapter we'll discuss how to consume packages through npm. Although it's often simple, sometimes some amount of patching might be required.