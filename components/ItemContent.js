import React, { Component } from 'react';
import ItemDetail from './ItemDetail'
import ItemRating from './ItemRating'

class Item extends Component {
    render() {
        return (
            <div>
                <ItemDetail />
                <ItemRating />
            </div>
        );
    }
}

export default Item;