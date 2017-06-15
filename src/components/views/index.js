import React from 'react';
import User from '../User.component';
import Location from '../Location.component';
import CustomInfo from '../CustomInfo.component';
import Review from '../Review.component';

export const LayoutView = ({that}) => {
    return (
        <div className="container">
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title header"> Wizard Application </h1>
                    <nav className="nav">
                        <div className="nav-left">
                            <div className="nav-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className={"button " + (that.props.step === 1 ? 'is-info' : '')}
                                            onClick={() => that.props.wizardSteps(1)}>
                                            <span>Where are you from?</span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className={"button " + (that.props.step === 2 ? 'is-info' : '')}
                                            onClick={() => that.props.wizardSteps(2)}>
                                            <span>Your contact information</span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className={"button " + (that.props.step === 3 ? 'is-info' : '')}
                                            onClick={() => that.props.wizardSteps(3)}>
                                            <span>Review</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <User that={that} />            
        </div>
    );
}

export const UserLocationView = ({ params, handler }) => {
    return (
        <section className="viewContainer">
            <div className="field">
                <label className="label">Please enter your location</label>
                <p className="control">
                    <input className="input" id="locationInput"
                        type="text" placeholder="Your Location" onKeyUp={handler} />
                </p>
            </div>
        </section>
    ); 
};

export const UserCustomInfoView = ({ params, onInputUpdate }) => {
    let that = params;
    return (
        <section className="viewContainer">
            <h1 className="title">Contact Information</h1>
            <h3 className="title is-4 error">{that.props.getValidMessage}</h3>
            <div className="field">
                <label className="label">Please enter your email:</label>
                <p className="control">
                    <input className="input" id="email" type="email"
                        placeholder="email address" onChange={onInputUpdate}
                    />
                </p>
            </div>
            <div className="field">
                <label className="label">Please enter your mobile number:</label>
                <p className="control">
                    <input className="input" id="phoneNo" type="text"
                        placeholder="Mobile Number" onChange={onInputUpdate}
                    />
                </p>
            </div>
        </section>
    );
};


export const ReviewView = ({ params, handler }) => {
    let that = params;
    return (
        <section className="viewContainer">
            <h1 className="title">Review</h1>
            <div className="field">
                <p className="error">
                    {that.props.getReviewResult ? "" : "Please make sure, you entered a valid email address, mobile no and location."}
                </p>
                <ul>
                    <li>
                        <label className="label">
                            Your Location: <span className="success">{" " + that.props.getUserLocation} </span>
                        </label>    
                    </li>
                    <li> 
                        <ul>
                            <li>
                                <label className="label">
                                Your Email Address: <span className="success">{" " + that.props.getUserCustomInfo.email} </span>
                                </label>
                            </li>
                            <li>
                                <label className="label">
                                Your Mobile No: <span className="success">{" " + that.props.getUserCustomInfo.phoneNo} </span>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p className="title success"> {that.props.getPostMessage} </p>
            <FinishButton params={that} confirmButtonHandler={handler} />
        </section>
    );
}


export const UserView = ({ params }) => {
    let that = params;
    if (that.props.step === 1) {
        return (
            <Location that={that} />
        );
    }
    if (that.props.step === 2) {
        return (
            <CustomInfo that={that} />
        );
    }
    if (that.props.step === 3) {
        return (
            <Review that={that} />
        );
    }
};

export const FinishButton = ({ params, confirmButtonHandler }) => {
    let that = params;
    return (
        <footer>
            <nav className="nav">
                <div className="nav-right">
                    <span className="nav-item">
                        <button className={"button " + (that.props.getReviewResult ? 'is-success': 'is-primary')}
                            disabled={!that.props.getReviewResult}
                            onClick={confirmButtonHandler}>
                            Confirm</button>
                    </span>
                </div>
            </nav>
        </footer>
        
    );
};