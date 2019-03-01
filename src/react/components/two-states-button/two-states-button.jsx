import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./two-states-button-styles";
import withStyles from "@material-ui/core/styles/withStyles";


class TwoStatesButton extends Component {

    state = {
        active: false,
        text: this.props.offText,
        theme: this.props.classes.offTheme,
    };

    changeTheme = evt => {
        evt.preventDefault();
        const { offText, onText } = this.props;
        const { offTheme, onTheme } = this.props.classes;
        this.setState({
            active: !this.state.active,
            text: this.state.active ? offText : onText,
            theme: this.state.active ? offTheme : onTheme
        });
    };

    render() {
        return <Button
            variant="contained"
            className={`${this.props.classes.theme} ${this.state.theme}`}
            onClick={e => { this.changeTheme(e) }}>{this.state.text}</Button>;
    }
  
}

TwoStatesButton.propTypes = {
    onText: PropTypes.string.isRequired,
    offText: PropTypes.string.isRequired
};

export default withStyles(styles)(TwoStatesButton);