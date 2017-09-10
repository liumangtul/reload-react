import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {asynLog} from '../action';

class App extends React.Component{
    render(){
        return(
            <section>
                <h1>Asyn:{this.props.message}</h1>
            </section>
        )
    }
    componentDidMount(){
        const {
            dispatch,
            asynLog
        } = this.props;
        asynLog();
        setTimeout(()=>console.log(this.props),3000);
    }

}

export default connect(
    state =>{
        console.log(state.asynLog);
        return{
            message:state.asynLog.message
        }
    },
    dispatch =>({
        ...bindActionCreators({
            asynLog
        },dispatch)
    })
)(App);