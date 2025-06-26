/**
 * @fileoverview Users management page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { Stack, Text } from '@xalesin/ui';
import { Button, Input, Card, Modal, Spinner } from '@xalesin/ui';
import {
  Users as UsersIcon,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Shield,
  ShieldCheck,
  Crown,
  User,
  Filter,
  Download,
  Upload,
  Eye,
  EyeOff,
} from 'lucide-react';

/**
 * User interface
 */
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive' | 'pending';
  organizationId?: string;
  organizationName?: string;
  department?: string;
  jobTitle?: string;
  avatar?: string;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * User form data interface
 */
interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'admin' | 'manager' | 'user';
  organizationId: string;
  department: string;
  jobTitle: string;
  password?: string;
}

/**
 * Mock users data
 */
const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@acme.com',
    phone: '+1 (555) 123-4567',
    role: 'admin',
    status: 'active',
    organizationId: '1',
    organizationName: 'Acme Corporation',
    department: 'Engineering',
    jobTitle: 'Senior Software Engineer',
    lastLogin: '2024-01-25T14:30:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-25T14:30:00Z',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@globalindustries.com',
    phone: '+1 (555) 987-6543',
    role: 'manager',
    status: 'active',
    organizationId: '2',
    organizationName: 'Global Industries Inc.',
    department: 'Operations',
    jobTitle: 'Operations Manager',
    lastLogin: '2024-01-24T16:45:00Z',
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-24T16:45:00Z',
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@startupxyz.com',
    phone: '+1 (555) 456-7890',
    role: 'user',
    status: 'pending',
    organizationId: '3',
    organizationName: 'StartupXYZ',
    department: 'Marketing',
    jobTitle: 'Marketing Specialist',
    createdAt: '2024-01-25T11:30:00Z',
    updatedAt: '2024-01-25T11:30:00Z',
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@acme.com',
    phone: '+1 (555) 234-5678',
    role: 'user',
    status: 'active',
    organizationId: '1',
    organizationName: 'Acme Corporation',
    department: 'Design',
    jobTitle: 'UX Designer',
    lastLogin: '2024-01-23T10:15:00Z',
    createdAt: '2024-01-18T14:20:00Z',
    updatedAt: '2024-01-23T10:15:00Z',
  },
];

/**
 * Mock organizations for dropdown
 */
const mockOrganizations = [
  { id: '1', name: 'Acme Corporation' },
  { id: '2', name: 'Global Industries Inc.' },
  { id: '3', name: 'StartupXYZ' },
];

/**
 * Users page component
 */
const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedOrganization, setSelectedOrganization] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'user',
    organizationId: '',
    department: '',
    jobTitle: '',
    password: '',
  });

  // Load users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(mockUsers);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Filter users based on search and filters
  useEffect(() => {
    let filtered = users;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.organizationName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply role filter
    if (selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === selectedRole);
    }

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(user => user.status === selectedStatus);
    }

    // Apply organization filter
    if (selectedOrganization !== 'all') {
      filtered = filtered.filter(user => user.organizationId === selectedOrganization);
    }

    setFilteredUsers(filtered);
  }, [users, searchQuery, selectedRole, selectedStatus, selectedOrganization]);

  /**
   * Get role icon
   */
  const getRoleIcon = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return Crown;
      case 'manager':
        return ShieldCheck;
      case 'user':
        return User;
      default:
        return User;
    }
  };

  /**
   * Get role color
   */
  const getRoleColor = (role: User['role']): string => {
    switch (role) {
      case 'admin':
        return '$purple9';
      case 'manager':
        return '$blue9';
      case 'user':
        return '$gray9';
      default:
        return '$gray9';
    }
  };

  /**
   * Get status badge color
   */
  const getStatusColor = (status: User['status']): string => {
    switch (status) {
      case 'active':
        return '$green9';
      case 'inactive':
        return '$gray9';
      case 'pending':
        return '$orange9';
      default:
        return '$gray9';
    }
  };

  /**
   * Handle create user
   */
  const handleCreateUser = async () => {
    try {
      // TODO: Implement actual create logic
      console.log('Creating user:', formData);
      
      const organizationName = mockOrganizations.find(org => org.id === formData.organizationId)?.name;
      
      const newUser: User = {
        id: Date.now().toString(),
        ...formData,
        organizationName,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      setUsers(prev => [...prev, newUser]);
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  /**
   * Handle edit user
   */
  const handleEditUser = async () => {
    if (!selectedUser) return;
    
    try {
      // TODO: Implement actual update logic
      console.log('Updating user:', formData);
      
      const organizationName = mockOrganizations.find(org => org.id === formData.organizationId)?.name;
      
      const updatedUser: User = {
        ...selectedUser,
        ...formData,
        organizationName,
        updatedAt: new Date().toISOString(),
      };
      
      setUsers(prev => 
        prev.map(user => user.id === selectedUser.id ? updatedUser : user)
      );
      setIsEditModalOpen(false);
      setSelectedUser(null);
      resetForm();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  /**
   * Handle delete user
   */
  const handleDeleteUser = async (id: string) => {
    try {
      // TODO: Implement actual delete logic
      console.log('Deleting user:', id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  /**
   * Open edit modal with user data
   */
  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      role: user.role,
      organizationId: user.organizationId || '',
      department: user.department || '',
      jobTitle: user.jobTitle || '',
    });
    setIsEditModalOpen(true);
  };

  /**
   * Reset form data
   */
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'user',
      organizationId: '',
      department: '',
      jobTitle: '',
      password: '',
    });
    setShowPassword(false);
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  /**
   * Format relative time
   */
  const formatRelativeTime = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  /**
   * Get user initials for avatar
   */
  const getUserInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (isLoading) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center">
        <Spinner size="lg" />
        <Text fontSize="$4" color="$gray11" marginTop="$4">
          Loading users...
        </Text>
      </Stack>
    );
  }

  return (
    <Stack flex={1} space="$6">
      {/* Header */}
      <Stack space="$4">
        <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
          <Stack space="$1">
            <Text fontSize="$8" fontWeight="bold" color="$color">
              Users
            </Text>
            <Text fontSize="$4" color="$gray11">
              Manage user accounts and permissions
            </Text>
          </Stack>
          
          <Stack space="$3" flexDirection="row">
            <Button variant="outline" size="md" leftIcon={Download}>
              Export
            </Button>
            <Button variant="outline" size="md" leftIcon={Upload}>
              Import
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              leftIcon={Plus}
              onPress={() => setIsCreateModalOpen(true)}
            >
              Add User
            </Button>
          </Stack>
              </Stack>

        {/* Filters */}
        <Stack space="$4" alignItems="center" flexWrap="wrap" flexDirection="row">
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            leftIcon={Search}
            size="md"
            width={300}
          />
          
          <Stack space="$2" alignItems="center" flexDirection="row">
            <Filter size={16} color="$gray11" />
            <Text fontSize="$3" color="$gray11">Role:</Text>
            <select 
              value={selectedRole} 
              onChange={(e) => setSelectedRole(e.target.value)}
              style={{ 
                padding: '8px 12px', 
                borderRadius: '6px', 
                border: '1px solid #e2e8f0',
                fontSize: '14px'
              }}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </Stack>

           <Stack space="$2" alignItems="center" flexDirection="row">
            <Text fontSize="$3" color="$gray11">Status:</Text>
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{ 
                padding: '8px 12px', 
                borderRadius: '6px', 
                border: '1px solid #e2e8f0',
                fontSize: '14px'
              }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </Stack>

           <Stack space="$2" alignItems="center" flexDirection="row">
            <Text fontSize="$3" color="$gray11">Organization:</Text>
            <select 
              value={selectedOrganization} 
              onChange={(e) => setSelectedOrganization(e.target.value)}
              style={{ 
                padding: '8px 12px', 
                borderRadius: '6px', 
                border: '1px solid #e2e8f0',
                fontSize: '14px'
              }}
            >
              <option value="all">All Organizations</option>
              {mockOrganizations.map(org => (
                <option key={org.id} value={org.id}>{org.name}</option>
              ))}
            </select>
          </Stack>
         </Stack>
      </Stack>

      {/* Users Grid */}
      <Stack space="$4">
        {filteredUsers.length === 0 ? (
          <Card variant="outlined" size="lg">
            <Card.Body>
              <Stack space="$4" alignItems="center" paddingVertical="$8">
                <UsersIcon size={48} color="$gray9" />
                <Stack space="$2" alignItems="center">
                  <Text fontSize="$5" fontWeight="600" color="$color">
                    No users found
                  </Text>
                  <Text fontSize="$3" color="$gray11" textAlign="center">
                    {searchQuery || selectedRole !== 'all' || selectedStatus !== 'all' || selectedOrganization !== 'all'
                      ? 'Try adjusting your search or filters'
                      : 'Get started by adding your first user'
                    }
                  </Text>
                </Stack>
                {!searchQuery && selectedRole === 'all' && selectedStatus === 'all' && selectedOrganization === 'all' && (
                  <Button 
                    variant="primary" 
                    size="md" 
                    leftIcon={Plus}
                    onPress={() => setIsCreateModalOpen(true)}
                  >
                    Add User
                  </Button>
                )}
              </Stack>
            </Card.Body>
          </Card>
        ) : (
          <Stack space="$3">
            {filteredUsers.map((user) => {
              const RoleIcon = getRoleIcon(user.role);
              return (
                <Card key={user.id} variant="outlined" size="md" hoverable>
                  <Card.Body>
                    <Stack justifyContent="space-between" alignItems="flex-start" flexDirection="row">
                <Stack space="$4" flex={1} alignItems="flex-start" flexDirection="row">
                        {/* Avatar */}
                        <Stack
                          width={48}
                          height={48}
                          backgroundColor="$blue3"
                          borderRadius="$10"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text fontSize="$4" fontWeight="600" color="$blue11">
                            {getUserInitials(user.firstName, user.lastName)}
                          </Text>
                        </Stack>
                        
                        {/* User Info */}
                        <Stack space="$3" flex={1}>
                          {/* User Header */}
                          <Stack space="$1">
                            <Stack space="$3" alignItems="center" flexDirection="row">
                              <Text fontSize="$5" fontWeight="600" color="$color">
                                {user.firstName} {user.lastName}
                              </Text>
                              
                              <Stack space="$2" alignItems="center" flexDirection="row">
                                <Stack
                                  paddingHorizontal="$2"
                                  paddingVertical="$1"
                                  backgroundColor={getRoleColor(user.role) + '20'}
                                  borderRadius="$2"
                                >
                                  <Stack space="$1" alignItems="center" flexDirection="row">
                                    <RoleIcon size={12} color={getRoleColor(user.role)} />
                                    <Text 
                                      fontSize="$1" 
                                      fontWeight="600" 
                                      color={getRoleColor(user.role)}
                                      textTransform="uppercase"
                                    >
                                      {user.role}
                                    </Text>
                                  </Stack>
                                </Stack>
                                
                                <Stack
                                  paddingHorizontal="$2"
                                  paddingVertical="$1"
                                  backgroundColor={getStatusColor(user.status) + '20'}
                                  borderRadius="$2"
                                >
                                  <Text 
                                    fontSize="$1" 
                                    fontWeight="600" 
                                    color={getStatusColor(user.status)}
                                    textTransform="uppercase"
                                  >
                                    {user.status}
                                  </Text>
                                </Stack>
                              </Stack>
                            </Stack>
                            
                            <Text fontSize="$3" color="$gray11">
                              {user.jobTitle} {user.department && `• ${user.department}`}
                            </Text>
                          </Stack>
                          
                          {/* Contact & Organization Info */}
                          <Stack space="$6" flexWrap="wrap" flexDirection="row">
                            <Stack space="$2" alignItems="center" flexDirection="row">
                              <Mail size={14} color="$gray10" />
                              <Text fontSize="$3" color="$gray11">
                                {user.email}
                              </Text>
                            </Stack>
                            
                            {user.phone && (
                              <Stack space="$2" alignItems="center" flexDirection="row">
                                <Phone size={14} color="$gray10" />
                                <Text fontSize="$3" color="$gray11">
                                  {user.phone}
                                </Text>
                              </Stack>
                            )}
                            
                            {user.organizationName && (
                              <Stack space="$2" alignItems="center" flexDirection="row">
                                <Shield size={14} color="$gray10" />
                                <Text fontSize="$3" color="$gray11">
                                  {user.organizationName}
                                </Text>
                              </Stack>
                            )}
                          </Stack>
                          
                          {/* Timestamps */}
                          <Stack space="$6" flexWrap="wrap" flexDirection="row">
                            {user.lastLogin && (
                              <Stack space="$2" alignItems="center" flexDirection="row">
                                <Calendar size={14} color="$gray10" />
                                <Text fontSize="$3" color="$gray11">
                                  Last login {formatRelativeTime(user.lastLogin)}
                                </Text>
                              </Stack>
                            )}
                            
                            <Stack space="$2" alignItems="center" flexDirection="row">
                              <Calendar size={14} color="$gray10" />
                              <Text fontSize="$3" color="$gray11">
                                Created {formatDate(user.createdAt)}
                              </Text>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                      
                      {/* Actions */}
                      <Stack space="$2" flexDirection="row">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          icon={Edit}
                          onPress={() => openEditModal(user)}
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          icon={Trash2}
                          onPress={() => handleDeleteUser(user.id)}
                        />
                      </Stack>
                    </Stack>
                  </Card.Body>
                </Card>
              );
            })}
          </Stack>
        )}
      </Stack>

      {/* Create User Modal */}
      <Modal 
        isOpen={isCreateModalOpen} 
        onClose={() => {
          setIsCreateModalOpen(false);
          resetForm();
        }}
        size="lg"
      >
        <Modal.Content>
          <Modal.Header>
            <Text fontSize="$6" fontWeight="600">
              Add New User
            </Text>
          </Modal.Header>
          
          <Modal.Body>
            <Stack space="$4">
              <Stack space="$3" flexDirection="row">
                <Input
                  label="First Name"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, firstName: value }))}
                  size="md"
                  flex={1}
                  required
                />
                
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, lastName: value }))}
                  size="md"
                  flex={1}
                  required
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  size="md"
                  keyboardType="email-address"
                  flex={1}
                  required
                />
                
                <Input
                  label="Phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                  size="md"
                  keyboardType="phone-pad"
                  flex={1}
                />
              </Stack>
              
              <Input
                label="Password"
                placeholder="Enter temporary password"
                value={formData.password}
                onChangeText={(value) => setFormData(prev => ({ ...prev, password: value }))}
                rightIcon={showPassword ? EyeOff : Eye}
                onRightIconPress={() => setShowPassword(!showPassword)}
                secureTextEntry={!showPassword}
                size="md"
                required
              />
              
              <Stack space="$3" flexDirection="row">
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Role
                  </Text>
                  <select 
                    value={formData.role} 
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as any }))}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  >
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </Stack>
                
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Organization
                  </Text>
                  <select 
                    value={formData.organizationId} 
                    onChange={(e) => setFormData(prev => ({ ...prev, organizationId: e.target.value }))}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  >
                    <option value="">Select organization</option>
                    {mockOrganizations.map(org => (
                      <option key={org.id} value={org.id}>{org.name}</option>
                    ))}
                  </select>
                </Stack>
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Department"
                  placeholder="e.g., Engineering"
                  value={formData.department}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, department: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Job Title"
                  placeholder="e.g., Software Engineer"
                  value={formData.jobTitle}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, jobTitle: value }))}
                  size="md"
                  flex={1}
                />
              </Stack>
            </Stack>
          </Modal.Body>
          
          <Modal.Footer>
            <Stack space="$3" justifyContent="flex-end" flexDirection="row">
              <Button 
                variant="outline" 
                size="md"
                onPress={() => {
                  setIsCreateModalOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                size="md"
                onPress={handleCreateUser}
                disabled={!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()}
              >
                Create User
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {/* Edit User Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedUser(null);
          resetForm();
        }}
        size="lg"
      >
        <Modal.Content>
          <Modal.Header>
            <Text fontSize="$6" fontWeight="600">
              Edit User
            </Text>
          </Modal.Header>
          
          <Modal.Body>
            <Stack space="$4">
              <Stack space="$3" flexDirection="row">
                <Input
                  label="First Name"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, firstName: value }))}
                  size="md"
                  flex={1}
                  required
                />
                
                <Input
                  label="Last Name"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, lastName: value }))}
                  size="md"
                  flex={1}
                  required
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  size="md"
                  keyboardType="email-address"
                  flex={1}
                  required
                />
                
                <Input
                  label="Phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                  size="md"
                  keyboardType="phone-pad"
                  flex={1}
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Role
                  </Text>
                  <select 
                    value={formData.role} 
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as any }))}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  >
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </Stack>
                
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Organization
                  </Text>
                  <select 
                    value={formData.organizationId} 
                    onChange={(e) => setFormData(prev => ({ ...prev, organizationId: e.target.value }))}
                    style={{ 
                      padding: '12px', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  >
                    <option value="">Select organization</option>
                    {mockOrganizations.map(org => (
                      <option key={org.id} value={org.id}>{org.name}</option>
                    ))}
                  </select>
                </Stack>
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Department"
                  placeholder="e.g., Engineering"
                  value={formData.department}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, department: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Job Title"
                  placeholder="e.g., Software Engineer"
                  value={formData.jobTitle}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, jobTitle: value }))}
                  size="md"
                  flex={1}
                />
              </Stack>
            </Stack>
          </Modal.Body>
          
          <Modal.Footer>
            <Stack space="$3" justifyContent="flex-end" flexDirection="row">
              <Button 
                variant="outline" 
                size="md"
                onPress={() => {
                  setIsEditModalOpen(false);
                  setSelectedUser(null);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                size="md"
                onPress={handleEditUser}
                disabled={!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()}
              >
                Update User
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Stack>
  );
};

export default Users;