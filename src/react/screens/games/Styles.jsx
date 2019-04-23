export default theme => ({

    root: {
        padding: 16,
        overflowX: "hidden",
    },

    paper: {
        height: "100%",
        padding: theme.spacing.unit * 4
    },

    formControl: {
        minWidth: 200
    },

    bigAvatar: {
        width: 48,
        height: 48
    },

    colorsContainer: {
        padding: 16,
        backgroundColor: "#FFF",
    },

    colorsContainerDragging: {
        backgroundColor: "lightblue",
    }

});