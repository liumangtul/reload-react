import React from 'react';

class NameForm2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };

        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const value = e.target.value;
        this.setState({
            [e.target.name]:[value]
        });
    }

    handleSubmit(e){
        console.log(this.state);
        e.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    UserName:
                    <input type="text" name="username" onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    PassWord:
                    <input type="password" name="password" onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}
export default NameForm2;