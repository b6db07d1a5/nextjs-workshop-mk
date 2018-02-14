import React, { Component } from 'react';

class ItemRating extends Component {
    state = {
        rating: this.props.rating
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    onClickVote = (type) => () => {
        const { rating } = this.state
        switch(type) {
            case 'one':
                this.setProp(rating, 'one')
                break;
            case 'two':
                this.setProp(rating, 'two')
            break;
            case 'three':
                this.setProp(rating, 'three')
                break;
            case 'four':
                this.setProp(rating, 'four')
                break;
            case 'five':
                this.setProp(rating, 'five')
                break;
        }
    }

    setProp = (rating, prop) => {
        this.setState({
            rating: {
                ...rating,
                [prop]: rating[prop] + 1
            }
        })
    }

    star = (count) => {
        let star = []
        for(let i = count; i--;){
            star.push(<img src='static/images/rating/star.png' style={{width:10, height:10}} />)
        }
        return (
            <div style={{width: 60}}>
                {star}
            </div>
        )
    }
    render() {
        const {one, two, three, four, five} = this.state.rating
        return (
            <div style={styles}>
                <span> Rate This Menu </span>
                <div style={styles.item}>
                    {this.star(1)} {one} <button onClick={this.onClickVote('one')}> + </button>
                </div>
                <div style={styles.item}>
                    {this.star(2)} {two} <button onClick={this.onClickVote('two')}> + </button>
                </div>
                <div style={styles.item}>
                    {this.star(3)} {three} <button onClick={this.onClickVote('three')}> + </button>
                </div>
                <div style={styles.item}>
                    {this.star(4)} {four} <button onClick={this.onClickVote('four')}> + </button>
                </div>
                <div style={styles.item}>
                    {this.star(5)} {five} <button onClick={this.onClickVote('five')}> + </button>
                </div>
            </div>
        );
    }
}

const styles = {
    item: {
        display: 'flex'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}



export default ItemRating;