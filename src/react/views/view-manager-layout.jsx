import React from "react";

import styles from "./common-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTheme } from '@material-ui/core/styles';

import Colors from "../../json/colors"
import { TwitterPicker } from 'react-color';
import Clock from "../components/generic-clock";

import Grid from "@material-ui/core/Grid/Grid";
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper/Paper";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Avatar from "@material-ui/core/Avatar/Avatar";


const ViewManager = props =>

    <Grid container spacing={32} alignItems={"stretch"}>

        <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={32}>

                    <Grid item xs={12}>

                        <Typography variant={"h4"} paragraph>
                            Information
                        </Typography>

                        <Grid container spacing={16} alignItems={"center"}>

                            <Grid item>
                                <Avatar alt="name" src={props.dashboard.user.photoUrl} className={props.classes.bigAvatar} />
                            </Grid>

                            <Grid item>
                                <Typography variant={"body1"}>
                                    {props.dashboard.user.username}
                                </Typography>
                                <Typography variant={"body2"}>
                                    {props.dashboard.user.email}
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={32}>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} paragraph>
                            Datetime
                        </Typography>
                        <Clock/>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>

        <Grid item xs={12}>
            <Paper elevation={0} className={props.classes.paper}>
                <Grid container spacing={32}>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} paragraph>
                            Control Panel
                        </Typography>
                    </Grid>

                    <Grid item>
                        <FormControl variant="filled" className={props.classes.formControl}>
                            <InputLabel>Drawer Type</InputLabel>
                            <Select
                                value={props.dashboard.drawerType}
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

                        <Typography variant={"body1"} color={"textSecondary"} paragraph>
                            Primary color
                        </Typography>

                        <TwitterPicker
                            colors={Colors}
                            color={props.theme.palette.primary.main}
                            onChange={color => props.handleColorChanged(color, "primary")}/>

                        <FormControlLabel
                            label="Autocontraste"
                            control={
                                <Checkbox
                                    checked={props.autoContrast}
                                    onChange={event => props.toggleAutoContrast(event)}/>
                            }
                        />

                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"textSecondary"} paragraph>
                            Secondary color
                        </Typography>
                        <TwitterPicker
                            colors={Colors}
                            color={props.theme.palette.secondary.main}
                            onChange={color => props.handleColorChanged(color, "secondary")}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"textSecondary"} paragraph>
                            Primary Contrast Text
                        </Typography>
                        <TwitterPicker
                            colors={Colors}
                            color={props.theme.palette.primary.contrastText}
                            onChange={color => props.handleContrastTextChanged(color, "primary")}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={"body1"} color={"textSecondary"} paragraph>
                            Secondary Contrast Text
                        </Typography>
                        <TwitterPicker
                            colors={Colors}
                            color={props.theme.palette.secondary.contrastText}
                            onChange={color => props.handleContrastTextChanged(color, "secondary")}/>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    </Grid>;

export default withTheme()(withStyles(styles)(ViewManager))
