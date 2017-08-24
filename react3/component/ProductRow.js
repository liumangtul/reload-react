import React from 'react';

export default class ProductRow extends React.Component{
    render(){
        console.error(this.props)
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}