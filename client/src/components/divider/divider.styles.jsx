import styled, { css } from 'styled-components/macro';

const dividerStyles = css`
    content: '';
    height: 0;
    width: 100%;
    border-bottom: ${({ border }) => border};
    border-radius: 10px;
    margin: ${({ marginY }) => marginY} 0;
`;

/** Divider
 * ----- Optional Props -----
 * [ NOTE: ] If not specified, a default value is applied

 * content    |  * lineHeight  |  * spacingX
 * txtColor   |  * lineStyle   |  * spacingY
 * fontSize   |  * lineColor   |
 
 * ----- Derived Props -----
 * contentSpacing => applied if hasContent === true
 * border => sets border-bottom styles using:
    - props: lineHeight | lineStyle | lineColor
    - if props aren't specified, default parameters are used
 */
export const Divider = styled.div.attrs((props) => ({
    // --- Optional ---
    paddingX: props.spacingX || '0rem',
    marginY: props.spacingY || '3rem',
    txtColor: props.txtColor || props.theme.colors.coral,
    fontSize: props.fontSize || '1.6rem',

    // --- Derived ---
    // -- props.hasContent
    contentSpacing: props.hasContent ? '1.2rem' : '0rem',

    // -- props.[ lineHeight | lineStyle | lineColor ]
    // if above props are not specified
    // default parameters are used as fallback
    border: ({
        theme,
        lineHeight = '0.3rem',
        lineStyle = 'solid',
        lineColor = theme.colors.lightCharcoal || 'grey',
    }) => `${lineHeight} ${lineStyle} ${lineColor}`,
}))`
    /* Positioning */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 ${({ paddingX }) => paddingX};

    /* Text / Content */
    color: ${({ txtColor }) => txtColor};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: bold;
    white-space: nowrap;

    /* Always rendered */
    &::before {
        ${dividerStyles}
        margin-right: ${({ contentSpacing }) => contentSpacing};
    }

    /* Rendered only if content-prop is passed */
    &::after {
        ${({ hasContent }) => hasContent && dividerStyles}
        margin-left: ${({ contentSpacing }) => contentSpacing};
    }
`;
