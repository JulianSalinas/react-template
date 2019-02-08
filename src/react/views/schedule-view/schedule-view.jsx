import React, { Component } from "react";

import { database } from "../../../js/firebase";
import ScheduleViewLayout from "./schedule-view-layout";
import withContext from "../../dashboard/dashboard-context";


class ScheduleView extends Component {

    state = {
        events: [],
        selected: null,
    };

    componentDidMount(){
        database.ref("edepa6/schedule").limitToLast(11).on("child_added", this.eventAdded);
    }

    componentWillUnmount() {
        database.ref("edepa6/schedule").off();
    }

    eventAdded = snapshot => {
        const event = { ...snapshot.val(), key: snapshot.key };
        this.setState(prevState => ({ events: [...prevState.events, event] }));
    };

    setEventSelected = index => {
        const selected  = this.state.events[index];
        this.setState({ selected: selected === this.state.selected ? null : selected });
    };

    render() {
        return <ScheduleViewLayout
            events={this.state.events}
            selected={this.state.selected}
            setEventSelected={this.setEventSelected}/>
    }

}

export default withContext(ScheduleView);

