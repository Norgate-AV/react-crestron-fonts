import { ICustomProps } from "../ICustomProps";

export declare type BaseComponentType<
    T extends React.JSXElementConstructor<T>,
> = React.ComponentProps<T> & ICustomProps;
