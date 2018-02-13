import React, { Component } from 'react';
import ItemDetail from './ItemDetail'
import ItemRating from './ItemRating'
import ItemComment from './ItemComment'

class Item extends Component {

    state = {
        isLoading: true,
        menu: {},
        comments: []
    }

    componentDidMount() {
        const { itemId } = this.props
        this.retrieveMenu(itemId)
    }

    retrieveMenu = (itemId) => {
        fetch(`http://localhost:3001/menus?id=${itemId}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({
                isLoading: false,
                menu: data[0]
            })
        })
    }

    render() {
        if(!this.state.isLoading) {
            return (
                <div>
                    <ItemDetail item={this.state.menu} />
                    <ItemRating rating={this.state.menu.rating} />
                    <ItemComment comments={this.state.comments} />
                </div>
            )
        }
        return null
    }
}

export default Item;