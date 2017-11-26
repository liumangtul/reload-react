import React,{Component} from 'react';
import './style.less';

export default class Home extends Component{
  render(){
    return(
      <div id="home">
        <h1>Home Component</h1>
        {this.props.children}
      </div>
    )
  }
}
