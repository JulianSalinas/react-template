import React from "react";

import styles from "./Styles";
import classnames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { firstToUpper } from "../../../utils/Utils";
import { getLuminance, darken } from "@material-ui/core/styles/colorManipulator";


const ColorText = props =>
    <Typography
        variant={"body2"}
        style={{color: getLuminance(props.color) <= 0.4 ? "#FFF" : "#000"}}>
        {props.color}
    </Typography>;

const ColorPaper = ({ color, isDragging }) =>
    <Paper style={{
        padding: 16,
        borderRadius: 0,
        backgroundColor: isDragging ? darken(color, 0.1) : color,
    }}>
        <ColorText color={color}/>
    </Paper>;

const ColorItem = ({ color, provided, snapshot }) =>
    <Grid item xs={12}>
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}>
            <ColorPaper color={color} isDragging={snapshot.isDragging}/>
        </div>
    </Grid>;

const DraggableColor = props =>
    <Draggable key={props.color} draggableId={props.color} index={props.index}>
        {(provided, snapshot) => ColorItem({ provided, snapshot, color: props.color })}
    </Draggable>;

const ColorList = props => props.colors.map((color, index) => (
    <DraggableColor {...props} color={color} key={color} index={index}/>
));

const ColorsContainer = ({ palette, classes, ...props}) =>
    <Grid container>
        <PaletteName name={palette.key}/>
        <ColorList {...props} classes={classes} colors={palette.colors}/>
    </Grid>;

const PaletteName = props =>
    <Grid item xs={12}>
        <Typography variant={"h4"} gutterBottom>
            {firstToUpper(props.name)}
        </Typography>
    </Grid>;

const PaletteColors = ({ provided, snapshot, classes, ...props }) =>
    <div
        {...provided.droppableProps}
        ref={provided.innerRef}>
        <Paper elevation={0} className={classnames(classes.colorsContainer, {
            [classes.colorsContainerDragging]: snapshot.isDraggingOver
        })}>
            <ColorsContainer palette={props.palette} classes={classes} {...props}/>
        </Paper>
        {provided.placeholder}
    </div>;

const PaletteColorsWrapper = ({provided, snapshot, props}) =>
    <PaletteColors
        provided={provided}
        snapshot={snapshot} {...props}
    />;

const DroppablePalette = props =>
    <Droppable droppableId={props.palette.key}>
    {(provided, snapshot) => PaletteColorsWrapper({ provided, snapshot, props })}
    </Droppable>;

const PaletteList = props => props.palettes.map(palette =>
    <Grid item key={palette.key} xs={12} sm={6} lg={4}>
        <DroppablePalette {...props} palette={palette}/>
    </Grid>
);

const PalettesContainer = props =>
    <Grid container spacing={16}>
        <PaletteList {...props}/>
    </Grid>;

const GamesLayout = props =>
    <div className={props.classes.root}>
        <DragDropContext onDragEnd={props.onDragEnd}>
            <PalettesContainer {...props}/>
        </DragDropContext>
    </div>;

export default withStyles(styles)(GamesLayout);