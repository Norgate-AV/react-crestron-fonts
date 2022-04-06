import React from 'react';
import '../../css/index.css';

export const BaseComponent = ({icon}: any) => {
  return <span className={`crneo ${icon}`}></span>;
};

export default BaseComponent;