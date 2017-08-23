import React from 'react';

class NumList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:['a',2,3,4,5]
        };
    }
    render(){
        const numbers = this.state.list;
        const list = numbers.map((number,index) => {
            console.log(number,index);
            return <li key={index}>{number}</li>
        });
        console.log(numbers,list);
        return(
            <ul>
                {list}
            </ul>
        )
    }
};

export default NumList;