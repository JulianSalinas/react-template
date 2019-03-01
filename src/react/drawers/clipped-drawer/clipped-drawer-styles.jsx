export default options => theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        flexShrink: 0,
        width: options.drawerWidth
    },
    drawerPaper: {
        width: options.drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    toolbar: theme.mixins.toolbar
});