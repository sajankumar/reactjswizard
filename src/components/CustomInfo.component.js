import React, { Component } from 'react';
import { UserCustomInfoView } from './views/index';
import { isValidInput } from '../utils/Utils';

export default class CustomInfo extends Component {
    constructor(props) {
        super(props);
        this.customUserInfo = this.props.that.props.getUserCustomInfo;
    }

    onInputUpdate(evt) {
        if (evt.target.type === 'email') {
            this.customUserInfo.email = evt.target.value;
            if (!isValidInput(evt.target.value, evt.target.type)) {
                this.props.that.props.validate('Enter valid email address');
            } else {
                this.props.that.props.validate('');
            }
        }
        if (evt.target.type === 'text') {
            this.customUserInfo.phoneNo = evt.target.value;
            if (!isValidInput(evt.target.value, evt.target.type)) {
                this.props.that.props.validate('Enter 10 digit valid mobile number.');
            } else {
                this.props.that.props.validate('');
            }
        }
        this.props.that.props.userCustomInfo(this.customUserInfo);
    }

    componentDidMount() {
        let reduxProps = this.props.that.props;
        document.getElementById('email').value = reduxProps.getUserCustomInfo.email;
        document.getElementById('phoneNo').value = reduxProps.getUserCustomInfo.phoneNo;
    }

    render() {
        return (
            <UserCustomInfoView params={this.props.that} onInputUpdate={this.onInputUpdate.bind(this)} />
        );
    }
}