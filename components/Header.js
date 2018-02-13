import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles= {display:'inline-block', paddingRight: 20}

class Header extends Component {
    headerAction = (headerValue) => {
        switch(headerValue) {
            case 'menus' : 
                return {
                    type: 'MENUS_CLICK', 
                    contentDisplay: headerValue}
            case 'cart' :
                return {
                    type: 'CART_CLICK', 
                    contentDisplay: headerValue}
        }
    }
    headerClick = (headerValue) => () => {
        this.props.dispatch(this.headerAction(headerValue))
    }

    render() {
        return (
            <div>
                <div >
                    <p style={styles} onClick={this.headerClick('menus')}>menus</p>
                    <p style={styles} onClick={this.headerClick('cart')}>cart</p>
                </div>
                
            </div>
        );
    }
}

export default connect(state => ({
    content: state.content})
)(Header)