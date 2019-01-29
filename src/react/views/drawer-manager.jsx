import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./common-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTheme } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";

import { TwitterPicker } from 'react-color';
import Button from "@material-ui/core/Button/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const DrawerManagerLayout = props =>
    <Grid container spacing={16}>

        <Grid item xs={12}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={16}>

                    <Grid item xs={12}>
                        <Typography variant={"h5"}>
                            Current style {props.drawerType}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button variant={"contained"} color={"secondary"}>
                            Hello!
                        </Button>
                    </Grid>

                    <Grid item>
                        <FormControl variant="filled" className={props.classes.formControl}>
                            <InputLabel>Drawer Type</InputLabel>
                            <Select
                                value={props.drawerType}
                                onChange={props.handleTypeChanged}
                                input={<FilledInput name="drawerType" />}>
                                <MenuItem value={"drawer-clipped"}>Clipped</MenuItem>
                                <MenuItem value={"drawer-minion"}>Minion</MenuItem>
                                <MenuItem value={"drawer-permanent"}>Permanent</MenuItem>
                                <MenuItem value={"drawer-persistent-left"}>Persistent Left</MenuItem>
                                <MenuItem value={"drawer-persistent-right"}>Persistent Right</MenuItem>
                                <MenuItem value={"drawer-responsive"}>Responsive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <TwitterPicker
                            color={props.theme.palette.primary.main}
                            onChange={props.handlePrimaryChanged}/>
                    </Grid>

                    <Grid item>
                        <TwitterPicker
                            color={props.theme.palette.secondary.main}
                            onChange={props.handleSecondaryChanged}/>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    </Grid>;


class DrawerManager extends Component {

    handleTypeChanged = event => {
        this.props.changeDrawerType(event.target.value);
    };

    handlePrimaryChanged = color => {
        this.applyTheme(color.hex, this.props.theme.palette.secondary.main);
    };

    handleSecondaryChanged = color => {
        this.applyTheme(this.props.theme.palette.primary.main, color.hex );
    };

    applyTheme = (primary, secondary) => {
        const theme = createMuiTheme({ palette: {
            primary: { main: primary },
            secondary: { main: secondary }
        }});
        this.props.changeTheme(theme);
    };

    render() {
        return <DrawerManagerLayout
            drawerType={this.props.drawerType}
            handleTypeChanged={this.handleTypeChanged}
            handlePrimaryChanged={this.handlePrimaryChanged}
            handleSecondaryChanged={this.handleSecondaryChanged}
            {...this.props}/>;
    }
}

DrawerManager.propTypes = {
    drawerType:  PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
    changeDrawerType:  PropTypes.func.isRequired,
};

export default withStyles(styles)(withTheme()(DrawerManager));

