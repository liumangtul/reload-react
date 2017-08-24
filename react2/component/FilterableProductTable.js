import React from 'react';
import '../style/box.css';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';
//产品
export default class FilterableProductTable extends React.Component{
    render(){
        return (
            <div className="box">
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}