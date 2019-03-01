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
        transition: "all 0.1s linear"
    },
    eventClosed: {
        overflow: "hidden",
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
    },
    searchBar: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center'
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
    },
    searchPadding: {
        padding: 8,
    },
    searchDivider: {
        width: 1,
        margin: 4,
        height: 28,
    },
    addPersoncontainer: {
        flexGrow: 1,
        position: 'relative',
    },
    addPersonpaper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    addPersonchip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    addPersoninputRoot: {
        flexWrap: 'wrap',
    },
    addPersoninputInput: {
        width: 'auto',
        flexGrow: 1,
    },
    addPersonroot: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: "dotted",
        borderColor: "lightgrey",
    },
    addPersoninput: {
        marginLeft: 8,
        flex: 1,
    },
    addPersoniconButton: {
        padding: 8,
        marginRight: 4,
        cursor: "pointer",
        color: theme.palette.secondary.dark,
    },
    addPersondivider: {
        width: 1,
        height: 28,
        margin: 4,
    }
});