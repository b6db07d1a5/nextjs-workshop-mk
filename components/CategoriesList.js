import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoriesList extends Component {

    render() {
        const { categories, categoryClick } = this.props
        return (
            <ul>
                {categories.map((category, i) => 
                <CategoryItem key={`category ${i}`} 
                    categoryClick={categoryClick} 
                    itemId={category.id}
                    itemName={category.name}
                     />)}
            </ul>
        );
    }
}

export default CategoriesList;