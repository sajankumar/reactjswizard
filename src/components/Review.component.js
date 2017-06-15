import React, { Component } from 'react';
import { ReviewView } from './views/index';
import { isValidInput } from '../utils/Utils';

export default class Review extends Component {
    componentDidMount() {
        let reduxProps = this.props.that.props;
        if (reduxProps.getUserLocation === '' ||
            !isValidInput(reduxProps.getUserCustomInfo.email, 'email') ||
            !isValidInput(reduxProps.getUserCustomInfo.phoneNo, 'text')) {
            reduxProps.doReview(false);
            this.props.that.props.posted('');
        } else {
            reduxProps.doReview(true);
        } 
        
    }
    confirmButtonHandler(evt) {
        let userData = {
            'userLocation': this.props.that.props.getUserLocation,
            'userEmailAddress': this.props.that.props.getUserCustomInfo.email,
            'userMobileNo': this.props.that.props.getUserCustomInfo.phoneNo
        };
        let jsonObj = JSON.stringify(userData);
        this.props.that.props.posted('JSON object created! Post query is executing...');
        console.log(jsonObj);
        //fake server to post the data..
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: jsonObj
        })
        .then(res => res.json()) 
            .then((res) => {
            let msg = 'Successfully posted!'
            this.props.that.props.posted(msg);
            //clear the store after few seconds.    
            setTimeout(() => {
                this.props.that.props.userCustomInfo({ email: '', phoneNo: '' });
                this.props.that.props.userLocation('');
                this.props.that.props.doReview(false);
                this.props.that.props.posted('');
                this.props.that.props.wizardSteps(1);
            }, 2000);
        });
    }
    render() {
        return (
            <ReviewView params={this.props.that} handler={this.confirmButtonHandler.bind(this)} />
        );
    }
}