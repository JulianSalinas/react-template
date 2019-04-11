import React from "react";

import Downshift from "downshift";
import Paper from "@material-ui/core/Paper/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider/Divider";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Typography from "@material-ui/core/Typography/Typography";

import latinise from "../../../utils/utils-latinise";
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

                <div className={classes.addPerson}>

                    <div className={classes.addPersonBorder}>
                        <InputBase
                            {...getInputProps()}
                            className={classes.searchInput}
                            placeholder="¿A quién agregar?" />
                        <Divider className={classes.searchDivider} />
                        <Typography className={classes.addPersonIconButton} variant={"caption"}>
                            AGREGAR
                        </Typography>
                    </div>

                    {
                        isOpen ?
                            <Paper className={classes.addPersonPaper} square>
                                {
                                    Object.keys(props.database.people).map((key, index) => {

                                        let person = props.database.people[key];
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

export default withStyles(styles)(EventAddPerson);
