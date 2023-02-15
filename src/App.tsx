import React from 'react';

import { Box, CssBaseline } from '@mui/material';

import { Header, Footer, Drawer } from './UI';

import './App.css';
import { useDrawer } from './hooks/useDrawer';
import {config} from './config/site.config';
import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';

// https://mui.com/material-ui/

function App() {
  const {isOpen, openDrawer, closeDrawer} = useDrawer();

  return (
    <BrowserRouter>
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <Header isOpen={isOpen} title={config.siteName} openDrawer={openDrawer} />
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
      <Box component="main" sx={{ flexGrow: 1, pt: 8, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{flexGrow: 1}} className='main'>
          <Router />
        </Box>

        <Footer />
      </Box>
    </Box>
    </BrowserRouter>
  );
}

export default App;
