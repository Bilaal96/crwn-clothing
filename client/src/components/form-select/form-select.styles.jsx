import styled from 'styled-components/macro';
import mediaQuery from '../../theme/media-queries';

export const FormSelectGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
`;

export const Label = styled.label`
    position: relative;
    bottom: 2px;
    color: grey;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    font-weight: 600;
    padding-left: 0.5rem;
`;

export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.greenHaze};
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    letter-spacing: 0.05rem;
    padding: 1rem 0;
    padding-right: 3.4rem;
    border: none;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.charcoal};
    cursor: pointer;

    /* Offset - removed on hover/focus for border growth */
    margin-bottom: 0.1rem;

    /* Override Default Arrow Styles */

    /* appearance: none; */
    /* background-image: url('data:image/svg_xml;utf8,<svg>'); */

    ${mediaQuery.hoverable} {
        &:hover {
            margin-bottom: 0;
            border-bottom: 0.2rem solid
                ${({ theme }) => theme.colors.bahamaBlue};
        }
    }

    &:focus {
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.greenHaze};
        outline: none;
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.pelorous};

        option {
            color: ${({ theme }) => theme.colors.pelorous};
        }
    }
`;

export const SelectArrow = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background: #f2f2f2;
    background: white;
    width: 3.4rem;
    height: calc(100% - 0.2rem);
    pointer-events: none;

    &::before,
    &:after {
        --size: 0.7rem;
        --arrow-color: ${({ theme }) => theme.colors.greenHaze};

        content: '';
        position: absolute;
        width: 0;
        height: 0;

        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Up arrow */
    &::before {
        top: 35%;
        border-right: var(--size) solid transparent;
        border-left: var(--size) solid transparent;
        border-bottom: var(--size) solid var(--arrow-color);
    }

    /* Down arrow */
    &::after {
        top: 65%;
        border-top: var(--size) solid var(--arrow-color);
        border-right: var(--size) solid transparent;
        border-left: var(--size) solid transparent;
    }

    ${Select}:hover & {
        height: 100%;
    }
`;
