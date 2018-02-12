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

    render() {
        const { menus } = this.state
        return (
            <div>
                {menus.map((menu, i) => <ContentItem key={`menu ${i}`} item={menu.name} />)}
            </div>
        );
    }
}
export default connect(state => ({
    category: state.category}))(Content)