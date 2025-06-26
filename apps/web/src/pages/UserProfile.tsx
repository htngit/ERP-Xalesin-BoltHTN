/**
 * @fileoverview User profile page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { Stack, Text } from '@xalesin/ui';
import { Button, Input, Card, Modal, Spinner } from '@xalesin/ui';
import {
  User,
  Edit,
  Save,
  X,
  Mail,
  Phone,
  Calendar,
  Shield,
  Building,
  MapPin,
  Camera,
  Lock,
  Bell,
  Globe,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
} from 'lucide-react';

/**
 * User profile interface
 */
interface UserProfile {
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
  bio?: string;
  location?: string;
  timezone?: string;
  language?: string;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
  preferences: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;
    twoFactorAuth: boolean;
  };
}

/**
 * Profile form data interface
 */
interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  timezone: string;
  language: string;
  jobTitle: string;
  department: string;
}

/**
 * Password change form data interface
 */
interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * Mock user profile data
 */
const mockUserProfile: UserProfile = {
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
  bio: 'Passionate software engineer with 8+ years of experience in full-stack development. Love building scalable applications and mentoring junior developers.',
  location: 'San Francisco, CA',
  timezone: 'America/Los_Angeles',
  language: 'English',
  lastLogin: '2024-01-25T14:30:00Z',
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-25T14:30:00Z',
  preferences: {
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    twoFactorAuth: true,
  },
};

/**
 * User profile page component
 */
const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences'>('profile');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    location: '',
    timezone: '',
    language: '',
    jobTitle: '',
    department: '',
  });

  const [passwordData, setPasswordData] = useState<PasswordFormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  /**
   * Load user profile data
   */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProfile(mockUserProfile);
        setFormData({
          firstName: mockUserProfile.firstName,
          lastName: mockUserProfile.lastName,
          email: mockUserProfile.email,
          phone: mockUserProfile.phone || '',
          bio: mockUserProfile.bio || '',
          location: mockUserProfile.location || '',
          timezone: mockUserProfile.timezone || '',
          language: mockUserProfile.language || '',
          jobTitle: mockUserProfile.jobTitle || '',
          department: mockUserProfile.department || '',
        });
      } catch (error) {
        console.error('Failed to load profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  /**
   * Handle form input changes
   */
  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  /**
   * Handle password input changes
   */
  const handlePasswordChange = (field: keyof PasswordFormData, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  /**
   * Handle preference toggle
   */
  const handlePreferenceToggle = (preference: keyof UserProfile['preferences']) => {
    if (!profile) return;
    
    setProfile(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        preferences: {
          ...prev.preferences,
          [preference]: !prev.preferences[preference],
        },
      };
    });
  };

  /**
   * Save profile changes
   */
  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (profile) {
        setProfile({
          ...profile,
          ...formData,
          updatedAt: new Date().toISOString(),
        });
      }
      
      setIsEditing(false);
      setSaveMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      setSaveMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
      setTimeout(() => setSaveMessage(null), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Change password
   */
  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setSaveMessage({ type: 'error', text: 'New passwords do not match.' });
      setTimeout(() => setSaveMessage(null), 3000);
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setSaveMessage({ type: 'error', text: 'Password must be at least 8 characters long.' });
      setTimeout(() => setSaveMessage(null), 3000);
      return;
    }

    try {
      setIsSaving(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowPasswordModal(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setSaveMessage({ type: 'success', text: 'Password changed successfully!' });
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      setSaveMessage({ type: 'error', text: 'Failed to change password. Please try again.' });
      setTimeout(() => setSaveMessage(null), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Cancel editing
   */
  const handleCancelEdit = () => {
    if (profile) {
      setFormData({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone || '',
        bio: profile.bio || '',
        location: profile.location || '',
        timezone: profile.timezone || '',
        language: profile.language || '',
        jobTitle: profile.jobTitle || '',
        department: profile.department || '',
      });
    }
    setIsEditing(false);
  };

  /**
   * Get role badge color
   */
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return '$red10';
      case 'manager':
        return '$blue10';
      default:
        return '$green10';
    }
  };

  /**
   * Get role icon
   */
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return Shield;
      case 'manager':
        return Building;
      default:
        return User;
    }
  };

  if (isLoading) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="lg" variant="default" label="Loading profile..." />
      </Stack>
    );
  }

  if (!profile) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center" padding="$4">
        <Text fontSize="$6" color="$gray11">Profile not found</Text>
      </Stack>
    );
  }

  return (
    <Stack flex={1} padding="$4" gap="$4">
      {/* Header */}
      <Stack justifyContent="space-between" alignItems="center">
        <Stack>
          <Text fontSize="$8" fontWeight="bold" color="$gray12">
            Profile Settings
          </Text>
          <Text fontSize="$4" color="$gray11">
            Manage your account settings and preferences
          </Text>
        </Stack>
        
        {saveMessage && (
          <Stack
            alignItems="center"
            gap="$2"
            padding="$3"
            borderRadius="$4"
            backgroundColor={saveMessage.type === 'success' ? '$green2' : '$red2'}
            borderWidth={1}
            borderColor={saveMessage.type === 'success' ? '$green7' : '$red7'}
          >
            {saveMessage.type === 'success' ? (
              <Check size={16} color="var(--green11)" />
            ) : (
              <AlertCircle size={16} color="var(--red11)" />
            )}
            <Text
              fontSize="$3"
              color={saveMessage.type === 'success' ? '$green11' : '$red11'}
            >
              {saveMessage.text}
            </Text>
          </Stack>
        )}
      </Stack>

      {/* Profile Header Card */}
      <Card padding="$4">
        <Stack gap="$4" alignItems="center">
          {/* Avatar */}
          <Stack alignItems="center" gap="$2">
            <Stack
              width={80}
              height={80}
              borderRadius="$12"
              backgroundColor="$blue4"
              alignItems="center"
              justifyContent="center"
              borderWidth={2}
              borderColor="$blue7"
            >
              <User size={32} color="var(--blue11)" />
            </Stack>
            <Button size="$2" variant="outline" icon={Camera}>
              Change
            </Button>
          </Stack>

          {/* Basic Info */}
          <Stack flex={1} gap="$2">
            <Stack alignItems="center" gap="$3">
              <Text fontSize="$7" fontWeight="bold" color="$gray12">
                {profile.firstName} {profile.lastName}
              </Text>
              <Stack
                alignItems="center"
                gap="$1"
                paddingHorizontal="$2"
                paddingVertical="$1"
                borderRadius="$2"
                backgroundColor={getRoleBadgeColor(profile.role)}
              >
                {React.createElement(getRoleIcon(profile.role), { size: 12, color: 'white' })}
                <Text fontSize="$2" color="white" fontWeight="bold" textTransform="uppercase">
                  {profile.role}
                </Text>
              </Stack>
            </Stack>
            
            <Stack alignItems="center" gap="$2">
              <Mail size={16} color="var(--gray11)" />
              <Text fontSize="$4" color="$gray11">{profile.email}</Text>
            </Stack>
            
            {profile.phone && (
              <Stack alignItems="center" gap="$2">
                <Phone size={16} color="var(--gray11)" />
                <Text fontSize="$4" color="$gray11">{profile.phone}</Text>
              </Stack>
            )}
            
            <Stack alignItems="center" gap="$2">
              <Building size={16} color="var(--gray11)" />
              <Text fontSize="$4" color="$gray11">
                {profile.jobTitle} at {profile.organizationName}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Card>

      {/* Tabs */}
      <Stack gap="$2" borderBottomWidth={1} borderBottomColor="$gray6" paddingBottom="$2">
        {[
          { key: 'profile', label: 'Profile Information', icon: User },
          { key: 'security', label: 'Security', icon: Lock },
          { key: 'preferences', label: 'Preferences', icon: Bell },
        ].map(tab => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? 'default' : 'ghost'}
            size="$3"
            icon={tab.icon}
            onPress={() => setActiveTab(tab.key as any)}
          >
            {tab.label}
          </Button>
        ))}
      </Stack>

      {/* Tab Content */}
      {activeTab === 'profile' && (
        <Card padding="$4">
          <Stack justifyContent="space-between" alignItems="center" marginBottom="$4">
            <Text fontSize="$6" fontWeight="bold" color="$gray12">
              Profile Information
            </Text>
            {!isEditing ? (
              <Button
                variant="outline"
                size="$3"
                icon={Edit}
                onPress={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <Stack gap="$2">
                <Button
                  variant="outline"
                  size="$3"
                  icon={X}
                  onPress={handleCancelEdit}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
                <Button
                  size="$3"
                  icon={Save}
                  onPress={handleSaveProfile}
                  disabled={isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </Stack>
            )}
          </Stack>

          <Stack gap="$4">
            {/* Name Fields */}
            <Stack gap="$3">
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">First Name</Text>
                <Input
                  value={formData.firstName}
                  onChangeText={(value) => handleInputChange('firstName', value)}
                  placeholder="Enter first name"
                  disabled={!isEditing}
                />
              </Stack>
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Last Name</Text>
                <Input
                  value={formData.lastName}
                  onChangeText={(value) => handleInputChange('lastName', value)}
                  placeholder="Enter last name"
                  disabled={!isEditing}
                />
              </Stack>
            </Stack>

            {/* Contact Fields */}
            <Stack gap="$3">
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Email</Text>
                <Input
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  placeholder="Enter email"
                  disabled={!isEditing}
                />
              </Stack>
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Phone</Text>
                <Input
                  value={formData.phone}
                  onChangeText={(value) => handleInputChange('phone', value)}
                  placeholder="Enter phone number"
                  disabled={!isEditing}
                />
              </Stack>
            </Stack>

            {/* Job Fields */}
            <Stack gap="$3">
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Job Title</Text>
                <Input
                  value={formData.jobTitle}
                  onChangeText={(value) => handleInputChange('jobTitle', value)}
                  placeholder="Enter job title"
                  disabled={!isEditing}
                />
              </Stack>
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Department</Text>
                <Input
                  value={formData.department}
                  onChangeText={(value) => handleInputChange('department', value)}
                  placeholder="Enter department"
                  disabled={!isEditing}
                />
              </Stack>
            </Stack>

            {/* Bio */}
            <Stack gap="$2">
              <Text fontSize="$3" fontWeight="600" color="$gray12">Bio</Text>
              <Input
                value={formData.bio}
                onChangeText={(value) => handleInputChange('bio', value)}
                placeholder="Tell us about yourself"
                multiline
                numberOfLines={3}
                disabled={!isEditing}
              />
            </Stack>

            {/* Location Fields */}
            <Stack gap="$3">
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Location</Text>
                <Input
                  value={formData.location}
                  onChangeText={(value) => handleInputChange('location', value)}
                  placeholder="Enter location"
                  disabled={!isEditing}
                />
              </Stack>
              <Stack flex={1} gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">Timezone</Text>
                <Input
                  value={formData.timezone}
                  onChangeText={(value) => handleInputChange('timezone', value)}
                  placeholder="Enter timezone"
                  disabled={!isEditing}
                />
              </Stack>
            </Stack>
          </Stack>
        </Card>
      )}

      {activeTab === 'security' && (
        <Card padding="$4">
          <Stack gap="$4">
            <Text fontSize="$6" fontWeight="bold" color="$gray12">
              Security Settings
            </Text>

            {/* Password Section */}
            <Stack gap="$3" padding="$3" borderRadius="$4" backgroundColor="$gray2">
              <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack>
                  <Text fontSize="$4" fontWeight="600" color="$gray12">Password</Text>
                  <Text fontSize="$3" color="$gray11">Last changed 30 days ago</Text>
                </Stack>
                <Button
                  variant="outline"
                  size="$3"
                  icon={Lock}
                  onPress={() => setShowPasswordModal(true)}
                >
                  Change Password
                </Button>
              </Stack>
            </Stack>

            {/* Two-Factor Authentication */}
            <Stack gap="$3" padding="$3" borderRadius="$4" backgroundColor="$gray2">
              <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack>
                  <Text fontSize="$4" fontWeight="600" color="$gray12">Two-Factor Authentication</Text>
                  <Text fontSize="$3" color="$gray11">
                    {profile.preferences.twoFactorAuth ? 'Enabled' : 'Disabled'}
                  </Text>
                </Stack>
                <Button
                  variant={profile.preferences.twoFactorAuth ? 'destructive' : 'default'}
                  size="$3"
                  icon={Shield}
                  onPress={() => handlePreferenceToggle('twoFactorAuth')}
                >
                  {profile.preferences.twoFactorAuth ? 'Disable' : 'Enable'}
                </Button>
              </Stack>
            </Stack>

            {/* Login History */}
            <Stack gap="$3" padding="$3" borderRadius="$4" backgroundColor="$gray2">
              <Text fontSize="$4" fontWeight="600" color="$gray12">Recent Login Activity</Text>
              <Stack alignItems="center" gap="$2" flexDirection="row">
                <Calendar size={16} color="var(--gray11)" />
                <Text fontSize="$3" color="$gray11">
                  Last login: {new Date(profile.lastLogin || '').toLocaleDateString()}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      )}

      {activeTab === 'preferences' && (
        <Card padding="$4">
          <Stack gap="$4">
            <Text fontSize="$6" fontWeight="bold" color="$gray12">
              Notification Preferences
            </Text>

            {/* Email Notifications */}
            <Stack justifyContent="space-between" alignItems="center" padding="$3" borderRadius="$4" backgroundColor="$gray2" flexDirection="row">
              <Stack>
                <Text fontSize="$4" fontWeight="600" color="$gray12">Email Notifications</Text>
                <Text fontSize="$3" color="$gray11">Receive notifications via email</Text>
              </Stack>
              <Button
                variant={profile.preferences.emailNotifications ? 'default' : 'outline'}
                size="$3"
                onPress={() => handlePreferenceToggle('emailNotifications')}
              >
                {profile.preferences.emailNotifications ? 'On' : 'Off'}
              </Button>
            </Stack>

            {/* Push Notifications */}
            <Stack justifyContent="space-between" alignItems="center" padding="$3" borderRadius="$4" backgroundColor="$gray2" flexDirection="row">
              <Stack>
                <Text fontSize="$4" fontWeight="600" color="$gray12">Push Notifications</Text>
                <Text fontSize="$3" color="$gray11">Receive push notifications</Text>
              </Stack>
              <Button
                variant={profile.preferences.pushNotifications ? 'default' : 'outline'}
                size="$3"
                onPress={() => handlePreferenceToggle('pushNotifications')}
              >
                {profile.preferences.pushNotifications ? 'On' : 'Off'}
              </Button>
            </Stack>

            {/* Marketing Emails */}
            <Stack justifyContent="space-between" alignItems="center" padding="$3" borderRadius="$4" backgroundColor="$gray2" flexDirection="row">
              <Stack>
                <Text fontSize="$4" fontWeight="600" color="$gray12">Marketing Emails</Text>
                <Text fontSize="$3" color="$gray11">Receive promotional emails</Text>
              </Stack>
              <Button
                variant={profile.preferences.marketingEmails ? 'default' : 'outline'}
                size="$3"
                onPress={() => handlePreferenceToggle('marketingEmails')}
              >
                {profile.preferences.marketingEmails ? 'On' : 'Off'}
              </Button>
            </Stack>
          </Stack>
        </Card>
      )}

      {/* Password Change Modal */}
      <Modal
        open={showPasswordModal}
        onOpenChange={setShowPasswordModal}
        title="Change Password"
        description="Enter your current password and choose a new one"
      >
        <Stack gap="$4" padding="$4">
          {/* Current Password */}
          <Stack gap="$2">
            <Text fontSize="$3" fontWeight="600" color="$gray12">Current Password</Text>
            <Stack alignItems="center" gap="$2" flexDirection="row">
              <Input
                flex={1}
                value={passwordData.currentPassword}
                onChangeText={(value) => handlePasswordChange('currentPassword', value)}
                placeholder="Enter current password"
                secureTextEntry={!showCurrentPassword}
              />
              <Button
                variant="ghost"
                size="$3"
                icon={showCurrentPassword ? EyeOff : Eye}
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            </Stack>
          </Stack>

          {/* New Password */}
          <Stack gap="$2">
            <Text fontSize="$3" fontWeight="600" color="$gray12">New Password</Text>
            <Stack alignItems="center" gap="$2" flexDirection="row">
              <Input
                flex={1}
                value={passwordData.newPassword}
                onChangeText={(value) => handlePasswordChange('newPassword', value)}
                placeholder="Enter new password"
                secureTextEntry={!showNewPassword}
              />
              <Button
                variant="ghost"
                size="$3"
                icon={showNewPassword ? EyeOff : Eye}
                onPress={() => setShowNewPassword(!showNewPassword)}
              />
            </Stack>
          </Stack>

          {/* Confirm Password */}
          <Stack gap="$2">
            <Text fontSize="$3" fontWeight="600" color="$gray12">Confirm New Password</Text>
            <Stack alignItems="center" gap="$2" flexDirection="row">
              <Input
                flex={1}
                value={passwordData.confirmPassword}
                onChangeText={(value) => handlePasswordChange('confirmPassword', value)}
                placeholder="Confirm new password"
                secureTextEntry={!showConfirmPassword}
              />
              <Button
                variant="ghost"
                size="$3"
                icon={showConfirmPassword ? EyeOff : Eye}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </Stack>
          </Stack>

          {/* Actions */}
          <Stack gap="$2" justifyContent="flex-end" flexDirection="row">
            <Button
              variant="outline"
              onPress={() => {
                setShowPasswordModal(false);
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
              }}
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button
              onPress={handleChangePassword}
              disabled={isSaving || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
            >
              {isSaving ? 'Changing...' : 'Change Password'}
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default UserProfile;