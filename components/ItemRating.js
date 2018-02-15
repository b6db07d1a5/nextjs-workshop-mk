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

    star = (starCount) => {

        // let rate = Object.values(rating)

        // let sum = rating.reduce((a, b) => a.val + b.val)
        // let per = rating.reduce((a, b) => (a.count * a.val) + (b.count * b.val))
        
        // let starCount = parseInt(per/sum)

        let star = []
        for(let i = starCount; i--;){
            star.push(<img key={`star${i}`} src='static/images/rating/star.png' style={{width:10, height:10}} />)
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
                <div style={styles.item} onClick={this.onClickVote('one')}>
                    {this.star(1)} {one}
                </div>
                <div style={styles.item} onClick={this.onClickVote('two')}>
                    {this.star(2)} {two}
                </div>
                <div style={styles.item} onClick={this.onClickVote('three')}>
                    {this.star(3)} {three}
                </div>
                <div style={styles.item} onClick={this.onClickVote('four')}>
                    {this.star(4)} {four}
                </div>
                <div style={styles.item} onClick={this.onClickVote('five')}>
                    {this.star(5)} {five}
                </div>
            </div>
        );
    }
}

const styles = {
    item: {
        display: 'flex',
        alignItems: 'stretch'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}



export default ItemRating;