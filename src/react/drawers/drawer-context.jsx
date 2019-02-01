import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import withContext from "../dashboard/dashboard-context";


const withDrawerContext = drawer => withContext(

    class DrawerWithContext extends Component {

        state = { drawer: "Loading" };

        componentDidMount() {
            const dashboard = this.props.dashboard;
            const getStyles = require(`./${dashboard.drawerType}-styles`).default;

            const options = {
                drawerWidth: dashboard.drawerWidth
                // Colocar drawer side u otras opciones
            };

            const styles = getStyles(options);
            const styledDrawer = withStyles(styles, { withTheme: true })(drawer);
            this.setState({ drawer: styledDrawer });
        }

        render(){
            return <this.state.drawer {...this.props}/>;
        }

    }

);

export default withDrawerContext;