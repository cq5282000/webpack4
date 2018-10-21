import React, { Component } from 'react';
import CommentList from './CommentList';
import 'whatwg-fetch';
import Promised from './Promised';

@Promised('./response.json')
export default class CommentContainer extends Component {
    render() {
        return (
            <CommentList list={this.props.commentList} />
        );
    }
}
// export default Promised('./response.json', CommentContainer);