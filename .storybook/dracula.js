import { create } from "@storybook/theming";

const dracula = {
    background: "#22212C",
    comment: "#7970A9",
    selection: "#454158;",
    foreground: "#F8F8F2",
    cyan: "#80FFEA",
    green: "#8AFF80",
    orange: "#FFCA80",
    pink: "#FF80BF",
    purple: "#9580FF",
    red: "#FF9580",
    yellow: "#FFFF80",
};

export default create({
    base: "dark",

    colorPrimary: dracula.pink,
    colorSecondary: dracula.cyan,

    // UI
    appBg: dracula.background,
    appContentBg: dracula.background,
    appBorderColor: dracula.purple,
    appBorderRadius: 4,

    // Typography
    fontBase: '"Fira Code", "Open Sans", sans-serif',
    fontCode: '"Fira Code", monospace',

    // Text colors
    textColor: dracula.foreground,
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: dracula.foreground,
    barSelectedColor: dracula.selection,
    barBg: dracula.background,

    // Form colors
    inputBg: dracula.background,
    inputBorder: dracula.purple,
    inputTextColor: dracula.foreground,
    inputBorderRadius: 4,

    brandTitle: "My custom storybook",
    brandUrl: "https://example.com",
    brandImage: "https://place-hold.it/350x150",
    brandTarget: "_self",
});
