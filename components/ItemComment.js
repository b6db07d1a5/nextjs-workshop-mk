import React, { Component } from 'react';

class ItemComment extends Component {

    state = {
        isLoading: true,
        commentText: '',
        comments:[]
    }
    componentDidMount(){
        this.retrieveComment(this.props.itemId)
    }

    retrieveComment = (itemId) => {
        fetch(`http://localhost:3001/comments?menuId=${itemId}`)
        .then((resp) => resp.json()) 
        .then((data) => {
            this.setState({
                isLoading: false,
                comments: data
            })

        })
    }

    handleTextComment = (e) => {
        this.setState({
            ...this.state,
            commentText: e.target.value
        })
    }

    onClickSubmitComment = () => {
        let com = this.state.comments
        com.push({
            "id": this.state.comments.length + 1,
            "body": this.state.commentText,
            "menuId": this.props.itemId
        })
        this.setState({
            ...this.state,
            commentText: '',
            comments: com
        })
    }

    render() {
        if(this.state.isLoading) {
            return null
        }
        return (
            <div>
                {this.state.comments.map((comment) => <div key={comment.id}> {comment.body} </div>)}
                <input value={this.state.commentText} onChange={this.handleTextComment} />
                <button  onClick={this.onClickSubmitComment}> submit </button>
            </div>
        )
    }
}

export default ItemComment;