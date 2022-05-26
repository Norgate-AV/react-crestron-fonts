const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const copy = require("./rollup/rollup-plugin-copy");

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                plugins: [
                    postcssImport(),
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                ],
                inject: false,
                extract: !!options.writeMeta,
                // writeDefinitions: true,
            }),
            copy({
                targets: [
                    { src: "./src/styles/fonts/**/*", dest: "./dist/fonts" },
                ],
            }),
        );

        return config;
    },
};
