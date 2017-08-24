/**
 * Created by promise on 2017/8/23.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/Hello.js';
import Clock from './component/Clock.js';
import Toggle from './component/Toggle.js';
import NumList from './component/NumList.js';
import NameForm from './component/NameForm.js';
import NameForm2 from './component/NameForm2.js';
import Calculator from './component/Calculator/Calculator.js';
import Parent from './component/BaseLearn/Parent.js';

ReactDOM.render(
    <div>
        <Hello></Hello>
        <Clock></Clock>
        <Clock></Clock>
        <Clock></Clock>
        <Toggle></Toggle>
        <NumList></NumList>
        <NameForm></NameForm>
        <NameForm2></NameForm2>
        <Calculator></Calculator>
        <Parent></Parent>
    </div>,
    document.getElementById('root')
);