import React, { Component } from 'react';

export default (fetchUrl) => (WrappedComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            value: null,
        };
    }

    componentDidMount() {
        const context = require.context('../Comment', true, /\.js(on)?$/);
        let responseData = context(fetchUrl);
        this.setState({
            value: responseData,
            loading: false,
        });
    }

    render() {
        if (this.state.loading) {
            return (<div>loading</div>);
        } else if (this.state.error !== null) {
            return (<div>error</div>);
        } else {
            console.log(this.state.value);
            const list = this.state.value.commentList;
            console.log('list', list);
            return (
                <WrappedComponent { ...this.props } {...this.state.value} />
            );
        }
    }

}