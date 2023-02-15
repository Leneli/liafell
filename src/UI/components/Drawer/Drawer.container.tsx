import React, { FC } from 'react';

import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { DrawerHeader, DrawerStyled } from './Drawer.styled';
import { IDrawer } from './Drawer.types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes.config';

export const Drawer: FC<IDrawer> = ({isOpen, closeDrawer}) => {
    const theme = useTheme();

    return (
        <DrawerStyled variant="permanent" open={isOpen}>
            <DrawerHeader>
                <IconButton onClick={closeDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {ROUTES.map(({path, name, Icon}, index) => (
                    <Link to={path} key={`route_${name}_${index}`}>
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                minHeight: 48,
                                justifyContent: isOpen ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: isOpen ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                    {!!Icon && <Icon />}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: isOpen ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: isOpen ? 'initial' : 'center',
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: isOpen ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                        >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: isOpen ? 1 : 0 }} />
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </DrawerStyled>
    );
};
