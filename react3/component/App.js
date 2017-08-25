import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}