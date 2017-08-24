import React from 'react';
//产品大分类表头
export default class ProductCategoryRow extends React.Component{
    render(){
        return (
            <tr className="productCategoryRow">
                <th colSpan="2">
                    {this.props.category}
                </th>
            </tr>
        )
    }
}