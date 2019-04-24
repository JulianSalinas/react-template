import React from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";


function getBackgroundWithOpacity(background, opacity) {
    const color = `rgba(0, 0, 0, ${opacity})`;
    return `linear-gradient(${color}, ${color}), url(${background})`
}

const ExampleTitle = () =>
    <Typography variant={"h3"} paragraph>
        {/*{ new LoremIpsum().generateWords(3) }*/}
    </Typography>;

const ExampleText = () => [1, 2, 3, 4].map(paragraph =>
    <Typography key={paragraph} paragraph style={{ fontSize: 18 }}>
        {/*{ new LoremIpsum().generateParagraphs(7) }*/}
    </Typography>
);

const TitleSvgIcon = props =>
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>;

const TitleIconTheme = () =>
    <defs>
        <linearGradient id="gradient1">
            <stop offset="30%" stopColor={"#3153ff"} />
            <stop offset="70%" stopColor={"#FF1122"} />
        </linearGradient>
    </defs>;

const TitleSvg = props =>
    <svg {...props}>
        <TitleIconTheme/>
        {React.cloneElement(props.children[0], { fill: 'url(#gradient1)' })}
    </svg>;

const TitleIcon = props =>
    <TitleSvgIcon
        fontSize={"large"}
        className={props.classes.icon}
        component={svgProps => TitleSvg(svgProps) }
    />;

const TitleText = props =>
    <Typography variant={"h5"} style={{
        color: "#FFF",
        marginLeft: 16,
        fontWeight: "bold"
    }}>
        { props.heroName }
    </Typography>;

const ToolbarTitle = props =>
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    }}>
        <TitleIcon {...props}/>
        <TitleText {...props}/>
    </div>;

const IndexItem = props =>
    <Button
        variant={"text"}
        style={{
            color: "#FFF",
            marginLeft: 8
        }}>
        { props.text }
    </Button>;

const ToolbarMenu = props =>
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    }}>
        <IndexItem text={"Home"}/>
        <IndexItem text={"Tools"}/>
        <IndexItem text={"Features"}/>
        <IndexItem text={"About"}/>
    </div>;

const HeroToolbar = props =>
    <div style={{
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `16px ${16 * 8}px`,
        backgroundColor: `rgba(0, 0, 0, ${0.6})`
    }}>
        <ToolbarTitle {...props}/>
        <ToolbarMenu {...props}/>
    </div>;

const HeroTitle = () =>
    <Typography variant={"h2"} paragraph style={{
        color: "#FFF",
        fontWeight: "bold"
    }}>
        Completely a new <span style={{ color: "#f0a30a" }}> experience </span>
    </Typography>;

const HeroSubtitle = () =>
    <Typography variant={"h5"} paragraph style={{
        color: "#FFF",
        fontWeight: "100"
    }}>
        <span style={{ fontWeight: "500" }}> Always </span>
        give your guests
        <span style={{ fontWeight: "500" }}> the best </span>
        with our
        <span style={{ fontWeight: "500" }}> platform </span>
    </Typography>;

const HeroButton = () =>
    <Button
        variant={"contained"}
        color={"secondary"}
        style={{
            marginTop: 8,
            marginBottom: 16 * 4,
        }}>
        Access Dashboard
    </Button>;

const HeroStat = props =>
    <Grid item>
        <Paper style={{
            padding: 16,
            minWidth: 245,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderRadius: 20,
            borderStyle: "solid",
            borderColor: props.color,
        }}>
            <Typography variant={"h1"} style={{
                color: "#FFF",
                display: "flex",
                fontWeight: "100",
                justifyContent: "center"
            }}>
                { props.number }
            </Typography>
            <Typography variant={"h5"} style={{
                color: props.color,
                display: "flex",
                fontWeight: "500",
                justifyContent: "center"
            }}>
                { props.title }
            </Typography>
        </Paper>
    </Grid>;

const HeroStatList = () =>
    <Grid container spacing={16}>
        <HeroStat title={"Events"} number={75} color={"#FF5722"}/>
        <HeroStat title={"Guests"} number={98} color={"#6873E6"}/>
        <HeroStat title={"Views"} number={348} color={"#8e44ad"}/>
    </Grid>;

const HeroImageList = props => props.images.map((image, index) =>
    <Grid item key={image}>
        <Avatar
            src={image}
            alt={`background-${index}`}
            style={{ height: 48, width: 48 }}
            onClick={() => props.changeBackground(image)}
        />
    </Grid>
);

const HeroContentRight = props =>
    <div style={{
        padding: 32,
        display: "flex",
    }}>
        <Grid
            container
            spacing={16}
            direction={"column"}
            justify={"center"}
            alignContent={"center"}
            style={{ flex: 1 }}>
            <HeroImageList {...props}/>
        </Grid>
    </div>;

const HeroContentLeft = props =>
    <div style={{
        flex: 1,
        padding: `${16 * 4}px ${16 * 8}px`,
    }}>
        <HeroTitle {...props}/>
        <HeroSubtitle {...props}/>
        <HeroButton {...props}/>
        <HeroStatList {...props}/>
    </div>;

const HeroContent = props =>
    <div style={{
        flex: 1,
        display: "flex"
    }}>
        <HeroContentLeft {...props}/>
        <HeroContentRight {...props}/>
    </div>;

const Hero = props =>
    <div style={{
        display: "flex",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: getBackgroundWithOpacity(props.background, props.heroOpacity)
    }}>
        <HeroToolbar {...props}/>
        <HeroContent {...props}/>
    </div>;

const Content = () =>
    <div style={{
        padding: `${16 * 4}px ${16 * 8}px`,
    }}>
        <ExampleTitle/>
        <ExampleText/>
    </div>;

const IndexLayout = props =>
    <div className={props.classes.root}>
        <CssBaseline/>
        <Hero {...props}/>
        <Content {...props}/>
    </div>;

IndexLayout.defaultProps = {
    heroName: "YOU'RE (NOT) THE ADMIN",
    heroOpacity: 0.7
};

IndexLayout.propTypes = {
    heroName: PropTypes.string,
    heroOpacity: PropTypes.number,
    background: PropTypes.string.isRequired,
};

export default withStyles(styles)(IndexLayout);