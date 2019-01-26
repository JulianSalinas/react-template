import React, { Component } from 'react';
import Dashboard from './react/dashboard/dashboard'

const InitialPage = props =>
    <Dashboard user={ props.user }/>;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { user: require('./json/localuser') }
    }

    render() {
        return <InitialPage user={ this.state.user }/>;
    }

}