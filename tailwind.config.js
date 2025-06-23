/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#E3F2FD',
  				'100': '#BBDEFB',
  				'200': '#90CAF9',
  				'300': '#64B5F6',
  				'400': '#42A5F5',
  				'500': '#2196F3',
  				'600': '#1976D2',
  				'700': '#1565C0',
  				'800': '#0D47A1',
  				'900': '#0A3D62',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#E0F7FA',
  				'100': '#B2EBF2',
  				'200': '#80DEEA',
  				'300': '#4DD0E1',
  				'400': '#26C6DA',
  				'500': '#00BCD4',
  				'600': '#00ACC1',
  				'700': '#0097A7',
  				'800': '#00838F',
  				'900': '#006064',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: {
  				'50': '#E8F5E8',
  				'100': '#C8E6C9',
  				'200': '#A5D6A7',
  				'300': '#81C784',
  				'400': '#66BB6A',
  				'500': '#4CAF50',
  				'600': '#43A047',
  				'700': '#388E3C',
  				'800': '#2E7D32',
  				'900': '#1B5E20'
  			},
  			warning: {
  				'50': '#FFF3E0',
  				'100': '#FFE0B2',
  				'200': '#FFCC80',
  				'300': '#FFB74D',
  				'400': '#FFA726',
  				'500': '#FF9800',
  				'600': '#FB8C00',
  				'700': '#F57C00',
  				'800': '#EF6C00',
  				'900': '#E65100'
  			},
  			error: {
  				'50': '#FFEBEE',
  				'100': '#FFCDD2',
  				'200': '#EF9A9A',
  				'300': '#E57373',
  				'400': '#EF5350',
  				'500': '#F44336',
  				'600': '#E53935',
  				'700': '#D32F2F',
  				'800': '#C62828',
  				'900': '#B71C1C'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.3s ease-out',
  			'pulse-subtle': 'pulseSubtle 2s infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(10px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			pulseSubtle: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.8'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};