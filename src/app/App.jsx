import React, { Component } from "react";

import AppRouter from "./AppRouter";
import AppProvider from "./AppProvider";
import AppDatabase from "../model/AppDatabase";
import LocalUser from "../constants/main/Phantom";


class App extends Component {

    state = {
        people: {},
        events: {},
        user: LocalUser
    };

    constructor(props){
        super(props);
        this.database = new AppDatabase();
    }

    componentDidMount(){
        this.database.synchPeople(this.readPerson);
        this.database.synchEvents(this.readEvent);
    }

    componentWillUnmount() {
        this.database.closeConnection();
    }

    readEvent = (key, event, action) => {
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

    readPerson = (key, person, action) => {
        const people = this.state.people;
        action === AppDatabase.DELETE ?
            delete people[key]:
            people[key] = person;
        this.setState({ people: people});
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

export default App;