import React, { Component } from "react";

import { database } from "../../../js/firebase";
import ScheduleViewLayout from "./schedule-view-layout";
import withContext from "../../dashboard/dashboard-context";


class ScheduleView extends Component {

    state = {
        events: [],
        openEvent: null,
        keepSynch: true,
        creatingEvent: {},
        selectedEvent: null,
        reference: database.ref("edepa6/schedule")
    };

    componentDidMount(){
        const reference = this.state.reference;
        reference.on("child_added", this.eventAdded);
        reference.on("child_changed", this.eventChanged);
        reference.on("child_removed", this.eventRemoved);
    }

    componentWillUnmount() {
        this.state.reference.off();
    }

    toogleKeepSynch = () => {
        this.setState({ keepSynch: !this.state.keepSynch });
    };

    eventAdded = snapshot => {
        const addedEvent = { ...snapshot.val(), key: snapshot.key };
        this.setState(prevState => ({ events: [addedEvent, ...prevState.events] }));
    };

    eventChanged = snapshot => {
        const updatedEvent = { ...snapshot.val(), key: snapshot.key };
        this.setState({ events: this.state.events.map(event =>
            (event.key === snapshot.key ? updatedEvent : event))
        });
    };

    eventRemoved = snapshot => {
        const removedEvent = { ...snapshot.val(), key: snapshot.key };
        this.setState({ events: this.state.events.filter(event => {
            return event.key !== removedEvent.key;
        })});
    };

    setOpenEvent = index => {
        const mustClose = index === this.state.openEvent;
        this.setState({ openEvent: mustClose ? null : index });
    };

    setSelectedEvent = index => {
        const mustUnselect = index === this.state.selected;
        this.setState({ selectedEvent: mustUnselect ? null : index });
    };

    updateEvent = (index, prop, value) => {
        if (index === -1) this.updateCreatingEvent(prop, value);
        else this.updateListedEvent(index, prop, value);
    };

    updateListedEvent = (index, prop, value) => {
        const reference = this.state.reference;
        const event = this.state.events[index];
        event[prop] = value;
        if (this.state.keepSynch){
            reference.child(event.key).set(event);
        }
        else this.setState({ events:
            this.state.events.map(old => (old.key === event.key ? event : old))
        });
    };

    updateCreatingEvent = (prop, value) => {
        const event = this.state.creatingEvent;
        event[prop] = value;
        this.setState({ creatingEvent: event})
    };

    removeEvent = event => {
        const reference = this.state.reference;
        database.ref(reference).child(event.key).remove();
    };

    submitEvent = event => {
        const reference = this.state.reference;
        if (event.key === undefined || event.key === null){
            database.ref(reference).push().set(event);
            this.setState({ creatingEvent: {} })
        }
        else {
            database.ref(reference).child(event.key).set(event);
        }
    };

    render() {
        return <ScheduleViewLayout
            events={this.state.events}
            keepSynch={this.state.keepSynch}
            openEvent={this.state.openEvent}
            selectedEvent={this.state.selectedEvent}
            creatingEvent={this.state.creatingEvent}
            updateEvent={this.updateEvent}
            removeEvent={this.removeEvent}
            submitEvent={this.submitEvent}
            setOpenEvent={this.setOpenEvent}
            toggleKeepSynch={this.toogleKeepSynch}
            setSelectedEvent={this.setSelectedEvent}/>
    }

}

export default withContext(ScheduleView);

