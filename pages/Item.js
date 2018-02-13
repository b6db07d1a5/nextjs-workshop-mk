import React, { Component } from 'react';
import Router from 'next/router'
import ItemContent from '../components/ItemContent'

class Item extends Component {
    render() {
        const { id } = this.props.url.query
        return (
            <ItemContent itemId={id} />
        );
    }
}

export default Item;