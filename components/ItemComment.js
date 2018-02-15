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
                ...this.state,
                isLoading: false,
                commentText: '',
                comments: data
            })
        })
    }

    saveComment = () => {
        const url = 'http://localhost:3001/comments';

        let data = {
            body: this.state.commentText,
            menuId: this.props.itemId
        }
        let fetchData = { 
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, fetchData)
        .then(() => {
            this.retrieveComment(this.props.itemId)
        });

    }

    handleTextComment = (e) => {
        this.setState({
            ...this.state,
            commentText: e.target.value
        })
    }

    onClickSubmitComment = (e) => {
        this.saveComment()
    }

    render() {
        if(this.state.isLoading) {
            return null
        }
        return (
            <div style={styles}>
                <span> Coments </span>
                {this.state.comments.map((comment) => 
                    <div key={comment.id} style={styles.comment}> {comment.body} </div>)}
                
                <div style={styles.commentInput}>
                    <label style={styles.textUnderComment} > Your Comment </label>
                    <textarea style={styles.input} rows='3' value={this.state.commentText} onChange={this.handleTextComment} />
                    <button style={styles.button} onClick={this.onClickSubmitComment}> submit </button>
                </div>
                {/* <form onSubmit={this.onClickSubmitComment} style={styles.commentInput}>
                    <label style={styles.textUnderComment} > Your Comment </label>
                    <textarea style={styles.input} rows='3' value={this.state.commentText} onChange={this.handleTextComment} />
                    <button style={styles.button}> submit </button>
                </form> */}
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    comment: {
        padding: 30,
        borderBottom: '1px solid #ddd',
    },
    commentInput : {
        height: 130, 
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    textUnderComment : {
        paddingTop: 30
    },
    input: {
        width: '70%'
    },
    button: {
        backgroundColor: 'rgba(244, 133, 7, 0.8)',
        border: 'none',
        color: 'white',
        padding: 5,
        textAlign: 'center',
        width: '70%'
    }
}

export default ItemComment;