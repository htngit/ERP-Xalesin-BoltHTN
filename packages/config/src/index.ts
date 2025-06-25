// Configuration exports for Xalesin ERP

// Database configuration
export interface DatabaseConfig {
  url: string;
  maxConnections?: number;
  ssl?: boolean;
}

// Authentication configuration
export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  refreshTokenExpiresIn: string;
  bcryptRounds: number;
}

// Application configuration
export interface AppConfig {
  name: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  port: number;
  host: string;
  corsOrigins: string[];
}

// Email configuration
export interface EmailConfig {
  provider: 'smtp' | 'sendgrid' | 'ses';
  host?: string;
  port?: number;
  secure?: boolean;
  auth?: {
    user: string;
    pass: string;
  };
  apiKey?: string;
}

// Storage configuration
export interface StorageConfig {
  provider: 'local' | 's3' | 'gcs';
  bucket?: string;
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  endpoint?: string;
}

// Main configuration interface
export interface Config {
  app: AppConfig;
  database: DatabaseConfig;
  auth: AuthConfig;
  email: EmailConfig;
  storage: StorageConfig;
}

// Default configuration values
export const defaultConfig: Partial<Config> = {
  app: {
    name: 'Xalesin ERP',
    version: '1.0.0',
    environment: 'development',
    port: 3000,
    host: 'localhost',
    corsOrigins: ['http://localhost:3000', 'http://localhost:5173'],
  },
  auth: {
    jwtExpiresIn: '1h',
    refreshTokenExpiresIn: '7d',
    bcryptRounds: 12,
  },
  email: {
    provider: 'smtp',
    host: 'localhost',
    port: 587,
    secure: false,
  },
  storage: {
    provider: 'local',
  },
};

// Configuration validation helpers
export function validateConfig(config: Partial<Config>): string[] {
  const errors: string[] = [];

  if (!config.app?.name) {
    errors.push('App name is required');
  }

  if (!config.database?.url) {
    errors.push('Database URL is required');
  }

  if (!config.auth?.jwtSecret) {
    errors.push('JWT secret is required');
  }

  return errors;
}

// Environment variable helpers
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
}

export function getEnvVarAsNumber(key: string, defaultValue?: number): number {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }
  return parsed;
}

export function getEnvVarAsBoolean(key: string, defaultValue?: boolean): boolean {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  return value.toLowerCase() === 'true';
}

// Load configuration from environment
export function loadConfigFromEnv(): Config {
  return {
    app: {
      name: getEnvVar('APP_NAME', defaultConfig.app!.name),
      version: getEnvVar('APP_VERSION', defaultConfig.app!.version),
      environment: getEnvVar('NODE_ENV', defaultConfig.app!.environment) as 'development' | 'staging' | 'production',
      port: getEnvVarAsNumber('PORT', defaultConfig.app!.port),
      host: getEnvVar('HOST', defaultConfig.app!.host),
      corsOrigins: getEnvVar('CORS_ORIGINS', defaultConfig.app!.corsOrigins!.join(',')).split(','),
    },
    database: {
      url: getEnvVar('DATABASE_URL'),
      maxConnections: getEnvVarAsNumber('DATABASE_MAX_CONNECTIONS', 10),
      ssl: getEnvVarAsBoolean('DATABASE_SSL', false),
    },
    auth: {
      jwtSecret: getEnvVar('JWT_SECRET'),
      jwtExpiresIn: getEnvVar('JWT_EXPIRES_IN', defaultConfig.auth!.jwtExpiresIn!),
      refreshTokenExpiresIn: getEnvVar('REFRESH_TOKEN_EXPIRES_IN', defaultConfig.auth!.refreshTokenExpiresIn!),
      bcryptRounds: getEnvVarAsNumber('BCRYPT_ROUNDS', defaultConfig.auth!.bcryptRounds!),
    },
    email: {
      provider: getEnvVar('EMAIL_PROVIDER', defaultConfig.email!.provider!) as 'smtp' | 'sendgrid' | 'ses',
      host: getEnvVar('EMAIL_HOST', defaultConfig.email!.host),
      port: getEnvVarAsNumber('EMAIL_PORT', defaultConfig.email!.port!),
      secure: getEnvVarAsBoolean('EMAIL_SECURE', defaultConfig.email!.secure!),
      auth: {
        user: getEnvVar('EMAIL_USER', ''),
        pass: getEnvVar('EMAIL_PASS', ''),
      },
      apiKey: getEnvVar('EMAIL_API_KEY', ''),
    },
    storage: {
      provider: getEnvVar('STORAGE_PROVIDER', defaultConfig.storage!.provider!) as 'local' | 's3' | 'gcs',
      bucket: getEnvVar('STORAGE_BUCKET', ''),
      region: getEnvVar('STORAGE_REGION', ''),
      accessKeyId: getEnvVar('STORAGE_ACCESS_KEY_ID', ''),
      secretAccessKey: getEnvVar('STORAGE_SECRET_ACCESS_KEY', ''),
      endpoint: getEnvVar('STORAGE_ENDPOINT', ''),
    },
  };
}