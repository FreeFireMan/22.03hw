import React from 'react'
import './UserBlock.css'

const UserBlock = ({src, name, aboutUser}) => {
    return (
        <div className={'userBlock'}>
            <img src={src} alt='some text'/>
            <h2>{name}</h2>
            <p>{aboutUser}</p>
        </div>
    );
}

export default UserBlock;
