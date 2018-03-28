import React, { Component } from 'react';
import HOC from './HOC';

export default class TestContainer extends Component {
    constructor(props) {
        super(props);
        // this.sayName = this.sayName.bind(this);
        this.state = {
            age: 1,
        };
    }

    sayName = () => {
        console.log('123');
    }

    componentWillMount() {
        this.setState({
            age: 2,
        });
    }

    render(){
        console.log(this.state.age);
        return (
            <div onClick = {this.sayName}>12312</div>
        );
    }
}
