import React, { Component } from 'react';

class ItemComment extends Component {
    render() {
        return (
            <div>
                {this.props.body}
            </div>
        );
    }
}

export default ItemComment;