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
        transition: "all 0.1s ease-in-out"
    },
    eventClosed: {
        overflow: "hidden",
        transitionDelay: "0.1s",
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
        transition: "all 0.1s ease-in-out"
    },
    eventActionsClosed: {
        width: theme.spacing.unit,
    },
    eventActionsOpened: {
        width: theme.spacing.unit * 7,
    },
    eventActionsQROpened: {
        width: "100%"
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
        outline: "none"
    },
    searchBar: {
        display: "flex",
        padding: "2px 4px",
        alignItems: "center"
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
    },
    searchPadding: {
        padding: 8,
    },
    searchDivider: {
        width: 1,
        margin: 4,
        height: 28,
    },
    addPerson: {
        flexGrow: 1,
        position: "relative"
    },
    addPersonPaper: {
        left: 0,
        right: 0,
        zIndex: 1,
        position: "absolute"
    },
    addPersonBorder: {
        display: "flex",
        padding: "2px 4px",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: "dotted",
        borderColor: "lightgrey",
    },
    addPersonIconButton: {
        padding: 8,
        marginRight: 4,
        cursor: "pointer",
        color: theme.palette.secondary.dark,
    }
});