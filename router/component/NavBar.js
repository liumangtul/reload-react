import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/About"/>About US</li>
                <li><Link to="Me"/>Me</li>
            </ul>
        )
    }
}