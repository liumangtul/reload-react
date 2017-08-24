import React from 'react';

export default class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-bar">
                <input type="text" placeholder="search..."/>
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>filter...</span>
                    </label>
                </p>
            </div>
        )
    }
}