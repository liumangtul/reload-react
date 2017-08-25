import React from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText:'',
            inStockOnly:false
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleStockInput = this.handleStockInput.bind(this);
    }

    handleFilterTextInput(filterText){
        this.setState({
            filterText:filterText
        });
    }

    handleStockInput(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly
        });
    }

    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}