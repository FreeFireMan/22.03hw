import React from 'react'
import './Footer.css'

function FooterAddress (props) {
    let {address} = props;

    return (
        <div>
            Address: {address}
        </div>
    );
}

export default FooterAddress;