import React,{Component} from 'react';
import './style.less';

export default class Counter extends Component{
  render(){
    if(this.props.count>100){
      return(
        <p className="article">大于100</p>
      )
    }else{
      return(
        <p className="article">还没到</p>
      )
    }
  }
}
