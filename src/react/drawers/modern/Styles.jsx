import drawerStyles from "../DrawerStyles";

export default options => theme => ({

    appBar: {
        marginLeft: options.drawerWidth,
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
    },
    menuButton: {
        marginRight: 20,
    },
    drawerPaper: {
        flexShrink: 0,
        borderWidth: 0,
        width: options.drawerWidth,
        display: "flex",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        backgroundImage: `url(${require("../../../assets/images/img-touhou.jpg")})`,
    },
    toolbar: {
        [theme.breakpoints.down("sm")]: {
            ...theme.mixins.toolbar,
        }
    },
    navigation: {
        [theme.breakpoints.up("md")]: {
            flexShrink: 0,
            width: options.drawerWidth,
        }
    },
    item: {
        color: "#FFF",
        width: "auto",
        display: "block",
        position: "relative",
        marginRight: 16,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        "&:hover": {
            backgroundColor: "rgba(72, 72, 72, 0.5)"
        }
    },
    itemActive: {
        width: "auto",
        display: "block",
        position: "relative",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        "&:hover": { backgroundColor: theme.palette.primary.main }
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

    ...drawerStyles(options)(theme),

});