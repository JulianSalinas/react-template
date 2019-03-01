import React, { Component } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { getCurrentDateString, getCurrentTimeString } from "../../../utils/utils-time"


const ClockFragment = props =>
    <Typography variant={"h5"} color={"textSecondary"}>
        {props.date} {props.time}
    </Typography>;

export default class Clock extends Component {

    state = {
        time: getCurrentTimeString(),
        date: getCurrentDateString()
    };

    updateTime = () => {
        this.setState({
            date: getCurrentDateString(),
            time: getCurrentTimeString()
        });
    };

    componentDidMount() {
        this.interval = setInterval(this.updateTime, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return <ClockFragment date={this.state.date} time={this.state.time}/>
    }

}