import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.dispatch({
            type:'CATEGORY_CLICK', 
            categoryId: 0
        })
    }

    render() {
        return (
            <div>
                <div style={styles}>
                    <p onClick={this.headerClick('menus')}>menus</p>
                    <p onClick={this.headerClick('cart')}>cart</p>
                </div>
                
            </div>
        );
    }
}

const styles= {
    display:'flex'
}


export default connect(state => ({
    content: state.content})
)(Header)