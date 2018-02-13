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
            <div>
                <div>
                    {menus.map((menu, i) => 
                        <div key={`menu cart ${i}`}>
                        {menu.name} 
                        <button onClick={this.props.onClickDecreaseFromCart(menu.id)}> - </button>
                        {menu.qty}
                        <button onClick={this.props.onClickIncreaseFromCart(menu.id)}> + </button>
                        </div>)}
                </div>
                =-=-=-=-=-=-=-=-=-=-=-= <br />
                {sum}
            </div>
        );
    }
}



export default ContentCart;