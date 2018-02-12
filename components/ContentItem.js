import React from 'react';
import Router from 'next/router'

const detailClick = () =>
    Router.push({
        pathname: '/ItemDetail',
        query: { name: 'Zeit' }
})

const ContentItem = (props) => {
    const {id, name} = props.item
    const menuClick = props.menuClick
    return (
        <div style={{display: 'inline', padding: 20}}>
            {name}
            <button onClick={detailClick}>
                detail
            </button>
            <button onClick={menuClick(id)}>
                buy
            </button>
        </div>
    );
};

export default ContentItem;