import React from 'react';
const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

class TempertureInput extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            temperature:''
        }*/
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        /*this.setState({
            temperature:e.target.value
        });*/
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default TempertureInput;