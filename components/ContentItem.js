import React from 'react';
import Router from 'next/router'
import { width } from 'window-size';

const onClickDetail = (id) => () =>
    Router.push({
        pathname: '/Item',
        query: { id: id }
})

const ContentItem = (props) => {
    const {id, name, price, images} = props.item
    const onClickAddTocart = props.onClickAddTocart
    return (
        <div style={styles}>
            <img src={`static/images/menus/${images}`} style={{width: 200, height:200}} />
            <span>{name}</span>
            <span> Price : {price} ฿.</span>
            <div>
                <button onClick={onClickDetail(id)} style={styles.button}>
                    Detail
                </button>
                <span> </span>
                <button onClick={onClickAddTocart(id)} style={styles.button}>
                    Order
                </button>
            </div>
            
            
        </div>
    );
};


const styles={
    width: 300, 
    height:300, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    button :{
        backgroundColor: 'rgba(244, 133, 7, 0.8)',
        border: 'none',
        color: 'white',
        padding: 10,
        textAlign: 'center',
    }
}

export default ContentItem;