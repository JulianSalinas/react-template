import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import withContext from "../../views/dashboard/dashboard-context";


const withDrawerContext = drawer => withContext(

    class DrawerWithContext extends Component {

        state = {
            component: null,
            drawerWidth: this.props.dashboard.drawerWidth,
        };

        type = this.props.dashboard.drawerType;
        getStyles = require(`../${this.type}/${this.type}-styles`).default;

        componentDidMount(){
            const component = withStyles(this.getStyles(this.state), { withTheme: true })(drawer);
            this.setState({ component: component});
        }

        static getDerivedStateFromProps(props, state){
            if (state.drawerWidth !== props.dashboard.drawerWidth){
                state.drawerWidth = props.dashboard.drawerWidth;
                const type = props.dashboard.drawerType;
                const getStyles = require(`../${type}/${type}-styles`).default;
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