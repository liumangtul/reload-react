import React from 'react';

export default class ProductRow extends React.Component{
    render(){
        let Name = this.props.product.stocked ? this.props.product.name : <span style={{border:'1px solid red',color:'red'}}>{this.props.product.name}</span>
        return(
            <tr>
                <td>{Name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}