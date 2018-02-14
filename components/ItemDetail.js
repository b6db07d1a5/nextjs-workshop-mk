import React, { Component } from 'react';

class ItemDetail extends Component {
    render() {
        const {name, price} = this.props.item
        return (
            <div>
                name {name} <br />
                price {price}
            </div>
        );
    }
}

export default ItemDetail;