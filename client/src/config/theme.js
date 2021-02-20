// Breakpoints
// -- SEE URL:
// -- https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
const device = {
    mobile: {
        min: '320px',
        max: '480px',
    },
    tablet: {
        min: '481px',
        max: '768px',
    },
    laptop: {
        min: '769px',
        max: '1024px',
    },
    desktop: {
        min: '1025px',
        // exclude max so large screens share desktop styles
        max: '1200px',
    },
};

export const mediaQuery = {
    tablet: `@media (min-width: ${device.tablet.max})`,
    laptop: `@media (min-width: ${device.laptop.max})`,
    desktop: `@media (min-width: ${device.desktop.max})`,
    hoverable: `@media (hover: hover) and (pointer: fine)`,
    // REVIEW Experimental
    notHoverable: `@media not all and (hover: hover) and (pointer: fine)`,
};

// Theme
export default {
    // Colour Palette
    colors: {
        antiquewhite: '#faebd7', // SideNav Selected Hover
        black: '#000000',
        charcoal: '#4A4A4A',
        coral: '#FF7f50',
        coralPink: '#F88379',
        dimGrey: '#5F5F5F', // NOT USED YET
        geraldine: '#EC7272', // washed out pink-red
        ivory: '#F4EAE6', // Page Background
        lightCharcoal: '#5B7586',
        mediumSeaGreen: '#3CB371',
        mistyBlue: '#2F5061',
        overlay: 'rgba(0, 0, 0, 0.6)',
        pelorous: '#3191CA', // bright light blue}
        tealGreen: '#4297A0',
        white: '#FFFFFF',
    },
    fonts: ['Open Sans', 'sans-serif'],
};
