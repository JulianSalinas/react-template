import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./schedule-view-styles"
import { withStyles } from '@material-ui/core/styles';


const ScheduleViewSearch = ({ classes, ...props }) =>
    <Paper className={classes.searchBar} elevation={0}>
        <Typography className={classes.searchPadding} variant={"caption"} color={"textSecondary"}>
            BUSCAR
        </Typography>
        <Divider className={classes.searchDivider}/>
        <InputBase className={classes.searchInput} placeholder="¿Qué quieres encontrar?" />
        <IconButton aria-label="Search"><SearchIcon/></IconButton>
    </Paper>;

ScheduleViewSearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleViewSearch);
