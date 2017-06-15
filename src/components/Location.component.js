import React, { Component } from 'react';
import { UserLocationView } from './views/index';
const google = window.google;
var places = null;
export default class Location extends Component {
    constructor(props) {
        super(props);
        this.udpateLocation = this.udpateLocation.bind(this);
    }

    udpateLocation() {
        let elem = document.getElementById('locationInput');
        if (this.props.that.props.getUserLocation !== '') {
            elem.value = this.props.that.props.getUserLocation;
        }
        places = new google.maps.places.Autocomplete(elem);
        google.maps.event.addListener(places, 'place_changed', function () {
            let place = places.getPlace();
            this.props.that.props.userLocation(place.formatted_address);
        }.bind(this));
    }

    componentDidMount() {
        this.udpateLocation();
    }

    inputHandler(evt) {
        console.log(evt.target.value)
        if (evt.target.value === '') {
            this.props.that.props.userLocation('');
        }
    }
    render() {
        return (
            <UserLocationView params={this.props.that} handler={this.inputHandler.bind(this)} />
        );
    }
}