import React from "react";
// import { Story } from "@storybook/react";
import { BaseComponentType /* ICustomProps */ } from "../../types";

export const StoryTemplate = <T extends React.JSXElementConstructor<T>>(
    { fontSize, color, ...args }: BaseComponentType<T>,
    { component: Component }: any,
): any => {
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
