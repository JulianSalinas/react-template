import drawerStyles from "../DrawerStyles";


export default options => theme => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: options.drawerWidth,
        width: `calc(100% - ${options.drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        flexShrink: 0,
        whiteSpace: "nowrap",
        width: options.drawerWidth,
        backgroundColor: theme.palette.primary.main,
        "& *": { color: theme.palette.primary.contrastText }
    },
    item: {
        width: "auto",
        display: "block",
        position: "relative",
        "&:hover": { backgroundColor: theme.palette.primary.light }
    },
    itemActive: {
        width: "auto",
        display: "block",
        position: "relative",
        backgroundColor: theme.palette.primary.dark,
        "&:hover": { backgroundColor: theme.palette.primary.dark }
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

    ...drawerStyles(options)(theme),

});