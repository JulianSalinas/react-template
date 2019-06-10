import React, { Component } from "react";

// import MapExample from "./MapExample";
// import CurtainExample from "./CurtainExample";
import withContext from "../../dashboard/Context";
import { Button } from "@material-ui/core";


class Welcome extends Component {

    render() {
        return (
            <div style={{
                padding: 16
            }}>
                <Button variant="outlined" href="rommie://app/thefucxk">
                    OPEN THE SHIT 
                </Button>
            </div>
        );
    }

}

export default withContext(Welcome);

