import React, { Component } from "react";

import Layout from "./Layout";
import Palettes from "../../../constants/colors/Palettes";


class Games extends Component {

    state = {
        palettes: Palettes
    };

    getPalettes = () => {
        const palettes = this.state.palettes;
        return Object.keys(palettes).map(key => palettes[key]);
    };

    onDragEnd = item => {
        if (!item.destination)
            return;
        this.updatePalette(item);
    };

    addColor = (paletteId, colorItem) => {
        const id = colorItem.draggableId;
        let colors = this.state.palettes[paletteId].colors;
        colors.splice(colorItem.destination.index, 0, id);
        return { key: paletteId, colors };
    };

    removeColor = (paletteId, colorItem) => {
        let colors = this.state.palettes[paletteId].colors;
        colors.splice(colorItem.source.index, 1);
        return { key: paletteId, colors };
    };

    updatePalette = item => this.setState(({ palettes }) => {

        const sourceId = item.source.droppableId;
        const destinationId = item.destination.droppableId;

        return {
            ...palettes,
            [sourceId]: this.removeColor(sourceId, item),
            [destinationId]: this.addColor(destinationId, item)
        }

    });

    render() {
        return <Layout onDragEnd={this.onDragEnd} palettes={this.getPalettes()}/>;
    }

}

export default Games;

