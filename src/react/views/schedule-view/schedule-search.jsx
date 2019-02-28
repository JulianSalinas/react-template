import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 8,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

function ScheduleSearch(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={0}>
            <Typography className={classes.iconButton} variant={"caption"} color={"textSecondary"}>
                BUSCAR
            </Typography>
            <Divider className={classes.divider} />
            <InputBase className={classes.input} placeholder="¿Qué quieres encontrar?" />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

ScheduleSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleSearch);
