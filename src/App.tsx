import React from 'react';

import { Box, CssBaseline } from '@mui/material';

import { Header, Footer, Drawer, MainPage } from './UI';

import './App.css';
import { useDrawer } from './hooks/useDrawer';

function App() {
  const {isOpen, openDrawer, closeDrawer} = useDrawer();

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <Header isOpen={isOpen} title={'My Portfolio'} openDrawer={openDrawer} />
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
      <Box component="main" sx={{ flexGrow: 1, pt: 8, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{flexGrow: 1}}>
          <MainPage />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
