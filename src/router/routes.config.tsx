import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

import { MainPage, WorksPage } from "../UI";

export const ROUTES: TRouteConfig[] = [
  {
    path: '/',
    Component: MainPage,
    name: 'Main Page',
    Icon: HomeIcon,
  },

  {
    path: '/works',
    Component: WorksPage,
    name: 'My Works',
    Icon: WorkIcon,
  },
];
