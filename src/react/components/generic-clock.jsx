import React, { Component } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { getCurrentDateString, getCurrentTimeString } from "../../js/utils-time"


const ClockFragment = props =>
    <Typography variant={"h5"}>
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
        setInterval(this.updateTime, 1000);
    };

    render() {
        return <ClockFragment date={this.state.date} time={this.state.time}/>
    }

}