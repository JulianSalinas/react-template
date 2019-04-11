export default theme => ({
    container: {
        height: "300px",
        overflow: "hidden",
        position: "relative",
        borderRadius: 2
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    },
    overlay: {
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        transitionProperty: "all",
        transitionDuration: ".5s",
        transitionTimingFunction: "cubic-bezier(0, 1, 0.5, 1)"
    },
    background: {
        opacity: 0.3,
        backgroundColor: "#000",
    },
    content: {
        color: "#FFF",
        fontSize: 16,
        transitionDuration: "0.1s",
    },
    playIcon: {
        fontSize: 48,
        transitionDuration: "1s"
    }
});