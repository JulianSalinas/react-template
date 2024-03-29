import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Clock from "../../components/clock/GenericClock";
import Divider from "@material-ui/core/Divider";
import Drawers from "../../settings/Drawers";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Grid from "@material-ui/core/Grid/Grid";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Palettes from "../../settings/Palettes";
import Paper from "@material-ui/core/Paper/Paper";
import React from "react";
import Select from "@material-ui/core/Select/Select";
import TextField from "@material-ui/core/TextField/TextField";
import { TwitterPicker } from "react-color";
import Typography from "@material-ui/core/Typography/Typography";
import { firstToUpper } from "../../utils/Utils";
import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

const ViewManager = props =>

    <div style={{
        padding: 16,
        overflowX: "hidden"
    }}>

        <Grid container spacing={16} alignItems={"stretch"}>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <Paper elevation={0} className={props.classes.paper}>
                    <Grid container spacing={16}>

                        <Grid item xs={12}>

                            <Typography variant={"h4"} paragraph>
                                Information
                            </Typography>

                            <Grid container spacing={16} alignItems={"center"}>

                                <Grid item>
                                    <Avatar alt="name" src={props.store.user.photoUrl} className={props.classes.bigAvatar} />
                                </Grid>

                                <Grid item>
                                    <Typography variant={"body1"}>
                                        {props.store.user.username}
                                    </Typography>
                                    <Typography variant={"body2"}>
                                        {props.store.user.email}
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <Paper elevation={0} className={props.classes.paper}>
                    <Grid container spacing={16}>

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
                    <Grid container spacing={16}>

                        <Grid item xs={12}>
                            <Typography variant={"h4"}>
                                Control Panel
                            </Typography>
                        </Grid>

                        <Grid item>
                            <FormControl variant="filled" className={props.classes.formControl}>
                                <InputLabel>Drawer Type</InputLabel>
                                <Select
                                    value={props.dashboard.drawerType}
                                    onChange={props.handleDrawerTypeChange}
                                    input={<FilledInput name="drawerType" />}>
                                    {
                                        Drawers.map((drawerName, key) =>
                                            <MenuItem key={key} value={drawerName}>{firstToUpper(drawerName)}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl variant="filled" className={props.classes.formControl}>
                                <InputLabel>Mode</InputLabel>
                                <Select
                                    value={props.theme.palette.type}
                                    onChange={props.toggleMode}
                                    input={<FilledInput name="paletteType" />}>
                                    <MenuItem value={"light"}>Light</MenuItem>
                                    <MenuItem value={"dark"}>Dark</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl variant="filled" className={props.classes.formControl}>
                                <InputLabel>Color Set</InputLabel>
                                <Select
                                    value={props.dashboard.colorSet}
                                    onChange={props.handleColorSetChange}
                                    input={<FilledInput name="paletteType" />}>
                                    {
                                        Object.keys(Palettes).map((colorSet, key) => {
                                            const capitalize = string => string[0].toUpperCase() + string.slice(1);
                                            return <MenuItem key={key} value={colorSet}>{capitalize(colorSet)}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="filled-number"
                                label="Drawer Width"
                                value={props.drawerWidth}
                                onChange={event => props.handleDrawerWidthChange(event)}
                                type="number"
                                variant="filled"/>
                        </Grid>

                        <Grid item>
                            <Button variant={"contained"} color={"secondary"} onClick={() => props.applyDrawerWidth()}>
                                Apply width
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider variant={"fullWidth"} style={{ margin: "8px 0px" }}/>
                        </Grid>

                        <Grid item>

                            <Typography variant={"body1"} color={"textSecondary"} paragraph>
                                Primary color
                            </Typography>

                            <TwitterPicker
                                colors={props.getColorSet()}
                                color={props.theme.palette.primary.main}
                                onChange={color => props.handleColorChange(color, "primary")}/>

                            <FormControlLabel
                                label="Autocontraste"
                                control={
                                    <Checkbox
                                        checked={props.dashboard.drawerAutoContrast}
                                        onChange={event => props.toggleAutoContrast(event)}/>
                                }
                            />

                        </Grid>

                        <Grid item>
                            <Typography variant={"body1"} color={"textSecondary"} paragraph>
                                Secondary color
                            </Typography>
                            <TwitterPicker
                                colors={props.getColorSet()}
                                color={props.theme.palette.secondary.main}
                                onChange={color => props.handleColorChange(color, "secondary")}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"body1"} color={"textSecondary"} paragraph>
                                Primary Contrast Text
                            </Typography>
                            <TwitterPicker
                                colors={props.getColorSet()}
                                color={props.theme.palette.primary.contrastText}
                                onChange={color => props.handleContrastTextChange(color, "primary")}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"body1"} color={"textSecondary"} paragraph>
                                Secondary Contrast Text
                            </Typography>
                            <TwitterPicker
                                colors={props.getColorSet()}
                                color={props.theme.palette.secondary.contrastText}
                                onChange={color => props.handleContrastTextChange(color, "secondary")}/>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </div>;

export default withStyles(styles)(ViewManager);

