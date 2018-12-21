export default theme => ({
    theme: {
        width:"100%",
        color:"#FFF",
        textAlign:"center"
    },
    onTheme: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": { backgroundColor: theme.palette.primary.dark }
    },
    offTheme: {
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {backgroundColor: theme.palette.secondary.dark}
    }
});