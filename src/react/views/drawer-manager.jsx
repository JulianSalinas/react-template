import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./common-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTheme } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid/Grid";
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper/Paper";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";

import { TwitterPicker } from 'react-color';
import defaultTheme from "../dashboard/dashboard-theme"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import Clock from "../components/generic-clock";


const DrawerManagerLayout = props =>
    <Grid container spacing={32}>

        <Grid item xs={12}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={32}>

                    <Grid item xs={12}>
                        <Clock/>
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
                        <FormControl variant="filled" className={props.classes.formControl}>
                            <InputLabel>Palette</InputLabel>
                            <Select
                                value={props.theme.palette.type}
                                onChange={props.togglePalette}
                                input={<FilledInput name="paletteType" />}>
                                <MenuItem value={"light"}>Light</MenuItem>
                                <MenuItem value={"dark"}>Dark</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider variant={"fullWidth"}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"primary"} paragraph>
                            Primary color
                        </Typography>
                        <TwitterPicker
                            color={props.theme.palette.primary.main}
                            onChange={color => props.handleColorChanged(color, "primary")}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"secondary"} paragraph>
                            Secondary color
                        </Typography>
                        <TwitterPicker
                            color={props.theme.palette.secondary.main}
                            onChange={color => props.handleColorChanged(color, "secondary")}/>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    </Grid>;


class DrawerManager extends Component {

    handleTypeChanged = event => {
        this.props.changeDrawerType(event.target.value);
    };

    togglePalette = () => {
        const currentTheme = this.props.theme;
        const newTheme = JSON.parse(JSON.stringify(defaultTheme));
        newTheme.palette.primary = currentTheme.palette.primary;
        newTheme.palette.secondary = currentTheme.palette.secondary;
        newTheme.palette.type = currentTheme.palette.type === "light" ? "dark" : "light";
        this.props.changeTheme(createMuiTheme(newTheme));
    };

    handleColorChanged = (color, prop) => {
        const currentTheme = this.props.theme;
        const newTheme = JSON.parse(JSON.stringify(defaultTheme));
        newTheme.palette.type = currentTheme.palette.type;
        newTheme.palette[prop].main = color.hex;
        const theOther = prop === "primary" ? "secondary" : "primary";
        newTheme.palette[theOther].main = currentTheme.palette[theOther].main;
        this.props.changeTheme(createMuiTheme(newTheme));
    };

    render() {
        return <DrawerManagerLayout
            drawerType={this.props.drawerType}
            togglePalette={this.togglePalette}
            handleTypeChanged={this.handleTypeChanged}
            handleColorChanged={this.handleColorChanged}
            {...this.props}/>;
    }
}

DrawerManager.propTypes = {
    drawerType:  PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
    changeDrawerType:  PropTypes.func.isRequired,
};

export default withStyles(styles)(withTheme()(DrawerManager));

