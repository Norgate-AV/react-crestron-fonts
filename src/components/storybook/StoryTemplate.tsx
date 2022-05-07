import React from "react";
import { Story } from "@storybook/react";
import { BaseComponentType } from "../../types";

export const StoryTemplate =
    <T extends React.JSXElementConstructor<T>>(
        { fontSize, color }: Partial<BaseComponentType<T>>,
        { component: Component }: any,
    ): Story<BaseComponentType<T>> =>
    (args) => {
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

export default StoryTemplate;
