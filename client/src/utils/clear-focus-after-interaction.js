export const handleFocusOnInteraction = () => {
    const handleFocus = (e) => {
        // Ignore if event target has the following className
        // -- used to keep form inputs interactive
        if (e.target.classList?.contains('maintain-focus')) return;

        // Clear Focus
        if (
            e.type === 'click' ||
            (e.type === 'keyup' && e.keyCode === 13) ||
            e.type === 'drag'
        ) {
            document.activeElement.blur();
        }
    };

    window.addEventListener('click', handleFocus);
    window.addEventListener('keyup', handleFocus);
    window.addEventListener('drag', handleFocus);

    return () => {
        window.removeEventListener('click', handleFocus);
        window.removeEventListener('keyup', handleFocus);
        window.removeEventListener('drag', handleFocus);
    };
};
