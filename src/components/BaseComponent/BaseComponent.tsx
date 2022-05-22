import React from "react";
import "../../../styles/index.css";
// import classes from '../../css/index.css';

export function BaseComponent({ icon }: { icon: string }) {
    return <span className={`crneo ${icon}`} />;
}

export default BaseComponent;
