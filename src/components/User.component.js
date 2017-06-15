import React, { Component } from 'react';
import { UserView } from './views/index';

export default class User extends Component {
    render() {
        return (
            <UserView params={this.props.that} />
        );
    }
}
