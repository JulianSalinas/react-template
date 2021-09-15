import React, { Component } from "react";

import AppProvider from "./AppProvider";
import AppRouter from "./AppRouter";
import UserInfo from "../settings/UserInfo";

export default class App extends Component {

    state = {
        user: UserInfo
    };

    componentDidMount(){

    }

    componentWillUnmount() {

    }

    getStore = () => {
        return { ...this.state };
    };

    render() {
        return (
            <AppProvider store={this.getStore()}>
                <AppRouter/>
            </AppProvider>
        );
    }

}