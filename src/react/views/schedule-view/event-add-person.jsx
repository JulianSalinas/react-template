import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";

const styles = theme => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: "dotted",
        borderColor: "lightgrey",
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 8,
        marginRight: 4,
        cursor: "pointer",
        color: theme.palette.secondary.dark,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
});

function EventAddPerson(props) {
    const { classes } = props;

    return (
        <div className={classes.root} >
            <InputBase className={classes.input} placeholder="¿A quién quieres agregar?" />
            <Divider className={classes.divider} />
            <Typography className={classes.iconButton} variant={"caption"}>
                AGREGAR
            </Typography>
        </div>
    );
}

EventAddPerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventAddPerson);
