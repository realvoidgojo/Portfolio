/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-inspired grays and system colors
        system: {
          background: '#FAFAFA',
          foreground: '#1D1D1F',
          muted: '#F5F5F7',
          border: '#D2D2D7',
        },
        // Modern gradient grays
        neutral: {
          850: '#1A1A1A',
          950: '#0A0A0A',
        },
        // JetBrains-inspired accent colors
        accent: {
          blue: '#007AFF', // iOS blue
          indigo: '#5856D6',
          purple: '#AF52DE',
          pink: '#FF2D92',
          red: '#FF3B30',
          orange: '#FF9500',
          yellow: '#FFCC02',
          green: '#34C759',
          teal: '#5AC8FA',
          cyan: '#64D2FF',
        },
        // Professional gradients
        gradient: {
          primary: {
            from: '#667eea',
            to: '#764ba2',
          },
          secondary: {
            from: '#f093fb',
            to: '#f5576c',
          },
          accent: {
            from: '#4facfe',
            to: '#00f2fe',
          },
        },
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
