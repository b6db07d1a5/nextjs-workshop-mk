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
        const { contentDisplay } = nextProps.content
        const { items } = nextProps.cart
        const { id } = nextProps.category
        console.log(nextProps)
        if(contentDisplay === 'menus') {
            this.retrieveMenus(id)
            this.setState({
                ...this.state,
                contentDisplay : contentDisplay
            })
        }
        else {
            this.setState({
                ...this.state,
                menus: items,
                contentDisplay : contentDisplay
            })
        }
    }

    retrieveMenus = (categoryId = 1) => {
        fetch(`http://localhost:3001/menus?categoryId=${categoryId}`)
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