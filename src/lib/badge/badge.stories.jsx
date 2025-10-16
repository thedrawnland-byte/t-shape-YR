import {Badge} from "./badge";

export default {
    title: "Компоненты/Badge",
    component: Badge,
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
    }
}