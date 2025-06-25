/**
 * Core types index for Xalesin ERP
 * Exports all type definitions
 */

// Database types
export * from './database'

// Business logic types
export * from './business'

// API types
export * from './api'

// Re-export commonly used external types
export type { Decimal } from 'decimal.js'
export type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Utility types
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}
export type Nullable<T> = T | null
export type NonNullable<T> = T extends null | undefined ? never : T
export type ValueOf<T> = T[keyof T]
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

/**
 * Entity operation types
 */
export type EntityOperation = 'create' | 'read' | 'update' | 'delete'
export type EntityPermission = `${string}:${EntityOperation}`

/**
 * Event types
 */
export interface DomainEvent<T = any> {
  id: string
  type: string
  aggregateId: string
  aggregateType: string
  version: number
  data: T
  metadata: {
    timestamp: Date
    userId?: string
    tenantId: string
    correlationId?: string
    causationId?: string
  }
}

export interface EventHandler<T = any> {
  handle(event: DomainEvent<T>): Promise<void>
}

/**
 * Command types
 */
export interface Command<T = any> {
  id: string
  type: string
  data: T
  metadata: {
    timestamp: Date
    userId?: string
    tenantId: string
    correlationId?: string
  }
}

export interface CommandHandler<T = any, R = any> {
  handle(command: Command<T>): Promise<R>
}

/**
 * Query types
 */
export interface Query<T = any> {
  id: string
  type: string
  data: T
  metadata: {
    timestamp: Date
    userId?: string
    tenantId: string
  }
}

export interface QueryHandler<T = any, R = any> {
  handle(query: Query<T>): Promise<R>
}

/**
 * Repository types
 */
export interface Repository<T, ID = string> {
  findById(id: ID): Promise<T | null>
  findAll(params?: SearchParams): Promise<PaginationResult<T>>
  create(entity: Omit<T, 'id' | 'created_at' | 'updated_at'>): Promise<T>
  update(id: ID, updates: Partial<T>): Promise<T>
  delete(id: ID): Promise<boolean>
  exists(id: ID): Promise<boolean>
  count(filters?: FilterParams[]): Promise<number>
}

/**
 * Service types
 */
export interface Service {
  readonly name: string
}

export interface DomainService extends Service {
  // Domain-specific business logic
}

export interface ApplicationService extends Service {
  // Application orchestration logic
}

export interface InfrastructureService extends Service {
  // Infrastructure concerns
}

/**
 * Value object types
 */
export interface ValueObject<T> {
  equals(other: T): boolean
  toString(): string
}

/**
 * Entity types
 */
export interface Entity<ID = string> {
  readonly id: ID
  equals(other: Entity<ID>): boolean
}

export interface AggregateRoot<ID = string> extends Entity<ID> {
  readonly version: number
  getUncommittedEvents(): DomainEvent[]
  markEventsAsCommitted(): void
  loadFromHistory(events: DomainEvent[]): void
}

/**
 * Specification types
 */
export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean
  and(other: Specification<T>): Specification<T>
  or(other: Specification<T>): Specification<T>
  not(): Specification<T>
}

/**
 * Factory types
 */
export interface Factory<T, Args extends any[] = any[]> {
  create(...args: Args): T
}

/**
 * Builder types
 */
export interface Builder<T> {
  build(): T
  reset(): Builder<T>
}

/**
 * Strategy types
 */
export interface Strategy<T, R> {
  execute(context: T): R
}

/**
 * Observer types
 */
export interface Observer<T> {
  update(data: T): void
}

export interface Observable<T> {
  subscribe(observer: Observer<T>): void
  unsubscribe(observer: Observer<T>): void
  notify(data: T): void
}

/**
 * State machine types
 */
export interface State<T> {
  name: string
  canTransitionTo(state: string): boolean
  enter(context: T): void
  exit(context: T): void
}

export interface StateMachine<T> {
  currentState: State<T>
  transitionTo(stateName: string, context: T): void
  canTransitionTo(stateName: string): boolean
}

/**
 * Cache types
 */
export interface Cache<K, V> {
  get(key: K): Promise<V | null>
  set(key: K, value: V, ttl?: number): Promise<void>
  delete(key: K): Promise<boolean>
  clear(): Promise<void>
  has(key: K): Promise<boolean>
  keys(): Promise<K[]>
  size(): Promise<number>
}

/**
 * Lock types
 */
export interface Lock {
  acquire(key: string, ttl?: number): Promise<boolean>
  release(key: string): Promise<boolean>
  extend(key: string, ttl: number): Promise<boolean>
  isLocked(key: string): Promise<boolean>
}

/**
 * Queue types
 */
export interface Queue<T> {
  enqueue(item: T, priority?: number): Promise<void>
  dequeue(): Promise<T | null>
  peek(): Promise<T | null>
  size(): Promise<number>
  isEmpty(): Promise<boolean>
  clear(): Promise<void>
}

/**
 * Middleware types
 */
export interface Middleware<T, R> {
  execute(context: T, next: () => Promise<R>): Promise<R>
}

export interface MiddlewareChain<T, R> {
  use(middleware: Middleware<T, R>): MiddlewareChain<T, R>
  execute(context: T): Promise<R>
}

/**
 * Plugin types
 */
export interface Plugin {
  name: string
  version: string
  install(app: any): void
  uninstall(app: any): void
}

/**
 * Configuration types
 */
export interface ConfigProvider {
  get<T>(key: string, defaultValue?: T): T
  set(key: string, value: any): void
  has(key: string): boolean
  getAll(): Record<string, any>
}

/**
 * Logger types
 */
export interface Logger {
  debug(message: string, meta?: any): void
  info(message: string, meta?: any): void
  warn(message: string, meta?: any): void
  error(message: string, error?: Error, meta?: any): void
  fatal(message: string, error?: Error, meta?: any): void
}

/**
 * Metrics types
 */
export interface MetricsCollector {
  increment(metric: string, value?: number, tags?: Record<string, string>): void
  decrement(metric: string, value?: number, tags?: Record<string, string>): void
  gauge(metric: string, value: number, tags?: Record<string, string>): void
  histogram(metric: string, value: number, tags?: Record<string, string>): void
  timing(metric: string, duration: number, tags?: Record<string, string>): void
}

/**
 * Health check types
 */
export interface HealthChecker {
  check(): Promise<HealthCheck>
}

export interface HealthRegistry {
  register(name: string, checker: HealthChecker): void
  unregister(name: string): void
  checkAll(): Promise<Record<string, HealthCheck>>
}

/**
 * Serialization types
 */
export interface Serializer<T> {
  serialize(data: T): string | Buffer
  deserialize(data: string | Buffer): T
}

/**
 * Validation types
 */
export interface Validator<T> {
  validate(data: T): ValidationResult
  validateAsync(data: T): Promise<ValidationResult>
}

/**
 * Encryption types
 */
export interface Encryptor {
  encrypt(data: string): Promise<string>
  decrypt(encryptedData: string): Promise<string>
  hash(data: string): Promise<string>
  verify(data: string, hash: string): Promise<boolean>
}

/**
 * File storage types
 */
export interface FileStorage {
  upload(file: Buffer, path: string, options?: any): Promise<string>
  download(path: string): Promise<Buffer>
  delete(path: string): Promise<boolean>
  exists(path: string): Promise<boolean>
  getUrl(path: string, expiresIn?: number): Promise<string>
  list(prefix?: string): Promise<string[]>
}

/**
 * Email types
 */
export interface EmailProvider {
  send(email: EmailMessage): Promise<boolean>
  sendBatch(emails: EmailMessage[]): Promise<boolean[]>
}

export interface EmailMessage {
  to: string | string[]
  from: string
  subject: string
  html?: string
  text?: string
  attachments?: {
    filename: string
    content: Buffer
    contentType: string
  }[]
}

/**
 * SMS types
 */
export interface SmsProvider {
  send(message: SmsMessage): Promise<boolean>
  sendBatch(messages: SmsMessage[]): Promise<boolean[]>
}

export interface SmsMessage {
  to: string
  from: string
  body: string
}

/**
 * Push notification types
 */
export interface PushProvider {
  send(notification: PushNotification): Promise<boolean>
  sendBatch(notifications: PushNotification[]): Promise<boolean[]>
}

export interface PushNotification {
  to: string | string[]
  title: string
  body: string
  data?: Record<string, any>
  badge?: number
  sound?: string
  icon?: string
}

/**
 * Search types
 */
export interface SearchProvider {
  index(document: SearchDocument): Promise<void>
  search(query: SearchQuery): Promise<SearchResult[]>
  delete(id: string): Promise<boolean>
  bulk(operations: SearchOperation[]): Promise<void>
}

export interface SearchDocument {
  id: string
  type: string
  title: string
  content: string
  metadata: Record<string, any>
}

export interface SearchQuery {
  query: string
  filters?: Record<string, any>
  sort?: SortParams[]
  limit?: number
  offset?: number
}

export interface SearchResult {
  id: string
  type: string
  title: string
  content: string
  score: number
  highlights?: string[]
  metadata: Record<string, any>
}

export interface SearchOperation {
  action: 'index' | 'update' | 'delete'
  document?: SearchDocument
  id?: string
}