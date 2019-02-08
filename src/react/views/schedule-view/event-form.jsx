import PropTypes from "prop-types"
import EventTypes from "./event-types"
import React, { Component } from "react";

import styles from "./schedule-view-styles"
import withStyles from "@material-ui/core/styles/withStyles";

import EventLocation from "./event-location";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import FormControl from "@material-ui/core/FormControl/FormControl";


const EventFormTitle = () =>
    <Grid item xs={12}>
        <Typography variant={"h6"}>
            Agregar nuevo evento
        </Typography>
    </Grid>;

const EventFormLayout = ({ classes, ...props }) =>
    <Grid container spacing={16} alignItems={"stretch"}>
        <EventFormTitle/>
        <Grid item xs={12} md={8}>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="event-id"
                        variant="filled"
                        label="ID Evento"
                        value={props.event.id}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="filled" className={classes.formSelect}>
                        <InputLabel>Tipo</InputLabel>
                        <Select
                            value={props.event.eventype !== undefined ? props.event.eventype: "CONFERENCIA"}
                            onChange={props.togglePalette}
                            input={<FilledInput name="eventype" />}>
                            <MenuItem value={"CONFERENCIA"}>Conferencia</MenuItem>
                            <MenuItem value={"TALLER"}>Taller</MenuItem>
                            <MenuItem value={"PONENCIA"}>Ponencia</MenuItem>
                            <MenuItem value={"FERIA-EDEPA"}>Feria EDEPA</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="event-titulo"
                        variant="outlined"
                        label="Título"
                        value={props.event.title}
                        fullWidth multiline rows={3} rowsMax={6}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="event-description"
                        variant="outlined"
                        label="Resumen"
                        value={props.event.briefSpanish}
                        fullWidth multiline rows={12} rowsMax={12}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
            <EventLocation {...props}/>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={16} justify={"flex-end"}>
                <Grid item>
                    <Button
                        variant={"outlined"}
                        className={classes.formSave}
                        onClick={props.toggleIsOpen}>
                        Guardar
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant={"outlined"}
                        className={classes.formCancel}
                        onClick={props.toggleIsOpen}>
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;

class EventForm extends Component {

    state = {
        autoImage: true
    };

    static propsTypes = {
        event: EventTypes,
        classes: PropTypes.object.isRequired,
        toggleIsOpen: PropTypes.func.isRequired,
    };

    toggleAutoImage = () => {
        this.setState({ autoImage : !this.state.autoImage })
    };

    render() {
        return <EventFormLayout
            autoImage={this.state.autoImage}
            toggleAutoImage={this.toggleAutoImage} {...this.props}/>;
    }

}


export default withStyles(styles)(EventForm);

