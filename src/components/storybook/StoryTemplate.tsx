import React from "react";
import { Story } from "@storybook/react";
import { BaseComponentType } from "../../types";

export const StoryTemplate = <T extends React.JSXElementConstructor<T>>(
    templateArgs: Partial<BaseComponentType<T>>,
    { component: Component }: any,
): Story<BaseComponentType<T>> => {
    return (args) => {
        const fontSize = templateArgs.fontSize || args.fontSize;
        const color = templateArgs.color || args.color;

        const style = {
            fontSize: `${fontSize}px`,
            color,
        };

        return (
            <div style={style}>
                <Component {...args} />
            </div>
        );
    };
};

export default StoryTemplate;
