/**
 * @fileoverview Settings page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Input, Card, Modal, Spinner } from '@xalesin/ui';
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Key,
  Mail,
  Phone,
  Camera,
  Save,
  RefreshCw,
  Eye,
  EyeOff,
  Check,
  X,
  Moon,
  Sun,
  Monitor,
  Volume2,
  VolumeX,
  Smartphone,
  Lock,
  Unlock,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
} from 'lucide-react';

/**
 * Settings sections
 */
type SettingsSection = 'profile' | 'notifications' | 'security' | 'appearance' | 'privacy' | 'integrations' | 'advanced';

/**
 * User profile interface
 */
interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  jobTitle?: string;
  department?: string;
  bio?: string;
  timezone: string;
  language: string;
}

/**
 * Notification settings interface
 */
interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  marketingEmails: boolean;
  securityAlerts: boolean;
  systemUpdates: boolean;
  weeklyReports: boolean;
  mentionNotifications: boolean;
  commentNotifications: boolean;
}

/**
 * Security settings interface
 */
interface SecuritySettings {
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  loginNotifications: boolean;
  deviceTrust: boolean;
  passwordExpiry: number;
  allowedIPs: string[];
}

/**
 * Appearance settings interface
 */
interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  colorScheme: 'blue' | 'green' | 'purple' | 'orange';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  animations: boolean;
  soundEffects: boolean;
}

/**
 * Privacy settings interface
 */
interface PrivacySettings {
  profileVisibility: 'public' | 'organization' | 'private';
  activityTracking: boolean;
  dataCollection: boolean;
  thirdPartySharing: boolean;
  analyticsOptOut: boolean;
}

/**
 * Mock user data
 */
const mockUserProfile: UserProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@acme.com',
  phone: '+1 (555) 123-4567',
  jobTitle: 'Senior Software Engineer',
  department: 'Engineering',
  bio: 'Passionate software engineer with 8+ years of experience building scalable web applications.',
  timezone: 'America/New_York',
  language: 'en-US',
};

/**
 * Settings page component
 */
const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  
  // Form states
  const [profile, setProfile] = useState<UserProfile>(mockUserProfile);
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    systemUpdates: true,
    weeklyReports: true,
    mentionNotifications: true,
    commentNotifications: true,
  });
  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    sessionTimeout: 30,
    loginNotifications: true,
    deviceTrust: true,
    passwordExpiry: 90,
    allowedIPs: [],
  });
  const [appearance, setAppearance] = useState<AppearanceSettings>({
    theme: 'system',
    colorScheme: 'blue',
    fontSize: 'medium',
    compactMode: false,
    animations: true,
    soundEffects: true,
  });
  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: 'organization',
    activityTracking: true,
    dataCollection: true,
    thirdPartySharing: false,
    analyticsOptOut: false,
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  /**
   * Settings navigation items
   */
  const settingsNavigation = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'advanced', label: 'Advanced', icon: Database },
  ] as const;

  /**
   * Handle save settings
   */
  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // TODO: Implement actual save logic
      console.log('Saving settings:', {
        profile,
        notifications,
        security,
        appearance,
        privacy,
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      console.log('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Handle password change
   */
  const handlePasswordChange = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    setIsSaving(true);
    try {
      // TODO: Implement actual password change logic
      console.log('Changing password');
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      
      console.log('Password changed successfully');
    } catch (error) {
      console.error('Error changing password:', error);
    } finally {
      setIsSaving(false);
    }
  };

  /**
   * Handle delete account
   */
  const handleDeleteAccount = async () => {
    try {
      // TODO: Implement actual account deletion logic
      console.log('Deleting account');
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsDeleteAccountModalOpen(false);
      console.log('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  /**
   * Get theme icon
   */
  const getThemeIcon = (theme: AppearanceSettings['theme']) => {
    switch (theme) {
      case 'light':
        return Sun;
      case 'dark':
        return Moon;
      case 'system':
        return Monitor;
      default:
        return Monitor;
    }
  };

  /**
   * Render profile settings
   */
  const renderProfileSettings = () => (
    <Stack space="$6">
      <Stack space="$4">
        <Text fontSize="$6" fontWeight="600" color="$color">
          Profile Information
        </Text>
        
        {/* Avatar Section */}
        <Card variant="outlined" size="md">
          <Card.Body>
            <Stack space="$4" alignItems="center" flexDirection="row">
              <Stack
                width={80}
                height={80}
                backgroundColor="$blue3"
                borderRadius="$10"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="$8" fontWeight="600" color="$blue11">
                  {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                </Text>
              </Stack>
              
              <Stack space="$2" flex={1}>
                <Text fontSize="$5" fontWeight="600" color="$color">
                  Profile Photo
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Upload a new profile photo or remove the current one
                </Text>
                <Stack space="$2" flexDirection="row">
                  <Button variant="outline" size="sm" leftIcon={Camera}>
                    Upload Photo
                  </Button>
                  <Button variant="ghost" size="sm" leftIcon={Trash2}>
                    Remove
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Card.Body>
        </Card>
        
        {/* Basic Information */}
        <Card variant="outlined" size="md">
          <Card.Header>
            <Text fontSize="$5" fontWeight="600" color="$color">
              Basic Information
            </Text>
          </Card.Header>
          <Card.Body>
            <Stack space="$4">
              <Stack space="$3" flexDirection="row">
                <Input
                  label="First Name"
                  value={profile.firstName}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, firstName: value }))}
                  size="md"
                  flex={1}
                />
                <Input
                  label="Last Name"
                  value={profile.lastName}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, lastName: value }))}
                  size="md"
                  flex={1}
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Email"
                  value={profile.email}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, email: value }))}
                  size="md"
                  keyboardType="email-address"
                  leftIcon={Mail}
                  flex={1}
                />
                <Input
                  label="Phone"
                  value={profile.phone || ''}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, phone: value }))}
                  size="md"
                  keyboardType="phone-pad"
                  leftIcon={Phone}
                  flex={1}
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Input
                  label="Job Title"
                  value={profile.jobTitle || ''}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, jobTitle: value }))}
                  size="md"
                  flex={1}
                />
                <Input
                  label="Department"
                  value={profile.department || ''}
                  onChangeText={(value) => setProfile(prev => ({ ...prev, department: value }))}
                  size="md"
                  flex={1}
                />
              </Stack>
              
              <Stack space="$2">
                <Text fontSize="$3" fontWeight="600" color="$color">
                  Bio
                </Text>
                <textarea
                  value={profile.bio || ''}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell us about yourself..."
                  rows={4}
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    width: '100%',
                  }}
                />
              </Stack>
              
              <Stack space="$3" flexDirection="row">
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Timezone
                  </Text>
                  <select
                    value={profile.timezone}
                    onChange={(e) => setProfile(prev => ({ ...prev, timezone: e.target.value }))}
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%',
                    }}
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Paris">Paris (CET)</option>
                    <option value="Asia/Tokyo">Tokyo (JST)</option>
                  </select>
                </Stack>
                
                <Stack space="$2" flex={1}>
                  <Text fontSize="$3" fontWeight="600" color="$color">
                    Language
                  </Text>
                  <select
                    value={profile.language}
                    onChange={(e) => setProfile(prev => ({ ...prev, language: e.target.value }))}
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0',
                      fontSize: '14px',
                      width: '100%',
                    }}
                  >
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es-ES">Spanish</option>
                    <option value="fr-FR">French</option>
                    <option value="de-DE">German</option>
                    <option value="ja-JP">Japanese</option>
                    <option value="zh-CN">Chinese (Simplified)</option>
                  </select>
                </Stack>
              </Stack>
            </Stack>
          </Card.Body>
        </Card>
        
        {/* Password Change */}
        <Card variant="outlined" size="md">
          <Card.Header>
            <Text fontSize="$5" fontWeight="600" color="$color">
              Change Password
            </Text>
          </Card.Header>
          <Card.Body>
            <Stack space="$4">
              <Input
                label="Current Password"
                value={passwordForm.currentPassword}
                onChangeText={(value) => setPasswordForm(prev => ({ ...prev, currentPassword: value }))}
                rightIcon={showCurrentPassword ? EyeOff : Eye}
                onRightIconPress={() => setShowCurrentPassword(!showCurrentPassword)}
                secureTextEntry={!showCurrentPassword}
                size="md"
              />
              
              <Input
                label="New Password"
                value={passwordForm.newPassword}
                onChangeText={(value) => setPasswordForm(prev => ({ ...prev, newPassword: value }))}
                rightIcon={showNewPassword ? EyeOff : Eye}
                onRightIconPress={() => setShowNewPassword(!showNewPassword)}
                secureTextEntry={!showNewPassword}
                size="md"
              />
              
              <Input
                label="Confirm New Password"
                value={passwordForm.confirmPassword}
                onChangeText={(value) => setPasswordForm(prev => ({ ...prev, confirmPassword: value }))}
                rightIcon={showConfirmPassword ? EyeOff : Eye}
                onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
                secureTextEntry={!showConfirmPassword}
                size="md"
              />
              
              <Button
                variant="primary"
                size="md"
                leftIcon={Key}
                onPress={handlePasswordChange}
                disabled={!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword}
                loading={isSaving}
              >
                Change Password
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Stack>
    </Stack>
  );

  /**
   * Render notification settings
   */
  const renderNotificationSettings = () => (
    <Stack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Notification Preferences
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Communication
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            {[
              { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
              { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications in your browser' },
              { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive important alerts via SMS' },
              { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive product updates and promotional content' },
            ].map(({ key, label, description }) => (
              <Stack key={key} justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack space="$1" flex={1}>
                  <Text fontSize="$4" fontWeight="500" color="$color">
                    {label}
                  </Text>
                  <Text fontSize="$3" color="$gray11">
                    {description}
                  </Text>
                </Stack>
                <Button
                  variant={notifications[key as keyof NotificationSettings] ? 'primary' : 'outline'}
                  size="sm"
                  icon={notifications[key as keyof NotificationSettings] ? Check : X}
                  onPress={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof NotificationSettings] }))}
                />
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            System Notifications
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            {[
              { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security-related notifications' },
              { key: 'systemUpdates', label: 'System Updates', description: 'Notifications about system maintenance and updates' },
              { key: 'weeklyReports', label: 'Weekly Reports', description: 'Weekly summary of your activity and metrics' },
              { key: 'mentionNotifications', label: 'Mentions', description: 'When someone mentions you in comments or discussions' },
              { key: 'commentNotifications', label: 'Comments', description: 'When someone comments on your content' },
            ].map(({ key, label, description }) => (
              <Stack key={key} justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack space="$1" flex={1}>
                  <Text fontSize="$4" fontWeight="500" color="$color">
                    {label}
                  </Text>
                  <Text fontSize="$3" color="$gray11">
                    {description}
                  </Text>
                </Stack>
                <Button
                  variant={notifications[key as keyof NotificationSettings] ? 'primary' : 'outline'}
                  size="sm"
                  icon={notifications[key as keyof NotificationSettings] ? Check : X}
                  onPress={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof NotificationSettings] }))}
                />
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );

  /**
   * Render security settings
   */
  const renderSecuritySettings = () => (
    <Stack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Security & Privacy
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Authentication
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
              <Stack space="$1" flex={1}>
                <Text fontSize="$4" fontWeight="500" color="$color">
                  Two-Factor Authentication
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Add an extra layer of security to your account
                </Text>
              </Stack>
              <Button
                variant={security.twoFactorEnabled ? 'primary' : 'outline'}
                size="sm"
                icon={security.twoFactorEnabled ? Lock : Unlock}
                onPress={() => setSecurity(prev => ({ ...prev, twoFactorEnabled: !prev.twoFactorEnabled }))}
              >
                {security.twoFactorEnabled ? 'Enabled' : 'Enable'}
              </Button>
            </Stack>
            
            <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
              <Stack space="$1" flex={1}>
                <Text fontSize="$4" fontWeight="500" color="$color">
                  Login Notifications
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Get notified when someone logs into your account
                </Text>
              </Stack>
              <Button
                variant={security.loginNotifications ? 'primary' : 'outline'}
                size="sm"
                icon={security.loginNotifications ? Check : X}
                onPress={() => setSecurity(prev => ({ ...prev, loginNotifications: !prev.loginNotifications }))}
              />
            </Stack>
            
            <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
              <Stack space="$1" flex={1}>
                <Text fontSize="$4" fontWeight="500" color="$color">
                  Device Trust
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Remember trusted devices for faster login
                </Text>
              </Stack>
              <Button
                variant={security.deviceTrust ? 'primary' : 'outline'}
                size="sm"
                icon={security.deviceTrust ? Smartphone : X}
                onPress={() => setSecurity(prev => ({ ...prev, deviceTrust: !prev.deviceTrust }))}
              />
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Session Management
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Stack space="$2">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Session Timeout (minutes)
              </Text>
              <Text fontSize="$3" color="$gray11">
                Automatically log out after period of inactivity
              </Text>
              <select
                value={security.sessionTimeout}
                onChange={(e) => setSecurity(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  width: '200px',
                }}
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={60}>1 hour</option>
                <option value={120}>2 hours</option>
                <option value={480}>8 hours</option>
                <option value={0}>Never</option>
              </select>
            </Stack>
            
            <Stack space="$2">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Password Expiry (days)
              </Text>
              <Text fontSize="$3" color="$gray11">
                Require password change after specified period
              </Text>
              <select
                value={security.passwordExpiry}
                onChange={(e) => setSecurity(prev => ({ ...prev, passwordExpiry: parseInt(e.target.value) }))}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  width: '200px',
                }}
              >
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
                <option value={90}>90 days</option>
                <option value={180}>180 days</option>
                <option value={365}>1 year</option>
                <option value={0}>Never</option>
              </select>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );

  /**
   * Render appearance settings
   */
  const renderAppearanceSettings = () => (
    <Stack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Appearance & Display
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Theme
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Stack space="$3">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Color Theme
              </Text>
              <Stack space="$3" flexDirection="row">
                {(['light', 'dark', 'system'] as const).map((theme) => {
                  const ThemeIcon = getThemeIcon(theme);
                  return (
                    <Button
                      key={theme}
                      variant={appearance.theme === theme ? 'primary' : 'outline'}
                      size="md"
                      leftIcon={ThemeIcon}
                      onPress={() => setAppearance(prev => ({ ...prev, theme }))}
                    >
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </Button>
                  );
                })}
              </Stack>
            </Stack>
            
            <Stack space="$3">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Color Scheme
              </Text>
              <Stack space="$3" flexDirection="row">
                {(['blue', 'green', 'purple', 'orange'] as const).map((color) => (
                  <Button
                    key={color}
                    variant={appearance.colorScheme === color ? 'primary' : 'outline'}
                    size="md"
                    onPress={() => setAppearance(prev => ({ ...prev, colorScheme: color }))}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
                ))}
              </Stack>
            </Stack>
            
            <Stack space="$3">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Font Size
              </Text>
              <Stack space="$3" flexDirection="row">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <Button
                    key={size}
                    variant={appearance.fontSize === size ? 'primary' : 'outline'}
                    size="md"
                    onPress={() => setAppearance(prev => ({ ...prev, fontSize: size }))}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Interface
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            {[
              { key: 'compactMode', label: 'Compact Mode', description: 'Use a more compact interface with less spacing' },
              { key: 'animations', label: 'Animations', description: 'Enable smooth animations and transitions' },
              { key: 'soundEffects', label: 'Sound Effects', description: 'Play sound effects for interactions' },
            ].map(({ key, label, description }) => (
              <Stack key={key} justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack space="$1" flex={1}>
                  <Text fontSize="$4" fontWeight="500" color="$color">
                    {label}
                  </Text>
                  <Text fontSize="$3" color="$gray11">
                    {description}
                  </Text>
                </Stack>
                <Button
                  variant={appearance[key as keyof AppearanceSettings] ? 'primary' : 'outline'}
                  size="sm"
                  icon={appearance[key as keyof AppearanceSettings] ? 
                    (key === 'soundEffects' ? Volume2 : Check) : 
                    (key === 'soundEffects' ? VolumeX : X)
                  }
                  onPress={() => setAppearance(prev => ({ ...prev, [key]: !prev[key as keyof AppearanceSettings] }))}
                />
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );

  /**
   * Render privacy settings
   */
  const renderPrivacySettings = () => (
    <Stack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Privacy & Data
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Profile Visibility
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Stack space="$3">
              <Text fontSize="$4" fontWeight="500" color="$color">
                Who can see your profile?
              </Text>
              <Stack space="$2">
                {[
                  { value: 'public', label: 'Public', description: 'Anyone can see your profile' },
                  { value: 'organization', label: 'Organization', description: 'Only members of your organization' },
                  { value: 'private', label: 'Private', description: 'Only you can see your profile' },
                ].map(({ value, label, description }) => (
                  <Stack key={value} space="$3" alignItems="center" flexDirection="row">
                    <input
                      type="radio"
                      name="profileVisibility"
                      value={value}
                      checked={privacy.profileVisibility === value}
                      onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisibility: e.target.value as any }))}
                    />
                    <Stack space="$1" flex={1}>
                      <Text fontSize="$4" fontWeight="500" color="$color">
                        {label}
                      </Text>
                      <Text fontSize="$3" color="$gray11">
                        {description}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Data Collection
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            {[
              { key: 'activityTracking', label: 'Activity Tracking', description: 'Track your activity to improve the experience' },
              { key: 'dataCollection', label: 'Usage Data Collection', description: 'Collect anonymous usage data for analytics' },
              { key: 'thirdPartySharing', label: 'Third-party Sharing', description: 'Share data with trusted third-party services' },
              { key: 'analyticsOptOut', label: 'Opt-out of Analytics', description: 'Exclude your data from analytics reports' },
            ].map(({ key, label, description }) => (
              <Stack key={key} justifyContent="space-between" alignItems="center" flexDirection="row">
                <Stack space="$1" flex={1}>
                  <Text fontSize="$4" fontWeight="500" color="$color">
                    {label}
                  </Text>
                  <Text fontSize="$3" color="$gray11">
                    {description}
                  </Text>
                </Stack>
                <Button
                  variant={privacy[key as keyof PrivacySettings] ? 'primary' : 'outline'}
                  size="sm"
                  icon={privacy[key as keyof PrivacySettings] ? Check : X}
                  onPress={() => setPrivacy(prev => ({ ...prev, [key]: !prev[key as keyof PrivacySettings] }))}
                />
              </Stack>
            ))}
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );

  /**
   * Render integrations settings
   */
  const renderIntegrationsSettings = () => (
    <Stack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Integrations & API
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Connected Services
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Text fontSize="$3" color="$gray11">
              No integrations configured yet. Connect external services to enhance your workflow.
            </Text>
            <Button variant="primary" size="md" leftIcon={Globe}>
              Browse Integrations
            </Button>
          </Stack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            API Access
          </Text>
        </Card.Header>
        <Card.Body>
          <Stack space="$4">
            <Text fontSize="$3" color="$gray11">
              Generate API keys to access your data programmatically.
            </Text>
            <Stack space="$3" flexDirection="row">
              <Button variant="outline" size="md" leftIcon={Key}>
                Generate API Key
              </Button>
              <Button variant="ghost" size="md" leftIcon={Download}>
                View Documentation
              </Button>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );

  /**
   * Render advanced settings
   */
  const renderAdvancedSettings = () => (
    <YStack space="$6">
      <Text fontSize="$6" fontWeight="600" color="$color">
        Advanced Settings
      </Text>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Data Management
          </Text>
        </Card.Header>
        <Card.Body>
          <YStack space="$4">
            <XStack space="$3">
              <Button variant="outline" size="md" leftIcon={Download}>
                Export Data
              </Button>
              <Button variant="outline" size="md" leftIcon={Upload}>
                Import Data
              </Button>
              <Button variant="outline" size="md" leftIcon={RefreshCw}>
                Reset Settings
              </Button>
            </XStack>
          </YStack>
        </Card.Body>
      </Card>
      
      <Card variant="outlined" size="md">
        <Card.Header>
          <Text fontSize="$5" fontWeight="600" color="$color">
            Danger Zone
          </Text>
        </Card.Header>
        <Card.Body>
          <YStack space="$4">
            <YStack space="$2">
              <Text fontSize="$4" fontWeight="500" color="$red11">
                Delete Account
              </Text>
              <Text fontSize="$3" color="$gray11">
                Permanently delete your account and all associated data. This action cannot be undone.
              </Text>
              <Button 
                variant="destructive" 
                size="md" 
                leftIcon={Trash2}
                onPress={() => setIsDeleteAccountModalOpen(true)}
              >
                Delete Account
              </Button>
            </YStack>
          </YStack>
        </Card.Body>
      </Card>
    </YStack>
  );

  /**
   * Render settings content based on active section
   */
  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'security':
        return renderSecuritySettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'integrations':
        return renderIntegrationsSettings();
      case 'advanced':
        return renderAdvancedSettings();
      default:
        return renderProfileSettings();
    }
  };

  if (isLoading) {
    return (
      <YStack flex={1} alignItems="center" justifyContent="center">
        <Spinner size="lg" />
        <Text fontSize="$4" color="$gray11" marginTop="$4">
          Loading settings...
        </Text>
      </YStack>
    );
  }

  return (
    <YStack flex={1} space="$6">
      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <YStack space="$1">
          <Text fontSize="$8" fontWeight="bold" color="$color">
            Settings
          </Text>
          <Text fontSize="$4" color="$gray11">
            Manage your account preferences and configuration
          </Text>
        </YStack>
        
        <Button 
          variant="primary" 
          size="md" 
          leftIcon={Save}
          onPress={handleSaveSettings}
          loading={isSaving}
        >
          Save Changes
        </Button>
      </XStack>

      {/* Settings Layout */}
      <XStack space="$6" flex={1}>
        {/* Navigation Sidebar */}
        <YStack space="$2" width={240} flexShrink={0}>
          {settingsNavigation.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeSection === id ? 'primary' : 'ghost'}
              size="md"
              leftIcon={Icon}
              onPress={() => setActiveSection(id as SettingsSection)}
              justifyContent="flex-start"
              width="100%"
            >
              {label}
            </Button>
          ))}
        </YStack>
        
        {/* Settings Content */}
        <YStack flex={1}>
          {renderSettingsContent()}
        </YStack>
      </XStack>

      {/* Delete Account Modal */}
      <Modal 
        isOpen={isDeleteAccountModalOpen} 
        onClose={() => setIsDeleteAccountModalOpen(false)}
        size="md"
      >
        <Modal.Content>
          <Modal.Header>
            <XStack space="$3" alignItems="center">
              <AlertTriangle size={24} color="$red11" />
              <Text fontSize="$6" fontWeight="600" color="$red11">
                Delete Account
              </Text>
            </XStack>
          </Modal.Header>
          
          <Modal.Body>
            <YStack space="$4">
              <Text fontSize="$4" color="$color">
                Are you sure you want to delete your account? This action cannot be undone.
              </Text>
              
              <YStack space="$2">
                <Text fontSize="$3" color="$gray11">
                  This will permanently:
                </Text>
                <YStack space="$1" paddingLeft="$4">
                  <Text fontSize="$3" color="$gray11">• Delete all your personal data</Text>
                  <Text fontSize="$3" color="$gray11">• Remove access to all organizations</Text>
                  <Text fontSize="$3" color="$gray11">• Cancel any active subscriptions</Text>
                  <Text fontSize="$3" color="$gray11">• Permanently delete all your content</Text>
                </YStack>
              </YStack>
              
              <Input
                placeholder="Type 'DELETE' to confirm"
                size="md"
              />
            </YStack>
          </Modal.Body>
          
          <Modal.Footer>
            <XStack space="$3" justifyContent="flex-end">
              <Button 
                variant="outline" 
                size="md"
                onPress={() => setIsDeleteAccountModalOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                size="md"
                leftIcon={Trash2}
                onPress={handleDeleteAccount}
              >
                Delete Account
              </Button>
            </XStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </YStack>
  );
};

export default Settings;