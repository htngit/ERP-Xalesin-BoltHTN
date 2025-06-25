/**
 * @fileoverview Organization detail page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { YStack, XStack, Text } from '@tamagui/core';
import { Button, Input, Card, Modal, Spinner } from '@xalesin/ui';
import {
  Building2,
  ArrowLeft,
  Edit,
  Trash2,
  Users,
  MapPin,
  Calendar,
  Globe,
  Phone,
  Mail,
  Activity,
  Settings,
  MoreVertical,
} from 'lucide-react';

/**
 * Organization interface
 */
interface Organization {
  id: string;
  name: string;
  description?: string;
  industry: string;
  location: string;
  website?: string;
  email?: string;
  phone?: string;
  employeeCount: number;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  updatedAt: string;
}

/**
 * Organization form data interface
 */
interface OrganizationFormData {
  name: string;
  description: string;
  industry: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  employeeCount: number;
}

/**
 * Mock organizations data
 */
const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    description: 'Leading technology solutions provider specializing in enterprise software and cloud infrastructure.',
    industry: 'Technology',
    location: 'San Francisco, CA',
    website: 'https://acme.com',
    email: 'contact@acme.com',
    phone: '+1 (555) 123-4567',
    employeeCount: 250,
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z',
  },
  {
    id: '2',
    name: 'Global Industries Inc.',
    description: 'Manufacturing and distribution company with operations across North America and Europe.',
    industry: 'Manufacturing',
    location: 'Chicago, IL',
    website: 'https://globalindustries.com',
    email: 'info@globalindustries.com',
    phone: '+1 (555) 987-6543',
    employeeCount: 500,
    status: 'active',
    createdAt: '2024-01-10T09:15:00Z',
    updatedAt: '2024-01-18T16:45:00Z',
  },
  {
    id: '3',
    name: 'StartupXYZ',
    description: 'Innovative fintech startup focused on digital payment solutions and blockchain technology.',
    industry: 'Financial Services',
    location: 'New York, NY',
    website: 'https://startupxyz.com',
    email: 'hello@startupxyz.com',
    phone: '+1 (555) 456-7890',
    employeeCount: 25,
    status: 'pending',
    createdAt: '2024-01-25T11:30:00Z',
    updatedAt: '2024-01-25T11:30:00Z',
  },
];

/**
 * Organization detail page component
 */
const OrganizationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState<OrganizationFormData>({
    name: '',
    description: '',
    industry: '',
    location: '',
    website: '',
    email: '',
    phone: '',
    employeeCount: 0,
  });

  /**
   * Load organization data
   */
  useEffect(() => {
    const loadOrganization = async () => {
      if (!id) {
        navigate('/organizations');
        return;
      }

      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const foundOrganization = mockOrganizations.find(org => org.id === id);
        
        if (!foundOrganization) {
          navigate('/organizations');
          return;
        }

        setOrganization(foundOrganization);
        setFormData({
          name: foundOrganization.name,
          description: foundOrganization.description || '',
          industry: foundOrganization.industry,
          location: foundOrganization.location,
          website: foundOrganization.website || '',
          email: foundOrganization.email || '',
          phone: foundOrganization.phone || '',
          employeeCount: foundOrganization.employeeCount,
        });
      } catch (error) {
        console.error('Error loading organization:', error);
        navigate('/organizations');
      } finally {
        setIsLoading(false);
      }
    };

    loadOrganization();
  }, [id, navigate]);

  /**
   * Handle form input changes
   */
  const handleInputChange = (field: keyof OrganizationFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Handle organization update
   */
  const handleUpdate = async () => {
    if (!organization) return;

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedOrganization: Organization = {
        ...organization,
        ...formData,
        updatedAt: new Date().toISOString(),
      };
      
      setOrganization(updatedOrganization);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating organization:', error);
    }
  };

  /**
   * Handle organization deletion
   */
  const handleDelete = async () => {
    if (!organization) return;

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/organizations');
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  /**
   * Get status color
   */
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '$green10';
      case 'inactive':
        return '$red10';
      case 'pending':
        return '$yellow10';
      default:
        return '$gray10';
    }
  };

  /**
   * Format date
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <YStack flex={1} alignItems="center" justifyContent="center" height="100vh">
        <Spinner size="lg" variant="default" label="Loading organization..." />
      </YStack>
    );
  }

  if (!organization) {
    return (
      <YStack flex={1} alignItems="center" justifyContent="center" height="100vh">
        <Text fontSize="$6" color="$gray11">Organization not found</Text>
        <Button
          variant="outline"
          size="$4"
          marginTop="$4"
          onPress={() => navigate('/organizations')}
          icon={ArrowLeft}
        >
          Back to Organizations
        </Button>
      </YStack>
    );
  }

  return (
    <YStack flex={1} padding="$6" gap="$6" backgroundColor="$gray1">
      {/* Header */}
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center" gap="$4">
          <Button
            variant="ghost"
            size="$3"
            onPress={() => navigate('/organizations')}
            icon={ArrowLeft}
          />
          <YStack>
            <Text fontSize="$8" fontWeight="bold" color="$gray12">
              {organization.name}
            </Text>
            <Text fontSize="$4" color="$gray11">
              Organization Details
            </Text>
          </YStack>
        </XStack>
        
        <XStack gap="$3">
          <Button
            variant="outline"
            size="$4"
            onPress={() => setIsEditModalOpen(true)}
            icon={Edit}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            size="$4"
            onPress={() => setIsDeleteModalOpen(true)}
            icon={Trash2}
            theme="red"
          >
            Delete
          </Button>
        </XStack>
      </XStack>

      {/* Main Content */}
      <XStack gap="$6" flex={1}>
        {/* Left Column - Organization Info */}
        <YStack flex={2} gap="$4">
          {/* Basic Information Card */}
          <Card padding="$6">
            <YStack gap="$4">
              <XStack alignItems="center" gap="$3">
                <Building2 size={24} color="var(--gray11)" />
                <Text fontSize="$6" fontWeight="bold" color="$gray12">
                  Basic Information
                </Text>
              </XStack>
              
              <YStack gap="$3">
                <YStack gap="$2">
                  <Text fontSize="$3" fontWeight="600" color="$gray11">
                    Organization Name
                  </Text>
                  <Text fontSize="$5" color="$gray12">
                    {organization.name}
                  </Text>
                </YStack>
                
                <YStack gap="$2">
                  <Text fontSize="$3" fontWeight="600" color="$gray11">
                    Description
                  </Text>
                  <Text fontSize="$4" color="$gray12" lineHeight="$5">
                    {organization.description || 'No description provided'}
                  </Text>
                </YStack>
                
                <XStack gap="$6">
                  <YStack gap="$2" flex={1}>
                    <Text fontSize="$3" fontWeight="600" color="$gray11">
                      Industry
                    </Text>
                    <Text fontSize="$4" color="$gray12">
                      {organization.industry}
                    </Text>
                  </YStack>
                  
                  <YStack gap="$2" flex={1}>
                    <Text fontSize="$3" fontWeight="600" color="$gray11">
                      Status
                    </Text>
                    <XStack alignItems="center" gap="$2">
                      <YStack
                        width="$1"
                        height="$1"
                        borderRadius="$12"
                        backgroundColor={getStatusColor(organization.status)}
                      />
                      <Text
                        fontSize="$4"
                        color={getStatusColor(organization.status)}
                        textTransform="capitalize"
                        fontWeight="600"
                      >
                        {organization.status}
                      </Text>
                    </XStack>
                  </YStack>
                </XStack>
              </YStack>
            </YStack>
          </Card>

          {/* Contact Information Card */}
          <Card padding="$6">
            <YStack gap="$4">
              <XStack alignItems="center" gap="$3">
                <Phone size={24} color="var(--gray11)" />
                <Text fontSize="$6" fontWeight="bold" color="$gray12">
                  Contact Information
                </Text>
              </XStack>
              
              <YStack gap="$3">
                <XStack alignItems="center" gap="$3">
                  <MapPin size={20} color="var(--gray11)" />
                  <YStack gap="$1">
                    <Text fontSize="$3" fontWeight="600" color="$gray11">
                      Location
                    </Text>
                    <Text fontSize="$4" color="$gray12">
                      {organization.location}
                    </Text>
                  </YStack>
                </XStack>
                
                {organization.email && (
                  <XStack alignItems="center" gap="$3">
                    <Mail size={20} color="var(--gray11)" />
                    <YStack gap="$1">
                      <Text fontSize="$3" fontWeight="600" color="$gray11">
                        Email
                      </Text>
                      <Text fontSize="$4" color="$blue11">
                        {organization.email}
                      </Text>
                    </YStack>
                  </XStack>
                )}
                
                {organization.phone && (
                  <XStack alignItems="center" gap="$3">
                    <Phone size={20} color="var(--gray11)" />
                    <YStack gap="$1">
                      <Text fontSize="$3" fontWeight="600" color="$gray11">
                        Phone
                      </Text>
                      <Text fontSize="$4" color="$gray12">
                        {organization.phone}
                      </Text>
                    </YStack>
                  </XStack>
                )}
                
                {organization.website && (
                  <XStack alignItems="center" gap="$3">
                    <Globe size={20} color="var(--gray11)" />
                    <YStack gap="$1">
                      <Text fontSize="$3" fontWeight="600" color="$gray11">
                        Website
                      </Text>
                      <Text fontSize="$4" color="$blue11">
                        {organization.website}
                      </Text>
                    </YStack>
                  </XStack>
                )}
              </YStack>
            </YStack>
          </Card>
        </YStack>

        {/* Right Column - Statistics & Actions */}
        <YStack flex={1} gap="$4">
          {/* Statistics Card */}
          <Card padding="$6">
            <YStack gap="$4">
              <XStack alignItems="center" gap="$3">
                <Activity size={24} color="var(--gray11)" />
                <Text fontSize="$6" fontWeight="bold" color="$gray12">
                  Statistics
                </Text>
              </XStack>
              
              <YStack gap="$4">
                <XStack alignItems="center" justifyContent="space-between">
                  <XStack alignItems="center" gap="$3">
                    <Users size={20} color="var(--blue11)" />
                    <Text fontSize="$4" color="$gray11">
                      Employees
                    </Text>
                  </XStack>
                  <Text fontSize="$6" fontWeight="bold" color="$blue11">
                    {organization.employeeCount.toLocaleString()}
                  </Text>
                </XStack>
              </YStack>
            </YStack>
          </Card>

          {/* Timeline Card */}
          <Card padding="$6">
            <YStack gap="$4">
              <XStack alignItems="center" gap="$3">
                <Calendar size={24} color="var(--gray11)" />
                <Text fontSize="$6" fontWeight="bold" color="$gray12">
                  Timeline
                </Text>
              </XStack>
              
              <YStack gap="$3">
                <YStack gap="$2">
                  <Text fontSize="$3" fontWeight="600" color="$gray11">
                    Created
                  </Text>
                  <Text fontSize="$4" color="$gray12">
                    {formatDate(organization.createdAt)}
                  </Text>
                </YStack>
                
                <YStack gap="$2">
                  <Text fontSize="$3" fontWeight="600" color="$gray11">
                    Last Updated
                  </Text>
                  <Text fontSize="$4" color="$gray12">
                    {formatDate(organization.updatedAt)}
                  </Text>
                </YStack>
              </YStack>
            </YStack>
          </Card>

          {/* Quick Actions Card */}
          <Card padding="$6">
            <YStack gap="$4">
              <XStack alignItems="center" gap="$3">
                <Settings size={24} color="var(--gray11)" />
                <Text fontSize="$6" fontWeight="bold" color="$gray12">
                  Quick Actions
                </Text>
              </XStack>
              
              <YStack gap="$3">
                <Button
                  variant="outline"
                  size="$4"
                  onPress={() => setIsEditModalOpen(true)}
                  icon={Edit}
                >
                  Edit Organization
                </Button>
                
                <Button
                  variant="outline"
                  size="$4"
                  onPress={() => navigate(`/users?organization=${organization.id}`)}
                  icon={Users}
                >
                  View Users
                </Button>
                
                <Button
                  variant="outline"
                  size="$4"
                  onPress={() => setIsDeleteModalOpen(true)}
                  icon={Trash2}
                  theme="red"
                >
                  Delete Organization
                </Button>
              </YStack>
            </YStack>
          </Card>
        </YStack>
      </XStack>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Organization"
        size="lg"
      >
        <YStack gap="$4" padding="$4">
          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$gray12">
              Organization Name *
            </Text>
            <Input
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder="Enter organization name"
            />
          </YStack>
          
          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$gray12">
              Description
            </Text>
            <Input
              value={formData.description}
              onChangeText={(value) => handleInputChange('description', value)}
              placeholder="Enter description"
              multiline
              numberOfLines={3}
            />
          </YStack>
          
          <XStack gap="$4">
            <YStack gap="$2" flex={1}>
              <Text fontSize="$4" fontWeight="600" color="$gray12">
                Industry *
              </Text>
              <Input
                value={formData.industry}
                onChangeText={(value) => handleInputChange('industry', value)}
                placeholder="Enter industry"
              />
            </YStack>
            
            <YStack gap="$2" flex={1}>
              <Text fontSize="$4" fontWeight="600" color="$gray12">
                Employee Count
              </Text>
              <Input
                value={formData.employeeCount.toString()}
                onChangeText={(value) => handleInputChange('employeeCount', parseInt(value) || 0)}
                placeholder="Enter employee count"
                keyboardType="numeric"
              />
            </YStack>
          </XStack>
          
          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$gray12">
              Location *
            </Text>
            <Input
              value={formData.location}
              onChangeText={(value) => handleInputChange('location', value)}
              placeholder="Enter location"
            />
          </YStack>
          
          <XStack gap="$4">
            <YStack gap="$2" flex={1}>
              <Text fontSize="$4" fontWeight="600" color="$gray12">
                Website
              </Text>
              <Input
                value={formData.website}
                onChangeText={(value) => handleInputChange('website', value)}
                placeholder="Enter website URL"
              />
            </YStack>
            
            <YStack gap="$2" flex={1}>
              <Text fontSize="$4" fontWeight="600" color="$gray12">
                Email
              </Text>
              <Input
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            </YStack>
          </XStack>
          
          <YStack gap="$2">
            <Text fontSize="$4" fontWeight="600" color="$gray12">
              Phone
            </Text>
            <Input
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
          </YStack>
          
          <XStack gap="$3" justifyContent="flex-end" marginTop="$4">
            <Button
              variant="outline"
              size="$4"
              onPress={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              size="$4"
              onPress={handleUpdate}
              disabled={!formData.name || !formData.industry || !formData.location}
            >
              Update Organization
            </Button>
          </XStack>
        </YStack>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Organization"
        size="md"
      >
        <YStack gap="$4" padding="$4">
          <Text fontSize="$4" color="$gray11" lineHeight="$5">
            Are you sure you want to delete <Text fontWeight="bold">{organization.name}</Text>? 
            This action cannot be undone and will permanently remove all associated data.
          </Text>
          
          <XStack gap="$3" justifyContent="flex-end" marginTop="$4">
            <Button
              variant="outline"
              size="$4"
              onPress={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              size="$4"
              onPress={handleDelete}
              theme="red"
            >
              Delete Organization
            </Button>
          </XStack>
        </YStack>
      </Modal>
    </YStack>
  );
};

export default OrganizationDetail;