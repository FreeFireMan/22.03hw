import React from 'react'
import './Products.css'

function Product (props) {
    let {src, title, description, price} = props;
    return (
        <section>
            <div className={'product'}>
                <img className={'productImg'} src={src} />
                <h4>{title}</h4>
                <p>{description}</p>
                <b>Price: {price}</b>
            </div>
        </section>
    );
}

export default Product