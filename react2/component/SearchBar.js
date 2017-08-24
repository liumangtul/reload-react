import React from 'react';
//搜索组件
export default class SearchBar extends React.Component{
    render(){
        return (
            <form>
                <input type="text" placeholder="Search Word"/>
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Only show products in stock</span>
                    </label>
                </p>
            </form>
        )
    }
}