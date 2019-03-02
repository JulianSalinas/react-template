import React, { Component } from "react";

import AppRouter from "./app-router";
import AppProvider from "./app-provider";
import FirebaseDatabse from "../model/firebase-database";


export default class AppController extends Component {

    state = {
        people: {},
        events: {},
        user: require("../json/localuser")
    };

    constructor(props){
        super(props);
        this.database = new FirebaseDatabse();
    }

    componentDidMount(){
        this.database.synchPeople(this.readPerson);
        this.database.synchEvents(this.readEvent);
    }

    componentWillUnmount() {
        this.database.closeConnection();
    }

    createEvent = event => {
        this.database.createEvent(event);
    };

    readEvent = (key, event, action) => {
        const events = this.state.events;
        action === FirebaseDatabse.DELETE ?
            delete events[key]:
            events[key] = event;
        this.setState({ events: events});
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
        action === FirebaseDatabse.DELETE ?
            delete people[key]:
            people[key] = person;
        this.setState({ people: people});
    };

    getDatabase = () => {
        return {
            ...this.state,
            createEvent: this.createEvent,
            updateEvent: this.updateEvent,
            deleteEvent: this.deleteEvent
        };
    };

    render() {
        return (
            <AppProvider database={this.getDatabase()}>
                <AppRouter/>
            </AppProvider>
        );
    }

}