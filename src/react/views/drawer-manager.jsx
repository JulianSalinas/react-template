import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./common-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";


const DrawerManagerLayout = props =>
    <Grid container spacing={16}>

        <Grid item xs={12}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={16}>

                    <Grid item xs={12}>
                        <Typography variant={"h6"}>
                            Current style {props.drawerType}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl variant="filled" className={props.classes.formControl}>
                            <InputLabel>Drawer Type</InputLabel>
                            <Select
                                value={props.drawerType}
                                onChange={props.handleChange}
                                input={<FilledInput name="drawerType" />}>
                                <MenuItem value={0}>Clipped</MenuItem>
                                <MenuItem value={1}>Minion</MenuItem>
                                <MenuItem value={2}>Permanent</MenuItem>
                                <MenuItem value={3}>Persistent Left</MenuItem>
                                <MenuItem value={4}>Persistent Right</MenuItem>
                                <MenuItem value={5}>Responsive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    </Grid>;

class DrawerManager extends Component {

    handleChange = event => {
        this.props.changeStyle(event.target.value);
    };

    render() {
        return <DrawerManagerLayout
            handleChange={this.handleChange}
            changeStyle={this.props.changeStyle}
            drawerType={this.props.drawerType} {...this.props}/>;
    }

}

DrawerManager.propTypes = {
    changeStyle:  PropTypes.func.isRequired,
    drawerType:  PropTypes.number.isRequired,
};

export default withStyles(styles)(DrawerManager);

