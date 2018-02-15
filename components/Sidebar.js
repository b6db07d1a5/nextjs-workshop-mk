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

    categoryClick = (categoryId) => () => {
        this.props.dispatch({
            type:'CATEGORY_CLICK', 
            categoryId: categoryId,
            contentDisplay: 'menus'
        })
    }
    
    render() {
        return (
            <div style={styles}>
                <CategoriesList categoryClick={this.categoryClick} categories={this.state.categories} />
            </div>
        );
    }
}

const styles = {
    backgroundColor:'#213047', 
    height: '100vh'
}

export default connect(state => ({
    category: state.category}))(Sidebar)