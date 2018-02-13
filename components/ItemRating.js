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

    render() {
        const {one, two, three, four, five} = this.state.rating
        return (
            <div>
                *_______ {one} <button onClick={this.onClickVote('one')}> + </button> <br />
                **______ {two} <button onClick={this.onClickVote('two')}> + </button><br />
                ***_____ {three} <button onClick={this.onClickVote('three')}> + </button><br />
                ****____ {four} <button onClick={this.onClickVote('four')}> + </button><br />
                *****___ {five} <button onClick={this.onClickVote('five')}> + </button><br />
            </div>
        );
    }
}

export default ItemRating;