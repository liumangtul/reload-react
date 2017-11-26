import React,{Component} from 'react';

import './style.less';
import aImg from  './images/a.jpeg';
import angularImg from './images/angular.png';

export default class FormName extends Component{

  constructor(props){
    super(props);

    // this.state = {
    //   username:'',
    //   content:'他很懒，什么也没有留下。。。',
    //   job:''
    // }
    // this.handleUser = this.handleUser.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleContent = this.handleContent.bind(this);
    // this.handleJob = this.handleJob.bind(this);

    this.state = {
      user:'',
      pass:''
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <section className="formSes">
        <form  action="/" method="get" onSubmit={this.handleSubmit}>
          {
            /* <input type="text" name="username" value={this.state.username} onChange={this.handleUser}/>
          <textarea value={this.state.content} onChange={this.handleContent}></textarea>
          <select value={this.state.job} onChange={this.handleJob}>
            <option value="1">JS</option>
            <option value="2">HTML</option>
            <option value="3">CSS</option>
          </select> */
        }
          <input type="text" name="user" onChange={this.handleForm}/>
          <input type="password" name="pass" onChange={this.handleForm}/>
        <input type="submit" value="submit" onChange={this.handleSubmit}/>
        </form>
        <div>
          <img src={aImg} title="computer"/>
          <img src={angularImg} title="angular" />
          <img src={require('./images/c.jpg')} title="react"/>
          <p></p>
        </div>
      </section>
    )
  }

  handleSubmit(e){
    alert(JSON.stringify(this.state,true));
    e.preventDefault();
  }

  handleForm(e){
    console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  // handleUser(e){
  //   this.setState({
  //     username:e.target.value
  //   });
  // }
  //
  // handleContent(e){
  //   this.setState({
  //     content:e.target.value
  //   });
  // }
  //
  // handleJob(e){
  //   this.setState({
  //     job:e.target.value
  //   });
  // }
}
