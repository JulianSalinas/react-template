import drawerStyles from "../DrawerStyles";
import { lighten } from "@material-ui/core/styles/colorManipulator";

export default options => theme => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2
    },
    drawerPaper: {
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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

    ...drawerStyles(options)(theme),

});