import React from "react";
import styles from "../../styles/styles.module.css";

interface IBaseComponentProps {
    icon: string;
}

export const BaseComponent: React.FunctionComponent<IBaseComponentProps> = ({
    icon,
}) => {
    return <span className={`${styles.crneo} ${icon}`} />;
};

export default BaseComponent;
