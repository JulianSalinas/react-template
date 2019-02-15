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

const EventSaveButton = props =>
    <Grid item>
        <Button
            variant={"outlined"}
            className={props.classes.formSave}
            onClick={props.submitEvent}>
            Guardar
        </Button>
    </Grid>;

const EventCancelButton = props => !(props.index !== -1 && props.keepSynch) ?
    <Grid item>
        <Button
            variant={"outlined"}
            className={props.classes.formCancel}
            onClick={props.toggleOpen}>
            Cancelar
        </Button>
    </Grid> : <div/>;

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
                        value={props.event.id || ""}
                        onChange={props.updateEvent("id")}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="filled" className={classes.formSelect}>
                        <InputLabel>Tipo</InputLabel>
                        <Select
                            value={props.event.eventype !== undefined ? props.event.eventype: "CONFERENCIA"}
                            onChange={props.updateEvent("eventype")}
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
                        onChange={props.updateEvent("title")}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="event-description"
                        variant="outlined"
                        label="Resumen"
                        value={props.event.briefSpanish}
                        fullWidth multiline rows={12} rowsMax={12}
                        onChange={props.updateEvent("briefSpanish")}
                        inputProps={{ className: classes.formInput}}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
            <EventLocation {...props}/>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={16} justify={"flex-end"}>
                <EventSaveButton classes={classes} {...props}/>
                <EventCancelButton classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class EventForm extends Component {

    state = {
        autoImage: true,
    };

    submitEvent = () => {
        this.props.submitEvent();
        this.props.toggleOpen();
    };

    updateEvent = prop => event => {
        this.props.updateEvent(prop, event.target.value);
    };

    toggleAutoImage = () => {
        this.setState({ autoImage : !this.state.autoImage })
    };

    render() {
        return <EventFormLayout {...this.props}
                                autoImage={this.state.autoImage}
                                submitEvent={this.submitEvent}
                                updateEvent={this.updateEvent}
                                toggleAutoImage={this.toggleAutoImage}/>;
    }

}

EventForm.PropsTypes = {
    event: EventTypes.isRequired,
    index: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
    keepSynch: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    submitEvent: PropTypes.func.isRequired
};

export default withStyles(styles)(EventForm);

