import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from './action';

class App extends React.Component{
    render(){
        const {
            data
        } = this.props;
        console.log(this.props)
        return(
            <section>
                <h1 style={{display:!data.isFetching?'none':'block'}}>isFetching:{data.isFetching}</h1>
                <p>{data.test}</p>
                <button onClick={this.props.fetchPosts}>GET</button>
            </section>
        )
    }

    componentWillMount(){
       // this.props.fetchPosts();
    }
}

export default connect(
    state=>{
        console.log(state)
        return{
            data:state.data
        }
    },
    dispatch=>({
        ...bindActionCreators({
            fetchPosts
        },dispatch)
    })
)(App);