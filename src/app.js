import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import reactImg from './images/react.png';

import Counter from './components/Counter';

const jsx = (
    <div>
        <Counter />
    </div>
);

ReactDOM.render(jsx,document.getElementById('root'));