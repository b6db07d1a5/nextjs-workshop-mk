import React from 'react';
import Router from 'next/router'

const onClickDetail = (id) => () =>
    Router.push({
        pathname: '/Item',
        query: { id: id },
})

const ContentItem = (props) => {
    const {id, name} = props.item
    const onClickAddTocart = props.onClickAddTocart
    return (
        <div style={{display: 'inline'}}>
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

export default ContentItem;