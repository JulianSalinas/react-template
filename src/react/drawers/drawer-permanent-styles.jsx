export default options => theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${options.drawerWidth}px)`,
        marginLeft: options.drawerWidth,
    },
    drawer: {
        width: options.drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: options.drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});