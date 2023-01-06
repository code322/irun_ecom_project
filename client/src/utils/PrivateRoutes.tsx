import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')!);
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoutes;
