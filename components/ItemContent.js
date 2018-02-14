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
                <div style={{padding: 100}}>
                    <ItemDetail item={this.state.menu} />
                    <p style={{padding:5}}></p>
                    <ItemRating rating={this.state.menu.rating} />
                    <ItemComment itemId={this.props.itemId} />
                </div>
            )
        }
        return null
    }
}

const styles = {
    display: 'flex',
}
export default Item;