import React, { Component } from "react";
import withContext from "../dashboard-view/dashboard-context";
import Typography from "@material-ui/core/Typography/Typography";


class PeopleView extends Component {

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.dashboard.people).map((key, index) => {
                        return (
                            <Typography key={key} variant={"body1"}>
                                {this.props.dashboard.people[key].completeName}
                            </Typography>
                        )
                    })
                }
            </div>
        );
    }

}

export default withContext(PeopleView);

