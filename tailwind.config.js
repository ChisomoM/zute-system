/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {

          orange: '#F15A29',
        },
        secondary: {
          orange : '#172E70'
        },
        gradient: {
          from: '#D70F0E',
          to: '#E5600B',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground' : 'hsl(var(--sidebar-accent))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'myriad': ['Myriad Pro', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'outfit': ['Outfit', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'system-ui', 'monospace'],
      },
      // backgroundImage: {
      //   'orange-gradient': 'linear-gradient(to right, #D70F0E 0%, #E5600B 70%)',
      // },
      fontSize: {
        'hero-title': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-subtitle': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'section-title': ['clamp(1.875rem, 5vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'stats-number': ['clamp(2rem, 4vw, 2.25rem)', { lineHeight: '1', fontWeight: '700' }],
        'stats-label': ['clamp(0.875rem, 2vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'hero-top': '200px',
      },
    },
  },
  plugins: [],
}

