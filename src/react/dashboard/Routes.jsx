import GamesView from "../screens/games/Games";
import PeopleView from "../screens/people/People";
import ManagerView from "../screens/manager/Manager";
import WelcomeView from "../screens/welcome/Welcome";
import ScheduleView from "../screens/schedule/Schedule";
import IndexView from "../screens/index/Index";
import HighchartView from "../screens/highchart/Highchart";
import ArmorsView from "../screens/armors/Armors";

import GamesIcon from "@material-ui/icons/Gamepad";
import PeopleIcon from "@material-ui/icons/People";
import ConfigIcon from "@material-ui/icons/Settings";
import ScheduleIcon from "@material-ui/icons/Schedule";
import WelcomeIcon from "@material-ui/icons/TimelineRounded";
import ExitIcon from "@material-ui/icons/ExitToApp";
import HighchartIcon from "@material-ui/icons/BarChart";
import ArmorsIcon from "@material-ui/icons/VideogameAsset";


export default [
    {
        path: "/dashboard/welcome",
        name: "Bienvenido",
        icon: WelcomeIcon,
        component: WelcomeView
    },
    {
        path: "/dashboard/armors",
        name: "Armaduras",
        icon: ArmorsIcon,
        component: ArmorsView
    },
    {
        path: "/dashboard/games",
        name: "Juegos",
        icon: GamesIcon,
        component: GamesView
    },
    {
        path: "/dashboard/people",
        name: "Personas",
        icon: PeopleIcon,
        component: PeopleView
    },
    {
        path: "/dashboard/schedule",
        name: "Cronograma",
        icon: ScheduleIcon,
        component: ScheduleView
    },
    {
        path: "/dashboard/manager",
        name: "Configuración",
        icon: ConfigIcon,
        component: ManagerView
    },
    {
        path: "/dashboard/highchart",
        name: "Highchart",
        icon: HighchartIcon,
        component: HighchartView
    },
    {
        path: "/index",
        name: "Salir",
        icon: ExitIcon,
        component: IndexView
    }

];