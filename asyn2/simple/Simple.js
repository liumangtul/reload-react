import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from '../style/index.css';
import {fetchEntry} from './action';

const Simple = ({
    data,
    fetchEntry
})=>{
    return(
        <section id={style.simple}>
            <h1 className={style.title}>Simple</h1>
            <h2>mes:{data.mes}</h2>
            <button onClick={fetchEntry}>BTN</button>
            <div style={{width:'100px',height:'100px',background:'red',display:data.isFetching?'block':'none'}} >加载中...</div>
        </section>
    )
};

export default connect(
    state=>{
        return{
            ...state
        }
    },
    dispatch=>({
        ...bindActionCreators({
            fetchEntry
        },dispatch)
    })
)(Simple);