import GamesView from "../games-view/games-view"
import PeopleView from "../people-view/people-view"
import EventsView from "../schedule-view/schedule-view"
import ManagerView from "../manager-view/manager-view"
import WelcomeView from "../welcome-view/welcome-view"

import GamesIcon from "@material-ui/icons/Gamepad"
import PeopleIcon from "@material-ui/icons/People"
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
        path: "/people",
        name: "Personas",
        icon: PeopleIcon,
        component: PeopleView
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