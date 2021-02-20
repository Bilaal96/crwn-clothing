export const clearFocusAfterInteraction = () => {
    const clearFocus = (e) => {
        if (
            e.type === 'click' ||
            (e.type === 'keyup' && e.keyCode === 13) ||
            e.type === 'drag'
        )
            document.activeElement.blur();
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
