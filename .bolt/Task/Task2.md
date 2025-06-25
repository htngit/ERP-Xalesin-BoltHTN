# Task 2: Database Architecture & Supabase Setup

## 🎯 Objective
Implement the complete database schema for Xalesin ERP with Supabase configuration, including all core modules, relationships, and security policies.

## 📋 Requirements
- Setup Supabase project and configuration
- Implement complete database schema for all ERP modules
- Configure Row-Level Security (RLS) policies
- Setup database migrations and seed data
- Implement edge functions for business logic

## 🏗️ Implementation Steps

### 1. Supabase Project Setup
- Create Supabase project
- Configure environment variables
- Setup Supabase CLI and local development
- Configure database connection and authentication

### 2. Core Database Schema Implementation

#### Multi-tenancy & Security
```sql
-- Tenant management
tenants (id, name, subdomain, settings, created_at, updated_at)
user_tenants (user_id, tenant_id, role, permissions, created_at)
```

#### Financial Management
```sql
currencies (id, code, name, symbol, exchange_rate, is_active, tenant_id)
exchange_rates (id, from_currency_id, to_currency_id, rate, effective_date, tenant_id)
tax_rates (id, name, rate, type, is_active, tenant_id)
accounts (id, code, name, type, parent_id, tenant_id)
```

#### Party Management (CRM)
```sql
parties (id, name, type, email, phone, tax_number, is_active, tenant_id)
addresses (id, party_id, type, street, city, state, country, postal_code)
contacts (id, party_id, name, email, phone, position, is_primary)
```

#### Document Management
```sql
document_types (id, name, code, prefix, next_number, tenant_id)
document_sequences (id, document_type_id, year, last_number, tenant_id)
documents (id, document_type_id, number, date, status, total_amount, party_id, tenant_id)
document_lines (id, document_id, item_id, quantity, unit_price, total_amount)
```

#### Inventory Management
```sql
warehouses (id, name, address, description, tenant_id)
locations (id, warehouse_id, name, description, tenant_id)
product_categories (id, name, description, parent_id, tenant_id)
items (id, name, sku, category_id, unit_price, cost_price, tenant_id)
batches (id, item_id, batch_number, production_date, expiry_date, quantity)
inventory_movements (id, reference, document_type, user_id, tenant_id)
movement_lines (id, movement_id, location_id, item_id, batch_id, quantity, movement_type)
```

### 3. Database Relationships & Constraints
- Foreign key relationships between modules
- Check constraints for data validation
- Unique constraints for business rules
- Indexes for performance optimization

### 4. Row-Level Security (RLS) Implementation
```sql
-- Multi-tenant isolation
CREATE POLICY tenant_isolation ON parties
  FOR ALL USING (tenant_id = current_setting('app.current_tenant_id')::uuid);

-- Role-based access control
CREATE POLICY user_access ON documents
  FOR ALL USING (
    tenant_id = current_setting('app.current_tenant_id')::uuid AND
    user_has_permission(auth.uid(), 'documents', 'read')
  );
```

### 5. Database Functions & Triggers
- Audit trail triggers for all tables
- Automatic document numbering functions
- Stock movement validation functions
- Currency conversion functions

### 6. Edge Functions Development
```typescript
// Inventory operations
inventory_adjustment
stock_transfer
realtime_stock_update

// Financial operations
currency_conversion
tax_calculation
document_numbering

// Integration functions
sales_order_processing
purchase_order_processing
financial_posting
```

### 7. Migration Scripts
- Create migration files for schema changes
- Seed data for initial setup
- Data migration scripts for existing systems

## ✅ Acceptance Criteria
- [ ] Supabase project is configured and accessible
- [ ] Complete database schema is implemented
- [ ] All foreign key relationships are properly defined
- [ ] RLS policies are implemented and tested
- [ ] Edge functions are deployed and functional
- [ ] Migration scripts execute successfully
- [ ] Seed data is populated correctly
- [ ] Database performance is optimized with proper indexes

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup (for environment configuration)

## 📊 Estimated Effort
- **Complexity**: High
- **Time Estimate**: 12-16 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Use development-friendly RLS policies initially
- Implement strict enterprise policies before production
- Ensure all tables have proper audit trails
- Consider data archival strategies for large datasets
- Plan for database backup and disaster recovery

## 🎯 Success Metrics
- All database operations execute without errors
- RLS policies enforce proper data isolation
- Edge functions respond within acceptable time limits
- Database can handle expected load with good performance
- All business rules are enforced at database level

## 🔐 Security Considerations
- Multi-tenant data isolation is enforced
- Sensitive data is properly encrypted
- API access is rate-limited
- Audit trails capture all critical operations
- Database credentials are securely managed