import React, { Component } from "react";

import Layout from "./Layout";


class Armors extends Component {

    state = {
        armors: []
    };

    componentDidMount(){
        fetch("https://mhw-db.com/armor/sets")
            .then(result => result.json())
            .then(armors => this.setState({ armors }));
    }

    render() {
        return <Layout {...this.state}/>;
    }

}

export default Armors;

