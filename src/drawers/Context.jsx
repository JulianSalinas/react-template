import React, {Component} from 'react';

import withContext from "../dashboard/Context";
import { withStyles } from '@material-ui/core/styles';

const withDrawerContext = drawer => withContext(

    class DrawerWithContext extends Component {

        state = {
            component: null,
            drawerWidth: this.props.dashboard.drawerWidth,
            drawerBackground: this.props.dashboard.drawerBackground,
            drawerAvatar: this.props.dashboard.drawerAvatar
        };

        type = this.props.dashboard.drawerType;
        getStyles = require(`./${this.type}/Styles`).default;

        componentDidMount(){
            const component = withStyles(this.getStyles(this.state), { withTheme: true })(drawer);
            this.setState({ component: component});
            console.log("drawerContext", this.props);
        }

        static getDerivedStateFromProps(props, state){
            if (state.drawerWidth !== props.dashboard.drawerWidth){
                state.drawerWidth = props.dashboard.drawerWidth;
                const type = props.dashboard.drawerType;
                const getStyles = require(`./${type}/Styles`).default;
                state.component = withStyles(getStyles(state), {withTheme: true})(drawer);
            }
            return state;
        }

        render(){
            return this.state.component === null ? <div/> : <this.state.component { ...this.props }/>;
        }

    }

);

export default withDrawerContext;