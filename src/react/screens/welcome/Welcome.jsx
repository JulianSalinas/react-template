import React, { Component } from "react";
import withContext from "../dashboard/Context";
import CurtainExample from "./CurtainExample";


class Welcome extends Component {

    render() {
        return (
            <div>
                <CurtainExample/>
            </div>
        );
    }

}

export default withContext(Welcome);

