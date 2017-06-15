import { combineReducers } from 'redux';

const steps = (step = 1, action) => {
    if (action.type === 'WIZARD_STEPS') {
        return action.currentStep;
    }
    return step;
};

const setUserLocation = (location = '', action) => {
    if (action.type === 'USER_LOCATION') {
        location = action.userLocation;
        return action.userLocation;
    }
    return location;
};

const setInputValidation = (message = '', action) => {
    if (action.type === 'VALIDATION') {
        message = action.message
        return action.message;
    }
    return message;
};

const setUserCustomInfo = (customInfo = {'email': '', 'phoneNo': ''}, action) => {
    if (action.type === 'USER_CUSTOM_INFO') {
        customInfo = action.info;
        return customInfo;
    }
    return customInfo;
}

const doingReview = (flag = false, action) => {
    if (action.type === 'DO_REVIEW') {
        return action.flag;
    }
    return flag;
}

const postedUserData = (msg='', action) => {
    if (action.type === 'POSTED') {
        msg = action.message;
        return action.message
    }
    return msg
}

export default combineReducers({
    steps,
    setUserLocation,
    setInputValidation,
    setUserCustomInfo,
    doingReview,
    postedUserData
});