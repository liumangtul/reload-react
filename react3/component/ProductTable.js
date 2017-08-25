import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

export default class ProductTable extends React.Component{
    render(){
        let rows = [];
        let lastCategory = null;
        this.props.products.forEach(function(product,index){
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}/>
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name}/>
            );
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}