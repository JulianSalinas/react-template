import PropTypes from "prop-types";
import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import GamesItem from "./games-item";
import { DropTarget } from 'react-dnd'
import Typography from "@material-ui/core/Typography/Typography";
import GamesLayer from "./games-layer";

const target = {

    canDrop(props, monitor) {
        const { containerId } = monitor.getItem();
        return containerId !== props.containerId;
    },

    drop(props, monitor) {
        const { item, moveItem, containerId } = monitor.getItem();
        moveItem(item, containerId, props.containerId);
        console.log(`Moving ${item} from ${containerId} to ${props.containerId}`);
    }

};

function collect(connect, monitor) {
    return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        connectDropTarget: connect.dropTarget(),
    }
}

function GamesContainer(props) {

    const renderStyle = containerColor => {
        return {
            width: "100%",
            padding: 32,
            height: 300,
            backgroundColor: containerColor
        };
    };

    const renderItems = containerId => props[containerId].map((item, index) =>
        <Grid key={index} item xs={3}>
            <GamesItem {...props} item={item} containerId={containerId}/>
        </Grid>
    );

    const { containerId, containerColor } = props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isOver, canDrop, connectDropTarget } = props;

    return connectDropTarget(
        <div>
            <Grid
                container
                spacing={16}
                style={renderStyle(containerColor)}>
                <Grid item xs={12}>
                    <Typography variant={"h5"}>
                        { `isOver: ${isOver ? "YES": "NOPE"}` }
                    </Typography>
                    <Typography variant={"h5"}>
                        { `canDrop: ${canDrop ? "YES": "NOPE"}` }
                    </Typography>
                </Grid>
                { renderItems(containerId) }
            </Grid>
            {/*<GamesLayer/>*/}
        </div>
    );
}

GamesContainer.defaultProps = {
    containerColor: "#FAFAFA"
};

GamesContainer.propTypes = {
    containerId: PropTypes.string.isRequired,
    containerColor: PropTypes.string
};

export default DropTarget("ITEM", target, collect)(GamesContainer)
