export default theme => ({

    container: {
        height: "250px",
        overflow: "hidden",
        position: "relative",
        borderRadius: theme.spacing.unit
    },

    image: {
        width: "100%",
        height: "auto"
    },

    overlay: {
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    background: {
        opacity: 0.7,
        backgroundColor: "#000"
    },

    content: {
        color: "#FFF",
        fontSize: 16,
        transitionDuration: "0.1s",
        "&:hover": { fontSize: 28 }
    },

    playIcon: {
        fontSize: 48,
        transitionDuration: "1s",
        "&:hover": { fontSize: 60 }
    }

});