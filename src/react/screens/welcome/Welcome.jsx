import React, { Component } from "react";
import CurtainExample from "./CurtainExample";
import withContext from "../../dashboard/Context";


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

