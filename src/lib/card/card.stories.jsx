import {Card} from "./card";

export default {
    title: "Компоненты/Card",
    component: Card,
    parameters: {
        layout: "centered", 
        status: {
            type: "stable"
        }, 
    },
    tags: ["autodocs"]
}

export const View = {
    args: {
        text: "hello",
        mode: "marine",
        textSize: "large",
    }
}