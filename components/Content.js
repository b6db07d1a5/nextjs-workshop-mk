import React, { Component } from 'react';
import { connect } from 'react-redux'
import ContentItem from './ContentItem';

class Content extends Component {

    state = {
        menus : Array()
    }

    componentDidMount() {
        this.retrieveMenus()
    }
    componentWillReceiveProps(nextProps){
        this.retrieveMenus(nextProps.category.id)
    }

    retrieveMenus = (categoryId = 0) => {
        const queryString = categoryId > 0 ? `categoryId=${categoryId}` : ``
        fetch(`http://localhost:3001/menus?${queryString}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({menus: data})
        })
    }

    menuClick = (menuId) => () => {
        this.props.dispatch({
            type:'ADD_MENU', 
            menuItem: this.state.menus.find((menu)=> menu.id === menuId)
        })
    }

    render() {
        const { menus } = this.state
        return (
            <div>
                {menus.map((menu, i) => <ContentItem key={`menu ${i}`} menuClick={this.menuClick} item={menu} />)}
            </div>
        );
    }
}
export default connect(state => ({
    category: state.category,
    menu: state.menu}))(Content)