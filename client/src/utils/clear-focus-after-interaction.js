export const clearFocusAfterInteraction = () => {
    const clearFocus = (e) => {
        // Ignore if event target is any of the following
        // -- form input
        if (e.target.classList.contains('form-input')) return;

        // Clear Focus
        if (
            e.type === 'click' ||
            (e.type === 'keyup' && e.keyCode === 13) ||
            e.type === 'drag'
        ) {
            document.activeElement.blur();
        }
    };

    window.addEventListener('click', clearFocus);
    window.addEventListener('keyup', clearFocus);
    window.addEventListener('drag', clearFocus);

    return () => {
        window.removeEventListener('click', clearFocus);
        window.removeEventListener('keyup', clearFocus);
        window.removeEventListener('drag', clearFocus);
    };
};
