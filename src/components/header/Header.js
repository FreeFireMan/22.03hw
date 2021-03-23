import React from 'react'
import './Header.css'

function Header (props) {
    let {src, title} = props;

    return (
        <header className={'header'}>
            <img className={'logo'} src={src}/>
            <h1>{title}</h1>
            <input />
        </header>
    );
}

export default Header