/**
 * @fileoverview Organizations management page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Input } from '@tamagui/core';
import { Card, Modal, Spinner } from '@xalesin/ui';
import {
  Building2,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Users,
  MapPin,
  Calendar,
  Globe,
  Phone,
  Mail,
  Filter,
  Download,
  Upload,
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
    description: 'Leading technology solutions provider',
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
    description: 'Manufacturing and distribution company',
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
    description: 'Innovative fintech startup',
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
 * Organizations page component
 */
const Organizations: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [filteredOrganizations, setFilteredOrganizations] = useState<Organization[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
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

  // Load organizations on component mount
  useEffect(() => {
    const loadOrganizations = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrganizations(mockOrganizations);
      } catch (error) {
        console.error('Error loading organizations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrganizations();
  }, []);

  // Filter organizations based on search and filters
  useEffect(() => {
    let filtered = organizations;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(org =>
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply industry filter
    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(org => org.industry === selectedIndustry);
    }

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(org => org.status === selectedStatus);
    }

    setFilteredOrganizations(filtered);
  }, [organizations, searchQuery, selectedIndustry, selectedStatus]);

  /**
   * Get unique industries from organizations
   */
  const getUniqueIndustries = (): string[] => {
    return Array.from(new Set(organizations.map(org => org.industry)));
  };

  /**
   * Get status badge color
   */
  const getStatusColor = (status: Organization['status']): string => {
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
   * Handle create organization
   */
  const handleCreateOrganization = async () => {
    try {
      // TODO: Implement actual create logic
      console.log('Creating organization:', formData);
      
      const newOrganization: Organization = {
        id: Date.now().toString(),
        ...formData,
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      setOrganizations(prev => [...prev, newOrganization]);
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error creating organization:', error);
    }
  };

  /**
   * Handle edit organization
   */
  const handleEditOrganization = async () => {
    if (!selectedOrganization) return;
    
    try {
      // TODO: Implement actual update logic
      console.log('Updating organization:', formData);
      
      const updatedOrganization: Organization = {
        ...selectedOrganization,
        ...formData,
        updatedAt: new Date().toISOString(),
      };
      
      setOrganizations(prev => 
        prev.map(org => org.id === selectedOrganization.id ? updatedOrganization : org)
      );
      setIsEditModalOpen(false);
      setSelectedOrganization(null);
      resetForm();
    } catch (error) {
      console.error('Error updating organization:', error);
    }
  };

  /**
   * Handle delete organization
   */
  const handleDeleteOrganization = async (id: string) => {
    try {
      // TODO: Implement actual delete logic
      console.log('Deleting organization:', id);
      setOrganizations(prev => prev.filter(org => org.id !== id));
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  /**
   * Open edit modal with organization data
   */
  const openEditModal = (organization: Organization) => {
    setSelectedOrganization(organization);
    setFormData({
      name: organization.name,
      description: organization.description || '',
      industry: organization.industry,
      location: organization.location,
      website: organization.website || '',
      email: organization.email || '',
      phone: organization.phone || '',
      employeeCount: organization.employeeCount,
    });
    setIsEditModalOpen(true);
  };

  /**
   * Reset form data
   */
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      industry: '',
      location: '',
      website: '',
      email: '',
      phone: '',
      employeeCount: 0,
    });
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

  if (isLoading) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center">
        <Spinner size="lg" />
        <Text fontSize="$4" color="$gray11" marginTop="$4">
          Loading organizations...
        </Text>
      </Stack>
    );
  }

  return (
    <Stack flex={1} space="$6">
      {/* Header */}
      <Stack space="$4">
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Stack space="$1">
            <Text fontSize="$8" fontWeight="bold" color="$color">
              Organizations
            </Text>
            <Text fontSize="$4" color="$gray11">
              Manage your organization directory
            </Text>
          </Stack>
          
          <Stack flexDirection="row" space="$3">
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
              Add Organization
            </Button>
          </Stack>
        </Stack>

        {/* Filters */}
        <Stack flexDirection="row" space="$4" alignItems="center">
          <Input
            placeholder="Search organizations..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            leftIcon={Search}
            size="md"
            width={300}
          />
          
          <Stack flexDirection="row" space="$2" alignItems="center">
            <Filter size={16} color="$gray11" />
            <Text fontSize="$3" color="$gray11">Industry:</Text>
            <select 
              value={selectedIndustry} 
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={{ 
                padding: '8px 12px', 
                borderRadius: '6px', 
                border: '1px solid #e2e8f0',
                fontSize: '14px'
              }}
            >
              <option value="all">All Industries</option>
              {getUniqueIndustries().map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </Stack>
          
          <Stack flexDirection="row" space="$2" alignItems="center">
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
        </Stack>
      </Stack>

      {/* Organizations Grid */}
      <Stack space="$4">
        {filteredOrganizations.length === 0 ? (
          <Card variant="outlined" size="lg">
            <Card.Body>
              <Stack space="$4" alignItems="center" paddingVertical="$8">
                <Building2 size={48} color="$gray9" />
                <Stack space="$2" alignItems="center">
                  <Text fontSize="$5" fontWeight="600" color="$color">
                    No organizations found
                  </Text>
                  <Text fontSize="$3" color="$gray11" textAlign="center">
                    {searchQuery || selectedIndustry !== 'all' || selectedStatus !== 'all'
                      ? 'Try adjusting your search or filters'
                      : 'Get started by adding your first organization'
                    }
                  </Text>
                </Stack>
                {!searchQuery && selectedIndustry === 'all' && selectedStatus === 'all' && (
                  <Button 
                    variant="primary" 
                    size="md" 
                    leftIcon={Plus}
                    onPress={() => setIsCreateModalOpen(true)}
                  >
                    Add Organization
                  </Button>
                )}
              </Stack>
            </Card.Body>
          </Card>
        ) : (
          <Stack space="$3">
            {filteredOrganizations.map((organization) => (
              <Card key={organization.id} variant="outlined" size="md" hoverable>
                <Card.Body>
                  <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                    <Stack space="$3" flex={1}>
                      {/* Organization Header */}
                      <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-start">
                        <Stack space="$1" flex={1}>
                          <Stack flexDirection="row" space="$3" alignItems="center">
                            <Text fontSize="$5" fontWeight="600" color="$color">
                              {organization.name}
                            </Text>
                            <Stack
                              paddingHorizontal="$2"
                              paddingVertical="$1"
                              backgroundColor={getStatusColor(organization.status) + '20'}
                              borderRadius="$2"
                            >
                              <Text 
                                fontSize="$1" 
                                fontWeight="600" 
                                color={getStatusColor(organization.status)}
                                textTransform="uppercase"
                              >
                                {organization.status}
                              </Text>
                            </Stack>
                          </Stack>
                          {organization.description && (
                            <Text fontSize="$3" color="$gray11" lineHeight="$1">
                              {organization.description}
                            </Text>
                          )}  
                        </Stack>
                        
                        <Stack flexDirection="row" space="$2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            icon={Edit}
                            onPress={() => openEditModal(organization)}
                          />
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            icon={Trash2}
                            onPress={() => handleDeleteOrganization(organization.id)}
                          />
                        </Stack>
                      </Stack>
                      
                      {/* Organization Details */}
                      <Stack flexDirection="row" space="$6" flexWrap="wrap">
                        <Stack flexDirection="row" space="$2" alignItems="center">
                          <Building2 size={14} color="$gray10" />
                          <Text fontSize="$3" color="$gray11">
                            {organization.industry}
                          </Text>
                        </Stack>
                        
                        <Stack flexDirection="row" space="$2" alignItems="center">
                          <MapPin size={14} color="$gray10" />
                          <Text fontSize="$3" color="$gray11">
                            {organization.location}
                          </Text>
                        </Stack>
                        
                        <Stack flexDirection="row" space="$2" alignItems="center">
                          <Users size={14} color="$gray10" />
                          <Text fontSize="$3" color="$gray11">
                            {organization.employeeCount} employees
                          </Text>
                        </Stack>
                        
                        {organization.website && (
                          <Stack flexDirection="row" space="$2" alignItems="center">
                            <Globe size={14} color="$gray10" />
                            <Text fontSize="$3" color="$blue10">
                              {organization.website.replace(/^https?:\/\//, '')}
                            </Text>
                          </Stack>
                        )}
                      </Stack>
                      
                      {/* Contact Information */}
                      <Stack flexDirection="row" space="$6" flexWrap="wrap">
                        {organization.email && (
                          <Stack flexDirection="row" space="$2" alignItems="center">
                            <Mail size={14} color="$gray10" />
                            <Text fontSize="$3" color="$gray11">
                              {organization.email}
                            </Text>
                          </Stack>
                        )}
                        
                        {organization.phone && (
                          <Stack flexDirection="row" space="$2" alignItems="center">
                            <Phone size={14} color="$gray10" />
                            <Text fontSize="$3" color="$gray11">
                              {organization.phone}
                            </Text>
                          </Stack>
                        )}
                        
                        <Stack flexDirection="row" space="$2" alignItems="center">
                          <Calendar size={14} color="$gray10" />
                          <Text fontSize="$3" color="$gray11">
                            Created {formatDate(organization.createdAt)}
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card>
            ))}
          </Stack>
        )}
      </Stack>

      {/* Create Organization Modal */}
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
              Add New Organization
            </Text>
          </Modal.Header>
          
          <Modal.Body>
            <Stack space="$4">
              <Input
                label="Organization Name"
                placeholder="Enter organization name"
                value={formData.name}
                onChangeText={(value) => setFormData(prev => ({ ...prev, name: value }))}
                size="md"
                required
              />
              
              <Input
                label="Description"
                placeholder="Brief description of the organization"
                value={formData.description}
                onChangeText={(value) => setFormData(prev => ({ ...prev, description: value }))}
                size="md"
                multiline
                numberOfLines={3}
              />
              
              <Stack flexDirection="row" space="$3">
                <Input
                  label="Industry"
                  placeholder="e.g., Technology"
                  value={formData.industry}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Employee Count"
                  placeholder="Number of employees"
                  value={formData.employeeCount.toString()}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, employeeCount: parseInt(value) || 0 }))}
                  size="md"
                  keyboardType="numeric"
                  flex={1}
                />
              </Stack>
              
              <Input
                label="Location"
                placeholder="City, State/Country"
                value={formData.location}
                onChangeText={(value) => setFormData(prev => ({ ...prev, location: value }))}
                size="md"
              />
              
              <Stack flexDirection="row" space="$3">
                <Input
                  label="Website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, website: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Email"
                  placeholder="contact@example.com"
                  value={formData.email}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  size="md"
                  keyboardType="email-address"
                  flex={1}
                />
              </Stack>
              
              <Input
                label="Phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChangeText={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                size="md"
                keyboardType="phone-pad"
              />
            </Stack>
          </Modal.Body>
          
          <Modal.Footer>
            <Stack flexDirection="row" space="$3" justifyContent="flex-end">
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
                onPress={handleCreateOrganization}
                disabled={!formData.name.trim()}
              >
                Create Organization
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {/* Edit Organization Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedOrganization(null);
          resetForm();
        }}
        size="lg"
      >
        <Modal.Content>
          <Modal.Header>
            <Text fontSize="$6" fontWeight="600">
              Edit Organization
            </Text>
          </Modal.Header>
          
          <Modal.Body>
            <Stack space="$4">
              <Input
                label="Organization Name"
                placeholder="Enter organization name"
                value={formData.name}
                onChangeText={(value) => setFormData(prev => ({ ...prev, name: value }))}
                size="md"
                required
              />
              
              <Input
                label="Description"
                placeholder="Brief description of the organization"
                value={formData.description}
                onChangeText={(value) => setFormData(prev => ({ ...prev, description: value }))}
                size="md"
                multiline
                numberOfLines={3}
              />
              
              <Stack flexDirection="row" space="$3">
                <Input
                  label="Industry"
                  placeholder="e.g., Technology"
                  value={formData.industry}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Employee Count"
                  placeholder="Number of employees"
                  value={formData.employeeCount.toString()}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, employeeCount: parseInt(value) || 0 }))}
                  size="md"
                  keyboardType="numeric"
                  flex={1}
                />
              </Stack>
              
              <Input
                label="Location"
                placeholder="City, State/Country"
                value={formData.location}
                onChangeText={(value) => setFormData(prev => ({ ...prev, location: value }))}
                size="md"
              />
              
              <Stack flexDirection="row" space="$3">
                <Input
                  label="Website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, website: value }))}
                  size="md"
                  flex={1}
                />
                
                <Input
                  label="Email"
                  placeholder="contact@example.com"
                  value={formData.email}
                  onChangeText={(value) => setFormData(prev => ({ ...prev, email: value }))}
                  size="md"
                  keyboardType="email-address"
                  flex={1}
                />
              </Stack>
              
              <Input
                label="Phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChangeText={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                size="md"
                keyboardType="phone-pad"
              />
            </Stack>
          </Modal.Body>
          
          <Modal.Footer>
            <Stack flexDirection="row" space="$3" justifyContent="flex-end">
              <Button 
                variant="outline" 
                size="md"
                onPress={() => {
                  setIsEditModalOpen(false);
                  setSelectedOrganization(null);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                size="md"
                onPress={handleEditOrganization}
                disabled={!formData.name.trim()}
              >
                Update Organization
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Stack>
  );
};

export default Organizations;