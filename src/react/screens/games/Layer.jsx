import React from 'react'
import { DragLayer } from 'react-dnd'

import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
}
function getItemStyles(props) {
    const { initialOffset, currentOffset } = props
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        }
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebkitTransform: transform,
    }
}

const paperStyle =  {
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};


const CustomDragLayer = props => {
    const { item, isDragging } = props;

    function renderItem() {
        return (
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
        );
    }

    if (!isDragging) {
        return null
    }
    return (
        <div style={layerStyles}>
            <div style={getItemStyles(props)}>{renderItem()}</div>
        </div>
    )
}
export default DragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
}))(CustomDragLayer)
