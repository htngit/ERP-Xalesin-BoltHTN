# Task 9: Deployment & DevOps Infrastructure

## 🎯 Objective
Implement enterprise-grade deployment infrastructure and DevOps practices for Xalesin ERP using Supabase ecosystem, including CI/CD pipelines, Edge Functions deployment, web/mobile app hosting, monitoring, logging, and automated scaling to ensure reliable, scalable, and maintainable production operations.

## 📋 Requirements
- Setup Supabase project configuration and Edge Functions
- Implement CI/CD pipelines with GitHub Actions for Supabase deployment
- Configure web app deployment (Vercel/Netlify) and mobile app deployment (Expo EAS)
- Setup monitoring and observability with Supabase Analytics
- Implement logging and error tracking with Supabase Edge Functions
- Configure database migrations and schema management
- Setup backup strategies using Supabase built-in features
- Implement security scanning and compliance
- Create deployment documentation and runbooks

## 🏗️ Implementation Steps

### 1. Supabase Project Configuration
```typescript
// supabase/config.toml
[api]
port = 54321
schemas = ["public", "auth", "realtime", "storage"]
extra_search_path = ["public", "extensions"]
max_rows = 1000

[db]
port = 54322
major_version = 15

[studio]
port = 54323

[inbucket]
port = 54324
enabled = true

[storage]
file_size_limit = "50MiB"

[auth]
site_url = "http://localhost:3000"
additional_redirect_urls = ["https://xalesin.vercel.app"]
jwt_expiry = 3600
enable_signup = true
enable_email_confirmations = false
enable_sms_confirmations = false

[auth.email]
enable_signup = true
double_confirm_changes = true
enable_confirmations = false

# Edge Functions Configuration
# supabase/functions/_shared/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

# supabase/functions/inventory-sync/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

interface InventoryUpdate {
  item_id: string
  quantity: number
  location_id: string
  transaction_type: 'in' | 'out' | 'transfer'
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data, error } = await req.json() as InventoryUpdate
    
    if (error) {
      throw new Error('Invalid request body')
    }

    // Process inventory update with business logic
    const { data: result, error: updateError } = await supabase
      .rpc('update_inventory_with_audit', {
        p_item_id: data.item_id,
        p_quantity: data.quantity,
        p_location_id: data.location_id,
        p_transaction_type: data.transaction_type
      })

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ success: true, data: result }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

# supabase/functions/financial-reports/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

interface ReportRequest {
  report_type: 'balance_sheet' | 'income_statement' | 'cash_flow'
  start_date: string
  end_date: string
  tenant_id: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { report_type, start_date, end_date, tenant_id } = await req.json() as ReportRequest
    
    // Generate financial report with complex business logic
    const { data: report, error } = await supabase
      .rpc('generate_financial_report', {
        p_report_type: report_type,
        p_start_date: start_date,
        p_end_date: end_date,
        p_tenant_id: tenant_id
      })

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true, report }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
```

### 2. Environment Configuration
```bash
# .env.production
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_PROJECT_ID=your-project-id

# Vercel deployment
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Expo EAS deployment
EXPO_SUPABASE_URL=https://your-project-ref.supabase.co
EXPO_SUPABASE_ANON_KEY=your-anon-key

# .env.staging
SUPABASE_URL=https://your-staging-project-ref.supabase.co
SUPABASE_ANON_KEY=your-staging-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-staging-service-role-key
SUPABASE_PROJECT_ID=your-staging-project-id
```

### 3. Docker Compose for Development
```yaml
# docker-compose.yml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    container_name: xalesin-postgres
    environment:
      POSTGRES_DB: xalesin_erp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/init:/docker-entrypoint-initdb.d
    networks:
      - xalesin-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Redis for Caching
  redis:
    image: redis:7-alpine
    container_name: xalesin-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - xalesin-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

  # API Service
  api:
    build:
      context: .
      dockerfile: Dockerfile.api
    container_name: xalesin-api
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/xalesin_erp
      - REDIS_URL=redis://redis:6379
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
      - SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - xalesin-network
    volumes:
      - ./apps/api:/app/apps/api
      - /app/node_modules
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Web Application
  web:
    build:
      context: .
      dockerfile: Dockerfile.web
    container_name: xalesin-web
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - NEXT_PUBLIC_API_URL=http://api:8000
      - NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
    depends_on:
      api:
        condition: service_healthy
    networks:
      - xalesin-network
    volumes:
      - ./apps/web:/app/apps/web
      - /app/node_modules

  # Mobile Development Server
  mobile:
    build:
      context: .
      dockerfile: Dockerfile.mobile
    container_name: xalesin-mobile
    ports:
      - "19000:19000"
      - "19001:19001"
      - "19002:19002"
    environment:
      - EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
    networks:
      - xalesin-network
    volumes:
      - ./apps/mobile:/app/apps/mobile
      - /app/node_modules

  # Nginx Load Balancer
  nginx:
    image: nginx:alpine
    container_name: xalesin-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - web
      - api
    networks:
      - xalesin-network

  # Monitoring Stack
  prometheus:
    image: prom/prometheus:latest
    container_name: xalesin-prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    networks:
      - xalesin-network

  grafana:
    image: grafana/grafana:latest
    container_name: xalesin-grafana
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./monitoring/grafana/datasources:/etc/grafana/provisioning/datasources
    networks:
      - xalesin-network

  # Log Management
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0
    container_name: xalesin-elasticsearch
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data
    networks:
      - xalesin-network

  kibana:
    image: docker.elastic.co/kibana/kibana:8.11.0
    container_name: xalesin-kibana
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    depends_on:
      - elasticsearch
    networks:
      - xalesin-network

volumes:
  postgres_data:
  redis_data:
  prometheus_data:
  grafana_data:
  elasticsearch_data:

networks:
  xalesin-network:
    driver: bridge
```

### 3. Supabase-Focused CI/CD Pipeline
```yaml
# .github/workflows/ci-cd.yml
name: Supabase CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}

jobs:
  # Quality Gates
  quality-check:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type checking
        run: npm run type-check
      
      - name: Linting
        run: npm run lint
      
      - name: Code formatting
        run: npm run format:check
      
      - name: Unit tests
        run: npm run test:unit
      
      - name: Integration tests with Supabase
        run: npm run test:integration
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL_TEST }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY_TEST }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY_TEST }}
      
      - name: Security audit
        run: npm audit --audit-level=high
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  # Security Scanning
  security-scan:
    runs-on: ubuntu-latest
    needs: quality-check
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'
      
      - name: Upload Trivy scan results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'
      
      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high

  # Deploy Supabase Edge Functions
  deploy-edge-functions:
    runs-on: ubuntu-latest
    needs: [quality-check, security-scan]
    if: github.event_name == 'push'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1
        with:
          version: latest
      
      - name: Deploy to Staging
        if: github.ref == 'refs/heads/develop'
        run: |
          supabase functions deploy --project-ref ${{ secrets.SUPABASE_PROJECT_REF_STAGING }}
      
      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        run: |
          supabase functions deploy --project-ref ${{ secrets.SUPABASE_PROJECT_REF_PROD }}

  # Deploy Web Application
  deploy-web:
    runs-on: ubuntu-latest
    needs: [quality-check, security-scan]
    if: github.event_name == 'push'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build for Staging
        if: github.ref == 'refs/heads/develop'
        run: npm run build:web
        env:
          VITE_SUPABASE_URL: ${{ secrets.SUPABASE_URL_STAGING }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY_STAGING }}
      
      - name: Build for Production
        if: github.ref == 'refs/heads/main'
        run: npm run build:web
        env:
          VITE_SUPABASE_URL: ${{ secrets.SUPABASE_URL_PROD }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY_PROD }}
      
      - name: Deploy to Vercel Staging
        if: github.ref == 'refs/heads/develop'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./apps/web
          scope: ${{ secrets.VERCEL_ORG_ID }}
          alias-domains: staging.xalesin.com
      
      - name: Deploy to Vercel Production
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./apps/web
          scope: ${{ secrets.VERCEL_ORG_ID }}
          vercel-args: '--prod'
          alias-domains: app.xalesin.com

  # Deploy Mobile Application
  deploy-mobile:
    runs-on: ubuntu-latest
    needs: [quality-check, security-scan]
    if: github.ref == 'refs/heads/main'
    environment: production
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Setup Expo CLI
        run: npm install -g @expo/cli eas-cli
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build and Submit to App Stores
        working-directory: ./apps/mobile
        run: |
          eas build --platform all --non-interactive
          eas submit --platform all --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
          EXPO_SUPABASE_URL: ${{ secrets.SUPABASE_URL_PROD }}
          EXPO_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY_PROD }}

  # Database Migrations
  migrate-database:
    runs-on: ubuntu-latest
    needs: deploy-edge-functions
    if: github.event_name == 'push'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1
        with:
          version: latest
      
      - name: Run migrations on Staging
        if: github.ref == 'refs/heads/develop'
        run: |
          supabase db push --project-ref ${{ secrets.SUPABASE_PROJECT_REF_STAGING }}
      
      - name: Run migrations on Production
        if: github.ref == 'refs/heads/main'
        run: |
          supabase db push --project-ref ${{ secrets.SUPABASE_PROJECT_REF_PROD }}

  # End-to-End Testing
  e2e-tests:
    runs-on: ubuntu-latest
    needs: [deploy-web, migrate-database]
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run E2E tests
        run: npm run test:e2e:staging
        env:
          E2E_BASE_URL: https://staging.xalesin.com
          SUPABASE_URL: ${{ secrets.SUPABASE_URL_STAGING }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY_STAGING }}

  # Performance Testing
  performance-test:
    runs-on: ubuntu-latest
    needs: e2e-tests
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run performance tests
        run: npm run test:performance:staging
        env:
          TARGET_URL: https://staging.xalesin.com
      
      - name: Upload performance results
        uses: actions/upload-artifact@v3
        with:
          name: performance-results
          path: performance-results/
```

### 4. Supabase-Focused Infrastructure Configuration
```typescript
// infrastructure/supabase-deployment.ts
import { createClient } from '@supabase/supabase-js'

export interface SupabaseDeploymentConfig {
  projects: {
    staging: {
      projectId: string
      apiUrl: string
      anonKey: string
      serviceRoleKey: string
    }
    production: {
      projectId: string
      apiUrl: string
      anonKey: string
      serviceRoleKey: string
    }
  }
  edgeFunctions: {
    runtime: 'deno'
    importMap: string
    functions: string[]
  }
  database: {
    migrations: {
      path: string
      autoApply: boolean
    }
    seeds: {
      path: string
      environments: string[]
    }
  }
  storage: {
    buckets: {
      name: string
      public: boolean
      allowedMimeTypes: string[]
      fileSizeLimit: string
    }[]
  }
  auth: {
    providers: string[]
    redirectUrls: string[]
    jwtExpiry: number
  }
  realtime: {
    enabled: boolean
    maxConnections: number
  }
}

export const supabaseConfig: SupabaseDeploymentConfig = {
  projects: {
    staging: {
      projectId: process.env.SUPABASE_STAGING_PROJECT_ID!,
      apiUrl: process.env.SUPABASE_STAGING_URL!,
      anonKey: process.env.SUPABASE_STAGING_ANON_KEY!,
      serviceRoleKey: process.env.SUPABASE_STAGING_SERVICE_ROLE_KEY!,
    },
    production: {
      projectId: process.env.SUPABASE_PRODUCTION_PROJECT_ID!,
      apiUrl: process.env.SUPABASE_PRODUCTION_URL!,
      anonKey: process.env.SUPABASE_PRODUCTION_ANON_KEY!,
      serviceRoleKey: process.env.SUPABASE_PRODUCTION_SERVICE_ROLE_KEY!,
    },
  },
  edgeFunctions: {
    runtime: 'deno',
    importMap: './import_map.json',
    functions: [
      'financial-reports',
      'inventory-sync',
      'notification-handler',
      'analytics-processor',
    ],
  },
  database: {
    migrations: {
      path: './supabase/migrations',
      autoApply: true,
    },
    seeds: {
      path: './supabase/seed.sql',
      environments: ['staging'],
    },
  },
  storage: {
    buckets: [
      {
        name: 'documents',
        public: false,
        allowedMimeTypes: ['application/pdf', 'image/*', 'text/*'],
        fileSizeLimit: '10MB',
      },
      {
        name: 'avatars',
        public: true,
        allowedMimeTypes: ['image/*'],
        fileSizeLimit: '2MB',
      },
    ],
  },
  auth: {
    providers: ['email', 'google', 'microsoft'],
    redirectUrls: [
      'http://localhost:3000/auth/callback',
      'https://xalesin-erp.vercel.app/auth/callback',
      'https://xalesin-erp.com/auth/callback',
    ],
    jwtExpiry: 3600,
  },
  realtime: {
    enabled: true,
    maxConnections: 1000,
  },
}

// Vercel deployment configuration
export interface VercelConfig {
  projectName: string
  framework: 'vite'
  buildCommand: string
  outputDirectory: string
  environmentVariables: Record<string, string>
}

export const vercelConfig: VercelConfig = {
  projectName: 'xalesin-erp-web',
  framework: 'vite',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  environmentVariables: {
    VITE_SUPABASE_URL: process.env.SUPABASE_URL!,
    VITE_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
    VITE_APP_ENV: process.env.NODE_ENV!,
  },
}

// Expo EAS configuration
export interface ExpoConfig {
  projectId: string
  buildProfile: {
    development: {
      distribution: 'internal'
      ios: { simulator: boolean }
      android: { buildType: string }
    }
    preview: {
      distribution: 'internal'
    }
    production: {
      distribution: 'store'
    }
  }
}

export const expoConfig: ExpoConfig = {
  projectId: process.env.EXPO_PROJECT_ID!,
  buildProfile: {
    development: {
      distribution: 'internal',
      ios: { simulator: true },
      android: { buildType: 'apk' },
    },
    preview: {
      distribution: 'internal',
    },
    production: {
      distribution: 'store',
    },
  },
}

# variables.tf
variable "environment" {
  description = "Environment name"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b", "us-east-1c"]
}

variable "private_subnets" {
  description = "Private subnet CIDR blocks"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "public_subnets" {
  description = "Public subnet CIDR blocks"
  type        = list(string)
  default     = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
}

variable "db_instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

variable "db_allocated_storage" {
  description = "RDS allocated storage"
  type        = number
  default     = 20
}

variable "db_username" {
  description = "RDS username"
  type        = string
  default     = "postgres"
}

variable "db_password" {
  description = "RDS password"
  type        = string
  sensitive   = true
}

variable "redis_node_type" {
  description = "ElastiCache node type"
  type        = string
  default     = "cache.t3.micro"
}

variable "redis_num_cache_nodes" {
  description = "Number of cache nodes"
  type        = number
  default     = 1
}

variable "domain_names" {
  description = "Domain names for CloudFront"
  type        = list(string)
  default     = []
}
```

### 5. Supabase Analytics & Monitoring
```typescript
// packages/core/src/monitoring/supabase-analytics.ts
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database'

export interface AnalyticsEvent {
  event_name: string
  event_data: Record<string, any>
  user_id?: string
  tenant_id?: string
  session_id?: string
  timestamp: string
  metadata?: Record<string, any>
}

export interface PerformanceMetric {
  metric_name: string
  metric_value: number
  metric_unit: string
  service_name: string
  endpoint?: string
  timestamp: string
  tags?: Record<string, string>
}

export class SupabaseAnalytics {
  private supabase: ReturnType<typeof createClient<Database>>

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient<Database>(supabaseUrl, supabaseKey)
  }

  async trackEvent(event: AnalyticsEvent): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('analytics_events')
        .insert({
          event_name: event.event_name,
          event_data: event.event_data,
          user_id: event.user_id,
          tenant_id: event.tenant_id,
          session_id: event.session_id,
          timestamp: event.timestamp,
          metadata: event.metadata,
        })

      if (error) {
        console.error('Failed to track analytics event:', error)
      }
    } catch (error) {
      console.error('Analytics tracking error:', error)
    }
  }

  async recordMetric(metric: PerformanceMetric): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('performance_metrics')
        .insert({
          metric_name: metric.metric_name,
          metric_value: metric.metric_value,
          metric_unit: metric.metric_unit,
          service_name: metric.service_name,
          endpoint: metric.endpoint,
          timestamp: metric.timestamp,
          tags: metric.tags,
        })

      if (error) {
        console.error('Failed to record performance metric:', error)
      }
    } catch (error) {
      console.error('Performance metric recording error:', error)
    }
  }

  async getMetrics(serviceName: string, timeRange: string): Promise<PerformanceMetric[]> {
    const { data, error } = await this.supabase
      .from('performance_metrics')
      .select('*')
      .eq('service_name', serviceName)
      .gte('timestamp', new Date(Date.now() - this.parseTimeRange(timeRange)).toISOString())
      .order('timestamp', { ascending: false })

    if (error) {
      console.error('Failed to fetch metrics:', error)
      return []
    }

    return data || []
  }

  private parseTimeRange(timeRange: string): number {
    const timeMap: Record<string, number> = {
      '1h': 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
    }
    return timeMap[timeRange] || timeMap['24h']
  }
}

// Real-time monitoring with Supabase Realtime
export class RealtimeMonitoring {
  private supabase: ReturnType<typeof createClient<Database>>
  private alertCallbacks: Map<string, (alert: any) => void> = new Map()

  constructor(supabaseUrl: string, supabaseKey: string) {
    this.supabase = createClient<Database>(supabaseUrl, supabaseKey)
    this.setupRealtimeSubscriptions()
  }

  private setupRealtimeSubscriptions(): void {
    // Subscribe to critical alerts
    this.supabase
      .channel('system_alerts')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'system_alerts',
          filter: 'severity=eq.critical',
        },
        (payload) => {
          this.handleCriticalAlert(payload.new)
        }
      )
      .subscribe()

    // Subscribe to performance degradation
    this.supabase
      .channel('performance_alerts')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'performance_metrics',
        },
        (payload) => {
          this.checkPerformanceThresholds(payload.new)
        }
      )
      .subscribe()
  }

  private handleCriticalAlert(alert: any): void {
    console.error('CRITICAL ALERT:', alert)
    
    // Trigger alert callbacks
    this.alertCallbacks.forEach((callback) => {
      try {
        callback(alert)
      } catch (error) {
        console.error('Alert callback error:', error)
      }
    })
  }

  private checkPerformanceThresholds(metric: any): void {
    const thresholds = {
      response_time: 2000, // 2 seconds
      error_rate: 0.05, // 5%
      database_connections: 80,
    }

    if (metric.metric_name in thresholds) {
      const threshold = thresholds[metric.metric_name as keyof typeof thresholds]
      if (metric.metric_value > threshold) {
        this.createAlert({
          type: 'performance_degradation',
          metric_name: metric.metric_name,
          current_value: metric.metric_value,
          threshold,
          severity: 'warning',
        })
      }
    }
  }

  private async createAlert(alertData: any): Promise<void> {
    await this.supabase.from('system_alerts').insert({
      alert_type: alertData.type,
      severity: alertData.severity,
      message: `${alertData.metric_name} exceeded threshold: ${alertData.current_value} > ${alertData.threshold}`,
      metadata: alertData,
      created_at: new Date().toISOString(),
    })
  }

  onAlert(id: string, callback: (alert: any) => void): void {
    this.alertCallbacks.set(id, callback)
  }

  removeAlertListener(id: string): void {
    this.alertCallbacks.delete(id)
  }
}
```

### 6. Supabase Logging & Error Tracking
```typescript
// packages/core/src/utils/supabase-logger.ts
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database'

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error' | 'fatal'
  message: string
  service: string
  user_id?: string
  tenant_id?: string
  request_id?: string
  session_id?: string
  duration?: number
  status_code?: number
  user_agent?: string
  ip_address?: string
  stack_trace?: string
  metadata?: Record<string, any>
  timestamp: string
}

export interface ErrorReport {
  error_type: string
  error_message: string
  stack_trace?: string
  service: string
  endpoint?: string
  user_id?: string
  tenant_id?: string
  request_id?: string
  user_agent?: string
  ip_address?: string
  metadata?: Record<string, any>
  timestamp: string
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export class SupabaseLogger {
  private supabase: ReturnType<typeof createClient<Database>>
  private serviceName: string
  private logLevel: string
  private batchSize: number = 100
  private batchTimeout: number = 5000
  private logBatch: LogEntry[] = []
  private batchTimer?: NodeJS.Timeout

  constructor(
    supabaseUrl: string,
    supabaseKey: string,
    serviceName: string,
    logLevel: string = 'info'
  ) {
    this.supabase = createClient<Database>(supabaseUrl, supabaseKey)
    this.serviceName = serviceName
    this.logLevel = logLevel
    this.setupBatchProcessing()
  }

  private setupBatchProcessing(): void {
    this.batchTimer = setInterval(() => {
      this.flushLogs()
    }, this.batchTimeout)

    // Flush logs on process exit
    process.on('beforeExit', () => {
      this.flushLogs()
    })
  }

  private shouldLog(level: string): boolean {
    const levels = ['debug', 'info', 'warn', 'error', 'fatal']
    const currentLevelIndex = levels.indexOf(this.logLevel)
    const messageLevelIndex = levels.indexOf(level)
    return messageLevelIndex >= currentLevelIndex
  }

  private addToLogBatch(logEntry: LogEntry): void {
    this.logBatch.push(logEntry)

    if (this.logBatch.length >= this.batchSize) {
      this.flushLogs()
    }
  }

  private async flushLogs(): Promise<void> {
    if (this.logBatch.length === 0) return

    const logsToFlush = [...this.logBatch]
    this.logBatch = []

    try {
      const { error } = await this.supabase
        .from('application_logs')
        .insert(logsToFlush)

      if (error) {
        console.error('Failed to flush logs to Supabase:', error)
        // Re-add logs to batch for retry
        this.logBatch.unshift(...logsToFlush)
      }
    } catch (error) {
      console.error('Error flushing logs:', error)
      // Re-add logs to batch for retry
      this.logBatch.unshift(...logsToFlush)
    }
  }

  debug(message: string, metadata?: Record<string, any>): void {
    this.log('debug', message, metadata)
  }

  info(message: string, metadata?: Record<string, any>): void {
    this.log('info', message, metadata)
  }

  warn(message: string, metadata?: Record<string, any>): void {
    this.log('warn', message, metadata)
  }

  error(message: string, error?: Error, metadata?: Record<string, any>): void {
    const logMetadata = {
      ...metadata,
      stack_trace: error?.stack,
    }
    this.log('error', message, logMetadata)
  }

  fatal(message: string, error?: Error, metadata?: Record<string, any>): void {
    const logMetadata = {
      ...metadata,
      stack_trace: error?.stack,
    }
    this.log('fatal', message, logMetadata)
  }

  private log(level: LogEntry['level'], message: string, metadata?: Record<string, any>): void {
    if (!this.shouldLog(level)) return

    const logEntry: LogEntry = {
      level,
      message,
      service: this.serviceName,
      timestamp: new Date().toISOString(),
      metadata,
      ...this.extractContextFromMetadata(metadata),
    }

    // Console output for development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[${logEntry.timestamp}] ${level.toUpperCase()}: ${message}`, metadata)
    }

    this.addToLogBatch(logEntry)
  }

  private extractContextFromMetadata(metadata?: Record<string, any>): Partial<LogEntry> {
    if (!metadata) return {}

    return {
      user_id: metadata.userId || metadata.user_id,
      tenant_id: metadata.tenantId || metadata.tenant_id,
      request_id: metadata.requestId || metadata.request_id,
      session_id: metadata.sessionId || metadata.session_id,
      duration: metadata.duration,
      status_code: metadata.statusCode || metadata.status_code,
      user_agent: metadata.userAgent || metadata.user_agent,
      ip_address: metadata.ipAddress || metadata.ip_address,
    }
  }

  async reportError(errorReport: ErrorReport): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('error_reports')
        .insert(errorReport)

      if (error) {
        console.error('Failed to report error to Supabase:', error)
      }
    } catch (error) {
      console.error('Error reporting error:', error)
    }
  }

  async getRecentLogs(
    filters: {
      service?: string
      level?: string
      user_id?: string
      tenant_id?: string
      timeRange?: string
    } = {},
    limit: number = 100
  ): Promise<LogEntry[]> {
    let query = this.supabase
      .from('application_logs')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(limit)

    if (filters.service) {
      query = query.eq('service', filters.service)
    }

    if (filters.level) {
      query = query.eq('level', filters.level)
    }

    if (filters.user_id) {
      query = query.eq('user_id', filters.user_id)
    }

    if (filters.tenant_id) {
      query = query.eq('tenant_id', filters.tenant_id)
    }

    if (filters.timeRange) {
      const timeRangeMs = this.parseTimeRange(filters.timeRange)
      const startTime = new Date(Date.now() - timeRangeMs).toISOString()
      query = query.gte('timestamp', startTime)
    }

    const { data, error } = await query

    if (error) {
      console.error('Failed to fetch logs:', error)
      return []
    }

    return data || []
  }

  private parseTimeRange(timeRange: string): number {
    const timeMap: Record<string, number> = {
      '1h': 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
    }
    return timeMap[timeRange] || timeMap['24h']
  }

  destroy(): void {
    if (this.batchTimer) {
      clearInterval(this.batchTimer)
    }
    this.flushLogs()
  }
}

// Global logger instance
export const logger = new SupabaseLogger(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  process.env.SERVICE_NAME || 'xalesin-erp',
  process.env.LOG_LEVEL || 'info'
)

// Error boundary for React components
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.reportError({
      error_type: 'React Error Boundary',
      error_message: error.message,
      stack_trace: error.stack,
      service: 'web-app',
      metadata: {
        componentStack: errorInfo.componentStack,
        errorBoundary: true,
      },
      timestamp: new Date().toISOString(),
      severity: 'high',
    })
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>We've been notified of this error and are working to fix it.</p>
        </div>
      )
    }

    return this.props.children
  }
}

// Request logging middleware
export const requestLogger = (req: any, res: any, next: any) => {
  const start = Date.now()
  const requestId = req.headers['x-request-id'] || generateRequestId()
  
  req.requestId = requestId
  req.logger = logger.child({ requestId })
  
  res.on('finish', () => {
    const duration = Date.now() - start
    
    logger.info('HTTP Request', {
      requestId,
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
      userId: req.user?.id,
      tenantId: req.user?.tenant_id
    })
  })
  
  next()
}

function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

// MCP Deployment Script
interface DeploymentConfig {
  supabaseUrl: string
  supabaseServiceKey: string
  projectId: string
  environment: 'staging' | 'production'
  vercelToken?: string
  expoToken?: string
}

class MCPDeployer {
  private supabase: any
  private config: DeploymentConfig

  constructor(config: DeploymentConfig) {
    this.config = config
    this.supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
  }

  async deployEdgeFunctions(): Promise<void> {
    console.log('🚀 Deploying Edge Functions...')
    
    try {
      // Deploy all Edge Functions
      execSync('supabase functions deploy --project-ref ' + this.config.projectId, {
        stdio: 'inherit',
        cwd: process.cwd()
      })
      
      console.log('✅ Edge Functions deployed successfully')
    } catch (error) {
      console.error('❌ Edge Functions deployment failed:', error)
      throw error
    }
  }

  async runMigrations(): Promise<void> {
    console.log('🔄 Running database migrations...')
    
    try {
      execSync('supabase db push --project-ref ' + this.config.projectId, {
        stdio: 'inherit',
        cwd: process.cwd()
      })
      
      console.log('✅ Database migrations completed')
    } catch (error) {
      console.error('❌ Database migrations failed:', error)
      throw error
    }
  }

  async healthCheck(): Promise<void> {
    console.log('🏥 Running health checks...')
    
    try {
      // Check Supabase connection
      const { data, error } = await this.supabase
        .from('health_check')
        .select('*')
        .limit(1)
      
      if (error) {
        throw new Error(`Supabase health check failed: ${error.message}`)
      }
      
      console.log('✅ All health checks passed')
    } catch (error) {
      console.error('❌ Health check failed:', error)
      throw error
    }
  }

  async deploy(): Promise<void> {
    console.log(`🚀 Starting MCP deployment for ${this.config.environment}...`)
    
    try {
      await this.runMigrations()
      await this.deployEdgeFunctions()
      await this.healthCheck()
      
      console.log('🎉 Deployment completed successfully!')
    } catch (error) {
      console.error('💥 Deployment failed:', error)
      process.exit(1)
    }
  }
}
```

### 11. Supabase Backup and Disaster Recovery
```typescript
// scripts/supabase-backup.ts
import { createClient } from '@supabase/supabase-js'
import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

interface BackupConfig {
  supabaseUrl: string
  supabaseServiceKey: string
  projectId: string
  environment: 'staging' | 'production'
  backupBucket: string
}

class SupabaseBackupManager {
  private supabase: any
  private config: BackupConfig

  constructor(config: BackupConfig) {
    this.config = config
    this.supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
  }

  async createDatabaseBackup(): Promise<string> {
    console.log('📦 Creating database backup...')
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupName = `xalesin-${this.config.environment}-${timestamp}`
    
    try {
      // Create database backup using Supabase CLI
      execSync(`supabase db dump --project-ref ${this.config.projectId} --file ${backupName}.sql`, {
        stdio: 'inherit'
      })
      
      // Compress backup
      execSync(`gzip ${backupName}.sql`)
      
      console.log(`✅ Database backup created: ${backupName}.sql.gz`)
      return `${backupName}.sql.gz`
    } catch (error) {
      console.error('❌ Database backup failed:', error)
      throw error
    }
  }

  async backupStorageFiles(): Promise<void> {
    console.log('📁 Backing up storage files...')
    
    try {
      const { data: buckets, error } = await this.supabase.storage.listBuckets()
      
      if (error) throw error
      
      for (const bucket of buckets) {
        console.log(`Backing up bucket: ${bucket.name}`)
        
        const { data: files, error: listError } = await this.supabase.storage
          .from(bucket.name)
          .list('', { limit: 1000 })
        
        if (listError) {
          console.warn(`Warning: Could not list files in bucket ${bucket.name}:`, listError)
          continue
        }
        
        // Create backup manifest for this bucket
        const manifest = {
          bucket: bucket.name,
          files: files?.map(file => ({
            name: file.name,
            size: file.metadata?.size,
            lastModified: file.updated_at
          })) || [],
          timestamp: new Date().toISOString()
        }
        
        fs.writeFileSync(`backup-${bucket.name}-manifest.json`, JSON.stringify(manifest, null, 2))
      }
      
      console.log('✅ Storage backup manifests created')
    } catch (error) {
      console.error('❌ Storage backup failed:', error)
      throw error
    }
  }

  async createFullBackup(): Promise<void> {
    console.log(`🚀 Starting full backup for ${this.config.environment}...`)
    
    try {
      const dbBackupFile = await this.createDatabaseBackup()
      await this.backupStorageFiles()
      
      // Create backup metadata
      const metadata = {
        environment: this.config.environment,
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0',
        components: {
          database: dbBackupFile,
          storage: 'storage-manifests'
        }
      }
      
      fs.writeFileSync('backup-metadata.json', JSON.stringify(metadata, null, 2))
      
      console.log('🎉 Full backup completed successfully!')
    } catch (error) {
      console.error('💥 Backup failed:', error)
      throw error
    }
  }

  async restoreDatabase(backupFile: string): Promise<void> {
    console.log(`🔄 Restoring database from ${backupFile}...`)
    
    try {
      // Decompress if needed
      if (backupFile.endsWith('.gz')) {
        execSync(`gunzip ${backupFile}`)
        backupFile = backupFile.replace('.gz', '')
      }
      
      // Restore database using Supabase CLI
      execSync(`supabase db reset --project-ref ${this.config.projectId}`, {
        stdio: 'inherit'
      })
      
      execSync(`psql "${process.env.DATABASE_URL}" < ${backupFile}`, {
        stdio: 'inherit'
      })
      
      console.log('✅ Database restored successfully')
    } catch (error) {
      console.error('❌ Database restore failed:', error)
      throw error
    }
  }
}

// Usage
if (require.main === module) {
  const config: BackupConfig = {
    supabaseUrl: process.env.SUPABASE_URL!,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    projectId: process.env.SUPABASE_PROJECT_ID!,
    environment: (process.env.ENVIRONMENT as 'staging' | 'production') || 'staging',
    backupBucket: `xalesin-${process.env.ENVIRONMENT}-backups`
  }
  
  const backupManager = new SupabaseBackupManager(config)
  
  const command = process.argv[2]
  
  if (command === 'backup') {
    backupManager.createFullBackup()
  } else if (command === 'restore' && process.argv[3]) {
    backupManager.restoreDatabase(process.argv[3])
  } else {
    console.log('Usage: npm run backup:create or npm run backup:restore <file>')
  }
}
```

### 12. Serverless Deployment Scripts
```typescript
// scripts/serverless-deploy.ts
import { createClient } from '@supabase/supabase-js'
import { execSync } from 'child_process'
import fetch from 'node-fetch'

interface ServerlessDeployConfig {
  environment: 'staging' | 'production'
  supabaseUrl: string
  supabaseServiceKey: string
  projectId: string
  vercelToken?: string
  expoToken?: string
  slackWebhook?: string
}

class ServerlessDeployer {
  private config: ServerlessDeployConfig
  private supabase: any

  constructor(config: ServerlessDeployConfig) {
    this.config = config
    this.supabase = createClient(config.supabaseUrl, config.supabaseServiceKey)
  }

  async deploySupabaseServices(): Promise<void> {
    console.log('🚀 Deploying Supabase services...')
    
    try {
      // Deploy Edge Functions
      console.log('Deploying Edge Functions...')
      execSync(`supabase functions deploy --project-ref ${this.config.projectId}`, {
        stdio: 'inherit'
      })
      
      // Run database migrations
      console.log('Running database migrations...')
      execSync(`supabase db push --project-ref ${this.config.projectId}`, {
        stdio: 'inherit'
      })
      
      // Update storage policies if needed
      console.log('Updating storage policies...')
      await this.updateStoragePolicies()
      
      console.log('✅ Supabase services deployed successfully')
    } catch (error) {
      console.error('❌ Supabase deployment failed:', error)
      throw error
    }
  }

  async deployWebApplication(): Promise<void> {
    console.log('🌐 Deploying web application to Vercel...')
    
    if (!this.config.vercelToken) {
      console.log('⚠️ Vercel token not provided, skipping web deployment')
      return
    }
    
    try {
      const deploymentEnv = this.config.environment === 'production' ? '--prod' : ''
      
      execSync(`vercel ${deploymentEnv} --token ${this.config.vercelToken} --yes`, {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), 'apps/web'),
        env: {
          ...process.env,
          NEXT_PUBLIC_SUPABASE_URL: this.config.supabaseUrl,
          NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
          NEXT_PUBLIC_ENVIRONMENT: this.config.environment
        }
      })
      
      console.log('✅ Web application deployed successfully')
    } catch (error) {
      console.error('❌ Web deployment failed:', error)
      throw error
    }
  }

  async deployMobileApplication(): Promise<void> {
    console.log('📱 Building mobile application with Expo EAS...')
    
    if (!this.config.expoToken) {
      console.log('⚠️ Expo token not provided, skipping mobile deployment')
      return
    }
    
    try {
      const buildProfile = this.config.environment === 'production' ? 'production' : 'preview'
      
      execSync(`eas build --platform all --profile ${buildProfile} --non-interactive`, {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), 'apps/mobile'),
        env: {
          ...process.env,
          EXPO_TOKEN: this.config.expoToken,
          EXPO_PUBLIC_SUPABASE_URL: this.config.supabaseUrl,
          EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
          EXPO_PUBLIC_ENVIRONMENT: this.config.environment
        }
      })
      
      console.log('✅ Mobile application built successfully')
    } catch (error) {
      console.error('❌ Mobile deployment failed:', error)
      throw error
    }
  }

  async updateStoragePolicies(): Promise<void> {
    // Update RLS policies for storage buckets
    const policies = [
      {
        bucket: 'avatars',
        policy: 'Users can upload their own avatars',
        definition: 'auth.uid()::text = (storage.foldername(name))[1]'
      },
      {
        bucket: 'documents',
        policy: 'Users can access their tenant documents',
        definition: 'auth.jwt() ->> \'tenant_id\' = (storage.foldername(name))[1]'
      }
    ]
    
    for (const policy of policies) {
      try {
        await this.supabase.rpc('create_storage_policy', {
          bucket_name: policy.bucket,
          policy_name: policy.policy,
          definition: policy.definition
        })
      } catch (error) {
        console.warn(`Warning: Could not update policy for ${policy.bucket}:`, error.message)
      }
    }
  }

  async runHealthChecks(): Promise<void> {
    console.log('🏥 Running post-deployment health checks...')
    
    try {
      // Check Supabase health
      const { data, error } = await this.supabase
        .from('health_check')
        .select('*')
        .limit(1)
      
      if (error) {
        throw new Error(`Supabase health check failed: ${error.message}`)
      }
      
      // Check Edge Functions
      const healthResponse = await fetch(`${this.config.supabaseUrl}/functions/v1/health-check`, {
        headers: {
          'Authorization': `Bearer ${this.config.supabaseServiceKey}`
        }
      })
      
      if (!healthResponse.ok) {
        throw new Error(`Edge Function health check failed: ${healthResponse.statusText}`)
      }
      
      console.log('✅ All health checks passed')
    } catch (error) {
      console.error('❌ Health checks failed:', error)
      throw error
    }
  }

  async sendNotification(success: boolean, error?: Error): Promise<void> {
    if (!this.config.slackWebhook) return
    
    const message = success
      ? `🚀 Xalesin ERP deployed to ${this.config.environment} successfully!`
      : `💥 Deployment to ${this.config.environment} failed: ${error?.message}`
    
    try {
      await fetch(this.config.slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message })
      })
    } catch (notificationError) {
      console.warn('Warning: Could not send notification:', notificationError)
    }
  }

  async deploy(): Promise<void> {
    console.log(`🚀 Starting serverless deployment for ${this.config.environment}...`)
    
    try {
      await this.deploySupabaseServices()
      await this.deployWebApplication()
      await this.deployMobileApplication()
      await this.runHealthChecks()
      
      console.log('🎉 Serverless deployment completed successfully!')
      await this.sendNotification(true)
    } catch (error) {
      console.error('💥 Deployment failed:', error)
      await this.sendNotification(false, error)
      process.exit(1)
    }
  }
}

// Usage
if (require.main === module) {
  const config: ServerlessDeployConfig = {
    environment: (process.env.ENVIRONMENT as 'staging' | 'production') || 'staging',
    supabaseUrl: process.env.SUPABASE_URL!,
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    projectId: process.env.SUPABASE_PROJECT_ID!,
    vercelToken: process.env.VERCEL_TOKEN,
    expoToken: process.env.EXPO_TOKEN,
    slackWebhook: process.env.SLACK_WEBHOOK_URL
  }
  
  const deployer = new ServerlessDeployer(config)
  deployer.deploy()
}
```

## ✅ Acceptance Criteria
- [ ] Supabase Edge Functions deploy successfully
- [ ] Database migrations run automatically
- [ ] Web application deploys to Vercel
- [ ] Mobile application builds with Expo EAS
- [ ] Monitoring and analytics are functional
- [ ] Logging and error tracking work correctly
- [ ] Health checks respond appropriately
- [ ] Backup and restore procedures work
- [ ] Environment variables are properly configured
- [ ] Security policies are enforced

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer
- Task 4: Universal UI Components
- Task 5: Web Application Development
- Task 6: Mobile Application Development
- Task 7: API Development & Integration
- Task 8: Testing Strategy & Quality Assurance

## 📦 Required Environment Variables
```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_PROJECT_ID=your_supabase_project_id

# Deployment Tokens
VERCEL_TOKEN=your_vercel_token
EXPO_TOKEN=your_expo_token

# Notifications
SLACK_WEBHOOK_URL=your_slack_webhook_url

# Environment
ENVIRONMENT=staging|production
NODE_ENV=development|staging|production
```
## 🛠️ Technology Stack

### Core Infrastructure
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Web Frontend**: Next.js 14 with App Router
- **Mobile**: React Native with Expo
- **Deployment**: Vercel (Web), Expo EAS (Mobile)
- **MCP Integration**: Supabase MCP Server for deployment automation

### Development Tools
- **Language**: TypeScript
- **Package Manager**: npm/yarn
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint, Prettier, Husky

### Monitoring & Analytics
- **Analytics**: Supabase Analytics
- **Error Tracking**: Supabase Error Logging
- **Performance**: Vercel Analytics
- **Real-time Monitoring**: Supabase Realtime

### Security
- **Authentication**: Supabase Auth
- **Authorization**: Row Level Security (RLS)
- **API Security**: Supabase API Gateway
- **Environment Variables**: Vercel Environment Variables

## 📊 Estimated Effort
- **Complexity**: Very High
- **Timeline**: 3-4 weeks
- **Team Size**: 2-3 DevOps Engineers
- **Prerequisites**: Supabase project setup, Vercel account, Expo account

## 🎯 Success Metrics
- **Deployment Time**: < 10 minutes for full deployment
- **Uptime**: 99.9% availability
- **Performance**: < 2s page load time
- **Scalability**: Auto-scaling based on demand
- **Security**: Zero security vulnerabilities
- **Monitoring**: 100% error tracking coverage

## 📝 Notes
- This task focuses on serverless deployment using Supabase ecosystem
- All infrastructure is managed through Supabase and cloud providers
- No traditional server management or Docker containers required
- MCP integration enables automated deployment workflows
- Environment-specific configurations ensure proper staging/production separation