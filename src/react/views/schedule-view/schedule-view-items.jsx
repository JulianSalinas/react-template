import PropTypes from "prop-types";
import React, { Component } from "react";

import ScheduleViewLayout from "./schedule-view-layout";
import withContext from "../../dashboard/dashboard-context";


class ScheduleItems extends Component {

    componentDidMount(){
        this.props.reference.limitToLast(3).on("child_added", this.eventUpdated);
        this.props.reference.on("child_changed", this.eventUpdated);
        this.props.reference.on("child_removed", this.eventRemoved);
    }

    componentWillUnmount() {
        this.props.reference.off();
    }

    eventUpdated = snapshot => {
        this.setState({[snapshot.key]: snapshot.val()});
    };

    eventRemoved = snapshot => {
        this.setState({ ...this.state, [snapshot.key]: undefined});
    };

    updateEvent = (id, prop, value) => {
        if (this.props.keepSynch)
            this.props.reference.child(id).child(prop).set(value);
        else this._offlineUpdateEvent(id, prop, value)
    };

    _offlineUpdateEvent = (id, prop, value) =>  {
        const event = this.state[id];
        event[prop] = value;
        this.setState({[id]: event});
    };

    removeEvent = id => {
        console.log('item removed!');
        this.props.reference.child(id).remove();
    };

    submitEvent = (id, value) => {
        const create = id === undefined || id === null;
        const pushId = create ? this.props.reference.push().key : id;
        this.props.reference.child(pushId).set(value);
    };

    render() {
        return <ScheduleViewLayout
            updateEvent={this.updateEvent}
            removeEvent={this.removeEvent}
            submitEvent={this.submitEvent}
            events={this.state || {} } {...this.props}/>;
    }

}

ScheduleItems.propsTypes = {
    reference: PropTypes.string.isRequired,
    keepSynch: PropTypes.bool.isRequired,
    openItem: PropTypes.number.isRequired,
    selectedItem: PropTypes.number.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    toggleKeepSynch: PropTypes.func.isRequired,
};

export default withContext(ScheduleItems);

