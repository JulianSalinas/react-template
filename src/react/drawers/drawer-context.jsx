import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import withContext from "../dashboard/dashboard-context";

const withDrawerContext = drawer => withContext(

    class DrawerWithContext extends Component {

        state = {
            component: null,
            drawerWidth: this.props.dashboard.drawerWidth,
        };

        getStyles = require(`./${this.props.dashboard.drawerType}-styles`).default;

        componentDidMount(){
            const component = withStyles(this.getStyles(this.state), { withTheme: true })(drawer);
            this.setState({ component: component});
        }

        static getDerivedStateFromProps(props, state){
            state.drawerWidth = props.dashboard.drawerWidth;
            const getStyles = require(`./${props.dashboard.drawerType}-styles`).default;
            state.component = withStyles(getStyles(state), {withTheme: true})(drawer);
            return state;
        }

        render(){
            return this.state.component === null ? <div/> : <this.state.component {...this.props}/>
        }

    }

);

export default withDrawerContext;