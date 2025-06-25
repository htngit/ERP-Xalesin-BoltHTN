/**
 * @fileoverview UI package entry point - exports all reusable components
 * @author Xalesin Team
 */

import React from 'react';

// Base exports
export * from '@tamagui/core';

// Theme configuration
export { tamaguiConfig, type TamaguiConfig, type ThemeName, type TokenCategory } from './theme';

// Export components
export { Spinner } from './components/Spinner';
export { Button } from './components/Button';
export { Input } from './components/Input';
export { Card, CardHeader, CardBody } from './components/Card';
export { Modal } from './components/Modal';

// Temporary simple UIProvider export
export const UIProvider = ({ children }: { children: React.ReactNode }) => children;