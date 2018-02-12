import React, { Component } from 'react';
import Router from 'next/router'

class ItemDetail extends Component {

    retrieveMenus = (categoryId = 0) => {
        fetch(`http://localhost:3001/menus?id=${1}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            
        })
    }

    componentDidMount() {
        Router.onRouteChangeStart = url => {
            console.log('App is changing to: ', url)
          }
    }

    render() {
        return (
            <div>
                asdasdasdadas
            </div>
        );
    }
}

export default ItemDetail;