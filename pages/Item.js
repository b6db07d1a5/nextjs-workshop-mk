import React, { Component } from 'react';
import Router from 'next/router'

class Item extends Component {

    state = {
        isLoad: true,
        menu : {}
    }

    retrieveMenu = (itemId) => {
        fetch(`http://localhost:3001/menus?id=${itemId}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({
                isLoad: false,
                menu: data[0]
            })
        })
    }

    componentDidMount() {
        const { id } = this.props.url.query
        this.retrieveMenu(id)
    }

    render() {
        const { id } = this.props.url.query
        return (
            <ItemContent itemId={id} />
        );
    }
}

export default Item;