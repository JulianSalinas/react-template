export default theme => ({
    paper: {
        height: "100%",
        overflow: "hidden",
        transition: "all .2s ease-in-out",
    },
    selected: {
        transform: "scale(1.05)",
    },
    container: {
        height: "100%",
        display: "flex"
    },
    actionBar: {
        width: theme.spacing.unit,
        transition: "all .1s ease-in-out",
        backgroundColor: theme.palette.primary.dark,
        overflow: "hidden",
    },
    actionBarSelected: {
        width: theme.spacing.unit * 7,
    },
    actionBarIcon: {
        color: "#FFF",
        borderRadius: 0,
    },
    hiddenSpace: {
        width: theme.spacing.unit * 7,
        transition: "all .1s ease-in-out"
    },
    hiddenSpaceSelected: {
        width: theme.spacing.unit,
    },
    content: {
        width: "100%",
        padding: theme.spacing.unit * 2
    }
});