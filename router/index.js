import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './css/base.css';
import './css/commentApp.css';

class CommentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[]
        }
    }

    componentWillMount(){
        console.log('component will mount');
        setTimeout(()=>{
            this.setState({
                comments:[
                    {username: 'Jerry', content: 'Hello'},
                    {username: 'Tomy', content: 'World'},
                    {username: 'Lucy', content: 'Good'}
                ]
            });
        },10000)

    }

    handleSubmitComment(comment,_this){
        if(!comment)return;
        if(!comment.username)return alert('username is null');
        if(!comment.content)return alert('content is null');
        console.log(comment,_this,_this.refs.username,_this.refs.username.value,_this.refs.username.offsetWidth);
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        });
    }

    render(){
        return(
            <section className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </section>
        )
    }
}

class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            content:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        });
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        });
    }

    handleSubmit(e){
        const {username,content} = this.state;
        this.props.onSubmit({username,content},this);
        this.setState({
            username:'',
            content:''
        });
    }

    render(){
        return(
            <section className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input type="text" ref="username" placeholder="请输入用户名" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea ref="content" placeholder="请输入评论内容 ... ..." value={this.state.content} onChange={this.handleContentChange}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </section>
        )
    }
}

class CommentList extends React.Component{
    render(){
        return(
            <section>
                {
                    this.props.comments.map((comment,index)=>{
                        return(
                            <Comment key={index} comment={comment}/>
                        )
                    })
                }
            </section>
        )
    }
}
CommentList.defaultProps = {
    comments:[{
        username:'机器人',
        content:'test'
    }]
};

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}: </span>
                </div>
                <p> {this.props.comment.content}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <CommentApp/>,
    document.getElementById('router')
);