import React from 'react';
//产品某分类下详情行
export default class ProductRow extends React.Component{
    render(){
        let name = this.props.product.stocked ? this.props.product.name : <span style={{border:'1px solid red',color:'red',fontWeight:'bold'}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}