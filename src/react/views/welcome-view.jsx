import React, { Component } from "react";

import styles from "./view-styles";
import { withTheme } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import withContext from "../dashboard/dashboard-context";


class WelcomeView extends Component {

    render() {
        return <div> Welcome </div>;
    }

}

const ViewManagerThemed = withStyles(styles)(withTheme()(WelcomeView));
export default withContext(ViewManagerThemed);

