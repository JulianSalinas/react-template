// import React from "react";
// import Grid from "@material-ui/core/Grid/Grid";
// import GamesContainer from "./games-container";
//
//
// constants GamesLayout = props =>
//
//     <Grid container spacing={32}>
//
//         <Grid item xs={12}>
//             <GamesContainer containerId={"inside"} containerColor={"#fff3dd"} {...props}/>
//         </Grid>
//
//         <Grid item xs={12}>
//             <GamesContainer containerId={"outside"} containerColor={"#f7e8ff"} {...props}/>
//         </Grid>
//
//     </Grid>;
//
//
// export default GamesLayout;

import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "./Utils";
import { hashColor } from "../../../utils/Colors";
import Typography from "@material-ui/core/Typography/Typography";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const columnNames = ["Lorem", "Ipsum", "Consectetur", "Eiusmod"];

const materialColors = require("../../../constants/colors/Material");

function randomColor(key){
    return hashColor(key, materialColors);
}


class GamesLayout extends Component {
    constructor() {
        super();

        this.onColumnDrop = this.onColumnDrop.bind(this);
        this.onCardDrop = this.onCardDrop.bind(this);
        this.getCardPayload = this.getCardPayload.bind(this);
        this.state = {
            scene: {
                type: "container",
                props: {
                    orientation: "horizontal"
                },
                children: generateItems(3, i => ({
                    id: `column${i}`,
                    type: "container",
                    name: columnNames[i],
                    props: {
                        orientation: "vertical",
                        className: "card-container"
                    },
                    children: generateItems(+(Math.random() * 10).toFixed() + 5, j => {

                        const text = lorem.slice(0, Math.floor(Math.random() * 150) + 30);

                        return {
                            type: "draggable",
                            id: `${i}${j}`,
                            props: {
                                className: "card",
                                style: {backgroundColor: randomColor(text)}
                            },
                            data: text
                        }

                    })
                }))
            }
        };
    }

    render() {
        return (
            <div className="card-scene" style={{
                overflowX: "hidden"
            }}>
                <Container
                    orientation="horizontal"
                    onDrop={this.onColumnDrop}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'cards-drop-preview'
                    }}
                >
                    {this.state.scene.children.map(column => {
                        return (
                            <Draggable key={column.id}>
                                <div className={column.props.className}>
                                    <div className="card-column-header">
                                        <span className="column-drag-handle">&#x2630;</span>
                                        {column.name}
                                    </div>
                                    <Container
                                        {...column.props}
                                        groupName="col"
                                        onDragStart={e => console.log("drag started", e)}
                                        onDragEnd={e => console.log("drag end", e)}
                                        onDrop={e => this.onCardDrop(column.id, e)}
                                        getChildPayload={index =>
                                            this.getCardPayload(column.id, index)
                                        }
                                        dragClass="card-ghost"
                                        dropClass="card-ghost-drop"
                                        onDragEnter={() => {
                                            console.log("drag enter:", column.id);
                                        }}
                                        onDragLeave={() => {
                                            console.log("drag leave:", column.id);
                                        }}
                                        onDropReady={p => console.log('Drop ready: ', p)}
                                        dropPlaceholder={{
                                            animationDuration: 150,
                                            showOnTop: true,
                                            className: 'drop-preview'
                                        }}
                                        dropPlaceholderAnimationDuration={200}
                                    >
                                        {column.children.map(card => {
                                            return (
                                                <Draggable key={card.id}>
                                                    <div {...card.props}>
                                                        <Typography variant={"body1"} style={{
                                                            color: "#FFF"
                                                        }}>
                                                            { card.data }
                                                        </Typography>
                                                    </div>
                                                </Draggable>
                                            );
                                        })}
                                    </Container>
                                </div>
                            </Draggable>
                        );
                    })}
                </Container>
            </div>
        );
    }

    getCardPayload(columnId, index) {
        return this.state.scene.children.filter(p => p.id === columnId)[0].children[
            index
            ];
    }

    onColumnDrop(dropResult) {
        const scene = Object.assign({}, this.state.scene);
        scene.children = applyDrag(scene.children, dropResult);
        this.setState({
            scene
        });
    }

    onCardDrop(columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            const scene = Object.assign({}, this.state.scene);
            const column = scene.children.filter(p => p.id === columnId)[0];
            const columnIndex = scene.children.indexOf(column);

            const newColumn = Object.assign({}, column);
            newColumn.children = applyDrag(newColumn.children, dropResult);
            scene.children.splice(columnIndex, 1, newColumn);

            this.setState({
                scene
            });
        }
    }
}

export default GamesLayout;
