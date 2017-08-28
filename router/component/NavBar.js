import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to="/router/">Home</Link></li>
                <li><Link to="/router/AboutUs">About US</Link></li>
                <li><Link to="/router/Me">Me</Link></li>
            </ul>
        )
    }
}