import GamesView from "../screens/games/Games"
import PeopleView from "../screens/people/People"
import ManagerView from "../screens/manager/Manager"
import WelcomeView from "../screens/welcome/Welcome"
import ScheduleView from "../screens/schedule/Schedule"

import GamesIcon from "@material-ui/icons/Gamepad"
import PeopleIcon from "@material-ui/icons/People"
import ConfigIcon from "@material-ui/icons/Settings"
import ScheduleIcon from "@material-ui/icons/Schedule"
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
        path: "/schedule",
        name: "Cronograma",
        icon: ScheduleIcon,
        component: ScheduleView
    },
    {
        path: "/manager",
        name: "Configuración",
        icon: ConfigIcon,
        component: ManagerView
    }
];