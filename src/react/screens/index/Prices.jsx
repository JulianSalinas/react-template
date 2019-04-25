import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import { LoremIpsum } from "lorem-ipsum";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const darkFilter = "invert(24%) sepia(1%) saturate(3892%) hue-rotate(15deg) brightness(90%) contrast(77%)";
const lightFilter = "invert(100%) sepia(100%) saturate(0%) hue-rotate(317deg) brightness(105%) contrast(108%)";


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

        const { filter, background } = this.props;
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

                        <img src={require("../../../assets/decorations/launch-2.png")} style={{
                            width: 16 * 5,
                            height: 16 * 5,
                            marginBottom: 16,
                            filter: isSelected ? lightFilter : filter
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
    <Grid container spacing={32}>
        <PriceCard
            {...props}
            title={"Basic"}
            price={"11.99"}
            background={"linear-gradient(to bottom right, #514A9D , #24C6DC)"}
            filter={"invert(23%) sepia(90%) saturate(967%) hue-rotate(220deg) brightness(94%) contrast(81%)"}
        />
        <PriceCard
            {...props}
            title={"Unlimited"}
            price={"49.99"}
            background={"linear-gradient(to bottom right, #11998e , #38ef7d)"}
            filter={"invert(53%) sepia(38%) saturate(7142%) hue-rotate(147deg) brightness(90%) contrast(87%)"}
        />
        <PriceCard
            {...props}
            title={"Premium"}
            price={"79.99"}
            background={"linear-gradient(to bottom right, #FF5F6D , #FFC371)"}
            filter={"invert(53%) sepia(55%) saturate(3879%) hue-rotate(322deg) brightness(109%) contrast(107%)"}
        />
    </Grid>;

PricesLayout.defaultProps = {

};

PricesLayout.propTypes = {

};

export default withStyles(styles)(PricesLayout);