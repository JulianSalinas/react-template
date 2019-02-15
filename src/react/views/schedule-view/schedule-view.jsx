import React, { Component } from "react";

import { database } from "../../../js/firebase";
import ScheduleViewItems from "./schedule-view-items";
import withContext from "../../dashboard/dashboard-context";


class ScheduleView extends Component {

    state = {
        keepSynch: true,
        openItem: null,
        selectedItem: null,
        reference: database.ref("edepa6/schedule")
    };

    setOpenItem = index => {
        const mustClose = index === this.state.openItem;
        this.setState({ openItem: mustClose ? null : index });
    };

    setSelectedItem = index => {
        const mustUnselect = index === this.state.selected;
        this.setState({ selectedItem: mustUnselect ? null : index });
    };

    toogleKeepSynch = () => {
        this.setState({ keepSynch: !this.state.keepSynch });
    };

    render() {
        return <ScheduleViewItems
            reference={this.state.reference}
            keepSynch={this.state.keepSynch}
            openItem={this.state.openItem}
            selectedItem={this.state.selectedItem}
            setOpenItem={this.setOpenItem}
            setSelectedItem={this.setSelectedItem}
            toggleKeepSynch={this.toogleKeepSynch}/>
    }

}

export default withContext(ScheduleView);

