// Colour Palette
const colors = {
    // A
    antiquewhite: '#faebd7',
    // B
    bahamaBlue: '#1e5373',
    black: '#000000',
    // C
    charcoal: '#4A4A4A',
    // coralLight: '#f59674',
    coralLight: '#FF8C63',
    coral: '#FF7f50',
    coralPink: '#F88379',
    // D
    dimGrey: '#5F5F5F', // ! NOT USED
    // G
    geraldine: '#EC7272', // washed out pink-red
    greenHaze: '#009879',
    // H
    hippiePink: '#BF505F',
    // I
    ivory: '#F4EAE6', // Page Background
    // L
    lightCharcoal: '#5B7586',
    // M
    mediumSeaGreen: '#3CB371',
    mistyBlue: '#2F5061', // rgba(47, 80, 97, 1)
    mistyBlueMedium: 'rgba(47, 80, 97, 0.8)',
    mistyBlueLight: 'rgba(47, 80, 97, 0.6)',
    // O
    overlay: 'rgba(0, 0, 0, 0.4)',
    // P
    pelorous: '#3191CA', // bright light blue
    // T
    tealGreen: '#4297A0',
    // W
    warningBg: '#FFC0CB',
    warningText: '#A64452',
    white: '#FFFFFF',
};

// Styled Components Theme
const theme = {
    // Themed Colors
    primary: colors.coral,
    secondary: colors.pelorous,
    neutral: {
        black: '#000000',
        charcoal: colors.charcoal,
        white: '#FFFFFF',
    },
    accent: colors.greenHaze,
    background: colors.ivory,

    // Entire color palette - for custom styles
    colors,

    fontFamily: ['Open Sans', 'sans-serif'], // ! NOT USED
    fontSize: {
        h1: {
            // Media Query Breakpoints
            xs: '1.8rem',
            sm: '2.2rem',
            md: '2.6rem',
            lg: '3rem',
            xl: '3.4rem',

            // CSS clamp()
            min: '1.8rem',
            pref: '2vw',
            max: '3.4rem',
        },
        h2: {
            xs: '1.6rem', // 1.6 | ALT STYLE
            sm: '1.8rem', // 2.2
            md: '2.2rem', // 2.6
            lg: '2.4rem', // 2.8
            xl: '2.6rem', // 3
        },
        h3: '2rem',
        p: '1.8rem',
        primaryText: '1.6rem',
        secondaryText: '1.4rem',
        nav: '',
        cartIcon: '',
        dirTitle: '',
        dirSubtitle: '',
        pageHeading: '',
        colPrevTitle: '',
        triRight: '',
        triTopBottom: '',
        colItemName: '',
        colItemPrice: '',
        btn: '',
    },
};
console.log(theme.colors);

export default theme;
