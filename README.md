# Xalesin ERP - Enterprise Resource Planning System

## 🚀 Overview

Xalesin ERP is a modern, full-stack Enterprise Resource Planning system built with cutting-edge technologies. It features a monorepo architecture with shared components, type-safe APIs, and cross-platform compatibility.

## 🏗️ Architecture

### Monorepo Structure
```
xalesin-erp/
├── apps/
│   └── web/                 # React + Vite web application
├── packages/
│   ├── core/               # Shared business logic & API
│   ├── ui/                 # Tamagui UI component library
│   ├── config/             # Shared configurations
│   └── eslint-config/      # ESLint configuration
├── tools/                  # Development tools & scripts
└── docs/                   # Documentation
```

### Technology Stack

#### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **Tamagui** - Universal UI components for web and mobile

#### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Supabase Auth** - Authentication and authorization
- **Row Level Security (RLS)** - Database-level security

#### Development Tools
- **Turborepo** - Monorepo build system
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting

#### Utilities
- **Zod** - Schema validation
- **React Hook Form** - Form management
- **Date-fns** - Date manipulation
- **Lucide React** - Icon library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd xalesin-erp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📦 Available Scripts

### Root Level Commands
- `npm run dev` - Start all development servers
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run all tests
- `npm run clean` - Clean all build artifacts

### Package-Specific Commands
- `npm run dev:web` - Start web app only
- `npm run build:web` - Build web app only
- `npm run dev:core` - Develop core package
- `npm run dev:ui` - Develop UI package

## 🏢 Core Modules

### Financial Management
- General Ledger
- Accounts Payable/Receivable
- Invoicing & Billing
- Financial Reporting
- Multi-currency Support

### Party Management
- Customer Relationship Management (CRM)
- Supplier Management
- Employee Management
- Contact Management

### Document Management
- Document Storage
- Version Control
- Access Control
- Audit Trail

### Multi-tenancy
- Organization-based isolation
- Role-based access control (RBAC)
- Tenant-specific configurations

## 🔧 Development

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write tests for new features
- Use conventional commit messages

### Git Workflow
1. Create feature branch from `main`
2. Make changes with descriptive commits
3. Run tests and linting
4. Create pull request
5. Code review and merge

### Adding New Packages
1. Create package directory in `packages/`
2. Add `package.json` with workspace configuration
3. Add TypeScript configuration
4. Update root `tsconfig.json` references
5. Add to Turborepo pipeline if needed

## 🧪 Testing

### Testing Strategy
- **Unit Tests** - Individual component/function testing
- **Integration Tests** - API and database integration
- **E2E Tests** - Full user workflow testing
- **Performance Tests** - Load and stress testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Environment Setup
1. **Development** - Local development with Supabase local
2. **Staging** - Supabase staging environment
3. **Production** - Supabase production environment

### Deployment Process
1. Build all packages: `npm run build`
2. Run tests: `npm run test`
3. Deploy to Vercel/Netlify (web app)
4. Deploy Supabase functions and migrations

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Component Library](./docs/components.md)
- [Database Schema](./docs/database.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guide](./docs/contributing.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@xalesin.com or join our Slack channel.

## 🗺️ Roadmap

- [ ] Phase 1: Core Infrastructure & Database
- [ ] Phase 2: Business Logic Layer
- [ ] Phase 3: UI Component Library
- [ ] Phase 4: Web Application
- [ ] Phase 5: Mobile Application
- [ ] Phase 6: Authentication & Security
- [ ] Phase 7: Testing Framework
- [ ] Phase 8: DevOps & Deployment
- [ ] Phase 9: Performance Optimization
- [ ] Phase 10: Advanced Features

---

**Built with ❤️ by the Xalesin Team**