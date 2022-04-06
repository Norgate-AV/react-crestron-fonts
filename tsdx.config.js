const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                    postcssImport(),
                ],
                inject: false,
                extract: !!options.writeMeta,
            })
        );

        return config;
    },
};
