import React, { Component } from 'react';
import { connect } from 'react-redux'
import ContentCart from './ContentCart'
import ContentMenus from './ContentMenus'

class Content extends Component {
    
    state = {
        menus : Array(),
        contentDisplay: this.props.content.contentDisplay
    }

    componentDidMount() {
        this.retrieveMenus()
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            ...this.state,
            contentDisplay : nextProps.content.contentDisplay
        })
    }

    retrieveMenus = (categoryId = 0) => {
        const queryString = categoryId > 0 ? `categoryId=${categoryId}` : ``
        fetch(`http://localhost:3001/menus?${queryString}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({
                ...this.state,
                menus: data
            })
        })
    }

    onClickAddTocart = (menuId) => () => {
        this.props.dispatch({
            type:'ADD_MENU', 
            menuItem: this.state.menus.find((menu)=> menu.id === menuId)
        })
    }

    render() {
        const { menus, contentDisplay } = this.state
        const content = (contentDisplay === 'menus'?
                        <ContentMenus menus={menus} onClickAddTocart={this.onClickAddTocart} /> :
                        <ContentCart menus={menus} /> )
        return (
            content
        );
    }
}

export default connect(state => ({
    content: state.content,
    category: state.category,
    cart: state.cart})
)(Content)