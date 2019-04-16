export default options => theme => ({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
    },
    drawerOpen: {
        width: options.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1,
        },
    }
});