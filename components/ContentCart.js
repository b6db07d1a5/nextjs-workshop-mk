import React, { Component } from 'react';

class ContentCart extends Component {
    state = {
        sum: 0,
        menus: Array()
    }
    componentDidMount() {
        const { menus } = this.props
        const sum = this.sum(menus)
        this.setState({
            ...this.state,
            menus: menus,
            sum: sum
        })
    }
    
    componentWillReceiveProps(nextProps){
        const { menus } = nextProps
        const sum = this.sum(menus)
        this.setState({
            ...this.state,
            menus: menus,
            sum: sum
        })
    }

    sum = (arr) => {
        let sum = 0;
        arr.forEach(el => {
            sum += (el.price * el.qty)
        });
        return sum
    }

    render() {
        const { menus, sum } = this.state
        return (
                <div style={styles}>
                    <div style={styles.divList}>
                        {menus.map((menu, i) => 
                            <div key={`menu cart ${i}`} style={styles.item}>
                                <p>{i+1}. </p>
                                <img style={styles.item.image} src={`static/images/menus/${menu.images}`} />
                                <p style={styles.item.name}>{menu.name}</p>
                                <p> {menu.qty} ea. </p>
                                <div style={styles.item.divBtn}>
                                    <button style={styles.item.button} onClick={this.props.onClickIncreaseFromCart(menu.id)}> + </button>
                                    <button style={styles.item.button} onClick={this.props.onClickDecreaseFromCart(menu.id)}> - </button>
                                </div>
                            </div>)}
                        
                    </div>
                    <div style={{padding: 20}}>
                        <span > Total Price : {sum} </span>
                    </div>
                </div>
        );
    }
}

const styles = {
    display: 'flex',
    divList: {
        height: '100vh',
        overflow: 'auto'
    },
    item : {
        display: 'flex',
        padding: 20,
        image: {
            width: 50,
            height: 50
        },
        name: {
            width: 150
        },
        divBtn: {
            paddingLeft: 20,
            height: 60,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        button: {
            backgroundColor: 'rgba(244, 133, 7, 0.8)',
            border: 'none',
            color: 'white',
            padding: 5,
            textAlign: 'center',
            height: 25
        }
    }
}


export default ContentCart;