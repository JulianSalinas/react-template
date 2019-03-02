import React, { Component } from "react";
import withContext from "../dashboard/dashboard-context";


class WelcomeView extends Component {

    render() {
        return <div> Welcome </div>;
    }

}

export default withContext(WelcomeView);

