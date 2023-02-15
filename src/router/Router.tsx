import React, { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from './routes.config';

export const Router: FC = () => (
  <Routes>
    {ROUTES.map(({path, Component}, index) => <Route key={`route_${index}`} path={path} element={<Component />} />)}
  </Routes>
);
