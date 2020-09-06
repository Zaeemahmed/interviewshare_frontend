const breakpoints = ['375px', '768px', '1025px', '1125px', '1920px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const colors = {
    black: '#000',
    darkgrey: '#191919',
    mediumgrey: '#595959',
    green: '#0de99a',
    grey: '#f8f9fa',
    white: '#fff',
};

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
    colors: colors,
    borders: {
        default: '1px solid ' + colors.mediumgrey,
    },
    borderRadius: {
        default: '8px',
    },
    backgrounds: {
        app: colors.grey,
    },
    space: [], // [0, 4, 8, 16, 32, 64, 128, 256]
    // fonts: {
    //     sans: 'system-ui, sans-serif',
    // },
    breakpoints,
};
