import { lighten } from "@material-ui/core/styles/colorManipulator";

export default options => theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2
    },
    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
        // whiteSpace: 'nowrap',
        width: options.drawerWidth,
    },
    drawerOpen: {
        width: options.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1
    },
    item: {
        width: "auto",
        display: "block",
        position: "relative",
        color: "#5f6368",
        "&:hover": { backgroundColor: "#F5F5F5" }
    },
    itemActive: {
        width: "auto",
        display: "block",
        position: "relative",
        color: theme.palette.primary.dark,
        backgroundColor: lighten(theme.palette.primary.light, 0.9),
        "&:hover": { backgroundColor: lighten(theme.palette.primary.light, 0.9) }
    },
    itemText: {
        color: "inherit",
        lineHeight: "26px",
        fontWeight: 500,
        marginLeft: 16
    },
    itemIcon: {
        float: "left",
        width: "24px",
        height: "24px",
        color: "inherit",
        block: "inline-block"
    },
});