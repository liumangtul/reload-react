import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FormName from './FormName/index.jsx';
import Counter from './Counter/index.jsx';
import Home from './home/index.jsx';

ReactDOM.render(
  <div>
    <FormName/>
    <Counter/>
    <Home>
      <h1>Children</h1>
    </Home>
  </div>,
  document.getElementById('app')
);
