export default options => theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: options.drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: options.drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${options.drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: options.drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});