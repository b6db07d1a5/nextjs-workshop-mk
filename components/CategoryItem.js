import React from 'react';

const CategoryItem = ({item, categoryClick}) => {
    const {id, name, images} = item;
    return (
            <div style={styles} onClick={categoryClick(id)}>
                <img src={`/static/images/categories/${images}`} style={styles.image} />
                {name}
            </div>
    );
};

const styles = {
    width: 130,
    display: 'flex',
    padding: 20,
    color: '#ccc',
    image: {
        paddingRight:5,
        width:15,
        height: 15
    }
}

export default CategoryItem