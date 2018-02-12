import React from 'react';

const CategoryItem = ({itemId, itemName, categoryClick}) => {
    return (
        <li onClick={categoryClick(itemId)}>{itemName}</li>
    );
};

export default CategoryItem