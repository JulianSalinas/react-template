import React, { Component } from "react";
import withContext from "../dashboard/dashboard-context";
import CurtainExample from "./curtain-example";


class WelcomeView extends Component {

    render() {
        return (
            <div>
                <CurtainExample/>
            </div>
        );
    }

}

export default withContext(WelcomeView);

