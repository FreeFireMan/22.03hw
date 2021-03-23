import React from 'react'
import Navig from "./Navig";

function Navigation () {
    return (
        <nav className={'nav'}>
            <Navig href={'#'} title={'Main'} />
            <Navig href={'#'} title={'Gallery'} />
            <Navig href={'#'} title={'Contacts'} />
        </nav>
    );
}

export default Navigation;