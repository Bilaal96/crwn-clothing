import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

// ---------- Util Functions ----------
// ----- isValidColor() -----
// https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
const isValidColor = (strColor) => {
    // Define HTML <option> element
    const s = new Option().style;

    // If [strColor] is an invalid CSS "color" value
    // [s.color] will NOT be set to [strColor]
    // Instead [s.color] will remain an empty string ""
    s.color = strColor;

    // We test if [s.color] is set (or not) to determine if the color is valid
    // Return true if [s.color] is an empty string, false otherwise
    return s.color !== '';
};

// ----- setColorByProp() -----
// NOTE: [fallbackColor] defaults to black, if arg. is not passed
export const setColorByProp = (theme, colorProp, fallbackColor = 'black') => {
    // if [colorProp] exists in the current styled-components theme
    // return [colorProp] as the CSS value
    if (!!theme.colors[colorProp]) {
        return theme.colors[colorProp];
    } else {
        // Otherwise return [colorProp] if it is a valid CSS color-string
        // If [colorProp] is NOT a valid CSS color-string return [fallbackColor]
        return isValidColor(colorProp) ? colorProp : fallbackColor;
    }
};

/** Style Guide
 * ---------- Button Styling Patterns ----------
 * ----- No / transparent Border -----
 *  ? SUMMARY: bg | text | border: transparent 
 * PRIMARY: background
 * SECONDARY: text --> requires good contrast with PRIMARY
 * BORDER: Use "border-color: transparent" to set NO BORDER

 * ----- With Border -----
 *  ? SUMMARY: text & border | bg: any / white
 * PRIMARY: text & border colors  match
 * SECONDARY: background --> requires good contrast with PRIMARY
 * * VARIATION: "OUTLINE" --> set background to white

 * ----- Custom Button Styles -----
 *  ? SUMMARY: bg | text | border | any
 * bg, text & border --> each unique color
 
 * NOTE: Create CUSTOM button like so: 
    --> IMPORT Button / ButtonOutlined 
    --> USE styled([ Button | ButtonOutlined ]) TO OVERRIDE BASE STYLES
 */

/** ALL BUTTON PROPS
 * ---------- BUTTON PROPS ----------
 * --- DEFAULT & OUTLINED BUTTONS ---
 * primary 
    --> [DEFAULT] set background color
    --> [OUTLINED] set text & border (foreground) color
 * secondary 
    --> [DEFAULT] set text & border (foreground) color
    --> [OUTLINED] set background color
 * inline --> set display: inline-block
 * extend --> set width: 100%
 * width --> set width: ${prop-value} || auto
 * height --> set height: ${prop-value} || 5rem
 * margin --> set margin: ${prop-value} || 0
 * focus --> set box-shadow color on :focus event
 
 * disabled [HTML attribute] --> override component with styles for disabled button
*/

/** COMPONENT: Button
 * ---------- Button - DEFAULT COLOURS ----------
 * ----- BASE & ACTIVE -----
    - background: black
    - color: white
    - border-color: transparent
 * ----- HOVER ----- 
    - background: white
    - color: black
    - border-color: black
 */
export const Button = styled.button.attrs((props) => ({
    type: props.type || 'button',
}))`
    display: ${(props) => (props.inline ? 'inline-block' : 'block')};
    width: ${(props) => (props.extend ? '100%' : props.width || 'auto')};
    min-width: 16.5rem;
    height: ${(props) => (props.height ? props.height : '5rem')};
    padding: 0rem 2.4rem;
    margin: ${(props) => (props.margin ? props.margin : '0')};
    border-radius: 0.3rem;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    cursor: pointer;
    transition: all 0.15s ease;

    /* COLORS */
    background-color: ${({ theme, primary }) => setColorByProp(theme, primary)};
    color: ${({ theme, secondary }) =>
        setColorByProp(theme, secondary, 'white')};
    border: 0.2rem solid transparent;

    /* HOVERABLE DEVICE */
    ${mediaQuery.hoverable} {
        &:hover {
            background-color: ${({ theme, secondary }) =>
                setColorByProp(theme, secondary, 'white')};
            color: ${({ theme, primary }) => setColorByProp(theme, primary)};
            border: 0.2rem solid
                ${({ theme, primary }) => setColorByProp(theme, primary)};

            /* Hide focus on click */
            &:focus {
                box-shadow: none;
            }
        }
    }

    /* FOCUS */
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 4px
            ${({ theme, focus }) => setColorByProp(theme, focus, '#cbd6ee')};
    }

    /* ACTIVE */
    &:active {
        /* TOUCH DEVICE */
        background-color: ${({ theme, secondary }) =>
            setColorByProp(theme, secondary, 'white')};
        color: ${({ theme, primary }) => setColorByProp(theme, primary)};
        border: 0.2rem solid
            ${({ theme, primary }) => setColorByProp(theme, primary)};

        /* HOVERABLE DEVICE */
        ${mediaQuery.hoverable} {
            background-color: ${({ theme, primary }) =>
                setColorByProp(theme, primary)};
            color: ${({ theme, secondary }) =>
                setColorByProp(theme, secondary, 'white')};
            border: 0.2rem solid transparent;
        }
    }

    &[disabled] {
        && {
            color: #d2d5db;
            background: #939aab;
            border: none;
            cursor: not-allowed;
        }
    }
`;

/** COMPONENT: ButtonOutlined
 * ---------- ButtonOutlined - DEFAULT COLOURS ----------
 * NOTE: "ButtonOutlined" has the inverted colors of "Button"
 * ----- BASE & ACTIVE -----
    - background: white
    - color: black
    - border-color: black
 * ----- HOVER ----- 
    - background: black
    - color: white
    - border-color: transparent
 */
export const ButtonOutlined = styled(Button)`
    background-color: ${({ theme, secondary }) =>
        setColorByProp(theme, secondary, 'white')};
    color: ${({ theme, primary }) => setColorByProp(theme, primary)};
    border: 0.2rem solid
        ${({ theme, primary }) => setColorByProp(theme, primary)};

    /* HOVERABLE DEVICE */
    ${mediaQuery.hoverable} {
        &:hover {
            background-color: ${({ theme, primary }) =>
                setColorByProp(theme, primary)};
            color: ${({ theme, secondary }) =>
                setColorByProp(theme, secondary, 'white')};
            border: 0.2rem solid transparent;
        }
    }

    /* ACTIVE */
    &:active {
        /* TOUCH DEVICE */
        background-color: ${({ theme, primary }) =>
            setColorByProp(theme, primary)};
        color: ${({ theme, secondary }) =>
            setColorByProp(theme, secondary, 'white')};
        border: 0.2rem solid transparent;

        /* HOVERABLE DEVICE */
        ${mediaQuery.hoverable} {
            background-color: ${({ theme, secondary }) =>
                setColorByProp(theme, secondary, 'white')};
            color: ${({ theme, primary }) => setColorByProp(theme, primary)};
            border: 0.2rem solid
                ${({ theme, primary }) => setColorByProp(theme, primary)};
        }
    }
`;
