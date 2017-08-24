import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';


export default class ProductTable extends React.Component{
    render(){
        var rows=[];
        var lastCategory=null;
        this.props.products.forEach(function(product,index){
            console.log(product,index,lastCategory)
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={product.category}  key={index}/>
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name}/>
            )
            lastCategory=product.category;
        });
        return (
            <table className="product-table">
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