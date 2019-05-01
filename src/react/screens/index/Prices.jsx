import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import { LoremIpsum } from "lorem-ipsum";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

import Filters from "../../../constants/colors/Filters";
import Gradients from "../../../constants/colors/Gradients";


const PriceDollars = props =>
    <Typography variant={"h2"} gutterBottom style={{
        color: "inherit",
        fontWeight: "bold",
        textAlign: "center",
    }}>
        { `$${props.price}` }
    </Typography>;

const PriceDescription = props =>
    <Typography variant={"body2"} paragraph style={{
        color: "inherit",
        fontWeight: "300",
        textAlign: "center",
        marginBottom: 32
        // backgroundColor: "#f12",
    }}>
        {/*{new LoremIpsum().generateSentences(2)}*/}
        { props.description }
    </Typography>;

PriceDescription.defaultProps = {
    description: new LoremIpsum().generateSentences(2)
};

PriceDescription.propTypes = {
    description: PropTypes.string,
};

const PriceTitle = props =>
    <Typography variant={"h5"} gutterBottom style={{
        color: "inherit",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 32
        // backgroundColor: "#f12",
    }}>
        { props.title }
    </Typography>;

const PriceButton = props => {

    const lightStyle = {
        color: "#484848",
        backgroundColor: "#FFF"
    };

    return (
        <Button
            fullWidth
            color={props.light ? "inherit" : "primary"}
            variant={props.light ? "contained" : "outlined"}
            style={props.light ? lightStyle : {}}>
            ELEGIR
        </Button>
    );
};

PriceButton.defaultProps = {
    dark: false
};

PriceButton.propTypes = {
    dark: PropTypes.bool,
};

class PriceCard extends Component {

    state = {
        isSelected: false
    };

    setSelected = selected => () => {
        this.setState({ isSelected: selected })
    };

    render() {

        const { premium, filter, background } = this.props;
        const icon = require(`../../../assets/icons/${premium ? "launch-1" : "launch-2"}.png`);

        const isSelected = this.state.isSelected;

        return (
            <Grid item xs={12} md={4}>
                <Paper
                    elevation={0}
                    onMouseEnter={this.setSelected(true)}
                    onMouseLeave={this.setSelected(false)}
                    style={{
                        height: "100%",
                        padding: 16 * 2,
                        transition: "all 0.2s ease-in-out",
                        transform: `scale(${isSelected ? 1.05 : 1})`,
                        background: isSelected ? background : "#FFF",
                    }}>

                    <div style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        color: isSelected ? "#FFF" : "#000"
                    }}>

                        <img src={icon} alt={"plan decoration"} style={{
                            width: 16 * 5,
                            height: 16 * 5,
                            marginBottom: 16,
                            filter: premium ? null : isSelected ? Filters.white : filter
                        }}/>

                        <PriceTitle {...this.props}/>
                        <PriceDollars {...this.props}/>
                        <PriceDescription/>

                        <div style={{
                            flex: 1,
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }}>
                            <PriceButton light={isSelected}/>
                        </div>

                    </div>
                </Paper>
            </Grid>
        );
    }
}

const PricesLayout = props =>
    <Grid container spacing={32} style={{
        marginBottom: 16 * 3
    }}>
        <PriceCard
            {...props}
            title={"Basic"}
            price={"11.99"}
            filter={Filters.blue}
            background={Gradients.blue}
        />
        <PriceCard
            {...props}
            title={"Unlimited"}
            price={"49.99"}
            filter={Filters.green}
            background={Gradients.green}
        />
        <PriceCard
            {...props}
            premium
            title={"Premium"}
            price={"79.99"}
            filter={Filters.orange}
            background={Gradients.orange}
        />
    </Grid>;

PricesLayout.defaultProps = {

};

PricesLayout.propTypes = {

};

export default withStyles(styles)(PricesLayout);