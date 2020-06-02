const breakpoints = ['375px', '768px', '1025px', '1125px', '1920px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export default {
    fontSizes: [], // [10, 12, 14, 16, 20, 24, 30, 38]
    fontWeights: {
        // 100 – 900
        // light: '200',
        // regular: '200',
        // medium: '300',
        bold: '700',
        // bolder: '700',
    },
    colors: {
        black: '#000',
        white: '#fff',
        green: '#0de99a',
        grey: '#f8f9fa',
        darkgrey: '#191919',
    },
    space: [], // [0, 4, 8, 16, 32, 64, 128, 256]
    // fonts: {
    //     sans: 'system-ui, sans-serif',
    // },
    breakpoints,
};
