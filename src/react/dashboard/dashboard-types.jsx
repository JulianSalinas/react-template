import PropTypes from "prop-types";


export default {

    user: PropTypes.shape({
        allowPhoto: PropTypes.bool,
        photoUrl : PropTypes.string,
        email : PropTypes.string.isRequired,
        userid : PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }),

    drawerWidth: PropTypes.number,
    drawerType: PropTypes.string.isRequired,
    drawerManager: PropTypes.object.isRequired,

    changeTheme: PropTypes.func.isRequired,
    changeDrawerType: PropTypes.func.isRequired,
    changeDrawerWidth: PropTypes.func.isRequired

};