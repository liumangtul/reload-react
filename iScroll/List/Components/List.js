import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import {listFetch} from '../Action/list';
import IScroll from '../../iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';
import '../Style/list.css';
class List extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.listFetch('./iScroll/fetch/list.json');
    }

    componentDidMount(){
        // alert('componentDidMount');
        this.my = new IScroll('#iscroll-bar',{
            mouseWheel: true,
            scrollbars: true,
            // checkDOMChanges:true
        });
        this.my.on('scrollEnd',function () {
            console.log(this)
        });
    }

    componentWillReceiveProps(){
        // alert('componentWillReceiveProps')
    }

    componentDidUpdate(){
        // alert('componentDidUpdate');
        if(this.my)setTimeout(()=>{
            this.my.refresh();
        },0);
        return true;
    }

    handleUpDataList(){
        this.props.listFetch('./iScroll/fetch/list2.json');
    }

    render(){
        let Item;
        if(this.props.list){
            Item = this.props.list.map((item,index)=>{
                return <li key={item.id}>{item.name}</li>
            });
        }
        const showList = (
            <div id="iscroll-list" className={this.props.status === 0 ? 'hidden' : (this.props.status === 1 ? 'succ' : 'err') }>
                <div className="updata-box">
                    <p>刷新</p>
                </div>
                <ul>{Item}</ul>
                <div className="more-box">
                    <p>加载更多</p>
                </div>
            </div>
        );
        const loading = <h1>正在加载中。。。</h1>;
        return(
            <div>
                <h1>列表{this.props.status}</h1>
                <buttun onClick={this.handleUpDataList.bind(this)}>Updata-List</buttun>
                <section id="iscroll-bar">
                    {
                        // this.props.status === 0 ? loading:showList
                    }
                    <div id="iscroll-list" className={this.props.status === 0 ? 'hidden' : (this.props.status === 1 ? 'succ' : 'err') }>
                        <div className="updata-box">
                            <p>刷新</p>
                        </div>
                        <ul>{Item}</ul>
                        <div className="more-box">
                            <p>加载更多</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(
    state=>{
        const data = state.list;
        return{
            ...data
        }
    },
    dispatch=>({
        ...bindActionCreators({
            listFetch
        },dispatch)
    })
)(List);