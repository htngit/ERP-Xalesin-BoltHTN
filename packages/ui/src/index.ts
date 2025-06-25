/**
 * Xalesin ERP UI Package
 * Main entry point for all UI components, hooks, utilities, and types
 */

// Core components
export * from './components'

// Custom hooks
export * from './hooks'

// Utility functions
export * from './utils'

// Type definitions
export * from './types'

// Re-export Tamagui core for convenience
export {
  TamaguiProvider,
  Theme,
  createTamagui,
  styled,
  withStaticProperties,
  type TamaguiConfig,
  type ThemeTokens,
  type SizeTokens,
  type ColorTokens,
  type SpaceTokens,
  type RadiusTokens,
  type ZIndexTokens,
  type FontTokens,
} from '@tamagui/core'

// Re-export animations
export {
  AnimatePresence,
  type AnimationDriver,
} from '@tamagui/animations-react-native'

// Re-export common Tamagui components that we use frequently
export {
  View,
  Text,
  ScrollView,
  Stack,
  XStack,
  YStack,
  ZStack,
  Spacer,
  Separator,
  Image,
  Circle,
  Square,
  type ViewProps,
  type TextProps,
  type ScrollViewProps,
  type StackProps,
  type XStackProps,
  type YStackProps,
  type ZStackProps,
  type SpacerProps,
  type SeparatorProps,
  type ImageProps,
  type CircleProps,
  type SquareProps,
} from '@tamagui/core'

// Re-export Lucide icons for convenience
export {
  // Navigation icons
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  Home,
  
  // Action icons
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Copy,
  Share,
  Print,
  Refresh,
  Search,
  Filter,
  Sort,
  
  // Status icons
  Check,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  XCircle,
  Clock,
  Calendar,
  
  // Business icons
  Users,
  User,
  Building,
  Package,
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  
  // File icons
  File,
  FileText,
  Image as ImageIcon,
  Paperclip,
  
  // Settings icons
  Settings,
  Cog,
  Sliders,
  
  // Communication icons
  Mail,
  Phone,
  MessageSquare,
  
  // Visibility icons
  Eye,
  EyeOff,
  
  // Loading icon
  Loader2,
  
  // More icons
  MoreHorizontal,
  MoreVertical,
  
  // External link
  ExternalLink,
  
  // Lock icons
  Lock,
  Unlock,
  
  // Star icons
  Star,
  
  // Heart icon
  Heart,
  
  // Bell icon
  Bell,
  
  // Help icon
  HelpCircle,
  
  // Bookmark icon
  Bookmark,
  
  // Tag icon
  Tag,
  
  // Globe icon
  Globe,
  
  // Map icon
  MapPin,
  
  // Camera icon
  Camera,
  
  // Video icon
  Video,
  
  // Music icon
  Music,
  
  // Wifi icon
  Wifi,
  
  // Battery icon
  Battery,
  
  // Shield icon
  Shield,
  
  // Key icon
  Key,
  
  // Database icon
  Database,
  
  // Server icon
  Server,
  
  // Cloud icon
  Cloud,
  
  // Zap icon
  Zap,
  
  // Activity icon
  Activity,
  
  // Layers icon
  Layers,
  
  // Grid icon
  Grid3X3,
  
  // List icon
  List,
  
  // Layout icon
  Layout,
  
  // Maximize icon
  Maximize,
  
  // Minimize icon
  Minimize,
  
  // Move icon
  Move,
  
  // Rotate icon
  RotateCw,
  
  // Scissors icon
  Scissors,
  
  // Type icon
  Type,
  
  // Underline icon
  Underline,
  
  // Bold icon
  Bold,
  
  // Italic icon
  Italic,
  
  // Link icon
  Link,
  
  // Unlink icon
  Unlink,
  
  // Code icon
  Code,
  
  // Terminal icon
  Terminal,
  
  // Monitor icon
  Monitor,
  
  // Smartphone icon
  Smartphone,
  
  // Tablet icon
  Tablet,
  
  // Laptop icon
  Laptop,
  
  // Headphones icon
  Headphones,
  
  // Volume icons
  Volume2,
  VolumeX,
  
  // Play icons
  Play,
  Pause,
  Square as StopIcon,
  
  // Skip icons
  SkipBack,
  SkipForward,
  
  // Repeat icon
  Repeat,
  
  // Shuffle icon
  Shuffle,
  
  // Mic icon
  Mic,
  
  // MicOff icon
  MicOff,
  
  // Flag icon
  Flag,
  
  // Award icon
  Award,
  
  // Gift icon
  Gift,
  
  // Coffee icon
  Coffee,
  
  // Sun icon
  Sun,
  
  // Moon icon
  Moon,
  
  // Umbrella icon
  Umbrella,
  
  // Thermometer icon
  Thermometer,
  
  // Wind icon
  Wind,
  
  // Droplets icon
  Droplets,
  
  // Flame icon
  Flame,
  
  // Snowflake icon
  Snowflake,
  
  // Mountain icon
  Mountain,
  
  // Tree icon
  TreePine,
  
  // Flower icon
  Flower,
  
  // Bug icon
  Bug,
  
  // Fish icon
  Fish,
  
  // Bird icon
  Bird,
  
  // Cat icon
  Cat,
  
  // Dog icon
  Dog,
  
  // Rabbit icon
  Rabbit,
  
  // Turtle icon
  Turtle,
  
  // Car icon
  Car,
  
  // Truck icon
  Truck,
  
  // Plane icon
  Plane,
  
  // Train icon
  Train,
  
  // Ship icon
  Ship,
  
  // Bike icon
  Bike,
  
  // Bus icon
  Bus,
  
  // Fuel icon
  Fuel,
  
  // Navigation icon
  Navigation,
  
  // Compass icon
  Compass,
  
  // Map icon
  Map,
  
  // Route icon
  Route,
  
  // Signpost icon
  Signpost,
  
  // Milestone icon
  Milestone,
  
  // Construction icon
  Construction,
  
  // Hammer icon
  Hammer,
  
  // Wrench icon
  Wrench,
  
  // Screwdriver icon
  Screwdriver,
  
  // Paintbrush icon
  Paintbrush,
  
  // Palette icon
  Palette,
  
  // Pipette icon
  Pipette,
  
  // Ruler icon
  Ruler,
  
  // Calculator icon
  Calculator,
  
  // Abacus icon
  Calculator as AbacusIcon,
  
  // Scale icon
  Scale,
  
  // Timer icon
  Timer,
  
  // Stopwatch icon
  Timer as StopwatchIcon,
  
  // Hourglass icon
  Hourglass,
  
  // Alarm icon
  AlarmClock,
  
  // Watch icon
  Watch,
  
  // Clock icon
  Clock as ClockIcon,
} from 'lucide-react-native'