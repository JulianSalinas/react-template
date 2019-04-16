import { lighten } from "@material-ui/core/styles/colorManipulator";

export default options => theme => ({
    root: {
        display: "flex",
    },
    appBar: {
        marginLeft: options.drawerWidth,
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
    },
    toolbar: {
        [theme.breakpoints.down("sm")]: {
            ...theme.mixins.toolbar,
        }
    },
    menuButton: {
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    nav: {
        [theme.breakpoints.up("md")]: {
            flexShrink: 0,
            width: options.drawerWidth,
        }
    },
    drawer: {
        flexShrink: 0,
        width: options.drawerWidth,
        // borderColor: "rgba(0, 0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        // backgroundColor: "#FFF",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#FFF",
        }
    },
    content: {
        flexGrow: 1,
    },
    item: {
        width: "auto",
        display: "block",
        position: "relative",
        marginRight: 16,
        color: "#5f6368",
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        "&:hover": { backgroundColor: "#F5F5F5" }
    },
    itemActive: {
        width: "auto",
        display: "block",
        position: "relative",
        marginRight: 16,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        color: theme.palette.primary.dark,
        backgroundColor: lighten(theme.palette.primary.light, 0.9),
        "&:hover": { backgroundColor: lighten(theme.palette.primary.light, 0.9) }
    },
    itemText: {
        color: "inherit",
        lineHeight: "26px",
        fontWeight: 500
    },
    itemIcon: {
        float: "left",
        width: "24px",
        height: "24px",
        color: "inherit",
        block: "inline-block"
    },
    footer: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 8,
        zIndex: 2048,
        position: "fixed",
        backgroundColor: theme.palette.primary.dark
    }
});