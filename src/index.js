import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import '@styles/reset.scss';
import '@styles/style.scss';

const $root = document.querySelector('#root');

ReactDOM.render(<App />, $root)
