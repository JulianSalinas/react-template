import PropTypes from "prop-types";

export default {

    drawerType: PropTypes.string.isRequired,
    drawerWidth: PropTypes.number.isRequired,
    drawerAutoContrast: PropTypes.bool.isRequired,
    drawerBackground: PropTypes.string.isRequired,
    drawerAvatar: PropTypes.string,

    changeTheme: PropTypes.func.isRequired,
    changeDrawerType: PropTypes.func.isRequired,
    changeDrawerWidth: PropTypes.func.isRequired,
    changeDrawerAutoContrast: PropTypes.func.isRequired,

};