import React, { Component } from 'react';

class ItemDetail extends Component {
    render() {
        const {name, price, images} = this.props.item
        return (
            <div style={styles}>
                <img src={`static/images/menus/${images}`} style={styles.image} />
                <span> {name} </span>
                <span> Price : {price} ฿ </span>
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    image: {
        width: 150,
        height: 150
    }
}
export default ItemDetail;