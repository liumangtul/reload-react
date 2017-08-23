import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        };
    }
    render(){
        return <h2>时钟：{this.state.date.toLocaleTimeString()}</h2>
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => {
                this.tick();
            },
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }
}
export default Clock;