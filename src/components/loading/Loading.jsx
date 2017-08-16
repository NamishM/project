import React from 'react';
import './loading.css';

const Loading = ({text}) => (
  <span className="loader" data-text={text}>{text}</span>
);

export default Loading;
