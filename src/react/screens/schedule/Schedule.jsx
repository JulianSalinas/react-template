import React, { Component } from "react";

import withAppContext from "../../../app/AppContext";
import ScheduleViewLayout from "./Layout";


class Schedule extends Component {

    state = {
        openItem: null,
        keepSynch: true
    };

    setOpenItem = index => {
        const mustClose = index === this.state.openItem;
        this.setState({ openItem: mustClose ? null : index });
    };

    toggleKeepSynch = () => {
        this.setState({ keepSynch: !this.state.keepSynch });
    };

    render() {
        return <ScheduleViewLayout
            {...this.props}
            openItem={this.state.openItem}
            keepSynch={this.state.keepSynch}
            setOpenItem={this.setOpenItem}
            toggleKeepSynch={this.toggleKeepSynch}
        />;
    }

}

export default withAppContext(Schedule);

