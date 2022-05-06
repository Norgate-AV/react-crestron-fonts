// import React from "react";
// import { Story, Meta } from "@storybook/react";
// import { BaseComponentType, ICustomProps } from "../../types";

// const story: Meta = {
//     // argTypes: {
//     //     fontSize: { type: "number", defaultValue: 100 },
//     //     color: { type: "string", defaultValue: "#000" },
//     // },
// };

// function StoryTemplate<T extends React.JSXElementConstructor<T>>({
//     Child,
//     fontSize,
//     color,
//     ...args
// }: ICustomProps & { Child: React.JSXElementConstructor<T> }) {
//     const style = {
//         fontSize: `${fontSize}px`,
//         color,
//     };

//     return (
//         <div style={style}>
//             <Child {...args} />
//         </div>
//     );
// }

// interface IStoryTemplateProps<T> extends ICustomProps {
//     Component: React.JSXElementConstructor<T>;
// }

// function StoryTemplate<T>({
//     Component,
//     fontSize,
//     color,
//     ...args
// }: IStoryTemplateProps<T>): Story<IStoryTemplateProps> {
//     const style = {
//         fontSize: `${fontSize}px`,
//         color,
//     };

//     return (
//         <div style={style}>
//             <Component {...args} />
//         </div>
//     );
// }

// const Template: Story = ({ children, fontSize, color, ...args }) => {
//     const style = {
//         fontSize: `${fontSize}px`,
//         color,
//     };

//     return <div style={style}>{children}</div>;
// };

// export default story;

// const Black = Template.bind({});
// Black.args = {
//     fontSize: 100,
//     color: "#000",
// };

// const White = Template.bind({});
// White.args = {
//     fontSize: 100,
//     color: "#fff",
// };

// const Custom = Template.bind({});
// Custom.args = {
//     fontSize: 100,
//     color: "#fff",
// };
export {};
