import GamesView from "../views/games-view"
import ManagerView from "../views/manager-view"
import WelcomeView from "../views/welcome-view"

import GamesIcon from "@material-ui/icons/Gamepad"
import ConfigIcon from "@material-ui/icons/Settings"
import WelcomeIcon from "@material-ui/icons/TimelineRounded"

export default [
    {
        path: "/welcome",
        name: "Bienvenido",
        icon: WelcomeIcon,
        component: WelcomeView
    },
    {
        path: "/games",
        name: "Juegos",
        icon: GamesIcon,
        component: GamesView
    },
    {
        path: "/manager",
        name: "Configuración",
        icon: ConfigIcon,
        component: ManagerView
    }
];