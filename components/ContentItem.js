import React from 'react';

const ContentItem = (props) => {
    const {id, name} = props.item
    const menuClick = props.menuClick
    return (
        <div style={{display: 'inline', padding: 20}}>
            {name}
            <button>
                detail
            </button>
            <button onClick={menuClick(id)}>
                buy
            </button>
        </div>
    );
};

export default ContentItem;