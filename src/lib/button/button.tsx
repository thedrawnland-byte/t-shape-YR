import styled from "styled-components";
import { Icon } from "../icon";

type TIcon = "chevronDown" 
| "chevronLeft" 
| "chevronRight" 
| "chevronUp" 
| "user" ;

interface IButtonProps {
    text?: string;
    disabled?: boolean;
    iconBefore?: TIcon;
    iconAfter?: TIcon;
}

const StyledButton = styled.button<IButtonProps>`
    display: inline-flex;
    flex-direction: row;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 36px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border-radius: 4px;
    padding: 0 24px;
    cursor: pointer; 

    &:focus {
        box-shadow: 0px 0px 0px 2px rgba(79, 96, 255, 0.25);
    };
    &:enabled {
        background-color: ${props => props.theme.colors.bg.marine.loud.enabled};
        color: ${props => props.theme.colors.text.neutral.calm.enabled};
    };
    &:hover {
        background-color: ${props => props.theme.colors.bg.marine.loud.hover};
        color: ${props => props.theme.colors.text.neutral.calm.enabled};
    };
    &:active {
        background-color: ${props => props.theme.colors.bg.marine.loud.active};
        color: ${props => props.theme.colors.text.neutral.calm.enabled};
    };
    
    ${props => props.disabled && `
    &:disabled {
        background-color: ${props.theme.colors.bg.disabled};
        color: ${props.theme.colors.text.neutral.calm.enabled};
        cursor: not-allowed;
    };     
    `}
`;




export const Button: React.FC<IButtonProps> = ({
    text = 'Button', 
    disabled,
    iconBefore,
    iconAfter,
}) => {
    return <StyledButton disabled = {disabled}>
    {iconBefore ? <Icon iconName={iconBefore} size={20}/> : null}
    {text}
    {iconAfter ? <Icon iconName={iconAfter} size={20}/> : null}
    </StyledButton>
};