import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
    }

    handleAdd(){
        let count = this.props.count;
        count++;
        this.props.fn(count);
    }

    render(){
        return (
            <div>
                <h3>{this.props.count}</h3>
                <button onClick={this.handleAdd}>BTN</button>
            </div>
        )
    }
}
export default Child;