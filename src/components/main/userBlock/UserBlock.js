import React from 'react'
import './UserBlock.css'

function UserBlock(props) {
    let {src, name, aboutUser} = props;

    return (
        <div className={'userBlock'}>
            <img src={src} />
            <h2>{name}</h2>
            <p>{aboutUser}</p>
        </div>
    );
}

export default UserBlock;