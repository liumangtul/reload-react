import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState( (preState) => ({
                isToggleOn : !preState.isToggleOn
        }))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle Button {this.state.isToggleOn?'OFF':'ON'}</button>
                <div style={{display:this.state.isToggleOn?'none':'block'}}>show</div>
            </div>
        )
    }
}

export default Toggle;