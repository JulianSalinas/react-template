import GamesView from "../views/dummy-view/games-view"
import EventsView from "../views/schedule-view/schedule-view"
import ManagerView from "../views/manager-view/manager-view"
import WelcomeView from "../views/dummy-view/welcome-view"

import GamesIcon from "@material-ui/icons/Gamepad"
import EventsIcon from "@material-ui/icons/Schedule"
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
    },
    {
        path: "/events",
        name: "Eventos",
        icon: EventsIcon,
        component: EventsView
    }
];