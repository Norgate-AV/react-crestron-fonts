import React from "react";
import "../../css/index.css";

export function BaseComponent({ icon }: any) {
    return <span className={`crneo ${icon}`} />;
}

export default BaseComponent;
