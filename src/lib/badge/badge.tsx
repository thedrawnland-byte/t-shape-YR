import styled from "styled-components"



interface IBadgeProps {
    /**
     * Текст для компонента
     */
    text?: string;

    /**
     * Визуальное отображение компонента
     */
    mode?: "marine" | "red" | "blue"

    /**
     * Делает компонент менее акцентным
     */
    outlined?: boolean;
}



const StyledBadge = styled.div<IBadgeProps>`
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    height: 24px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    border-radius: 4px;
    padding: 0 8px;

    ${(props) => props.mode === "marine" && `
        background-color: ${props.theme.colors.bg.marine.loud.enabled};
        color: ${props.theme.colors.text.neutral.calm.enabled};
    `}
    ${(props) => props.mode === "red" && `
        background-color: ${props.theme.colors.bg.red.loud.enabled};
        color: ${props.theme.colors.text.neutral.calm.enabled};
    `}
    ${(props) => props.mode === "blue" && `
        background-color: ${props.theme.colors.bg.blue.loud.enabled};
        color: ${props.theme.colors.text.neutral.calm.enabled};
    `}

    /* outlined */

    ${(props) => props.mode === "marine" && props.outlined &&`
        background-color: ${props.theme.colors.bg.lead.calm.enabled};
        color: ${props.theme.colors.text.neutral.inverted.enabled};
        border-color: ${props.theme.colors.border.lead.calm.enabled}
    `}
    ${(props) => props.mode === "red" && `
        background-color: ${props.theme.colors.bg.red.calm.enabled};
        color: ${props.theme.colors.text.neutral.inverted.enabled};
        border-color: ${props.theme.colors.border.red.calm.enabled};
    `}
    ${(props) => props.mode === "blue" && `
        background-color: ${props.theme.colors.bg.blue.calm.enabled};
        color: ${props.theme.colors.text.neutral.inverted.enabled};
        border-color: ${props.theme.colors.border.blue.calm.enabled};
    `}
`;

/**
 * Компонент для отображения дополнительной информации
 * 
 */
export const Badge: React.FC <IBadgeProps> = ({text, mode = "marine", outlined}) => {
    return <StyledBadge outlined={outlined} mode={mode}>{text}</StyledBadge>
}