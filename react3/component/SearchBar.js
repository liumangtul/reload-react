import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleStockInputChange = this.handleStockInputChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextInput(e.target.value);
    }

    handleStockInputChange(e){
        this.props.onInStockInput(e.target.checked);
    }

    render(){
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleStockInputChange}
                    />
                    <span>hidden stock item</span>
                </label>
            </form>
        )
    }
}