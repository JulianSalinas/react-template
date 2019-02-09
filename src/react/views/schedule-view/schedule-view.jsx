import React, { Component } from "react";

import { database } from "../../../js/firebase";
import ScheduleViewLayout from "./schedule-view-layout";
import withContext from "../../dashboard/dashboard-context";


class ScheduleView extends Component {

    state = {
        events: [],
        openEvent: null,
        selectedEvent: null,
        reference: "edepa6/schedule"
    };

    componentDidMount(){
        const reference = this.state.reference;
        database.ref(reference).limitToLast(11).on("child_added", this.eventAdded);
    }

    componentWillUnmount() {
        const reference = this.state.reference;
        database.ref(reference).off();
    }

    eventAdded = snapshot => {
        const event = { ...snapshot.val(), key: snapshot.key };
        this.setState(prevState => ({ events: [...prevState.events, event] }));
    };

    setOpenEvent = eventIndex => {
        const mustClose = eventIndex === this.state.openEvent;
        this.setState({ openEvent: mustClose ? null : eventIndex });
    };

    setSelectedEvent = eventIndex => {
        const mustUnselect = eventIndex === this.state.selected;
        this.setState({ selectedEvent: mustUnselect ? null : eventIndex });
    };

    render() {
        return <ScheduleViewLayout
            events={this.state.events}
            openEvent={this.state.openEvent}
            selectedEvent={this.state.selectedEvent}
            setOpenEvent={this.setOpenEvent}
            setSelectedEvent={this.setSelectedEvent}/>
    }

}

export default withContext(ScheduleView);

