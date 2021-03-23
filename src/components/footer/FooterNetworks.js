import React from 'react'
import './Footer.css'

function FooterNetworks (props) {
    let {href, src} = props;

    return (
        <a href={href}>
            <img className={'networks-logo'} src={src} />
        </a>
    );
}

export default FooterNetworks;