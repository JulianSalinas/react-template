import React from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import { LoremIpsum } from "lorem-ipsum";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import PricesLayout from "./Prices";
import {NavLink} from "react-router-dom";
import SocialMedia from "../../components/social-media/SocialMedia";


// const ExampleTitle = props =>
//     <Typography variant={"h3"} paragraph>
//         { props.exampleTitle }
//     </Typography>;

// const ExampleText = props => [1, 2, 3, 4].map(paragraph =>
//     <Typography key={paragraph} paragraph style={{ fontSize: 18 }}>
//         { props.exampleContent }
//     </Typography>
// );

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
        { props.toolbarTitle }
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
        <IndexItem {...props} text={"Home"}/>
        <IndexItem {...props} text={"Tools"}/>
        <IndexItem {...props} text={"Features"}/>
        <IndexItem {...props} text={"About"}/>
    </div>;

const HeroToolbar = props => {

    const baseStyle = {
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `16px ${16 * 8}px`,
        backgroundColor: `rgba(0, 0, 0, ${props.heroOpacity + 0.2})`,
        transition: "all 8s ease-in-out"
    };

    const stickyStyle = {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1024,
        position: "fixed",
        ...baseStyle
    };

    return (
        <div
            ref={props.toolbarRef}
            style={props.isToolbarFixed ? stickyStyle: baseStyle}>
            <ToolbarTitle {...props}/>
            <ToolbarMenu {...props}/>
        </div>
    );

};

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

const HeroButton = props =>
    <NavLink
        to={"/dashboard"}>
        <Button
            variant={"contained"}
            color={"secondary"}
            style={{
                marginTop: 8,
                marginBottom: 16 * 4,
            }}>
            Access Dashboard
        </Button>
    </NavLink>;

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

const HeroImageList = props => props.backgrounds.map((image, index) =>
    <Grid item key={image}>
        <Avatar
            src={image}
            alt={`background-${index}`}
            style={ props.currentBackgroundIndex === index ? {
                height: 60,
                width: 60,
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "#F50057",
                borderSpacing: "15px",
                transition: "all .4s ease-in-out"
            } : {
                height: 48,
                width: 48,
                transition: "all .4s ease-in-out"
            }}
            onClick={() => props.changeBackground(index)}
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
        display: "flex",
        flexDirection: "column",
        backgroundColor: `rgba(0, 0, 0, ${props.heroOpacity})`
    }}>

        <div style={{
            display: "flex",
        }}>
            <HeroContentLeft {...props}/>
            <HeroContentRight {...props}/>
        </div>

        <div style={{
            height: 75,
            width: "100%",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${require("../../../assets/decorations/hero-bottom.png")})`,
        }}/>

    </div>;

const Hero = props =>
    <div
        ref={props.heroRef}
        style={{
            display: "flex",
            flexDirection: "column",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Parallax effect
            backgroundImage: `url(${props.background})`,
            transition: "background-image 0.5s ease-in-out"
        }}>
        <HeroToolbar {...props}/>
        <HeroContent {...props}/>
    </div>;

const Content = props =>
    <div style={{
        padding: `${16 * 4}px ${16 * 8}px`,
    }}>
        {/*<ExampleTitle {...props}/>*/}
        {/*<ExampleText {...props}/>*/}
        <PricesLayout/>
    </div>;

const IndexLayout = props =>
    <div className={props.classes.root}>
        <CssBaseline/>
        <Hero {...props}/>
        <Content {...props}/>
        <SocialMedia position={"left"}/>
    </div>;

IndexLayout.defaultProps = {
    heroOpacity: 0.7,
    toolbarTitle: "YOU'RE (NOT) THE ADMIN",
    exampleTitle: new LoremIpsum().generateWords(3),
    exampleContent: new LoremIpsum().generateParagraphs(7)
};

IndexLayout.propTypes = {
    heroOpacity: PropTypes.number,
    toolbarTitle: PropTypes.string,
    exampleTitle: PropTypes.string,
    exampleContent: PropTypes.string,
    background: PropTypes.string.isRequired,
};

export default withStyles(styles)(IndexLayout);