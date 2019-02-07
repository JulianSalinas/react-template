import React, { Component } from "react";

import { database } from "../../../js/firebase";
import ScheduleViewLayout from "./schedule-view-layout";
import withContext from "../../dashboard/dashboard-context";


class ScheduleView extends Component {

    state = {
        events: [],
        selected: null
    };

    componentDidMount(){
        database.ref("edepa6/schedule").limitToLast(10).on("child_added", this.scheduleEventAdded);
    }

    componentWillUnmount() {
        database.ref("edepa6/schedule").off();
    }

    scheduleEventClicked = index => {
        const selected  = this.state.events[index];
        this.setState({ selected: selected === this.state.selected ? null : selected });
    };

    scheduleEventAdded = snapshot => {
        this.setState(prevState => ({
            events: [...prevState.events, { ...snapshot.val(), key: snapshot.key }]
        }));
    };

    errorRetrievingScheduleEvent = error => {
        console.log("Error", error.code);
    };

    render() {
        return <ScheduleViewLayout
            events={this.state.events}
            selected={this.state.selected}
            scheduleEventClicked={this.scheduleEventClicked} />
    }

}

export default withContext(ScheduleView);

