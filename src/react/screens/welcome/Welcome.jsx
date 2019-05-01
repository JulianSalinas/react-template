import React, { Component } from "react";

import SocialExample from "./SocialExample";
// import CurtainExample from "./CurtainExample";
import withContext from "../../dashboard/Context";


class Welcome extends Component {

    render() {
        return (
            <div>
                <SocialExample/>
            </div>
        );
    }

}

export default withContext(Welcome);

