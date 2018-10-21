import React, { Component } from 'react';

export default class ComponentList extends Component {
    render() {
        const { list } = this.props;
        return (
            <ul>
                {
                    list && list.length !== 0 && list.map((item, index) => {
                        return (
                            <li key={index}>{ item.name }</li>
                        );
                    })
                }
            </ul>
        );
    }
}