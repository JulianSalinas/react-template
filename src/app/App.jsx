import React, { Component } from "react";

import AppRouter from "./AppRouter";
import AppProvider from "./AppProvider";
import AppDatabase from "../model/AppDatabase";
import StubUser from "../constants/main/Phantom";


export default class App extends Component {

    state = {
        people: {},
        events: {},
        user: StubUser
    };

    constructor(props){
        super(props);
        this.database = new AppDatabase();
    }

    componentDidMount(){
        this.database.synchPeople(this.synchPerson);
        this.database.synchEvents(this.synchEvent);
    }

    componentWillUnmount() {
        this.database.closeConnection();
    }

    synchEvent = (key, event, action) => {
        const events = this.state.events;
        action === AppDatabase.DELETE ?
            delete events[key]:
            events[key] = event;
        this.setState({ events: events});
    };

    createEvent = event => {
        this.database.createEvent(event);
    };

    updateEvent = (key, event, synch) => {
        if (synch)
            this.database.updateEvent(key, event);
        else {
            const events = this.state.events;
            events[key] = event;
            this.setState({ events: events })
        }
    };

    deleteEvent = key => {
        this.database.deleteEvent(key);
    };

    synchPerson = (key, person, action) => {
        const people = this.state.people;
        action === AppDatabase.DELETE ?
            delete people[key]:
            people[key] = person;
        this.setState({ people: people });
    };

    getStore = () => {
        return {
            ...this.state,
            createEvent: this.createEvent,
            updateEvent: this.updateEvent,
            deleteEvent: this.deleteEvent
        };
    };

    render() {
        return (
            <AppProvider store={this.getStore()}>
                <AppRouter/>
            </AppProvider>
        );
    }

}