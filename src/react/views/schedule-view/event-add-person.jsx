import React from "react";
import PropTypes from "prop-types";

import Downshift from "downshift";
import Paper from "@material-ui/core/Paper/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider/Divider";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Typography from "@material-ui/core/Typography/Typography";

import latinise from "../../../utils/latinise";
import styles from "./schedule-view-styles";
import { withStyles } from "@material-ui/core/styles";


function EventAddPerson(props) {
    const { classes } = props;

    return (
        <Downshift id="downshift-multiple">

            {({
                  isOpen,
                  inputValue,
                  selectedItem,
                  getItemProps,
                  getInputProps,
                  highlightedIndex
            }) => (

                <div className={classes.addPersoncontainer}>

                    <div className={classes.addPersonroot}>
                        <InputBase
                            {...getInputProps()}
                            className={classes.addPersoninput}
                            placeholder="¿A quién quieres agregar?" />
                        <Divider className={classes.addPersondivider} />
                        <Typography className={classes.addPersoniconButton} variant={"caption"}>
                            AGREGAR
                        </Typography>
                    </div>

                    {
                        isOpen ?
                            <Paper className={classes.addPersonpaper} square>
                                {
                                    Object.keys(props.dashboard.people).map((key, index) => {

                                        let person = props.dashboard.people[key];
                                        let name = person.completeName;

                                        const input = latinise(inputValue.toLowerCase());
                                        const search = latinise(name.toLowerCase());
                                        const match = search.indexOf(input) >= 0;

                                        return match ? <MenuItem
                                            {...getItemProps({ item: name })}
                                            key={key}
                                            component="div"
                                            selected={highlightedIndex === index}
                                            style={{ fontWeight: (selectedItem || '').indexOf(name) > -1 ? 500 : 400 }}>
                                            {name}
                                        </MenuItem> : null
                                    })
                                }
                            </Paper> : null
                    }

                </div>
            )}

        </Downshift>
    );
}

EventAddPerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventAddPerson);
