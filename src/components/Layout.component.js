import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  wizardSteps, userLocation,
  validate, userCustomInfo, 
  doReview, posted
} from '../actions/index';

import { LayoutView } from './views/index';

class Layout extends Component {
  render() {
    return (
      <LayoutView that={this}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    step: state.steps,
    getUserLocation: state.setUserLocation,
    getValidMessage: state.setInputValidation,
    getUserCustomInfo: state.setUserCustomInfo,
    getReviewResult: state.doingReview,
    getPostMessage: state.postedUserData
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    wizardSteps: wizardSteps,
    userLocation: userLocation,
    validate: validate,
    userCustomInfo: userCustomInfo,
    doReview: doReview,
    posted: posted
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Layout);