import styled from "styled-components";
import {Button} from "../button";
import { Badge } from "../badge";

interface ICardProps {
    appearance?: "red" | "marine";

    /**
    * Размер текста
    * 
    */
    textSize?: "base" | "large";

    /**
    * Текст для компонента
    * 
    */
    text?: string;
    newsData?: string;
    badgeText?: string;
    buttonText?: string;
    children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
display: inline-flex;
flex-direction: column;
gap: 16px;
padding: 24px;
border: 1px solid black;
min-width: 420px;
max-width: 600px;
background: white;

.card-content {
    display: inherit;
    flex-direction: inherit;
    gap: inherit;

}

.card-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 16px;

    
}

.card-newsData {
 font-size: 16px;
 line-height: 24px;
 font-weight: 400;
}

.card-body-text {
    ${props => props.textSize === "base" && `
        font-size: 16px;
        line-height: 24px;
        font-weight: 400px;
    `}
    ${props => props.textSize === "large" && `
        font-size: 32px;
        line-height: 40px;
        font-weight: 600px;
    `}
}

 ${props => props.appearance === "marine" && `
        
        color: ${props.theme.colors.text.neutral.global.disabled};
        background-color: ${props.theme.colors.bg.marine.loud.enabled};
        border-color: ${props.theme.colors.border.marine.calm.enabled};
    `}
${props => props.appearance === "red" && `
        
        color: ${props.theme.colors.text.neutral.global.disabled};
        background-color: ${props.theme.colors.bg.red.loud.enabled};
        border-color: ${props.theme.colors.border.red.calm.enabled};
    `}
`;  

export const Card:React.FC<ICardProps> = ({
    appearance, 
    text = "Hello text Prop", 
    textSize = "base", 
    newsData = "10.10",
    badgeText = "card badge", 
    buttonText = "card CTA",
    children,
}) => {
    return <StyledCard appearance={appearance} textSize={textSize}> 
        <div className="card-content">
            <div className="card-header">
                <div className="card-newsData">{newsData}</div>
                <Badge text={badgeText} mode={appearance}/>
            </div>
            <div className="card-body">
                <p className="card-body-text">{text}</p> 
                {children} 
        </div>
        </div>
        <div>
         <Button text = {buttonText}/>
        </div>
        </StyledCard>;
}