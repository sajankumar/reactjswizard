export const wizardSteps = (step) => {
    return {
        type: 'WIZARD_STEPS',
        currentStep: step
    }
};

export const userLocation = (location) => {
    return {
        type: 'USER_LOCATION',
        userLocation: location
    }
};

export const validate = (msg) => {
    return {
        type: 'VALIDATION',
        message: msg
    }
};

export const userCustomInfo = (customInfo) => {
    return {
        type: 'USER_CUSTOM_INFO',
        info: customInfo
    }
};

export const doReview = (flag) => {
    return {
        type: 'DO_REVIEW', 
        flag: flag
    }
}

export const posted = (msg) => {
    return {
        type: 'POSTED',
        message: msg
    }
}