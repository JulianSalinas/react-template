
import React, { Component } from "react";
import { DragSource } from 'react-dnd';

import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {getEmptyImage} from "react-dnd-html5-backend";


const paperStyle =  {
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const source = {

    beginDrag(props, monitor) {
        return {
            item: props.item,
            moveItem: props.moveItem,
            containerId: props.containerId
        }
    }

};

function collect(connect, monitor) {
    return {
        isDragging: monitor.isDragging(),
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}


class Item extends Component {

    componentDidMount() {
        const { connectDragPreview } = this.props;
        if (connectDragPreview) {
            // Use empty image as a drag preview so browsers don't draw it
            // and we can draw whatever we want on the custom drag layer instead.
            connectDragPreview(getEmptyImage(), {
                // IE fallback: specify that we'd rather screenshot the node
                // when it already knows it's being dragged so we can hide it with CSS.
                captureDraggingState: true,
            })
        }
    }

    render() {


        // Your component receives its own props as usual
        const { item } = this.props;

        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isDragging, connectDragSource} = this.props;

        return connectDragSource (
           <div>
                <Paper draggable elevation={5} style={paperStyle}>
                    <Typography variant={"h1"}>
                        { item }
                    </Typography>
                    <Typography variant={"body1"}>
                        { isDragging && ' (and I am being dragged now)' }
                    </Typography>
                </Paper>
           </div>
        )

    }
}

export default DragSource("ITEM", source, collect)(Item);