import React from 'react';
import Router from 'next/router'

const detailClick = (id) => () =>
    Router.push({
        pathname: '/ItemDetail',
        query: { id: id }
})

const ContentItem = (props) => {
    const {id, name} = props.item
    const menuClick = props.menuClick
    return (
        <div style={{display: 'inline'}}>
            {name}
            <button onClick={detailClick(id)}>
                detail
            </button>
            <button onClick={menuClick(id)}>
                buy
            </button>
        </div>
    );
};

export default ContentItem;