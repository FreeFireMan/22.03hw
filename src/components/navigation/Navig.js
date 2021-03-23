import React from 'react'
import './Navigation.css'

function Navig (props) {
    let {href, title} = props;

    return (
        <ul>
            <li className={'menu-item'}> <a href={href}>{title}</a> </li>
        </ul>
    );
}

export default Navig