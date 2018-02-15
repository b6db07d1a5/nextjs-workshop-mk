import React, { Component } from 'react';
import { connect } from 'react-redux'
import ContentCart from './ContentCart'
import ContentMenus from './ContentMenus'

class Content extends Component {
    
    state = {
        menus : Array(),
        contentDisplay: this.props.category.contentDisplay
    }

    componentDidMount() {
        this.retrieveMenus()
    }
    componentWillReceiveProps(nextProps){
        const { contentDisplay } = nextProps.category
        if(contentDisplay === 'menus') {
            const { id } = nextProps.category
            this.retrieveMenus(id)
            this.setState({
                ...this.state,
                contentDisplay : contentDisplay
            })
        }
        else {
            const { items } = nextProps.cart
            this.setState({
                ...this.state,
                menus: items,
                contentDisplay : contentDisplay
            })
        }
    }

    retrieveMenus = (categoryId = 0) => {
        const query = (categoryId === 0? `` : `categoryId=${categoryId}`)
        fetch(`http://localhost:3001/menus?${query}`)
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

    onClickDecreaseFromCart = (menuId) => () => {
        this.props.dispatch({
            type: 'DECREASE_MENU',
            menuId: menuId
        })
    }
    onClickIncreaseFromCart = (menuId) => () => {
        this.props.dispatch({
            type: 'INCREASE_MENU',
            menuId: menuId
        })
    }

    render() {
        const { menus, contentDisplay } = this.state
        const content = (contentDisplay === 'menus'?
                        <ContentMenus menus={menus} onClickAddTocart={this.onClickAddTocart} /> :
                        <ContentCart menus={menus} 
                            onClickDecreaseFromCart={this.onClickDecreaseFromCart}
                            onClickIncreaseFromCart={this.onClickIncreaseFromCart}
                             /> )
        return (
            <div style={styles}>
                {content}
            </div>
        );
    }
}

const styles = {overflowY: 'scroll', height: '100vh'}

export default connect(state => ({
    category: state.category,
    cart: state.cart})
)(Content)