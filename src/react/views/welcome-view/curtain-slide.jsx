import React, { Component } from "react";
import withContext from "../dashboard/dashboard-context";

const theImage = "http://3.bp.blogspot.com/-Ahf4X-42t7M/T3UUg8ncvmI/AAAAAAAAAKM/cdcewf0K2B4/s1600/iceland(4).jpg";

export default class CurtainUp extends Component {

    state = {
        isOpen: false
    };

    setIsOpen = isOpen => () => {
        this.setState({ isOpen: isOpen })
    };

    render() {
        return (
            <div>

                <div style={{
                    width: 500,
                    height: 300,
                    padding: 10,
                    backgroundColor: "#EEEEEE",
                    overflow: "hidden",
                    position: "absolute"
                }}
                     onMouseEnter={this.setIsOpen(true)}
                     onMouseLeave={this.setIsOpen(false)}>

                    <div style={{
                        width: 480,
                        height: 280,
                        backgroundColor: "#F12",
                        transition: "0.5s"
                    }}>

                    </div>

                    <div style={{
                        width: 480,
                        height: 280,
                        top: 0,
                        right: 0,
                        backgroundColor: "#2ee06f",
                        transition: "0.5s",
                        transform: this.state.isOpen ? `translate(${0}px, ${-280}px)` : ""
                    }}>

                    </div>

                </div>

            </div>
        );
    }

}

