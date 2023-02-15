import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

import { DRAWER_WIDTH } from '../../../theme/config';
import { IAppBarProps } from './Header.types';


export const HeaderBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
    backgroundColor: theme.palette.secondary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
