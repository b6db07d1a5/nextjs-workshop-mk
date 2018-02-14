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
                <div style={styles}>
                    <div style={styles.divLogo}>
                        MK ORDER
                        </div>
                    <div onClick={this.headerClick('menus')} style={styles.divBtn}>
                        Menus
                    </div>
                    <div onClick={this.headerClick('cart')} style={styles.divBtn}>
                        Cart
                    </div>
                    <div style={styles.divSpace}>
                        </div>
                </div>
                
        );
    }
}

const styles= {
    display:'flex',
    divLogo: {
        width: 150,
        borderRight: '1px solid #ddd',
        padding: 10
    },
    divBtn: {
        borderRight: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        padding: 10
    },
    divSpace: {
        borderBottom: '1px solid #ddd',
        width: '100vh'
    }

}


export default connect(state => ({
    content: state.content})
)(Header)