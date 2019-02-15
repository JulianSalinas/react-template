export default theme => ({
    addIcon: {
        fontSize: 48,
    },
    addButton: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    eventPaper: {
        height: "100%",
        minHeight: 210,
        overflow: "hidden",
        transition: "all 0.1s linear"
    },
    eventClosed: {
        "&:hover": { transform: "scale(1.05)" }
    },
    eventOpened: {
        minHeight: 600,
        padding: theme.spacing.unit * 4,
    },
    eventPreview: {
        height: "100%",
        display: "flex"
    },
    eventActions: {
        overflow: "hidden",
        transition: "all 0.1s linear"
    },
    eventActionsClosed: {
        width: theme.spacing.unit,
    },
    eventActionsOpened: {
        width: theme.spacing.unit * 7,
    },
    eventActionsIcon: {
        color: "#FFF",
        borderRadius: 0
    },
    eventContent: {
        width: "100%",
        padding: theme.spacing.unit * 2
    },
    formImage: {
        width: "100%",
        height: "auto"
    },
    formSave: {
        color: "#00D084",
        borderColor: "#00D084"
    },
    formCancel: {
        color: "#EB144C",
        borderColor: "#EB144C"
    },
    formSelect: {
        width: "100%"
    },
    formInput: {
        borderColor: theme.palette.secondary.main,
    }
});