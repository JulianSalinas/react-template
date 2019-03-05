export default theme => ({
    personPaper: {
        height: "100%",
        minHeight: 50,
        padding: theme.spacing.unit * 2,
        transition: "all 0.1s ease-in-out",
    },
    personClosed: {
        overflow: "hidden",
        transitionDelay: "0.1s",
    },
    personOpened: {
        minHeight: 600,
        padding: theme.spacing.unit * 4,
    },
    personPreview: {
        height: "100%",
        display: "flex"
    },
    personActions: {
        display: "flex",
        overflow: "hidden",
        transition: "all 0.1s ease-in-out"
    },
    personActionsClosed: {
        width: "0%",
    },
    personActionsOpened: {
        width: "100%"
    },
    personActionsIcon: {
        color: "#FFF",
        borderRadius: 0
    },
    personContent: {
        display: "flex",
        padding: theme.spacing.unit * 2
    },
    personDescription: {
        marginTop: 4,
        fontSize: 12,
        color: "#FFF",
        borderRadius: 5,
        cursor: "pointer",
        padding: "0px 8px",
        backgroundColor: "lightgrey"
    },
    personDescriptionPresent: {
        backgroundColor: "#00D084"
    },
    personDescriptionEmpty: {
        backgroundColor: "#EB144C"
    },
});