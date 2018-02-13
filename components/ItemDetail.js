import React, { Component } from 'react';

class ItemDetail extends Component {
    render() {
        return (
            <div>
                {this.props.name} <br />
                {this.props.price}
            </div>
        );
    }
}

export default ItemDetail;