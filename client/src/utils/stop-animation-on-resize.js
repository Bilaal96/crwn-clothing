/** stopAllAnimationsOnResize()
 * On resizing the Browser window, animations are janky
 * This fn prevents all animations on browser resize
 */
export const stopAllAnimationsOnResize = () => {
    // Add '.resize-animation-stopper' to document.body
    // css-selector is styled to remove transitions & animations
    const setBodyStyles = () => {
        document.body.classList.add('resize-animation-stopper');

        // console.log('stopAnimationOnResize');

        // Wait 400ms then remove the class from all domElements
        setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    };

    window.addEventListener('resize', setBodyStyles);

    // return function that removes 'resize' eventListener
    // -- call this when component unmounts DOM
    return () => window.removeEventListener('resize', setBodyStyles);
};

// REVIEW Attempt to make reusable function for any element
// FIXME - Does not work for conditionally rendered elements
/**
 * optional first param is the eventCallback
 * Could accept className as args --> then do DOM Selection in function body
 *
 * If previous event listener exists --> remove it
 * select DOM elements using elSelector & querySelectorAll
 *  -- returns elements in nested array
 *  -- flatten the array
 *
 * create event callback - Adds css class to each element in the flattened array
 *
 * Add event listener
 */
export const stopAnimationOnResizePerElement = (
    eventCallback,
    ...elSelectors
) => {
    // Remove previous event listener
    window.removeEventListener('resize', eventCallback);

    // Select DOM elements using selectors passed as arg.
    const domElements = elSelectors.map((elSelector) => {
        return [...document.querySelectorAll(`${elSelector}`)];
    });
    console.log(domElements);

    const flatDomElements = domElements.flat();
    console.log(flatDomElements);

    // Add '.resize-animation-stopper' to domElements
    // css-selector is styled to remove transitions & animations
    const setDomElementStyles = () => {
        flatDomElements.map(
            (el) => !!el && el.classList.add('resize-animation-stopper')
        );

        console.log('stopAnimation');

        // Wait 400ms then remove the class from alldomElements
        setTimeout(() => {
            flatDomElements.map(
                (el) => !!el && el.classList.remove('resize-animation-stopper')
            );
        }, 400);
    };

    window.addEventListener('resize', setDomElementStyles);

    // return function that cleans up eventListener
    // -- call this when component unmounts DOM
    return setDomElementStyles;
};
