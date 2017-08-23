/**
 * Created by promise on 2017/8/23.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/Hello.js';
import Clock from './component/Clock.js';
import Toggle from './component/Toggle.js';
import NumList from './component/NumList.js';

ReactDOM.render(
    <div>
        <Hello></Hello>
        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
        <Toggle></Toggle>
        <NumList></NumList>
    </div>,
    document.getElementById('root')
);