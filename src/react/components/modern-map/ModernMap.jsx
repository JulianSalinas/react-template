import React, { Component } from 'react'
import CountryMap from './CountryMap';
import Typography from '@material-ui/core/Typography/Typography';

const PlaceName = props =>
    <Typography variant={"h2"} gutterBottom style={{
        color: "inherit",
        fontWeight: "bold",
        textAlign: "center"
    }}>
        { `${props.place !== null ? props.place : "Bienvenido a Costa Rica"}` }
    </Typography>;

class ModernMap extends Component {

    state = {
        selected: null
    };

    changeSelected = selected => this.setState({ selected });

    render() {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <PlaceName place={this.state.selected}/>
                <div style={{ width: "65vw" }}>
                    <CountryMap
                        selected={this.state.selected}
                        changeSelected={this.changeSelected}
                    />
                </div>

            </div>
        );
    }

}

export default ModernMap;

