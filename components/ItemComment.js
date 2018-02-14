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
            <div style={styles}>
                <span> Coments </span>
                {this.state.comments.map((comment) => 
                    <div key={comment.id} style={styles.comment}> {comment.body} </div>)}
                
                <div style={{height: 130, display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span style={styles.textUnderComment} > Your Comment </span>
                    <textarea style={styles.input} rows='3' value={this.state.commentText} onChange={this.handleTextComment} />
                    <button style={styles.button} onClick={this.onClickSubmitComment}> submit </button>
                </div>
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