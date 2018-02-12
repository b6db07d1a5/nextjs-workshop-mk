import React, { Component } from 'react';
import Router from 'next/router'

class ItemDetail extends Component {

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
        const { name, price, rating } = this.state.menu
        return (this.state.isLoad?  
            null : 
            (
                <div>
                    {name} <br />
                    Price : {price} <br />
                    * <br /> 
                    {rating.one} <br />
                    ** <br />
                    {rating.two} <br />
                    *** <br />
                    {rating.three} <br />
                    ***** <br />
                    {rating.four} <br />
                    ****** <br />
                    {rating.five} <br />
                </div>
            )
        )
    }
}

export default ItemDetail;