// Extendable Map of Device Breakpoints
// -- See freeCodeCamp Article on Breakpoints:
// -- http://tiny.cc/fcc-breakpoints
const device = {
    mobileLg: { min: '375px' },
    tablet: { min: '600px' },
    laptop: { min: '769px' },
    desktop: { min: '1025px' },
    largeScreen: { min: '1351px' },
};

// Media Queries
// -- NOTE: @media defaults to all screens | "@media and all"
const mediaQuery = {
    /** [ NOTE: ]
     *? default styles (i.e. top-level/no media query) applied at:
     *! 0 to 599 (px) --> if mobileLg NOT SPECIFIED
     ** 0 to 359 (px) --> if mobileLg IS SPECIFIED
     */

    // 375 to 599 (px) | large mobile screen (+ small tablets)
    mobileLg: `@media (min-width: ${device.mobileLg.min})`,
    // 600 to 768 (px) | tablet (+ mobile-horizontal)
    tablet: `@media (min-width: ${device.tablet.min})`,
    // 769 to 1024 (px) | laptop
    laptop: `@media (min-width: ${device.laptop.min})`,
    // 1025 (px) or more | desktop
    desktop: `@media (min-width: ${device.desktop.min})`,
    largeScreen: `@media (min-width: ${device.largeScreen.min})`,

    // Hoverable devices only
    hoverable: `@media (hover: hover) and (pointer: fine)`,
};

export default mediaQuery;
