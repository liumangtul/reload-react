import React,{Component} from 'react';
import CounterShow from './CounterShow.jsx';

export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    };
    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter(e){
    let count = e.target.value;
    this.setState({
      count:count
    });
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.count} onChange={this.handleCounter}/>
      <CounterShow count={this.state.count}/>
      </div>
    )
  }
}
