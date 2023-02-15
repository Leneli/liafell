import * as React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderBar } from './Header.styled';
import { IHeader } from './Header.types';

export const Header: React.FC<IHeader> = ({title, isOpen, openDrawer}) => (
    <HeaderBar position="fixed" open={isOpen}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
            edge="start"
            sx={{
            marginRight: 5,
            ...(isOpen && { display: 'none' }),
            }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
            {title}
        </Typography>
        </Toolbar>
    </HeaderBar>
);
