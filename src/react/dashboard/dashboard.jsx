import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import TwoStatesButton from "../components/two-states-button";


const DashboardLayout = props =>
    <Grid container spacing={8}>
        <Grid item xs={12}>
            <Avatar src={props.user.photoUrl}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant={"subheading"}>
                {`Nombre: ${props.user.username}`}
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <TwoStatesButton onText={"Matriculado"} offText={"Desmatriculado"}/>
        </Grid>
    </Grid>;

class Dashboard extends Component {

    render() {
        return <DashboardLayout {...this.props}/>;
    }
  
}

Dashboard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired
    })
};

export default withStyles(styles)(Dashboard);