import React from 'react';
import Router from 'next/router'
import { width } from 'window-size';

const onClickDetail = (id) => () =>
    Router.push({
        pathname: '/Item',
        query: { id: id }
})

const ContentItem = (props) => {
    const {id, name, images} = props.item
    const onClickAddTocart = props.onClickAddTocart
    return (
        <div style={styles}>
            <img src={`static/images/menus/${images}`} style={{width: 200, height:200}} />
            {name}
            <button onClick={onClickDetail(id)}>
                detail
            </button>
            <button onClick={onClickAddTocart(id)}>
                buy
            </button>
        </div>
    );
};


const styles={
    width: 300, 
    height:300, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
}

export default ContentItem;