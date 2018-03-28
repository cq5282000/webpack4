import React, { Component } from 'react';
import 'whatwg-fetch';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            value: null,
        };
    }

    componentDidMount() {
        fetch('./response.json')
            .then(response => response.json)
            .then(value => this.setState({loading: false, value}))
            .catch(error => this.setState({loading: false, error}));
    }

    render() {
        if (this.state.loading) {
            return (<div>loading</div>);
        } else if (this.state.error !== null) {
            return (<div>error</div>);
        } else {
            const list = this.state.value.commentList;
            return (
                <ul>
                    { list.map((item, index) => {
                        <li>{ item.name }</li>
                    }) }
                </ul>
            );
        }
    }

}