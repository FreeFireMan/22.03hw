import React from 'react'
import './Header.css'

function Header ({src, title}) {

    return (
        <header className={'header'}>
            <img className={'logo'} src={src} alt={title} />
            <h1>{title}</h1>
            <input />
        </header>
    );
}

export default Header
