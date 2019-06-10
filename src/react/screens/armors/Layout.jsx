import React from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";

const defaultArmorImages = {
    head: "https://assets.mhw-db.com/armor/a30d7cf3ff696e07e746aeed1f593a90648a435f.a9ff8627de743cb13e3b1fe48461ec0f.png",
    chest: "https://assets.mhw-db.com/armor/fba000594549191b0913b4c839c59fbb82e68aad.3de50440c16c93ece97a084352db1b1b.png",
    gloves: "https://assets.mhw-db.com/armor/f3abd35ffa744cb303288816fca163fb96ded57b.97c6607729b27375cd0428fc2f4ae96f.png",
    legs: "https://assets.mhw-db.com/armor/abd6311f80de140f81ce35cedd1bd77e3ed59c2b.fc369c2cc3a71c4638bdeecf13643b00.png"
};

const ArmorPieceImage = ({ armor, piece, classes }) => {

    let imageSrc = piece.assets.imageFemale;

    if (imageSrc === null && Object.keys(defaultArmorImages).indexOf(piece.type) !== -1) {
        imageSrc = defaultArmorImages[piece.type];
    }

    const Image = (
        <img key={piece.id} alt={`armor ${piece.id}`} src={imageSrc} style={{
            height: 48,
            width: 48
        }}/>
    );

    return (
        <Grid item>
            { imageSrc !== null ? Image : null }
        </Grid>
    );

};

const ArmorPieces = ({ armor, classes }) => armor.pieces.map(piece =>
    <ArmorPieceImage key={piece.id} armor={armor} piece={piece} classes={classes}/>
);

const Armor = ({ armor, classes}) =>
    <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper className={classes.paper} elevation={0}>
            <Grid container>
                <Grid item>
                    <Typography variant={"h5"} style={{
                        color: "inherit",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        { `${armor.name} (${armor.id})` }
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant={"fullWidth"} light style={{
                marginTop: 16,
                marginBottom: 16
            }}/>
            <Grid container>
                <ArmorPieces armor={armor} classes={classes}/>
            </Grid>
        </Paper>
    </Grid>;

const ArmorList = props => props.armors.map((armor, index) =>
    <Armor key={armor.id} armor={armor} index={index} {...props}/>
);

const Layout = props =>
    <div className={props.classes.root}>
        <Grid container spacing={16}>
            <ArmorList armors={props.armors} {...props}/>
        </Grid>
    </div>;

const PieceTypes = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    assets: PropTypes.shape({
        imageFemale: PropTypes.string
    })
});

const ArmorShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pieces: PropTypes.arrayOf(PieceTypes)
});

Layout.propTypes = {
    armors: PropTypes.arrayOf(ArmorShape)
};

export default withStyles(styles)(Layout);