import React, { Component } from "react";
import withAppContext from "../../../controller/app-context";
import Typography from "@material-ui/core/Typography/Typography";


class PeopleView extends Component {

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.database.people).map((key, index) => {
                        return (
                            <Typography key={key} variant={"body1"}>
                                {this.props.database.people[key].completeName}
                            </Typography>
                        )
                    })
                }
            </div>
        );
    }

}

export default withAppContext(PeopleView);

