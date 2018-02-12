import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesList from './CategoriesList';

class Sidebar extends Component {
    state = {
        categories: Array()
    }
    componentDidMount() {
        fetch(`http://localhost:3001/categories`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({categories: data})
        })
    }

    categoryClick = (clickedValue) => () => {
        this.props.dispatch({type:'CLICK_CATEGORY', categoryId: clickedValue})
    }
    
    render() {
        return (
            <CategoriesList categoryClick={this.categoryClick} categories={this.state.categories} />
        );
    }
}

export default connect(state => ({
    category: state.category}))(Sidebar)