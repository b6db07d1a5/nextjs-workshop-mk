import React, { Component } from 'react';
import ContentItem from './ContentItem'

class ContentMenus extends Component {
    render() {
        const { menus, onClickAddTocart } = this.props
        return (
            <div style={styles}>
                {menus.map((menu, i) => <ContentItem key={`menu ${i}`} onClickAddTocart={onClickAddTocart} item={menu} />)}
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    flexWrap: 'wrap'
}

export default ContentMenus;