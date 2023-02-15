import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface IAppBarProps extends MuiAppBarProps {
    open?: boolean;
}

export interface IHeader {
    title?: string;
    isOpen: boolean;
    openDrawer: () => void;
}
