import React from 'react';
import Child from './Child.js';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        this.handleCountAdd=this.handleCountAdd.bind(this);
    }

    handleCountAdd(num){
        this.setState({
            count:num
        });
    }

    render(){
        return (
            <div>
                <Child count={this.state.count} fn={this.handleCountAdd}></Child>
                <Child count={this.state.count} fn={this.handleCountAdd}></Child>
            </div>
        )
    }
}
export default Parent;