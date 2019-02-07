export default theme => ({
    event: {
        minHeight: 200,
    },
    paper: {
        height: "100%",
        // overflow: "hidden"
    },
    container: {
        height: "100%",
        display: "flex"
    },
    decoration: {
        width: 5,
        backgroundColor: theme.palette.primary.light
    },
    content: {
        width: "100%",
        padding: theme.spacing.unit * 2,
        // color: theme.palette.primary.contrastText,
        // backgroundColor: theme.palette.primary.dark
    }
});