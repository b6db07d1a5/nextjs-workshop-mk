import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles= {display:'inline-block', paddingRight: 20}

class Header extends Component {

    headerClick = (headerValue) => () => {
        this.props.dispatch({type: 'CART_CLICK', contentDisplay: headerValue})
    }

    render() {
        return (
            <div>
                Header
                <div >
                    <p style={styles} >menus</p>
                    <p style={styles} onClick={this.headerClick('cart')}>cart</p>
                </div>
                
            </div>
        );
    }
}

export default connect(state => ({
    category: state.category}))(Header)