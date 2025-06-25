/**
 * @fileoverview Main App component for the Xalesin ERP web application
 * @author Xalesin Team
 */

import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { YStack } from '@tamagui/core';
import { Spinner } from '@xalesin/ui';

// Layout components
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Lazy-loaded page components
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const ForgotPassword = React.lazy(() => import('./pages/auth/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/auth/ResetPassword'));
const Organizations = React.lazy(() => import('./pages/Organizations'));
const OrganizationDetail = React.lazy(() => import('./pages/OrganizationDetail'));
const Users = React.lazy(() => import('./pages/Users'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading fallback component
const LoadingFallback = () => (
  <YStack flex={1} alignItems="center" justifyContent="center" height="100vh">
    <Spinner size="lg" variant="default" label="Loading..." />
  </YStack>
);

/**
 * Main App component that defines the application routes
 * @returns {React.ReactElement} The App component
 */
const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>
        
        {/* Protected routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organizations/:id" element={<OrganizationDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;