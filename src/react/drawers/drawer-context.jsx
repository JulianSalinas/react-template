import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withContext from "../dashboard/dashboard-context";


const withDrawerContext = drawer => withContext(props => {

    const dashboard = props.dashboard;
    const getStyles = require(`./${dashboard.drawerType}-styles`).default;

    const options = {
        drawerWidth: dashboard.drawerWidth
        // Colocar drawer side u otras opciones
    };

    const styles = getStyles(options);
    const Component = withStyles(styles, { withTheme: true })(drawer);
    return <Component {...props}/>;

});

export default withDrawerContext;