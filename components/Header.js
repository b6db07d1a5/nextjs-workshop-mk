import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles= {display:'inline-block', paddingRight: 20}

class Header extends Component {
    headerAction = (headerValue) => {
        switch(headerValue) {
            case 'cart' : 
                return {
                    type: 'CART_CLICK', 
                    contentDisplay: headerValue}
            case 'category' :
                return {
                    type: 'CATEGORY_CLICK', 
                    contentDisplay: headerValue}
        }
    }
    headerClick = (headerValue) => () => {
        this.props.dispatch(this.headerAction(headerValue))
    }

    render() {
        return (
            <div>
                Header
                <div >
                    <p style={styles} onClick={this.headerClick('category')}>menus</p>
                    <p style={styles} onClick={this.headerClick('cart')}>cart</p>
                </div>
                
            </div>
        );
    }
}

export default connect(state => ({
    category: state.category}))(Header)