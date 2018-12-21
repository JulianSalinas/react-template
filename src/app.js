import React, { Component } from 'react';
import Dashboard from './react/dashboard/dashboard'

import Theme from "./theme"
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const InitialPage = props =>
    <MuiThemeProvider theme={Theme}>
        <Dashboard user={ props.user }/>
    </MuiThemeProvider>;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { user: require('./json/localuser') }
    }

    render() {
        return <InitialPage user={ this.state.user }/>;
    }

}