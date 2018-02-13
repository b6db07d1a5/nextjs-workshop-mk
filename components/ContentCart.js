import React, { Component } from 'react';

class ContentCart extends Component {
    render() {
        const { menus } = this.props
        return (
            <div>
                <ul>
                    {menus.map((menu, i) => <li key={`menu cart ${i}`}>{menu.name} </li>)}
                </ul>
            </div>
        );
    }
}

export default ContentCart;