import PropTypes from "prop-types"
import EventTypes from "../../../constants/types/EventTypes"
import React, { Component } from "react";

import styles from "./Styles"
import withStyles from "@material-ui/core/styles/withStyles";

import EventLocation from "./Location";
import EventAddPerson from "./Exhibitor"
import { DateTimePicker } from "material-ui-pickers";

import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FilledInput from "@material-ui/core/FilledInput/FilledInput";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Divider from "@material-ui/core/Divider/Divider";

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
        <Grid item xs={12} md={4}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <EventLocation {...props}/>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"}>
                        Expositores
                    </Typography>
                </Grid>
                {
                    props.event.people !== undefined ?
                        <Grid item xs={12}>
                            <Grid container spacing={8}>
                                {
                                    Object.keys(props.event.people).map( key => {
                                        let completeName = props.store.people[key].completeName;
                                        return (
                                            <Grid item key={key}>
                                                <Chip label={completeName}
                                                      avatar={<Avatar>{completeName[0]}</Avatar>}
                                                      onDelete={() => console.log("Emulating delete")}/>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid> : null
                }
                <Grid item xs={12}>
                    <EventAddPerson {...props}/>
                </Grid>
            </Grid>
        </Grid>
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
                <Grid item xs={12} sm={6}>
                    <DateTimePicker
                        autoOk
                        fullWidth
                        label="Inicio"
                        variant="filled"
                        showTabs={false}
                        autoSubmit={false}
                        allowKeyboardControl
                        format={'DD MMMM YYYY hh:mm A'}
                        value={props.event.start !== undefined ? new Date(props.event.start) : new Date() }
                        onChange={props.updateDate("start")}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DateTimePicker
                        autoOk
                        fullWidth
                        label="Fin"
                        variant="filled"
                        showTabs={false}
                        autoSubmit={false}
                        allowKeyboardControl
                        format={'DD MMMM YYYY hh:mm A'}
                        value={props.event.end !== undefined ? new Date(props.event.end) : new Date()}
                        onChange={props.updateDate("end")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="event-titulo"
                        variant="outlined"
                        label="Título"
                        value={props.event.title}
                        fullWidth multiline rows={3} rowsMax={6}
                        onChange={props.updateEvent("title")}
                        inputProps={{ className: classes.formInput}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="event-brief"
                        variant="outlined"
                        label="Resumen"
                        value={props.event.briefSpanish}
                        fullWidth multiline rows={14} rowsMax={14}
                        onChange={props.updateEvent("briefSpanish")}
                        inputProps={{ className: classes.formInput}}
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={16} justify={"flex-end"}>
                <EventSaveButton classes={classes} {...props}/>
                <EventCancelButton classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class Form extends Component {

    state = {
        autoImage: true,
    };

    submitEvent = () => {
        this.props.submitEvent();
        this.props.toggleOpen();
    };

    updateDate = prop => date => {
        this.props.updateEvent(prop, date.valueOf());
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
                                updateDate={this.updateDate}
                                updateEvent={this.updateEvent}
                                toggleAutoImage={this.toggleAutoImage}/>;
    }

}

Form.PropsTypes = {
    event: EventTypes.isRequired,
    index: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
    keepSynch: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    submitEvent: PropTypes.func.isRequired
};

export default withStyles(styles)(Form);

