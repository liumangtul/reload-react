import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            areaValue:'',
            selValue:'CSS'
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleAreaChange=this.handleAreaChange.bind(this);
        this.handleSelChange=this.handleSelChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value:e.target.value.toUpperCase()
        });
    }

    handleAreaChange(e){
        this.setState({
            areaValue:e.target.value
        });
    }

    handleSelChange(e){
        this.setState({
            selValue:e.target.value
        })
    }

    handleSubmit(e){
        console.log(this.state);
        e.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Talk:
                    <textarea cols="30" rows="10" value={this.state.areaValue} onChange={this.handleAreaChange}></textarea>
                </label>
                <label>
                    Select:
                    <select value={this.state.selValue} onChange={this.handleSelChange}>
                        <option value="HTML">1.HTML</option>
                        <option value="CSS">2.CSS</option>
                        <option value="JavaScript">3.JavaScript</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm;