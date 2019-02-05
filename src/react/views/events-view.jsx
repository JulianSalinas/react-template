import React, { Component } from "react";

import styles from "./view-styles";
import { withTheme } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import withContext from "../dashboard/dashboard-context";


class GamesView extends Component {

    render() {
        return <div> Games </div>;
    }

}

const ViewManagerThemed = withStyles(styles)(withTheme()(GamesView));
export default withContext(ViewManagerThemed);

