/**
 * @fileoverview Main layout component for authenticated pages
 * @author Xalesin Team
 */

import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Stack,
  Button,
  Text,
  Separator,
  ScrollView,
  Input,
} from '@xalesin/ui';
import {
  Menu,
  X,
  Home,
  Building2,
  Users,
  Settings,
  User,
  LogOut,
  Bell,
  Search,
} from 'lucide-react';

/**
 * Navigation item interface
 */
interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  badge?: number;
}

/**
 * Navigation items configuration
 */
const navigationItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: Home,
  },
  {
    id: 'organizations',
    label: 'Organizations',
    path: '/organizations',
    icon: Building2,
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    icon: Users,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
];

/**
 * Sidebar navigation component
 */
const Sidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <Stack
      width={280}
      height="100vh"
      backgroundColor="$background"
      borderRightWidth={1}
      borderRightColor="$borderColor"
      position={isOpen ? 'fixed' : 'relative'}
      zIndex={1000}
      left={isOpen ? 0 : -280}
      animation="quick"
      $sm={{
        position: 'fixed',
        left: isOpen ? 0 : -280,
      }}
    >
      {/* Sidebar Header */}
      <Stack
        flexDirection="row"
        padding="$4"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
      >
        <Text fontSize="$6" fontWeight="bold" color="$color">
          Xalesin ERP
        </Text>
        <Button
          size="$3"
          variant="ghost"
          icon={X}
          onPress={onClose}
          $gtSm={{ display: 'none' }}
        />
      </Stack>

      {/* Navigation */}
      <ScrollView flex={1} padding="$3">
        <Stack space="$2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;

            return (
              <Button
                key={item.id}
                variant={isActive ? 'outline' : 'ghost'}
                size="$4"
                justifyContent="flex-start"
                backgroundColor={isActive ? '$blue2' : 'transparent'}
                borderColor={isActive ? '$blue7' : 'transparent'}
                onPress={() => handleNavigation(item.path)}
                icon={
                  <IconComponent
                    size={20}
                    color={isActive ? '$blue10' : '$gray10'}
                  />
                }
              >
                <Text
                  color={isActive ? '$blue11' : '$gray11'}
                  fontWeight={isActive ? '600' : '400'}
                >
                  {item.label}
                </Text>
                {item.badge && (
                  <Text
                    fontSize="$2"
                    backgroundColor="$red9"
                    color="white"
                    paddingHorizontal="$2"
                    paddingVertical="$1"
                    borderRadius="$10"
                    marginLeft="auto"
                  >
                    {item.badge}
                  </Text>
                )}
              </Button>
            );
          })}
        </Stack>
      </ScrollView>

      {/* User Section */}
      <Stack padding="$3" space="$2">
        <Separator />
        <Button
          variant="ghost"
          size="$4"
          justifyContent="flex-start"
          icon={<User size={20} />}
          onPress={() => handleNavigation('/profile')}
        >
          <Text>Profile</Text>
        </Button>
        <Button
          variant="ghost"
          size="$4"
          justifyContent="flex-start"
          icon={<LogOut size={20} />}
          onPress={handleLogout}
        >
          <Text>Logout</Text>
        </Button>
      </Stack>
    </Stack>
  );
};

/**
 * Header component
 */
const Header: React.FC<{
  onMenuClick: () => void;
}> = ({ onMenuClick }) => {
  return (
    <Stack
      flexDirection="row"
      height={64}
      paddingHorizontal="$4"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      zIndex={100}
    >
      {/* Left section */}
      <Stack flexDirection="row" alignItems="center" space="$3">
        <Button
          size="$3"
          variant="ghost"
          icon={Menu}
          onPress={onMenuClick}
          $gtSm={{ display: 'none' }}
        />
        
        {/* Search */}
        <Stack flexDirection="row" $sm={{ display: 'none' }}>
          <Input
            placeholder="Search..."
            leftIcon={Search}
            size="sm"
            width={300}
          />
        </Stack>
      </Stack>

      {/* Right section */}
      <Stack flexDirection="row" alignItems="center" space="$2">
        <Button size="$3" variant="ghost" icon={Bell} />
        <Button size="$3" variant="ghost" icon={User} />
      </Stack>
    </Stack>
  );
};

/**
 * Main layout component
 */
const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <Stack flexDirection="row" flex={1} height="100vh">
      {/* Sidebar */}
      <Stack $sm={{ display: 'none' }}>
        <Sidebar isOpen={true} onClose={closeSidebar} />
      </Stack>
      
      {/* Mobile Sidebar */}
      <Stack $gtSm={{ display: 'none' }}>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </Stack>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <Stack
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex={999}
          onPress={closeSidebar}
          $gtSm={{ display: 'none' }}
        />
      )}

      {/* Main Content */}
      <Stack flex={1} overflow="hidden">
        <Header onMenuClick={toggleSidebar} />
        
        {/* Page Content */}
        <Stack flex={1} overflow="auto">
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainLayout;