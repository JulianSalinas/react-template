import React, { Component } from "react";
import GamesLayout from "./Layout";
import withContext from "../../dashboard/Context";
import './demo.css';

class Games extends Component {

    state = {
        inside: [ 0, 4 ],
        outside: [ 1 , 2, 3, 5]
    };

    moveItem = (item, source, target) => {
        this.state[target].push(item);
        this.setState({ ...this.state,
            [target]: this.state[target],
            [source]: this.state[source].filter(listItem => listItem !== item)});
    };

    render() {
        return <GamesLayout {...this.state} moveItem={this.moveItem}/>;
    }

}

export default withContext(Games);

