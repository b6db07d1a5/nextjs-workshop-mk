import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoriesList extends Component {

    render() {
        const { categories, categoryClick } = this.props
        return (
            <div>
                    {categories.map((item, i) => 
                    <CategoryItem key={`category ${i}`} 
                        categoryClick={categoryClick} 
                        item={item}
                        />)}
            </div>
            
        );
    }
}

export default CategoriesList;