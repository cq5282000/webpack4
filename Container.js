import React, { Component } from 'react';
import HOC from './HOC';

export default class TestContainer extends Component {
    constructor(props) {
        super(props);
        // this.sayName = this.sayName.bind(this);
        
    }
    // sayName(){
    //     console.log(this.name);
    // }
    
    sayName = () => {
        console.log('123');
    }

    render(){
        return (
            <div onClick = {this.sayName}>12312</div>
        );
    }
}
