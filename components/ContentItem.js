import React, { Component } from 'react';

class ContentItem extends Component {
    render() {
        return (
            <div style={{display: 'inline', padding: 20}}>
                {this.props.item}

                <button>
                    buy
                    </button>
            </div>
        );
    }
}

export default ContentItem;